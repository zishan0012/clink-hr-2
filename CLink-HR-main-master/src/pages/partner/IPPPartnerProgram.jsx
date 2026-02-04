import React from 'react';
import { motion } from 'framer-motion';
import Testimonials from '../../components/Testimonials';
import { Network, Handshake, Globe, ArrowRight, ShieldCheck, TrendingUp, Users, Target, Zap, Layout } from 'lucide-react';
import { Link } from 'react-router-dom';

import partnerProgramHero from '../../assets/partners-img/IPP Partner Program-hero.jpg';

const IPPPartnerProgram = () => {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="relative bg-brand-950 py-40 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={partnerProgramHero}
                        alt="Partner Program"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-brand-950/50"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-accent-500/10 border border-accent-500/20 text-accent-400 text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-md">
                            Partnership
                        </span>
                        <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-6 tracking-tight leading-tight">
                            IPP Partner <span className="text-accent-500">Program</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 max-w-4xl leading-relaxed mb-10">
                            Build Your Recruitment Business with Confidence. The IPP Partner Program by CLink HR is designed for professionals who want to scale their own recruitment brand without the burden of backend operations.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/partners/become-ipp-partner" className="bg-accent-600 text-white px-8 py-4 rounded-full font-bold hover:bg-accent-700 transition-all shadow-lg hover:shadow-accent-500/25 flex items-center justify-center gap-2">
                                Join Program <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Overview Section */}
            <section className="py-24 bg-white relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <span className="text-brand-600 font-bold uppercase tracking-widest text-sm mb-4 block">Program Overview</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">A High-Performance Ecosystem</h2>
                        <p className="text-xl text-slate-600 leading-relaxed">
                            The IPP Partner Program connects client demand managed by CLink HR with Independent Prime Partners (IPP) executing deliveries, all supported by the Zryoss platform ensuring structure, transparency, and scale.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: "Who is it for?", desc: "Independent recruiters, boutique firms, scaling entrepreneurs.", icon: Users },
                            { title: "What you get", desc: "Live requirements, own branding, Zryoss platform support.", icon: Target },
                            { title: "Focus Areas", desc: "Sourcing, screening, and delivering quality closures.", icon: Search },
                            { title: "CLink Handles", desc: "Client contracts, SLAs, validation, and payouts.", icon: ShieldCheck }
                        ].map((item, i) => (
                            <div key={i} className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 text-center hover:bg-white hover:shadow-xl transition-all">
                                <div className="w-14 h-14 mx-auto bg-white rounded-2xl flex items-center justify-center text-brand-600 mb-6 shadow-sm">
                                    <item.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Detailed Offering Section */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-8">What IPP Partners Get</h2>
                            <div className="space-y-8">
                                {[
                                    { title: "Access to Live Requirements", items: ["Structured hiring mandates", "Clear JDs and SLA expectations", "Multi-industry roles"] },
                                    { title: "Brand Independence", items: ["Operate under your own brand name", "Build long-term market credibility", "Grow as an independent business"] },
                                    { title: "Zryoss Platform Support", items: ["Centralized requirement dashboard", "Submission and tracking workflows", "Backend coordination"] },
                                    { title: "Operational Enablement", items: ["JD understanding training", "Best-practice guidance", "Delivery process support"] },
                                    { title: "Centralized Payouts", items: ["Transparent closure validation", "Structured settlement process", "Timely payouts"] }
                                ].map((section, i) => (
                                    <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                                        <h3 className="text-lg font-bold text-brand-800 mb-4 flex items-center gap-2">
                                            <CheckCircle className="w-5 h-5 text-accent-500" /> {section.title}
                                        </h3>
                                        <ul className="space-y-2 pl-7">
                                            {section.items.map((li, j) => (
                                                <li key={j} className="text-slate-600 text-sm list-disc">{li}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <div className="bg-brand-900 rounded-[2.5rem] p-10 text-white sticky top-24">
                                <h2 className="text-3xl font-bold mb-8">Division of Responsibilities</h2>

                                <div className="mb-10">
                                    <h3 className="text-xl font-bold text-accent-400 mb-4 flex items-center gap-2"><Zap className="w-5 h-5" /> What IPP Partners Focus On</h3>
                                    <ul className="space-y-3">
                                        <li className="flex gap-3 text-slate-300"><span className="text-accent-500">✓</span> Sourcing and screening candidates</li>
                                        <li className="flex gap-3 text-slate-300"><span className="text-accent-500">✓</span> Managing interviews and closures</li>
                                        <li className="flex gap-3 text-slate-300"><span className="text-accent-500">✓</span> Delivering quality outcomes</li>
                                    </ul>
                                    <p className="mt-4 text-sm text-slate-400 italic">Everything else is handled centrally.</p>
                                </div>

                                <div className="pt-8 border-t border-brand-800">
                                    <h3 className="text-xl font-bold text-brand-200 mb-4 flex items-center gap-2"><Layout className="w-5 h-5" /> What CLink HR Manages</h3>
                                    <ul className="space-y-3">
                                        <li className="flex gap-3 text-slate-300"><span className="text-brand-400">✓</span> Client onboarding and contracts</li>
                                        <li className="flex gap-3 text-slate-300"><span className="text-brand-400">✓</span> Requirement validation and distribution</li>
                                        <li className="flex gap-3 text-slate-300"><span className="text-brand-400">✓</span> SLA tracking and governance</li>
                                        <li className="flex gap-3 text-slate-300"><span className="text-brand-400">✓</span> Client coordination and escalation</li>
                                        <li className="flex gap-3 text-slate-300"><span className="text-brand-400">✓</span> Settlement and reporting</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why It Works & Scale */}
            <section className="py-24 bg-white text-center">
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-slate-900 mb-12">Why the IPP Partner Program Works</h2>
                    <div className="grid md:grid-cols-4 gap-6 mb-16">
                        {[
                            "No client hunting required",
                            "No backend system investment",
                            "No operational chaos",
                            "Scalable opportunity pipeline"
                        ].map((item, i) => (
                            <div key={i} className="bg-brand-50 p-6 rounded-2xl font-bold text-brand-800 text-sm">
                                {item}
                            </div>
                        ))}
                    </div>

                    <div className="bg-slate-900 text-white p-12 rounded-[3rem]">
                        <h3 className="text-2xl font-bold mb-4">How the Program Scales</h3>
                        <div className="flex flex-wrap justify-center gap-8 text-slate-300 mb-8">
                            <span>From individual recruiters to firms</span> •
                            <span>From niche roles to bulk hiring</span> •
                            <span>From startups to enterprise clients</span>
                        </div>
                        <p className="text-3xl md:text-5xl font-bold text-accent-400 italic tracking-tight">
                            "Build your brand. Deliver with confidence. Scale with structure."
                        </p>
                    </div>
                </div>
            </section>

            <Testimonials />
        </div>
    );
};

// Helper components for icons used in map (imported purely for cleaner code structure logic)
import { Search, CheckCircle } from 'lucide-react';

export default IPPPartnerProgram;
