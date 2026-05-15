import HeroSlider from "./components/Hero";
import Services2 from "./components/Services2";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Maps from "./components/Maps";
import Contact from "./components/Contact";
import Why from "./components/Why";
import ClientTestimonials from "./components/Testimonials";
import NewsletterStrip from "./components/NewsletterStrip";

export default function Home() {
  return (
    <div>
      <main className="bg-white text-black ">
        <HeroSlider />
        <div className=" space-y-14">
          <Services2 />
          <Why />
          <ClientTestimonials />
          <About />
          <Gallery />
          <Contact />
          <Maps />
          <NewsletterStrip />
        </div>
      </main>
    </div>
  );
}
