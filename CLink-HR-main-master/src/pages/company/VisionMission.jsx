import React from 'react';
import { motion } from 'framer-motion';
import Testimonials from '../../components/Testimonials';
import {
    Flag,
    Target,
    Zap,
    Layers,
    Award,
    HeartHandshake,
    TrendingUp,
    Globe,
    ShieldCheck
} from 'lucide-react';

import vision1 from '../../assets/company-img/vision1.avif';

const VisionMission = () => {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="bg-brand-950 py-32 relative overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={vision1}
                        alt="Skyscrapers"
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
                        <span className="inline-block py-1 px-3 rounded-full bg-brand-800/50 border border-brand-700 text-brand-200 text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-md">
                            Our Core Purpose
                        </span>
                        <h1 className="text-4xl md:text-8xl font-extrabold text-white mb-8 tracking-tight leading-[1.1]">
                            Vision <br />
                            <span className="text-accent-500">& Mission</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-200 max-w-3xl font-light leading-relaxed">
                            Redefining how organizations experience <span className="text-white font-medium">talent acquisition and workforce management</span> across India.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Vision & Mission Split Section */}
            <section className="py-24 bg-white relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-stretch">

                        {/* Vision Card */}
                        <div className="bg-slate-50 rounded-[3rem] p-16 border border-slate-100 relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
                            <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center text-accent-500 mb-10 shadow-sm group-hover:bg-accent-600 group-hover:text-white transition-all duration-300">
                                <Flag className="w-10 h-10" strokeWidth={1.5} />
                            </div>

                            <h2 className="text-5xl font-extrabold text-slate-900 mb-8 tracking-tight">Our Vision</h2>
                            <p className="text-slate-600 text-2xl leading-relaxed mb-10 font-light italic">
                                "To become India’s most trusted <span className="text-accent-600 font-bold not-italic">HR solutions ecosystem</span> by enabling businesses to hire, manage, and grow."
                            </p>
                            <p className="text-slate-500 leading-relaxed font-light text-lg">
                                We envision a future where organizations no longer struggle with hiring delays or workforce complexity—where HR delivery is seamless and outcome-focused.
                            </p>
                        </div>

                        {/* Mission Card */}
                        <div className="bg-brand-950 rounded-[3rem] p-16 border border-brand-900 relative overflow-hidden group shadow-2xl">
                            <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center text-accent-500 mb-10 shadow-sm group-hover:bg-accent-500 group-hover:text-white transition-all duration-300">
                                <Target className="w-10 h-10" strokeWidth={1.5} />
                            </div>

                            <h2 className="text-5xl font-extrabold text-white mb-8 tracking-tight">Our Mission</h2>
                            <p className="text-brand-100 text-2xl leading-relaxed mb-10 font-light">
                                To <span className="text-accent-500 font-bold">simplify workforce management</span> by delivering reliable, flexible, and scalable HR solutions.
                            </p>

                            <ul className="space-y-6">
                                {[
                                    "Centralized accountability frameworks",
                                    "Rapid execution via nationwide network",
                                    "Zero-compromise compliance standards",
                                    "Strategic long-term talent partnerships"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-4 text-brand-200">
                                        <ShieldCheck className="w-6 h-6 text-accent-500 shrink-0" />
                                        <span className="text-lg font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <span className="text-accent-600 font-bold uppercase tracking-widest text-sm mb-4 block">Our DNA</span>
                        <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">The Values That <br /><span className="text-brand-600">Define Us</span></h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: "Speed & Ownership", desc: "Faster delivery without compromising on accountability.", icon: Zap },
                            { title: "Scale with Ease", desc: "Growth-ready solutions for businesses of all sizes.", icon: Layers },
                            { title: "SLA Excellence", desc: "Defined frameworks, monitoring, and regular reporting.", icon: Award },
                            { title: "Client First", desc: "Every solution aligned to real organizational impact.", icon: HeartHandshake },
                        ].map((val, idx) => (
                            <div key={idx} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
                                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-accent-500 mb-8 group-hover:bg-accent-600 group-hover:text-white transition-all shadow-sm">
                                    <val.icon className="w-8 h-8" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">{val.title}</h3>
                                <p className="text-slate-600 leading-relaxed font-light">{val.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-24 bg-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl md:text-7xl font-extrabold text-slate-900 mb-8 tracking-tight">Aligned for <span className="text-accent-500">Impact.</span></h2>
                    <p className="text-xl text-slate-600 mb-12 leading-relaxed max-w-2xl mx-auto font-light italic">
                        "Our vision isn't just about growth; it's about building the infrastructure that lets our clients grow."
                    </p>
                </div>
            </section>

            <Testimonials />
        </div>
    );
};

export default VisionMission;
