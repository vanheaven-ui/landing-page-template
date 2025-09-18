"use client";

import { Code, Eye, Monitor } from "lucide-react";

const ProductSection: React.FC = () => {
  const learningPoints = [
    {
      icon: <Code size={40} className="text-green-400 mb-4" />,
      title: "Clean Code",
      description:
        "Learn to write maintainable, scalable, and professional code that follows modern software engineering principles.",
    },
    {
      icon: <Eye size={40} className="text-green-400 mb-4" />,
      title: "UI/UX Design",
      description:
        "Understand the fundamentals of user experience and interface design to build beautiful and intuitive products.",
    },
    {
      icon: <Monitor size={40} className="text-green-400 mb-4" />,
      title: "Full-Stack Development",
      description:
        "Master both the front-end and back-end to become a versatile developer capable of building end-to-end applications.",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-8 bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">
            What You Will Learn
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {learningPoints.map((point, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-xl bg-gray-900 shadow-lg hover:shadow-green-500/20 transition-shadow duration-300"
            >
              {point.icon}
              <h3 className="text-xl font-semibold mb-2">{point.title}</h3>
              <p className="text-gray-400">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
