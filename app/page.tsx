"use client";
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaExternalLinkAlt } from "react-icons/fa";
import About from "./components/About";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  githubLink: string;
  demoLink: string;
  tags: string[];
};

const Portfolio: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Reminder System",
      description: "A comprehensive vaccination reminder system built with Next.js and Tailwind CSS that helps users track important medical dates.",
      image: "/images/vaccinereminder.png",
      link: "#",
      githubLink: "https://github.com/ruthbk5202/vaccine-reminder-demo-web-app",
      demoLink: "https://vaccine-reminder-demo-web-app.vercel.app/",
      tags: ["Next.js", "Tailwind CSS", "Firebase"]
    },
    {
      id: 2,
      title: "Blooming Delights",
      description: "An e-commerce platform for floral arrangements with cart functionality and payment integration.",
      image: "/images/blooming.png",
      link: "#",
      githubLink: "https://github.com/ruthbk5202/ecommerce-demo",
      demoLink: "#",
      tags: ["React", "Node.js", "MongoDB"]
    },
   
  ];

  // Smooth scroll handler
  const handleSmoothScroll = (e: React.MouseEvent, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="bg-gray-50 text-gray-800 font-sans min-h-screen overflow-x-hidden antialiased scroll-smooth">
      {/* Navigation */}
      <nav className="relative">
        <div className="absolute top-0 left-0 w-full h-24 bg-[#F8FBF7] overflow-hidden">
          <div className="absolute bottom-0 left-0 w-full h-20 bg-[#F8FBF7] rounded-b-[60%]"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10 pt-8">
          <div className="flex justify-between items-center">
            <a 
              href="#" 
              className="text-xl sm:text-2xl font-bold text-gray-800 tracking-tight"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              Ruth Bishwakarma
            </a>
            <ul className="flex space-x-4 sm:space-x-6">
              <li>
                <a 
                  href="#about" 
                  className="text-gray-600 hover:text-[#B0DB9C] transition-colors font-medium text-base"
                  onClick={(e) => handleSmoothScroll(e, 'about')}
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  className="text-gray-600 hover:text-[#B0DB9C] transition-colors font-medium text-base"
                  onClick={(e) => handleSmoothScroll(e, 'projects')}
                >
                  Projects
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-gray-600 hover:text-[#B0DB9C] transition-colors font-medium text-base"
                  onClick={(e) => handleSmoothScroll(e, 'contact')}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-[90vh] bg-[#F8FBF7] pt-16 pb-8">
        <div className="container mx-auto h-full px-4 sm:px-6 flex items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center md:justify-end">
              <img 
                src="/images/ruth.png" 
                alt="Ruth Bishwakarma"
                className="w-64 h-64 sm:w-80 sm:h-80 object-cover object-center bg-[#B0DB9C]"
                style={{ 
                  objectPosition: '50% 10%',
                  clipPath: 'circle()'
                }} 
              />
            </div>
            <div className="text-center md:text-left px-2 sm:px-6">
              <p className="text-base sm:text-lg text-gray-600 mb-1">Hi, I am</p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-4 sm:mb-6 leading-tight">
                Ruth Bishwakarma
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto md:mx-0 mb-6">
                A Frontend Developer passionate about building amazing web applications with great user experiences.
              </p>
              <div className="flex justify-center md:justify-start space-x-4 sm:space-x-6 mb-6">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#B0DB9C] transition-colors"
                >
                  <FaGithub className="w-6 h-6" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#B0DB9C] transition-colors"
                >
                  <FaLinkedin className="w-6 h-6" />
                </a>
                <a
                  href="mailto:ruthbishwakarma19@gmail.com"
                  className="text-gray-600 hover:text-[#B0DB9C] transition-colors"
                >
                  <FaEnvelope className="w-6 h-6" />
                </a>
              </div>
              <a
                href="#projects"
                className="inline-block bg-[#B0DB9C] border border-gray-900 px-6 py-3 rounded-full hover:bg-[#9DCA89] transition-colors font-medium text-base"
                onClick={(e) => handleSmoothScroll(e, 'projects')}
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <About />
    
      {/* Projects Section */}
      <section id="projects" className="py-16 sm:py-24 ">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3">Featured Projects</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Some of my best work and contributions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col"
              >
                <div className="h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  </div>
                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tags.map((tag, index) => (
                        <span key={index} className="text-xs bg-[#E8F4E3] text-[#5E8F4D] px-3 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <a 
                        href={project.githubLink} 
                        className="flex-1 flex items-center justify-center gap-2 bg-[#5E8F4D] hover:bg-[#4A7A3A] text-white px-4 py-2 rounded-full text-sm font-medium transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub className="text-sm" />
                        Code
                      </a>
                      <a 
                        href={project.demoLink} 
                        className="flex-1 flex items-center justify-center gap-2 bg-white border border-[#5E8F4D] text-[#5E8F4D] hover:bg-[#F8FBF7] px-4 py-2 rounded-full text-sm font-medium transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaExternalLinkAlt className="text-sm" />
                        Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  
      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3">Get In Touch</h2>
            <p className="text-lg text-gray-600">Have a project in mind or want to collaborate? Feel free to reach out!</p>
          </div>
          
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-2 text-base">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B0DB9C] focus:border-transparent text-base"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 mb-2 text-base">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B0DB9C] focus:border-transparent text-base"
                placeholder="Your email"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 mb-2 text-base">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B0DB9C] focus:border-transparent text-base"
                placeholder="Your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#B0DB9C] hover:bg-[#9DCA89] text-gray-800 font-medium px-6 py-3 rounded-lg transition-colors text-base"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#E8F4E3] py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col items-center">
            <div className="flex space-x-6 mb-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#5E8F4D] transition-colors"
              >
                <FaGithub className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#5E8F4D] transition-colors"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:ruthbishwakarma19@gmail.com"
                className="text-gray-600 hover:text-[#5E8F4D] transition-colors"
              >
                <FaEnvelope className="w-6 h-6" />
              </a>
            </div>
            <p className="text-gray-600 text-sm">© {new Date().getFullYear()} Ruth Bishwakarma. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;