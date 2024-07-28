import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-2">About Me</h2>
            <p className="text-gray-400">
              I am a passionate web developer with experience in creating dynamic and responsive websites. Let's connect and build something amazing together.
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-2">Quick Links</h2>
            <ul>
              <li className="mb-2">
                <a href="/" className="text-gray-400 hover:text-white">Home</a>
              </li>
              <li className="mb-2">
                <a href="/about" className="text-gray-400 hover:text-white">About</a>
              </li>
              <li className="mb-2">
                <a href="/portfolio" className="text-gray-400 hover:text-white">Portfolio</a>
              </li>
              <li className="mb-2">
                <a href="/contact" className="text-gray-400 hover:text-white">Contact</a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-2">Contact</h2>
            <ul>
              <li className="mb-2">
                <a href="mailto:youremail@example.com" className="text-gray-400 hover:text-white">asmitapatil9904@gmail.com</a>
              </li>
              <li className="mb-2">
                <a href="tel:+1234567890" className="text-gray-400 hover:text-white">+91 9823400414</a>
              </li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          &copy; {new Date().getFullYear()} asmita patil. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
