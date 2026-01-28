import React from "react";
import { motion } from "framer-motion";
import {
    ShieldCheck,
    Zap,
    Users,
    Network,
    Target,
    ClipboardCheck,
    Search,
    Settings,
    BarChart3,
    CheckCircle,
    ArrowRight,
    Briefcase,
    Building2,
    Laptop,
    Workflow,
    Layers,
    Scaling
} from "lucide-react";
import { Link } from "react-router-dom";

const OurDeliveryModel = () => {
    return (
        <div className="min-h-screen bg-slate-50">

            {/* HERO */}
            <section className="relative bg-brand-950 py-32 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#3b82f6_0%,transparent_50%)]" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl"
                    >
                        <span className="inline-block mb-6 px-4 py-1 rounded-full bg-brand-800/50 border border-brand-700 text-brand-200 text-xs font-bold tracking-widest uppercase backdrop-blur-md">
                            How It Works
                        </span>

                        <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight">
                            Our <span className="text-accent-500">Delivery Model</span>
                        </h1>
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 opacity-90">
                            A Centralized, Scalable HR Delivery Framework
                        </h2>

                        <p className="text-xl md:text-2xl text-slate-200 mb-8 font-light max-w-4xl leading-relaxed">
                            CLink HR operates on a centralized HR coordination model designed to deliver speed, scale, and consistency—without building large in-house execution teams.
                            We work with organizations and route execution through independent IPP partners operating within the Zryoss ecosystem, allowing faster closures, broader reach, and controlled delivery.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                to="/contact/partner-inquiry"
                                className="bg-brand-600 text-white px-8 py-4 rounded-full font-bold hover:bg-brand-500 transition-all shadow-lg flex items-center justify-center gap-2"
                            >
                                Inquire About Delivery Model <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CORE PHILOSOPHY – HORIZONTAL CARDS */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-16 text-center">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                            Our Core <span className="text-brand-600">Delivery Philosophy</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { title: "Centralized Coordination", desc: "CLink HR focuses on client onboarding, governance, and seamless payouts.", icon: Target },
                            { title: "Distributed Execution", desc: "Execution is carried out by authorized IPP partners at the ground level.", icon: Network },
                            { title: "Scalable Capability", desc: "Clients experience a large, distributed HR execution capability without overhead.", icon: Scaling },
                            { title: "Independent Identity", desc: "IPP partners operate under their own independent brand identity within our ecosystem.", icon: Building2 },
                            { title: "Performance Driven", desc: "Delivery is structured, transparent, and driven by strict SLA performance.", icon: BarChart3 },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -5 }}
                                className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm transition-all text-center lg:text-left h-full"
                            >
                                <div className="w-14 h-14 bg-brand-600 text-white rounded-2xl flex items-center justify-center mb-6 mx-auto lg:mx-0 shadow-lg">
                                    <item.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                                <p className="text-slate-600 leading-relaxed font-medium">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* STEP-BY-STEP – VERTICAL TIMELINE */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                            Step-by-Step <span className="text-brand-600">Delivery Model</span>
                        </h2>
                    </div>

                    <div className="relative">
                        {/* Connecting Line */}
                        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-brand-200 hidden md:block" />

                        <div className="space-y-12">
                            {[
                                {
                                    step: "01",
                                    title: "Client Requirement Intake",
                                    icon: ClipboardCheck,
                                    items: [
                                        "CLink HR receives hiring, payroll, or HR service requirements",
                                        "Requirements are validated, structured, and documented",
                                        "Service scope, timelines, and expectations are clearly defined",
                                    ],
                                },
                                {
                                    step: "02",
                                    title: "Partner Mapping & Allocation",
                                    icon: Search,
                                    items: [
                                        "Requirements are mapped to suitable IPP partners",
                                        "Skill specialization & industry experience matching",
                                        "Selection based on location and real-time bandwidth",
                                    ],
                                },
                                {
                                    step: "03",
                                    title: "Execution by IPP Partners",
                                    icon: Zap,
                                    items: [
                                        "IPP partners execute under their own independent brand",
                                        "Recruitment, payroll or HR execution happens at ground level",
                                        "Monitoring through centralized Zryoss ecosystem systems",
                                    ],
                                },
                                {
                                    step: "04",
                                    title: "Centralized Coordination",
                                    icon: Settings,
                                    items: [
                                        "CLink HR acts as the single point of coordination",
                                        "Continuous tracking of delivery milestones",
                                        "SLA monitoring and performance reporting",
                                    ],
                                },
                                {
                                    step: "05",
                                    title: "Closure, Reporting & Payouts",
                                    icon: CheckCircle,
                                    items: [
                                        "Successful closures are validated by CLink HR",
                                        "Centralized reporting is generated for the client",
                                        "Payouts managed transparently through the ecosystem",
                                    ],
                                },
                            ].map((step, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="relative flex flex-col md:flex-row gap-8 items-start"
                                >
                                    <div className="z-10 w-16 h-16 rounded-full bg-white border-4 border-brand-50 shadow-xl flex items-center justify-center text-brand-600 shrink-0 font-bold text-xl">
                                        <step.icon className="w-8 h-8" />
                                    </div>
                                    <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 flex-grow hover:shadow-md transition-shadow">
                                        <span className="text-brand-600 font-bold text-sm tracking-widest uppercase mb-2 block">Step {step.step}</span>
                                        <h3 className="text-2xl font-bold text-slate-900 mb-6">{step.title}</h3>
                                        <ul className="space-y-4">
                                            {step.items.map((item, idx) => (
                                                <li key={idx} className="flex gap-4 text-slate-600 items-start">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-accent-500 mt-2.5 shrink-0" />
                                                    <span className="text-lg leading-snug">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* WHY IT WORKS – SPLIT COMPARISON */}
            <section className="py-24 bg-white overflow-hidden relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                            Why This <span className="text-brand-600">Delivery Model Works</span>
                        </h2>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* For Clients */}
                        <motion.div
                            whileHover={{ scale: 1.01 }}
                            className="bg-brand-900 text-white p-12 rounded-[3rem] shadow-xl relative group"
                        >
                            <div className="absolute top-8 right-8 text-white/10 group-hover:scale-110 transition-transform">
                                <Users className="w-24 h-24" />
                            </div>
                            <h3 className="text-3xl font-bold mb-8 flex items-center gap-4">
                                For Clients <ArrowRight className="text-accent-400" />
                            </h3>
                            <ul className="space-y-6">
                                {[
                                    "Access to a large, decentralized execution network",
                                    "Faster closures and reduced turnaround time",
                                    "Single point of contact with centralized governance",
                                    "Consistent delivery quality across multiple locations",
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-4 items-start">
                                        <CheckCircle className="w-6 h-6 text-accent-400 shrink-0 mt-1" />
                                        <span className="text-xl text-brand-50 font-light">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* For IPP Partners */}
                        <motion.div
                            whileHover={{ scale: 1.01 }}
                            className="bg-slate-900 text-white p-12 rounded-[3rem] shadow-xl relative group"
                        >
                            <div className="absolute top-8 right-8 text-white/10 group-hover:scale-110 transition-transform">
                                <Network className="w-24 h-24" />
                            </div>
                            <h3 className="text-3xl font-bold mb-8 flex items-center gap-4 text-accent-400">
                                For Partners <ArrowRight className="text-white" />
                            </h3>
                            <ul className="space-y-6">
                                {[
                                    "Operate under your own independent brand identity",
                                    "No need to build complex backend HR systems",
                                    "Central support for coordination and training",
                                    "Focus purely on execution and performance",
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-4 items-start">
                                        <CheckCircle className="w-6 h-6 text-accent-500 shrink-0 mt-1" />
                                        <span className="text-xl text-slate-200 font-light">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* TECHNOLOGY & SCALABILITY – MESH GRID */}
            <section className="py-24 bg-slate-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-accent-500 font-bold tracking-widest uppercase text-sm mb-4 block">Tech-Powered Execution</span>
                            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">Technology-Enabled <br /> Delivery Framework</h2>
                            <p className="text-xl text-slate-400 font-light mb-12 leading-relaxed">
                                Our delivery model is powered by a centralized infrastructure that ensures visibility, control, and transparency across every engagement.
                            </p>
                            <div className="grid grid-cols-2 gap-6">
                                {[
                                    { label: "Central Dashboards", icon: BarChart3 },
                                    { label: "Structured Workflows", icon: Workflow },
                                    { label: "Real-time Reporting", icon: Laptop },
                                    { label: "Secure Compliance", icon: ShieldCheck }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-2xl">
                                        <div className="w-10 h-10 bg-accent-500/20 text-accent-500 rounded-lg flex items-center justify-center">
                                            <item.icon className="w-5 h-5" />
                                        </div>
                                        <span className="font-bold text-sm tracking-wide">{item.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white/5 border border-white/10 p-12 rounded-[3.5rem] relative overflow-hidden backdrop-blur-sm">
                            <h3 className="text-2xl font-bold mb-10 text-accent-400">Scalable by Design</h3>
                            <div className="space-y-6">
                                {[
                                    "Single Role Placements",
                                    "High-Volume Hiring Projects",
                                    "Multi-Location Payroll Operations",
                                    "Scale-on-Demand Workforce Management",
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-6 group">
                                        <div className="h-0.5 w-8 bg-accent-500 group-hover:w-12 transition-all" />
                                        <span className="text-xl font-light text-slate-100">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-12 p-8 bg-brand-600 rounded-3xl">
                                <p className="text-lg font-medium text-white text-center italic">
                                    "Our model scales without operational bottlenecks, regardless of complexity or location."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* DIFFERENTIATION – TEXTURED BOX */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-slate-50 border border-slate-100 rounded-[3rem] p-12 md:p-20">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                                What Makes <span className="text-brand-600">CLink HR Different</span>
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                            {[
                                { title: "No Dependencies", desc: "No dependency on large, slow internal teams for execution." },
                                { title: "Distributed Reach", desc: "Execution through specialized partners with domain expertise." },
                                { title: "Central Governance", desc: "Rigid centralized control with decentralized on-ground delivery." },
                                { title: "Lower Overhead", desc: "Faster execution with significantly lower operational overhead." },
                            ].map((item, i) => (
                                <div key={i} className="text-center">
                                    <div className="text-brand-600 font-black text-5xl mb-6 opacity-20 italic">0{i + 1}</div>
                                    <h4 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h4>
                                    <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* FINAL CTA & KEY STATEMENT */}
            <section className="py-24 bg-brand-900 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="mb-16"
                    >
                        <h2 className="text-3xl md:text-6xl font-extrabold text-white mb-8 tracking-tight leading-tight">
                            Centralized Coordination. <br />
                            <span className="text-accent-400">Distributed Execution.</span> <br />
                            Scalable Results.
                        </h2>
                    </motion.div>

                    <p className="text-xl md:text-2xl text-brand-200 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
                        Ready to experience a next-generation HR delivery model designed for modern organizational growth?
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link
                            to="/contact/partner-inquiry"
                            className="bg-accent-500 text-brand-900 px-12 py-5 rounded-full font-bold hover:bg-accent-400 transition-all shadow-2xl"
                        >
                            Explore Our Ecosystem
                        </Link>
                        <Link
                            to="/contact"
                            className="bg-transparent border-2 border-white/30 text-white px-12 py-5 rounded-full font-bold hover:bg-white/10 hover:border-white transition-all backdrop-blur-sm"
                        >
                            Talk to Our Experts
                        </Link>
                    </div>
                </div>

                {/* Decorative background elements */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500 rounded-full blur-3xl opacity-10 -mr-48 -mt-48" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-600 rounded-full blur-3xl opacity-20 -ml-48 -mb-48" />
            </section>
        </div>
    );
};

export default OurDeliveryModel;
