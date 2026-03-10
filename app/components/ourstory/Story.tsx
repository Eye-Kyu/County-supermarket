import Image from "next/image";

export default function OurStory() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* LEFT — IMAGE COLUMN */}
        <div className="flex flex-col gap-6 sm:gap-8">
          <div className="relative w-full h-[260px] sm:h-[320px] md:h-[380px] lg:h-[420px] rounded-md overflow-hidden">
            <Image
              src="/Images/Hero/hero2.webp"
              alt="County Supermarket exterior"
              fill
              priority
              className="object-cover"
              sizes="(max-width:768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* RIGHT — TEXT CONTENT */}
        <div className="max-w-xl lg:max-w-none">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-950 mb-5 sm:mb-6">
            Our Story
          </h2>

          <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-4">
            County Supermarket is a beloved local Kenyan chain with a presence
            in central Kenya. Operating for over 15 years, this homegrown gem
            has expanded to 6 branches, catering to multiple counties. The
            supermarket prides itself on exceptional customer service and
            affordability, offering a wide range of goods.
          </p>

          <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-6">
            Step into any branch to savor delightful pastries from the Bakery,
            indulge in gourmet meals at the Deli, or choose fresh cuts at the
            Butchery. With a team dedicated to providing a one-stop shopping
            experience, County Supermarket ensures customers find everything
            they need conveniently under one roof.
          </p>

          {/*  <button className="px-6 py-3 font-semibold text-orange-500 border-b border-black transition-all duration-300 hover:bg-orange-500 hover:text-white hover:border-transparent hover:rounded-lg">
            In the words of our MD
          </button>
          */}
        </div>
      </div>
    </section>
  );
}
