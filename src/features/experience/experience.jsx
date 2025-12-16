// Experience.jsx
import React from 'react';

function Experience() {
    const experiences = [
        {
            role: "Junior Web Developer",
            period: "February 2025 – Present",
            company: "Chillipages Technologies, Mangalore",
            description: "Working as a Junior Web Developer, focusing on the development of modern, responsive, and scalable web applications. Actively involved in frontend and full-stack development, following best practices in code quality and performance."
        },
        {
            role: "Web Developer Intern",
            period: "December 2024 – January 2025",
            company: "Chillipages Technologies, Mangalore",
            description: "Completed a two-month internship as a Web Developer, where I gained hands-on experience in building web applications, collaborating with the development team, and learning real-world development workflows."
        },
        // ✨ NEW INTERNSHIP ADDED BELOW ✨
        {
            role: "Web Developer (MERN Stack) – Intern",
            period: "June 2024 – July 2024",
            company: "Zephyr Technologies and Solutions Pvt. Ltd., Mangaluru",
            description: "Worked as a MERN Stack Web Developer Intern, contributing to the development of full-stack web applications using MongoDB, Express.js, React.js, and Node.js. Gained hands-on experience in both frontend and backend development while following real-world development practices.",

        }
    ];

    return (
        <section className="py-20 px-4 bg-black relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black z-0"></div>

            <div className="max-w-5xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2
                        className="text-4xl md:text-5xl font-black text-white mb-4"
                        style={{ fontFamily: '"Raleway", sans-serif' }}
                    >
                        Experience
                    </h2>
                    <div className="w-24 h-1 bg-emerald-400 mx-auto rounded-full"></div>
                </div>

                {/* Experience Timeline */}
                <div className="relative">
                    {/* Central Vertical Line (Full height) */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-gradient-to-b from-emerald-400 to-emerald-700"></div>

                    {/* Promotion Arrow (ONLY between index 0 and 1 → Chillipages progression) */}
                    <div className="hidden md:block absolute left-1/2 top-[28%] -translate-x-1/2 -translate-y-1/2 z-20">
                        <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-500/40 animate-pulse">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-white"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                    </div>

                    {/* Experience Cards */}
                    <div className="space-y-12">
                        {experiences.map((exp, index) => {
                            const isCurrent = index === 0; // Only first = current
                            const isChillipagesIntern = index === 1; // Second = Chillipages intern
                            const isZephyrIntern = index === 2; // Third = Zephyr

                            return (
                                <div
                                    key={index}
                                    className={`relative md:flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center animate-fadeInUp`}
                                    style={{ animationDelay: `${index * 200}ms` }}
                                >
                                    {/* Glass Card */}
                                    <div
                                        className={`md:w-5/12 backdrop-blur-xl border rounded-2xl p-6 shadow-xl
                      ${isCurrent
                                                ? 'md:ml-auto md:mr-8 border-emerald-400/30 bg-gradient-to-br from-emerald-500/5 to-black/30'
                                                : 'md:mr-auto md:ml-8 border-white/10 bg-black/20'}`}
                                    >
                                        {/* Role Tag */}
                                        <div className="mb-2">
                                            <span className={`inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full ${isCurrent
                                                ? 'bg-emerald-500/20 text-emerald-300'
                                                : 'bg-white/10 text-white/70'
                                                }`}>
                                                {isCurrent
                                                    ? 'Current Role'
                                                    : isChillipagesIntern || isZephyrIntern
                                                        ? 'Internship'
                                                        : 'Experience'}
                                            </span>
                                        </div>

                                        <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                                        <p className="text-emerald-300 font-medium mb-2">{exp.period}</p>
                                        <p className="text-white/60 text-sm mb-3">{exp.company}</p>
                                        <p className="text-white/80 text-sm leading-relaxed mb-3">{exp.description}</p>

                                        {/* Optional bullet points (only for Zephyr) */}
                                        {exp.details && (
                                            <ul className="space-y-1 mt-2">
                                                {exp.details.map((item, i) => (
                                                    <li key={i} className="flex items-start text-white/70 text-sm">
                                                        <span className="text-emerald-400 mr-2 mt-1">•</span> {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>

                                    {/* Timeline Dot (Mobile) */}
                                    <div className="md:hidden mb-4 flex justify-center">
                                        <div className={`w-4 h-4 rounded-full ${isCurrent ? 'bg-emerald-400' : 'bg-white/40'
                                            } shadow-lg`}></div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;