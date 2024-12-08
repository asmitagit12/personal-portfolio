import React from 'react';
import myImg from '../assets/profile-img.jpeg';
import whiteBg from '../assets/white.jpg';
import resumeFile from '../assets/resume.pdf'; // Make sure this path is correct based on where you place the resume
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
  const navigate = useNavigate()
  const handleResumeClick = () => {
    window.open(resumeFile);
  };

  return (
    <div
      className="grid grid-cols-1 lg:grid-cols-12 justify-center gap-10 min-h-screen"
      id="home"
      style={{
        background: 'radial-gradient(circle, rgba(54, 69, 79) 8%, rgba(20, 20, 20, 1) 50%)',
      }}
    >
      {/* // <div className="grid grid-cols-1 lg:grid-cols-12 justify-center gap-10 bg-[#141414] min-h-screen" id="home"> */}
      <div className="lg:col-span-6 flex justify-center md:justify-end mt-10 md:mt-0">
        <div className="w-full lg:w-[600px] h-full flex flex-col justify-center px-5 lg:px-10 space-y-6">
          {/* Heading Section */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center lg:space-x-2 space-y-2 lg:space-y-0  animate-fadeInLeft">
            <h4 className="text-white text-2xl lg:text-3xl text-left">Hey, I'm</h4>
            <p className="text-4xl md:text-6xl lg:text-4xl font-semibold text-orange-400 text-left">
              Asmita Patil
            </p>
          </div>
          {/* Role Section */}
          <p className="text-white text-xl md:text-2xl animate-fadeInLeft delay-500">
            FRONTEND DEVELOPER & WEB DESIGNER
          </p>
          {/* Separator */}
          <div className=" border-t w-full border-orange-400 mx-auto animate-fadeInLeft delay-600"></div>

          {/* Intro Section */}
          <div className="text-slate-100 space-y-4 animate-fadeInLeft text-sm delay-700">
            <p>
              I specialize in building responsive and user-friendly web applications.
              I love turning ideas into reality through creative and functional
              designs.
            </p>
            <p>
              I’m passionate about delivering seamless user experiences and
              constantly strive to learn, innovate, and bring value through my work.
            </p>
            <p>Let’s create something amazing together!</p>
          </div>
          {/* Buttons Section */}
          <div className="flex flex-col lg:flex-row gap-5 animate-fadeInUp delay-1000">
            <button
              className="relative w-full py-2 px-3  bg-gradient-to-r from-orange-400 to-orange-600 text-white font-semibold capitalize  rounded-2xl transition-transform transform hover:scale-105 shadow-lg overflow-hidden"
              onClick={handleResumeClick}
            >
              <span
                className="absolute inset-0 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-400 transform scale-x-0 origin-left transition-transform duration-300 ease-out hover:scale-x-100"
                style={{
                  zIndex: -1,
                }}
              ></span>
              <span className="relative z-10">Resume</span>
            </button>

            <button
              onClick={() => navigate('/projects')}
              className="w-full  bg-gradient-to-r from-gray-300 to-gray-700 text-white capitalize py-2 px-3 rounded-2xl transition-transform transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Projects
            </button>
          </div>

        </div>
      </div>

      <div className="lg:col-span-6 h-screen flex justify-center items-center lg:justify-center">
        <div className="relative w-[250px] md:w-[400px] lg:w-[400px] flex flex-col justify-center mt-10 lg:mt-0 animate-fadeInRight">

          {/* First Image - Background Layer */}
          <img
            src={whiteBg}
            alt="Profile"
            className="w-full h-[30rem] lg:w-80 object-cover rounded-tl-[60px] rounded-br-[60px] transition-transform transform hover:scale-90 duration-500 absolute top-[1.5] right-[-4] left-2 lg:left-9 z-10"
          />

          {/* Second Image - Top Layer with Paper-like Elevation */}
          <img
            src={myImg}
            alt="Profile"
            className="w-full h-[30rem] lg:w-80 object-cover rounded-tl-[60px] rounded-br-[60px] transition-transform transform scale-95 duration-500 z-20 shadow-slate-900 hover:shadow-2xl hover:scale-100"
          />


        </div>
      </div>
    </div>
  );
};

export default MainPage;
