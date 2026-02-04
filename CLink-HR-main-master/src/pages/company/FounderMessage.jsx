import React from 'react';
import { motion } from 'framer-motion';
import Testimonials from '../../components/Testimonials';
import { Quote, Briefcase, Target, Users, TrendingUp, CheckCircle, Zap, ShieldCheck } from 'lucide-react';
import foundermsg2 from '../../assets/company-img/foundermsg2.avif';
import foundermsg1 from '../../assets/company-img/foundermsg1.avif';

const FounderMessage = () => {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Header / Intro */}
            <section className="bg-brand-950 py-32 relative overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={foundermsg2}
                        alt="Corporate Background"
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
                        <span className="inline-block py-1 px-3 rounded-full bg-brand-800/50 border border-brand-700 text-brand-300 text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-md">
                            Leadership Perspective
                        </span>
                        <h1 className="text-4xl md:text-8xl font-extrabold text-white mb-8 tracking-tight leading-[1.1]">
                            A Culture of <br />
                            <span className="text-accent-500">Execution.</span>
                        </h1>
                    </motion.div>
                </div>
            </section>

            {/* Main Editorial Layout */}
            <section className="py-20 -mt-20 relative z-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-slate-100">
                        <div className="grid lg:grid-cols-12">

                            {/* Left Column: Image Area */}
                            <div className="lg:col-span-5 relative min-h-[500px] lg:min-h-full">
                                <img
                                    src={foundermsg1}
                                    alt="Founder Portrait"
                                    className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                                />
                                <div className="absolute inset-0 bg-brand-950/20"></div>
                                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-brand-950 via-brand-920/80 to-transparent p-12 text-white">
                                    <div className="h-1.5 w-16 bg-accent-500 mb-6 rounded-full"></div>
                                    <h3 className="text-4xl font-bold mb-2">Sundeep Singh</h3>
                                    <p className="text-slate-300 font-bold tracking-widest uppercase text-sm">Founder & CEO, CLink HR</p>
                                </div>
                            </div>

                            {/* Right Column: Text Content */}
                            <div className="lg:col-span-7 p-12 md:p-24 bg-white">
                                <div className="max-w-none text-slate-600">
                                    <div className="flex items-start gap-4 mb-10">
                                        <Quote className="w-16 h-16 text-accent-500/20 shrink-0 transform rotate-180" />
                                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 m-0 leading-tight">
                                            "In a world obsessed with strategy, we obsessed over <span className="text-brand-600">execution</span>."
                                        </h2>
                                    </div>

                                    <p className="text-xl text-slate-700 leading-relaxed font-light mb-8">
                                        At CLink HR, our journey began with a simple observation: businesses need speed, reliability, and accountability in hiring, but traditional models often struggle to deliver all three.
                                    </p>

                                    <p className="text-lg leading-relaxed font-light mb-10">
                                        As organizations grow, their workforce needs become more complex. I founded CLink HR to remove these barriers by offering a simpler, scalable, and outcome-focused HR delivery model.
                                    </p>

                                    <div className="bg-slate-50 p-10 rounded-[2rem] border border-slate-100 my-12 relative overflow-hidden">
                                        <div className="absolute top-0 right-0 p-8 opacity-5">
                                            <Target className="w-32 h-32 text-brand-950" />
                                        </div>
                                        <h4 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                            <ShieldCheck className="w-6 h-6 text-accent-500" /> Why We Exist
                                        </h4>
                                        <ul className="space-y-6">
                                            {[
                                                "Rigid teams cannot serve agile business needs.",
                                                "Growth requires flexible talent pipelines, not silos.",
                                                "Organizations deserve a single, accountable growth partner."
                                            ].map((item, i) => (
                                                <li key={i} className="flex items-start gap-4 text-slate-700">
                                                    <div className="w-1.5 h-1.5 bg-accent-500 rounded-full mt-2.5 shrink-0"></div>
                                                    <span className="font-medium text-lg">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="grid sm:grid-cols-2 gap-8 my-12">
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                                                <Zap className="w-5 h-5 text-accent-500" />
                                                Speed & Precision
                                            </h3>
                                            <p className="text-slate-600 font-light leading-relaxed">
                                                Execution should be fast, but accountability central. We don't just fill roles; we build teams.
                                            </p>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                                                <Users className="w-5 h-5 text-accent-500" />
                                                Long-term Vision
                                            </h3>
                                            <p className="text-slate-600 font-light leading-relaxed">
                                                We avoid transactional hiring. We are committed to delivering solutions that scale as you grow.
                                            </p>
                                        </div>
                                    </div>

                                    <hr className="my-12 border-slate-100" />

                                    <p className="font-serif italic text-slate-900 text-2xl leading-relaxed mb-0">
                                        "Our goal is simple—to ensure that organizations can focus on growth, while we handle the workforce engine with confidence."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Testimonials />
        </div>
    );
};

export default FounderMessage;
