"use client";

import AnimatedCounter from "./AnimatedCounter";

type LoyaltyStatCardProps = {
  value: number;
  suffix?: string;
  label: string;
  description: string;
};

export default function LoyaltyStatCard({
  value,
  suffix = "+",
  label,
  description,
}: LoyaltyStatCardProps) {
  return (
    <div
      className="
      relative
      rounded-2xl
      p-10
      text-center
      backdrop-blur-xl
      bg-white/40
      border border-white/30
      shadow-xl
      flex flex-col justify-center
      transition
      hover:scale-[1.02]
      "
    >
      {/* subtle gradient highlight */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent pointer-events-none"></div>

      <div className="relative z-10">
        <h3 className="text-4xl font-bold text-orange-500">
          <AnimatedCounter value={value} suffix={suffix} />
        </h3>

        <p className="text-gray-700 text-sm mt-1">{label}</p>

        <p className="text-gray-700 mt-6 leading-relaxed max-w-sm mx-auto">
          {description}
        </p>

        <div className="flex justify-center gap-4 mt-8 flex-wrap">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full text-sm font-medium transition">
            Join Our Rewards
          </button>

          <button className="border border-blue-950 text-blue-950 px-6 py-2 rounded-full text-sm font-medium hover:bg-green-50 transition">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
