/* Cursor — fine pointers only */
export default function Cursor() {
  return (
    <div className="cursor" aria-hidden="true"><span className="cursor__ring"></span><span className="cursor__label"></span></div>
  );
}
