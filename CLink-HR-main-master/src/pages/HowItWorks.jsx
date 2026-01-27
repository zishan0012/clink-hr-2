import React from 'react';
import { motion } from 'framer-motion';

const HowItWorks = () => {
    return (
        <div className="pt-20 min-h-screen bg-slate-50">
            <div className="bg-brand-900 py-24 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold text-white mb-6"
                    >
                        How It Works
                    </motion.h1>
                    <p className="text-xl text-brand-100 max-w-3xl">
                        Our streamlined process ensures transparency, speed, and quality in every engagement.
                    </p>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="bg-white rounded-2xl shadow-sm p-8 border border-slate-100 mb-8" id="delivery">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Delivery Model</h2>
                    <p className="text-slate-600">We follow a rigorous 5-step process: Analysis, Sourcing, Screening, Selection, and Onboarding.</p>
                </div>
                <div className="bg-white rounded-2xl shadow-sm p-8 border border-slate-100" id="tech">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Technology Platform (Zryoss)</h2>
                    <p className="text-slate-600">Our proprietary platform Zryoss enables real-time tracking, collaboration, and data-driven insights.</p>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;
