import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { HandHeart, Mail, Phone, MapPin } from "lucide-react";

const GetInvolved: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    involvement: "Partner",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    // In a real application, you would send this data to a server
  };

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="get-involved" className="py-20 bg-primary-50" ref={ref}>
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
            Get Involved
          </h2>
          <div className="w-20 h-1 bg-accent-500 mx-auto mb-8"></div>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Join us in our mission to transform the entrepreneurial landscape in
            Africa. There are many ways to contribute to this vision.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center mb-6">
              <HandHeart className="w-10 h-10 text-primary-800 mr-4" />
              <h3 className="text-2xl font-semibold text-gray-800">
                Ways to Contribute
              </h3>
            </div>

            <div className="bg-white rounded-lg shadow-custom p-6 mb-8">
              <h4 className="text-xl font-semibold text-primary-800 mb-4">
                Become a Partner
              </h4>
              <p className="text-gray-700 mb-4">
                Corporate partners provide valuable resources, expertise, and
                networks to help our entrepreneurs succeed. Partnership
                opportunities include sponsoring events, providing technical
                resources, or offering internship positions.
              </p>
              <a
                href="#partner"
                className="text-primary-800 font-medium hover:text-primary-600 transition-colors duration-300"
              >
                Learn more about partnerships →
              </a>
            </div>

            <div className="bg-white rounded-lg shadow-custom p-6 mb-8">
              <h4 className="text-xl font-semibold text-primary-800 mb-4">
                Become a Mentor
              </h4>
              <p className="text-gray-700 mb-4">
                Share your expertise and guide the next generation of African
                entrepreneurs. Our mentors commit to regular sessions with
                program participants, providing industry insights and business
                guidance.
              </p>
              <a
                href="#mentor"
                className="text-primary-800 font-medium hover:text-primary-600 transition-colors duration-300"
              >
                Apply to be a mentor →
              </a>
            </div>

            <div className="bg-white rounded-lg shadow-custom p-6">
              <h4 className="text-xl font-semibold text-primary-800 mb-4">
                Donate
              </h4>
              <p className="text-gray-700 mb-4">
                Support our mission financially. Your donations directly fund
                grants, educational resources, and program operations to help
                more entrepreneurs across Africa.
              </p>
              <a
                href="#donate"
                className="text-primary-800 font-medium hover:text-primary-600 transition-colors duration-300"
              >
                Make a contribution →
              </a>
            </div>

            <div className="mt-10 space-y-4">
              <div className="flex items-start">
                <Mail className="w-5 h-5 text-primary-800 mr-3 mt-1" />
                <div>
                  <h5 className="font-medium text-gray-800">Email</h5>
                  <p className="text-gray-700">contact@unicorn.ng</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="w-5 h-5 text-primary-800 mr-3 mt-1" />
                <div>
                  <h5 className="font-medium text-gray-800">Phone</h5>
                  <p className="text-gray-700">+234 (0) 700 UNICORN</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-primary-800 mr-3 mt-1" />
                <div>
                  <h5 className="font-medium text-gray-800">Office</h5>
                  <p className="text-gray-700">
                    12 Innovation Drive, Lagos, Nigeria
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="bg-white rounded-lg shadow-custom p-8" id="apply">
              <h3 className="text-2xl font-semibold text-primary-800 mb-6 text-center">
                Get in Touch
              </h3>

              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">
                    Thank You!
                  </h4>
                  <p className="text-gray-700">
                    Your message has been received. We'll get back to you
                    shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-gray-700 font-medium mb-1"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-gray-700 font-medium mb-1"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Your email address"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-gray-700 font-medium mb-1"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Your phone number"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="involvement"
                      className="block text-gray-700 font-medium mb-1"
                    >
                      I want to get involved as a
                    </label>
                    <select
                      id="involvement"
                      name="involvement"
                      value={formData.involvement}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="Partner">Partner</option>
                      <option value="Mentor">Mentor</option>
                      <option value="Donor">Donor</option>
                      <option value="Entrepreneur">Entrepreneur</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-gray-700 font-medium mb-1"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Tell us how you'd like to be involved"
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full bg-primary-800 hover:bg-primary-700 text-white py-3 rounded-md font-medium transition-colors duration-300"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;
