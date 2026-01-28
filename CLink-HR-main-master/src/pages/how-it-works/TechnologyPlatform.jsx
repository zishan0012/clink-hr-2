import React from "react";
import { motion } from "framer-motion";
import {
    Layout,
    ShieldCheck,
    Cpu,
    Zap,
    BarChart3,
    Target,
    Settings,
    Globe,
    Lock,
    Users,
    ArrowRight,
    CheckCircle,
    FileText,
    TrendingUp,
    Briefcase,
    Search,
    Network
} from "lucide-react";
import { Link } from "react-router-dom";

const TechnologyPlatform = () => {
    return (
        <div className="min-h-screen bg-slate-50">

            {/* HERO */}
            <section className="relative bg-brand-950 py-32 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,#3b82f6_0%,transparent_50%)]" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl"
                    >
                        <span className="inline-block mb-6 px-4 py-1 rounded-full bg-brand-800/50 border border-brand-700 text-brand-200 text-xs font-bold tracking-widest uppercase backdrop-blur-md">
                            The Tech Backbone
                        </span>

                        <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight">
                            Technology <span className="text-accent-500">Platform (Zryoss)</span>
                        </h1>
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 opacity-90 leading-tight">
                            The Backbone of CLink HR’s Delivery Ecosystem
                        </h2>

                        <p className="text-xl md:text-2xl text-slate-200 mb-8 font-light max-w-4xl leading-relaxed">
                            Zryoss is the technology platform that powers CLink HR’s distributed delivery model. It connects clients, CLink HR, and IPP partners into a single, structured, and transparent ecosystem—ensuring speed, control, and scalability.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                to="/contact"
                                className="bg-brand-600 text-white px-8 py-4 rounded-full font-bold hover:bg-brand-500 transition-all shadow-lg flex items-center justify-center gap-2 text-lg"
                            >
                                Experience the Platform <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* WHY ZRYOSS MATTERS – GRID */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                            Why <span className="text-brand-600">Zryoss Matters</span>
                        </h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                            In a multi-partner delivery environment, technology is critical to maintain visibility and ensure excellence.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: "Requirement Visibility", desc: "Maintain absolute clarity across all open requirements and statuses.", icon: Search },
                            { title: "SLA Adherence", desc: "Automated tracking to ensure every commitment is met on time.", icon: Target },
                            { title: "Transparent Payouts", desc: "Objective, centralized tracking of performance and settlements.", icon: BarChart3 },
                            { title: "Scalable Operations", desc: "Enable growth without increasing administrative complexity.", icon: TrendingUp },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -10 }}
                                className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 shadow-sm transition-all text-center"
                            >
                                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-brand-600 mb-8 shadow-sm mx-auto">
                                    <item.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                                <p className="text-slate-600 leading-relaxed font-medium">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHAT ZRYOSS ENABLES – FEATURE GRID */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                            What Zryoss <span className="text-brand-600">Enables</span>
                        </h2>
                        <p className="text-xl text-slate-600">Powering every touchpoint in the delivery lifecycle.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Centralized Requirement Management",
                                points: [
                                    "Structured job and service intake",
                                    "Requirement allocation to relevant IPPs",
                                    "Real-time tracking of progress and status"
                                ],
                                icon: Layout
                            },
                            {
                                title: "Partner (IPP) Enablement",
                                points: [
                                    "Dedicated IPP dashboard",
                                    "Requirement access and submission workflows",
                                    "Performance visibility and reporting"
                                ],
                                icon: Network
                            },
                            {
                                title: "Client Coordination Layer",
                                points: [
                                    "Single point of coordination through CLink HR",
                                    "Centralized communication tracking",
                                    "Status updates and reporting"
                                ],
                                icon: Settings
                            },
                            {
                                title: "Quality & SLA Tracking",
                                points: [
                                    "SLA timelines and milestone monitoring",
                                    "Delivery performance tracking",
                                    "Escalation triggers and alerts"
                                ],
                                icon: ShieldCheck
                            },
                            {
                                title: "Payout & Settlement Management",
                                points: [
                                    "Transparent closure validation",
                                    "Centralized payout tracking",
                                    "Structured settlement workflows"
                                ],
                                icon: BarChart3
                            }
                        ].map((box, i) => (
                            <div key={i} className="bg-white p-10 rounded-[3rem] border border-slate-100 flex flex-col items-start hover:shadow-lg transition-shadow">
                                <div className="w-14 h-14 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-600 mb-8">
                                    <box.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-6">{box.title}</h3>
                                <ul className="space-y-4">
                                    {box.points.map((point, idx) => (
                                        <li key={idx} className="flex gap-4 items-start text-slate-600">
                                            <div className="w-1.5 h-1.5 rounded-full bg-accent-500 mt-2.5 shrink-0" />
                                            <span className="text-lg leading-snug">{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* BRAND & BUSINESS ENABLEMENT FOR IPPS */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-brand-950 rounded-[3.5rem] p-12 md:p-20 text-white relative overflow-hidden">
                        <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">Brand & Business <br /><span className="text-accent-400">Enablement for IPPs</span></h2>
                                <p className="text-xl text-slate-300 mb-10 leading-relaxed font-light">
                                    Zryoss isn’t just a tool; it’s a platform for your growth. We provide the infrastructure for you to build your independent brand.
                                </p>
                                <div className="space-y-6">
                                    {[
                                        "Operate under your own unique brand identity",
                                        "Website and digital presence enablement",
                                        "Social media and professional branding guidance",
                                        "Backdoor support for business scaling"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-4">
                                            <div className="w-6 h-6 rounded-full bg-accent-500/20 flex items-center justify-center">
                                                <div className="w-2 h-2 rounded-full bg-accent-400" />
                                            </div>
                                            <span className="text-lg font-medium text-slate-100">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="relative">
                                <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-10 text-center">
                                    <TrendingUp className="w-16 h-16 text-accent-400 mb-8 mx-auto" />
                                    <h3 className="text-2xl font-bold text-white mb-4 italic">Independent Growth. <br /> Powered Platform.</h3>
                                    <p className="text-slate-400 text-lg leading-relaxed font-light">
                                        Grow your recruitment brand independently, while Zryoss handles the complex backend infrastructure.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FOUNDATIONAL ENABLEMENT & SCALABILITY */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Operational Support */}
                        <div className="bg-white p-12 rounded-[3rem] border border-slate-100 shadow-sm flex flex-col">
                            <Briefcase className="w-12 h-12 text-brand-600 mb-8" />
                            <h3 className="text-3xl font-bold text-slate-900 mb-6">Operational Support & Enablement</h3>
                            <p className="text-lg text-slate-600 mb-8 font-medium">Infrastructure and resources to power delivery excellence.</p>
                            <ul className="space-y-4 flex-grow">
                                {[
                                    "Process workflows and SOPs",
                                    "Training resources and guidance",
                                    "Job and requirement clarification",
                                    "Backend support and documentation"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-4 text-slate-700">
                                        <CheckCircle className="w-5 h-5 text-brand-600 shrink-0" />
                                        <span className="font-bold">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Security */}
                        <div className="bg-white p-12 rounded-[3rem] border border-slate-100 shadow-sm flex flex-col">
                            <Lock className="w-12 h-12 text-brand-600 mb-8" />
                            <h3 className="text-3xl font-bold text-slate-900 mb-6">Security & Governance</h3>
                            <p className="text-lg text-slate-600 mb-8 font-medium">Enterprise-grade data security and role-based access.</p>
                            <ul className="space-y-4 flex-grow">
                                {[
                                    "Role-based access controls",
                                    "Secure data handling protocols",
                                    "Controlled information sharing",
                                    "Compliance-aligned governance"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-4 text-slate-700">
                                        <CheckCircle className="w-5 h-5 text-brand-600 shrink-0" />
                                        <span className="font-bold">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Scalability */}
                        <div className="bg-white p-12 rounded-[3rem] border border-slate-100 shadow-sm flex flex-col">
                            <Zap className="w-12 h-12 text-accent-500 mb-8" />
                            <h3 className="text-3xl font-bold text-slate-900 mb-6">Scalable by Design</h3>
                            <p className="text-lg text-slate-600 mb-8 font-medium">The platform grows without adding complexity.</p>
                            <ul className="space-y-4 flex-grow">
                                {[
                                    "Single-role to pan-India bulk hiring",
                                    "Cross-industry adaptability",
                                    "Native multi-location support",
                                    "Zero-friction scaling for startups"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-4 text-slate-700">
                                        <CheckCircle className="w-5 h-5 text-accent-500 shrink-0" />
                                        <span className="font-bold">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* STAKEHOLDER VALUE SPLIT */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Clients */}
                        <div className="bg-brand-950 text-white p-12 rounded-[3.5rem] shadow-2xl">
                            <h3 className="text-3xl font-bold mb-10 text-accent-400">What This Means for Clients</h3>
                            <div className="space-y-6">
                                {[
                                    "Faster delivery with better visibility",
                                    "Central governance with distributed execution",
                                    "Predictable outcomes and reporting",
                                    "Reduced dependency on large internal teams"
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 items-start">
                                        <CheckCircle className="w-6 h-6 text-accent-500 shrink-0 mt-1" />
                                        <span className="text-xl font-light text-slate-200">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Partners */}
                        <div className="bg-slate-50 p-12 rounded-[3.5rem] border border-slate-200 flex flex-col">
                            <h3 className="text-3xl font-bold mb-10 text-brand-700">What This Means for IPP Partners</h3>
                            <div className="space-y-6 flex-grow">
                                {[
                                    "No need to build backend systems",
                                    "Access to live, validated requirements",
                                    "Transparent performance and payouts",
                                    "Professional support to grow your brand"
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 items-start">
                                        <CheckCircle className="w-6 h-6 text-brand-600 shrink-0 mt-1" />
                                        <span className="text-xl font-bold text-slate-800">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FINAL STATEMENT & CTA */}
            <section className="py-24 bg-brand-900 text-white text-center relative overflow-hidden">
                <div className="max-w-5xl mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="space-y-8"
                    >
                        <Cpu className="w-20 h-20 text-accent-400 mx-auto" />
                        <h2 className="text-4xl md:text-6xl font-extrabold italic tracking-tight uppercase">
                            Technology that connects people, <br />
                            <span className="text-accent-400">processes, and performance</span> <br />
                            — at scale.
                        </h2>
                        <div className="pt-8">
                            <Link
                                to="/contact"
                                className="bg-accent-500 text-brand-950 px-12 py-5 rounded-full font-bold hover:bg-accent-400 transition-all shadow-2xl inline-flex items-center gap-3 text-lg"
                            >
                                Learn more about Zryoss <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default TechnologyPlatform;
