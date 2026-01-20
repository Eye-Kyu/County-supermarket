import Hero from "../components/HeroServices";
import WhyShopWithUs from "../components/ourservices/ServicesWhy";
import PageService from "../components/ourservices/Services";

export default function Services() {
  return (
    <div className="bg-white relative">
      {/* Hero (background layer) */}
      <Hero />

      {/* Content that scrolls OVER the hero */}
      <div className="bg-white z-10 relative">
        <PageService />
        <WhyShopWithUs />
      </div>
    </div>
  );
}
