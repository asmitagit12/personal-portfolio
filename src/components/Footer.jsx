import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-wrap justify-between gap-8">
          {/* About Section */}
          <div className="w-full md:w-1/3">
            <h2 className="text-xl font-bold text-orange-400 mb-4">About Me</h2>
            <p className="text-gray-400">
              I’m a passionate web developer with expertise in creating dynamic, responsive, and user-friendly websites. Let's connect to build something extraordinary.
            </p>
          </div>

          {/* Quick Links */}
          <div className="w-full md:w-1/3">
            <h2 className="text-xl font-bold text-orange-400 mb-4">Quick Links</h2>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-gray-400 hover:text-orange-400 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-400 hover:text-orange-400 transition">
                  About
                </a>
              </li>
              <li>
                <a href="/projects" className="text-gray-400 hover:text-orange-400 transition">
                  Projects
                </a>
              </li>
              <li>
                <a href="/experience" className="text-gray-400 hover:text-orange-400 transition">
                  Experience
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-orange-400 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="w-full md:w-1/3">
            <h2 className="text-xl font-bold text-orange-400 mb-4">Contact</h2>
            <ul className="space-y-3">
              <li>
                <a href="mailto:asmitapatil9904@gmail.com" className="text-gray-400 hover:text-orange-400 transition">
                  asmitapatil9904@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+919823400414" className="text-gray-400 hover:text-orange-400 transition">
                  +91 9823400414
                </a>
              </li>
            </ul>
            <div className="flex space-x-6 mt-6">
              <a
                href="https://github.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-400 transition"
              >
                <i className="fab fa-github text-xl"></i>
              </a>
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-400 transition"
              >
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a
                href="https://twitter.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-400 transition"
              >
                <i className="fab fa-twitter text-xl"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-gray-700"></div>

        {/* Footer Bottom */}
        <div className="text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Asmita Patil. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
