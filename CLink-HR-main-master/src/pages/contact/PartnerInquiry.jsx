import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Testimonials from '../../components/Testimonials';
import partnerInquiryHero from '../../assets/contact-img/partner-inquiry-hero.jpg';
import { Handshake, CheckCircle, TrendingUp, ShieldCheck, Globe, Send, UserCheck, Briefcase } from 'lucide-react';

const PartnerInquiry = () => {
    const [formData, setFormData] = useState({
        name: '',
        organization: '',
        email: '',
        phone: '',
        experience: '0-2',
        specialization: 'IT',
        message: ''
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

        console.log("Partner Inquiry:", formData);
        alert("Thank you for your interest! We will review your profile and get back to you shortly.");

        setFormData({
            name: '',
            organization: '',
            email: '',
            phone: '',
            experience: '0-2',
            specialization: 'IT',
            message: ''
        });
    };

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="relative bg-brand-950 py-32 overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={partnerInquiryHero}
                        alt="Partner Inquiry"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-brand-950/50"></div>
                </div>

                <div className="max-w-7xl ml-0 mr-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-brand-800/50 border border-brand-700 text-brand-200 text-xs font-semibold tracking-widest uppercase mb-6 backdrop-blur-md">
                            IPP Partner Program
                        </span>
                        <h1 className="text-3xl md:text-5xl text-white font-extrabold mb-6 tracking-tight">
                            Join CLink HR as an <br /><span className="text-accent-500">Independent Prime Partner (IPP)</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 max-w-4xl leading-relaxed mb-8">
                            Looking to build your own recruitment brand while leveraging a structured ecosystem? CLink HR’s IPP Partner Program allows recruiters and recruitment firms to focus on delivery and closures, while we manage clients, coordination, and backend support through the Zryoss platform.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content Area */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-20 pb-24">
                <div className="grid lg:grid-cols-3 gap-8">

                    {/* Left Column: Why Join & Process */}
                    <div className="lg:col-span-2 space-y-8">

                        {/* Why Become an IPP */}
                        <div className="bg-white rounded-3xl p-8 shadow-md border border-slate-100">
                            <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2">
                                <Handshake className="w-6 h-6 text-brand-600" /> Why Become an IPP Partner?
                            </h2>
                            <div className="grid sm:grid-cols-2 gap-6">
                                {[
                                    { title: "Operate Independently", desc: "Build & grow under your own brand name.", icon: UserCheck },
                                    { title: "Structured Requirements", desc: "Access verified mandates across industries.", icon: Briefcase },
                                    { title: "Transparent Earnings", desc: "Performance-based payouts with no delays.", icon: TrendingUp },
                                    { title: "Central Support", desc: "SLA management, compliance & coordination.", icon: ShieldCheck },
                                    { title: "Scalable Growth", desc: "Long-term partnership opportunities.", icon: Globe }
                                ].map((item, i) => (
                                    <div key={i} className={`flex gap-4 ${i === 4 ? 'sm:col-span-2' : ''}`}>
                                        <div className="w-10 h-10 rounded-xl bg-accent-50 flex items-center justify-center text-accent-600 shrink-0 mt-1">
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
                                <CheckCircle className="w-6 h-6 text-brand-600" /> How the Partner Inquiry Works
                            </h2>
                            <div className="space-y-4 relative pl-4 border-l-2 border-brand-100 ml-2">
                                {[
                                    { title: "Submit Your Inquiry", desc: "Fill details, experience & specialization." },
                                    { title: "Profile Review & Approval", desc: "CLink HR evaluates your profile." },
                                    { title: "Platform Access", desc: "Access Zryoss dashboards & workflows." },
                                    { title: "Orientation & Training", desc: "Learn delivery processes & SLAs." },
                                    { title: "Start Receiving Requirements", desc: "Execute mandates & earn via closures." }
                                ].map((step, i) => (
                                    <div key={i} className="relative pl-6 pb-2">
                                        <div className="absolute -left-[21px] top-1 w-4 h-4 rounded-full bg-brand-500 border-2 border-white shadow-sm"></div>
                                        <h4 className="font-bold text-slate-900 text-base">{step.title}</h4>
                                        <p className="text-slate-600 text-sm">{step.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* Right Column: Inquiry Form */}
                    <div className="lg:col-span-1">
                        <div className="bg-white p-6 rounded-3xl shadow-xl border border-slate-100 sticky top-24">
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Partner Inquiry Form</h3>
                            <p className="text-slate-500 text-base mb-6">Start your journey as an IPP.</p>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-xs font-bold text-slate-700 mb-1">Full Name / Company Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-accent-500 focus:bg-white focus:outline-none text-sm transition-all"
                                        placeholder="Your Name"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-accent-500 focus:bg-white focus:outline-none text-sm transition-all"
                                        placeholder="email@example.com"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-slate-700 mb-1">Contact Number</label>
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
                                            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-r-xl focus:ring-2 focus:ring-accent-500 focus:bg-white focus:outline-none text-sm transition-all"
                                            placeholder="10-digit number"
                                            maxLength={10}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    <div>
                                        <label className="block text-xs font-bold text-slate-700 mb-1">Experience (Yrs)</label>
                                        <select
                                            name="experience"
                                            value={formData.experience}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-accent-500 focus:bg-white focus:outline-none text-sm transition-all"
                                        >
                                            <option value="0-2">0-2</option>
                                            <option value="2-5">2-5</option>
                                            <option value="5-10">5-10</option>
                                            <option value="10+">10+</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-slate-700 mb-1">Specialization</label>
                                        <select
                                            name="specialization"
                                            value={formData.specialization}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-accent-500 focus:bg-white focus:outline-none text-sm transition-all"
                                        >
                                            <option value="IT">IT</option>
                                            <option value="Non-IT">Non-IT</option>
                                            <option value="Healthcare">Healthcare</option>
                                            <option value="Retail">Retail</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-slate-700 mb-1">Additional Comments</label>
                                    <textarea
                                        rows="3"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-accent-500 focus:bg-white focus:outline-none text-sm transition-all"
                                        placeholder="Tell us about your expertise..."
                                    ></textarea>
                                </div>
                                <button type="submit" className="w-full bg-brand-600 text-white font-semibold py-3.5 rounded-xl hover:bg-brand-700 transition-all shadow-lg flex items-center justify-center gap-2">
                                    Submit Inquiry <Send className="w-4 h-4" />
                                </button>
                                <p className="text-center text-xs text-slate-400 mt-2">Response within 24–48 hours.</p>
                            </form>
                        </div>
                    </div>

                </div>
            </div>

            {/* Key Statement */}
            <section className="py-16 bg-brand-50 text-center border-t border-brand-100">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-brand-900 italic tracking-tight">
                        "Grow your recruitment brand independently, deliver quality hires, and scale with confidence—<br /><span className="text-accent-600">powered by CLink HR and Zryoss.</span>"
                    </h2>
                </div>
            </section>

            <Testimonials />
        </div>
    );
};

export default PartnerInquiry;
