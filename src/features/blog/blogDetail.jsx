// src/pages/BlogDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import blogData from '../../data/blogData';
import { FiCalendar, FiClock, FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

function BlogDetail() {
    const { slug } = useParams();
    const blog = blogData.find(post => post.slug === slug);

    if (!blog) {
        return (
            <section className="py-20 px-4 bg-black min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl text-white mb-4">Blog post not found</h2>
                    <Link to="/blog" className="inline-flex items-center text-emerald-400 hover:text-emerald-300">
                        <FiArrowLeft className="mr-1" /> Back to Blog
                    </Link>
                </div>
            </section>
        );
    }

    return (
        <section className="py-16 px-4 bg-black min-h-screen">
            <div className="max-w-4xl mx-auto">
                <Link to="/blog" className="inline-flex items-center text-emerald-400 hover:text-emerald-300 mb-8 group">
                    <FiArrowLeft className="mr-1" />
                    Back to Blog
                </Link>

                <article className="backdrop-blur-xl bg-black/30 border border-white/10 rounded-3xl p-6 md:p-10 shadow-2xl">
                    <div className="relative rounded-2xl overflow-hidden mb-8">
                        <img
                            src={blog.img}
                            alt={blog.title}
                            className="w-full h-auto max-h-96 object-cover"
                            loading="eager"
                        />
                    </div>

                    <div className="flex flex-wrap gap-4 text-white/70 text-sm mb-6">
                        <div className="flex items-center">
                            <FiCalendar className="mr-1.5" />
                            {blog.date}
                        </div>
                        {blog.readTime && (
                            <div className="flex items-center">
                                <FiClock className="mr-1.5" />
                                {blog.readTime}
                            </div>
                        )}
                    </div>

                    <h1 className="text-3xl md:text-4xl font-black text-white mb-8" style={{ fontFamily: '"Raleway", sans-serif' }}>
                        {blog.title}
                    </h1>

                    <div
                        className="prose prose-lg max-w-none text-white/90 space-y-6"
                        dangerouslySetInnerHTML={{ __html: blog.content }}
                    />

                    {/* <div className="mt-12 pt-6 border-t border-white/10">
                        <p className="text-white/80 text-sm">
                            Enjoyed this article? Share it or connect with me on{" "}
                            <a
                                href="https://www.linkedin.com/in/mahammad-thufail-205b232a5/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-emerald-400 hover:underline"
                            >
                                LinkedIn
                            </a>!
                        </p>
                    </div> */}
                </article>
            </div>
        </section>
    );
}

export default BlogDetail;