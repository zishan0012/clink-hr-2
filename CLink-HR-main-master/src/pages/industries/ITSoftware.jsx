import React from "react";
import { motion } from "framer-motion";
import Testimonials from "../../components/Testimonials";
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
    Cloud,
    Cpu,
    Briefcase,
    Zap,
    Globe,
    Settings
} from "lucide-react";
import { Link } from "react-router-dom";
import itSoftwareHero from "../../assets/industries-img/IT & Software-hero.jpg";


const ITSoftware = () => {
    return (
        <div className="min-h-screen bg-slate-50">

            {/* HERO */}
            <section className="relative bg-brand-950 py-32 overflow-hidden">
                <div className="absolute inset-0">
                    <motion.img
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        src={itSoftwareHero}
                        className="w-full h-full object-cover"
                        alt="IT & Software Industry"
                        loading="eager"
                        fetchPriority="high"
                    />
                    <div className="absolute inset-0 bg-brand-950/50"></div>
                </div>

                <div className="relative z-10 max-w-7xl ml-0 mr-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-4xl"
                    >
                        <span className="inline-block mb-6 px-4 py-1 rounded-full bg-brand-800/50 border border-brand-700 text-brand-200 text-xs font-semibold tracking-widest uppercase backdrop-blur-md">
                            Industries We Serve
                        </span>

                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-[1.1] tracking-tight">
                            IT & <span className="text-accent-500">Software</span>
                        </h1>
                        <h2 className="text-xl md:text-2xl font-bold text-white mb-8 opacity-90">
                            HR Solutions Designed for the Technology Ecosystem
                        </h2>

                        <p className="text-xl md:text-2xl text-slate-200 mb-8 font-light max-w-4xl leading-relaxed">
                            Tailored HR, hiring, and payroll solutions designed for the fast-paced technology ecosystem—from agile startups to large-scale IT services firms.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                to="/contact/hire-talent"
                                className="bg-brand-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-brand-500 transition-all shadow-lg flex items-center justify-center gap-2"
                            >
                                Explore IT & Software <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CHALLENGES – CARD GRID */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                            Key HR Challenges in <span className="text-brand-600">IT & Software</span>
                        </h2>
                        <p className="text-xl text-slate-600 max-w-2xl">
                            Technology companies face evolving HR complexities that require agile and structured responses.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "Skill Acquisition", desc: "High-volume and niche skill hiring in competitive markets.", icon: Cpu },
                            { title: "Rapid Scaling", desc: "Fast scaling and project-based workforce demands.", icon: Rocket },
                            { title: "Workforce Governance", desc: "Contractual and third-party manpower management.", icon: Layers },
                            { title: "Compliance", desc: "Multi-location and remote workforce compliance.", icon: ShieldCheck },
                            { title: "Cost Efficiency", desc: "Cost control without slowing delivery cycles.", icon: Settings },
                            { title: "Distributed Teams", desc: "Managing remote talent across timezones and regions.", icon: Globe },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -6, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
                                className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm group transition-all"
                            >
                                <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center text-brand-600 mb-6 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-16 p-8 bg-brand-900 rounded-3xl text-white">
                        <p className="text-lg md:text-xl font-medium">
                            CLink HR addresses these challenges through structured, scalable, and cost-optimized HR models.
                        </p>
                    </div>
                </div>
            </section>

            {/* SOLUTIONS – STACKED MODULES */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                            Our Solutions for <span className="text-brand-600">IT & Software</span>
                        </h2>
                    </div>

                    <div className="flex flex-wrap justify-center gap-8">
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
                                className="w-full md:w-[calc(50%-1rem)] bg-slate-50 p-10 rounded-3xl border border-slate-100 hover:border-brand-200 transition-all hover:shadow-lg"
                            >
                                <div className="flex items-center gap-6 mb-8">
                                    <div className="w-14 h-14 rounded-2xl bg-white text-brand-600 flex items-center justify-center shadow-sm">
                                        <block.icon className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900">{block.title}</h3>
                                </div>

                                <ul className="space-y-4">
                                    {block.items.map((item, idx) => (
                                        <li key={idx} className="flex gap-4 text-slate-700 items-start">
                                            <CheckCircle className="w-5 h-5 text-accent-500 mt-1 shrink-0" />
                                            <span className="text-lg">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHO + WHY – PREMIUM SPLIT */}
            <section className="py-24 bg-brand-950 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-800/10 skew-x-12" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-20">
                        {/* Left Column: Who We Work With */}
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-10 leading-tight">
                                Who We <span className="text-accent-400">Work With</span>
                            </h2>
                            <div className="flex flex-wrap gap-4 mb-16">
                                {[
                                    "IT Services & Consulting Firms",
                                    "Software Development Companies",
                                    "SaaS & Product-Based Organizations",
                                    "Technology Startups & Scaleups",
                                    "Remote & Distributed Teams",
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ scale: 1.05 }}
                                        className="bg-white/10 border border-white/20 px-6 py-3 rounded-full text-sm font-medium backdrop-blur-sm"
                                    >
                                        {item}
                                    </motion.div>
                                ))}
                            </div>

                            <h3 className="text-2xl font-bold mb-6">
                                Our Industry Reach
                            </h3>
                            <p className="text-slate-300 text-lg leading-relaxed mb-8">
                                From early-stage startups to established enterprises, we provide the HR backbone that allows tech companies to focus on what they do best: innovate.
                            </p>
                        </div>

                        {/* Right Column: Why Choose Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="bg-white text-slate-900 p-10 rounded-3xl shadow-2xl relative"
                        >
                            <h3 className="text-2xl font-bold mb-8 text-brand-900">Why IT & Software Companies Choose CLink HR</h3>
                            <ul className="space-y-6">
                                {[
                                    "Deep understanding of tech hiring and workforce dynamics",
                                    "Centralized HR coordination and governance",
                                    "Pan-India operational coverage",
                                    "Scalable delivery through structured partner ecosystems",
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-4 items-start group">
                                        <div className="w-6 h-6 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center shrink-0 mt-1 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                                            <CheckCircle className="w-4 h-4" />
                                        </div>
                                        <span className="text-slate-700 font-medium text-lg leading-tight">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-12 pt-8 border-t border-slate-100">
                                <p className="text-slate-600 italic border-l-4 border-accent-500 pl-4 text-lg">
                                    "We enable technology companies to focus on innovation and growth—while we manage HR complexity behind the scenes."
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="py-24 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-brand-900 rounded-[3rem] p-12 md:p-20 relative overflow-hidden text-center shadow-2xl">
                        <div className="absolute inset-0 opacity-10 pointer-events-none">
                            <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500 rounded-full blur-3xl -mr-48 -mt-48" />
                        </div>

                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                                Power Your Tech Growth <br /> With the Right HR Partner
                            </h2>
                            <p className="text-xl text-brand-200 mb-12 max-w-2xl mx-auto font-light">
                                CLink HR helps IT & Software organizations build agile, compliant, and future-ready HR operations.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                <Link
                                    to="/contact/hire-talent"
                                    className="bg-accent-500 text-brand-900 px-10 py-5 rounded-full font-semibold hover:bg-accent-400 transition-all shadow-xl flex items-center justify-center gap-2"
                                >
                                    Explore IT & Software HR Solutions <ArrowRight className="w-5 h-5" />
                                </Link>
                                <Link
                                    to="/contact"
                                    className="bg-transparent border border-white text-white px-10 py-5 rounded-full font-semibold hover:bg-white/10 transition-all flex items-center justify-center"
                                >
                                    Connect With Our Industry Experts
                                </Link>
                            </div>

                            <p className="mt-12 text-accent-400 font-bold text-lg tracking-wide uppercase">
                                Technology moves fast—your HR should move faster.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Testimonials />
        </div>
    );
};

export default ITSoftware;
