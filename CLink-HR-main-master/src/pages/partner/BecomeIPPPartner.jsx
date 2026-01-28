import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, User, Mail, Phone, MapPin, Linkedin, Briefcase, Award, CheckCircle } from 'lucide-react';

const BecomeIPPPartner = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        location: '',
        linkedin: '',
        experience: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        alert("Thank you for your interest! We will get back to you shortly.");
    };

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="bg-brand-950 py-40 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80')] bg-cover bg-center opacity-10"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-brand-950/70 via-brand-950/90 to-brand-950"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-accent-500/10 border border-accent-500/20 text-accent-400 text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-md">
                            Join the Ecosystem
                        </span>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
                            Start Your Journey as an <br /><span className="text-accent-500">Independent Prime Partner</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
                            CLink HR’s IPP Partner Program enables recruitment professionals and firms to build and grow their own recruitment brand while leveraging our structured ecosystem and technology platform (Zryoss).
                        </p>
                        <p className="text-slate-400 max-w-2xl mx-auto text-sm italic">
                            Become an IPP to focus on delivery, maximize earnings, and scale your recruitment business—without the hassle of client acquisition or backend operations.
                        </p>
                    </motion.div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-20">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Left Column: Information */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Why Become an IPP */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-3xl p-8 shadow-md border border-slate-100"
                        >
                            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <Award className="text-accent-600 w-6 h-6" /> Why Become an IPP Partner?
                            </h2>
                            <ul className="grid sm:grid-cols-2 gap-4">
                                {[
                                    "Operate independently under your own brand",
                                    "Access structured requirements from multiple industries",
                                    "Transparent, performance-based earnings and payouts",
                                    "Centralized support for client coordination, SLAs, and compliance",
                                    "Scalable growth opportunities"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-slate-600">
                                        <CheckCircle className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Who Can Become an IPP */}
                        <div className="bg-white rounded-3xl p-8 shadow-md border border-slate-100">
                            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <User className="text-accent-600 w-6 h-6" /> Who Can Become an IPP?
                            </h2>
                            <div className="flex flex-wrap gap-3 mb-6">
                                {["Independent recruiters", "Boutique recruitment firms", "Domain-specialized hiring experts", "HR entrepreneurs"].map((tag, i) => (
                                    <span key={i} className="bg-brand-50 text-brand-700 px-4 py-2 rounded-full font-medium text-sm border border-brand-100">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <p className="text-slate-500 italic border-l-4 border-accent-500 pl-4">
                                "Capability, experience, and commitment matter more than size or team structure."
                            </p>
                        </div>

                        {/* How to Become an IPP */}
                        <div className="bg-white rounded-3xl p-8 shadow-md border border-slate-100">
                            <h2 className="text-2xl font-bold text-slate-900 mb-8">How to Become an IPP Partner</h2>
                            <div className="space-y-8">
                                {[
                                    { step: "Step 1: Apply", desc: "Fill out the IPP application form. Share your recruitment experience and areas of expertise." },
                                    { step: "Step 2: Profile Review & Approval", desc: "CLink HR reviews your profile. Approved IPPs get access to the Zryoss platform and partner dashboard." },
                                    { step: "Step 3: Brand Enablement", desc: "Operate under your own brand identity. Receive guidance for digital presence and branding." },
                                    { step: "Step 4: Training & Orientation", desc: "Learn the CLink HR delivery process. Understand SLAs, workflows, and submission guidelines. Get familiar with the Zryoss system." },
                                    { step: "Step 5: Start Delivering", desc: "Receive structured requirements. Source, screen, and submit candidates. Closures are validated and payouts processed via Zryoss." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="flex flex-col items-center">
                                            <div className="w-8 h-8 rounded-full bg-brand-600 text-white flex items-center justify-center font-bold text-sm shrink-0">
                                                {i + 1}
                                            </div>
                                            {i !== 4 && <div className="h-full w-0.5 bg-slate-100 my-2"></div>}
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-900 text-lg mb-1">{item.step}</h3>
                                            <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Key Benefits */}
                        <div className="bg-accent-50 rounded-3xl p-8 border border-accent-100">
                            <h2 className="text-2xl font-bold text-brand-900 mb-6">Key Benefits</h2>
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="bg-white p-5 rounded-xl shadow-sm">
                                    <h4 className="font-bold text-slate-900 mb-2">Independence</h4>
                                    <p className="text-sm text-slate-600">Build your own brand and business.</p>
                                </div>
                                <div className="bg-white p-5 rounded-xl shadow-sm">
                                    <h4 className="font-bold text-slate-900 mb-2">Support</h4>
                                    <p className="text-sm text-slate-600">Training, process enablement, and backend coordination.</p>
                                </div>
                                <div className="bg-white p-5 rounded-xl shadow-sm">
                                    <h4 className="font-bold text-slate-900 mb-2">Earnings</h4>
                                    <p className="text-sm text-slate-600">Performance-based payouts, transparent and timely.</p>
                                </div>
                                <div className="bg-white p-5 rounded-xl shadow-sm">
                                    <h4 className="font-bold text-slate-900 mb-2">Growth</h4>
                                    <p className="text-sm text-slate-600">Access to larger clients, bulk requirements, and high-value roles.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Application Form */}
                    <div className="lg:col-span-1">
                        <div className="bg-white p-6 rounded-3xl shadow-xl border border-slate-100 sticky top-24">
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Apply Now</h3>
                            <p className="text-slate-500 text-sm mb-6">Start your journey today.</p>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-xs font-bold text-slate-700 mb-1">Full Name</label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-500 focus:bg-white focus:outline-none text-sm transition-all"
                                        placeholder="John Doe"
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
                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-500 focus:bg-white focus:outline-none text-sm transition-all"
                                        placeholder="john@example.com"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-500 focus:bg-white focus:outline-none text-sm transition-all"
                                        placeholder="+91 98765 43210"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-slate-700 mb-1">City / Location</label>
                                    <input
                                        type="text"
                                        name="location"
                                        value={formData.location}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-500 focus:bg-white focus:outline-none text-sm transition-all"
                                        placeholder="Mumbai, India"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-slate-700 mb-1">LinkedIn Profile</label>
                                    <input
                                        type="url"
                                        name="linkedin"
                                        value={formData.linkedin}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-500 focus:bg-white focus:outline-none text-sm transition-all"
                                        placeholder="https://linkedin.com/in/..."
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-slate-700 mb-1">Experience (Years)</label>
                                    <select
                                        name="experience"
                                        value={formData.experience}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-500 focus:bg-white focus:outline-none text-sm transition-all"
                                    >
                                        <option value="">Select Range</option>
                                        <option value="0-2">0 - 2 Years</option>
                                        <option value="3-5">3 - 5 Years</option>
                                        <option value="5-10">5 - 10 Years</option>
                                        <option value="10+">10+ Years</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-slate-700 mb-1">Why do you want to join?</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="3"
                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-500 focus:bg-white focus:outline-none text-sm transition-all"
                                        placeholder="Brief goals..."
                                    ></textarea>
                                </div>
                                <button type="submit" className="w-full bg-accent-600 text-white font-bold py-3.5 rounded-xl hover:bg-accent-700 transition-all shadow-lg hover:shadow-accent-500/30 flex items-center justify-center gap-2">
                                    <Send className="w-4 h-4" /> Submit Application
                                </button>

                                {/* IPP Partner Statement */}
                                <div className="mt-6 pt-6 border-t border-slate-100 text-center">
                                    <p className="text-sm font-bold text-brand-900">
                                        Deliver quality hires. Build your brand.
                                    </p>
                                    <p className="text-sm text-accent-600 font-bold">
                                        Scale with support.
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BecomeIPPPartner;
