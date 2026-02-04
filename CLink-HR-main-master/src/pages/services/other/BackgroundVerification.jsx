import React from 'react';
import { motion } from 'framer-motion';
import Testimonials from '../../../components/Testimonials';
import bgvHero from '../../../assets/services-img/Background Verification-hero.jpg';
import {
    ShieldCheck,
    FileCheck,
    Search,
    UserCheck,
    Lock,
    Zap,
    MapPin,
    GraduationCap,
    Briefcase,
    ArrowRight,
    CheckCircle,
    Building2,
    Users,
    AlertCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';

const BackgroundVerification = () => {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="bg-brand-950 py-32 relative overflow-hidden">
                <div className="absolute inset-0">
                    <motion.img
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        src={bgvHero}
                        alt="Background Verification"
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
                            Integrity & Safety
                        </span>
                        <h1 className="text-4xl md:text-8xl font-extrabold text-white mb-8 tracking-tight leading-[1.1]">
                            Background <br />
                            <span className="text-accent-500">Verification (BGV).</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-200 max-w-3xl font-light leading-relaxed">
                            CLink HR’s BGV services help organizations make <span className="text-white font-medium">informed and risk-aware</span> hiring decisions by validating candidate information through structured processes.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Intro Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 tracking-tight leading-tight">
                                Reliable Verification for <br /><span className="text-brand-600">Safer Hiring Decisions</span>
                            </h2>
                            <p className="text-xl text-slate-600 mb-10 leading-relaxed font-light">
                                In today’s hiring environment, background verification is essential to protect organizations from fraud, compliance risks, and reputational damage. We ensure verification is handled <span className="text-accent-600 font-bold">professionally, securely</span>, and with complete process transparency.
                            </p>
                            <div className="bg-slate-50 p-8 rounded-[2.5rem] border-l-4 border-accent-500 italic text-slate-700">
                                "CLink HR delivers structured background verification services that help organizations hire with trust, transparency, and confidence."
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-8">
                            <div className="bg-slate-950 p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-accent-500 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                                <h3 className="text-2xl font-bold mb-8">Why BGV Is Important</h3>
                                <div className="space-y-6">
                                    {[
                                        "Validate candidate credentials and claims",
                                        "Reduce hiring risks and workplace issues",
                                        "Protect brand reputation and client trust",
                                        "Support compliance and governance standards",
                                        "Build safer and more reliable teams"
                                    ].map((text, i) => (
                                        <div key={i} className="flex gap-4 items-start">
                                            <div className="w-6 h-6 rounded-full bg-accent-500 flex items-center justify-center shrink-0 mt-1">
                                                <CheckCircle className="w-4 h-4 text-white" />
                                            </div>
                                            <p className="text-slate-300 font-light">{text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Approach */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">Our BGV Approach</h2>
                        <p className="text-slate-600 mt-4 max-w-2xl mx-auto">Focusing on accuracy, confidentiality, and timely execution.</p>
                    </div>
                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { title: "Scope Definition", desc: "Clear verification parameters defined upfront.", icon: Search },
                            { title: "Candidate Consent", desc: "Strict adherence to data confidentiality & consent.", icon: Lock },
                            { title: "Coordination", desc: "Centralized tracking and execution process.", icon: Zap },
                            { title: "Structured Reporting", desc: "Clear outcomes and closure documentation.", icon: FileCheck }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm transition-all hover:shadow-xl hover:-translate-y-2 group">
                                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-accent-500 mb-6 group-hover:bg-accent-600 group-hover:text-white transition-all">
                                    <item.icon className="w-7 h-7" />
                                </div>
                                <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                                <p className="text-slate-500 text-sm font-light">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Scope Grid */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">Scope of Verification Services</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Employment Verification",
                                desc: "Previous employment confirmation, tenure validation & separation reasons.",
                                icon: Briefcase,
                                bg: "bg-blue-50",
                                text: "text-blue-600"
                            },
                            {
                                title: "Education Verification",
                                desc: "Degree authentication and course confirmation from institutes.",
                                icon: GraduationCap,
                                bg: "bg-purple-50",
                                text: "text-purple-600"
                            },
                            {
                                title: "Identity & Address",
                                desc: "Government ID verification and physical address verification.",
                                icon: MapPin,
                                bg: "bg-green-50",
                                text: "text-green-600"
                            },
                            {
                                title: "Criminal Record Check",
                                desc: "Court and police record checks with detailed risk flagging.",
                                icon: AlertCircle,
                                bg: "bg-red-50",
                                text: "text-red-600"
                            },
                            {
                                title: "Reference Checks",
                                desc: "Professional reference validation and role-based feedback.",
                                icon: UserCheck,
                                bg: "bg-orange-50",
                                text: "text-orange-600"
                            },
                            {
                                title: "Data Security",
                                desc: "Secure data handling, candidate consent, and confidential reporting.",
                                icon: Lock,
                                bg: "bg-brand-50",
                                text: "text-brand-600"
                            }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-6 p-10 bg-slate-50 rounded-[3rem] border border-slate-100 hover:bg-white hover:shadow-2xl transition-all group">
                                <div className={`w-16 h-16 ${item.bg} ${item.text} rounded-2xl flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform`}>
                                    <item.icon className="w-8 h-8" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 text-xl mb-3">{item.title}</h4>
                                    <p className="text-slate-600 text-sm font-light leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose & Who Should Use */}
            <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-20">
                        <div>
                            <h2 className="text-3xl font-bold mb-10 text-accent-500 uppercase tracking-widest text-sm">Why Choose CLink HR</h2>
                            <ul className="space-y-6">
                                {[
                                    "Structured and transparent verification process",
                                    "Centralized coordination and reporting",
                                    "Confidential and secure handling of data",
                                    "Scalable support for bulk or ongoing hiring",
                                    "Pan-India verification capability"
                                ].map((text, i) => (
                                    <li key={i} className="flex gap-4 items-center group">
                                        <div className="w-10 h-10 rounded-full bg-brand-900 border border-brand-800 flex items-center justify-center group-hover:bg-accent-500 group-hover:border-accent-500 transition-all shrink-0">
                                            <CheckCircle className="w-5 h-5 text-accent-500 group-hover:text-white" />
                                        </div>
                                        <span className="text-lg font-light text-slate-300">{text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold mb-10 text-accent-500 uppercase tracking-widest text-sm">Who Should Opt for BGV</h2>
                            <div className="grid gap-6">
                                {[
                                    { t: "Scaling Teams", d: "Organizations hiring at scale frequently." },
                                    { t: "Critical Roles", d: "Companies onboarding sensitive or senior roles." },
                                    { t: "Risk Management", d: "Enterprises strengthening risk management." },
                                    { t: "Governance", d: "Businesses formalizing hiring governance." }
                                ].map((item, i) => (
                                    <div key={i} className="p-8 bg-brand-900/50 border border-brand-800 rounded-3xl hover:bg-brand-900 transition-colors">
                                        <h4 className="font-bold text-white mb-1">{item.t}</h4>
                                        <p className="text-slate-400 text-sm font-light">{item.d}</p>
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
                    <h2 className="text-4xl md:text-7xl font-extrabold text-slate-900 mb-8 tracking-tighter">Make Safer <br /><span className="text-accent-500">Hiring Decisions.</span></h2>
                    <p className="text-xl text-slate-600 mb-12 leading-relaxed max-w-2xl mx-auto font-light">
                        Integrate background verification into your hiring process with CLink HR and reduce risk at every stage.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link to="/contact" className="bg-brand-600 text-white px-12 py-5 rounded-full font-bold hover:bg-brand-700 transition-all shadow-xl flex items-center gap-3">
                            Discuss Requirements <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link to="/services/other/hr-advisory" className="bg-slate-100 text-slate-900 px-12 py-5 rounded-full font-bold hover:bg-slate-200 transition-all">
                            Talk to Advisory Team
                        </Link>
                    </div>
                </div>
            </section>

            <Testimonials />
        </div>
    );
};

export default BackgroundVerification;
