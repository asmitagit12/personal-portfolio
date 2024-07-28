import React from 'react'
import myImg from '../assets/profile-img.jpeg'
import htmlLogo from '../assets/html-logo.png';
import cssLogo from '../assets/css-logo.png';
import jsLogo from '../assets/js-logo.png';
import reactLogo from '../assets/react-logo.png';
import tailwindLogo from '../assets/telwindcss-logo.png';
// import bootstrapLogo from './path/to/bootstrap-logo.png';
// import gitLogo from './path/to/git-logo.png';
// import webpackLogo from './path/to/webpack-logo.png';
// import sassLogo from './path/to/sass-logo.png';
import typescriptLogo from '../assets/typescript-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';


const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio website to showcase my skills and projects.",
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    link: "#"
  },
  {
    title: "E-commerce Platform",
    description: "A full-fledged e-commerce platform with a user-friendly interface.",
    technologies: ["React", "Redux", "Material UI"],
    link: "#"
  },
  {
    title: "Trading App",
    description: "A trading application with real-time data and algorithmic trading features.",
    technologies: ["React", "Node.js", "Material UI"],
    link: "#"
  },
  // Add more projects as needed
];
const MainPage = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-10 bg-[#141414]" id="home">
        <div className="col-span-6 h-screen flex justify-center">
          <div className="w-[700px] h-[80%] ml-[150px] flex flex-col justify-center">
            <div className="flex items-center space-x-3">
              <h4 className='text-white text-2xl'>Hey I'm</h4>
              <p className="text-6xl font-semibold text-white">Asmita Patil</p>
            </div>
            <p className="mb-[30px] mt-5 text-white text-3xl">FRONTEND DEVELOPER & WEB DESIGNER</p>
            <div className="flex gap-5 mb-[30px]">
              {/* <button className="border bg-blue-500 text-white font-bold capitalize  hover:bg-violet-600 py-1 px-2 rounded-2xl">RESUME</button>
              <button className="border rounded-2xl py-1 px-2 p-0 text-white capitalize">PROJECTS</button> */}
              <button className="border bg-blue-500 text-white font-bold capitalize hover:bg-violet-600 py-2 px-3 rounded-2xl">
                Resume
              </button>
              <button className="border rounded-2xl py-2 px-3 text-white capitalize">
                Projects
              </button>
            </div>

          </div>
        </div>
        <div className="col-span-6 h-screen">
          <div className="rounded-full overflow-auto w-[450px] flex flex-col justify-center mt-10 ml-10">
            <img src={myImg} alt="Profile" className="" />
          </div>
        </div>
      </div>
      <div id='#about' className="bg-gray-800 text-white p-20">
        {/* About Section */}
        <div className="mb-10 p-10">
          <p className='text-white text-3xl pb-10 font-bold'>About</p>
          <div className="flex items-baseline mb-4">
            <div className="w-20 h-0.5 bg-yellow-500 mr-4 mb-1"></div>
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
        <div className='p-10'>
          <p className='text-white text-3xl pb-10 font-bold'>My Skills</p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
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
            {/* <div className="bg-gray-700 p-4 rounded-lg flex flex-col items-center">
            <img src={vueLogo} alt="Vue.js" className="w-16 h-16 mb-4" />
            <p>Vue.js</p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg flex flex-col items-center">
            <img src={angularLogo} alt="Angular" className="w-16 h-16 mb-4" />
            <p>Angular</p>
          </div> */}
            <div className="bg-gray-700 p-4 rounded-lg flex flex-col items-center">
              <img src={tailwindLogo} alt="Tailwind CSS" className="w-16 h-16 mb-4" />
              <p>Tailwind CSS</p>
            </div>
            {/* <div className="bg-gray-700 p-4 rounded-lg flex flex-col items-center">
            <img src={bootstrapLogo} alt="Bootstrap" className="w-16 h-16 mb-4" />
            <p>Bootstrap</p>
          </div> */}
            {/* <div className="bg-gray-700 p-4 rounded-lg flex flex-col items-center">
            <img src={gitLogo} alt="Git" className="w-16 h-16 mb-4" />
            <p>Git</p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg flex flex-col items-center">
            <img src={webpackLogo} alt="Webpack" className="w-16 h-16 mb-4" />
            <p>Webpack</p>
          </div> */}
            {/* <div className="bg-gray-700 p-4 rounded-lg flex flex-col items-center">
            <img src={sassLogo} alt="Sass" className="w-16 h-16 mb-4" />
            <p>Sass</p>
          </div> */}
            <div className="bg-gray-700 p-4 rounded-lg flex flex-col items-center">
              <img src={typescriptLogo} alt="TypeScript" className="w-16 h-16 mb-4" />
              <p>TypeScript</p>
            </div>
            {/* Add more skills as needed */}
          </div>
        </div>
      </div>
      <div className=" pt-20 pb-20 pl-20 h-full bg-[#141414]">
        <p className='text-white text-3xl pb-10 font-bold ml-5'>Experience</p>
        <ol class="relative border-s border-gray-200 ml-5 dark:border-orange-700">
          <li class="mb-10 ms-4">
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">05/06/2023 - 05/10/2023</time>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Akron Systems , Kolhapur</h3>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-300">Role : Frontend Developer Intern</h3>
            <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Worked as a frontend developer,
              Developed and maintained web applications using React and Typescript , ensuring high-
              quality user interfaces and exceptional user experiences.</p>
            <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Utilized modern web development tools and frameworks to enhance project efficiency
              and maintain code quality.</p>
            {/* <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Learn more <svg class="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg></a> */}
          </li>
          <li class="mb-10 ms-4">
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">06-04-2023 - 06-06-2023</time>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">PHN Technology Pvt Ltd , Pune</h3>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-300">Role : Web Developer Intern</h3>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">Working as a frontend developer,
              Developed and maintained web applications using React and Material UI, ensuring high-
              quality user interfaces and exceptional user experiences.</p>
          </li>
          <li class="ms-4">
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">February 2024</time>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Suyotech Engineering Solutions Pv. Ltd. Kolhapur</h3>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-300">Job Role : Frontend Developer</h3>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">Currently, I am working on developing and maintaining web applications using React and Material UI, ensuring high-quality user interfaces and exceptional user experiences. I am also focused on building trading apps and algorithmic trading systems, creating intuitive and performant interfaces for traders, as well as developing websites with a focus on responsive design and accessibility.</p>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">I am also focused on building trading apps and algorithmic trading systems, creating intuitive and performant interfaces for traders, as well as developing websites with a focus on responsive design and accessibility.</p>
          </li>
        </ol>
      </div>
      <div className="bg-gray-800 text-white p-20 pt-32 pb-32">
        {/* <h3 className='text-white text-3xl pb-10 font-bold ml-5'>Projects</h3> */}
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-left">My Projects</h2>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-700 p-6 rounded-lg shadow-2xl hover:shadow-3xl transition-shadow duration-300 ease-in-out">
                <h3 className="text-2xl font-semibold mb-2 text-blue-100">{project.title}</h3>
                <p className="mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-gray-800 px-3 py-1 rounded-full text-sm">{tech}</span>
                  ))}
                </div>
                <a href={project.link} className="text-blue-400 hover:underline">View Project</a>
              </div>
            ))}
          </div>
        </div>
      </div>
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
    </>
  )
}

export default MainPage



// import React from 'react';
// import myImg from './path/to/your/image.jpg';

// const App = () => {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-[#141414]">
//       <div className="col-span-1 h-screen flex justify-center md:justify-end">
//         <div className="w-[90%] md:w-[400px] h-[80%] md:ml-[150px] flex flex-col justify-center">
//           <div className="flex items-center space-x-3">
//             <h4 className='text-white'>Hey I'm</h4>
//             <p className="text-4xl font-semibold text-white">Asmita Patil</p>
//           </div>
//           <p className="mb-[30px] mt-5 text-white">FRONTEND DEVELOPER & WEB DESIGNER</p>
//           <div className="flex gap-5 mb-[30px]">
//             <button className="border bg-blue-500 text-white font-bold capitalize hover:bg-violet-600 py-1 px-2 rounded-2xl">
//               Resume
//             </button>
//             <button className="border rounded-2xl py-1 px-2 text-white capitalize">
//               Projects
//             </button>
//           </div>
//           <p className="mb-[20px] text-white">
//             Hello! I'm Asmita Patil, a passionate and detail-oriented frontend developer. I specialize in creating beautiful, responsive, and user-friendly web applications. With a strong foundation in HTML, CSS, and JavaScript, and expertise in modern frameworks like React, I strive to bring innovative and efficient solutions to life.
//           </p>
//           <p className='text-white'>
//             My goal is to deliver seamless user experiences while maintaining clean and maintainable code.
//           </p>
//         </div>
//       </div>
//       <div className="col-span-1 h-screen flex justify-center md:justify-start">
//         <div className="rounded-full overflow-hidden w-[90%] md:w-[400px] flex flex-col justify-center mt-10">
//           <img src={myImg} alt="Profile" className="w-full h-auto" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;

