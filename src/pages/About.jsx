import React from 'react'
import htmlLogo from '../assets/html-logo.png';
import cssLogo from '../assets/css-logo.png';
import jsLogo from '../assets/js-logo.png';
import reactLogo from '../assets/react-logo.png';
import tailwindLogo from '../assets/telwindcss-logo.png';
import typescriptLogo from '../assets/typescript-logo.png';

const About = () => {
  return (
    <div id="about" className="bg-gray-800 text-white p-6 md:p-20">
        {/* About Section */}
        <div className="mb-10 p-4 md:p-10">
          <p className='text-white text-3xl pb-10 font-bold'>About</p>
          <div className="flex flex-col md:flex-row items-baseline mb-4">
            <div className="w-20 h-0.5 bg-yellow-500 mb-4 md:mr-4 md:mb-1"></div>
            <div>
              <p className="text-lg">
                Hello! I'm Asmita Patil, a passionate and detail-oriented frontend developer. I specialize in creating beautiful, responsive, and user-friendly web applications. With a strong foundation in HTML, CSS, and JavaScript, and expertise in modern frameworks like React, I strive to bring innovative and efficient solutions to life.
              </p>
              <p className="text-lg mt-5">
                My goal is to deliver seamless user experiences while maintaining clean and maintainable code.
              </p>
            </div>
          </div>
        </div>
        {/* Skills Section */}
        <div className='p-4 md:p-10 mt-10 md:mt-28'>
          <p className='text-white text-3xl pb-10 font-bold'>My Skills</p>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {/* Skill Item */}
            <div className="bg-gray-700 p-4 rounded-lg flex flex-col items-center">
              <img src={htmlLogo} alt="HTML" className="w-16 h-16 mb-4" />
              <p>HTML</p>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg flex flex-col items-center">
              <img src={cssLogo} alt="CSS" className="w-16 h-16 mb-4" />
              <p>CSS</p>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg flex flex-col items-center">
              <img src={jsLogo} alt="JavaScript" className="w-16 h-16 mb-4" />
              <p>JavaScript</p>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg flex flex-col items-center">
              <img src={reactLogo} alt="React" className="w-16 h-16 mb-4" />
              <p>React</p>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg flex flex-col items-center">
              <img src={tailwindLogo} alt="Tailwind CSS" className="w-16 h-16 mb-4" />
              <p>Tailwind CSS</p>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg flex flex-col items-center">
              <img src={typescriptLogo} alt="TypeScript" className="w-16 h-16 mb-4" />
              <p>TypeScript</p>
            </div>
            {/* Add more skills as needed */}
          </div>
        </div>
      </div>
  )
}

export default About
