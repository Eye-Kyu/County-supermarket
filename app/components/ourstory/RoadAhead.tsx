"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function RoadAhead() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (contentRef.current) {
        gsap.from(Array.from(contentRef.current.children), {
          scrollTrigger: { trigger: contentRef.current, start: "top 82%" },
          y: 30,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="story_road_ahead"
      ref={sectionRef}
      className="bg-gray-50 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-16"
    >
      <div className="max-w-3xl mx-auto">
        <div ref={contentRef}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-950 leading-tight mb-4">
            Not All the Eggs. Not One Basket.
          </h2>
          <div className="w-12 h-1 bg-orange-500 mb-4" />
          <h3 className="text-base sm:text-lg text-gray-500 font-medium mb-8">
            What the last year taught us, and where we&apos;re going next.
          </h3>
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-4">
            Last year handed County a lesson we won&apos;t forget — the kind of
            year that makes a business sit down and rewrite its strategy. We
            took the notes. We are still taking them. The headline of what we
            learnt is simple: don&apos;t put all the eggs in one basket.
          </p>
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-4">
            So County is expanding — and we are still very much in the
            supermarket business; new branches and growth in that line are
            coming. But we are also diversifying into other fields, some of
            which won&apos;t look anything like a supermarket. We&apos;re not
            abandoning what built us. We&apos;re protecting it, by widening
            what stands beside it.
          </p>
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-8">
            And to the customers who stayed with us through the hurdles of the
            past year — who kept shopping, kept trusting, kept showing up —
            there isn&apos;t really a way to say thank you that&apos;s big
            enough. There is a County tomorrow because there were County
            customers yesterday. That is the whole equation.
          </p>
          <blockquote className="border-l-4 border-orange-500 pl-5 py-2 my-6">
            <p className="text-gray-700 text-base sm:text-lg italic leading-relaxed">
              &ldquo;If it were not for our customers, there would not be a
              County for the future.&rdquo;
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
