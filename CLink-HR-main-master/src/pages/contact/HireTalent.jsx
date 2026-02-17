import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Testimonials from '../../components/Testimonials';
import hireTalentHero from '../../assets/contact-img/hire-talent-hero.jpg';
import { Users, Clock, CheckSquare, DollarSign, Headphones, Layers, Zap, Briefcase, Globe, Send, UserCheck } from 'lucide-react';

const HireTalent = () => {
    const [formData, setFormData] = useState({
        companyName: '',
        contactPerson: '',
        email: '',
        phone: '',
        hiringNeeds: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // phone validation (10 digits)
        if (formData.phone.length !== 10) {
            alert("Phone number must be exactly 10 digits!");
            return;
        }

        console.log("Hiring Request:", formData);
        alert("Thank you! Our recruitment team will assist you shortly.");

        setFormData({
            companyName: '',
            contactPerson: '',
            email: '',
            phone: '',
            hiringNeeds: ''
        });
    };

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="relative bg-brand-950 py-32 overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={hireTalentHero}
                        alt="Hire Talent"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-brand-950/60"></div>
                </div>

                <div className="max-w-7xl ml-0 mr-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-brand-800/50 border border-brand-700 text-brand-200 text-xs font-semibold tracking-widest uppercase mb-6 backdrop-blur-md">
                            Recruitment Solutions
                        </span>
                        <h1 className="text-3xl md:text-5xl lg:text-7xl text-white font-bold mb-6 tracking-tight">
                            Find the Right <span className="text-accent-500">Talent, Faster</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 max-w-4xl leading-relaxed mb-8">
                            At CLink HR, we help businesses hire the best talent quickly and efficiently. Leveraging our network of Independent Prime Partners (IPP) and the Zryoss platform, we deliver scalable, quality, and fast recruitment solutions across industries.
                        </p>
                        <p className="text-xl md:text-2xl text-slate-200 mb-8 font-light max-w-4xl leading-relaxed">
                            Whether you are a startup, SME, or enterprise, our model ensures speed, accuracy, and cost-efficiency.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content Area */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-20 pb-24">
                <div className="grid lg:grid-cols-3 gap-8">

                    {/* Left Column: Why Hire & Solutions */}
                    <div className="lg:col-span-2 space-y-8">

                        {/* Why Hire */}
                        <div className="bg-white rounded-3xl p-8 shadow-md border border-slate-100">
                            <h2 className="text-2xl font-bold text-slate-900 mb-8">Why Hire Through CLink HR?</h2>
                            <div className="grid sm:grid-cols-2 gap-6">
                                {[
                                    { title: "Access a Large Talent Pool", desc: "Specialized candidates across IT, Retail, Healthcare & more via IPP network.", icon: Users },
                                    { title: "Faster Hiring", desc: "Distributed execution ensures parallel sourcing and reduced time-to-hire.", icon: Clock },
                                    { title: "Structured Process", desc: "Centralized validation, clear SLAs, and continuous monitoring.", icon: CheckSquare },
                                    { title: "Cost-Optimized", desc: "Flexible hiring options without overheads of large internal HR teams.", icon: DollarSign },
                                    { title: "End-to-End Support", desc: "Sourcing, screening, interview coordination, and onboarding.", icon: Headphones }
                                ].map((item, i) => (
                                    <div key={i} className={`flex gap-4 ${i === 4 ? 'sm:col-span-2' : ''}`}>
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

                        {/* Solutions & Process */}
                        <div className="bg-white rounded-3xl p-8 shadow-md border border-slate-100">
                            <div className="mb-10">
                                <h2 className="text-2xl font-bold text-brand-900 mb-6 flex items-center gap-2">
                                    <Layers className="w-6 h-6 text-brand-600" /> Our Hiring Solutions
                                </h2>
                                <div className="flex flex-wrap gap-3">
                                    {[
                                        "IT Hiring Solutions",
                                        "Startup & Fast Closure Hiring",
                                        "Multi-location Workforce Solutions",
                                        "Contract Workforce Management",
                                        "Industry-Specific Hiring Solutions"
                                    ].map((tag, i) => (
                                        <span key={i} className="bg-slate-50 px-4 py-2 rounded-lg text-base font-medium text-slate-700 border border-slate-100">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <p className="mt-4 text-base text-slate-500 italic">Tailored to meet your business requirements and hiring goals.</p>
                            </div>

                            <div className="pt-8 border-t border-slate-100">
                                <h2 className="text-2xl font-bold text-brand-900 mb-6 flex items-center gap-2">
                                    <Zap className="w-6 h-6 text-brand-600" /> How It Works
                                </h2>
                                <div className="space-y-4">
                                    {[
                                        "Submit Your Requirement: Share JDs and expectations.",
                                        "Requirement Structuring: Validated and structured by CLink.",
                                        "Execution via IPPs: Parallel sourcing by experts.",
                                        "Central Validation: Quality checks before submission.",
                                        "Closure & Onboarding: Hiring and onboarding facilitated."
                                    ].map((step, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <div className="w-6 h-6 rounded-full bg-brand-100 text-brand-700 text-xs font-bold flex items-center justify-center shrink-0">
                                                {i + 1}
                                            </div>
                                            <p className="text-slate-700 text-base">{step}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Right Column: CTA Form */}
                    <div className="lg:col-span-1">
                        <div className="bg-white p-6 rounded-3xl shadow-xl border border-slate-100 sticky top-24">
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Get Started Today</h3>
                            <p className="text-slate-500 text-base mb-6">Start hiring the right talent.</p>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-xs font-bold text-slate-700 mb-1">Company Name</label>
                                    <input
                                        type="text"
                                        name="companyName"
                                        value={formData.companyName}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-500 focus:bg-white focus:outline-none text-sm transition-all"
                                        placeholder="Your Company"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-slate-700 mb-1">Contact Person</label>
                                    <input
                                        type="text"
                                        name="contactPerson"
                                        value={formData.contactPerson}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-500 focus:bg-white focus:outline-none text-sm transition-all"
                                        placeholder="Full Name"
                                        required
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    <div>
                                        <label className="block text-xs font-bold text-slate-700 mb-1">Work Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-500 focus:bg-white focus:outline-none text-sm transition-all"
                                            placeholder="email@company.com"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-slate-700 mb-1">Phone</label>
                                        <div className="flex">
                                            <span className="inline-flex items-center px-3 rounded-l-xl border border-r-0 border-slate-200 bg-slate-100 text-slate-500 font-bold text-sm">
                                                +91
                                            </span>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={(e) => {
                                                    const value = e.target.value.replace(/\D/g, '');
                                                    if (value.length <= 10) {
                                                        setFormData(prev => ({ ...prev, phone: value }));
                                                    }
                                                }}
                                                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-r-xl focus:ring-2 focus:ring-brand-500 focus:bg-white focus:outline-none text-sm transition-all"
                                                placeholder="10-digit number"
                                                maxLength={10}
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-slate-700 mb-1">Hiring Needs</label>
                                    <textarea
                                        rows="3"
                                        name="hiringNeeds"
                                        value={formData.hiringNeeds}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-500 focus:bg-white focus:outline-none text-sm transition-all"
                                        placeholder="Briefly describe roles..."
                                    ></textarea>
                                </div>
                                <button type="submit" className="w-full bg-brand-600 text-white font-semibold py-3.5 rounded-xl hover:bg-brand-700 transition-all shadow-lg flex items-center justify-center gap-2">
                                    Start Hiring <Send className="w-4 h-4" />
                                </button>
                                <div className="text-center mt-3">
                                    <p className="text-xs text-slate-400">or email <a href="mailto:hire@clinkhr.com" className="text-brand-600 font-bold hover:underline">hire@clinkhr.com</a></p>
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
                        "Hire smarter, faster, and with confidence — <br className="hidden md:block" /> powered by CLink HR and our IPP network."
                    </h2>
                </div>
            </section>

            <Testimonials />
        </div>
    );
};

export default HireTalent;
