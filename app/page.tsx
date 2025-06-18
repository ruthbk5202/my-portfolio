import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import About from "./components/About";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
};

const  Portfolio: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Project 1",
      description: "A web application built with React and Tailwind CSS.",
      image: "https://via.placeholder.com/300",
      link: "#",
    },
    {
      id: 2,
      title: "Project 2",
      description: "An e-commerce platform built with Node.js and MongoDB.",
      image: "https://via.placeholder.com/300",
      link: "#",
    },
    {
      id: 3,
      title: "Project 3",
      description: "A portfolio website built with Next.js and Tailwind CSS.",
      image: "https://via.placeholder.com/300",
      link: "#",
    },
  ];

  return (
    <div className="bg-gray-50 text-gray-800 font-sans min-h-screen overflow-x-hidden">
      <nav className="relative">
        <div className="absolute top-0 left-0 w-full h-24 bg-[#F8FBF7] overflow-hidden">
          <div className="absolute bottom-0 left-0 w-full h-20 bg-[#F8FBF7] rounded-b-[60%]"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10 pt-8">
          <div className="flex justify-between items-center">
            <a href="#" className="text-xl sm:text-2xl font-bold text-gray-800">
              Ruth Bishwakarma
            </a>
            <ul className="flex space-x-4 sm:space-x-6">
              <li>
                <a href="#about" className="text-gray-600 hover:text-[#B0DB9C] transition-colors font-medium text-sm sm:text-base">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-600 hover:text-[#B0DB9C] transition-colors font-medium text-sm sm:text-base">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-600 hover:text-[#B0DB9C] transition-colors font-medium text-sm sm:text-base">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section className="min-h-[90vh] bg-[#F8FBF7] pt-16 pb-8">
        <div className="container mx-auto h-full px-4 sm:px-6 flex items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center md:justify-end">
              <img 
                src="images/ruth.png" 
                alt="Ruth Bishwakarma"
                className="w-64 h-64 sm:w-80 sm:h-80 object-cover object-center bg-[#B0DB9C]"
                style={{ 
                  objectPosition: '50% 10%',
                  clipPath: 'circle()'
                }} 
              />
            </div>
            <div className="text-center md:text-left px-2 sm:px-6">
              <p className="text-sm sm:text-base">Hi, I am </p>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-2 sm:mb-4">
                Ruth Bishwakarma
              </h1>
              <p className="mt-2 sm:mt-4 text-sm sm:text-xl text-gray-600 max-w-2xl mx-auto md:mx-0">
                A Frontend Developer passionate about building amazing web applications.
              </p>
              <div className="flex justify-center md:justify-start space-x-4 sm:space-x-6 mt-4 sm:mt-6">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#B0DB9C] transition-colors"
                >
                  <FaGithub className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#B0DB9C] transition-colors"
                >
                  <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
                <a
                  href="mailto:ruthbishwakarma19@gmail.com"
                  className="text-gray-600 hover:text-[#B0DB9C] transition-colors"
                >
                  <FaEnvelope className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
              </div>
              <a
                href="#projects"
                className="mt-4 sm:mt-8 inline-block bg-[#B0DB9C]  border border-gray-900 px-4 py-2 sm:px-6 sm:py-3 rounded-full hover:bg-[#9DCA89] transition-colors font-medium text-sm sm:text-base"
              >
                View My Work
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* <section id="about" className="py-12 sm:py-20 bg-white min-h-[800px]">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold text-gray-800 mb-2 sm:mb-4">About Me</h2>
            <p className="text-sm sm:text-xl text-gray-600">My professional journey and capabilities</p>
          </div>
          <About/>
        </div>
      </section> */}
      <About/>
    
      <section id="projects" className="py-12 sm:py-20 bg-[#F8FBF7]">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-800 text-center mb-6 sm:mb-12">
            My Projects
          </h2>
          <div className="mt-6 sm:mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-[#E8F4E3]"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-lg w-full h-32 sm:h-48 object-cover"
                />
                <h3 className="mt-3 sm:mt-4 text-lg sm:text-xl font-bold text-gray-800">
                  {project.title}
                </h3>
                <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-gray-600">{project.description}</p>
                <a
                  href={project.link}
                  className="mt-2 sm:mt-4 inline-block text-[#B0DB9C] hover:text-[#9DCA89] font-medium text-xs sm:text-sm"
                >
                  View Project →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
  
      <section id="contact" className="py-12 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-800 text-center mb-6 sm:mb-12">
            Contact Me
          </h2>
          <form className="mt-6 sm:mt-8 max-w-lg mx-auto">
            <div className="mb-4 sm:mb-6">
              <label htmlFor="name" className="block text-gray-700 mb-1 sm:mb-2 text-sm sm:text-base">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-3 py-2 sm:px-4 sm:py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B0DB9C] focus:border-transparent text-sm sm:text-base"
              />
            </div>
            <div className="mb-4 sm:mb-6">
              <label htmlFor="email" className="block text-gray-700 mb-1 sm:mb-2 text-sm sm:text-base">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 sm:px-4 sm:py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B0DB9C] focus:border-transparent text-sm sm:text-base"
              />
            </div>
            <div className="mb-4 sm:mb-6">
              <label htmlFor="message" className="block text-gray-700 mb-1 sm:mb-2 text-sm sm:text-base">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-3 py-2 sm:px-4 sm:py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B0DB9C] focus:border-transparent text-sm sm:text-base"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#B0DB9C] text-gray-800 px-4 py-2 sm:px-6 sm:py-3 rounded-lg hover:bg-[#9DCA89] transition-colors font-medium text-sm sm:text-base"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      <footer className="bg-[#E8F4E3] py-4 sm:py-6">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <div className="flex justify-center space-x-4 sm:space-x-6 mb-2 sm:mb-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#B0DB9C] transition-colors"
            >
              <FaGithub className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#B0DB9C] transition-colors"
            >
              <FaLinkedin className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a
              href="mailto:ruthbishwakarma19@gmail.com"
              className="text-gray-600 hover:text-[#B0DB9C] transition-colors"
            >
              <FaEnvelope className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </div>
          <p className="text-gray-600 text-xs sm:text-sm">© {new Date().getFullYear()} Ruth Bishwakarma. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;