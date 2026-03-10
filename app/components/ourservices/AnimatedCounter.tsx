"use client";

import { useEffect, useRef, useState } from "react";

type CounterProps = {
  value: number;
  suffix?: string;
  duration?: number;
};

export default function AnimatedCounter({
  value,
  suffix = "",
  duration = 2000,
}: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;

          let start = 0;
          const increment = value / (duration / 16);

          const timer = setInterval(() => {
            start += increment;

            if (start >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.6 },
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}
