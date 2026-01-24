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
      className={`w-full flex flex-col md:flex-row gap-4 ${
        reverse ? "md:flex-row-reverse" : ""
      } ${className}`}
      style={{ minHeight: "60vh" }}
    >
      {/* TEXT CARD */}
      <div className="w-full md:w-1/2 bg-[#23265e] rounded-3xl p-6 md:p-10 flex flex-col justify-center min-h-55">
        <h3 className="font-serif text-2xl mb-4 text-white">{title}</h3>
        <p className="text-base leading-relaxed text-white">{text}</p>
      </div>

      {/* IMAGE CARD */}
      <div
        className="w-full md:w-1/2 relative rounded-3xl overflow-hidden
                   min-h-55 sm:min-h-75 md:min-h-full"
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>
    </div>
  );
}
