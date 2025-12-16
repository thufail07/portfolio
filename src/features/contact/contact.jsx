// Contact.jsx
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
    const form = useRef();
    const [status, setStatus] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus('');

        emailjs
            .sendForm(
                'YOUR_SERVICE_ID',        // ← Replace with your EmailJS service ID
                'YOUR_TEMPLATE_ID',       // ← Replace with your EmailJS template ID
                form.current,
                'YOUR_PUBLIC_KEY'         // ← Replace with your EmailJS public key
            )
            .then(
                () => {
                    setStatus('Message sent successfully! I’ll get back to you soon.');
                    form.current.reset();
                    setIsSubmitting(false);
                },
                (error) => {
                    console.error('Email send error:', error);
                    setStatus('Oops! Something went wrong. Please try again or email me directly.');
                    setIsSubmitting(false);
                }
            );
    };

    return (
        <section className="py-20 px-4 bg-black relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black z-0"></div>

            <div className="max-w-4xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2
                        className="text-4xl md:text-5xl font-black text-white mb-4"
                        style={{ fontFamily: '"Raleway", sans-serif' }}
                    >
                        Get In Touch
                    </h2>
                    <div className="w-24 h-1 bg-emerald-400 mx-auto rounded-full"></div>
                    <p className="text-white/80 mt-6">
                        Have a project in mind? Feel free to reach out!
                    </p>
                </div>

                {/* Glass Form Card */}
                <div className="backdrop-blur-xl bg-black/30 border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl max-w-2xl mx-auto">
                    <form ref={form} onSubmit={sendEmail} className="space-y-6">
                        {/* Name */}
                        <div>
                            <label htmlFor="name" className="block text-white/90 mb-2 font-medium">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg 
                  text-white placeholder-white/40 focus:outline-none focus:ring-2 
                  focus:ring-emerald-400 focus:border-transparent transition-all"
                                placeholder="Your name"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block text-white/90 mb-2 font-medium">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg 
                  text-white placeholder-white/40 focus:outline-none focus:ring-2 
                  focus:ring-emerald-400 focus:border-transparent transition-all"
                                placeholder="your.email@example.com"
                            />
                        </div>

                        {/* Message */}
                        <div>
                            <label htmlFor="message" className="block text-white/90 mb-2 font-medium">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows="5"
                                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg 
                  text-white placeholder-white/40 focus:outline-none focus:ring-2 
                  focus:ring-emerald-400 focus:border-transparent transition-all resize-none"
                                placeholder="Tell me about your project..."
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full py-3 px-6 font-semibold rounded-full transition-all duration-300
                ${isSubmitting
                                    ? 'bg-emerald-500/70 cursor-not-allowed'
                                    : 'bg-emerald-500 hover:bg-emerald-400 transform hover:-translate-y-0.5'}
                text-white shadow-lg hover:shadow-emerald-500/30`}
                        >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>

                        {/* Status Message */}
                        {status && (
                            <div
                                className={`mt-4 p-3 rounded-lg text-center font-medium ${status.includes('successfully')
                                        ? 'bg-emerald-500/20 text-emerald-300'
                                        : 'bg-red-500/20 text-red-300'
                                    }`}
                            >
                                {status}
                            </div>
                        )}
                    </form>

                    {/* Direct Email Fallback */}
                    <div className="mt-8 pt-6 border-t border-white/10 text-center">
                        <p className="text-white/70 text-sm">
                            Or email me directly at{' '}
                            <a
                                href="mailto:mahammedthufail79@gmail.com"
                                className="text-emerald-400 hover:underline"
                            >
                                mahammedthufail79@gmail.com
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;