import Image from "next/image";

export default function OurStory() {
  return (
    <section className="min-h-screen bg-white px-6 md:px-16 flex items-center">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT — IMAGE COLUMN */}
        <div className="flex flex-col gap-8 h-[80vh]">
          {/* Top Image */}
          <div className="relative flex-1 bg-gray-100 rounded-md">
            <Image
              src="/Images/Hero/hero2.webp"
              alt="County Supermarket exterior"
              fill
              className="object-contain p-4"
              priority
            />
          </div>

          {/* Bottom Image */}
          <div className="relative flex-[1.3] bg-gray-100 rounded-md">
            <Image
              src="/Images/Hero/hero1.webp"
              alt="County Supermarket interior"
              fill
              className="object-contain p-4"
            />
          </div>
        </div>

        {/* RIGHT — TEXT CONTENT */}
        <div className="max-w-xl">
          {/*   <p className="uppercase tracking-[0.3em] text-sm text-gray-400 mb-4">
            A Brief Heading
          </p>
          */}

          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0b1b3f] mb-6">
            Our Story
          </h2>

          <p className="text-gray-600 leading-relaxed text-base md:text-lg">
            County Supermarket is a beloved local Kenyan chain with a presence
            in central Kenya. Operating for over 15 years, this homegrown gem
            has expanded to 6 branches, catering to multiple counties. The
            supermarket prides itself on exceptional customer service and
            affordability, offering a wide range of goods. Step into any branch
            to savor delightful pastries from the Bakery, indulge in gourmet
            meals at the Deli, or choose fresh cuts at the Butchery. With a team
            dedicated to providing a one-stop shopping experience, County
            Supermarket ensures customers find everything they need conveniently
            under one roof.
          </p>
        </div>
      </div>
    </section>
  );
}
