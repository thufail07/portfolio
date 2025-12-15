// About.jsx
import React from 'react';

function About() {
    const skills = [
        'React', 'Next.js', 'Tailwind CSS', 'Node.js',
        'Express', 'MongoDB', 'RESTful APIs', 'Git',
        'JavaScript (ES6+)', 'TypeScript', 'MERN Stack', 'Responsive Design'
    ];

    return (
        <section className="py-20 px-4 bg-black relative">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2
                        className="text-4xl md:text-5xl font-black text-white mb-4"
                        style={{ fontFamily: '"Raleway", sans-serif' }}
                    >
                        About Me
                    </h2>
                    <div className="w-24 h-1 bg-emerald-400 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {/* About Content - Glass Panel */}
                    <div
                        className="backdrop-blur-xl bg-black/20 border border-white/10 rounded-2xl p-8 shadow-xl
              animate-fadeIn"
                        style={{ animationDelay: '0ms' }}
                    >
                        <h3 className="text-2xl font-bold text-white mb-4">Who I Am</h3>
                        <p className="text-white/80 leading-relaxed">
                            I am <span className="text-emerald-400 font-semibold">Mohammad Thufail</span>, a Software Engineer at <span className="text-emerald-300">Chillipages Technologies</span>,
                            specializing in building modern, responsive, and scalable web applications.
                        </p>
                        <p className="text-white/80 leading-relaxed mt-4">
                            I work mainly with <span className="text-emerald-300">React, Tailwind CSS, and the MERN stack</span>,
                            focusing on <span className="text-emerald-200">clean code, performance, and exceptional user experience</span>.
                        </p>
                        <p className="text-white/80 leading-relaxed mt-4">
                            Passionate about solving real-world problems through elegant, efficient, and maintainable software solutions.
                        </p>
                    </div>

                    {/* Skills - Glass Panel */}
                    <div
                        className="backdrop-blur-xl bg-black/20 border border-white/10 rounded-2xl p-8 shadow-xl
              animate-fadeIn"
                        style={{ animationDelay: '200ms' }}
                    >
                        <h3 className="text-2xl font-bold text-white mb-6">My Skills</h3>
                        <div className="flex flex-wrap gap-3">
                            {skills.map((skill, idx) => (
                                <span
                                    key={idx}
                                    className="px-4 py-2 bg-gradient-to-r from-emerald-500/10 to-emerald-400/5 
                    border border-emerald-400/20 text-emerald-300 font-medium rounded-full
                    hover:bg-emerald-400/20 transition-all duration-300 
                    hover:scale-[1.03] cursor-default
                    animate-fadeIn"
                                    style={{ animationDelay: `${300 + idx * 50}ms` }}
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>

                        {/* Optional: Add a subtle tech stack highlight */}
                        <div className="mt-8 pt-6 border-t border-white/10">
                            <p className="text-white/70 text-sm">
                                Constantly learning and exploring new tools to build better digital experiences.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;