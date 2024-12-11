import React from "react";

const experienceDetails = [
  {
    id: 1,
    company: "Suyotech Engineering Solutions Pvt. Ltd. Kolhapur",
    role: "Frontend Developer",
    startDate: "February 2024",
    endDate: "Present",
    description: [
      "Currently, I am working on developing and maintaining web applications using React and Material UI, ensuring high-quality user interfaces and exceptional user experiences.",
      "I am also focused on building trading apps and algorithmic trading systems, creating intuitive and performant interfaces for traders, as well as developing websites with a focus on responsive design and accessibility.",
    ],
  },
  {
    id: 2,
    company: "Akron Systems, Kolhapur",
    role: "Frontend Developer Intern",
    startDate: "05-06-2023",
    endDate: "05-10-2023",
    description: [
      "Worked as a frontend developer, developed and maintained web applications using React and Typescript, ensuring high-quality user interfaces and exceptional user experiences.",
      "Utilized modern web development tools and frameworks to enhance project efficiency and maintain code quality.",
    ],
  },
  {
    id: 3,
    company: "PHN Technology Pvt Ltd, Pune",
    role: "Web Developer Intern",
    startDate: "06-04-2023",
    endDate: "06-06-2023",
    description: [
      "Working as a frontend developer, developed and maintained web applications using React and Material UI, ensuring high-quality user interfaces and exceptional user experiences.",
    ],
  },
  
];

const Experience = () => {
  return (
    <div className="pt-10 pb-10 pl-5 pr-5 md:pl-20 md:pr-20 bg-[#141414] min-h-screen">
      <div className="flex flex-col items-center space-y-4 mb-12 md:flex-row md:space-y-0 md:space-x-4 md:items-center">
        <h2 className="text-3xl font-bold text-orange-400 whitespace-nowrap text-center md:text-left">
          Work Experience
        </h2>
        <h4 className="text-sm text-gray-300 whitespace-nowrap text-center md:text-left">
          Highlights of My Professional Journey
        </h4>
        <div className="border-t border-orange-400 w-full md:flex-1 animate-fadeInLeft delay-600"></div>
      </div>
      <ol className="relative border-l border-orange-700 ml-5 md:ml-10">
        {experienceDetails.map((experience) => (
          <li key={experience.id} className="mb-14 ml-6 group">
            {/* Timeline Marker */}
            <div className="absolute w-3 h-3 bg-orange-400 rounded-full mt-1.5 -left-1.5 group-hover:scale-125 transition-transform duration-300"></div>

            {/* Experience Content */}
            <time className="mb-1 text-xs md:text-base font-normal leading-none text-gray-400 dark:text-gray-500">
              {experience.startDate} - {experience.endDate}
            </time>
            <h3 className="text-base md:text-lg font-semibold text-white">
              {experience.company}
            </h3>
            <h4 className="text-base md:text-sm font-semibold text-gray-300">
              Role: {experience.role}
            </h4>
            <div className="space-y-2">
              {experience.description.map((desc, idx) => (
                <p
                  key={idx}
                  className="text-sm font-normal text-gray-500 dark:text-gray-400 group-hover:text-gray-300 transition-colors duration-300"
                >
                  {desc}
                </p>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Experience;
