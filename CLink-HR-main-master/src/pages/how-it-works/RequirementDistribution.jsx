import React from "react";
import { motion } from "framer-motion";
import Testimonials from "../../components/Testimonials";
import requirementDistributionHero from '../../assets/how-it-works-img/requirement-distribution-hero.jpg';
import {
    Share2,
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
    Network,
    Layers,
    ClipboardCheck,
    Clock,
    UserCheck,
    AlertCircle,
    ArrowUpRight
} from "lucide-react";
import { Link } from "react-router-dom";

const RequirementDistribution = () => {
    return (
        <div className="min-h-screen bg-slate-50">

            {/* HERO */}
            <section className="relative bg-brand-950 py-32 overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={requirementDistributionHero}
                        alt="Requirement Distribution"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-brand-950/50"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="max-w-4xl"
                    >
                        <span className="inline-block mb-6 px-4 py-1 rounded-full bg-brand-800/50 border border-brand-700 text-brand-200 text-xs font-bold tracking-widest uppercase backdrop-blur-md">
                            Delivery Engine
                        </span>

                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
                            Requirement <br /><span className="text-accent-500">Distribution System</span>
                        </h1>
                        <h2 className="text-xl md:text-2xl font-bold text-white mb-8 opacity-90 leading-tight">
                            Smart, Structured & Scalable Delivery Engine
                        </h2>

                        <p className="text-xl md:text-2xl text-slate-200 mb-8 font-light max-w-4xl leading-relaxed">
                            Ensuring every hiring requirement reaches the right execution partner at the right time through a structured, dependency-free delivery engine.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                to="/contact"
                                className="bg-brand-600 text-white px-8 py-4 rounded-full font-bold hover:bg-brand-500 transition-all shadow-lg flex items-center justify-center gap-2 text-lg"
                            >
                                Optimize Your Hiring <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* HOW REQUIREMENTS ENTER – SOURCE GRID */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                            How Requirements <span className="text-brand-600">Enter the System</span>
                        </h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                            Requirements are consolidated from various channels into a single, high-performance distribution pipeline.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Direct Client Onboarding", desc: "Mandates directly received from our primary client partnerships.", icon: UserCheck },
                            { title: "Channel Partners & Vendors", desc: "Requirements flowing from our extended network and vendor ecosystem.", icon: Network },
                            { title: "Enterprise Accounts", desc: "Large-scale mandates managed centrally by CLink HR expert teams.", icon: Briefcase },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -10 }}
                                className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 shadow-sm transition-all"
                            >
                                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-brand-600 mb-8 shadow-sm">
                                    <item.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                                <p className="text-slate-600 text-lg leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-16 p-8 bg-brand-50 rounded-[2.5rem] border border-brand-100 text-center">
                        <p className="text-xl text-brand-900 font-bold">
                            <span className="text-accent-600">Important:</span> All requirements are validated, structured, and standardized before distribution for maximum clarity.
                        </p>
                    </div>
                </div>
            </section>

            {/* STRUCTURING & VALIDATION */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                                Requirement Structuring <br />& <span className="text-brand-600">Validation</span>
                            </h2>
                            <p className="text-xl text-slate-600 mb-10 leading-relaxed font-light">
                                We eliminate ambiguity. This ensures IPPs receive execution-ready requirements, not raw or unclear inputs.
                            </p>
                            <div className="grid gap-6">
                                {[
                                    { title: "Clear JDs & Scope", desc: "Detailed breakdown of skills, responsibilities, and outcomes." },
                                    { title: "Defined SLA Expectations", desc: "Standardized timelines for sourcing and submissions." },
                                    { title: "Compliance Parameters", desc: "Location, budget, and specific statutory requirements." },
                                    { title: "Priority Levels", desc: "Clear indicators of role criticality and delivery timelines." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-6 p-6 bg-white rounded-3xl border border-slate-100 shadow-sm">
                                        <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center text-brand-600 shrink-0">
                                            <ClipboardCheck className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-slate-900 mb-1">{item.title}</h4>
                                            <p className="text-slate-600">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-brand-950 rounded-[3.5rem] p-12 text-white relative h-full flex flex-col justify-center">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-[5rem]" />
                            <Layers className="w-20 h-20 text-accent-400 mb-10" />
                            <h3 className="text-3xl font-bold mb-6">Execution-Ready Mandates</h3>
                            <p className="text-xl text-slate-300 font-light leading-relaxed mb-8">
                                By standardizing every requirement, we reduce the 'time-to-understanding' for our partners, leading to faster closures.
                            </p>
                            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                                <p className="text-accent-400 font-bold italic text-lg leading-relaxed">
                                    "We don't just share jobs; we share structured opportunities for success."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* INTELLIGENT DISTRIBUTION */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                            Intelligent <span className="text-brand-600">Distribution Model</span>
                        </h2>
                        <p className="text-xl text-slate-600">A best-fit allocation model, not random sharing.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "IPP Specialization", desc: "Mapped to industry expertise and niche focus areas.", icon: Target },
                            { title: "Performance History", desc: "Based on past closure success and conversion rates.", icon: BarChart3 },
                            { title: "Capacity & Load", desc: "Real-time assessment of partner availability to manage load.", icon: Clock },
                            { title: "Geography & Role", desc: "Localized knowledge for region-specific mandates.", icon: Globe }
                        ].map((item, i) => (
                            <div key={i} className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100 group hover:bg-brand-600 transition-all duration-300">
                                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-brand-600 mb-8 shadow-sm group-hover:bg-brand-500 group-hover:text-white transition-colors">
                                    <item.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-white">{item.title}</h3>
                                <p className="text-slate-600 group-hover:text-slate-100 transition-colors leading-relaxed font-medium">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PARALLEL EXECUTION */}
            <section className="py-24 bg-brand-950 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,#3b82f6_0%,transparent_40%)]" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-bold mb-8">Parallel Execution <br /><span className="text-accent-400">Advantage</span></h2>
                            <div className="space-y-8">
                                {[
                                    { title: "Distributed Sourcing", desc: "Multiple qualified IPPs work on the same mandate simultaneously." },
                                    { title: "Increased Speed", desc: "Parallel efforts significantly shorten the time-to-hire." },
                                    { title: "Higher Probability", desc: "Broad reach increases the chance of finding the 'perfect-fit' profile fast." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-6">
                                        <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-accent-500 shrink-0">
                                            <Zap className="w-7 h-7" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                                            <p className="text-slate-300 leading-relaxed font-light">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="bg-white p-12 rounded-[4rem] text-slate-900 shadow-2xl">
                                <Share2 className="w-16 h-16 text-brand-600 mb-8" />
                                <h3 className="text-3xl font-extrabold mb-6 leading-tight">Strength of a <br />Distributed Engine</h3>
                                <p className="text-xl text-slate-600 mb-8 font-light">
                                    Clients experience the power of a large-scale hiring machine without managing multiple vendor relationships.
                                </p>
                                <div className="border-t border-slate-100 pt-8">
                                    <div className="flex items-center gap-4 text-brand-700 font-bold">
                                        <div className="w-2 h-2 rounded-full bg-accent-500" />
                                        <span>Unified Delivery. Distributed Sourcing.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* VISIBILITY & CONTROL MODULES */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Visibility */}
                        <div className="bg-slate-50 p-12 rounded-[3.5rem] border border-slate-100 group transition-all">
                            <Search className="w-12 h-12 text-brand-600 mb-8" />
                            <h3 className="text-2xl font-bold mb-6">Real-Time Visibility</h3>
                            <ul className="space-y-4 text-slate-600 font-medium">
                                <li className="flex gap-3">
                                    <CheckCircle className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                                    <span>Centrally tracked status</span>
                                </li>
                                <li className="flex gap-3">
                                    <CheckCircle className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                                    <span>IPP activity monitoring</span>
                                </li>
                                <li className="flex gap-3">
                                    <CheckCircle className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                                    <span>Live progress updates</span>
                                </li>
                            </ul>
                        </div>

                        {/* Quality Control */}
                        <div className="bg-slate-50 p-12 rounded-[3.5rem] border border-slate-100 group transition-all">
                            <ShieldCheck className="w-12 h-12 text-brand-600 mb-8" />
                            <h3 className="text-2xl font-bold mb-6">Submission Quality</h3>
                            <ul className="space-y-4 text-slate-600 font-medium">
                                <li className="flex gap-3">
                                    <CheckCircle className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                                    <span>Centralized quality validation</span>
                                </li>
                                <li className="flex gap-3">
                                    <CheckCircle className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                                    <span>JD & skill alignment vetting</span>
                                </li>
                                <li className="flex gap-3">
                                    <CheckCircle className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                                    <span>Client compliance checks</span>
                                </li>
                            </ul>
                        </div>

                        {/* SLA & Escalation */}
                        <div className="bg-slate-50 p-12 rounded-[3.5rem] border border-slate-100 group transition-all">
                            <AlertCircle className="w-12 h-12 text-brand-600 mb-8" />
                            <h3 className="text-2xl font-bold mb-6">SLA & Escalation</h3>
                            <ul className="space-y-4 text-slate-600 font-medium">
                                <li className="flex gap-3">
                                    <CheckCircle className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                                    <span>Automatic timeline tracking</span>
                                </li>
                                <li className="flex gap-3">
                                    <CheckCircle className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                                    <span>Trigger-based escalations</span>
                                </li>
                                <li className="flex gap-3">
                                    <CheckCircle className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                                    <span>Fast requirement redistribution</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* CLOSURE WORKFLOW */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 font-display italic">Closure & Validation <span className="text-brand-600">Workflow</span></h2>
                    </div>
                    <div className="bg-white p-12 rounded-[4rem] border border-slate-200 shadow-sm relative overflow-hidden">
                        <div className="grid md:grid-cols-3 gap-12 relative z-10">
                            {[
                                { title: "Central Validation", desc: "Every closure is cross-verified for documentation and intent." },
                                { title: "Approval Alignment", desc: "Coordinating multi-stakeholder approvals for final closure." },
                                { title: "Payout Trigger", desc: "Automated triggering of performance-based payouts to IPPs." }
                            ].map((step, i) => (
                                <div key={i} className="text-center">
                                    <div className="w-12 h-12 bg-brand-600 text-white rounded-xl flex items-center justify-center mx-auto mb-6 font-bold text-xl shadow-lg">0{i + 1}</div>
                                    <h4 className="text-xl font-bold mb-3">{step.title}</h4>
                                    <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* STAKEHOLDER BENEFIT SPLIT */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Clients */}
                        <div className="bg-brand-950 text-white p-12 rounded-[3.5rem] shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-500/5 rounded-bl-full -mr-16 -mt-16 transition-all group-hover:bg-accent-500/10" />
                            <h3 className="text-3xl font-bold mb-10 text-accent-400 relative z-10">What Clients Benefit From</h3>
                            <div className="space-y-6 relative z-10">
                                {[
                                    "Faster turnaround times (TAT)",
                                    "Access to a wider, niche-focused talent pool",
                                    "Reduced dependency on internal HR teams",
                                    "Single-point coordination via CLink HR Dashboard"
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 items-start">
                                        <ArrowUpRight className="w-6 h-6 text-accent-500 shrink-0 mt-1" />
                                        <span className="text-xl font-light text-slate-200">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Partners */}
                        <div className="bg-slate-50 border border-slate-200 p-12 rounded-[3.5rem] shadow-sm relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-600/5 rounded-bl-full -mr-16 -mt-16 transition-all group-hover:bg-brand-600/10" />
                            <h3 className="text-3xl font-bold mb-10 text-brand-700 relative z-10">What IPP Partners Benefit From</h3>
                            <div className="space-y-6 relative z-10">
                                {[
                                    "Continuous access to live mandates",
                                    "Fair and performance-based opportunities",
                                    "No need for client acquisition efforts",
                                    "Backend support and process transparency"
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 items-start text-slate-800">
                                        <TrendingUp className="w-6 h-6 text-brand-600 shrink-0 mt-1" />
                                        <span className="text-xl font-bold italic">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* BUILT FOR SCALE */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-12">Built for <span className="text-brand-600 font-display">Scale</span></h2>
                    <div className="flex flex-wrap justify-center gap-8">
                        {["Bulk & Volume Hiring", "Multi-Location Requirements", "Startup to Enterprise level mandates"].map((label, i) => (
                            <div key={i} className="px-10 py-6 bg-white border border-slate-200 rounded-full shadow-sm text-xl font-bold text-brand-800 hover:border-brand-300 transition-colors">
                                {label}
                            </div>
                        ))}
                    </div>
                    <p className="text-2xl text-slate-600 mt-12 font-light italic">All managed without increasing your operational overhead.</p>
                </div>
            </section>

            {/* FINAL STATEMENT & CTA */}
            <section className="py-32 bg-brand-900 text-white text-center relative overflow-hidden">
                <div className="max-w-5xl mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="space-y-10"
                    >
                        <Network className="w-24 h-24 text-accent-400 mx-auto" />
                        <h2 className="text-4xl md:text-4xl font-black italic tracking-tighter uppercase leading-none">
                            Right requirement. <br />
                            Right partner. <br />
                            <span className="text-accent-400 underline decoration-accent-500/30">Right speed.</span>
                        </h2>
                        <div className="pt-10">
                            <Link
                                to="/contact"
                                className="bg-accent-500 text-brand-950 px-16 py-6 rounded-full font-black hover:bg-accent-400 transition-all shadow-2xl inline-flex items-center gap-4 text-xl uppercase tracking-widest"
                            >
                                Experience the system <ArrowRight className="w-6 h-6" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Testimonials />
        </div>
    );
};

export default RequirementDistribution;
