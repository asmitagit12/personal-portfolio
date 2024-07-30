import React from 'react';
import myImg from '../assets/profile-img.jpeg';
import resumeFile from '../assets/resume.pdf'; // Make sure this path is correct based on where you place the resume
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
  const navigate = useNavigate()
  const handleResumeClick = () => {
    window.open(resumeFile);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 justify-center gap-10 bg-[#141414] min-h-screen" id="home">
      <div className="lg:col-span-6 h-screen flex justify-center lg:justify-end">
        <div className="w-full lg:w-[600px] h-full flex flex-col justify-center px-5 lg:px-0">
          <div className="flex flex-col lg:flex-row items-center space-x-0 lg:space-x-3 lg:items-center animate-fadeInLeft">
            <h4 className='text-white text-2xl lg:text-3xl'>Hey I'm</h4>
            <p className="text-4xl md:text-6xl font-semibold text-white lg:text-6xl">Asmita Patil</p>
          </div>
          <p className="mb-5 mt-5 text-white text-xl md:text-3xl lg:text-2xl animate-fadeInLeft delay-500">FRONTEND DEVELOPER & WEB DESIGNER</p>
          <div className="flex flex-col lg:flex-row gap-5 mb-5 animate-fadeInUp delay-1000">
            <button
              className="border bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold capitalize py-2 px-3 lg:py-2 lg:px-4 rounded-2xl mb-2 lg:mb-0 transition-transform transform hover:scale-105 shadow-lg hover:shadow-xl"
              onClick={handleResumeClick}
            >
              Resume
            </button>
            <button
            onClick={()=>{navigate('/projects')}}
              className="border bg-gradient-to-r from-gray-500 to-gray-700 text-white capitalize py-2 px-3 lg:py-2 lg:px-4 rounded-2xl transition-transform transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Projects
            </button>
          </div>

        </div>
      </div>
      <div className="lg:col-span-6 h-screen flex justify-center lg:justify-center">
        <div className="rounded-full overflow-hidden w-[250px] md:w-[300px] lg:w-[400px] flex flex-col justify-center mt-10 lg:mt-0 animate-fadeInRight">
          <img src={myImg} alt="Profile" className="w-full h-auto rounded-full transition-transform transform hover:scale-110 duration-500" />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
