import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, User, Clock, ArrowRight, Lock } from 'lucide-react';

const Blog = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-20 min-h-screen bg-slate-50">
            <div className="bg-brand-950 py-32 relative overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                        alt="Insights & Blog"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-brand-950/50"></div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold text-white mb-6"
                    >
                        Insights & Blog
                    </motion.h1>
                    <p className="text-xl text-brand-100 max-w-3xl">
                        Trends, analysis, and expert advice on recruitment, HR, and workforce management.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {/* BLOG POSTS */}
                    {[
                        {
                            title: "The Future of HR Outsourcing: Strategic Benefits of RPO & HRMS in 2026",
                            desc: "In 2026, HR Outsourcing and RPO are no longer optional support functions—they are strategic levers driving competitive advantage.",
                            date: "Oct 28, 2025",
                            readTime: "8 min read",
                            tag: "Industry Trends",
                            link: "/resources/blog/future-of-hr-outsourcing-2026",
                            color: "from-brand-800 to-brand-600"
                        },
                        {
                            title: "Permanent vs Temporary Staffing: How to Choose the Right Strategy",
                            desc: "Market volatility and skill shortages are pushing companies to adopt flexible staffing solutions. How do you decide what’s right for your business?",
                            date: "Nov 05, 2025",
                            readTime: "6 min read",
                            tag: "Workforce Strategy",
                            link: "/resources/blog/permanent-vs-temporary-staffing",
                            color: "from-accent-600 to-brand-700" // Typo fix: accent
                        },
                        {
                            title: "How Effective Payroll & Compliance Services Can Save Your Business Time and Money",
                            desc: "In today’s complex regulatory environment, payroll and compliance are no longer administrative functions—they are critical business safeguards.",
                            date: "Nov 12, 2025",
                            readTime: "7 min read",
                            tag: "Operational Efficiency",
                            link: "/resources/blog/payroll-compliance-benefits",
                            color: "from-amber-600 to-orange-700"
                        },
                        {
                            title: "How Independent Prime Partners (IPP) Are Transforming Talent Acquisition",
                            desc: "The IPP recruitment model represents a fundamental shift in how hiring partners collaborate, deliver results, and scale talent solutions.",
                            date: "Nov 19, 2025",
                            readTime: "9 min read",
                            tag: "Recruitment Evolution",
                            link: "/resources/blog/independent-prime-partners-ipp",
                            color: "from-blue-600 to-indigo-700"
                        },
                        {
                            title: "How BPP Are Powering the Next Generation of Talent & Business Growth",
                            desc: "The BPP partner model represents a strategic evolution in how businesses, consultants, recruiters, and service providers collaborate to drive scalable growth.",
                            date: "Nov 26, 2025",
                            readTime: "10 min read",
                            tag: "Partnership Evolution",
                            link: "/resources/blog/business-prime-partners-bpp",
                            color: "from-purple-600 to-pink-700"
                        },
                        {
                            title: "Executive Search & Leadership Hiring: Best Practices for Identifying Top Talent",
                            desc: "In today’s competitive environment, leadership hiring is about identifying visionaries who can steer organizations through change, scale sustainably, and build high-performance cultures.",
                            date: "Dec 03, 2025",
                            readTime: "12 min read",
                            tag: "Leadership Strategy",
                            link: "/resources/blog/executive-search-leadership-hiring",
                            color: "from-red-600 to-orange-700"
                        },
                        {
                            title: "Workforce Transformation in India: HR Insights for 2026 & Beyond",
                            desc: "By 2026, workforce transformation will no longer be optional. HR leaders are now expected to act as business strategists, culture architects, and technology enablers.",
                            date: "Jan 15, 2026",
                            readTime: "11 min read",
                            tag: "HR Trends 2026",
                            link: "/resources/blog/workforce-transformation-india-2026",
                            color: "from-emerald-600 to-teal-700"
                        }
                    ].map((blog, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * (index + 1) }}
                            className={`bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 border border-slate-100 group flex flex-col h-full ${index === 6 ? 'lg:col-start-2' : ''}`}
                        >
                            <div className={`h-56 bg-gradient-to-br ${blog.color} relative overflow-hidden group-hover:scale-105 transition-transform duration-500`}>
                                <div className="absolute inset-0 flex items-center justify-center opacity-30">
                                    <svg className="w-24 h-24 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                                    </svg>
                                </div>
                                <div className="absolute top-4 left-4 bg-accent-500 text-brand-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                    {blog.tag}
                                </div>
                            </div>

                            <div className="p-8 flex flex-col flex-grow">
                                <div className="flex items-center gap-4 text-xs text-slate-500 mb-4 font-medium">
                                    <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {blog.date}</span>
                                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {blog.readTime}</span>
                                </div>

                                <h3 className="text-2xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-brand-600 transition-colors">
                                    {blog.title}
                                </h3>

                                <p className="text-slate-600 mb-6 flex-grow leading-relaxed">
                                    {blog.desc}
                                </p>

                                <Link
                                    to={blog.link}
                                    className="inline-flex items-center gap-2 text-brand-600 font-bold hover:gap-3 transition-all"
                                >
                                    Read Full Article <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}


                    {/* ALL BLOGS LOADED */}


                </div>
            </div>
        </div>
    );
};

export default Blog;
