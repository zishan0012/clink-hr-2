import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Testimonials from '../../components/Testimonials';
import payrollInquiryHero from '../../assets/contact-img/payroll-inquiry-hero.jpg';
import { Calculator, FileSpreadsheet, ShieldCheck, Globe, Headphones, CheckCircle, Send, Briefcase } from 'lucide-react';

const PayrollInquiry = () => {
    const [formData, setFormData] = useState({
        companyName: '',
        contactPerson: '',
        email: '',
        phone: '',
        employeeCount: '',
        requirements: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Payroll Inquiry:", formData);
        alert("Thank you! Our payroll team will contact you shortly.");
    };

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="relative bg-brand-950 py-32 overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={payrollInquiryHero}
                        alt="Payroll Inquiry"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-brand-950/60"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-accent-500/10 border border-accent-500/20 text-accent-400 text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-md">
                            Payroll Solutions
                        </span>
                        <h1 className="text-4xl md:text-6xl text-white font-extrabold mb-6 tracking-tight">
                            Simplify Payroll with <span className="text-accent-500">CLink HR</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 max-w-4xl leading-relaxed mb-8">
                            Managing payroll can be complex, but CLink HR makes it simple, accurate, and compliant. Through our centralized payroll management, backed by the Zryoss platform and expert IPP network, we handle everything from salary processing to statutory compliance.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content Area */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-20 pb-24">
                <div className="grid lg:grid-cols-3 gap-8">

                    {/* Left Column: Why Choose & Process */}
                    <div className="lg:col-span-2 space-y-8">

                        {/* Why Choose CLink HR */}
                        <div className="bg-white rounded-3xl p-8 shadow-md border border-slate-100">
                            <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2">
                                <Calculator className="w-6 h-6 text-brand-600" /> Why Choose CLink HR Payroll?
                            </h2>
                            <div className="grid sm:grid-cols-2 gap-6">
                                {[
                                    { title: "End-to-End Management", desc: "Salary processing, Tax, PF, ESI & statutory compliance.", icon: FileSpreadsheet },
                                    { title: "Multi-Location Payroll", desc: "Processing across multiple offices with consolidated reporting.", icon: Globe },
                                    { title: "Automated & Transparent", desc: "Real-time processing via Zryoss with automated payslips.", icon: ShieldCheck },
                                    { title: "Expert Support", desc: "Guidance from payroll specialists & compliance updates.", icon: Headphones }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center text-brand-600 shrink-0 mt-1">
                                            <item.icon className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-900 text-base mb-1">{item.title}</h3>
                                            <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* How It Works */}
                        <div className="bg-white rounded-3xl p-8 shadow-md border border-slate-100">
                            <h2 className="text-2xl font-bold text-brand-900 mb-6 flex items-center gap-2">
                                <CheckCircle className="w-6 h-6 text-brand-600" /> How Payroll Inquiry Works
                            </h2>
                            <div className="space-y-4">
                                {[
                                    { title: "Submit Your Payroll Requirement", desc: "Provide details, headcount & salary structure." },
                                    { title: "Requirement Assessment", desc: "CLink HR evaluates your specific payroll needs." },
                                    { title: "Solution Proposal", desc: "Receive a tailored payroll plan and pricing." },
                                    { title: "Onboarding & Implementation", desc: "Zryoss setup, execution support & smooth processing." },
                                    { title: "Ongoing Support", desc: "Continuous support for queries & reporting." }
                                ].map((step, i) => (
                                    <div key={i} className="flex gap-4 items-start">
                                        <div className="w-6 h-6 rounded-full bg-brand-100 text-brand-700 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                                            {i + 1}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 text-base">{step.title}</h4>
                                            <p className="text-slate-600 text-sm">{step.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* Right Column: Inquiry Form */}
                    <div className="lg:col-span-1">
                        <div className="bg-white p-6 rounded-3xl shadow-xl border border-slate-100 sticky top-24">
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Payroll Inquiry Form</h3>
                            <p className="text-slate-500 text-base mb-6">Simplify your payroll process.</p>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-xs font-bold text-slate-700 mb-1">Company Name</label>
                                    <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-500 focus:bg-white focus:outline-none text-sm transition-all" placeholder="Your Company" required />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-slate-700 mb-1">Contact Person</label>
                                    <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-500 focus:bg-white focus:outline-none text-sm transition-all" placeholder="Full Name" required />
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    <div>
                                        <label className="block text-xs font-bold text-slate-700 mb-1">Emp Count</label>
                                        <input type="number" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-500 focus:bg-white focus:outline-none text-sm transition-all" placeholder="e.g. 50" required />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-slate-700 mb-1">Phone</label>
                                        <input type="tel" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-500 focus:bg-white focus:outline-none text-sm transition-all" placeholder="+91..." required />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                                    <input type="email" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-500 focus:bg-white focus:outline-none text-sm transition-all" placeholder="work@email.com" required />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-slate-700 mb-1">Payroll Requirements</label>
                                    <textarea rows="3" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-500 focus:bg-white focus:outline-none text-sm transition-all" placeholder="Describe needs..."></textarea>
                                </div>
                                <button type="submit" className="w-full bg-brand-600 text-white font-bold py-3.5 rounded-xl hover:bg-brand-700 transition-all shadow-lg flex items-center justify-center gap-2">
                                    Get Payroll Plan <Send className="w-4 h-4" />
                                </button>
                                <div className="text-center mt-3">
                                    <p className="text-xs text-slate-400">or email <a href="mailto:payroll@clinkhr.com" className="text-brand-600 font-bold hover:underline">payroll@clinkhr.com</a></p>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>

            {/* Key Statement */}
            <section className="py-16 bg-brand-50 text-center border-t border-brand-100">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-brand-900 italic tracking-tight">
                        "Accurate, compliant, and hassle-free payroll — <br className="hidden md:block" /> <span className="text-accent-600">powered by CLink HR and our IPP network.</span>"
                    </h2>
                </div>
            </section>

            <Testimonials />
        </div>
    );
};

export default PayrollInquiry;
