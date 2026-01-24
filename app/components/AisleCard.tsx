import Image from "next/image";

type AisleCardProps = {
  title: string;
  text: string;
  image: string;
  reverse?: boolean;
  className?: string;
};

export default function AisleCard({
  title,
  text,
  image,
  reverse = false,
  className = "",
}: AisleCardProps) {
  return (
    <div
      className={`w-full flex gap-2 h-[70vh] flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } ${className}`}
    >
      {/* TEXT CARD */}
      <div className="w-full md:w-1/2 bg-[#23265e] rounded-4xl p-8 flex flex-col justify-center">
        <h3 className="font-serif text-2xl mb-4 text-black">{title}</h3>
        <p className="text-sm leading-relaxed text-black">{text}</p>
      </div>

      {/* IMAGE CARD */}
      <div className="w-full md:w-1/2 relative rounded-4xl overflow-hidden">
        <Image src={image} alt={title} fill className="object-cover" priority />
      </div>
    </div>
  );
}
