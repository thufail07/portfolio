// Connect.jsx
import React from 'react';
import { FiLinkedin } from 'react-icons/fi';
import linkedinBg from '../../assets/linkdianphoto.png'; // Make sure path is correct

function Connect() {
    return (
        <section className="py-20 px-4 bg-black relative overflow-hidden">
            {/* Background: Blurred LinkedIn image + dark overlay */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `url(${linkedinBg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'blur(2px) brightness(0.4)', // Slightly blur & darken for readability
                }}
            ></div>

            {/* Dark overlay for contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent z-0"></div>

            <div className="max-w-4xl mx-auto text-center relative z-10">
                {/* Title */}
                <h2
                    className="text-4xl md:text-5xl font-black text-white mb-6 animate-fadeIn"
                    style={{ fontFamily: '"Raleway", sans-serif' }}
                >
                    Let’s Connect
                </h2>

                <p className="text-white/90 text-lg max-w-2xl mx-auto mb-10 animate-fadeIn" style={{ animationDelay: '100ms' }}>
                    I’m always open to meaningful conversations, collaboration opportunities, and innovative projects.
                    Reach out via LinkedIn!
                </p>

                {/* Glass Card */}
                <div
                    className="inline-block backdrop-blur-xl bg-black/40 border border-white/20 
            rounded-2xl p-6 md:p-8 shadow-2xl animate-fadeInUp"
                    style={{ animationDelay: '200ms' }}
                >
                    <div className="flex flex-col items-center">
                        <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center 
              border-2 border-emerald-400/30 mb-6 animate-pulse-slow">
                            <FiLinkedin className="text-emerald-400 text-3xl" />
                        </div>

                        <h3 className="text-xl font-bold text-white mb-4">Connect on LinkedIn</h3>

                        <a
                            href="https://www.linkedin.com/in/mahammad-thufail-205b232a5/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center justify-center
                px-8 py-3 bg-emerald-500 text-white font-semibold rounded-full
                hover:bg-emerald-400 transition-all duration-300
                shadow-lg hover:shadow-emerald-500/40
                transform hover:-translate-y-1"
                        >
                            <FiLinkedin className="mr-2 text-lg" />
                            View My Profile
                            <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
                        </a>

                        <p className="text-white/60 text-sm mt-4">
                            Let’s build something great together!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Connect;