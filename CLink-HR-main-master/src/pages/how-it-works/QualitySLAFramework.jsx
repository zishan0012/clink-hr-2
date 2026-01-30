import React from "react";
import { motion } from "framer-motion";
import Testimonials from "../../components/Testimonials";
import qualitySLAHero from '../../assets/how-it-works-img/quality-sla-hero.jpg';
import {
    ShieldCheck,
    CheckCircle,
    ArrowRight,
    Zap,
    BarChart3,
    Target,
    Settings,
    Clock,
    UserCheck,
    Search,
    FileText,
    MessageCircle,
    TrendingUp,
    Globe,
    AlertCircle,
    ClipboardCheck
} from "lucide-react";
import { Link } from "react-router-dom";

const QualitySLAFramework = () => {
    return (
        <div className="min-h-screen bg-slate-50">

            {/* HERO */}
            <section className="relative bg-brand-950 py-32 overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={qualitySLAHero}
                        alt="Quality & SLA Framework"
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
                            How It Works
                        </span>

                        <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight">
                            Quality & <span className="text-accent-500">SLA Framework</span>
                        </h1>
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 opacity-90 leading-tight">
                            Consistent Quality Across a Distributed Delivery Network
                        </h2>

                        <p className="text-xl md:text-2xl text-slate-200 mb-8 font-light max-w-4xl leading-relaxed">
                            CLink HR follows a centralized Quality & SLA Framework to ensure reliable, predictable, and high-quality delivery—even while execution is carried out by independent IPP partners across the Zryoss ecosystem.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                to="/contact"
                                className="bg-brand-600 text-white px-8 py-4 rounded-full font-bold hover:bg-brand-500 transition-all shadow-lg flex items-center justify-center gap-2 text-lg"
                            >
                                Experience Quality Delivery <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* WHY IT MATTERS – CHALLENGES GRID */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                            Why a Quality & <span className="text-brand-600">SLA Framework Matters</span>
                        </h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                            In a distributed delivery model, maintaining high standards requires more than just good intentions—it requires a robust framework.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Distributed Accountability",
                                desc: "Multiple partners work on similar requirements; central standards ensure uniform delivery.",
                                icon: Globe
                            },
                            {
                                title: "Balance of Speed & Accuracy",
                                desc: "High-volume delivery often risks quality; our framework ensures both are optimized.",
                                icon: Zap
                            },
                            {
                                title: "Consistent Experience",
                                desc: "Clients receive the same premium standard regardless of which partner handles the task.",
                                icon: CheckCircle
                            },
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
                </div>
            </section>

            {/* QUALITY-BY-DESIGN – TIMELINE */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                            Quality-by-Design <span className="text-brand-600">Approach</span>
                        </h2>
                        <p className="text-xl text-slate-600">Quality is not reactive—it is designed into the process at every stage.</p>
                    </div>

                    <div className="relative">
                        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-brand-200 hidden md:block" />

                        <div className="space-y-12">
                            {[
                                {
                                    step: "01",
                                    title: "Structured Requirement Validation",
                                    icon: ClipboardCheck,
                                    items: [
                                        "Job descriptions reviewed and structured centrally",
                                        "Skill expectations and hiring criteria standardized",
                                        "Clear definition of 'Success' for each requirement"
                                    ]
                                },
                                {
                                    step: "02",
                                    title: "Defined SLAs & Timelines",
                                    icon: Clock,
                                    items: [
                                        "Turnaround times set based on role criticality",
                                        "Clear benchmarks for profile quality and volume",
                                        "Communicate commitments to stakeholders upfront"
                                    ]
                                },
                                {
                                    step: "03",
                                    title: "Central Monitoring & Reporting",
                                    icon: BarChart3,
                                    items: [
                                        "Real-time tracking of all active requirements",
                                        "Standardized reporting for clients and partners",
                                        "Automated alerts for potential SLA slippages"
                                    ]
                                },
                                {
                                    step: "04",
                                    title: "Performance-Based Partner Allocation",
                                    icon: UserCheck,
                                    items: [
                                        "Requirements mapped to partners based on past quality",
                                        "Incentivizing high-performance through priority access",
                                        "Continuous feedback loop for partner improvement"
                                    ]
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
                                    <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 flex-grow hover:shadow-md transition-shadow w-full">
                                        <span className="text-brand-600 font-bold text-sm tracking-widest uppercase mb-2 block">Stage {step.step}</span>
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

            {/* SLA PARAMETERS – GRID CARD */}
            <section className="py-24 bg-brand-950 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,#3b82f6_0%,transparent_40%)]" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            Standard <span className="text-accent-400">SLA Parameters</span>
                        </h2>
                        <p className="text-xl text-slate-300">
                            Our Service Level Agreements are defined around measurable outcomes that drive business value.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { label: "TAT", title: "Turnaround Time", desc: "Commitments on initial response and profile delivery speed.", icon: Clock },
                            { label: "Quality", title: "Profile Relevance", desc: "Vetting accuracy to ensure profiles match role requirements.", icon: UserCheck },
                            { label: "Accuracy", title: "Shortlisting Rate", desc: "High conversion rates from profile submission to client interview.", icon: Target },
                            { label: "Timelines", title: "Closure Timelines", desc: "End-to-end management of the recruitment lifecycle.", icon: Calendar }
                        ].map((item, i) => (
                            <div key={i} className="p-8 border border-white/10 bg-white/5 rounded-3xl hover:bg-white/10 transition-all group">
                                <div className="w-12 h-12 bg-accent-500 rounded-xl flex items-center justify-center text-brand-950 mb-6 group-hover:scale-110 transition-transform">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                <p className="text-brand-100/70 leading-relaxed font-light">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 p-10 bg-white/5 rounded-[2.5rem] border border-white/10">
                        <h3 className="text-2xl font-bold mb-6">Role-Based SLA Customization</h3>
                        <div className="grid md:grid-cols-4 gap-8">
                            {["Role Criticality", "Skill Complexity", "Volume Requirements", "Location & Industry"].map((point, i) => (
                                <div key={i} className="flex items-center gap-4">
                                    <div className="w-1.5 h-1.5 rounded-full bg-accent-400 shrink-0" />
                                    <span className="text-lg text-slate-200">{point}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* QUALITY CONTROL MECHANISMS */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                            Quality Control <span className="text-brand-600">Mechanisms</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            {
                                title: "Requirement Validation",
                                icon: FileText,
                                points: [
                                    "Centralized J.D. structuring",
                                    "Skill criteria standardization",
                                    "Standardized hiring assessments"
                                ]
                            },
                            {
                                title: "Partner Matching",
                                icon: Search,
                                points: [
                                    "Niche-aligned partner mapping",
                                    "Performance-based allocation",
                                    "Bandwidth & capacity checks"
                                ]
                            },
                            {
                                title: "Profile Quality Checks",
                                icon: ShieldCheck,
                                points: [
                                    "Experience & skill validation",
                                    "Relevance & alignment vetting",
                                    "Duplicate/mismatch prevention"
                                ]
                            },
                            {
                                title: "Delivery Monitoring",
                                icon: BarChart3,
                                points: [
                                    "Real-time monitoring on Zryoss",
                                    "SLA adherence dashboard",
                                    "Proactive escalation matrix"
                                ]
                            }
                        ].map((box, i) => (
                            <div key={i} className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100 flex flex-col items-start hover:shadow-lg transition-shadow">
                                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-brand-600 mb-8 shadow-sm">
                                    <box.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-6">{box.title}</h3>
                                <ul className="space-y-4">
                                    {box.points.map((point, idx) => (
                                        <li key={idx} className="flex gap-4 items-center text-slate-600">
                                            <div className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
                                            <span className="text-lg">{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* STAKEHOLDER VALUE SPLIT */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Clients */}
                        <div className="bg-brand-950 text-white p-12 rounded-[3.5rem] shadow-2xl">
                            <h3 className="text-3xl font-bold mb-10 text-accent-400">What This Means for Clients</h3>
                            <div className="space-y-6">
                                {[
                                    "Predictable delivery outcomes",
                                    "Faster closures with consistent quality",
                                    "Single point of accountability",
                                    "Reduced operational and hiring risk",
                                    "Full transparency via delivery reporting"
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 items-start">
                                        <CheckCircle className="w-6 h-6 text-accent-500 shrink-0 mt-1" />
                                        <span className="text-xl font-light text-slate-200">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Partners */}
                        <div className="bg-white p-12 rounded-[3.5rem] border border-slate-200 shadow-sm flex flex-col">
                            <h3 className="text-3xl font-bold mb-10 text-brand-700">What This Means for IPP Partners</h3>
                            <div className="space-y-6 flex-grow">
                                {[
                                    "Clear expectations and fair evaluation",
                                    "Performance-based growth opportunities",
                                    "Transparent and objective governance",
                                    "Long-term partnership stability",
                                    "Continuous performance insights and training"
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 items-start">
                                        <TrendingUp className="w-6 h-6 text-brand-600 shrink-0 mt-1" />
                                        <span className="text-xl font-bold text-slate-800">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ESCALATION & CONTINUOUS IMPROVEMENT */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="space-y-12">
                            <div>
                                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8">Escalation & Resolution</h2>
                                <div className="space-y-6">
                                    {[
                                        { title: "Escalation Matrix", desc: "Clearly defined levels of intervention for all services." },
                                        { title: "Proactive Intervention", desc: "Automated risk identification for potential SLA delays." },
                                        { title: "Central Support", desc: "Our team provides the resolution support needed for success." }
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-6">
                                            <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center text-brand-600 shrink-0">
                                                <AlertCircle className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <h4 className="text-xl font-bold text-slate-900">{item.title}</h4>
                                                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="bg-brand-50 p-12 rounded-[3rem] border border-brand-100">
                            <h2 className="text-3xl font-bold text-brand-900 mb-8">Continuous Improvement</h2>
                            <div className="space-y-8">
                                {[
                                    { title: "Data Analysis", desc: "Continuous analyzing of SLA performance and trends." },
                                    { title: "Process Refinement", desc: "Iterating delivery processes based on market dynamics." },
                                    { title: "Partner Enablement", desc: "Regular training and skill up-gradation for the network." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-6">
                                        <div className="w-1.5 h-1.5 rounded-full bg-brand-600 shrink-0 mt-3" />
                                        <div>
                                            <h4 className="text-xl font-bold text-brand-900">{item.title}</h4>
                                            <p className="text-brand-800/80 leading-relaxed">{item.desc}</p>
                                        </div>
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
                        <ShieldCheck className="w-20 h-20 text-accent-400 mx-auto" />
                        <h2 className="text-4xl md:text-6xl font-extrabold italic tracking-tight">
                            Central Standards. <br />
                            <span className="text-accent-400">Measurable Outcomes.</span> <br />
                            Scalable Quality.
                        </h2>
                        <p className="text-2xl text-brand-100 font-light max-w-2xl mx-auto leading-relaxed">
                            Our framework evolves with your business needs, ensuring quality remains constant even as you scale.
                        </p>
                        <div className="pt-8">
                            <Link
                                to="/contact"
                                className="bg-accent-500 text-brand-950 px-12 py-5 rounded-full font-bold hover:bg-accent-400 transition-all shadow-2xl inline-flex items-center gap-3 text-lg"
                            >
                                Let's Discuss Your Quality Standard <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Testimonials />
        </div>
    );
};

export default QualitySLAFramework;

const Calendar = ({ className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
        <line x1="16" x2="16" y1="2" y2="6" />
        <line x1="8" x2="8" y1="2" y2="6" />
        <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
);
