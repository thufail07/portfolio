// components/common/BackToTop.jsx
import React, { useState, useEffect } from 'react';
import { FiArrowUp } from 'react-icons/fi';

function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when scrolled beyond 500px
    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 500);
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    if (!isVisible) return null;

    return (
        <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-40
        w-12 h-12 rounded-full
        backdrop-blur-xl bg-black/30 border border-white/10
        flex items-center justify-center
        text-white hover:text-emerald-300
        shadow-lg hover:shadow-emerald-500/30
        transition-all duration-300
        hover:-translate-y-1"
            aria-label="Scroll to top"
        >
            <FiArrowUp size={20} />
        </button>
    );
}

export default BackToTop;