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
    <div className="bg-black text-white font-sans">
    
      <nav className="bg-gray-900 p-6 fixed w-full top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-gray-300">
            My Portfolio
          </a>
          <ul className="flex space-x-6">
            <li>
              <a href="#about" className="hover:text-gray-400">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-gray-400">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-400">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

     
      <section className="h-screen flex items-center justify-center bg-gray-900">
        <div className="text-center px-6 py-6">
          <h1 className="text-6xl font-bold text-gray-300">
            Hi, I'm Ruth Bishwakarma
          </h1>
          <p className="mt-4 text-xl text-gray-400 space-y-6 py-6">
            A Full-Stack Developer passionate about building amazing web
            applications.
          </p>
          <div className="flex justify-center space-x-8 space-y-8">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="mailto:john.doe@example.com"
            className="text-gray-400 hover:text-white"
          >
            <FaEnvelope size={24} />
          </a>
        </div>
          <a
            href="#projects"
            className="mt-8 inline-block bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700"
          >
            View My Work
          </a>
        </div>
      </section>

    
      <section id="about" className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-300 text-center">
            About Me
          </h2>
          <div className="mt-8 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/053/630/749/small/a-beautiful-young-business-woman-in-a-suit-and-tie-photo.jpeg"
                alt="Profile"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 md:ml-8 mt-8 md:mt-0">
              <p className="text-gray-400 leading-relaxed">
                I'm a passionate developer with over in
                building scalable and user-friendly web applications. I
                specialize in typeScript, Nextjs, Node.js, and regular css. I
                love solving complex problems and turning ideas into reality.
              </p>
              <p className="mt-4 text-gray-400 leading-relaxed">
                When I'm not coding, I enjoy crocheting and exploring
                new technologies.
              </p>
            </div>
          </div>
        </div>
      </section>

  
      <section id="projects" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-300 text-center">
            My Projects
          </h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-gray-800 p-6 rounded-lg shadow-lg"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-lg"
                />
                <h3 className="mt-4 text-xl font-bold text-gray-300">
                  {project.title}
                </h3>
                <p className="mt-2 text-gray-400">{project.description}</p>
                <a
                  href={project.link}
                  className="mt-4 inline-block text-gray-300 hover:underline"
                >
                  View Project
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section id="contact" className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-300 text-center">
            Contact Me
          </h2>
          <form className="mt-8 max-w-lg mx-auto">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-300">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600 text-gray-300"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600 text-gray-300"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-300">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600 text-gray-300"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      
      <footer className="bg-gray-900 py-6">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">© 2023 John Doe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;