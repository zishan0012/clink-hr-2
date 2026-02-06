import React from 'react';
import { motion } from 'framer-motion';
import Testimonials from '../../../components/Testimonials';
import {
    Rocket,
    Zap,
    Users,
    Target,
    Clock,
    TrendingUp,
    CheckCircle,
    ArrowRight,
    Shield,
    Globe,
    Code2,
    Briefcase,
    Layout
} from 'lucide-react';
import { Link } from 'react-router-dom';
import startuphiringhero from '../../../assets/solutions-img/Startup Hiring Solutions-hero.jpg';

const StartupHiringSolutions = () => {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="bg-brand-950 py-32 relative overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={startuphiringhero}
                        alt="Startup Team"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-brand-950/50"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="max-w-4xl"
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-brand-800/50 border border-brand-700 text-brand-200 text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-md">
                            Startup Hiring Solutions
                        </span>
                        <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-8 tracking-tight leading-[1.1]">
                            Hiring Solutions Designed for <br />
                            <span className="text-accent-500">Fast-Growing</span> Startups
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-200 mb-8 font-light max-w-4xl leading-relaxed">
                            CLink HR’s Startup Hiring Solutions help startups build the right teams at the right stage of growth. We understand that startups need speed, flexibility, and cost-effective hiring—without compromising on talent quality.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/contact/hire-talent" className="bg-brand-600 text-white px-8 py-4 rounded-full font-bold hover:bg-brand-500 transition-all shadow-lg flex items-center justify-center gap-2">
                                Discuss Startup Hiring Requirements <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* specialized section regarding challenges */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Startup Hiring Challenges <span className="text-brand-600">We Solve</span></h2>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">
                            Startups face unique hurdles. We bridge the gap by acting as a reliable hiring partner while founders focus on growth.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: "Limited Bandwidth", desc: "Founders often lack the internal bandwidth for extensive hiring.", icon: Clock },
                            { title: "Urgent Requirements", desc: "Roles often need to be filled yesterday to keep up with growth.", icon: Zap },
                            { title: "Rapid Scale-Up", desc: "Pressure to hire quickly post-funding rounds.", icon: TrendingUp },
                            { title: "Flexible Support", desc: "Need for hiring support that scales up and down with needs.", icon: Layout }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-slate-50 p-8 rounded-2xl hover:shadow-lg transition-all border border-slate-100"
                            >
                                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-accent-500 shadow-sm mb-6">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <h3 className="font-bold text-slate-900 text-lg mb-3">{item.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Startup Hiring Approach */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-accent-600 font-bold uppercase tracking-widest text-sm mb-4 block">Our Process</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Our Startup Hiring Approach</h2>
                            <p className="text-xl text-slate-600 mb-8 font-light">
                                Our approach is simple, fast, and founder-friendly. We ensure hiring stays aligned with startup goals.
                            </p>
                            <div className="space-y-6">
                                {[
                                    "Clear understanding of business stage",
                                    "Structured requirement intake & role clarity",
                                    "Rapid candidate sourcing and screening",
                                    "Continuous coordination and feedback loops"
                                ].map((step, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="w-8 h-8 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center shrink-0 mt-1">
                                            <CheckCircle className="w-5 h-5" />
                                        </div>
                                        <p className="text-lg text-slate-700">{step}</p>
                                    </div>
                                ))}
                            </div>
                            <p className="mt-10 text-slate-600 italic border-l-4 border-accent-500 pl-4">
                                "We act as your extended talent team, ensuring quality without the overhead."
                            </p>
                        </div>
                        <div className="relative">
                            <div className="absolute -inset-4 bg-brand-200/30 rounded-3xl -rotate-2"></div>
                            <img
                                src="https://plus.unsplash.com/premium_photo-1736892868741-35bc1ae89091?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3RhcnR1cCUyMGhpcmluZyUyMHNvbHV0aW9ufGVufDB8fDB8fHww"
                                alt="Startup Culture"
                                className="relative rounded-2xl shadow-2xl w-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Roles We Help Startups Hire */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Roles We Help Startups Hire</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">From core team members to support staff, we cover the essential roles for growth.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                category: "Technology & Product",
                                roles: ["Software developers and engineers", "Product managers and analysts", "QA and tech support roles"],
                                icon: Code2
                            },
                            {
                                category: "Sales, Marketing & Growth",
                                roles: ["Sales and business development executives", "Digital marketing and growth roles", "Customer success and support teams"],
                                icon: TrendingUp
                            },
                            {
                                category: "Operations & Support",
                                roles: ["Operations and admin roles", "Finance and HR support staff", "Process and coordination roles"],
                                icon: Users
                            }
                        ].map((item, i) => (
                            <div key={i} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-brand-200 transition-colors group">
                                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-brand-600 shadow-sm mb-6 group-hover:bg-brand-600 group-hover:text-white transition-all">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <h3 className="font-bold text-slate-900 text-lg mb-4">{item.category}</h3>
                                <ul className="space-y-3">
                                    {item.roles.map((role, idx) => (
                                        <li key={idx} className="text-sm text-slate-600 flex gap-2 items-start">
                                            <span className="w-1.5 h-1.5 bg-accent-500 rounded-full mt-2 shrink-0"></span>
                                            {role}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Flexible Hiring Models & Industries */}
            <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-800/20 skew-x-12"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16">

                        {/* Flexible Models */}
                        <div>
                            <h2 className="text-3xl font-bold mb-8">Flexible Hiring Models</h2>
                            <div className="grid sm:grid-cols-2 gap-4 mb-8">
                                {[
                                    "Permanent hiring",
                                    "Contract & project-based",
                                    "Early-stage core team hiring",
                                    "Rapid scale-up & bulk hiring"
                                ].map((model, i) => (
                                    <div key={i} className="bg-slate-800/50 p-4 rounded-xl backdrop-blur-sm border border-slate-700/50">
                                        <p className="font-medium text-brand-200">{model}</p>
                                    </div>
                                ))}
                            </div>

                            <h2 className="text-3xl font-bold mb-8">Support Beyond Hiring</h2>
                            <ul className="space-y-3 mb-12">
                                {[
                                    "Role and JD clarity",
                                    "Hiring process structuring",
                                    "Market insights and talent availability",
                                    "Joining coordination and follow-ups"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3 items-center text-slate-300">
                                        <CheckCircle className="w-4 h-4 text-accent-500" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Industries & Why Choose */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-2xl font-bold mb-6">Industries We Support</h2>
                                <div className="flex flex-wrap gap-3">
                                    {[
                                        "Technology & SaaS", "FinTech & BFSI", "E-Commerce & D2C",
                                        "HealthTech & EdTech", "Logistics & Platform-based"
                                    ].map((ind, i) => (
                                        <span key={i} className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium hover:bg-white/20 transition-colors">
                                            {ind}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-white text-slate-900 p-8 rounded-3xl shadow-2xl">
                                <h3 className="text-2xl font-bold mb-6">Why Startups Choose CLink HR?</h3>
                                <ul className="space-y-4">
                                    {[
                                        "Faster hiring cycles",
                                        "Centralized coordination and execution",
                                        "Scalable support as the startup grows",
                                        "Reduced founder involvement in daily hiring",
                                        "Hiring aligned with business stages"
                                    ].map((item, i) => (
                                        <li key={i} className="flex gap-3 items-center">
                                            <Rocket className="w-5 h-5 text-brand-600 shrink-0" />
                                            <span className="text-slate-700 font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="mt-10 text-slate-600 italic border-l-4 border-accent-500 pl-4">
                                    "We grow with your startup, not ahead of it."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Who Should Use + CTA */}
            <section className="py-24 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-12">Who Should Use Startup Hiring Solutions?</h2>
                    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                        {[
                            "Early-Stage Startups",
                            "Funded Scaling Startups",
                            "Busy Founders",
                            "Teams without HR"
                        ].map((item, i) => (
                            <div key={i} className="bg-slate-50 p-6 rounded-2xl flex flex-col items-center justify-center text-center h-full">
                                <div className="w-2 h-2 bg-accent-500 rounded-full mb-4"></div>
                                <p className="font-medium text-slate-800">{item}</p>
                            </div>
                        ))}
                    </div>

                    <div className="bg-brand-50 rounded-[3rem] p-12 relative overflow-hidden">
                        <div className="relative z-10">
                            <h2 className="text-3xl font-bold text-brand-900 mb-6">Build Your Startup Team with Confidence</h2>
                            <p className="text-xl text-brand-800/80 mb-8 max-w-3xl mx-auto">
                                CLink HR delivers startup hiring solutions that combine speed, flexibility, and structure—helping startups build teams that scale.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link to="/contact/hire-talent" className="bg-brand-600 text-white px-10 py-4 rounded-full font-bold hover:bg-brand-700 transition-all shadow-xl">
                                    Discuss Startup Hiring Requirements
                                </Link>
                                <Link to="/contact" className="bg-white text-brand-700 border border-brand-200 px-10 py-4 rounded-full font-bold hover:bg-brand-50 transition-all">
                                    Talk to Our Startup Team
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Testimonials />
        </div>
    );
};

export default StartupHiringSolutions;
