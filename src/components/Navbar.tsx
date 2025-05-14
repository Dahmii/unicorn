import React, { useState, useEffect } from "react";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed bg-white w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-3" : "py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center gap-2">
            <img
              src="/logo.svg"
              alt="Unicorn Foundation Logo"
              style={{ width: "180px", height: "60px" }}
              className=" object-contain"
            />
            {/* <span
              className={`font-bold text-xl ${
                isScrolled ? "text-primary-800" : "text-white"
              } transition-colors duration-300`}
            >
              Unicorn Foundation
            </span> */}
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {["About", "Program", "Grants", "Get Involved"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className={`${
                  isScrolled
                    ? "text-gray-700 hover:text-accent-500"
                    : "text-gray hover:text-accent-500"
                } font-medium transition-colors duration-300`}
              >
                {item}
              </a>
            ))}
            <a
              href="#apply"
              className="bg-accent-500 hover:bg-accent-600 text-white px-5 py-2 rounded-md font-medium transition-colors duration-300"
            >
              Apply Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className={`w-6 h-6 ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-3 bg-white rounded-lg p-4 shadow-lg">
              {["About", "Program", "Grants", "Get Involved"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="text-gray-700 hover:text-primary-800 font-medium transition-colors duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <a
                href="#apply"
                className="bg-accent-500 hover:bg-accent-600 text-white px-4 py-2 rounded-md font-medium text-center transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Apply Now
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
