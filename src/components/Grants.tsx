import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Coins, BookOpen, Users, Globe } from "lucide-react";

const Grants: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const benefits = [
    {
      icon: <Coins className="w-12 h-12 text-accent-500" />,
      title: "Seed Funding",
      description:
        "Access to ₦30 million in seed funding to kickstart your entrepreneurial journey and turn your ideas into reality.",
    },
    {
      icon: <BookOpen className="w-12 h-12 text-accent-500" />,
      title: "Expert Mentorship",
      description:
        "One-on-one guidance from industry experts and successful entrepreneurs who understand the African business landscape.",
    },
    {
      icon: <Users className="w-12 h-12 text-accent-500" />,
      title: "Alumni Network",
      description:
        "Join a growing community of innovative entrepreneurs across Nigeria and Africa for ongoing support and collaboration.",
    },
    {
      icon: <Globe className="w-12 h-12 text-accent-500" />,
      title: "National Exposure",
      description:
        "Showcase your business to investors, partners, and customers through our media platforms and finale event.",
    },
  ];

  return (
    <section id="grants" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
            Grants & Mentorship
          </h2>
          <div className="w-20 h-1 bg-accent-500 mx-auto mb-8"></div>
          <p className="text-gray-700 max-w-2xl mx-auto">
            We provide comprehensive support to help entrepreneurs overcome
            challenges and scale their businesses effectively.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow-custom hover:shadow-lg transition-shadow duration-300 border-t-4 border-primary-800"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
            >
              <div className="flex justify-center mb-4">{benefit.icon}</div>
              <h4 className="text-xl font-semibold text-primary-800 mb-3 text-center">
                {benefit.title}
              </h4>
              <p className="text-gray-700 text-center">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative rounded-lg overflow-hidden shadow-xl h-80 md:h-full"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <img
              src="https://images.pexels.com/photos/7876303/pexels-photo-7876303.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Mentorship session with entrepreneurs"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary-800 opacity-20"></div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Commitment to Growth
            </h3>

            <div className="mb-6 p-5 bg-accent-50 rounded-lg border-l-4 border-accent-500">
              <p className="text-lg font-bold text-gray-800 mb-2">
                ₦30 Million in Seed Funding
              </p>
              <p className="text-gray-700">
                Selected entrepreneurs receive financial support to develop
                their businesses without the pressure of immediate returns. Our
                funding is designed to give you runway to focus on growth.
              </p>
            </div>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Beyond funding, we match entrepreneurs with mentors who have
              successfully navigated the challenges of building businesses in
              Africa. These relationships often extend beyond the program
              duration.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Unicorn by Uspace doesn't just support entrepreneurs during the
              program. We're building a lasting ecosystem of innovation and
              collaboration across Africa, with alumni continuing to receive
              support and opportunities.
            </p>

            <div className="mt-8">
              <a
                href="#apply"
                className="inline-block bg-primary-800 hover:bg-primary-700 text-white px-6 py-3 rounded-md font-medium transition-colors duration-300"
              >
                Apply for Funding
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Grants;
