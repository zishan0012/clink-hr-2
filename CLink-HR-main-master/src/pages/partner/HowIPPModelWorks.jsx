import React from 'react';
import { motion } from 'framer-motion';
import { UserPlus, Search, FileCheck, ShieldCheck, CheckCircle, TrendingUp, Handshake } from 'lucide-react';

const HowIPPModelWorks = () => {
    const steps = [
        {
            title: "Onboarding as an IPP",
            desc: "Apply and get approved as an Independent Prime Partner. Get access to the Zryoss platform and complete basic orientation and training.",
            icon: UserPlus
        },
        {
            title: "Requirement Allocation",
            desc: "CLink HR shares structured, verified client requirements via Zryoss. Requirements are mapped based on your industry expertise, specialization, and bandwidth.",
            icon: Search
        },
        {
            title: "Execution by IPP",
            desc: "Source, screen, and submit candidates for the assigned roles. Focus solely on delivery and closures. Use Zryoss workflows to track progress and updates.",
            icon: FileCheck
        },
        {
            title: "Quality & SLA Adherence",
            desc: "All submissions go through quality checks and SLA validation. CLink HR monitors progress and ensures consistent delivery standards.",
            icon: ShieldCheck
        },
        {
            title: "Closure & Validation",
            desc: "Successful candidates are validated centrally. Feedback is shared, and closure confirmed. Any escalations or issues are resolved through CLink HR.",
            icon: CheckCircle
        },
        {
            title: "Transparent Payouts",
            desc: "Payouts are processed on closure validation. Track earnings and settlements via Zryoss dashboard—transparent, timely, and performance-linked.",
            icon: TrendingUp
        },
    ];

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="bg-brand-950 py-40 text-center text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-brand-950/70 via-brand-950/90 to-brand-950"></div>
                <div className="relative z-10 max-w-4xl mx-auto px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-extrabold mb-6"
                    >
                        Independent Delivery with <br /><span className="text-accent-500">Centralized Support</span>
                    </motion.h1>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
                        The IPP (Independent Prime Partner) Model allows recruitment professionals to operate under your own brand, while leveraging the CLink HR + Zryoss ecosystem for clients, coordination, and backend support.
                    </p>
                    <div className="inline-block bg-white/10 backdrop-blur-md border border-white/10 px-6 py-3 rounded-full text-base font-medium text-accent-400">
                        It’s designed to deliver speed, scale, and quality without the overhead of building internal teams.
                    </div>
                </div>
            </section>

            {/* Timeline Steps */}
            <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900">Step-by-Step IPP Model</h2>
                    <p className="text-slate-600 mt-2">A structured path to success</p>
                </div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 -translate-x-1/2"></div>

                    <div className="space-y-12 relative">
                        {steps.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className={`flex flex-col md:flex-row gap-8 items-center ${i % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
                            >
                                <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'} text-center w-full`}>
                                    <h3 className="text-2xl font-bold text-brand-900 mb-3">{step.title}</h3>
                                    <p className="text-slate-600 leading-relaxed max-w-md mx-auto md:mx-0 inline-block">{step.desc}</p>
                                </div>

                                <div className="relative z-10 w-16 h-16 rounded-full bg-white border-4 border-accent-100 shadow-xl flex items-center justify-center shrink-0">
                                    <step.icon className="w-8 h-8 text-accent-600" />
                                    <div className="absolute -top-2 -right-2 bg-brand-900 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
                                        {i + 1}
                                    </div>
                                </div>

                                <div className="flex-1 hidden md:block"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Key Advantages Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-brand-900">Key Advantages of the IPP Model</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="bg-brand-50 rounded-[2.5rem] p-10 border border-brand-100">
                            <h3 className="text-2xl font-bold text-brand-900 mb-6 flex items-center gap-3">
                                <Handshake className="w-8 h-8 text-brand-600" /> For IPP Partners
                            </h3>
                            <ul className="space-y-4">
                                {[
                                    "Operate independently under your own brand",
                                    "Zero client acquisition burden",
                                    "Centralized support for process, training, and documentation",
                                    "Scalable opportunities across industries and locations"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-brand-600 shrink-0 mt-0.5 text-sm font-bold shadow-sm">✓</div>
                                        <span className="text-brand-800 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-slate-900 rounded-[2.5rem] p-10 border border-slate-800 text-white">
                            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <TrendingUp className="w-8 h-8 text-accent-500" /> For Clients
                            </h3>
                            <ul className="space-y-4">
                                {[
                                    "Access to a large network of independent experts",
                                    "Faster closure with high-quality candidates",
                                    "Central coordination ensures accountability and transparency"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center text-accent-500 shrink-0 mt-0.5 text-sm font-bold shadow-sm">✓</div>
                                        <span className="text-slate-300 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* IPP Model in Action */}
            <section className="py-24 bg-slate-50 text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-slate-900 mb-12">IPP Model in Action</h2>
                    <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                        {[
                            "Client Requirement",
                            "Mapped to relevant IPPs",
                            "IPPs Execute Hiring",
                            "Central Validation",
                            "Closure & Payout"
                        ].map((step, i) => (
                            <div key={i} className="flex items-center gap-4">
                                <div className="bg-white px-6 py-3 rounded-xl shadow-sm border border-slate-200 font-bold text-slate-700">
                                    {step}
                                </div>
                                {i !== 4 && <div className="text-slate-300 hidden md:block">➝</div>}
                                {i !== 4 && <div className="text-slate-300 block md:hidden">↓</div>}
                            </div>
                        ))}
                    </div>
                    <div className="mt-12 text-slate-500 text-sm mb-6">
                        This distributed execution, centralized control model ensures high efficiency and consistency.
                    </div>
                    <p className="text-2xl md:text-3xl font-bold text-brand-900 italic tracking-tight">
                        "Independent execution. Centralized coordination. Scalable results."
                    </p>
                </div>
            </section>
        </div>
    );
};

export default HowIPPModelWorks;
