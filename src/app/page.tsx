import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import MarqueSection from "./components/MarqueSection";

const LandingPage: React.FC = () => {
  return (
    <div className="bg-gray-950 font-inter antialiased">
      <Header />
      <main>
        <HeroSection />
        <MarqueSection />
        <FeaturesSection />
        {/* <ProductSection /> */}
        {/* <Testimonials /> */}
        {/* <BlogSection /> */}
        {/* <CTA /> */}
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default LandingPage;