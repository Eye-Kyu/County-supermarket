"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Naming() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(imageRef.current, {
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        x: -40,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
      });
      if (textRef.current) {
        gsap.from(Array.from(textRef.current.children), {
          scrollTrigger: { trigger: textRef.current, start: "top 82%" },
          x: 30,
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
      id="story_naming"
      ref={sectionRef}
      className="bg-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-16"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* LEFT — image */}
        <div ref={imageRef} className="relative order-2 lg:order-1">
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/Images/Hero/Kroad3.webp"
              alt="County Supermarket signage"
              fill
              className="object-cover"
              sizes="(max-width:1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-blue-950/10" />
          </div>
        </div>

        {/* RIGHT — text */}
        <div ref={textRef} className="order-1 lg:order-2">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-950 leading-tight mb-4">
            A Name Built to Grow.
          </h2>
          <div className="w-12 h-1 bg-orange-500 mb-4" />
          <h3 className="text-base sm:text-lg text-gray-500 font-medium mb-6">
            Why &lsquo;Makomano Minimart&rsquo; had to become something bigger.
          </h3>
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-4">
            The original name — Makomano Minimart — was tied to a place. And a
            brand tied to a place can only grow so far. As the shop outgrew its
            corner, the name had to grow too. We wanted something that could
            travel — a name that wouldn&apos;t feel out of place in any town in
            Kenya.
          </p>
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-6">
            The choice arrived with its own timing. The year County was
            christened was the same year Kenya was preparing to roll out its new
            county system. A name that suggested local pride, national reach,
            and a country in the middle of reorganising itself — all at once.
            Strategy met serendipity.
          </p>
          <blockquote className="border-l-4 border-orange-500 pl-5 py-2 my-6">
            <p className="text-gray-700 text-base sm:text-lg italic leading-relaxed">
              &ldquo;We needed a name that, anywhere we went in Kenya, would be
              accepted.&rdquo;
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
