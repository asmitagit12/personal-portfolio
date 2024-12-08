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
import { faUniversity } from '@fortawesome/free-solid-svg-icons';

const educationDetails = [
  {
    degree: "Master of Computer Science",
    institute: "Chatrapati Shahu Institute of Business Education and Research, Kolhapur",
    duration: "2021 - 2023",
    type: "Full Time",
    typeColor: "bg-green-200 text-green-700",
  },
  {
    degree: "Bachelor of Science - Computer Science",
    institute: "Doodhsakhar Mahavidyalay, Bidri",
    duration: "2018 - 2021",
    type: "Full Time",
    // typeColor: "bg-blue-200 text-blue-700",
    typeColor: "bg-green-200 text-green-700",
  },
  {
    degree: "HSC",
    institute: "Shivaraj Junior College, Murgud",
    duration: "2016 - 2018",
    type: "Full Time",
    typeColor: "bg-green-200 text-green-700",
  },
  {
    degree: "SSC",
    institute: "Malage Vidyalay, Malage BK.",
    duration: "2016",
    type: "Full Time",
    typeColor: "bg-green-200 text-green-700",
  },
];

const About = () => {
  return (
    <div id="about" className="bg-gray-800 text-white p-6 md:p-20">
      <div className="mb-10 p-4 md:p-10">
        <p className='text-orange-400 text-3xl pb-10 font-bold'>About Me</p>
        <div className="flex flex-col md:flex-row items-baseline mb-4">
          <div className="w-full md:w-20 h-0.5 bg-yellow-500 mb-4 md:mr-4 md:mb-1"></div>
          <div>
            <div className="flex flex-col md:flex-row items-baseline mb-4">
              {/* Left Side: About Text */}
              <div className="flex-1 mb-6 md:mb-0 w-full md:w-[60%] pr-0 md:pr-12">
                <p className="text-sm">
                  Hello! I'm Asmita Patil, a passionate and detail-oriented frontend developer. I specialize in creating beautiful, responsive, and user-friendly web applications. With a strong foundation in HTML, CSS, and JavaScript, and expertise in modern frameworks like React, I strive to bring innovative and efficient solutions to life.
                </p>
                <p className="text-sm mt-5">
                  My goal is to deliver seamless user experiences while maintaining clean and maintainable code.
                </p>
              </div>

              <div className="flex flex-col gap-4 w-full md:w-[40%]">
                {/* First Box: Frontend Developer */}
                <div className="bg-gray-600 p-4 rounded-lg shadow-lg relative transition-all transform hover:scale-105 hover:shadow-2xl">
                  {/* Closing tag icon in the right corner */}
                  <FontAwesomeIcon
                    icon={faCode}
                    className="absolute top-3 h-6 w-6 right-3 text-orange-300 cursor-pointer"
                  />
                  <p className="text-lg font-semibold">Frontend Developer</p>
                  <a href="/projects" className="text-orange-300 mt-1 inline-block underline">Projects</a>
                </div>

                {/* Second Box: Freelancer */}
                <div className="bg-gray-600 p-4 rounded-lg shadow-lg relative transition-all transform hover:scale-105 hover:shadow-2xl">
                  {/* Code Icon instead of curly braces */}
                  <FontAwesomeIcon
                    icon={faCode}
                    className="absolute top-3 h-6 w-6 right-3 text-orange-300 cursor-pointer"
                  />
                  <p className="text-lg font-semibold">Freelancer</p>
                  <a href="/contact" className="text-orange-300 mt-1 inline-block underline">Hire Me</a>
                </div>
              </div>

            </div>
          </div>
        </div>
        {/* Education Section */}
        <div className='w-full bg-inherit md:bg-gray-900'>

          <div className="p-2 md:p-10 mt-10 md:mt-28">
            <div className="flex flex-col items-center space-y-4 mb-14 md:flex-row md:space-y-0 md:space-x-4 md:items-center">
              <h2 className="text-3xl font-bold text-orange-400 whitespace-nowrap text-center md:text-left">
                Education
              </h2>
              <h4 className="text-sm text-gray-300 text-center md:text-left">
                A glimpse into my academic journey
              </h4>
              <div className="border-t border-orange-400 w-full md:flex-1 animate-fadeInLeft delay-600"></div>
            </div>
            {educationDetails.map((education, index) => (
              <div
                key={index}
                className="bg-gray-700 p-4 rounded-lg shadow-lg mb-6 hover:shadow-2xl hover:scale-105 transform transition duration-300"
              >
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  {/* Left Section */}
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className="flex-shrink-0 w-10 h-10 bg-orange-400 text-white rounded-full flex items-center justify-center hover:bg-orange-500 transition duration-300">
                      <FontAwesomeIcon icon={faUniversity} size="lg" />
                    </div>

                    {/* Education Details */}
                    <div className="space-y-1">
                      <p className="text-lg md:text-lg font-semibold hover:text-orange-400 transition duration-300">
                        {education.degree}
                      </p>
                      <p className="text-gray-300 text-xs md:text-base">
                        {education.institute}
                      </p>
                    </div>
                  </div>

                  {/* Right Section */}
                  <div className="text-left md:text-center space-y-2">
                    <p
                      className={`px-3 py-1 rounded-full text-xs font-medium ${education.typeColor} hover:bg-opacity-80 transition duration-300`}
                    >
                      {education.type}
                    </p>
                    <p className="text-gray-400 text-xs">{education.duration}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>



        {/* Skills Section */}
        <div className='p-4 md:p-10 mt-10 md:mt-28'>
          <div className="flex flex-col items-center space-y-4 mb-16 md:flex-row md:space-y-0 md:space-x-4 md:items-center">
            <h2 className="text-3xl font-bold text-orange-400 whitespace-nowrap text-center md:text-left">
              My Tech Stack
            </h2>
            <h4 className="text-sm text-gray-300 whitespace-nowrap text-center md:text-left">
              Technologies I’ve been working with recently
            </h4>
            <div className="border-t border-orange-400 w-full md:flex-1 animate-fadeInLeft delay-600"></div>
          </div>
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
