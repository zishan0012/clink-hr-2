import React from 'react';
import { motion } from 'framer-motion';
import { Send, Search, Users, Briefcase, ChevronRight } from 'lucide-react';

const HireTalent = () => {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="bg-brand-950 py-32 relative overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                        alt="Hire Talent"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-brand-950/70"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-brand-800/50 border border-brand-700 text-brand-200 text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-md">
                            Requirement Intake
                        </span>
                        <h1 className="text-4xl md:text-8xl font-extrabold text-white mb-8 tracking-tight leading-[1.1]">
                            Scale Your <br />
                            <span className="text-accent-500">Workforce.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-200 max-w-2xl mx-auto font-light leading-relaxed">
                            Share your hiring needs and let our <span className="text-white font-medium">specialized recruitment desks</span> find the builders for your business.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Form Section */}
            <section className="py-24 relative -mt-16 z-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white p-10 md:p-16 rounded-[3rem] shadow-2xl border border-slate-100">
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Hiring Request</h2>
                            <p className="text-slate-500 font-light">Please provide the core details of the role. Our account manager will contact you within 24 hours.</p>
                        </div>

                        <form className="space-y-8">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-sm font-bold text-slate-700 ml-1">Company Name</label>
                                    <input
                                        type="text"
                                        className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-4 focus:ring-brand-500/20 text-slate-900 transition-all font-light"
                                        placeholder="Enter company name"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-sm font-bold text-slate-700 ml-1">Industry</label>
                                    <select className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-4 focus:ring-brand-500/20 text-slate-900 transition-all font-light appearance-none">
                                        <option>Select Industry</option>
                                        <option>IT & Software</option>
                                        <option>Manufacturing</option>
                                        <option>Healthcare</option>
                                        <option>Retail & E-commerce</option>
                                        <option>Logistics</option>
                                        <option>BFSI</option>
                                        <option>Education</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className="text-sm font-bold text-slate-700 ml-1">Title of the Position</label>
                                <input
                                    type="text"
                                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-4 focus:ring-brand-500/20 text-slate-900 transition-all font-light"
                                    placeholder="e.g. Senior Product Manager"
                                />
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-sm font-bold text-slate-700 ml-1">Number of Openings</label>
                                    <input
                                        type="number"
                                        className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-4 focus:ring-brand-500/20 text-slate-900 transition-all font-light"
                                        placeholder="1"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-sm font-bold text-slate-700 ml-1">Experience Bracket</label>
                                    <input
                                        type="text"
                                        className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-4 focus:ring-brand-500/20 text-slate-900 transition-all font-light"
                                        placeholder="e.g. 5-8 Years"
                                    />
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className="text-sm font-bold text-slate-700 ml-1">Primary Skills / Key Focus</label>
                                <textarea
                                    rows={4}
                                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-4 focus:ring-brand-500/20 text-slate-900 transition-all font-light"
                                    placeholder="Highlight the most critical skills needed..."
                                ></textarea>
                            </div>

                            <div className="pt-6">
                                <button className="w-full bg-brand-600 text-white px-12 py-5 rounded-full font-bold hover:bg-brand-700 transition-all shadow-xl flex items-center justify-center gap-3 group">
                                    Request Talent Search <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </button>
                                <p className="text-center text-slate-400 text-sm mt-6 font-light">
                                    By submitting, you agree to our terms of service and privacy policy.
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            {/* Why Hire Thru Us */}
            <section className="py-24 bg-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-slate-900 mb-12 tracking-tight">The CLink Advantage</h2>
                    <div className="grid md:grid-cols-3 gap-12">
                        {[
                            { title: "Deep Sourcing", desc: "Access to passive talent pools and niche communities.", icon: Search },
                            { title: "SLA Driven", desc: "Defined timelines for shortlisting and replacements.", icon: Briefcase },
                            { title: "Multi-Hub", desc: "Scale across 25+ cities with the same quality.", icon: Users },
                        ].map((item, i) => (
                            <div key={i} className="space-y-4">
                                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-accent-500 mx-auto shadow-sm">
                                    <item.icon className="w-8 h-8" />
                                </div>
                                <h4 className="font-bold text-slate-900 text-lg">{item.title}</h4>
                                <p className="text-slate-600 font-light text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HireTalent;
