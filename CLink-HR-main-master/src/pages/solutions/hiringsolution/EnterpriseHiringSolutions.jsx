import React from 'react';
import { motion } from 'framer-motion';
import {
    Briefcase,
    Building2,
    Users,
    Globe,
    Shield,
    CheckCircle,
    ArrowRight,
    TrendingUp,
    Layout,
    Layers,
    PieChart,
    BarChart3
} from 'lucide-react';
import { Link } from 'react-router-dom';

const EnterpriseHiringSolutions = () => {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="bg-brand-950 py-32 relative overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                        alt="Enterprise Building"
                        className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-950 via-brand-950/90 to-brand-950/70"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl"
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-brand-800/50 border border-brand-700 text-brand-200 text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-md">
                            Enterprise Hiring Solutions
                        </span>
                        <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-8 tracking-tight leading-[1.1]">
                            Structured Hiring Solutions for <br />
                            <span className="text-accent-500">Large & Complex</span> Organizations
                        </h1>
                        <p className="text-xl text-slate-300 leading-relaxed font-light mb-10 max-w-2xl">
                            CLink HR’s Enterprise Hiring Solutions are designed to support organizations with large-scale, multi-location, and ongoing hiring requirements. We help enterprises manage hiring volume, consistency, and timelines through centralized coordination and scalable execution.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/contact/hire-talent" className="bg-brand-600 text-white px-8 py-4 rounded-full font-bold hover:bg-brand-500 transition-all shadow-lg flex items-center justify-center gap-2">
                                Discuss Enterprise Hiring Requirements <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Challenges We Address */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Enterprise Hiring Challenges <span className="text-brand-600">We Address</span></h2>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">
                            Enterprises often face complex hurdles. CLink HR brings structure and visibility to your hiring operations.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: "High Volume", desc: "Managing high-volume and continuous hiring needs across departments.", icon: Layers },
                            { title: "Multi-Location", desc: "Coordinating diverse requirements across multiple business units and locations.", icon: Globe },
                            { title: "Complex Workflows", desc: "Navigating complex approval processes and hiring workflows efficiently.", icon: Layout },
                            { title: "Quality & Compliance", desc: "Pressure to maintain high quality standards and regulatory compliance.", icon: Shield }
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

            {/* Our Enterprise Hiring Approach */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-accent-600 font-bold uppercase tracking-widest text-sm mb-4 block">Our Process</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Our Enterprise Hiring Approach</h2>
                            <p className="text-xl text-slate-600 mb-8 font-light">
                                Our approach is built on governance, scalability, and accountability. Enterprises benefit from one accountable hiring partner.
                            </p>
                            <div className="space-y-6">
                                {[
                                    "Centralized hiring coordination",
                                    "Standardized hiring workflows",
                                    "Location-wise execution support",
                                    "Real-time tracking and MIS reporting"
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
                                "We ensure hiring remains predictable, controlled, and aligned with business goals."
                            </p>
                        </div>
                        <div className="relative">
                            <div className="absolute -inset-4 bg-brand-200/30 rounded-3xl -rotate-2"></div>
                            <img
                                src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                                alt="Enterprise Office"
                                className="relative rounded-2xl shadow-2xl w-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Hiring Coverage Across Functions */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Hiring Coverage Across Functions</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">We provide comprehensive coverage across key functional areas in your enterprise.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                category: "Technology & IT Hiring",
                                roles: ["Software, infrastructure, and digital roles", "Project-based and ongoing IT hiring"],
                                icon: Layout
                            },
                            {
                                category: "Non-IT & Operations Hiring",
                                roles: ["Sales, operations, and support roles", "Manufacturing, logistics, and field workforce"],
                                icon: Users
                            },
                            {
                                category: "Leadership & Mid-Management",
                                roles: ["Team leads and managerial roles", "Function-specific leadership positions"],
                                icon: Briefcase
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

            {/* Flexible Hiring Models & Governance */}
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
                                    "Bulk & ramp-up hiring",
                                    "Multi-location expansion"
                                ].map((model, i) => (
                                    <div key={i} className="bg-slate-800/50 p-4 rounded-xl backdrop-blur-sm border border-slate-700/50">
                                        <p className="font-medium text-brand-200">{model}</p>
                                    </div>
                                ))}
                            </div>

                            <h2 className="text-3xl font-bold mb-8">Governance, Quality & Control</h2>
                            <ul className="space-y-3 mb-12">
                                {[
                                    "Defined hiring SLAs and timelines",
                                    "Role-specific screening standards",
                                    "Structured interview coordination",
                                    "Clear communication and reporting"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3 items-center text-slate-300">
                                        <Shield className="w-4 h-4 text-accent-500" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <p className="text-slate-400">This results in consistent hiring outcomes across teams and locations.</p>
                        </div>

                        {/* Industries & Why Choose */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-2xl font-bold mb-6">Industries We Serve</h2>
                                <div className="flex flex-wrap gap-3">
                                    {[
                                        "IT & Software Services", "Manufacturing & Engineering", "BFSI & Financial Services",
                                        "Retail & E-Commerce", "Healthcare & Pharmaceuticals", "Logistics & Supply Chain"
                                    ].map((ind, i) => (
                                        <span key={i} className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium hover:bg-white/20 transition-colors">
                                            {ind}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-white text-slate-900 p-8 rounded-3xl shadow-2xl">
                                <h3 className="text-2xl font-bold mb-6">Why Enterprises Choose CLink HR?</h3>
                                <ul className="space-y-4">
                                    {[
                                        "Centralized hiring ownership",
                                        "Scalable execution across locations",
                                        "Reduced internal recruitment load",
                                        "Predictable hiring outcomes",
                                        "Pan-India delivery capability"
                                    ].map((item, i) => (
                                        <li key={i} className="flex gap-3 items-center">
                                            <Building2 className="w-5 h-5 text-brand-600 shrink-0" />
                                            <span className="text-slate-700 font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="mt-10 text-slate-600 italic border-l-4 border-accent-500 pl-4">
                                    "We help enterprises hire at scale without losing control."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Who Should Use + CTA */}
            <section className="py-24 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-12">Who Should Use Enterprise Hiring Solutions?</h2>
                    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                        {[
                            "Large Organizations",
                            "Multi-City Operations",
                            "New Business Units",
                            "Consistency Seekers"
                        ].map((item, i) => (
                            <div key={i} className="bg-slate-50 p-6 rounded-2xl flex flex-col items-center justify-center text-center h-full">
                                <div className="w-2 h-2 bg-accent-500 rounded-full mb-4"></div>
                                <p className="font-medium text-slate-800">{item}</p>
                            </div>
                        ))}
                    </div>

                    <div className="bg-brand-50 rounded-[3rem] p-12 relative overflow-hidden">
                        <div className="relative z-10">
                            <h2 className="text-3xl font-bold text-brand-900 mb-6">Build Scalable Hiring Systems</h2>
                            <p className="text-xl text-brand-800/80 mb-8 max-w-3xl mx-auto">
                                CLink HR delivers enterprise hiring solutions that combine governance, scalability, and execution—supporting complex hiring at scale.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link to="/contact/hire-talent" className="bg-brand-600 text-white px-10 py-4 rounded-full font-bold hover:bg-brand-700 transition-all shadow-xl">
                                    Discuss Enterprise Hiring Requirements
                                </Link>
                                <Link to="/contact" className="bg-white text-brand-700 border border-brand-200 px-10 py-4 rounded-full font-bold hover:bg-brand-50 transition-all">
                                    Talk to Our Enterprise Team
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default EnterpriseHiringSolutions;
