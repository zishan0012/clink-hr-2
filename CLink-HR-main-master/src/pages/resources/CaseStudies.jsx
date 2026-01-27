import React from 'react';
import { motion } from 'framer-motion';

const CaseStudies = () => {
    return (
        <div className="pt-20 min-h-screen bg-slate-50">
            <div className="bg-brand-900 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl font-bold text-white mb-6"
                    >
                        Success Stories & Case Studies
                    </motion.h1>
                    <p className="text-xl text-brand-100">See how we've helped companies transform their workforce.</p>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="bg-white rounded-2xl shadow-sm p-8 border border-slate-100">
                    <p className="text-slate-600">Detailed case studies coming soon.</p>
                </div>
            </div>
        </div>
    );
};

export default CaseStudies;
