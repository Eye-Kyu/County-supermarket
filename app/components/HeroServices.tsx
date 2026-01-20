import Image from "next/image";

export default function HeroServices() {
  return (
    <section className="sticky h-[40vh] w-full top-0  z-0 overflow-hidden">
      {/* Background Image */}
      <Image
        src="/Images/groceries.webp"
        alt="Our Services"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay (optional, improves text readability) */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <h1 className="text-4xl md:text-6xl font-bold md:mb-6 text-white">
          OUR SERVICES
        </h1>
      </div>
    </section>
  );
}
