import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const ContactMe = () => {
  return (
    <div className="bg-[#141414] text-white min-h-screen p-8 flex items-center justify-center">
        <div className="container mx-auto max-w-2xl bg-gray-800 p-8 rounded-lg shadow-2xl">
          <h2 className="text-4xl font-bold mb-8 text-center">Contact Me</h2>
          <div className="space-y-8">
            <div className="flex items-center space-x-6 p-4 bg-gray-700 rounded-lg shadow-lg hover:bg-gray-600 transition duration-300">
              <FontAwesomeIcon icon={faEnvelope} size="2x" className="text-blue-500" />
              <div>
                <h3 className="text-xl font-semibold">Email</h3>
                <p className="text-gray-400">asmitapatil9904@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-6 p-4 bg-gray-700 rounded-lg shadow-lg hover:bg-gray-600 transition duration-300">
              <FontAwesomeIcon icon={faPhone} size="2x" className="text-green-500" />
              <div>
                <h3 className="text-xl font-semibold">Mobile</h3>
                <p className="text-gray-400">+91 9823400414</p>
              </div>
            </div>
            <div className="flex items-center space-x-6 p-4 bg-gray-700 rounded-lg shadow-lg hover:bg-gray-600 transition duration-300">
              <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" className="text-red-500" />
              <div>
                <h3 className="text-xl font-semibold">Address</h3>
                <p className="text-gray-400">Kolhapur, Maharashtra</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default ContactMe
