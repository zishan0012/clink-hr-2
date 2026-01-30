import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Testimonials from '../../components/Testimonials';
import {
    Plus,
    Minus,
    Briefcase,
    DollarSign,
    Users,
    CheckCircle,
    ArrowRight,
    Search
} from 'lucide-react';
import { Link } from 'react-router-dom';

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
    return (
        <motion.div
            initial={false}
            className={`border border-slate-200 rounded-2xl overflow-hidden mb-4 transition-all duration-300 ${isOpen ? 'bg-white shadow-lg ring-1 ring-brand-100 border-brand-200' : 'bg-white hover:border-brand-300'}`}
        >
            <button
                onClick={onClick}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
            >
                <span className={`text-lg font-bold pr-8 ${isOpen ? 'text-brand-700' : 'text-slate-800'}`}>
                    {question}
                </span>
                <span className={`p-2 rounded-full transition-colors flex-shrink-0 ${isOpen ? 'bg-brand-100 text-brand-600' : 'bg-slate-50 text-slate-400'}`}>
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </span>
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="px-6 pb-8 text-slate-600 leading-relaxed border-t border-slate-50 pt-4 text-base">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

const FAQsPartners = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            question: "What is the IPP (Individual Partner Program)?",
            answer: "The IPP is a strategic partnership model enabled and managed by the Zryoss ecosystem. It empowers HR professionals, recruitment agencies, and consultants to use CLink HR's platform and delivery capability to service clients and earn revenue."
        },
        {
            question: "Who can become an IPP Partner?",
            answer: "We welcome HR consultants, recruitment agencies, retired HR professionals, and industry veterans who have client relationships or recruitment delivery capabilities."
        },
        {
            question: "What is the earning potential?",
            answer: "IPP partners earn a significant percentage of the closure fee. Earnings depend on the volume of successful closures and the engagement model chosen."
        },
        {
            question: "Do I need prior experience?",
            answer: "While experience in recruitment or HR is beneficial, CLink HR provides training, process support, and the Zryoss technology platform to help partners succeed."
        },
        {
            question: "How does the Zryoss Ecosystem help?",
            answer: "The Zryoss ecosystem provides the technology backbone, ensuring transparent tracking of REQUIREMENTS, SUBMISSIONS, and PAYOUTS. It simplifies governance and improves efficiency."
        },
        {
            question: "Is there a joining fee or deposit?",
            answer: "Please contact our partnership team for details regarding the current onboarding schemes and commercial terms. We have flexible models suited for different partner types."
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="bg-brand-950 py-32 relative overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2064&q=80"
                        alt="Partnership Handshake"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-brand-950/50"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <span className="inline-block py-1.5 px-4 rounded-full bg-blue-900/50 border border-blue-500/30 text-blue-200 text-sm font-bold tracking-widest uppercase mb-6 backdrop-blur-md shadow-lg">
                            Partner Ecosystem
                        </span>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                            FAQs – Partners (IPP)
                        </h1>
                        <p className="text-xl text-brand-200 max-w-2xl  font-medium mb-4">
                            (Enabled & Managed by the Zryoss Ecosystem)
                        </p>t
                        <p className="text-xl md:text-2xl text-slate-200 mb-8 font-light max-w-4xl leading-relaxed">
                            Everything you need to know about joining India's fastest-growing recruitment partner network.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* FAQs List */}
            <section className="py-24 bg-white relative -mt-10 rounded-t-[3rem] z-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Partner Program Details</h2>
                        <div className="relative max-w-lg mx-auto mt-8">
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search partner questions..."
                                className="w-full pl-12 pr-4 py-4 rounded-full border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-200 transition-all shadow-sm"
                            />
                        </div>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                question={faq.question}
                                answer={faq.answer}
                                isOpen={openIndex === index}
                                onClick={() => setOpenIndex(index === openIndex ? null : index)}
                            />
                        ))}
                    </div>

                    {/* Highlight Statement */}
                    <div className="my-16 text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-brand-900 text-white p-10 rounded-[2.5rem] relative shadow-2xl overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                            <div className="relative z-10">
                                <Users className="w-12 h-12 text-brand-400 mx-auto mb-6" />
                                <p className="text-2xl font-serif italic mb-8">
                                    "Growth is better when shared. Join the CLink HR Partner Ecosystem today."
                                </p>
                                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                    <Link to="/partners" className="group flex items-center justify-center gap-3 bg-brand-500 text-white px-8 py-3 rounded-full font-bold hover:bg-brand-400 transition-all shadow-lg hover:-translate-y-1">
                                        <Briefcase className="w-5 h-5" />
                                        Join as an IPP
                                    </Link>
                                    <Link to="/contact" className="group flex items-center justify-center gap-3 bg-white/10 text-white border border-white/20 px-8 py-3 rounded-full font-bold hover:bg-white hover:text-brand-900 transition-all">
                                        <DollarSign className="w-5 h-5" />
                                        Partner Inquiry
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Testimonials />
        </div>
    );
};

export default FAQsPartners;
