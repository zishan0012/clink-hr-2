import React from 'react';
import { motion } from 'framer-motion';
import Testimonials from '../../../components/Testimonials';
import hrAuditHero from '../../../assets/services-img/HR Audit-hero.jpg';
import {
    FileSearch,
    AlertTriangle,
    CheckSquare,
    ShieldAlert,
    BookOpen,
    ArrowRight,
    Search,
    Zap,
    Scale,
    ShieldCheck,
    CheckCircle,
    FileCheck,
    ListChecks
} from 'lucide-react';
import { Link } from 'react-router-dom';

const HRAuditServices = () => {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="bg-brand-950 py-32 relative overflow-hidden">
                <div className="absolute inset-0">
                    <motion.img
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        src={hrAuditHero}
                        alt="HR Audit"
                        className="w-full h-full object-cover"
                        loading="eager"
                        fetchPriority="high"
                    />
                    <div className="absolute inset-0 bg-brand-950/50"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-brand-800/50 border border-brand-700 text-brand-200 text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-md">
                            Governance & Risk
                        </span>
                        <h1 className="text-4xl md:text-8xl font-extrabold text-white mb-8 tracking-tight leading-[1.1]">
                            HR Audit <br />
                            <span className="text-accent-500">& Compliance Services.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-200 max-w-3xl font-light leading-relaxed">
                            Strengthen HR <span className="text-white font-medium">Compliance, Processes, and Governance</span> through a structured and objective review of your people practices.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Intro / What is Audit */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-accent-600 font-bold uppercase tracking-widest text-sm mb-4 block">Strategic Review</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 tracking-tight leading-tight">
                                Evaluate, Improve, and <br /><span className="text-brand-600">Strengthen Operations</span>
                            </h2>
                            <p className="text-xl text-slate-600 mb-8 leading-relaxed font-light">
                                An HR audit provides clarity on what is working, what needs improvement, and where potential risks exist—allowing businesses to take corrective action before issues arise.
                            </p>
                            <p className="text-lg text-slate-500 font-light italic border-l-4 border-accent-500 pl-6 mb-10">
                                "CLink HR delivers HR audit services that provide clarity, compliance readiness, and actionable insights for stronger people management."
                            </p>
                        </div>
                        <div className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100 shadow-sm">
                            <h3 className="text-2xl font-bold text-slate-900 mb-8">What Is an HR Audit?</h3>
                            <div className="space-y-6">
                                {[
                                    { t: "Compliance", d: "Alignment with applicable laws and regulations." },
                                    { t: "Process Evaluation", d: "Alignment of HR processes with business objectives." },
                                    { t: "Documentation", d: "Proper documentation and record maintenance." },
                                    { t: "Fair Practices", d: "Consistent and fair people practices." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 group">
                                        <div className="w-6 h-6 rounded-full bg-accent-100 flex items-center justify-center shrink-0 mt-1 group-hover:bg-accent-500 transition-colors">
                                            <CheckCircle className="w-3.5 h-3.5 text-accent-600 group-hover:text-white" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 leading-none">{item.t}</h4>
                                            <p className="text-slate-500 text-sm font-light mt-1">{item.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Important & Our Approach */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-12 gap-12">
                        <div className="lg:col-span-5">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-10 tracking-tight">Why HR Audit <br />Is Important</h2>
                            <div className="grid gap-6">
                                {[
                                    "Identify compliance gaps and risks",
                                    "Improve HR process efficiency",
                                    "Reduce legal and regulatory exposure",
                                    "Strengthen internal controls and governance",
                                    "Enhance employee trust and transparency"
                                ].map((text, i) => (
                                    <div key={i} className="flex gap-4 items-center bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                                        <div className="w-10 h-10 bg-brand-50 rounded-xl flex items-center justify-center text-brand-600">
                                            <AlertTriangle className="w-5 h-5" />
                                        </div>
                                        <span className="font-bold text-slate-800 text-sm leading-tight">{text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="lg:col-span-7">
                            <div className="bg-slate-950 p-12 rounded-[3.5rem] text-white shadow-2xl relative overflow-hidden h-full">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-accent-500 rounded-full blur-[120px] opacity-10"></div>
                                <h3 className="text-2xl font-bold mb-10 flex items-center gap-3 italic">
                                    <Zap className="w-6 h-6 text-accent-500" />
                                    Our Audit Approach
                                </h3>
                                <div className="space-y-8">
                                    {[
                                        { step: "01", title: "Scope Definition", desc: "Understanding business size, industry, and workforce model." },
                                        { step: "02", title: "Document Review", desc: "Policies, records, and HR documentation assessment." },
                                        { step: "03", title: "Process Evaluation", desc: "Review of HR practices and workflows." },
                                        { step: "04", title: "Compliance Assessment", desc: "Alignment with statutory and regulatory requirements." },
                                        { step: "05", title: "Findings & Recommendations", desc: "Clear gap analysis and action points." }
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-6 relative group">
                                            <div className="text-3xl font-black text-white/5 absolute -left-4 -top-2 group-hover:text-accent-500/20 transition-colors">{item.step}</div>
                                            <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center shrink-0 font-bold group-hover:bg-accent-500 group-hover:border-accent-500 transition-all text-xs z-10">{i + 1}</div>
                                            <div className="z-10">
                                                <h4 className="font-bold text-lg leading-none mb-2">{item.title}</h4>
                                                <p className="text-slate-400 text-sm font-light leading-relaxed">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Scope Grid */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-brand-600 font-bold uppercase tracking-widest text-sm mb-4 block">Audit Parameters</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">Scope of HR Audit Services</h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                title: "Policy & Docs",
                                items: ["Employee handbook review", "Offer letters & contracts", "Employee personal files"],
                                icon: BookOpen
                            },
                            {
                                title: "Statutory",
                                items: ["Payroll alignment", "Compliance readiness", "Risk identification"],
                                icon: ShieldAlert
                            },
                            {
                                title: "Processes",
                                items: ["Recruitment/Onboarding", "Performance systems", "Leave/Exit processes"],
                                icon: CheckSquare
                            },
                            {
                                title: "Data & Records",
                                items: ["Employee data accuracy", "Record maintenance", "Confidentiality focus"],
                                icon: FileSearch
                            }
                        ].map((item, i) => (
                            <div key={i} className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100 hover:bg-white hover:shadow-2xl transition-all group">
                                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-accent-500 mb-8 border border-slate-100 shadow-sm group-hover:bg-accent-600 group-hover:text-white transition-all">
                                    <item.icon className="w-7 h-7" />
                                </div>
                                <h4 className="font-bold text-slate-900 text-lg mb-6 leading-tight">{item.title}</h4>
                                <ul className="space-y-3">
                                    {item.items.map((li, idx) => (
                                        <li key={idx} className="flex gap-2 items-start text-sm text-slate-500 font-light">
                                            <div className="w-1.5 h-1.5 rounded-full bg-accent-400 mt-1.5 shrink-0" />
                                            {li}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Deliverables & Choice */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-20">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-10 tracking-tight">Audit Deliverables</h2>
                            <div className="bg-white p-10 rounded-[3rem] shadow-xl border border-slate-100">
                                <p className="text-slate-500 mb-8 font-light italic">"Reports are designed to be clear, actionable, and management-friendly."</p>
                                <div className="grid gap-6">
                                    {[
                                        { t: "Detailed Audit Report", d: "Comprehensive findings from the audit cycle." },
                                        { t: "Gap Analysis", d: "Clear identifier for process & compliance gaps." },
                                        { t: "Risk Summary", d: "Critical markers for legal & regulatory risk." },
                                        { t: "Action Roadmap", d: "Practical recommendations & corrective actions." }
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100 group hover:border-accent-400 transition-colors">
                                            <FileCheck className="w-8 h-8 text-accent-500 shrink-0" />
                                            <div>
                                                <h4 className="font-bold text-slate-900 leading-none mb-1">{item.t}</h4>
                                                <p className="text-slate-500 text-xs font-light">{item.d}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-10 tracking-tight">Why Choose CLink HR</h2>
                            <div className="space-y-6">
                                {[
                                    { t: "Business Aligned", d: "An approach focused on improvement, not fault-finding." },
                                    { t: "Confidentiality", d: "Controlled access and ethical audit practices." },
                                    { t: "Actionable Insights", d: "Clear reporting that leads to real process changes." },
                                    { t: "Pan-India Reach", d: "Capability to audit multi-location distributed workforces." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-6 p-8 bg-white rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden group">
                                        <div className="absolute top-0 right-0 w-24 h-24 bg-accent-50 rounded-bl-full group-hover:bg-accent-500 transition-colors -mr-10 -mt-10 opacity-30 group-hover:opacity-10"></div>
                                        <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-accent-600 transition-colors group-hover:bg-accent-600 group-hover:text-white shrink-0">
                                            <ListChecks className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 text-lg mb-1">{item.t}</h4>
                                            <p className="text-slate-500 text-sm font-light leading-relaxed">{item.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-32 bg-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl md:text-7xl font-extrabold text-slate-900 mb-8 tracking-tighter">Strengthen HR Governance <br /><span className="text-accent-500">With Confidence.</span></h2>
                    <p className="text-xl text-slate-600 mb-12 leading-relaxed max-w-2xl mx-auto font-light">
                        Whether you want to review current HR practices or prepare for future growth, our Audit Services help you build stronger, compliant operations.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link to="/contact" className="bg-brand-600 text-white px-12 py-5 rounded-full font-bold hover:bg-brand-700 transition-all shadow-xl flex items-center gap-3">
                            Request an HR Audit <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link to="/contact" className="bg-slate-100 text-slate-900 px-12 py-5 rounded-full font-bold hover:bg-slate-200 transition-all">
                            Talk to Advisory Team
                        </Link>
                    </div>
                </div>
            </section>

            <Testimonials />
        </div>
    );
};

export default HRAuditServices;
