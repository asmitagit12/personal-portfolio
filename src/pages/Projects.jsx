import React from 'react';
import rect1 from '../assets/images/rect-1.svg'
import rect2 from '../assets/images/rect-2.svg'
import rect3 from '../assets/images/rect-3.svg'
import rect4 from '../assets/images/rect-4.svg'
import rect5 from '../assets/images/rect-5.svg'
import rect6 from '../assets/images/rect-6.svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt, faCode } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio website to showcase my skills and projects.",
      technologies: ["React", "Tailwind CSS", "JavaScript"],
      linkPreview: "https://asmita-patil.web.app/",
      linkCode: "#",
      image: rect1,
    },
    {
      title: "E-commerce Platform",
      description: "A full-fledged e-commerce platform with a user-friendly interface.",
      technologies: ["React", "Next JS", "Tailwind CSS"],
      linkPreview: "#",
      linkCode: "#",
      image: rect2,
    },
    {
      title: "Trading App",
      description: "A trading application with real-time data and algorithmic trading features.",
      technologies: ["React", "Node.js", "Material UI"],
      linkPreview: "#",
      linkCode: "#",
      image: rect3,
    },
    {
      title: "Online Clothing Store",
      description: "An e-commerce platform for browsing and purchasing clothes online.",
      technologies: ["React", "Node.js", "Material UI"],
      linkPreview: "#",
      linkCode: "#",
      image: rect4,
    },
    {
      title: "Employee Management System",
      description: "A system for managing employees, roles, and attendance with an intuitive interface.",
      technologies: ["Next.js", "Node.js", "MongoDB", "ShadCN UI"],
      linkPreview: "#",
      linkCode: "#",
      image: rect3,
    },
    {
      title: "Redux CRUD Application",
      description: "A web app showcasing Create, Read, Update, and Delete operations using Redux for state management.",
      technologies: ["React", "Redux", "Node.js", "Material UI"],
      linkPreview: "#",
      linkCode: "#",
      image: rect6,
    },
    {
      title: "Movie Booking Application",
      description: "A platform for browsing movies, booking tickets, and managing reservations with a user-friendly interface.",
      technologies: ["React", "Redux", "MongoDB", "Material UI"],
      linkPreview: "#",
      linkCode: "#",
      image: rect1,
    },
    {
      title: "Dragon Fly Game",
      description: "An interactive 2D game where players control a dragon to dodge obstacles and score points.",
      technologies: ["HTML", "CSS", "JavaScript"],
      linkPreview: "#",
      linkCode: "#",
      image: rect2,
    },




  ];

  return (
    <div className="bg-gray-800 text-white p-8 mb:p-20 mb:pt-4 pb-32">
      <div className="container mx-auto">
        <div className="flex flex-col items-center space-y-4 mb-16 md:flex-row md:space-y-0 md:space-x-4 md:items-center">
          <h2 className="text-3xl font-bold text-orange-400 whitespace-nowrap text-center md:text-left">
            My Projects
          </h2>
          <h4 className="text-sm text-gray-300 whitespace-nowrap text-center md:text-left">
            Things I've built so far
          </h4>
          <div className="border-t border-orange-400 w-full md:flex-1 animate-fadeInLeft delay-600"></div>
        </div>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg shadow-md overflow-hidden flex flex-col justify-between transition-transform transform hover:scale-105 hover:shadow-xl"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-36 object-cover"
              />
              <div className="p-4 flex-grow">
                <h3 className="text-xl font-semibold mb-2 text-blue-100">
                  {project.title}
                </h3>
                <p className="mb-3 text-gray-400 text-sm">{project.description}</p>
                <h4 className="text-gray-300 font-semibold mb-2 text-sm">Tech Stack:</h4>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-700 px-3 py-1 rounded-full text-xs text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-4 border-t border-gray-700 flex justify-between items-center">
                <a
                  href={project.linkPreview}
                  target='_blank'
                  className="text-orange-400 hover:underline flex items-center gap-2 text-xs"
                >
                  <FontAwesomeIcon icon={faExternalLinkAlt} />
                  Live Preview
                </a>
                <a
                  href={project.linkCode}
                  className="text-orange-400 hover:underline flex items-center gap-2 text-xs"
                >
                  <FontAwesomeIcon icon={faCode} />
                  View Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
