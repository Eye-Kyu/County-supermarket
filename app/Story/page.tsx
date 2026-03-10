import Mission from "../components/ourstory/Mission";
import ProductsServices from "../components/ourstory/services";
import OurStory from "../components/ourstory/Story";
import Timeline from "../components/ourstory/Timeline";

export default function Services() {
  return (
    <div className="bg-white relative">
      <OurStory />
      <Timeline />
      <Mission />
      <ProductsServices />
    </div>
  );
}
