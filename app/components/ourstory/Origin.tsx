"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Origin() {
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
      id="story_origin"
      ref={sectionRef}
      className="bg-gray-50 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-16"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* LEFT — text */}
        <div ref={textRef}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-950 leading-tight mb-4">
            It Started With a Petrol Station.
          </h2>
          <div className="w-12 h-1 bg-orange-500 mb-4" />
          <h3 className="text-base sm:text-lg text-gray-500 font-medium mb-6">
            The supermarket wasn&apos;t the plan. It was the surprise.
          </h3>
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-4">
            Before there was County, there was Magomano. A petrol station with
            everything a busy junction needs: a small restaurant, a car wash, a
            service bay, and tucked into a modest corner, a convenience shop.
            The minimart wasn&apos;t the headline; it was the afterthought. A
            small space, almost an experiment, mimicking what the bigger
            stations were doing.
          </p>
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-6">
            Then something unexpected happened. Within two years, that tiny shop
            began to outgrow its corner. Customers kept coming. Shelves kept
            emptying. The idea that had been the smallest piece of the business
            was quietly becoming the biggest one. So the service bay came down.
            The car wash came down. And in their place, the first real
            supermarket went up.
          </p>
          <blockquote className="border-l-4 border-orange-500 pl-5 py-2 my-6">
            <p className="text-gray-700 text-base sm:text-lg italic leading-relaxed">
              &ldquo;After two years, we saw the real potential was in the
              shop.&rdquo;
            </p>
          </blockquote>
        </div>

        {/* RIGHT — image */}
        <div ref={imageRef} className="relative">
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/Images/Hero/Hero4.webp"
              alt="The original Magomano forecourt"
              fill
              className="object-cover"
              sizes="(max-width:1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-blue-950/20" />
          </div>
        </div>
      </div>
    </section>
  );
}
