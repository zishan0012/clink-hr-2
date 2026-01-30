import React from 'react';
import { motion } from 'framer-motion';
import Testimonials from '../../../components/Testimonials';
import {
    TrendingDown,
    Zap,
    Users,
    BarChart3,
    CheckCircle,
    ArrowRight,
    Search,
    UserCircle,
    FileText,
    Monitor,
    Factory,
    ShoppingBag,
    Briefcase,
    Stethoscope,
    Building2,
    Shield
} from 'lucide-react';
import { Link } from 'react-router-dom';

const CostOptimizedHRSolutions = () => {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="bg-brand-950 py-32 relative overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80"
                        alt="Cost Optimized HR"
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
                            Cost-Optimized HR Solutions
                        </span>
                        <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-8 tracking-tight leading-[1.1]">
                            Reduce HR Costs. <br />
                            Improve Efficiency. <br />
                            <span className="text-accent-500">Scale Smarter.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-200 mb-8 font-light max-w-4xl leading-relaxed">
                            CLink HR’s Cost-Optimized HR Solutions help organizations lower HR operational expenses while maintaining compliance, workforce quality, and delivery speed.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/contact/hire-talent" className="bg-brand-600 text-white px-8 py-4 rounded-full font-bold hover:bg-brand-500 transition-all shadow-lg flex items-center justify-center gap-2">
                                Explore Optimized Solutions <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Why Matters */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Why Cost Optimization in HR <span className="text-brand-600">Matters</span></h2>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">
                            HR costs increase silently as businesses grow. We ensure every HR rupee delivers measurable value.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: "Redundant Resources", desc: "Multiple resources for similar tasks.", icon: Users },
                            { title: "Inefficient Hiring", desc: "Inefficient process and delayed closures.", icon: Search },
                            { title: "High Overhead", desc: "High payroll processing and compliance costs.", icon: TrendingDown },
                            { title: "Poor Visibility", desc: "Poor workforce data leading to overspending.", icon: BarChart3 }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                                className="bg-slate-50 p-8 rounded-2xl border border-slate-100 group transition-all"
                            >
                                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-accent-500 shadow-sm mb-6 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <h3 className="font-bold text-slate-900 text-lg mb-3">{item.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Approach */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-accent-600 font-bold uppercase tracking-widest text-sm mb-4 block">Our Approach</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Efficiency-First HR Framework</h2>
                            <p className="text-xl text-slate-600 mb-8 font-light">
                                We focus on process efficiency, resource optimization, and scale benefits rather than cost cutting alone.
                            </p>
                            <div className="space-y-6">
                                {[
                                    "Centralized HR coordination",
                                    "Reduced dependency on large teams",
                                    "Process-driven delivery",
                                    "Technology-enabled optimization"
                                ].map((step, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="w-8 h-8 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center shrink-0 mt-1">
                                            <CheckCircle className="w-5 h-5" />
                                        </div>
                                        <p className="text-lg text-slate-700">{step}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute -inset-4 bg-brand-200/30 rounded-3xl -rotate-2"></div>
                            <img
                                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1415&q=80"
                                alt="Efficiency Analysis"
                                className="relative rounded-2xl shadow-2xl w-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Optimization Areas */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Key Cost-Optimization Areas</h2>
                    </div>

                    <div className="flex flex-wrap justify-center gap-8">
                        {[
                            {
                                title: "Lean Hiring Model",
                                items: ["Faster position closures", "Reduced recruitment overheads", "Optimized sourcing coordination"],
                                icon: UserCircle
                            },
                            {
                                title: "Optimized Structuring",
                                items: ["Right-sized workforce planning", "Contract vs permanent mix", "Cost-effective deployment"],
                                icon: Users
                            },
                            {
                                title: "Payroll Efficiency",
                                items: ["Reduced processing cost", "Compliance-aligned structures", "Elimination of penalty risks"],
                                icon: Zap
                            },
                            {
                                title: "Vendor Rationalization",
                                items: ["Centralized vendor coordination", "Controlled payouts and invoicing", "Transparent cost tracking"],
                                icon: FileText
                            },
                            {
                                title: "Tech-Enabled HR",
                                items: ["Central HR dashboards", "Workforce MIS and reporting", "Reduced manual interventions"],
                                icon: Monitor
                            }
                        ].map((service, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.02 }}
                                className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-2rem)] bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-brand-200 transition-all hover:shadow-lg"
                            >
                                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-brand-600 shadow-sm mb-6">
                                    <service.icon className="w-7 h-7" />
                                </div>
                                <h3 className="font-bold text-slate-900 text-xl mb-4">{service.title}</h3>
                                <ul className="space-y-3">
                                    {service.items.map((item, idx) => (
                                        <li key={idx} className="text-slate-600 flex gap-2 items-start">
                                            <CheckCircle className="w-5 h-5 text-accent-500 shrink-0 mt-0.5" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries & Why Choose */}
            <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-800/20 skew-x-12"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16">

                        {/* Industries & Benefits Column */}
                        <div className="space-y-12">
                            {/* Industries */}
                            <div>
                                <h2 className="text-2xl font-bold mb-6 text-white">Industries We Serve</h2>
                                <div className="flex flex-wrap gap-3">
                                    {[
                                        { name: "IT & Technology Services", icon: Monitor },
                                        { name: "Manufacturing & Engineering", icon: Factory },
                                        { name: "Retail & Logistics", icon: ShoppingBag },
                                        { name: "BFSI & Professional Services", icon: Building2 },
                                        { name: "Healthcare & Operations", icon: Stethoscope }
                                    ].map((ind, i) => (
                                        <motion.div
                                            key={i}
                                            whileHover={{ scale: 1.05 }}
                                            className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm font-medium hover:bg-white/20 transition-colors border border-white/5"
                                        >
                                            <ind.icon className="w-4 h-4 text-brand-200" />
                                            {ind.name}
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Benefits */}
                            <div>
                                <h3 className="text-2xl font-bold mb-6 text-white">Business Benefits</h3>
                                <ul className="space-y-4">
                                    {[
                                        "Lower HR operational cost",
                                        "Improved hiring turnaround time",
                                        "Better workforce cost visibility",
                                        "Reduced compliance risk",
                                        "Scalable HR without fixed overheads"
                                    ].map((item, i) => (
                                        <motion.li
                                            key={i}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.1 }}
                                            className="flex gap-4 items-center text-slate-300"
                                        >
                                            <CheckCircle className="w-5 h-5 text-accent-500 shrink-0" />
                                            <span className="text-lg">{item}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Why Choose Card */}
                        <div>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="bg-white text-slate-900 p-8 rounded-3xl shadow-2xl relative"
                            >
                                <div className="absolute top-0 right-0 p-8 opacity-5">
                                    <Shield className="w-32 h-32 text-brand-900" />
                                </div>
                                <h3 className="text-2xl font-bold mb-8 text-brand-900">Why Choose CLink HR?</h3>
                                <ul className="space-y-5 relative z-10">
                                    {[
                                        "Centralized HR governance model",
                                        "Proven cost-efficient delivery",
                                        "Pan-India workforce coordination",
                                        "Transparent reporting and control"
                                    ].map((item, i) => (
                                        <motion.li
                                            key={i}
                                            whileHover={{ x: 5 }}
                                            className="flex gap-4 items-start group"
                                        >
                                            <div className="w-6 h-6 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                                                <CheckCircle className="w-4 h-4" />
                                            </div>
                                            <span className="text-slate-700 font-medium group-hover:text-brand-700 transition-colors">{item}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                                <div className="mt-10 pt-8 border-t border-slate-100">
                                    <p className="text-slate-600 italic border-l-4 border-accent-500 pl-4 text-lg">
                                        "We don’t just reduce HR costs—we optimize HR value delivery."
                                    </p>
                                </div>
                            </motion.div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Who Benefits + CTA */}
            <section className="py-24 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-12">Who Benefits From This?</h2>
                    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                        {[
                            "Startups",
                            "SMEs & Growing Orgs",
                            "Large Enterprises",
                            "Multi-Location Biz"
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -5 }}
                                className="bg-slate-50 p-6 rounded-2xl flex flex-col items-center justify-center text-center h-full border border-slate-100 hover:border-accent-400 transition-colors"
                            >
                                <div className="w-2 h-2 bg-accent-500 rounded-full mb-4"></div>
                                <p className="font-medium text-slate-800">{item}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="bg-brand-900 rounded-[3rem] p-12 relative overflow-hidden">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                        <div className="relative z-10">
                            <h2 className="text-3xl font-bold text-white mb-6">Build a Lean, Scalable HR Function</h2>
                            <p className="text-xl text-brand-200 mb-8 max-w-3xl mx-auto">
                                With CLink HR’s Cost-Optimized HR Solutions, organizations achieve maximum efficiency with minimum overhead.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link to="/contact/hire-talent" className="bg-accent-500 text-brand-900 px-10 py-4 rounded-full font-bold hover:bg-accent-400 transition-all shadow-xl">
                                    Explore Cost-Optimized HR
                                </Link>
                                <Link to="/contact" className="bg-transparent border border-white text-white px-10 py-4 rounded-full font-bold hover:bg-white/10 transition-all">
                                    Consult Our Strategy Team
                                </Link>
                            </div>
                            <p className="mt-8 text-brand-300 text-sm font-light">
                                "Smart HR structures designed for efficiency, compliance, and sustainable growth."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Testimonials />
        </div>
    );
};

export default CostOptimizedHRSolutions;
