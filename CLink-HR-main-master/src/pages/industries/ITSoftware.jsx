import React from "react";
import { motion } from "framer-motion";
import {
    Code,
    Users,
    Layers,
    ShieldCheck,
    CheckCircle,
    ArrowRight,
    Rocket,
    Building2,
    Laptop,
    Network,
    Cloud
} from "lucide-react";
import { Link } from "react-router-dom";

const ITSoftware = () => {
    return (
        <div className="min-h-screen bg-slate-50">

            {/* HERO */}
            <section className="relative bg-brand-950 py-32 overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1518770660439-4636190af475"
                        className="w-full h-full object-cover opacity-80"
                        alt=""
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-950 via-brand-950/90 to-brand-950/70" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl"
                    >
                        <span className="inline-block mb-6 px-4 py-1 rounded-full bg-brand-800/50 border border-brand-700 text-brand-200 text-xs font-bold tracking-widest uppercase">
                            Industries We Serve
                        </span>

                        <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-8 leading-tight">
                            IT & Software
                        </h1>

                        <p className="text-xl text-accent-400 mb-8">
                            HR Solutions Designed for the Technology Ecosystem
                        </p>

                        <p className="text-lg text-slate-200 leading-relaxed">
                            The IT & Software industry operates in a fast-paced, innovation-driven environment where speed,
                            flexibility, and compliance are critical.
                            <br /><br />
                            CLink HR provides end-to-end HR, hiring, payroll, and workforce solutions tailored for technology
                            companies across growth stages.
                            <br /><br />
                            From startups and SaaS companies to large IT services firms, we help organizations build,
                            manage, and scale their tech workforce efficiently.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* CHALLENGES – CARD GRID */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="mb-16 max-w-3xl">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                            Key HR Challenges in IT & Software
                        </h2>
                        <p className="text-xl text-slate-600">
                            Technology companies face evolving HR complexities such as:
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            "High-volume and niche skill hiring",
                            "Fast scaling and project-based workforce demands",
                            "Contractual and third-party manpower management",
                            "Multi-location and remote workforce compliance",
                            "Cost control without slowing delivery",
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -6 }}
                                className="bg-slate-50 p-8 rounded-2xl border shadow-sm"
                            >
                                <CheckCircle className="w-8 h-8 text-brand-600 mb-4" />
                                <p className="text-slate-700 font-medium">{item}</p>
                            </motion.div>
                        ))}
                    </div>

                    <p className="mt-12 text-lg text-slate-700 max-w-4xl">
                        CLink HR addresses these challenges through structured, scalable,
                        and cost-optimized HR models.
                    </p>
                </div>
            </section>

            {/* SOLUTIONS – STACKED MODULES */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-16">
                        Our Solutions for IT & Software Companies
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            {
                                title: "Technology Hiring Solutions",
                                icon: Code,
                                items: [
                                    "IT and software talent acquisition coordination",
                                    "Niche and specialized skill hiring",
                                    "Fast-closure hiring models for urgent roles",
                                ],
                            },
                            {
                                title: "Contract & Project Workforce Management",
                                icon: Layers,
                                items: [
                                    "Contract staffing coordination",
                                    "Project-based workforce scaling",
                                    "Third-party workforce governance",
                                ],
                            },
                            {
                                title: "End-to-End Payroll Solutions",
                                icon: Laptop,
                                items: [
                                    "Payroll coordination for tech teams",
                                    "Multi-location payroll support",
                                    "Compliance-aligned salary structures",
                                ],
                            },
                            {
                                title: "Compliance-Ready HR Support",
                                icon: ShieldCheck,
                                items: [
                                    "Labor law and statutory compliance coordination",
                                    "Documentation and audit readiness",
                                    "Vendor and partner compliance oversight",
                                ],
                            },
                            {
                                title: "Scalable & Cost-Optimized HR Models",
                                icon: Rocket,
                                items: [
                                    "HR frameworks aligned to company growth stages",
                                    "Lean HR operations without fixed overheads",
                                    "Flexible workforce and cost management",
                                ],
                            },
                        ].map((block, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.01 }}
                                className="bg-white p-10 rounded-3xl border shadow-md"
                            >
                                <div className="flex items-center gap-5 mb-6">
                                    <div className="w-14 h-14 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center">
                                        <block.icon className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900">{block.title}</h3>
                                </div>

                                <ul className="grid md:grid-cols-2 gap-4">
                                    {block.items.map((item, idx) => (
                                        <li key={idx} className="flex gap-3 text-slate-700">
                                            <CheckCircle className="w-5 h-5 text-accent-500 mt-1" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHO + WHY – SPLIT PREMIUM */}
            <section className="py-24 bg-slate-900 text-white">
                <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16">

                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-10">
                            Who We Work With
                        </h2>

                        <div className="grid sm:grid-cols-2 gap-4 mb-14">
                            {[
                                "IT Services & Consulting Firms",
                                "Software Development Companies",
                                "SaaS & Product-Based Organizations",
                                "Technology Startups & Scaleups",
                                "Remote & Distributed Teams",
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="bg-white/10 border border-white/10 px-5 py-4 rounded-xl"
                                >
                                    {item}
                                </div>
                            ))}
                        </div>

                        <h3 className="text-3xl font-bold mb-8">
                            Why IT & Software Companies Choose CLink HR
                        </h3>

                        <ul className="space-y-4 text-slate-300">
                            {[
                                "Deep understanding of tech hiring and workforce dynamics",
                                "Centralized HR coordination and governance",
                                "Pan-India operational coverage",
                                "Scalable delivery through structured partner ecosystems",
                            ].map((item, i) => (
                                <li key={i} className="flex gap-4">
                                    <CheckCircle className="w-6 h-6 text-accent-500 mt-1" />
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <p className="mt-10 text-slate-300">
                            We enable technology companies to focus on innovation and growth—while we manage HR
                            complexity behind the scenes.
                        </p>
                    </div>


                </div>
            </section>
            <section>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="bg-white text-slate-900 p-10 rounded-3xl shadow-2xl"
                >
                    <h3 className="text-2xl font-bold mb-6">
                        Power Your Tech Growth With the Right HR Partner
                    </h3>

                    <p className="text-slate-600 mb-8">
                        CLink HR helps IT & Software organizations build agile, compliant,
                        and future-ready HR operations.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            to="/contact/hire-talent"
                            className="bg-brand-600 text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2"
                        >
                            Explore IT & Software HR Solutions <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link
                            to="/contact"
                            className="border border-brand-600 text-brand-600 px-8 py-4 rounded-full font-bold"
                        >
                            Connect With Our Industry Experts
                        </Link>
                    </div>

                    <p className="mt-10 text-slate-600 italic border-l-4 border-accent-500 pl-4">
                        Technology moves fast—your HR should move faster.
                    </p>
                </motion.div>
            </section>
        </div>
    );
};

export default ITSoftware;
