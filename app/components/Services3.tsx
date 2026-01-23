import AisleCard from "./AisleCard";

export default function Services3() {
  return (
    <section
      id="Services"
      className="px-6 flex min-h-screen items-center justify-between gap-x-16"
    >
      <div className="w-1/2">
        <AisleCard
          title="ELECTRONICS"
          text="LOREM IPSUM SIT BGUOIWBAIB XSAIOCBD OABCUIAIC biuouiaanc dnsauifpcwiuca."
          image="/Images/Hero/hero1.webp"
          className=""
          reverse
        />
      </div>
      {/* RIGHT TITLE */}
      <div className="w-1/2 ml-4">
        <AisleCard
          title="GROCERIES"
          text="LOREM IPSUM SIT BGUOIWBAIB XSAIOCBD OABCUIAIC biuouiaanc dnsauifpcwiuca."
          image="/Images/Hero/Groceries.webp"
          reverse
          className=""
        />
      </div>
    </section>
  );
}
