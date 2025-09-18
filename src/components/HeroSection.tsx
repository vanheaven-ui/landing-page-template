"use client";

import { ChevronRight, X } from "lucide-react";
import { useState } from "react";

const HeroSection: React.FC = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="relative flex flex-col items-center justify-center h-screen overflow-hidden bg-gray-950 text-white">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/videos/background.mp4"
        autoPlay
        loop
        muted
      />

      {/* Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-full z-10 bg-gradient-to-r from-green-900/70 via-green-800/50 to-green-900/10"></div>

      {/* Content wrapper */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-8 pt-20 flex flex-col md:flex-row items-center justify-between h-full">
        {/* Text and buttons section */}
        <div className="text-white text-center md:text-left md:w-1/2 space-y-6 animate-fadeIn order-2 md:order-1">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            Pioneering the Next Generation of
            <span className="text-green-400"> AI-Powered Solutions</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl font-light text-gray-300 max-w-2xl md:max-w-none">
            We leverage cutting-edge artificial intelligence and machine
            learning to build scalable, intelligent, and transformative products
            for your business.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 items-center md:items-start justify-center md:justify-start pt-4">
            <button className="flex items-center justify-center w-full sm:w-auto px-6 py-3 font-semibold text-gray-900 bg-green-400 rounded-lg hover:bg-green-500 transition-colors duration-200">
              Learn More
            </button>
            <button
              onClick={() => setIsVideoOpen(true)}
              className="flex items-center justify-center w-full sm:w-auto text-white hover:text-green-400 transition-colors duration-200"
            >
              Watch the Video
              <ChevronRight size={20} className="ml-2" />
            </button>
          </div>
        </div>

        {/* Placeholder for right side */}
        <div className="w-full md:w-1/2 h-full flex items-center justify-center order-1 md:order-2"></div>
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-80 p-4 animate-fadeIn">
          <div className="relative w-full max-w-4xl h-auto aspect-video">
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute -top-12 right-0 text-white hover:text-green-400 transition-colors duration-200"
            >
              <X size={32} />
            </button>
            <iframe
              width="100%"
              height="100%"
              src="/videos/background.mp4"
              title="Video Player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg shadow-2xl"
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
