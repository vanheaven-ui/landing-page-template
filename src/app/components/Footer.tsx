import React from "react";
import { Twitter, Linkedin, Github } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info Section */}
        <div className="space-y-4">
          <a href="/" className="flex items-center space-x-2">
            {/* Replace with your logo SVG or icon */}
            <svg
              className="w-8 h-8 text-green-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M10 2a8 8 0 100 16 8 8 0 000-16zM5.9 5.9a6 6 0 118.2 8.2 6 6 0 01-8.2-8.2zM10 0a10 10 0 100 20 10 10 0 000-20z"
                clipRule="evenodd"
                fillRule="evenodd"
              ></path>
            </svg>
            <span className="text-white text-lg font-bold font-inter">
              Your Company Name
            </span>
          </a>
          <p className="text-sm">
            Pioneering the next generation of AI-powered solutions to transform
            your business.
          </p>
          <div className="flex space-x-4 pt-2">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <Twitter size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <Github size={20} />
            </a>
          </div>
        </div>

        {/* Products Links */}
        <div className="space-y-2">
          <h3 className="font-semibold text-white mb-4">Products</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                Product A
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                Product B
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                Product C
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                Solutions
              </a>
            </li>
          </ul>
        </div>

        {/* Resources Links */}
        <div className="space-y-2">
          <h3 className="font-semibold text-white mb-4">Resources</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                Case Studies
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                Documentation
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                Support
              </a>
            </li>
          </ul>
        </div>

        {/* Company Links */}
        <div className="space-y-2">
          <h3 className="font-semibold text-white mb-4">Company</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                Careers
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                Press
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center text-sm text-gray-600 mt-12 pt-8 border-t border-gray-800">
        &copy; 2024 Your Company Name. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
