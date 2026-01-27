import React from 'react';
import { motion } from 'framer-motion';
import {
    Users,
    ClipboardCheck,
    Briefcase,
    Truck,
    Factory,
    ShoppingCart,
    Clock,
    MapPin,
    CheckCircle,
    ArrowRight,
    TrendingUp,
    Shield
} from 'lucide-react';
import { Link } from 'react-router-dom';

const NonITHiringSolutions = () => {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="bg-brand-950 py-32 relative overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80"
                        alt="Non-IT Hiring Team"
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
                            Non-IT Hiring Solutions
                        </span>
                        <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-8 tracking-tight leading-[1.1]">
                            Reliable Non-IT Hiring for <br />
                            <span className="text-accent-500">Business-Critical</span> Roles
                        </h1>
                        <p className="text-xl text-slate-300 leading-relaxed font-light mb-10 max-w-2xl">
                            CLink HR’s Non-IT Hiring Solutions help organizations build strong operational, sales, and support teams across functions and locations. We support businesses with structured, scalable hiring solutions that ensure continuity, speed, and consistency—without increasing internal recruitment workload.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/contact/hire-talent" className="bg-brand-600 text-white px-8 py-4 rounded-full font-bold hover:bg-brand-500 transition-all shadow-lg flex items-center justify-center gap-2">
                                Discuss Non-IT Hiring Requirements <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Why Non-IT Hiring Needs Structure */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Why Non-IT Hiring Needs <span className="text-brand-600">Structure</span></h2>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">
                            Non-IT roles often involve unique challenges that require a structured approach. Without it, businesses face delays, attrition, and inconsistent outcomes.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: "High Volume", desc: "Managing high-volume or continuous hiring needs efficiently.", icon: Users },
                            { title: "Multi-Location", desc: "Coordinating workforce requirements across multiple locations.", icon: MapPin },
                            { title: "Role-Specific Screening", desc: "Conducting thorough availability checks and role-specific vetting.", icon: ClipboardCheck },
                            { title: "Tight Timelines", desc: "Meeting tight joining timelines to ensure operational continuity.", icon: Clock }
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

            {/* Our Non-IT Hiring Approach */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-accent-600 font-bold uppercase tracking-widest text-sm mb-4 block">Our Process</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Our Non-IT Hiring Approach</h2>
                            <p className="text-xl text-slate-600 mb-8 font-light">
                                Our approach focuses on speed, relevance, and execution control. We bring process-driven coordination to non-IT recruitment.
                            </p>
                            <div className="space-y-6">
                                {[
                                    "Centralized requirement understanding",
                                    "Location-specific candidate sourcing",
                                    "Structured screening and shortlisting",
                                    "Transparent hiring tracking and reporting"
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
                                "Clients experience one-point coordination, while hiring execution scales efficiently in the background."
                            </p>
                        </div>
                        <div className="relative">
                            <div className="absolute -inset-4 bg-brand-200/30 rounded-3xl -rotate-2"></div>
                            <img
                                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                                alt="Non-IT Approach"
                                className="relative rounded-2xl shadow-2xl w-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Roles We Support Under Non-IT Hiring */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Roles We Support</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">From frontline roles to mid-level professionals, we help organizations hire talent that keeps daily operations running smoothly.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                category: "Sales & Customer-Facing",
                                roles: ["Sales executives and managers", "Relationship and account management roles", "Customer support and service executives"],
                                icon: TrendingUp
                            },
                            {
                                category: "Operations & Support",
                                roles: ["Operations executives and supervisors", "Back-office and administrative staff", "Process coordinators and team leads"],
                                icon: Briefcase
                            },
                            {
                                category: "Manufacturing & Industrial",
                                roles: ["Shop-floor and production staff", "Quality and maintenance roles", "Supervisors and plant support staff"],
                                icon: Factory
                            },
                            {
                                category: "Logistics & Field",
                                roles: ["Warehouse and logistics staff", "Delivery and field executives", "Supply chain support roles"],
                                icon: Truck
                            }
                        ].map((item, i) => (
                            <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-brand-200 transition-colors group">
                                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-brand-600 shadow-sm mb-6 group-hover:bg-brand-600 group-hover:text-white transition-all">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <h3 className="font-bold text-slate-900 text-lg mb-4 min-h-[3.5rem]">{item.category}</h3>
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

                        {/* Flexible Hiring Models */}
                        <div>
                            <h2 className="text-3xl font-bold mb-8">Flexible Hiring Models</h2>
                            <div className="grid sm:grid-cols-2 gap-4 mb-8">
                                {[
                                    "Permanent hiring",
                                    "Contract and temporary staffing",
                                    "Bulk and volume hiring",
                                    "Location-specific workforce requirements"
                                ].map((model, i) => (
                                    <div key={i} className="bg-slate-800/50 p-4 rounded-xl backdrop-blur-sm border border-slate-700/50">
                                        <p className="font-medium text-brand-200">{model}</p>
                                    </div>
                                ))}
                            </div>
                            <p className="text-slate-400 mb-12">This flexibility helps businesses align hiring with operational demand and business cycles.</p>

                            <h2 className="text-3xl font-bold mb-8">Industries We Serve</h2>
                            <div className="flex flex-wrap gap-3">
                                {[
                                    "Manufacturing & Engineering", "Retail & E-Commerce", "Logistics & Supply Chain",
                                    "BFSI & Financial Services", "Healthcare & Facilities", "Hospitality & Services", "Startups & Enterprises"
                                ].map((ind, i) => (
                                    <span key={i} className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium hover:bg-white/20 transition-colors cursor-default">
                                        {ind}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Why Choose & Quality */}
                        <div className="bg-white text-slate-900 p-8 rounded-3xl shadow-2xl">
                            <h3 className="text-2xl font-bold mb-6">Why Choose CLink HR?</h3>
                            <ul className="space-y-4 mb-8">
                                {[
                                    "Faster turnaround for critical roles",
                                    "Centralized hiring coordination",
                                    "Scalable delivery across locations",
                                    "Reduced recruitment overhead",
                                    "Consistent hiring standards"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3 items-center">
                                        <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                                        <span className="text-slate-700 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="mt-10 text-slate-600 italic border-l-4 border-accent-500 pl-4">
                                "We help organizations maintain operational strength through reliable hiring."
                            </p>
                            <div className="border-t border-slate-100 pt-8">
                                <h3 className="text-xl font-bold mb-4">Quality & Reliability at Scale</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    {["Role-appropriate candidate screening", "Location readiness & availability checks", "Timely shortlisting & follow-ups", "Clear communication & Reporting"].map((q, i) => (
                                        <div key={i} className="text-sm text-slate-600 bg-slate-50 p-3 rounded-lg text-center">
                                            {q}
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* Who Can Benefit + CTA */}
            <section className="py-24 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-12">Who Can Benefit?</h2>
                    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                        {[
                            "Continuous Hiring Needs",
                            "Distributed Workforce",
                            "Scaling Operations",
                            "Cross-Region Consistency"
                        ].map((item, i) => (
                            <div key={i} className="bg-slate-50 p-6 rounded-2xl flex flex-col items-center justify-center text-center h-full">
                                <div className="w-2 h-2 bg-accent-500 rounded-full mb-4"></div>
                                <p className="font-medium text-slate-800">{item}</p>
                            </div>
                        ))}
                    </div>

                    <div className="bg-brand-50 rounded-[3rem] p-12 relative overflow-hidden">
                        <div className="relative z-10">
                            <h2 className="text-3xl font-bold text-brand-900 mb-6">Strengthen Operations with the Right Talent</h2>
                            <p className="text-xl text-brand-800/80 mb-8 max-w-3xl mx-auto">
                                CLink HR delivers non-IT hiring solutions that combine speed, structure, and reliability—supporting business operations at scale.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link to="/contact/hire-talent" className="bg-brand-600 text-white px-10 py-4 rounded-full font-bold hover:bg-brand-700 transition-all shadow-xl">
                                    Discuss Non-IT Hiring Requirements
                                </Link>
                                <Link to="/contact" className="bg-white text-brand-700 border border-brand-200 px-10 py-4 rounded-full font-bold hover:bg-brand-50 transition-all">
                                    Talk to Our Hiring Solutions Team
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default NonITHiringSolutions;
