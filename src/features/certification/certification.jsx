// Certifications.jsx
import React from 'react';
import { FiExternalLink } from 'react-icons/fi';
import image1 from '../../assets/certificate1.jpg'
import image2 from '../../assets/certificate2.jpg'
import image3 from '../../assets/certificate3.jpg'

function Certifications() {
    const certs = [
        {
            title: "Learn MySQL – For Beginners",
            issuer: "Udemy",
            description: "Completed a foundational course covering core MySQL concepts, including database creation, data manipulation, queries, and basic database management. This certification strengthened my understanding of relational databases and SQL fundamentals.",
            image: image1, // You can add a URL later if available
            link: "https://www.udemy.com/certificate/UC-fb9ad7d8-bb17-4279-a1eb-4818c151d549/"
        },
        {
            title: "Basics of Python",
            issuer: "Infosys Springboard",
            description: "Successfully completed a course focused on Python programming fundamentals, including syntax, data types, control structures, and basic problem-solving. This course helped build a strong foundation in programming logic and scripting.",
            image: image2, // e.g., "/certs/python-cert.jpg"
            link: "https://drive.google.com/file/d/1dob1iap2Lf-6w6AlLdi5QGmCSleNLAxI/view"
        },
        {
            title: "Artificial Intelligence & Machine Learning Workshop",
            issuer: "Zephyr Technologies and Solutions Pvt. Ltd.",
            description: "Participated in an intensive 2-day hands-on workshop focused on the fundamentals of Artificial Intelligence and Machine Learning. The program provided valuable practical exposure and insights into AI/ML concepts, further fueling my passion for innovation and emerging technologies.",
            image: image3,
            link: "#" // Replace with actual link if available
        }
    ];

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
                        Certifications
                    </h2>
                    <div className="w-24 h-1 bg-emerald-400 mx-auto rounded-full"></div>
                </div>

                {/* Certifications Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certs.map((cert, idx) => (
                        <div
                            key={idx}
                            className="backdrop-blur-xl bg-black/20 border border-white/10 rounded-2xl overflow-hidden
                shadow-xl hover:border-emerald-400/30 transition-all duration-500 animate-fadeInUp"
                            style={{ animationDelay: `${idx * 150}ms` }}
                        >
                            {/* Optional: Certificate Image Preview */}
                            {cert.image ? (
                                <div className="h-40 overflow-hidden">
                                    <img
                                        src={cert.image}
                                        alt={`${cert.title} certificate`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ) : (
                                <div className="h-40 flex items-center justify-center bg-gradient-to-r from-emerald-500/10 to-black/20 border-b border-white/5">
                                    <span className="text-emerald-400/80 text-lg font-medium">Certificate</span>
                                </div>
                            )}

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
                                <p className="text-emerald-300 font-medium mb-3">{cert.issuer}</p>
                                <p className="text-white/80 text-sm leading-relaxed mb-4">{cert.description}</p>

                                <a
                                    href={cert.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center text-emerald-400 hover:text-emerald-300 font-semibold
                    transition-colors duration-300 group"
                                >
                                    View Certificate
                                    <FiExternalLink className="ml-1 group-hover:translate-x-0.5 transition-transform" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Certifications;