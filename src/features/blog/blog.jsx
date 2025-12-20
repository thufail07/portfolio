import React from 'react';
import blogs from '../../data/blogData.js';
import BlogCard from './blogCard.jsx';

function Blog() {
    return (
        <section className="py-20 px-4 bg-black min-h-screen">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1
                        className="text-4xl md:text-5xl font-black text-white mb-4"
                        style={{ fontFamily: '"Raleway", sans-serif' }}
                    >
                        Blog
                    </h1>
                    <div className="w-24 h-1 bg-emerald-400 mx-auto rounded-full"></div>
                    <p className="text-white/80 mt-6 max-w-2xl mx-auto">
                        Thoughts, tutorials, and experiences from my journey in web development.
                    </p>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((blog) => (
                        <BlogCard key={blog.id} blog={blog} />
                    ))}
                </div>

                {/* Future: Pagination or "More Coming Soon" */}
                {blogs.length === 0 && (
                    <p className="text-white/70 text-center mt-12">More articles coming soon!</p>
                )}
            </div>
        </section>
    );
}

export default Blog;