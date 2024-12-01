import React from 'react';

const Experience = () => {
  return (
    <div className="pt-10 pb-10 pl-5 pr-5 md:pl-20 md:pr-20 bg-[#141414] min-h-screen">
      <p className='text-white text-2xl md:text-3xl pb-5 font-bold ml-5'>Experience</p>
      <ol className="relative border-s border-gray-200 ml-5 dark:border-orange-700">
        <li className="ms-4 mb-10">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-xs md:text-sm font-normal leading-none text-gray-400 dark:text-gray-500">February 2024</time>
          <h3 className="text-base md:text-lg font-semibold  text-white">Suyotech Engineering Solutions Pv. Ltd. Kolhapur</h3>
          <h3 className="text-base md:text-lg font-semibold  text-gray-300">Job Role : Frontend Developer</h3>
          <p className="text-sm md:text-base font-normal text-gray-500 dark:text-gray-400 w-full md:w-[1200px]">Currently, I am working on developing and maintaining web applications using React and Material UI, ensuring high-quality user interfaces and exceptional user experiences.</p>
          <p className="text-sm md:text-base font-normal text-gray-500 dark:text-gray-400 mt-5">I am also focused on building trading apps and algorithmic trading systems, creating intuitive and performant interfaces for traders, as well as developing websites with a focus on responsive design and accessibility.</p>
        </li>
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-xs md:text-sm font-normal leading-none text-gray-400 dark:text-gray-500">06-04-2023 - 06-06-2023</time>
          <h3 className="text-base md:text-lg font-semibold  text-white">PHN Technology Pvt Ltd, Pune</h3>
          <h3 className="text-base md:text-lg font-semibold  text-gray-300">Role : Web Developer Intern</h3>
          <p className="text-sm md:text-base font-normal text-gray-500 dark:text-gray-400">Working as a frontend developer, Developed and maintained web applications using React and Material UI, ensuring high-quality user interfaces and exceptional user experiences.</p>
        </li>
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-xs md:text-sm font-normal leading-none text-gray-400 dark:text-gray-500">05/06/2023 - 05/10/2023</time>
          <h3 className="text-base md:text-lg font-semibold text-white">Akron Systems, Kolhapur</h3>
          <h3 className="text-base md:text-lg font-semibold  text-gray-300">Role : Frontend Developer Intern</h3>
          <p className="text-sm md:text-base font-normal text-gray-500 dark:text-gray-400">Worked as a frontend developer, Developed and maintained web applications using React and Typescript, ensuring high-quality user interfaces and exceptional user experiences.</p>
          <p className="text-sm md:text-base font-normal text-gray-500 dark:text-gray-400">Utilized modern web development tools and frameworks to enhance project efficiency and maintain code quality.</p>
        </li>
      </ol>
    </div>
  );
};

export default Experience;
