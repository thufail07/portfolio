// Education.jsx
import React from 'react';

function Education() {
    const education = [
        {
            title: "Diploma in Computer Science",
            year: "2025",
            institution: "PA College of Polytechnic",
            description: "Focused on core computer science concepts, software development, and practical application of modern technologies. Gained strong fundamentals in programming, web development, databases, and problem-solving."
        },
        {
            title: "SSLC",
            year: "2022",
            institution: "Karnataka State Board",
            description: "Completed secondary education with a solid academic foundation, developing analytical thinking, logical reasoning, and interest in technology."
        }
    ];

    return (
        <section className="py-20 px-4 bg-black relative overflow-hidden">
            {/* Background subtle gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900 z-0"></div>

            <div className="max-w-5xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2
                        className="text-4xl md:text-5xl font-black text-white mb-4"
                        style={{ fontFamily: '"Raleway", sans-serif' }}
                    >
                        Education
                    </h2>
                    <div className="w-24 h-1 bg-emerald-400 mx-auto rounded-full"></div>
                </div>

                {/* Timeline Container */}
                <div className="relative">
                    {/* Central Timeline Curve (Desktop only) */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2">
                        <div
                            className="w-full h-full"
                            style={{
                                background: 'linear-gradient(to bottom, #10b981, #047857)',
                                clipPath: 'path("M0,0 C20,40 20,80 0,120 C-20,160 -20,200 0,240")',
                                WebkitClipPath: 'path("M0,0 C20,40 20,80 0,120 C-20,160 -20,200 0,240")'
                            }}
                        ></div>
                    </div>

                    {/* Timeline Items */}
                    <div className="space-y-12">
                        {education.map((item, index) => (
                            <div
                                key={index}
                                className={`relative md:flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center animate-fadeInUp`}
                                style={{ animationDelay: `${index * 200}ms` }}
                            >
                                {/* Glass Card */}
                                <div
                                    className={`md:w-5/12 backdrop-blur-xl bg-black/20 border border-white/10 rounded-2xl p-6 shadow-xl
                    ${index % 2 === 0 ? 'md:ml-auto md:mr-8' : 'md:mr-auto md:ml-8'}`}
                                >
                                    <div className="flex justify-between items-start mb-3">
                                        <h3 className="text-xl font-bold text-white">{item.title}</h3>
                                        <span className="text-emerald-400 font-semibold">{item.year}</span>
                                    </div>
                                    <p className="text-emerald-300 font-medium mb-2">{item.institution}</p>
                                    <p className="text-white/80 text-sm leading-relaxed">{item.description}</p>
                                </div>

                                {/* Timeline Dot (Mobile: top, Desktop: center) */}
                                <div className="md:hidden mb-4 flex justify-center">
                                    <div className="w-4 h-4 rounded-full bg-emerald-400 shadow-lg shadow-emerald-500/30"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Education;