import React from "react";

// Header props defined here in case the header receives props like current user or something
interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 px-4 sm:px-8 bg-gray-900/80 backdrop-blur-sm">
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        <a href="/" className="flex items-center space-x-2">
          {/* To be replaced with actual logo, SVG or icon */}
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
        <div className="flex items-center space-x-6">
          <a
            href="#"
            className="hidden md:inline-block text-gray-300 hover:text-green-500 transition-colors duration-200"
          >
            Link 1
          </a>
          <a
            href="#"
            className="hidden md:inline-block text-gray-300 hover:text-green-500 transition-colors duration-200"
          >
            Link 2
          </a>
          <button className="px-4 py-2 text-sm font-semibold text-gray-900 bg-green-400 rounded-lg hover:bg-green-500 transition-colors duration-200">
            Call to Action
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
