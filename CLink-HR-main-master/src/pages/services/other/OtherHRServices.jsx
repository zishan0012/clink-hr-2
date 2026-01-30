import React from 'react';
import { motion } from 'framer-motion';
import Testimonials from '../../../components/Testimonials';
import {
    FileCheck,
    BookOpen,
    ShieldCheck,
    Search,
    ClipboardList,
    AlertCircle,
    CheckCircle,
    ArrowRight,
    Lock,
    Users,
    Building2,
    Zap,
    Scale
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ title, description, link, icon: Icon }) => (
    <motion.div
        whileHover={{ y: -10 }}
        className="bg-white rounded-[3rem] p-10 border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-300 group relative overflow-hidden flex flex-col h-full"
    >
        <div className="relative z-10 flex-grow">
            <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-accent-500 shadow-sm mb-8 border border-slate-50 group-hover:bg-accent-600 group-hover:text-white transition-all">
                <Icon className="w-8 h-8" strokeWidth={1.5} />
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-4">{title}</h3>
            <p className="text-slate-600 mb-8 leading-relaxed font-light">
                {description}
            </p>
        </div>

        <div className="relative z-10 mt-auto">
            <Link to={link || "#"} className="inline-flex items-center gap-2 text-brand-600 font-bold hover:text-brand-800 transition-colors group/link">
                Explore {title} <ArrowRight className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" />
            </Link>
        </div>
    </motion.div>
);

const OtherHRServices = () => {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="bg-brand-950 py-32 relative overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                        alt="Other HR Services"
                        className="w-full h-full object-cover"
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
                            Specialized Support
                        </span>
                        <h1 className="text-4xl md:text-8xl font-extrabold text-white mb-8 tracking-tight leading-[1.1]">
                            Other HR <br />
                            <span className="text-accent-500">Services.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-200 max-w-3xl font-light leading-relaxed">
                            Specialized HR Services to <span className="text-white font-medium">Strengthen Your Workforce Foundation</span> and support compliant, well-governed operations.
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
                                Beyond Recruitment <br /><span className="text-brand-600">& Payroll</span>
                            </h2>
                            <p className="text-xl text-slate-600 mb-8 leading-relaxed font-light">
                                CLink HR offers a range of specialized HR services designed to address critical needs that often require expert handling, structured processes, and reliable coordination—without increasing internal workload.
                            </p>
                            <div className="bg-slate-50 p-8 rounded-[2.5rem] border-l-4 border-accent-500 italic text-slate-700 font-light">
                                "CLink HR delivers specialized HR services that bring structure, compliance, and confidence to workforce management."
                            </div>
                        </div>
                        <div className="bg-slate-950 p-12 rounded-[4rem] text-white shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-500 rounded-full blur-[100px] opacity-10"></div>
                            <h3 className="text-2xl font-bold mb-10 text-accent-500 uppercase tracking-widest text-xs">Why Other HR Services Matter</h3>
                            <p className="text-slate-400 mb-10 font-light">As businesses grow, HR challenges go beyond hiring and payroll. Organizations often need support with:</p>
                            <div className="space-y-6">
                                {[
                                    "HR policies and documentation",
                                    "Employee verification and risk checks",
                                    "HR process audits and compliance reviews",
                                    "Workforce governance and best practices"
                                ].map((text, i) => (
                                    <div key={i} className="flex gap-4 items-center group/item">
                                        <div className="w-6 h-6 rounded-full bg-brand-900 border border-brand-800 flex items-center justify-center shrink-0 group-hover/item:border-accent-500 transition-colors">
                                            <CheckCircle className="w-4 h-4 text-accent-500" />
                                        </div>
                                        <p className="text-slate-300 font-light">{text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Approach */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">Our Service Approach</h2>
                        <p className="text-slate-600 mt-4 max-w-2xl mx-auto font-light">Based on clarity, control, and compliance readiness.</p>
                    </div>
                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { title: "Scope Definition", desc: "Clear scope and service definition aligned with business needs.", icon: Search },
                            { title: "Centralized Control", desc: "One point of coordination and absolute accountability.", icon: ShieldCheck },
                            { title: "Process Driven", desc: "Strict adherence to process-driven execution and workflows.", icon: Zap },
                            { title: "Timely Delivery", desc: "Committed timelines for reporting and service closure.", icon: FileCheck }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group group-hover:-translate-y-2">
                                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-accent-500 mb-8 group-hover:bg-accent-600 group-hover:text-white transition-all shadow-sm">
                                    <item.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4 leading-tight">{item.title}</h3>
                                <p className="text-slate-500 text-sm font-light leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Service Offerings */}
            <section className="py-24 bg-white" id="offerings">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-brand-600 font-bold uppercase tracking-widest text-sm mb-4 block">Our Offerings</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">Specialized HR Solutions</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <ServiceCard
                            title="HR Policy Setup"
                            description="Support for designing and implementing HR policies aligned with business needs and regulatory expectations."
                            icon={BookOpen}
                            link="/services/other/hr-policy"
                        />
                        <ServiceCard
                            title="Background Verification"
                            description="Structured employee background checks to support safe and informed hiring decisions."
                            icon={ShieldCheck}
                            link="/services/other/background-verification"
                        />
                        <ServiceCard
                            title="HR Audit Services"
                            description="Independent review of HR processes, documentation, and compliance readiness."
                            icon={Search}
                            link="/services/other/hr-audit"
                        />
                    </div>
                </div>
            </section>

            {/* Who Can Benefit */}
            <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-20">
                        <div>
                            <h2 className="text-3xl font-bold mb-10 text-accent-500 uppercase tracking-widest text-sm">Who Can Benefit</h2>
                            <div className="grid sm:grid-cols-2 gap-6">
                                {[
                                    { t: "Startups", d: "Setting up professional HR frameworks for the first time." },
                                    { t: "Growing Pros", d: "Formalizing people practices during rapid expansion." },
                                    { t: "Enterprises", d: "Reviewing HR compliance and multi-location governance." },
                                    { t: "Risk Aware", d: "Strengthening workforce risk and integrity management." }
                                ].map((item, i) => (
                                    <div key={i} className="p-8 bg-brand-900/40 border border-brand-800 rounded-3xl hover:border-accent-500 transition-colors group">
                                        <h4 className="font-bold text-white mb-2 group-hover:text-accent-500 transition-colors">{item.t}</h4>
                                        <p className="text-slate-400 text-sm font-light leading-relaxed">{item.d}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold mb-10 text-accent-500 uppercase tracking-widest text-sm">Why Choose CLink HR</h2>
                            <ul className="space-y-6">
                                {[
                                    "Access to specialized HR expertise",
                                    "Centralized coordination and reporting",
                                    "Reduced operational and compliance risk",
                                    "Scalable support as business needs evolve",
                                    "Pan-India service capability"
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
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-32 bg-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl md:text-7xl font-extrabold text-slate-900 mb-8 tracking-tighter">Build Stronger <br /><span className="text-accent-500">HR Processes.</span></h2>
                    <p className="text-xl text-slate-600 mb-12 leading-relaxed max-w-2xl mx-auto font-light">
                        Whether you need policy support, verification services, or an HR audit, CLink HR ensures structured delivery and dependable outcomes.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link to="/contact" className="bg-brand-600 text-white px-12 py-5 rounded-full font-bold hover:bg-brand-700 transition-all shadow-xl flex items-center justify-center gap-3 group">
                            Discuss HR Support <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link to="/contact" className="bg-slate-100 text-slate-900 px-12 py-5 rounded-full font-bold hover:bg-slate-200 transition-all shadow-sm">
                            Talk to Our HR Advisory Team
                        </Link>
                    </div>
                </div>
            </section>

            <Testimonials />
        </div>
    );
};

export default OtherHRServices;
