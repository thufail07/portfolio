// Header.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation(); // Get current path

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    // Define nav items with paths
    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Projects', path: '/projects' },
        { name: 'Blog', path: '#' }, // No page yet – keep as # or remove
        { name: 'Contact', path: '/contact' },
    ];

    // Check if a nav item is active
    const isActive = (path) => {
        if (path === '/') return location.pathname === '/';
        return location.pathname.startsWith(path);
    };

    return (
        <header className={`fixed w-full top-0 z-50 transition-all duration-500 ${scrolled ? 'py-2' : 'py-4'}`}>
            {/* Glass Header */}
            <div
                className={`mx-auto px-4 max-w-7xl flex justify-between items-center 
          backdrop-blur-xl bg-black/20 border border-white/10 rounded-full shadow-2xl
          ${scrolled ? 'ring-1 ring-emerald-500/20' : ''}`}
                style={{ height: scrolled ? '60px' : '72px' }}
            >
                {/* Logo */}
                <div className="flex items-center group">
                    <Link to="/" className="flex items-center">
                        <span
                            className="font-black text-2xl tracking-tighter whitespace-nowrap"
                            style={{ fontFamily: '"Raleway", sans-serif' }}
                        >
                            <span className="text-white">Port</span>
                            <span className="text-emerald-400">Folio</span>
                            <span className="text-white group-hover:text-shadow-green transition-all" style={{ textShadow: '0 0 8px rgba(16,185,129,0.4)' }}>.</span>
                        </span>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-1">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`relative px-4 py-2 font-medium transition-all duration-300 ${isActive(item.path)
                                    ? 'text-emerald-300'
                                    : 'text-white/90 hover:text-white'
                                }`}
                        >
                            {item.name}
                            {/* Active underline */}
                            {isActive(item.path) && (
                                <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-emerald-400"></span>
                            )}
                        </Link>
                    ))}

                    {/* CTA Button */}
                    <Link
                        to="/connect"
                        className="ml-3 px-5 py-2 bg-emerald-500 text-white font-semibold rounded-full 
              hover:bg-emerald-400 transition-all duration-300 shadow-lg 
              hover:shadow-emerald-500/30 hover:shadow-md transform hover:-translate-y-0.5"
                    >
                        Get Connect
                    </Link>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white p-2 rounded-full hover:bg-white/10 transition-colors"
                    onClick={toggleMenu}
                    aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                >
                    {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
                    onClick={() => setIsMenuOpen(false)}
                >
                    <div
                        className="absolute top-6 right-4 w-11/12 max-w-xs 
              bg-black/30 backdrop-blur-2xl border border-white/10 
              rounded-2xl shadow-2xl overflow-hidden animate-fadeIn"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="p-6">
                            <div className="flex justify-end mb-5">
                                <button onClick={() => setIsMenuOpen(false)} className="text-white/80 hover:text-white">
                                    <FiX size={24} />
                                </button>
                            </div>
                            <nav className="flex flex-col space-y-4">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.path}
                                        to={item.path}
                                        className={`text-lg font-medium py-2.5 px-2 rounded-lg transition-colors relative ${isActive(item.path)
                                                ? 'text-emerald-300 bg-emerald-500/10'
                                                : 'text-white hover:bg-white/10'
                                            }`}
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item.name}
                                        {isActive(item.path) && (
                                            <span className="absolute bottom-1 left-2 right-2 h-0.5 bg-emerald-400"></span>
                                        )}
                                    </Link>
                                ))}
                                <Link
                                    to="/connect"
                                    className="mt-3 w-full py-3 bg-emerald-500 text-white font-semibold rounded-xl 
                    hover:bg-emerald-400 transition-colors shadow-md text-center"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Get Connect
                                </Link>
                            </nav>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}

export default Header;