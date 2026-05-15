import Hero from "../components/HeroServices";
import WhyShopWithUs from "../components/ourservices/ServicesWhy";
import PageService from "../components/ourservices/Services";
import Loyalty from "../components/ourservices/Loyalty";
import ServiceSection from "../components/ourservices/services1";

export default function Services() {
  return (
    <div className="bg-white relative py-2">
      {/* Hero (background layer) */}
      <Hero />

      {/* Content that scrolls OVER the hero */}
      <div className="bg-white z-10 relative">
        <ServiceSection />
        <WhyShopWithUs />
        {/* <PageService /> */}
        <Loyalty />
      </div>
    </div>
  );
}
