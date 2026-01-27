import React from 'react';
import { motion } from 'framer-motion';
import {
    Truck,
    Package,
    MapPin,
    Navigation,
    CheckCircle,
    ArrowRight,
    Users,
    ShieldCheck,
    BarChart3,
    Briefcase
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Logistics = () => {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="bg-brand-950 py-32 relative overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                        alt="Logistics & Supply Chain"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-brand-950/70"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl"
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-brand-800/50 border border-brand-700 text-brand-200 text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-md">
                            Supply Chain Vertical
                        </span>
                        <h1 className="text-4xl md:text-8xl font-extrabold text-white mb-8 tracking-tight leading-[1.1]">
                            Logistics & <br />
                            <span className="text-accent-500">Supply Chain</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-200 leading-relaxed font-light mb-10 max-w-2xl">
                            Optimizing your product movement with <span className="text-white font-medium">specialized workforce solutions</span> for warehousing and transportation.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/contact/hire-talent" className="bg-brand-600 text-white px-8 py-4 rounded-full font-bold hover:bg-brand-500 transition-all shadow-lg flex items-center justify-center gap-2">
                                Hire Logistics Talent <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Logistics Expertise */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="lg:pr-12">
                            <span className="text-accent-600 font-bold uppercase tracking-widest text-sm mb-4 block">Operational Continuity</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">Moving at the <br /><span className="text-brand-600">Speed of Business</span></h2>
                            <p className="text-xl text-slate-600 mb-10 leading-relaxed font-light">
                                Success in logistics is defined by <span className="text-accent-600 font-bold">accuracy and timing</span>. Our recruitment focuses on finding individuals who understand the criticality of the supply chain backbone.
                            </p>
                            <div className="grid grid-cols-2 gap-6 mt-8">
                                {[
                                    { label: "Warehousing Ops", icon: Package },
                                    { label: "Fleet Management", icon: Truck },
                                    { label: "Inventory Control", icon: BarChart3 },
                                    { label: "Last-mile Delivery", icon: MapPin }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm hover:border-accent-200 transition-colors group">
                                        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-accent-500 shadow-sm shrink-0 group-hover:bg-accent-600 group-hover:text-white transition-colors">
                                            <item.icon className="w-6 h-6" />
                                        </div>
                                        <span className="font-bold text-slate-800 text-sm leading-tight">{item.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-brand-200 rounded-[2.5rem] -rotate-3 opacity-30"></div>
                            <img
                                src="https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                                alt="Warehouse Automation"
                                className="relative rounded-[2.5rem] shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Role Categories */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Supply Chain Roles</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "Warehouse Management", desc: "Warehouse Managers, Inventory Leads, Floor Supervisors", icon: Package },
                            { title: "Fleet & Distribution", desc: "Fleet Managers, Route Planners, Dispatch Coordinators", icon: Navigation },
                            { title: "Supply Chain Strategy", desc: "Procurement Officers, SCM Analysts, Demand Planners", icon: BarChart3 },
                            { title: "Export & Import", icon: Globe, desc: "Documentation Specialists, Customs Coordinators" },
                            { title: "Technical Support", icon: Users, desc: "Maintenance Techs, Heavy Machinery Operators" },
                            { title: "Leadership Roles", icon: Briefcase, desc: "Logistics Directors, VP Operations, Supply Chain Heads" }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all group">
                                <div className="w-14 h-14 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-600 mb-6 group-hover:bg-accent-500 group-hover:text-white transition-all">
                                    <item.icon className="w-7 h-7" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                                <p className="text-slate-600 leading-relaxed font-light">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-24 bg-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 tracking-tight italic">Streamline Your <span className="text-accent-500">Operation.</span></h2>
                    <p className="text-xl text-slate-600 mb-12 leading-relaxed font-light">
                        "Logistics is the lifeline of commerce. Hire the people who keep it moving."
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link to="/contact/hire-talent" className="bg-brand-600 text-white px-10 py-4 rounded-full font-bold hover:bg-brand-700 transition-all shadow-xl">
                            Request Logistics Talent
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Logistics;
