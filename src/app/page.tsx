import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import MarqueSection from "./components/MarqueSection";
import ProductSection from "./components/ProductSection";
import TestimonialsSection from "./components/TestimonialSection";
import BlogSection from "./components/BlogSection";
import CTASection from "./components/CTA";
import Footer from "./components/Footer";

const LandingPage: React.FC = () => {
  return (
    <div className="bg-gray-950 font-inter antialiased">
      <Header />
      <main>
        <HeroSection />
        <MarqueSection />
        <FeaturesSection />
        <ProductSection />
        <TestimonialsSection />
        <BlogSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;