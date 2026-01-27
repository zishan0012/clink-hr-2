import React from 'react';
import { motion } from 'framer-motion';

const Partners = () => {
    return (
        <div className="pt-20 min-h-screen bg-slate-50">
            <div className="bg-brand-900 py-24 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold text-white mb-6"
                    >
                        Partner with Us
                    </motion.h1>
                    <p className="text-xl text-brand-100 max-w-3xl">
                        Join our Independent Placement Partner (IPP) program and grow with us.
                    </p>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="bg-white rounded-2xl shadow-sm p-8 border border-slate-100">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">The IPP Program</h2>
                    <p className="text-slate-600 mb-4">
                        Our IPP program enables freelancers, HR professionals, and recruitment agencies to collaborate with us on requirements and earn attractive commercial sharing.
                    </p>
                    <button className="bg-brand-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-brand-700 transition-colors">
                        Become a Partner
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Partners;
