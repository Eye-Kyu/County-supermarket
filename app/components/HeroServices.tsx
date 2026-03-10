import Image from "next/image";

export default function HeroServices() {
  return (
    <section className="relative h-[45vh] sm:h-[50vh] md:h-[55vh] lg:h-[60vh] w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="/Images/groceries.webp"
        alt="Our Services"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end items-start px-5 sm:px-8 md:px-16 pb-8 sm:pb-10 md:pb-14 lg:pb-16 max-w-7xl mx-auto">
        <div className="max-w-lg md:max-w-xl lg:max-w-2xl">
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-3 md:mb-4">
            OUR SERVICES
          </h1>

          <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed">
            County offers more than just products — we deliver convenience,
            loyalty, accessibility, and unmatched customer support across every
            channel.
          </p>
        </div>
      </div>
    </section>
  );
}
