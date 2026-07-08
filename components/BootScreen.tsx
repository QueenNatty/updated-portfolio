"use client";

import { useEffect, useRef, useState } from "react";

export default function BootScreen({ onDone }: { onDone: () => void }) {
  const fillRef = useRef<HTMLDivElement>(null);
  const [pct, setPct] = useState(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      setHidden(true);
      onDone();
      return;
    }

    requestAnimationFrame(() => {
      if (fillRef.current) fillRef.current.style.width = "100%";
    });

    let n = 0;
    const tick = setInterval(() => {
      n = Math.min(100, n + Math.ceil(Math.random() * 18));
      setPct(n);
      if (n >= 100) clearInterval(tick);
    }, 110);

    const timeout = setTimeout(() => {
      setHidden(true);
      onDone();
    }, 1300);

    return () => {
      clearInterval(tick);
      clearTimeout(timeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div id="boot" className={`boot${hidden ? " is-hidden" : ""}`}>
      <div className="boot__line">
        {"> initializing "}
        <span className="boot__name">portfolio.exe</span>
      </div>
      <div className="boot__bar">
        <div className="boot__fill" ref={fillRef} />
      </div>
      <div className="boot__pct">{pct}%</div>
    </div>
  );
}
