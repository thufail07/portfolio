// Hero.jsx
import React, { useState, useEffect } from 'react';

function Hero() {
    const slides = [
        {
            title: "Introduction",
            headline: "Hi, I’m Mohammad Thufail",
            content: "A passionate Software Engineer focused on building modern, responsive, and user-friendly web applications."
        },
        {
            title: "Professional Role",
            headline: "Software Engineer at Chillipages Technologies",
            content: "I specialize in developing scalable web solutions using modern frontend and backend technologies."
        },
        {
            title: "Expertise",
            headline: "MERN Stack & Frontend Development",
            content: "I work with React, Tailwind CSS, Node.js, Express, and MongoDB to create clean and efficient digital experiences."
        },
        {
            title: "Passion & Goal",
            headline: "Turning Ideas into Real-World Applications",
            content: "I enjoy solving problems, learning new technologies, and crafting high-quality software that delivers value."
        },
        {
            title: "Call to Action",
            headline: "Let’s Build Something Great Together",
            content: "Open to opportunities, collaborations, and innovative projects."
        }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = slides.length;

    // Auto-rotate every 6 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % totalSlides);
        }, 6000);
        return () => clearInterval(interval);
    }, [totalSlides]);

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    return (
        <section className="relative min-h-screen w-full flex items-center justify-center bg-black py-16 px-4 overflow-hidden">
            {/* Subtle Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black z-0"></div>

            {/* Main Glass Card */}
            <div className="relative z-10 max-w-4xl w-full">
                <div className="backdrop-blur-xl bg-black/30 border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
                    {/* Slide Content */}
                    <div className="text-center">
                        {/* Animated Title (Category) */}
                        <div className="mb-2">
                            <span className="inline-block px-3 py-1 bg-emerald-500/10 text-emerald-400 text-xs font-semibold uppercase tracking-wider rounded-full">
                                {slides[currentSlide].title}
                            </span>
                        </div>

                        {/* Headline - Animated Reveal */}
                        <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-6"
                            style={{ fontFamily: '"Raleway", sans-serif' }}>
                            <span className="text-white block">
                                {slides[currentSlide].headline.split(' ').map((word, i) => (
                                    <span
                                        key={i}
                                        className="inline-block opacity-0 animate-fadeInUp"
                                        style={{ animationDelay: `${i * 100}ms` }}
                                    >
                                        {word}&nbsp;
                                    </span>
                                ))}
                            </span>
                        </h1>

                        {/* Paragraph */}
                        <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-8">
                            {slides[currentSlide].content}
                        </p>

                        {/* CTA Button (Visible on last slide) */}
                        {currentSlide === 4 && (
                            <button className="px-8 py-3 bg-emerald-500 text-white font-bold rounded-full hover:bg-emerald-400 transition-all duration-300 shadow-lg hover:shadow-emerald-500/30 transform hover:-translate-y-1">
                                Get In Touch
                            </button>
                        )}

                        {/* Slide Indicators */}
                        <div className="flex justify-center space-x-2 mt-8">
                            {slides.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => goToSlide(idx)}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === currentSlide
                                        ? 'bg-emerald-400 scale-125'
                                        : 'bg-white/20 hover:bg-white/40'
                                        }`}
                                    aria-label={`Go to slide ${idx + 1}`}
                                />
                            ))}
                        </div>

                        {/* Navigation Arrows (Hidden on mobile) */}
                        <div className="hidden md:flex justify-center space-x-4 mt-6">
                            <button
                                onClick={prevSlide}
                                className="text-white/60 hover:text-white transition-colors"
                                aria-label="Previous slide"
                            >
                                ←
                            </button>
                            <button
                                onClick={nextSlide}
                                className="text-white/60 hover:text-white transition-colors"
                                aria-label="Next slide"
                            >
                                →
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;