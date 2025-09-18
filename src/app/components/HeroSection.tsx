import { ChevronRight } from "lucide-react";

// To be updated with the types of the props.
interface HeroSectionProps {}

const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <section className="relative flex flex-col items-center justify-center h-screen pt-20 px-4 text-center text-white bg-gray-950 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10 dynamic-bg"></div>

      <div className="absolute inset-0 z-10 bg-gray-950 opacity-70"></div>

      <div className="relative z-20 max-w-4xl space-y-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
          Pioneering the Next Generation of
          <span className="text-green-400"> AI-Powered Solutions</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl font-light text-gray-300 max-w-2xl mx-auto">
          We leverage cutting-edge artificial intelligence and machine learning
          to build scalable, intelligent, and transformative products for your
          business.
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 items-center justify-center pt-4">
          <button className="flex items-center justify-center w-full sm:w-auto px-6 py-3 font-semibold text-gray-900 bg-green-400 rounded-lg hover:bg-green-500 transition-colors duration-200">
            Learn More
          </button>
          <a
            href="#"
            className="flex items-center justify-center w-full sm:w-auto text-white hover:text-green-400 transition-colors duration-200"
          >
            Watch the Video
            <ChevronRight size={20} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;