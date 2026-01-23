import AisleCard from "./AisleCard";

export default function Services2() {
  return (
    <div className="pt-5">
      <section id="Services" className="px-6">
        <div className="flex flex-col md:flex-row h-auto md:h-4/5 items-center gap-6 md:gap-0">
          {/* LEFT TITLE */}
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif tracking-wide leading-tight">
              EXPLORE <br /> OUR <br /> AISLES
            </h1>
          </div>

          {/* RIGHT CONTENT */}
          <div className="w-full md:w-1/2">
            <AisleCard
              title="BAKERY"
              text="We offer a variety of freshly baked goods, from bread and pastries to cakes and cookies, all made with high-quality ingredients to satisfy your cravings."
              image="/Images/Hero/hero1.webp"
            />
          </div>
        </div>

        <section className="flex flex-col md:flex-row py-6 gap-6 md:gap-0">
          <div className="w-full md:w-1/2 md:pr-4">
            <AisleCard
              title="ELECTRONICS"
              text="Whether you're looking for the latest gadgets or essential household electronics, our selection has something for everyone."
              image="/Images/Hero/hero1.webp"
              reverse
            />
          </div>

          {/* RIGHT TITLE */}
          <div className="w-full md:w-1/2 md:pl-4">
            <AisleCard
              title="GROCERIES"
              text="Fresh from local farms to international delights, our grocery aisle is stocked with everything you need for your kitchen and more."
              image="/Images/Hero/Groceries.webp"
              reverse
            />
          </div>
        </section>

        <section className="flex flex-col md:flex-row py-6 gap-6 md:gap-0">
          <div className="w-full md:w-1/2 md:pr-4">
            <AisleCard
              title="HOUSEHOLD ITEMS"
              text="From cleaning supplies to kitchen essentials, our household items aisle has everything you need to keep your home running smoothly."
              image="/Images/Hero/hero1.webp"
            />
          </div>

          {/* Example: Hide on small screens, show on md+ */}
          <div className="hidden md:block w-full md:w-1/2 md:pl-4">
            <AisleCard
              title="GROCERIES"
              text="Fresh from local farms to international delights, our grocery aisle is stocked with everything you need for your kitchen and more."
              image="/Images/Hero/Groceries.webp"
              reverse
            />
          </div>
        </section>
      </section>
    </div>
  );
}
