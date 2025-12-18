// features/about/AboutDetails.jsx
import React from 'react';
import img1 from '../../assets/about/image1.jpg';
import img2 from '../../assets/about/image2.jpg';
import img3 from '../../assets/about/image3.jpg';
import img4 from '../../assets/about/image4.jpg';

function AboutDetails() {
    const images = [img1, img2, img3, img4];

    return (
        <section className="pt-28 pb-16 px-4 bg-black min-h-screen">
            {/* ↑ Added pt-28 to clear fixed header (adjust if header height changes) */}
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1
                        className="text-4xl md:text-6xl font-black text-white mb-4"
                        style={{ fontFamily: '"Raleway", sans-serif' }}
                    >
                        About Me
                    </h1>
                    <div className="w-24 h-1 bg-emerald-400 mx-auto rounded-full"></div>
                </div>

                {/* Bio Content - Glass Panel (NOW ABOVE IMAGES) */}
                <div className="backdrop-blur-xl bg-black/30 border border-white/10 rounded-3xl p-6 md:p-10 shadow-2xl animate-fadeInUp mb-16">
                    <div className="prose prose-lg max-w-none text-white/90 space-y-6">
                        <p>
                            My name is <span className="text-emerald-300 font-semibold">Mohammad Thufail</span>, and I am an 18-year-old
                            <span className="text-emerald-200"> Junior Web Developer</span> based in Mangalore, India. I am currently working at
                            <span className="text-emerald-300"> Chillipages Technologies</span>, where I focus on developing modern, responsive, and user-friendly web applications.
                        </p>

                        <p>
                            I have completed my <span className="text-emerald-200">Diploma in Computer Science</span> from
                            <span className="text-emerald-300"> PA College of Polytechnic, Mangalore</span>, and graduated in 2025. My academic background,
                            combined with hands-on industry experience, has helped me build a strong foundation in software development and problem-solving.
                        </p>

                        <p>
                            I am skilled in <span className="text-emerald-300">HTML, CSS, Tailwind CSS, JavaScript, React, Node.js, PHP, Git, and GitHub</span>.
                            I enjoy building clean interfaces, integrating backend functionality, and working with real-world projects. I have also contributed to web development
                            projects in the <span className="text-emerald-200">education and construction domains</span>, gaining experience in understanding business requirements
                            and delivering practical solutions.
                        </p>

                        <p>
                            I am passionate about learning new technologies, improving my development skills, and growing as a professional in the field of web development.
                            My goal is to build <span className="text-emerald-300">scalable applications</span> that provide meaningful and impactful user experiences.
                        </p>
                    </div>
                </div>

                {/* Image Grid - Now BELOW bio */}
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">My Journey</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                        {images.map((src, idx) => (
                            <div
                                key={idx}
                                className="relative overflow-hidden rounded-2xl shadow-xl animate-fadeInUp"
                                style={{ animationDelay: `${idx * 100}ms` }}
                            >
                                <img
                                    src={src}
                                    alt={`Moment ${idx + 1} from my journey`}
                                    className="w-full h-48 md:h-64 object-cover transition-transform duration-500 hover:scale-105"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutDetails;