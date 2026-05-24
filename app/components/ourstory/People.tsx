"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function People() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (textRef.current) {
        gsap.from(Array.from(textRef.current.children), {
          scrollTrigger: { trigger: textRef.current, start: "top 82%" },
          x: -30,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
        });
      }
      gsap.from(imageRef.current, {
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        x: 40,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="story_people"
      ref={sectionRef}
      className="bg-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-16"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* LEFT — text */}
        <div ref={textRef}>
          <p className="text-xs font-semibold uppercase tracking-widest text-orange-500 mb-3">
            Chapter Four
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-950 leading-tight mb-4">
            Staff Is Not a Department. It&apos;s the Whole Business.
          </h2>
          <div className="w-12 h-1 bg-orange-500 mb-4" />
          <h3 className="text-base sm:text-lg text-gray-500 font-medium mb-6">
            Without a team, there is no County.
          </h3>
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-4">
            County&apos;s staff are not a cost line. They are the business. Over
            the years, the company has paid school fees for employees and for
            their children and siblings. Some have travelled outside Kenya for
            the first time, courtesy of the company. Some have been educated
            through to qualifications they couldn&apos;t have afforded on their
            own.
          </p>
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-6">
            This isn&apos;t a formal programme with a budget code — it changes
            shape with what each year demands. Some seasons allow more, some
            less. But the underlying promise is steady: the people who built
            this place get a share in what it becomes.
          </p>
          <blockquote className="border-l-4 border-orange-500 pl-5 py-2 my-6">
            <p className="text-gray-700 text-base sm:text-lg italic leading-relaxed">
              &ldquo;Even if we don&apos;t have a team, how do you run the
              business? Our employees are the most important thing in our
              business.&rdquo;
            </p>
          </blockquote>
        </div>

        {/* RIGHT — image placeholder */}
        <div ref={imageRef} className="relative">
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 flex items-center justify-center shadow-lg">
            <p className="text-gray-400 text-sm italic text-center px-8">
              [Staff group photo — natural, not over-posed]
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
