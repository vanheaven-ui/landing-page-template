"use client";

import { Brain, CheckCircle, Rocket } from "lucide-react";

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-8 bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">
            How We Build Solutions for You
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center p-6 bg-gray-900 rounded-xl shadow-lg hover:shadow-green-500/20 transition-shadow duration-300">
            <div className="w-16 h-16 flex items-center justify-center bg-green-500 rounded-full mb-4">
              <Brain size={32} className="text-gray-900" />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Strategic AI Consulting
            </h3>
            <p className="text-gray-400">
              We work with you to identify key opportunities to integrate AI
              into your business processes, from concept to deployment.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-gray-900 rounded-xl shadow-lg hover:shadow-green-500/20 transition-shadow duration-300">
            <div className="w-16 h-16 flex items-center justify-center bg-green-500 rounded-full mb-4">
              <Rocket size={32} className="text-gray-900" />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Custom AI Development
            </h3>
            <p className="text-gray-400">
              Our team develops tailored AI models and applications designed to
              solve your specific challenges and drive growth.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-gray-900 rounded-xl shadow-lg hover:shadow-green-500/20 transition-shadow duration-300">
            <div className="w-16 h-16 flex items-center justify-center bg-green-500 rounded-full mb-4">
              <CheckCircle size={32} className="text-gray-900" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Seamless Integration</h3>
            <p className="text-gray-400">
              We ensure our solutions are seamlessly integrated into your
              existing systems, minimizing disruption and maximizing efficiency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
