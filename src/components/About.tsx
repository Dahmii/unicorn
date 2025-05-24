import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Target, Heart, Scale } from "lucide-react";
import image from "../assets/image.jpg";

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const valueItems = [
    {
      icon: <Target className="w-12 h-12 text-primary-800" />,
      title: "Empowerment",
      description:
        "We believe in equipping entrepreneurs with the tools, resources, and connections they need to succeed.",
    },
    {
      icon: <Heart className="w-12 h-12 text-primary-800" />,
      title: "Innovation",
      description:
        "We foster creative thinking and novel approaches to solving Africa's most pressing challenges.",
    },
    {
      icon: <Scale className="w-12 h-12 text-primary-800" />,
      title: "Transparency",
      description:
        "We maintain open communication and accountability in all our programs and initiatives.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
            About Unicorn by Uspace
          </h2>
          <div className="w-20 h-1 bg-accent-500 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Vision & Mission
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Unicorn by Uspace is dedicated to transforming the entrepreneurial
              landscape across Africa by identifying, supporting, and elevating
              the next generation of business leaders.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Our mission is to provide comprehensive support through funding,
              expert mentorship, and national visibility to help innovative
              African startups scale and succeed.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We envision an Africa where entrepreneurial talent is fully
              recognized, developed, and celebrated – creating economic
              opportunities and solving critical challenges.
            </p>
          </motion.div>

          <motion.div
            className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <img
              src={image}
              alt="African entrepreneurs in a workshop"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary-800 opacity-20"></div>
          </motion.div>
        </div>

        <motion.h3
          className="text-2xl font-semibold text-gray-800 mb-8 text-center"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Our Core Values
        </motion.h3>

        <div className="grid md:grid-cols-3 gap-8">
          {valueItems.map((item, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow-custom hover:shadow-lg transition-shadow duration-300"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.2 }}
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h4 className="text-xl font-semibold text-primary-800 mb-3 text-center">
                {item.title}
              </h4>
              <p className="text-gray-700 text-center">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 p-6 bg-primary-50 rounded-lg border-l-4 border-primary-800"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 1.4 }}
        >
          <h3 className="text-xl font-semibold text-primary-800 mb-3">
            Our 23-Week Accelerator Program
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Our comprehensive 23-week program is carefully structured to nurture
            entrepreneurs through every stage of their journey. From initial
            concept refinement to final execution, we provide the guidance,
            resources, and connections needed to transform promising ideas into
            sustainable businesses.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
