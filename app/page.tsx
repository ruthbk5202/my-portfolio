import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
};

const Portfolio: React.FC = () => {
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
                A Full-Stack Developer passionate about building amazing web applications.
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
                className="mt-4 sm:mt-8 inline-block bg-[#B0DB9C] px-4 py-2 sm:px-6 sm:py-3 rounded-lg hover:bg-[#9DCA89] transition-colors font-medium text-sm sm:text-base"
              >
                View My Work
              </a>
            </div>
          </div>
        </div>
      </section>
    
    
      <section id="about" className="py-12 sm:py-20 bg-white min-h-[800px]">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold text-gray-800 mb-2 sm:mb-4">About Me</h2>
            <p className="text-sm sm:text-xl text-gray-600">My professional journey and capabilities</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 relative">
          
            <div className="md:col-span-2 bg-white p-4 sm:p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 md:absolute md:left-0 md:top-0 md:w-1/3">
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="bg-green-100 p-2 sm:p-3 rounded-full mr-3 sm:mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800">Education</h3>
              </div>
              <div className="space-y-3 sm:space-y-4">
                <div className="border-l-4 border-green-500 pl-3 sm:pl-4">
                  <h4 className="font-semibold text-gray-800 text-sm sm:text-base">Master's in Computer Science</h4>
                  <p className="text-gray-600 text-xs sm:text-sm">University of Technology</p>
                  <p className="text-xs text-gray-500">2018 - 2020</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-3 sm:pl-4">
                  <h4 className="font-semibold text-gray-800 text-sm sm:text-base">Bachelor's in Software Engineering</h4>
                  <p className="text-gray-600 text-xs sm:text-sm">State University</p>
                  <p className="text-xs text-gray-500">2014 - 2018</p>
                </div>
              </div>
            </div>

          
            <div className="bg-white p-4 sm:p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 md:absolute md:right-0 md:top-0 md:w-1/3">
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="bg-blue-100 p-2 sm:p-3 rounded-full mr-3 sm:mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800">Skills</h3>
              </div>
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1 sm:mb-2 text-sm sm:text-base">Technical</h4>
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {['JavaScript', 'TypeScript', 'React', 'Node.js', 'Next.js', 'MongoDB', 'GraphQL', 'Docker'].map((skill) => (
                      <span key={skill} className="bg-blue-50 text-blue-800 px-2 py-1 rounded-full text-xs sm:text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1 sm:mb-2 text-sm sm:text-base">Soft Skills</h4>
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {['Team Leadership', 'Problem Solving', 'Communication', 'Project Management'].map((skill) => (
                      <span key={skill} className="bg-green-50 text-green-800 px-2 py-1 rounded-full text-xs sm:text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          
            <div className="md:col-span-2 bg-white p-4 sm:p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 mt-4 sm:mt-8 md:mt-0 md:relative md:top-32 md:mx-auto md:w-1/3">
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="bg-purple-100 p-2 sm:p-3 rounded-full mr-3 sm:mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800">Experience</h3>
              </div>
              <div className="space-y-3 sm:space-y-4">
                <div className="border-l-4 border-purple-500 pl-3 sm:pl-4">
                  <h4 className="font-semibold text-gray-800 text-sm sm:text-base">Senior Developer</h4>
                  <p className="text-gray-600 text-xs sm:text-sm">Tech Solutions Inc.</p>
                  <p className="text-xs text-gray-500">2021 - Present</p>
                  <ul className="mt-1 sm:mt-2 space-y-1 text-gray-600 text-xs sm:text-sm list-disc list-inside">
                    <li>Led team of 5 developers</li>
                    <li>Architected scalable systems</li>
                  </ul>
                </div>
                <div className="border-l-4 border-indigo-500 pl-3 sm:pl-4">
                  <h4 className="font-semibold text-gray-800 text-sm sm:text-base">Software Engineer</h4>
                  <p className="text-gray-600 text-xs sm:text-sm">Digital Creations</p>
                  <p className="text-xs text-gray-500">2018 - 2021</p>
                  <ul className="mt-1 sm:mt-2 space-y-1 text-gray-600 text-xs sm:text-sm list-disc list-inside">
                    <li>Developed core features</li>
                    <li>Improved performance by 40%</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    
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