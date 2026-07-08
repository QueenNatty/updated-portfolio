"use client";

import { ReactNode } from "react";
import { useReveal } from "./useReveal";

export default function Reveal({
  as: Tag = "section",
  className = "",
  id,
  children,
}: {
  as?: "section" | "header";
  className?: string;
  id?: string;
  children: ReactNode;
}) {
  const ref = useReveal<HTMLElement>();
  return (
    <Tag id={id} className={className} ref={ref as any}>
      {children}
    </Tag>
  );
}
