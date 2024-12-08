import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const ContactMe = () => {
  return (
    <div className="bg-[#141414] text-white py-16">
      <div className="container mx-auto max-w-4xl bg-gray-800 p-8 rounded-lg shadow-2xl text-center">
        <h2 className="text-4xl font-bold mb-8 text-orange-400">Contact Me</h2>
        <div className="flex flex-col items-center space-y-8">
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex items-center space-x-2 p-4 bg-gray-700 rounded-lg shadow-lg">
              <FontAwesomeIcon icon={faEnvelope} size="lg" className="text-white" />
              <p className="text-white">asmitapatil9904@gmail.com</p>
            </div>
            <div className="flex items-center space-x-2 p-4 bg-gray-700 rounded-lg shadow-lg">
              <FontAwesomeIcon icon={faPhone} size="lg" className="text-white" />
              <p className="text-white">+91 9823400414</p>
            </div>
          </div>
          <div className="flex items-center space-x-2 p-4 bg-gray-700 rounded-lg shadow-lg">
            <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" className="text-white" />
            <p className="text-white">Kolhapur, Maharashtra</p>
          </div>
          <div className="flex justify-center space-x-4 mt-8">
            <a href="#" className="text-orange-400 hover:text-gray-400 transition duration-300">
              <FontAwesomeIcon icon={faFacebookF} size="lg" />
            </a>
            <a href="#" className="text-orange-400 hover:text-gray-400 transition duration-300">
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
            <a href="#" className="text-orange-400 hover:text-gray-400 transition duration-300">
              <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
            </a>
            <a href="#" className="text-orange-400 hover:text-gray-400 transition duration-300">
              <FontAwesomeIcon icon={faWhatsapp} size="lg" />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center mt-14 text-yellow-500 font-bold">
        
        <p className="mt-2 text-orange-300 text-xl">Have a project in mind?</p>
        <p className="mt-1 text-gray-200">Contact me</p>
        <p className="mt-1 text-gray-200">asmitapatil9904@gmail.com</p>
      </div>
    </div>
  );
}

export default ContactMe;
