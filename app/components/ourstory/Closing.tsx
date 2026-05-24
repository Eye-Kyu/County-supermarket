"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Closing() {
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
      id="story_closing"
      ref={sectionRef}
      className="bg-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-16"
    >
      <div className="max-w-2xl mx-auto">
        <div ref={contentRef}>
          <p className="text-xs font-semibold uppercase tracking-widest text-orange-500 mb-3">
            One More Thing
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-950 leading-tight mb-4">
            Try. Don&apos;t Stop Yourself.
          </h2>
          <div className="w-12 h-1 bg-orange-500 mb-4" />
          <h3 className="text-base sm:text-lg text-gray-500 font-medium mb-8">
            What eighteen years teaches you about trying.
          </h3>
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-4">
            If there is one thing County would say to anyone watching from the
            outside, thinking they don&apos;t have the schooling or the training
            or the right kind of start — it is this: try anyway. Some of these
            skills aren&apos;t taught. They&apos;re given. Some of them you only
            ever learn by walking into the room and figuring it out as you go.
          </p>
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-8">
            Business is a process of failing, getting up, and trying again. The
            dynamics keep shifting. The market keeps moving. Embrace that. The
            people who make it aren&apos;t always the ones with the cleanest
            plan: they&apos;re the ones who refused to stop because they
            didn&apos;t have one.
          </p>
          <blockquote className="border-l-4 border-orange-500 pl-5 py-2 my-6">
            <p className="text-gray-700 text-base sm:text-lg italic leading-relaxed">
              &ldquo;Business is changing. The dynamics are changing. Embrace
              change as it comes.&rdquo;
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
