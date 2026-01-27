import React from 'react';
import { motion } from 'framer-motion';
import {
    Activity,
    ShieldCheck,
    FileCheck,
    AlertCircle,
    UserCheck,
    Search,
    Clock,
    BarChart3,
    CheckCircle,
    ArrowRight,
    Lock
} from 'lucide-react';
import { Link } from 'react-router-dom';

const StatutoryCompliance = () => {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="bg-brand-950 py-32 relative overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                        alt="Compliance and Regulation"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-brand-950/80 mix-blend-multiply"></div>
                    <div className="absolute inset-0 bg-gradient-to-tr from-brand-950 via-brand-950/40 to-transparent"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="inline-block py-1 px-3 rounded-full bg-brand-600/20 border border-brand-500/30 text-brand-300 text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-md">
                                Workforce Compliance Support
                            </span>
                            <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-8 leading-[1.1] tracking-tight">
                                Compliance-Ready <br />
                                <span className="text-accent-500">Workforce Operations</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-slate-200 leading-relaxed font-light mb-10 max-w-2xl">
                                Stay aligned with workforce regulations while reducing <span className="text-white font-medium text-accent-400">operational risk</span> and administrative burden through centralized control.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link to="/contact" className="bg-brand-600 text-white px-8 py-4 rounded-full font-bold hover:bg-brand-500 transition-all shadow-lg flex items-center justify-center gap-2 text-center">
                                    Discuss Compliance Requirements <ArrowRight className="w-5 h-5" />
                                </Link>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative block"
                        >
                            <div className="absolute inset-0 bg-brand-400/20 rounded-full blur-3xl scale-125"></div>
                            <img
                                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                                alt="Compliance Documentation"
                                className="relative z-10 rounded-[2.5rem] shadow-2xl border border-white/10 w-full object-cover h-[400px]"
                            />
                            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl z-20 flex items-center gap-3 border border-slate-100">
                                <div className="w-10 h-10 bg-brand-50 rounded-full flex items-center justify-center text-brand-600">
                                    <ShieldCheck className="w-6 h-6" />
                                </div>
                                <div className="pr-4">
                                    <p className="text-[10px] text-slate-500 uppercase font-bold tracking-wider leading-none">Risk Status</p>
                                    <p className="text-sm font-bold text-slate-900">Mitigated</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Intro Section */}
            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <p className="text-lg text-slate-600 leading-relaxed font-light">
                        Compliance is not just a legal requirement—it’s a critical part of business continuity, employee trust, and risk management. We provide structured coordination, documentation readiness, and ongoing compliance support under a single accountable framework.
                    </p>
                </div>
            </section>

            {/* Why It Matters */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Workforce Compliance Matters</h2>
                            <p className="text-slate-600 mb-10 leading-relaxed font-light">
                                Non-compliance can lead to serious risks including legal penalties, operational disruptions, and reputational damage. CLink HR helps organizations maintain confidence by ensuring records and reporting are handled transparently.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {[
                                    { label: "Legal penalties and notices", icon: AlertCircle },
                                    { label: "Operational disruptions", icon: Activity },
                                    { label: "Reputational risk", icon: Search },
                                    { label: "Employee dissatisfaction", icon: UserCheck }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-accent-200 transition-all group">
                                        <div className="w-12 h-12 bg-accent-50 rounded-xl flex items-center justify-center text-accent-600 shrink-0 group-hover:bg-accent-600 group-hover:text-white transition-colors">
                                            <item.icon className="w-6 h-6" />
                                        </div>
                                        <span className="font-bold text-slate-800 text-base leading-tight">{item.label}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="absolute -inset-4 bg-brand-100 rounded-[3rem] rotate-2"></div>
                            <img
                                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80"
                                alt="Legal Compliance"
                                className="relative rounded-[2.5rem] shadow-2xl h-[450px] w-full object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Approach Section */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-accent-600 font-bold uppercase tracking-widest text-sm mb-4 block">Our Approach</span>
                        <h2 className="text-3xl md:text-6xl font-extrabold text-slate-900 mt-2 leading-tight">Prevention, Preparedness <br />& <span className="text-brand-600">Governance</span></h2>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { title: "Centralized Coordination", desc: "One point of accountability for all compliance tasks.", icon: ShieldCheck },
                            { title: "Process Alignment", desc: "Documentation support tailored to workforce models.", icon: FileCheck },
                            { title: "Ongoing Tracking", desc: "Systematic monitoring and timely follow-ups.", icon: Clock },
                            { title: "Escalation Framework", desc: "Clear resolution mechanisms for any compliance issues.", icon: BarChart3 }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition-all group"
                            >
                                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-brand-600 mb-6 shadow-sm group-hover:bg-brand-600 group-hover:text-white transition-colors">
                                    <item.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Scope of Support */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-brand-600 font-bold uppercase tracking-widest text-sm">Service Scope</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">Core Compliance Pillars</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            {
                                title: "Statutory Compliance Coordination",
                                points: [
                                    "Alignment of payroll processes with applicable regulations",
                                    "Support for statutory deductions and filings",
                                    "Record maintenance and documentation readiness"
                                ],
                                icon: ShieldCheck
                            },
                            {
                                title: "Documentation & Records",
                                points: [
                                    "Workforce documentation coordination",
                                    "Employee records and payroll data support",
                                    "Audit-ready documentation management"
                                ],
                                icon: FileCheck
                            },
                            {
                                title: "Ongoing Monitoring",
                                points: [
                                    "Regular compliance tracking",
                                    "Timely coordination for updates or changes",
                                    "Issue identification and resolution support"
                                ],
                                icon: Clock
                            },
                            {
                                title: "Audit & Inspection Support",
                                points: [
                                    "Documentation preparation and review",
                                    "Coordination during audits or inspections",
                                    "Reporting and clarification support"
                                ],
                                icon: Search
                            }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center text-brand-600">
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900">{item.title}</h3>
                                </div>
                                <ul className="space-y-4">
                                    {item.points.map((point, idx) => (
                                        <li key={idx} className="flex gap-3 text-slate-600 font-light">
                                            <CheckCircle className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Data Security Section */}
            <section className="py-24 bg-brand-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-brand-400 mb-8 backdrop-blur-md border border-white/20">
                                <Lock className="w-8 h-8" />
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">Data Security & <br />Confidentiality</h2>
                            <p className="text-xl text-brand-100 font-light leading-relaxed mb-10">
                                Compliance activities involve sensitive workforce data. We ensure your information stays protected through defined secure processes.
                            </p>
                            <div className="space-y-4">
                                {[
                                    "Controlled access to all sensitive documents",
                                    "Secure handling of employee and payroll data",
                                    "Defined processes for data sharing and storage"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10">
                                        <CheckCircle className="w-6 h-6 text-brand-400" />
                                        <span className="font-medium text-lg text-brand-50">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative lg:block hidden"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                                alt="Security Operations"
                                className="rounded-[3rem] shadow-2xl border border-white/10"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Industries Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900">Industries We Support</h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            "IT & Software", "Manufacturing", "Healthcare", "Retail & E-Commerce",
                            "Logistics & Supply Chain", "BFSI", "Education", "Startups"
                        ].map((ind, i) => (
                            <div key={i} className="p-6 bg-slate-50 rounded-2xl text-center font-bold text-slate-700 border border-slate-100 hover:bg-brand-50 hover:text-brand-600 transition-all cursor-default">
                                {ind}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Highlight Statement */}
            <section className="py-32 bg-slate-50">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="relative p-12 bg-white rounded-[3rem] shadow-xl border border-slate-100 overflow-hidden text-center">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-50 rounded-bl-full opacity-50"></div>
                        <div className="relative z-10">
                            <span className="text-6xl text-brand-200 font-serif absolute -top-4 -left-4">"</span>
                            <blockquote className="text-2xl md:text-3xl font-light text-slate-700 italic leading-relaxed">
                                CLink HR delivers workforce compliance support that combines structure, transparency, and centralized accountability—helping organizations stay compliant with confidence.
                            </blockquote>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-24 bg-white">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="bg-brand-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Stay Compliant with Confidence</h2>
                            <p className="text-xl text-brand-100 mb-10 leading-relaxed max-w-2xl mx-auto font-light">
                                Let CLink HR manage workforce compliance coordination—so your business stays protected, prepared, and focused on growth.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link to="/contact" className="bg-white text-brand-900 px-10 py-5 rounded-full font-bold hover:bg-brand-50 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-2">
                                    Discuss Compliance Requirements <ArrowRight className="w-5 h-5" />
                                </Link>
                                <Link to="/contact" className="bg-transparent border border-white/30 text-white px-10 py-5 rounded-full font-bold hover:bg-white/10 transition-all">
                                    Talk to Our HR Compliance Team
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default StatutoryCompliance;
