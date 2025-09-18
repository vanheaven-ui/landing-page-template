import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";

const LandingPage: React.FC = () => {
  return (
    <div className="bg-gray-950 font-inter antialiased">
      <Header />
      <main>
        <HeroSection />
        {/* <Features /> */}
        {/* <Testimonials /> */}
        {/* <BlogSection /> */}
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default LandingPage;