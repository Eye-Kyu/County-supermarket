"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 18, suffix: "+", label: "Years Serving Kenya" },
  { value: 6, suffix: "", label: "Branches" },
  { value: 50, suffix: "K+", label: "Happy Customers" },
];

export default function StatsCounter() {
  const sectionRef = useRef<HTMLElement>(null);
  const counterRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      counterRefs.current.forEach((el, i) => {
        if (!el) return;
        const obj = { value: 0 };
        gsap.to(obj, {
          value: stats[i].value,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 85%" },
          onUpdate: () => {
            el.textContent = Math.round(obj.value).toString();
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-white py-10 px-4 sm:px-6 md:px-12 lg:px-16"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-3 gap-4 py-6 border-t border-b border-gray-100">
          {stats.map((stat, i) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl sm:text-3xl font-extrabold text-blue-950">
                <span
                  ref={(el: HTMLSpanElement | null) => {
                    counterRefs.current[i] = el;
                  }}
                >
                  0
                </span>
                {stat.suffix}
              </p>
              <p className="text-xs text-gray-500 mt-1 leading-snug">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
