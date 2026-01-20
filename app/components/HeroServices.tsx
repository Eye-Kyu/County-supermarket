import Image from "next/image";

export default function HeroServices() {
  return (
    <div className="bg-blue h-[40vh] text-center flex items-center justify-center">
      <div className="container-services">
        <Image src="/Images/hero.webp" alt="Hero" width={100} height={100} />
        <h1 className="text-4xl md:text-6xl font-bold text-black">
          OUR SERVICES
        </h1>
      </div>
    </div>
  );
}
