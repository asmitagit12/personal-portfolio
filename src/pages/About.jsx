import React from 'react'
import htmlLogo from '../assets/html-logo.png';
import cssLogo from '../assets/css-logo.png';
import jsLogo from '../assets/js-logo.png';
import reactLogo from '../assets/react-logo.png';
import tailwindLogo from '../assets/telwindcss-logo.png';
import typescriptLogo from '../assets/typescript-logo.png';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons'; // Correct import for curly braces icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div id="about" className="bg-gray-800 text-white p-6 md:p-20">
      <div className="mb-10 p-4 md:p-10">
        <p className='text-orange-400 text-4xl pb-10 font-bold'>About Me</p>
        <div className="flex flex-col md:flex-row items-baseline mb-4">
          <div className="w-full md:w-20 h-0.5 bg-yellow-500 mb-4 md:mr-4 md:mb-1"></div>
          <div>
            <div className="flex flex-col md:flex-row items-baseline mb-4">
              {/* Left Side: About Text */}
              <div className="flex-1 mb-6 md:mb-0 w-full md:w-[60%] pr-6 md:pr-12">
                <p className="text-lg">
                  Hello! I'm Asmita Patil, a passionate and detail-oriented frontend developer. I specialize in creating beautiful, responsive, and user-friendly web applications. With a strong foundation in HTML, CSS, and JavaScript, and expertise in modern frameworks like React, I strive to bring innovative and efficient solutions to life.
                </p>
                <p className="text-lg mt-5">
                  My goal is to deliver seamless user experiences while maintaining clean and maintainable code.
                </p>
              </div>

              <div className="flex flex-col gap-4 w-full md:w-[40%]">
                {/* First Box: Frontend Developer */}
                <div className="bg-gray-600 p-4 rounded-lg shadow-lg relative transition-all transform hover:scale-105 hover:shadow-2xl">
                  {/* Closing tag icon in the right corner */}
                  <FontAwesomeIcon
                    icon={faCode}
                    className="absolute top-3 h-8 w-8 right-3 text-orange-300 cursor-pointer"
                  />
                  <p className="text-xl font-semibold">Frontend Developer</p>
                  <a href="/projects" className="text-orange-300 mt-2 inline-block underline">Projects</a>
                </div>

                {/* Second Box: Freelancer */}
                <div className="bg-gray-600 p-4 rounded-lg shadow-lg relative transition-all transform hover:scale-105 hover:shadow-2xl">
                  {/* Code Icon instead of curly braces */}
                  <FontAwesomeIcon
                    icon={faCode}
                    className="absolute top-3 h-8 w-8 right-3 text-orange-300 cursor-pointer"
                  />
                  <p className="text-xl font-semibold">Freelancer</p>
                  <a href="/contact" className="text-orange-300 mt-2 inline-block underline">Hire Me</a>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className='p-4 md:p-10 mt-10 md:mt-28'>
          <p className='text-orange-400 text-3xl pb-10 font-bold'>My Skills</p>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {/* Skill Item */}
            <motion.div
              className="bg-gray-700 p-4 rounded-lg flex flex-col items-center"
              whileHover={{ scale: 1.1, opacity: 0.9 }} // Scale and fade effect on hover
              transition={{ duration: 0.3 }} // Smooth transition
            >
              <img src={htmlLogo} alt="HTML" className="w-16 h-16 mb-4" />
              <p>HTML</p>
            </motion.div>

            <motion.div
              className="bg-gray-700 p-4 rounded-lg flex flex-col items-center"
              whileHover={{ scale: 1.1, opacity: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <img src={cssLogo} alt="CSS" className="w-16 h-16 mb-4" />
              <p>CSS</p>
            </motion.div>

            <motion.div
              className="bg-gray-700 p-4 rounded-lg flex flex-col items-center"
              whileHover={{ scale: 1.1, opacity: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <img src={jsLogo} alt="JavaScript" className="w-16 h-16 mb-4" />
              <p>JavaScript</p>
            </motion.div>

            <motion.div
              className="bg-gray-700 p-4 rounded-lg flex flex-col items-center"
              whileHover={{ scale: 1.1, opacity: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <img src={reactLogo} alt="React" className="w-16 h-16 mb-4" />
              <p>React</p>
            </motion.div>

            <motion.div
              className="bg-gray-700 p-4 rounded-lg flex flex-col items-center"
              whileHover={{ scale: 1.1, opacity: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <img src={tailwindLogo} alt="Tailwind CSS" className="w-16 h-16 mb-4" />
              <p>Tailwind CSS</p>
            </motion.div>

            <motion.div
              className="bg-gray-700 p-4 rounded-lg flex flex-col items-center"
              whileHover={{ scale: 1.1, opacity: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <img src={typescriptLogo} alt="TypeScript" className="w-16 h-16 mb-4" />
              <p>TypeScript</p>
            </motion.div>

            {/* Add more skills as needed */}
          </div>
        </div>
      </div>
    </div>

  )
}

export default About
