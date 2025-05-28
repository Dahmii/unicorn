import React from "react";
import { Instagram, Twitter, Linkedin, Facebook } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <a href="#" className="flex items-center gap-2">
                <img
                  src="/logo.svg"
                  alt="Unicorn Foundation Logo"
                  style={{ width: "180px", height: "60px" }}
                  className=" object-contain"
                />
              </a>
            </div>
            <p className="text-gray-300 mb-4">
              Empowering Africa's Next Generation of Entrepreneurs
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="text-white hover:text-accent-500 transition-colors duration-300"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-white hover:text-accent-500 transition-colors duration-300"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-white hover:text-accent-500 transition-colors duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-white hover:text-accent-500 transition-colors duration-300"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#program"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Program
                </a>
              </li>
              <li>
                <a
                  href="#grants"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Grants
                </a>
              </li>
              <li>
                <a
                  href="#get-involved"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Get Involved
                </a>
              </li>
              <li>
                <a
                  href="#apply"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Apply Now
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-gray-300">
                12 Innovation Drive, Lagos, Nigeria
              </li>
              <li className="text-gray-300">info@unicorn.ng</li>
              <li className="text-gray-300">+234 (0) 700 UNICORN</li>
            </ul>
          </div>

          <div>
            {/* <h4 className="text-lg font-semibold mb-4">Founders</h4>
            <ul className="space-y-2">
              <li className="text-gray-300">Golden Akinsola</li>
              <li className="text-gray-300">Olumide Somoye</li>
            </ul> */}
            <div className="mt-4">
              <a
                href="#"
                className="inline-block border border-accent-500 text-accent-500 hover:bg-accent-500 hover:text-white px-4 py-2 rounded-md font-medium transition-colors duration-300 text-sm"
              >
                Support Our Mission
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
          <p>© {currentYear} Unicorn by Uspace. All rights reserved.</p>
          <p className="mt-1 flex items-center justify-center">
            powered by Umobiletechnologies
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
