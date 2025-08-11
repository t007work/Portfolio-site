"use client";
import { useEffect, useRef } from "react";

export default function SoftSkills({ labels = [] }) {
  const scrollRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let scrollAmount = 0;
    const speed = 0.5; // px per frame
    let animation;

    const loop = () => {
      scrollAmount += speed;
      if (scrollAmount >= el.scrollWidth / 2) {
        scrollAmount = 0;
      }
      el.scrollLeft = scrollAmount;
      animation = requestAnimationFrame(loop);
    };
    animation = requestAnimationFrame(loop);

    return () => cancelAnimationFrame(animation);
  }, []);

  if (!labels.length) return null;

  // Duplicate labels for seamless looping
  const doubled = [...labels, ...labels];

  return (
    <div className="overflow-hidden w-full border-y border-border py-4">
      <div
        ref={scrollRef}
        className="flex gap-6 whitespace-nowrap overflow-x-hidden"
        style={{ scrollBehavior: "auto" }}
      >
        {doubled.map((label, i) => (
          <span
            key={i}
            className="inline-block rounded-full border border-border bg-surface/80 px-6 py-3 text-lg md:text-xl font-semibold tracking-tight hover:scale-105 transition-transform duration-200"
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}
