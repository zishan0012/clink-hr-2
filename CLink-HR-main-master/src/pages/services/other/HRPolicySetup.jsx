import React from 'react';
import { motion } from 'framer-motion';
import Testimonials from '../../../components/Testimonials';
import hrPolicyHero from '../../../assets/services-img/HR Policy-hero.jpg';
import {
    BookOpen,
    FileText,
    ShieldCheck,
    Scale,
    Users,
    ArrowRight,
    CheckCircle,
    Zap,
    ClipboardList,
    FileCheck,
    ScrollText,
    Target
} from 'lucide-react';
import { Link } from 'react-router-dom';

const HRPolicySetup = () => {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="bg-brand-950 py-32 relative overflow-hidden">
                <div className="absolute inset-0">
                    <motion.img
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        src={hrPolicyHero}
                        alt="HR Policy Setup"
                        className="w-full h-full object-cover"
                        loading="eager"
                        fetchPriority="high"
                    />
                    <div className="absolute inset-0 bg-brand-950/50"></div>
                </div>

                <div className="max-w-7xl ml-0 mr-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-brand-800/50 border border-brand-700 text-brand-200 text-xs font-semibold tracking-widest uppercase mb-6 backdrop-blur-md">
                            Governance Framework
                        </span>
                        <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-8 tracking-tight leading-[1.1]">
                            HR Policy <br />
                            <span className="text-accent-500">Design & Setup.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-200 max-w-3xl font-light leading-relaxed">
                            CLink HR helps organizations build <span className="text-white font-medium">clear, compliant, and practical</span> HR policies that support smooth workforce management and reduce people-related risks.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Intro Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 tracking-tight leading-tight">
                                Build a Foundation of <br /><span className="text-brand-600">Clarity & Compliance</span>
                            </h2>
                            <p className="text-xl text-slate-600 mb-10 leading-relaxed font-light">
                                Strong HR policies form the foundation of a healthy workplace. They define expectations, standardize processes, and protect both the organization and its employees. We help businesses design policies that are <span className="text-accent-600 font-bold">easy to understand, legally aligned</span>, and practical to implement.
                            </p>
                            <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 shadow-sm italic text-slate-500 font-light">
                                "CLink HR designs HR policies that bring clarity, compliance, and consistency to workplace management."
                            </div>
                        </div>
                        <div className="bg-slate-950 p-12 rounded-[3.5rem] text-white shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-500 rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
                            <h3 className="text-2xl font-bold mb-10 text-accent-500 flex items-center gap-3">
                                <ShieldCheck className="w-6 h-6" />
                                Why HR Policies Are Important
                            </h3>
                            <div className="space-y-6">
                                {[
                                    "Establish consistent workplace practices",
                                    "Reduce employee disputes and ambiguity",
                                    "Support compliance with applicable laws",
                                    "Improve employee communication and trust",
                                    "Enable smoother HR operations"
                                ].map((text, i) => (
                                    <div key={i} className="flex gap-4 items-start group/item">
                                        <div className="w-6 h-6 rounded-full bg-brand-900 flex items-center justify-center shrink-0 mt-1 border border-brand-800 transition-colors group-hover/item:border-accent-500">
                                            <CheckCircle className="w-4 h-4 text-accent-500" />
                                        </div>
                                        <p className="text-slate-300 font-light">{text}</p>
                                    </div>
                                ))}
                            </div>
                            <p className="mt-12 text-slate-500 text-sm font-light leading-relaxed border-t border-white/5 pt-8">
                                Without clear policies, businesses often face confusion, inconsistency, and avoidable risks.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Approach */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">Our HR Policy Setup Approach</h2>
                        <p className="text-slate-600 mt-4 max-w-2xl mx-auto font-light">Focused on business relevance and compliance readiness.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: "Size & Structure", desc: "Understanding headcount, hierarchies & operational models." },
                            { title: "Industry Sync", desc: "Aligning policies with specific industry norms & workforce types." },
                            { title: "Practices Review", desc: "Evaluating existing HR practices to identify formalization gaps." },
                            { title: "Requirement Map", desc: "Designing for both business goals & workforce realities." }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm transition-all hover:shadow-xl group">
                                <div className="text-5xl font-black text-slate-50 mb-6 group-hover:text-accent-500/10 transition-colors">0{i + 1}</div>
                                <h4 className="font-bold text-slate-900 mb-4 leading-tight">{item.title}</h4>
                                <p className="text-slate-500 text-sm font-light leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Scope Grid */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-brand-600 font-bold uppercase tracking-widest text-sm mb-4 block">Scope of Services</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">Policy Design Frameworks</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            {
                                title: "Core HR Policies",
                                desc: "Employment and workplace conduct, attendance & leave frameworks, code of ethics, and performance guidelines.",
                                icon: ClipboardList,
                                accent: "border-blue-500/10 hover:border-blue-500"
                            },
                            {
                                title: "Employee Lifecycle",
                                desc: "Hiring and onboarding policies, confirmation and appraisal processes, transfer, promotion, and exit guidelines.",
                                icon: Users,
                                accent: "border-purple-500/10 hover:border-purple-500"
                            },
                            {
                                title: "Compliance & Governance",
                                desc: "Disciplinary procedures, anti-harassment (POSH), workplace safety, and data privacy alignment.",
                                icon: ShieldCheck,
                                accent: "border-orange-500/10 hover:border-orange-500"
                            },
                            {
                                title: "Handbook & Documentation",
                                desc: "Comprehensive employee handbook preparation and structure for policy-wide communication.",
                                icon: FileCheck,
                                accent: "border-brand-500/10 hover:border-brand-500"
                            }
                        ].map((item, i) => (
                            <div key={i} className={`p-12 bg-slate-50 rounded-[3.5rem] border-2 shadow-sm transition-all group ${item.accent}`}>
                                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-accent-500 mb-8 shadow-sm group-hover:scale-110 transition-transform">
                                    <item.icon className="w-8 h-8" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                                <p className="text-slate-600 leading-relaxed font-light">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Implementation & Who should use */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-20">
                        <div className="bg-slate-950 p-12 rounded-[4rem] text-white shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500 rounded-full blur-[100px] opacity-10"></div>
                            <h3 className="text-2xl font-extrabold mb-10 text-white flex items-center gap-4 italic uppercase tracking-tighter">
                                <Zap className="w-8 h-8 text-accent-500" />
                                Implementation Support
                            </h3>
                            <div className="space-y-6">
                                {[
                                    { t: "Policy Rollout", d: "Structured guidance on how to announce and activate policies." },
                                    { t: "Communication", d: "Employee sensitization and internal messaging support." },
                                    { t: "Clarification", d: "Q&A assistance to ensure stakeholders understand the 'why' and 'how'." },
                                    { t: "Evolution", d: "Ongoing support to update policies as your business expands." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-6 pb-6 border-b border-white/5 last:border-0">
                                        <div className="w-10 h-10 rounded-xl bg-brand-900 border border-brand-800 flex items-center justify-center text-accent-500 font-bold shrink-0">{i + 1}</div>
                                        <div>
                                            <h4 className="font-bold text-lg mb-1">{item.t}</h4>
                                            <p className="text-slate-400 text-sm font-light leading-relaxed">{item.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-10 tracking-tight">Who Should Use This?</h2>
                            <div className="space-y-4">
                                {[
                                    { t: "Fast-Growing Startups", d: "Setting up professional HR processes for the first time." },
                                    { t: "Formalizing Companies", d: "Transitioning from informal practices to structured operations." },
                                    { t: "Renewal & Audit", d: "Updating outdated policies for better compliance hygiene." },
                                    { t: "Pan-India Enterprises", d: "Standardizing policies across different state locations." }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-6 p-8 bg-white rounded-3xl border border-slate-100 shadow-sm transition-all hover:shadow-xl hover:border-accent-500">
                                        <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-accent-500 shrink-0 shadow-sm">
                                            <Target className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1">{item.t}</h4>
                                            <p className="text-slate-500 text-sm font-light">{item.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-32 bg-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl md:text-7xl font-extrabold text-slate-900 mb-8 tracking-tighter">Create a Strong <br /><span className="text-accent-500">HR Foundation.</span></h2>
                    <p className="text-xl text-slate-600 mb-12 leading-relaxed max-w-2xl mx-auto font-light">
                        Whether you are building HR policies from scratch or refining existing ones, CLink HR helps you create a framework that works.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link to="/contact" className="bg-brand-600 text-white px-12 py-5 rounded-full font-semibold hover:bg-brand-700 transition-all shadow-xl flex items-center justify-center gap-3 group">
                            Discuss HR Policies <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link to="/contact" className="bg-slate-100 text-slate-900 px-12 py-5 rounded-full font-semibold hover:bg-slate-200 transition-all shadow-sm">
                            Talk to Our Advisory Team
                        </Link>
                    </div>
                </div>
            </section>

            <Testimonials />
        </div>
    );
};

export default HRPolicySetup;
