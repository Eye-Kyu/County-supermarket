"use client";

import Link from "next/link";
import AnimatedCounter from "./AnimatedCounter";

type LoyaltyStatCardProps = {
  value: number;
  suffix?: string;
  label: string;
  description: string;
  primaryButton: string;
  primaryButtonHref?: string;
  secondaryButton?: string;
  secondaryButtonHref?: string;
};

export default function LoyaltyStatCard({
  value,
  suffix = "+",
  label,
  description,
  primaryButton,
  primaryButtonHref = "#",
  secondaryButton,
  secondaryButtonHref = "#",
}: LoyaltyStatCardProps) {
  return (
    <div className="relative rounded-2xl p-6 sm:p-10 text-center backdrop-blur-xl bg-white border border-gray-100 shadow-xl flex flex-col justify-center transition hover:scale-[1.02]">
      {/* Subtle gradient highlight */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />

      <div className="relative z-10">
        <h3 className="text-4xl sm:text-5xl font-extrabold text-blue-950">
          <AnimatedCounter value={value} suffix={suffix} />
        </h3>

        <p className="text-gray-500 text-sm mt-2 uppercase tracking-widest font-medium">
          {label}
        </p>

        <div className="w-10 h-0.5 bg-orange-500 mx-auto my-5" />

        <p className="text-gray-600 leading-relaxed max-w-sm mx-auto text-sm sm:text-base">
          {description}
        </p>

        <div className="flex justify-center gap-4 mt-8 flex-wrap">
          <Link href={primaryButtonHref}>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition">
              {primaryButton}
            </button>
          </Link>

          {secondaryButton && (
            <Link href={secondaryButtonHref}>
              <button className="border border-blue-950 text-blue-950 px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-950 hover:text-white transition">
                {secondaryButton}
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
