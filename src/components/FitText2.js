import { useEffect, useRef } from "react";

export default function FitText2({ 
  text, 
  as: Tag = "h1", 
  className = "",
  minFontSize = 1,   // ← add this
  maxFontSize = 1000 // ← and this
}) {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const el = textRef.current;
    if (!container || !el) return;

    function fit() {
      const maxW = container.offsetWidth;
      if (!maxW) return;

      let lo = minFontSize, hi = maxFontSize, best = lo;
      while (lo <= hi) {
        const mid = (lo + hi) >> 1;
        el.style.fontSize = mid + "px";
        if (el.scrollWidth <= maxW) { best = mid; lo = mid + 1; }
        else { hi = mid - 1; }
      }
      el.style.fontSize = best + "px";
    }

    function onResize() {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(fit);
    }

    const ro = new ResizeObserver(onResize);
    ro.observe(container);
    fit();

    return () => {
      ro.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [text, minFontSize, maxFontSize]);

  return (
    <div ref={containerRef} style={{ width: "100%", overflow: "hidden" }}>
      <Tag
        ref={textRef}
        className={className}
        style={{ whiteSpace: "nowrap", display: "block", width: "max-content" }}
      >
        {text}
      </Tag>
    </div>
  );
}