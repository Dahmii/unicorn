import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-primary-800 text-white overflow-hidden"
      style={{
        backgroundImage:
          'linear-gradient(to right, rgba(74, 35, 131, 0.95), rgba(74, 35, 131, 0.8)), url("https://images.pexels.com/photos/7709292/pexels-photo-7709292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary-900 opacity-70"></div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Empowering Nigeria's Next Generation of Entrepreneurs
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            <p className="text-lg md:text-xl lg:text-2xl opacity-90 mb-8 max-w-3xl mx-auto">
              Providing grants, mentorship, and national exposure to transform
              ideas into successful businesses.
              <br /> powered by uspace.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.7 }}
          >
            {/* <a
              href="#apply"
              className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-3 rounded-md font-semibold text-lg transition-colors duration-300 shadow-lg"
            >
              Apply Now
            </a> */}
            <a
              href="#about"
              className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-8 py-3 rounded-md font-semibold text-lg transition-all duration-300 backdrop-filter backdrop-blur-sm"
            >
              Learn More
            </a>
          </motion.div>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce"
        onClick={scrollToAbout}
      >
        <ChevronDown size={32} className="text-white opacity-80" />
      </div>
    </section>
  );
};

export default Hero;
