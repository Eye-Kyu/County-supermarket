"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Heart() {
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
          stagger: 0.12,
          ease: "power2.out",
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="story_heart"
      ref={sectionRef}
      className="bg-blue-950 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-16"
    >
      <div className="max-w-3xl mx-auto text-center">
        <div ref={contentRef}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
            A Promise We Made Before There Was Anything to Promise.
          </h2>
          <div className="w-12 h-1 bg-orange-400 mb-4 mx-auto" />
          <h3 className="text-base sm:text-lg text-white/70 font-medium mb-8">
            Why we do what we do. Quietly, and without counting.
          </h3>
          <p className="text-white/80 leading-relaxed text-sm sm:text-base mb-4">
            Long before there was a supermarket, there was a prayer. The promise
            was simple: if this business is given to me, I will help children
            stay in school. I will help people in this community. That promise
            has shaped everything that came after.
          </p>
          <p className="text-white/80 leading-relaxed text-sm sm:text-base mb-8">
            Over the years, County has put students through school, not one or
            two, but more than anyone has bothered to count. We don&apos;t bring
            cameras when we do this work. We don&apos;t keep ledgers of names.
            We help, and we move on. As the business grows, so does the scope of
            what we want to give back.
          </p>
          <blockquote className="border-t border-b border-orange-400/40 py-8 my-8">
            <p className="text-white text-lg sm:text-xl italic leading-relaxed font-medium">
              &ldquo;I don&apos;t carry my camera when I&apos;m going to do CSR.
              That is something we do out of our hearts.&rdquo;
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
