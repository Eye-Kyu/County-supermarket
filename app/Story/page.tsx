"use client";

import Heart from "../components/ourstory/Heart";
import Mission from "../components/ourstory/Mission";
import Naming from "../components/ourstory/Naming";
import Origin from "../components/ourstory/Origin";
import ProductsServices from "../components/ourstory/services";
import StatsCounter from "../components/ourstory/StatsCounter";
import OurStory from "../components/ourstory/Story";
import Timeline from "../components/ourstory/Timeline";

export default function StoryPage() {
  return (
    <div className="bg-white relative">
      <OurStory />
      <Origin />
      <Naming />
      <StatsCounter />
      <Timeline />
      <Heart />
      <Mission />
      <ProductsServices />
    </div>
  );
}
