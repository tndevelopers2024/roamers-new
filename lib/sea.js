/* A live sea for the loader — one WebGL fragment shader.
   Each pixel below the horizon casts a ray onto a moving water surface: a sum of
   sharpened directional waves, lit with Fresnel sky reflection, sun glint, body
   colour and crest foam, fading into haze at the horizon.
   `horizon` (0 = bottom, 1 = top of screen) sets the waterline; lowering it sinks the sea away. */

const VERT = `
attribute vec2 aPos;
void main() { gl_Position = vec4(aPos, 0.0, 1.0); }`;

const FRAG = `
precision highp float;
uniform vec2 uRes;
uniform float uTime, uHorizon;

const vec3 HAZE   = vec3(0.749, 0.914, 0.953);   /* matches the CSS sky at the waterline */
const vec3 ZENITH = vec3(0.290, 0.725, 0.855);
const vec3 DEEP   = vec3(0.020, 0.235, 0.345);
const vec3 SHALLOW= vec3(0.035, 0.520, 0.620);
const vec3 SUN    = vec3(1.000, 0.960, 0.860);
const float H = 2.2;                              /* camera height above the water */

/* height and gradient of the sea at p; octaves fade out once they would alias */
float sea(vec2 p, float footprint, out vec2 grad) {
  float h = 0.0, a = 0.22, k = 1.5, ang = 0.4, total = 0.0;
  grad = vec2(0.0);
  for (int i = 0; i < 10; i++) {
    vec2 d = vec2(cos(ang), sin(ang));
    float lod = 1.0 - smoothstep(0.6, 2.2, footprint * k);
    float ph = dot(d, p) * k + uTime * sqrt(9.8 * k) * 0.45;
    float w = exp(sin(ph) - 1.0);                  /* sharp crests, wide troughs */
    vec2 g = w * cos(ph) * k * d;
    h += a * w * lod; grad += a * g * lod; total += a;
    p += g * a * 0.7;                              /* drag the next octave: choppy, less regular */
    a *= 0.72; k *= 1.36; ang += 2.4;
  }
  return h / total;
}

void main() {
  vec2 uv = gl_FragCoord.xy / uRes;
  float dy = uHorizon - uv.y;
  if (dy <= 0.0) { gl_FragColor = vec4(0.0); return; }

  float aspect = uRes.x / uRes.y, f = 1.15;
  vec3 dir = normalize(vec3((uv.x - 0.5) * aspect * f, -dy * f, 1.0));
  float t = H / max(-dir.y, 1e-4);
  vec3 cam = vec3(0.0, H, uTime * 0.9);
  vec3 p = cam + dir * t;
  float footprint = t * f / uRes.y / max(-dir.y, 0.02) * 2.5;

  vec2 grad;
  float h = sea(p.xz, footprint, grad);
  vec3 n = normalize(vec3(-grad.x, 1.6, -grad.y));

  float ndv = clamp(dot(n, -dir), 0.0, 1.0);
  float fres = 0.02 + 0.98 * pow(1.0 - ndv, 5.0);
  vec3 r = reflect(dir, n); r.y = abs(r.y);
  vec3 sky = mix(HAZE, ZENITH, pow(clamp(r.y, 0.0, 1.0), 0.5));
  vec3 sunDir = normalize(vec3(0.15, 0.32, 1.0));
  float s = max(dot(r, sunDir), 0.0);
  vec3 glint = SUN * (pow(s, 900.0) * 7.0 + pow(s, 80.0) * 0.28);

  vec3 body = mix(DEEP, SHALLOW, clamp(h * 1.4 - 0.05, 0.0, 1.0));
  body += SHALLOW * 0.35 * pow(clamp(h, 0.0, 1.0), 3.0) * max(dot(sunDir, -dir), 0.0);   /* light through the crests */
  vec3 col = mix(body, sky, fres) + glint;

  float near = 1.0 - smoothstep(6.0, 45.0, t);
  float foam = smoothstep(0.58, 0.85, h) * near;
  foam *= 0.55 + 0.45 * sin(p.x * 7.3 + sin(p.z * 5.1 + uTime) * 2.0) * sin(p.z * 6.7 - uTime * 0.7);
  col = mix(col, vec3(0.94, 0.98, 1.0), clamp(foam, 0.0, 1.0) * 0.75);

  col = mix(col, HAZE, pow(1.0 - exp(-t * 0.012), 1.6));   /* haze toward the horizon */

  float alpha = smoothstep(0.0, 1.5 / uRes.y, dy);
  gl_FragColor = vec4(col * alpha, alpha);
}`;

export function createSea(canvas) {
  const gl = canvas.getContext('webgl', { premultipliedAlpha: true, antialias: false, alpha: true });
  if (!gl) return null;

  const shader = (type, src) => {
    const s = gl.createShader(type);
    gl.shaderSource(s, src); gl.compileShader(s);
    return gl.getShaderParameter(s, gl.COMPILE_STATUS) ? s : null;
  };
  const vs = shader(gl.VERTEX_SHADER, VERT), fs = shader(gl.FRAGMENT_SHADER, FRAG);
  if (!vs || !fs) return null;
  const prog = gl.createProgram();
  gl.attachShader(prog, vs); gl.attachShader(prog, fs); gl.linkProgram(prog);
  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return null;
  gl.useProgram(prog);

  gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
  const aPos = gl.getAttribLocation(prog, 'aPos');
  gl.enableVertexAttribArray(aPos);
  gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

  const u = name => gl.getUniformLocation(prog, name);
  const uRes = u('uRes'), uTime = u('uTime'), uHorizon = u('uHorizon');
  const state = { horizon: 0.3 };

  // a soft, slightly lower-resolution render keeps it smooth on phones
  const resize = () => {
    const scale = Math.min(devicePixelRatio || 1, 1.5) * (innerWidth < 700 ? 0.6 : 0.75);
    canvas.width = Math.round(canvas.clientWidth * scale);
    canvas.height = Math.round(canvas.clientHeight * scale);
    gl.viewport(0, 0, canvas.width, canvas.height);
  };
  resize();
  addEventListener('resize', resize);

  const start = performance.now();
  let raf = 0;
  const frame = now => {
    gl.uniform2f(uRes, canvas.width, canvas.height);
    gl.uniform1f(uTime, (now - start) / 1000);
    gl.uniform1f(uHorizon, state.horizon);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
    raf = requestAnimationFrame(frame);
  };
  raf = requestAnimationFrame(frame);

  return {
    state,
    destroy() {
      cancelAnimationFrame(raf);
      removeEventListener('resize', resize);
      gl.getExtension('WEBGL_lose_context')?.loseContext();
    },
  };
}
