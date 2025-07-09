import React from "react";
// import {  } from '@mui/material';
import { BookOpen, Code, Briefcase, User } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-slate-50 to-white"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get to know more about my background and expertise
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ">
          {/* Left Column - Photo Section */}

           <div className="overflow-hidden rounded-4xl w-124 h-full min-h-96 bg-gray-100 flex items-center justify-center">
    <img
      src="images/gray.jpg"
      className="w-full h-full object-contain max-h-[500px]"
      alt="Profile photo"
    />
  </div>

          {/* Right Column - Details Section */}
          <div className="space-y-6">
       
            <div className="shadow-lg rounded-lg border border-gray-200 p-6">
              <div className="flex items-center mb-4">
                <div className="bg-gray-100 p-3 rounded-full mr-4">
                  <BookOpen className="h-5 w-5 text-gray-800" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Education</h3>
              </div>
              <div className="pl-4 border-l-2 border-gray-300">
                <h4 className="font-medium text-gray-900">
                  B.Sc. CSIT - Godawari College
                </h4>
                <p className="text-sm text-gray-500">2077 - 2082</p>
              </div>
            </div>

           
            <div className="shadow-lg rounded-lg border border-gray-200 p-6">
              <div className="flex items-center mb-4">
                <div className="bg-gray-100 p-3 rounded-full mr-4">
                  <Briefcase className="h-5 w-5 text-gray-800" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Experience</h3>
              </div>
              <div className="pl-4 border-l-2 border-gray-300">
                <h4 className="font-medium text-gray-900">
                  Frontend Developer (6 months+)
                </h4>
              </div>
            </div>
            <div className="shadow-lg rounded-lg border border-gray-200 p-6">
              <div className="flex items-center mb-4">
                <div className="bg-gray-100 p-3 rounded-full mr-4">
                  <Briefcase className="h-5 w-5 text-gray-800" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Skills</h3>
              </div>
              <div className="pl-4 border-l-2 border-gray-300">
                <h4 className="font-medium text-gray-900">
                  React, Nextjs, MongoDB, Node.js, HTML/CSS, Git, TypeScript
                </h4>
                <div>
                   
                   
                     
                
                  </div>
              </div>
            </div>
          </div>
        </div>
        {/* Skills
            <div className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-orange-100 p-3 rounded-full mr-4">
                    <Code className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Skills</h3>
                </div>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Technical Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {['JavaScript', 'React', 'Node.js', 'HTML/CSS', 'Git', 'TypeScript'].map((skill) => (
                        <span 
                          key={skill} 
                          className="bg-blue-50 text-blue-800 px-3 py-2 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Soft Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Problem Solving', 'Communication', 'Teamwork', 'Adaptability', 'Time Management'].map((skill) => (
                        <span 
                          key={skill} 
                          className="bg-green-50 text-green-800 px-3 py-2 rounded-full text-sm font-medium hover:bg-green-100 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
      </div>
    </section>
  );
};

export default About;
