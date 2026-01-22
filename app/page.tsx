import HeroSlider from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Maps from "./components/Maps";
import Contact from "./components/Contact";
import Why from "./components/Why";
import ClientTestimonials from "./components/Testimonials";

export default function Home() {
  return (
    <div>
      <main className="bg-white text-black ">
        <HeroSlider />
        <div className=" space-y-14">
          <Services />
          <Why />
          <ClientTestimonials />
          <About />
          <Gallery />
          <Contact />
          <Maps />
        </div>
      </main>
    </div>
  );
}
