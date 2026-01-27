import React from 'react';
import { motion } from 'framer-motion';
import {
    Briefcase,
    Clock,
    Users,
    CheckCircle,
    Layers,
    ShieldCheck,
    ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ContractStaffing = () => {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="bg-brand-950 py-32 relative overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1484&q=80"
                        alt="Contract Staffing"
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
                            Flexible Workforce
                        </span>
                        <h1 className="text-4xl md:text-8xl font-extrabold text-white mb-8 tracking-tight leading-[1.1]">
                            Flexible <br />
                            <span className="text-accent-500">Contract Staffing</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-200 leading-relaxed font-light mb-10 max-w-2xl">
                            Agile <span className="text-white font-medium">Workforce Solutions</span> for dynamic business needs. Scale with confidence without operational complexity.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/contact/hire-talent" className="bg-brand-600 text-white px-8 py-4 rounded-full font-bold hover:bg-brand-500 transition-all shadow-lg flex items-center justify-center gap-2">
                                Discuss Requirements <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Approach Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="lg:pr-12">
                                <span className="text-accent-600 font-bold uppercase tracking-widest text-sm mb-4 block">Business Agility</span>
                                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">Why <span className="text-brand-600">Contract Staffing</span> <br />Matters Today</h2>
                                <p className="text-xl text-slate-600 mb-10 leading-relaxed font-light">
                                    Modern businesses need agility. Our staffing solutions allow you to respond quickly to <span className="text-accent-600 font-bold">changing workloads</span> while maintaining cost control.
                                </p>
                                <div className="grid grid-cols-2 gap-6 mt-8">
                                    {[
                                        { label: "Rapid Deployment", icon: Clock },
                                        { label: "Cost Control", icon: Layers },
                                        { label: "Specialized Skills", icon: Users },
                                        { label: "Compliance Ready", icon: ShieldCheck }
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm hover:border-accent-200 transition-colors group">
                                            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-accent-500 shadow-sm shrink-0 group-hover:bg-accent-600 group-hover:text-white transition-colors">
                                                <item.icon className="w-6 h-6" />
                                            </div>
                                            <span className="font-bold text-slate-800 text-sm">{item.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-brand-200 rounded-[2rem] -rotate-3 opacity-30"></div>
                            <img
                                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80"
                                alt="Flexible Workforce"
                                className="relative rounded-[2rem] shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Cover */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-brand-600 font-bold uppercase tracking-widest text-sm">Service Scope</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">What We Cover in Contract Staffing</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            "Contract and temporary workforce deployment",
                            "Project-based staffing support",
                            "Third-party payroll coordination",
                            "Workforce documentation & process support",
                            "Attendance, tenure, and continuity tracking",
                            "Centralized reporting and communication"
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-4">
                                <CheckCircle className="w-6 h-6 text-brand-500 shrink-0 mt-1" />
                                <p className="font-medium text-slate-700">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-24 bg-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-slate-900 mb-6">Start Building a Flexible Workforce</h2>
                    <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                        "CLink HR enables flexible workforce scaling through structured, accountable, and compliance-ready contract staffing solutions."
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contact/hire-talent" className="bg-brand-600 text-white px-10 py-4 rounded-full font-bold hover:bg-brand-700 transition-all shadow-xl">
                            Start Staffing Now
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContractStaffing;
