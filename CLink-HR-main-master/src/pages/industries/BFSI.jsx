import React from 'react';
import { motion } from 'framer-motion';
import {
    Building2,
    Coins,
    ShieldCheck,
    TrendingUp,
    CheckCircle,
    ArrowRight,
    Users,
    Zap,
    Briefcase,
    PieChart
} from 'lucide-react';
import { Link } from 'react-router-dom';

const BFSI = () => {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="bg-brand-950 py-32 relative overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                        alt="BFSI"
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
                            Financial Services Vertical
                        </span>
                        <h1 className="text-4xl md:text-8xl font-extrabold text-white mb-8 tracking-tight leading-[1.1]">
                            BFSI <br />
                            <span className="text-accent-500">Talent Solutions</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-200 leading-relaxed font-light mb-10 max-w-2xl">
                            Specialized recruitment for <span className="text-white font-medium">Banking, Insurance, and Fintech</span> sectors. Hire the experts who manage and grow capital.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/contact/hire-talent" className="bg-brand-600 text-white px-8 py-4 rounded-full font-bold hover:bg-brand-500 transition-all shadow-lg flex items-center justify-center gap-2">
                                Hire Finance Talent <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* BFSI Expertise */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="lg:pr-12">
                            <span className="text-accent-600 font-bold uppercase tracking-widest text-sm mb-4 block">Process Integrity</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">Trust and Precision in <br /><span className="text-brand-600">Financial Hiring</span></h2>
                            <p className="text-xl text-slate-600 mb-10 leading-relaxed font-light">
                                In BFSI, <span className="text-accent-600 font-bold">compliance and integrity</span> are the foundations of success. We source professionals who blend deep domain expertise with high ethical standards.
                            </p>
                            <div className="grid grid-cols-2 gap-6 mt-8">
                                {[
                                    { label: "Retail Banking", icon: Building2 },
                                    { label: "Risk & Compliance", icon: ShieldCheck },
                                    { label: "Wealth Mgmt", icon: Coins },
                                    { label: "Fintech Growth", icon: TrendingUp }
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
                            <div className="absolute inset-0 bg-brand-200 rounded-[2.5rem] rotate-3 opacity-30"></div>
                            <img
                                src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                                alt="Financial Analysts"
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
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Focus BFSI Roles</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "Retail & Corporate Banking", desc: "Relationship Managers, Branch Managers, Credit Officers", icon: Building2 },
                            { title: "Investment & Wealth", desc: "Portfolio Managers, Investment Analysts, Advisors", icon: Coins },
                            { title: "Risk & Compliance", desc: "Risk Managers, Compliance Officers, Audit Leads", icon: ShieldCheck },
                            { title: "Insurance Verticals", icon: Briefcase, desc: "Underwriters, Actuaries, Claims Managers, Agency Leads" },
                            { title: "Fintech Engineering", icon: Zap, desc: "Payment Engineers, Blockchain Devs, Digital Product Leads" },
                            { title: "Strategic Analysis", icon: PieChart, desc: "Financial Analysts, FP&A Leads, M&A Associates" }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all group flex flex-col h-full">
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
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 tracking-tight italic">Strengthening Your <span className="text-accent-500">Financial Engine.</span></h2>
                    <p className="text-xl text-slate-600 mb-12 leading-relaxed font-light">
                        "In the world of finance, talent is the most valuable currency. Hire the best with CLink HR."
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link to="/contact/hire-talent" className="bg-brand-600 text-white px-10 py-4 rounded-full font-bold hover:bg-brand-700 transition-all shadow-xl">
                            Request Finance Talent
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BFSI;
