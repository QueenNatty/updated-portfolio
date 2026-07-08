"use client";

import { useEffect, useRef } from "react";

export default function StatBar({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  const fillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = fillRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.style.width = value + "%";
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.4 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [value]);

  return (
    <div className="stat">
      <div className="stat__label">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="stat__track">
        <div className="stat__fill" ref={fillRef} />
      </div>
    </div>
  );
}
