// Footer.jsx
import React from 'react';
import { FiGithub, FiTwitter, FiLinkedin, FiInstagram } from 'react-icons/fi';

function Footer() {
    const navItems = ['Home', 'About', 'Projects', 'Blog', 'Contact'];
    const socialIcons = [
        { Icon: FiGithub, href: '#' },
        { Icon: FiTwitter, href: '#' },
        { Icon: FiLinkedin, href: '#' },
        { Icon: FiInstagram, href: '#' },
    ];

    return (
        <footer className="relative w-full bg-black py-12 px-4 mt-24">
            <div className="max-w-7xl mx-auto">
                {/* Glass Footer Panel */}
                <div className="backdrop-blur-xl bg-black/20 border border-white/10 rounded-2xl p-8 shadow-2xl">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

                        {/* Logo + Bio */}
                        <div className="md:col-span-2 space-y-4">
                            {/* Animated Logo */}
                            <div className="flex items-center group">
                                <span className="font-black text-2xl tracking-tighter" style={{ fontFamily: '"Raleway", sans-serif' }}>
                                    <span className="text-white">Port</span>
                                    <span className="text-emerald-400">Folio</span>
                                    <span className="text-white group-hover:text-shadow-green transition-all">.</span>
                                </span>
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
                                    <li key={item} className="animate-fadeIn" style={{ animationDelay: `${idx * 100}ms` }}>
                                        <a
                                            href={`#${item.toLowerCase()}`}
                                            className="text-white/80 hover:text-emerald-400 transition-colors duration-300 inline-block"
                                        >
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Social + Copyright */}
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-white font-semibold mb-4 text-lg">Follow Me</h3>
                                <div className="flex space-x-4">
                                    {socialIcons.map(({ Icon, href }, idx) => (
                                        <a
                                            key={idx}
                                            href={href}
                                            className="text-white/80 hover:text-emerald-400 transition-all duration-300 transform hover:scale-110"
                                            aria-label={`Visit my ${Icon.name}`}
                                        >
                                            <Icon size={24} />
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Copyright */}
                            <div className="pt-4 border-t border-white/10">
                                <p className="text-white/60 text-sm">
                                    &copy; {new Date().getFullYear()} profolio. All rights reserved.
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