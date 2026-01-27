import React from 'react';
import { motion } from 'framer-motion';

const PayrollInquiry = () => {
    return (
        <div className="pt-20 min-h-screen bg-slate-50">
            <div className="bg-brand-900 py-24 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold text-white mb-6"
                    >
                        Payroll Inquiry
                    </motion.h1>
                    <p className="text-xl text-brand-100 max-w-3xl">
                        Get a quote for our payroll outsourcing services.
                    </p>
                </div>
            </div>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="bg-white rounded-2xl shadow-sm p-8 border border-slate-100">
                    <p className="text-slate-600">Please contact us at payroll@clinkhr.com for a customized quote.</p>
                </div>
            </div>
        </div>
    );
};

export default PayrollInquiry;
