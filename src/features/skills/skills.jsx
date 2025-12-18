// Skills.jsx
import React from 'react';

function Skills() {
    const skillCategories = [
        {
            title: "Frontend Development",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
            ),
            skills: [
                { name: "HTML5", desc: "Semantic and accessible markup", type: "core" },
                { name: "CSS3", desc: "Responsive layouts and modern styling", type: "core" },
                { name: "JavaScript", desc: "Interactive and dynamic web functionality", type: "core" },
                { name: "React.js", desc: "Component-based UI development", type: "core" }
            ]
        },
        {
            title: "Backend & Server-Side",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
                </svg>
            ),
            skills: [
                { name: "Node.js", desc: "Server-side application development", type: "core" },
                { name: "PHP", desc: "Backend scripting and web integration", type: "core" }
            ]
        },
        {
            title: "Tools & Technologies",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            skills: [
                { name: "Git", desc: "Version control and collaboration", type: "tool" },
                { name: "GitHub", desc: "Code hosting and project management", type: "tool" },
                { name: "Postman", desc: "API testing and debugging", type: "tool" },
                { name: "FileZilla", desc: "FTP file management and deployment", type: "tool" }
            ]
        },
        {
            title: "Productivity & Office Tools",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            ),
            skills: [
                { name: "Microsoft Office", desc: "Documentation, presentations, and reporting", type: "tool" }
            ]
        }
    ];

    return (
        <section className="py-20 px-4 bg-black relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black z-0"></div>

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2
                        className="text-4xl md:text-5xl font-black text-white mb-4"
                        style={{ fontFamily: '"Raleway", sans-serif' }}
                    >
                        Skills
                    </h2>
                    <div className="w-24 h-1 bg-emerald-400 mx-auto rounded-full"></div>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {skillCategories.map((category, idx) => (
                        <div
                            key={idx}
                            className="backdrop-blur-xl bg-black/30 border border-white/10 rounded-2xl p-6 animate-fadeInUp"
                            style={{ animationDelay: `${idx * 150}ms` }}
                        >
                            {/* Category Header */}
                            <div className="flex items-center mb-5">
                                <div className="p-2 bg-emerald-500/10 text-emerald-400 rounded-lg mr-3">
                                    {category.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white">{category.title}</h3>
                            </div>

                            {/* Skills List */}
                            <div className="space-y-3">
                                {category.skills.map((skill, i) => (
                                    <div
                                        key={i}
                                        className={`flex items-start p-3 rounded-lg transition-all duration-300
                      ${skill.type === 'core'
                                                ? 'bg-emerald-500/5 border border-emerald-400/20 hover:bg-emerald-500/10'
                                                : 'bg-white/5 border border-white/10 hover:bg-white/10'}`}
                                    >
                                        <div className={`mr-3 mt-0.5 w-2 h-2 rounded-full ${skill.type === 'core' ? 'bg-emerald-400' : 'bg-white/40'
                                            }`}></div>
                                        <div>
                                            <span className="font-medium text-white block">{skill.name}</span>
                                            <span className="text-white/70 text-sm">{skill.desc}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;