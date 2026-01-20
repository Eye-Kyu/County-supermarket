import HeroSlider from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Maps from "./components/Maps";
import Contact from "./components/Contact";
import Why from "./components/Why";

export default function Home() {
  return (
    <div>
      <main className="bg-white text-black ">
        <HeroSlider />
        <div className=" space-y-14">
          <Services />
          <Why />
          <About />
          <Gallery />
          <Contact />
          <Maps />
        </div>
      </main>
    </div>
  );
}
