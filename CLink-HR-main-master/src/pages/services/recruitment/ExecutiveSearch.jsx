import React from 'react';
import { motion } from 'framer-motion';
import {
    Target,
    UserCheck,
    Briefcase,
    Shield,
    CheckCircle,
    Globe,
    ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ExecutiveSearch = () => {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="bg-brand-950 py-32 relative overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1574&q=80"
                        alt="Executive Search"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-brand-950/70"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl"
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-brand-800/50 border border-brand-700 text-brand-200 text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-md">
                            Leadership Buying
                        </span>
                        <h1 className="text-4xl md:text-8xl font-extrabold text-white mb-8 tracking-tight leading-[1.1]">
                            Executive <br />
                            <span className="text-accent-500">Search & Hiring</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-200 leading-relaxed font-light mb-10 max-w-2xl">
                            Leadership hiring with <span className="text-white font-medium">Precision, Confidentiality,</span> and Accountability. Hire leaders who drive transformation.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/contact/hire-talent" className="bg-brand-600 text-white px-8 py-4 rounded-full font-bold hover:bg-brand-500 transition-all shadow-lg flex items-center justify-center gap-2">
                                Discuss Leadership Needs <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Approach Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="lg:pr-12">
                                <span className="text-accent-600 font-bold uppercase tracking-widest text-sm mb-4 block">Leadership Excellence</span>
                                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">Why <span className="text-brand-600">Executive Search</span> <br />Is Different</h2>
                                <p className="text-xl text-slate-600 mb-10 leading-relaxed font-light">
                                    Executive roles have a direct impact on business direction. Leadership hiring requires a <span className="text-accent-600 font-bold">focused, confidential</span> search process with clear governance.
                                </p>
                                <div className="grid grid-cols-2 gap-6 mt-8">
                                    {[
                                        { label: "Confidential Search", icon: Shield },
                                        { label: "Role Alignment", icon: Target },
                                        { label: "Quality Evaluation", icon: UserCheck },
                                        { label: "Strategic Fit", icon: Briefcase }
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm hover:border-accent-200 transition-colors group">
                                            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-accent-500 shadow-sm shrink-0 group-hover:bg-accent-600 group-hover:text-white transition-colors">
                                                <item.icon className="w-6 h-6" />
                                            </div>
                                            <span className="font-bold text-slate-800 text-sm">{item.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-brand-200 rounded-[2rem] -rotate-3 opacity-30"></div>
                            <img
                                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80"
                                alt="Executive Meeting"
                                className="relative rounded-[2rem] shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Steps */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-brand-600 font-bold uppercase tracking-widest text-sm">Our Method</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">Executive Search Approach</h2>
                    </div>

                    <div className="grid md:grid-cols-5 gap-4">
                        {[
                            { step: "01", title: "Assessment", desc: "Understanding leadership goals & culture" },
                            { step: "02", title: "Talent Map", desc: "Identifying top profiles in market" },
                            { step: "03", title: "D-Screening", desc: "Discreet & direct leadership engagement" },
                            { step: "04", title: "Shortlist", desc: "Refined list of strategic fits" },
                            { step: "05", title: "Closure", desc: "Offer structuring & negotiation" }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                                <span className="block text-4xl font-bold text-brand-100 mb-2">{item.step}</span>
                                <h3 className="font-bold text-slate-900">{item.title}</h3>
                                <p className="text-sm text-slate-500 mt-1">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-24 bg-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-slate-900 mb-6">Hire Leaders Who Drive Growth</h2>
                    <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                        "CLink HR delivers executive search solutions with discretion, structure, and strategic alignment."
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contact/hire-talent" className="bg-brand-600 text-white px-10 py-4 rounded-full font-bold hover:bg-brand-700 transition-all shadow-xl">
                            Start Executive Search
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ExecutiveSearch;
