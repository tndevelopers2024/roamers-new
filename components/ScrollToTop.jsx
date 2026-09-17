/* Scroll to top floating button */
export default function ScrollToTop() {
  return (
    <a className="to-top" href="#top" aria-label="Scroll to top" data-magnetic>
      <i aria-hidden="true">↑</i>
      <span className="mono">Top</span>
    </a>
  );
}
