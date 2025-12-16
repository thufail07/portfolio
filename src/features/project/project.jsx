// Projects.jsx
import React from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

function Projects() {
    const project = {
        title: "Buddy Maga – To-Do Application",
        type: "MERN Stack Project",
        description:
            "Buddy Maga is a full-stack to-do management application developed using the MERN stack as a learning-focused project. The application allows users to efficiently create, update, and manage daily tasks with a clean and responsive user interface.",
        features: [
            "Create, update, and delete tasks",
            "Responsive and user-friendly interface",
            "RESTful API integration",
            "Clean component-based architecture"
        ],
        tech: ["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
        liveUrl: "https://buddy-maga.netlify.app/",
        frontendUrl: "https://github.com/thufail07/TodoBuddy-frontend",
        backendUrl: "https://github.com/thufail07/TodoBuddy-backend"
    };

    return (
        <section className="py-20 px-4 bg-black relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black z-0"></div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2
                        className="text-4xl md:text-5xl font-black text-white mb-4"
                        style={{ fontFamily: '"Raleway", sans-serif' }}
                    >
                        Projects
                    </h2>
                    <div className="w-24 h-1 bg-emerald-400 mx-auto rounded-full"></div>
                </div>

                {/* Project Card */}
                <div className="animate-fadeInUp" style={{ animationDelay: '0ms' }}>
                    <div className="backdrop-blur-xl bg-black/30 border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl hover:border-emerald-400/30 transition-all duration-500">
                        {/* Project Type Tag */}
                        <div className="mb-4">
                            <span className="inline-block px-4 py-1 bg-emerald-500/10 text-emerald-300 text-sm font-semibold rounded-full border border-emerald-400/20">
                                {project.type}
                            </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{project.title}</h3>

                        {/* Description */}
                        <p className="text-white/80 mb-6 leading-relaxed">{project.description}</p>

                        {/* Features */}
                        <div className="mb-6">
                            <h4 className="text-white font-semibold mb-2">Key Features:</h4>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                {project.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start text-white/80 text-sm">
                                        <span className="text-emerald-400 mr-2">•</span> {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Tech Stack */}
                        <div className="mb-8">
                            <h4 className="text-white font-semibold mb-3">Technologies Used:</h4>
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((tech, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1.5 bg-white/5 border border-white/10 text-white/90 text-xs font-medium rounded-lg
                      hover:bg-emerald-400/10 hover:border-emerald-400/30 transition-all duration-300"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap gap-4">
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center px-6 py-3 bg-emerald-500 text-white font-semibold rounded-full
                  hover:bg-emerald-400 transition-all duration-300 shadow-lg hover:shadow-emerald-500/30
                  transform hover:-translate-y-0.5"
                            >
                                <FiExternalLink className="mr-2" /> Live Demo
                            </a>
                            <a
                                href={project.frontendUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center px-6 py-3 bg-white/10 text-white font-semibold rounded-full
                  border border-white/20 hover:bg-white/20 transition-colors duration-300"
                            >
                                <FiGithub className="mr-2" /> Frontend
                            </a>
                            <a
                                href={project.backendUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center px-6 py-3 bg-white/10 text-white font-semibold rounded-full
                  border border-white/20 hover:bg-white/20 transition-colors duration-300"
                            >
                                <FiGithub className="mr-2" /> Backend
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;