import React from "react";
import { motion } from "framer-motion";
import {
    Users,
    Rocket,
    ShieldCheck,
    CheckCircle,
    ArrowRight,
    Search,
    UserPlus,
    Layout,
    Briefcase,
    Settings,
    Zap,
    BarChart3,
    HeartPulse,
    Award,
    MessageCircle,
    Globe,
    TrendingUp,
    Star,
    Target,
    Network
} from "lucide-react";
import { Link } from "react-router-dom";

const IPPPartnerNetwork = () => {
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
                            How It Works
                        </span>

                        <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight">
                            Partner <span className="text-accent-500">Onboarding</span> (IPP)
                        </h1>
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 opacity-90">
                            Become an Independent Partner with Centralized Support
                        </h2>

                        <p className="text-xl md:text-2xl text-slate-200 mb-8 font-light max-w-4xl leading-relaxed">
                            CLink HR partners with Independent Placement Partners (IPP) through the Zryoss ecosystem to deliver recruitment and HR services at scale.
                            Our partner onboarding model is designed to help professionals build and grow their own recruitment brand, while CLink HR and Zryoss handle infrastructure, coordination, clients, and backend operations.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                to="/contact/partner-inquiry"
                                className="bg-brand-600 text-white px-8 py-4 rounded-full font-bold hover:bg-brand-500 transition-all shadow-lg flex items-center justify-center gap-2"
                            >
                                Start Your IPP Journey <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* WHO CAN BECOME – CATEGORY GRID */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                            Who Can Become <span className="text-brand-600">an IPP</span>
                        </h2>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                            The IPP program is built for passionate HR and recruitment professionals ready to take ownership of their career.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: "Solo Recruiters", desc: "Recruitment consultants looking for professional support and client access.", icon: Search },
                            { title: "Boutique Firms", desc: "Small recruitment firms aiming to scale operations without overhead.", icon: Layout },
                            { title: "Aspiring Founders", desc: "HR professionals starting their own recruitment practice.", icon: Rocket },
                            { title: "TA Specialists", desc: "Experienced talent acquisition specialists seeking independence.", icon: Briefcase },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.05 }}
                                className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm text-center"
                            >
                                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-brand-600 mb-6 mx-auto shadow-sm">
                                    <item.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-16 grid md:grid-cols-3 gap-8">
                        {[
                            "No need to register a company initially",
                            "No pressure to build large teams",
                            "No need to invest in systems/tools"
                        ].map((point, i) => (
                            <div key={i} className="flex items-center gap-4 bg-brand-50 p-6 rounded-2xl">
                                <CheckCircle className="w-6 h-6 text-brand-600 shrink-0" />
                                <span className="font-bold text-slate-900">{point}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ONBOARDING PROCESS – DETAILED ROADMAP */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                            IPP <span className="text-brand-600">Onboarding Process</span>
                        </h2>
                    </div>

                    <div className="relative">
                        {/* Connecting Line */}
                        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-brand-200 hidden md:block" />

                        <div className="space-y-12">
                            {[
                                {
                                    step: "01",
                                    title: "Application & Profile Submission",
                                    icon: UserPlus,
                                    items: [
                                        "Apply as an IPP partner via our ecosystem",
                                        "Share experience, industry focus, and hiring strengths",
                                        "Select preferred industries and role types for allocation",
                                    ],
                                },
                                {
                                    step: "02",
                                    title: "IPP Approval & Ecosystem Access",
                                    icon: ShieldCheck,
                                    items: [
                                        "Profile review and approval by CLink HR leadership",
                                        "Onboarding into the Zryoss partner ecosystem",
                                        "Full access to specialized partner dashboards & workflows",
                                    ],
                                },
                                {
                                    step: "03",
                                    title: "Brand Enablement",
                                    icon: Award,
                                    items: [
                                        "Permission to operate under your own unique brand name",
                                        "Website, positioning, and digital presence enablement",
                                        "Professional social media and branding guidance",
                                    ],
                                    note: "You operate independently. Your brand remains fully yours."
                                },
                                {
                                    step: "04",
                                    title: "Training & Process Alignment",
                                    icon: Settings,
                                    items: [
                                        "Orientation on delivery processes and workflows",
                                        "Understanding client requirements and job descriptions",
                                        "SLA expectations and quality benchmarks setup",
                                    ],
                                },
                                {
                                    step: "05",
                                    title: "Requirement Allocation",
                                    icon: Zap,
                                    items: [
                                        "Live requirements shared directly by CLink HR",
                                        "Industry-aligned and skill-matched job allocations",
                                        "Clear timelines and closure expectations defined",
                                    ],
                                },
                                {
                                    step: "06",
                                    title: "Execution & Coordination",
                                    icon: Target,
                                    items: [
                                        "You focus only on candidate sourcing and closures",
                                        "Client coordination and follow-ups managed centrally",
                                        "Continuous ground-level support from the ecosystem",
                                    ],
                                },
                                {
                                    step: "07",
                                    title: "Closure Validation & Payout",
                                    icon: BarChart3,
                                    items: [
                                        "Closures validated centrally for quality assurance",
                                        "Real-time transparent payout tracking and reporting",
                                        "On-time settlement through the ecosystem infrastructure",
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
                                    <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 flex-grow hover:shadow-md transition-shadow w-full">
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
                                        {step.note && (
                                            <div className="mt-6 p-6 bg-slate-50 rounded-2xl border border-slate-200">
                                                <p className="text-brand-700 font-bold italic text-center text-lg">{step.note}</p>
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* SPLIT RESPONSIBILITY BOX */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* We Manage */}
                        <div className="bg-brand-950 text-white p-12 rounded-[3.5rem] shadow-2xl">
                            <h3 className="text-3xl font-bold mb-10 text-accent-400">What CLink HR & Zryoss Manage</h3>
                            <div className="space-y-6">
                                {[
                                    "Client acquisition & legal agreements",
                                    "Job requirement validation",
                                    "Central coordination & client feedback",
                                    "Payout management and accounting",
                                    "Backend systems & technology platform",
                                    "Training & continuous process support",
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 items-start">
                                        <ShieldCheck className="w-6 h-6 text-accent-500 shrink-0 mt-1" />
                                        <span className="text-xl font-light text-slate-200">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-12 p-8 border border-white/10 bg-white/5 rounded-3xl">
                                <p className="text-lg font-medium text-center uppercase tracking-wider text-accent-400">
                                    We manage everything else.
                                </p>
                            </div>
                        </div>

                        {/* You Focus */}
                        <div className="bg-slate-50 p-12 rounded-[3.5rem] border border-slate-200 flex flex-col">
                            <h3 className="text-3xl font-bold mb-10 text-brand-700">What IPPs Do (Only What Matters)</h3>
                            <div className="space-y-8 flex-grow">
                                {[
                                    { title: "Source & Screen", desc: "Find the best talent for assigned roles." },
                                    { title: "Share Profiles", desc: "Submit qualified, vetted candidate profiles." },
                                    { title: "Close Positions", desc: "Drive successful closures and performance." },
                                    { title: "Maintain Quality", desc: "Ensure long-term delivery excellence." },
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-6 group">
                                        <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 text-brand-600 flex items-center justify-center shadow-sm shrink-0 group-hover:bg-brand-600 group-hover:text-white transition-all">
                                            <Zap className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-slate-900 mb-1">{item.title}</h4>
                                            <p className="text-slate-600 text-lg leading-snug">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-12 text-center">
                                <p className="text-slate-500 font-bold italic border-t border-slate-200 pt-8">
                                    That’s it. No admin burden. No client chasing.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHY PARTNERS CHOOSE US – GRID */}
            <section className="py-24 bg-brand-900 text-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            Why IPPs Choose <span className="text-accent-400">This Model</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "Your Own Brand", desc: "Build equity in your independent brand name.", icon: Star },
                            { title: "Zero Fixed Costs", desc: "No infrastructure or system investment needed.", icon: TrendingUp },
                            { title: "Continuous Flow", desc: "Always have access to live, validated requirements.", icon: Network },
                            { title: "Faster Closures", desc: "Centralized support reduces administrative friction.", icon: Zap },
                            { title: "Timely Payouts", desc: "Transparent tracking and scheduled settlements.", icon: BarChart3 },
                            { title: "Long-term Growth", desc: "Scale from solo recruiter to business owner.", icon: Globe },
                        ].map((item, i) => (
                            <div key={i} className="p-10 border border-white/10 bg-white/5 rounded-3xl hover:bg-white/10 transition-all group">
                                <div className="w-12 h-12 bg-accent-500 rounded-xl flex items-center justify-center text-brand-900 mb-6 group-hover:scale-110 transition-transform">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                                <p className="text-brand-100 leading-relaxed font-light">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SCALABLE GROWTH – MODULE */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-[3.5rem] p-12 md:p-20 shadow-xl border border-slate-100">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">Scalable Growth <br /> for IPPs</h2>
                                <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                                    Performance leads to priority. As you deliver results, your access within the ecosystem grows exponentially.
                                </p>
                                <div className="space-y-4">
                                    {[
                                        "Access to higher-value job requirements",
                                        "Priority role allocations for your niche",
                                        "Direct engagement with enterprise clients",
                                        "Long-term strategic partnership opportunities",
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-4">
                                            <div className="w-2 h-2 rounded-full bg-brand-600" />
                                            <span className="text-lg font-bold text-slate-800">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-brand-50 p-10 rounded-[2.5rem] border border-brand-100">
                                <TrendingUp className="w-16 h-16 text-brand-600 mb-8" />
                                <h3 className="text-2xl font-bold text-brand-900 mb-4 tracking-tight">Direct Performance Link</h3>
                                <p className="text-brand-800 text-lg leading-relaxed font-medium">
                                    Your growth is directly linked to your performance. The more you close, the more you earn and the more opportunities you unlock.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="py-24 bg-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="mb-12"
                    >
                        <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-8 tracking-tight italic">
                            Build Your Brand. <br />
                            <span className="text-brand-600">Focus on Hiring.</span> <br />
                            Let the Ecosystem <br /> Handle the Rest.
                        </h2>
                    </motion.div>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link
                            to="/contact/partner-inquiry"
                            className="bg-brand-600 text-white px-12 py-5 rounded-full font-bold hover:bg-brand-700 transition-all shadow-2xl"
                        >
                            Become an IPP Partner Today
                        </Link>
                        <Link
                            to="/contact"
                            className="bg-transparent border-2 border-slate-200 text-slate-900 px-12 py-5 rounded-full font-bold hover:border-brand-600 transition-all"
                        >
                            Talk to Us First
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default IPPPartnerNetwork;
