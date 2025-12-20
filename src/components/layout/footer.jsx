import React from 'react';
import { Link } from 'react-router-dom';
import { FiGithub, FiTwitter, FiLinkedin, FiInstagram } from 'react-icons/fi';

function Footer() {
    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Projects', path: '/projects' },
        { name: 'Blog', path: '/blog' },
        { name: 'Contact', path: '/contact' },
    ];

    const socialIcons = [
        {
            Icon: FiGithub,
            href: 'https://github.com/thufail07',
            label: 'GitHub'
        },
        {
            Icon: FiTwitter,
            href: '#', // Replace if you have Twitter
            label: 'Twitter'
        },
        {
            Icon: FiLinkedin,
            href: 'https://www.linkedin.com/in/mahammad-thufail-205b232a5/',
            label: 'LinkedIn'
        },
        {
            Icon: FiInstagram,
            href: 'https://www.instagram.com/iamthufail.__?igsh=dXl1Z2NtaXh4eGJ0',
            label: 'Instagram'
        },
    ];

    return (
        <footer className="relative w-full bg-black py-12 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Glass Footer Panel */}
                <div className="backdrop-blur-xl bg-black/20 border border-white/10 rounded-2xl p-8 shadow-2xl">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                        {/* Logo + Bio */}
                        <div className="md:col-span-2 space-y-4">
                            <div className="flex items-center group">
                                <Link to="/" className="flex items-center">
                                    <span
                                        className="font-black text-2xl tracking-tighter"
                                        style={{ fontFamily: '"Raleway", sans-serif' }}
                                    >
                                        <span className="text-white">Port</span>
                                        <span className="text-emerald-400">Folio</span>
                                        <span className="text-white group-hover:text-shadow-green transition-all">.</span>
                                    </span>
                                </Link>
                            </div>
                            <p className="text-white/70 max-w-md leading-relaxed">
                                Crafting modern digital experiences with clean design, smooth animations, and purposeful code.
                            </p>
                        </div>

                        {/* Navigation */}
                        <div>
                            <h3 className="text-white font-semibold mb-4 text-lg">Navigation</h3>
                            <ul className="space-y-3">
                                {navItems.map((item, idx) => (
                                    <li key={item.path} className="animate-fadeIn" style={{ animationDelay: `${idx * 100}ms` }}>
                                        {item.path.startsWith('#') ? (
                                            <a
                                                href={item.path}
                                                className="text-white/80 hover:text-emerald-400 transition-colors duration-300 inline-block"
                                            >
                                                {item.name}
                                            </a>
                                        ) : (
                                            <Link
                                                to={item.path}
                                                className="text-white/80 hover:text-emerald-400 transition-colors duration-300 inline-block"
                                            >
                                                {item.name}
                                            </Link>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Social + Copyright */}
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-white font-semibold mb-4 text-lg">Follow Me</h3>
                                <div className="flex space-x-4">
                                    {socialIcons.map(({ Icon, href, label }, idx) => (
                                        <a
                                            key={idx}
                                            href={href}
                                            target={href.startsWith('http') ? '_blank' : undefined}
                                            rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                            className="text-white/80 hover:text-emerald-400 transition-all duration-300 transform hover:scale-110"
                                            aria-label={`Visit my ${label}`}
                                        >
                                            <Icon size={24} />
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Copyright */}
                            <div className="pt-4 border-t border-white/10">
                                <p className="text-white/60 text-sm">
                                    &copy; {new Date().getFullYear()} PortFolio. All rights reserved.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;