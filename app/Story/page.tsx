"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Mission from "../components/ourstory/Mission";
import ProductsServices from "../components/ourstory/services";
import OurStory from "../components/ourstory/Story";
import Timeline from "../components/ourstory/Timeline";

gsap.registerPlugin(ScrollTrigger);

export default function StoryPage() {
  useEffect(() => {
    // Explicitly set tiles invisible before any scroll calculation
    gsap.set(".department-tile", { opacity: 0, y: 50 });

    // Heading slide-up
    gsap.from(".products-heading", {
      scrollTrigger: { trigger: ".products-heading", start: "top 88%" },
      y: 40,
      opacity: 0,
      duration: 0.9,
      ease: "power3.out",
    });

    // Sub-copy children stagger
    gsap.from(".products-sub > *", {
      scrollTrigger: { trigger: ".products-sub", start: "top 88%" },
      y: 20,
      opacity: 0,
      duration: 0.7,
      stagger: 0.15,
      ease: "power2.out",
    });

    // Cards: animate TO visible so they always end up displayed
    gsap.to(".department-tile", {
      scrollTrigger: {
        trigger: ".products-grid",
        start: "top bottom",
        invalidateOnRefresh: true,
      },
      y: 0,
      opacity: 1,
      duration: 0.55,
      stagger: 0.05,
      ease: "power2.out",
    });

    // Force ScrollTrigger to recalculate positions after full render
    ScrollTrigger.refresh();

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <div className="bg-white relative">
      <OurStory />
      <Timeline />
      <Mission />
      <ProductsServices />
    </div>
  );
}
