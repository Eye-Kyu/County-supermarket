import AisleCard from "./AisleCard";

export default function Services2() {
  return (
    <div className="pt-5">
      <section id="Services" className="px-6 ">
        <div className="flex h-4/5 items-center">
          {/* LEFT TITLE */}
          <div className="w-1/2">
            <h1 className="text-5xl md:text-7xl font-serif tracking-wide leading-tight">
              EXPLORE <br /> OUR <br /> AISLES
            </h1>
          </div>

          {/* RIGHT CONTENT */}
          <div className="w-1/2">
            <AisleCard
              title="BAKERY"
              text="We offer a variety of freshly baked goods, from bread and pastries to cakes and cookies, all made with high-quality ingredients to satisfy your cravings."
              image="/Images/Hero/hero1.webp"
            />
          </div>
        </div>
        {/*</section>*/}
        <section className="flex py-6">
          <div className="w-1/2 pr-4">
            <AisleCard
              title="ELECTRONICS"
              text="Whether you're looking for the latest gadgets or essential household electronics, our selection has something for everyone."
              image="/Images/Hero/hero1.webp"
              className=""
              reverse
            />
          </div>
          {/* RIGHT TITLE */}
          <div className="w-1/2 pl-4">
            <AisleCard
              title="GROCERIES"
              text="Fresh from local farms to international delights, our grocery aisle is stocked with everything you need for your kitchen and more."
              image="/Images/Hero/Groceries.webp"
              reverse
              className=""
            />
          </div>
        </section>

        {/*</section>*/}
        <section className="flex py-6">
          <div className="w-1/2 pr-4">
            <AisleCard
              title="HOUSEHOLD ITEMS"
              text="From cleaning supplies to kitchen essentials, our household items aisle has everything you need to keep your home running smoothly."
              image="/Images/Hero/hero1.webp"
              className=""
            />
          </div>
          {/* RIGHT TITLE */}
          <div className="w-1/2 pl-4 hidden">
            <AisleCard
              title="GROCERIES"
              text="Fresh from local farms to international delights, our grocery aisle is stocked with everything you need for your kitchen and more."
              image="/Images/Hero/Groceries.webp"
              reverse
              className=""
            />
          </div>
        </section>
      </section>
    </div>
  );
}
