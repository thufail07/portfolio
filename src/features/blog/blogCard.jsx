// src/components/blog/BlogCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function BlogCard({ blog }) {
    return (
        <div
            className="backdrop-blur-xl bg-black/20 border border-white/10 rounded-2xl overflow-hidden
        shadow-xl hover:border-emerald-400/30 transition-all duration-500
        animate-fadeInUp"
            style={{ animationDelay: `${blog.id * 100}ms` }}
        >
            {/* Image */}
            <div className="relative h-48 w-full overflow-hidden">
                <img
                    src={blog.img}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 24 24'%3E%3Cpath fill='none' stroke='%23374151' stroke-width='2' d='M4 20h16M4 4h16v16H4V4zm0 0v16m0-16h16'/%3E%3C/svg%3E";
                    }}
                />
                {/* Optional: Dark overlay for text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="p-6">
                <p className="text-emerald-400 text-sm mb-2">{blog.date}</p>
                <h3 className="text-xl font-bold text-white mb-3">{blog.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed mb-4">{blog.excerpt}</p>
                <Link
                    to={`/blog/${blog.slug}`}
                    className="inline-flex items-center text-emerald-400 hover:text-emerald-300 font-medium group"
                >
                    Read More
                    <span className="ml-1 inline-block transition-transform group-hover:translate-x-1">→</span>
                </Link>
            </div>
        </div>
    );
}

export default BlogCard;