import Image from "next/image";

export default function ContactHero() {
  return (
    <section className="relative h-[70vh] w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="/Images/customer.webp"
        alt="Contact Hero"
        fill
        priority
        quality={90}
        sizes="100vw"
        className="object-cover"
      />

      {/* Brand-tinted overlay */}
      <div className="absolute inset-0 bg-blue-950/35" />

      {/* Text Content */}
      <div className="absolute lg:pb-12 bottom-10 left-10 w-full sm:w-2/3 lg:w-1/2 text-white">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
          We&apos;re Here to Help.
        </h1>
        <p className="text-sm md:text-base leading-relaxed text-white/85">
          Visit us at any County Supermarket branch, or reach out via phone or
          email. Our team is ready to assist — your satisfaction is our
          priority.
        </p>
      </div>
    </section>
  );
}
