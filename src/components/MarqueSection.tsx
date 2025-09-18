"use client";

import Image from "next/image";

const MarqueSection: React.FC = () => {
  const logos = [
    { src: "https://placehold.co/100x40/505050/white?text=Company+1", alt: "Company 1" },
    { src: "https://placehold.co/100x40/505050/white?text=Company+2", alt: "Company 2" },
    { src: "https://placehold.co/100x40/505050/white?text=Company+3", alt: "Company 3" },
    { src: "https://placehold.co/100x40/505050/white?text=Company+4", alt: "Company 4" },
    { src: "https://placehold.co/100x40/505050/white?text=Company+5", alt: "Company 5" },
    { src: "https://placehold.co/100x40/505050/white?text=Company+6", alt: "Company 6" },
    { src: "https://placehold.co/100x40/505050/white?text=Company+7", alt: "Company 7" },
    { src: "https://placehold.co/100x40/505050/white?text=Company+8", alt: "Company 8" },
  ];

  return (
    <div className="relative w-full overflow-hidden py-4 bg-gray-950">
      <div className="flex animate-marquee-loop">
        {logos.map((logo, index) => (
          <div key={index} className="flex-shrink-0 mx-8">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={100}
              height={40}
              className="h-10 opacity-70"
            />
          </div>
        ))}
        {logos.map((logo, index) => (
          <div key={index + logos.length} className="flex-shrink-0 mx-8">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={100}
              height={40}
              className="h-10 opacity-70"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarqueSection;
