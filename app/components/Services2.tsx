import AisleCard from "./AisleCard";

export default function Services2() {
  return (
    <div className="pt-5">
      <section id="Services" className="px-6">
        {/* HERO ROW */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          {/* LEFT TITLE */}
          <div className="w-full md:w-1/2 ">
            <h1 className="text-4xl sm:text-4xl md:text-7xl font-serif tracking-wide leading-tight text-center md:text-left">
              EXPLORE <br /> OUR <br /> AISLES
            </h1>
          </div>

          {/* RIGHT CONTENT */}
          <div className="w-full md:w-1/2">
            <AisleCard
              title="BAKERY"
              text="We offer a variety of freshly baked goods, from bread and pastries to cakes and cookies, all made with high-quality ingredients to satisfy your cravings."
              image="/Images/Improved/bakery3.jpg"
            />
          </div>
        </div>

        {/* ROW 2 */}
        <section className="flex flex-col md:flex-row py-6 gap-6">
          <div className="w-full md:w-1/2">
            <AisleCard
              title="ELECTRONICS"
              text="Whether you're looking for the latest gadgets or essential household electronics, our selection has something for everyone."
              image="/Images/Improved/Electronics.jpg"
              reverse
            />
          </div>

          <div className="w-full md:w-1/2">
            <AisleCard
              title="GROCERIES"
              text="Fresh from local farms to international delights, our grocery aisle is stocked with everything you need for your kitchen and more."
              image="/Images/Improved/Groceries2.jpg"
              reverse
            />
          </div>
        </section>

        {/* ROW 3 */}
        <section className="flex flex-col md:flex-row py-6 gap-6">
          <div className="w-full md:w-1/2">
            <AisleCard
              title="HOUSEHOLD ITEMS"
              text="From cleaning supplies to kitchen essentials, our household items aisle has everything you need to keep your home running smoothly."
              image="/Images/Improved/Household3.jpg"
            />
          </div>

          {/* Desktop only */}
          <div className="hidden">
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
