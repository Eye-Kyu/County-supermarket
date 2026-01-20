import Image from "next/image";

export default function PageService() {
  const serviceImages = [
    {
      src: "/Images/electronics.webp",
      alt: "Electronics",
      title: "ELECTRONICS",
      description:
        "Find high quality electronic gadgets and electronic deals from your favorite brands.",
    },
    {
      src: "/Images/clothing.webp",
      alt: "Fashion",
      title: "FASHION",
      description:
        "Shop for the latest fashion trends from our local and international suppliers.",
    },
    {
      src: "/Images/groceries.webp",
      alt: "Groceries",
      title: "GROCERIES",
      description:
        "Discover a wide variety of fresh, high-quality groceries to meet all your daily needs.",
    },
    {
      src: "/Images/Butchery.webp",
      alt: "Butchery",
      title: "BUTCHERY",
      description:
        "Experience the finest quality meats at our butchery. We offer a wide selection of fresh, expertly cut beef, poultry, lamb, and pork to suit all your cooking needs.",
    },
    {
      src: "/Images/parking.webp",
      alt: "parking",
      title: "PARKING",
      description: "Whatever time of day, season: Find parking anywhere",
    },
  ];

  return (
    <div className="w-full h-screen">
      <div className="outer-container">
        <div className="image-container">
          {serviceImages.map((image) => (
            <div key={image.alt} className="service-card">
              <Image
                src={image.src}
                alt={image.alt}
                width={400}
                height={300}
                className="service-image"
              />
              <h3 className="service-title">{image.title}</h3>
              <p className="service-description">{image.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
