import Image from "next/image";

export default function ContactHero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="/Images/Customer-Care.jpg"
        alt="Contact Hero"
        fill
        priority
        className="object-cover"
      />

      {/* Optional dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Text Content */}
      <div className="absolute lg:pb-12 bottom-10 left-10 w-1/2 text-white">
        <h2 className="text-xl md:text-2xl lg:text-2xl font-medium leading-relaxed">
          Have questions or need assistance? We are here to help! Visit us at
          County Supermarket or reach out via phone or email. Our friendly team
          is ready to assist with your inquiries. Your satisfaction is our
          priority!
        </h2>
      </div>
    </section>
  );
}
