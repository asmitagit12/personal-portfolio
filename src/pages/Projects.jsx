import React from 'react'

const Projects = () => {

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
  return (
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
  )
}

export default Projects
