import React from 'react';
import { motion } from 'framer-motion';

const Blog = () => {
    return (
        <div className="pt-20 min-h-screen bg-slate-50">
            <div className="bg-brand-900 py-24 relative overflow-hidden">
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
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow border border-slate-100">
                            <div className="h-48 bg-slate-200"></div>
                            <div className="p-6">
                                <div className="text-sm text-brand-600 font-semibold mb-2">Recruitment</div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">Top Hiring Trends for 2025</h3>
                                <p className="text-slate-600 text-sm mb-4">Discover what's shaping the future of talent acquisition...</p>
                                <a href="#" className="text-brand-600 font-medium hover:text-brand-700">Read More →</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;
