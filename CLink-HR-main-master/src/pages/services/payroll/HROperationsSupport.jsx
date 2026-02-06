import React from 'react';
import { motion } from 'framer-motion';
import Testimonials from '../../../components/Testimonials';
import hrOpsHero from '../../../assets/services-img/HR Operations-hero.jpg';
import {
    Settings,
    Users,
    FileText,
    HelpCircle,
    ClipboardCheck,
    Briefcase,
    ShieldCheck,
    Clock,
    Zap,
    CheckCircle,
    ArrowRight,
    Headphones
} from 'lucide-react';
import { Link } from 'react-router-dom';

const HROperationsSupport = () => {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="bg-brand-950 py-32 relative overflow-hidden">
                <div className="absolute inset-0">
                    <motion.img
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        src={hrOpsHero}
                        alt="HR Operations Support"
                        className="w-full h-full object-cover"
                        loading="eager"
                        fetchPriority="high"
                    />
                    <div className="absolute inset-0 bg-brand-950/50"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-3xl"
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-brand-800/50 border border-brand-700 text-brand-200 text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-md">
                            Workforce Enablement
                        </span>
                        <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-8 tracking-tight leading-[1.1]">
                            HR Operations <br />
                            <span className="text-accent-500">Support Services</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-200 leading-relaxed font-light mb-10 max-w-2xl">
                            Streamline your <span className="text-white font-medium">employee lifecycle</span> and back-office HR functions with our structured, technology-driven operations support.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/contact" className="bg-brand-600 text-white px-8 py-4 rounded-full font-bold hover:bg-brand-500 transition-all shadow-lg flex items-center justify-center gap-2">
                                Discuss Operations Support <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Core Pillars Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="lg:pr-12">
                            <span className="text-accent-600 font-bold uppercase tracking-widest text-sm mb-4 block">Operational Excellence</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">Efficiency in Every <br /><span className="text-brand-600">HR Interaction</span></h2>
                            <p className="text-xl text-slate-600 mb-10 leading-relaxed font-light">
                                Our HR Operations Support is designed to minimize administrative friction, ensuring that your HR team can focus on <span className="text-accent-600 font-bold">strategic initiatives</span> while we handle the day-to-day execution.
                            </p>
                            <div className="grid grid-cols-2 gap-6 mt-8">
                                {[
                                    { label: "Onboarding Support", icon: Users },
                                    { label: "Policy Administration", icon: FileText },
                                    { label: "Helpdesk Support", icon: Headphones },
                                    { label: "Exit Management", icon: Briefcase }
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
                        <div className="relative">
                            <div className="absolute inset-0 bg-brand-200 rounded-[2rem] -rotate-3 opacity-30"></div>
                            <img
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80"
                                alt="HR Operations Team"
                                className="relative rounded-[2rem] shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Scope */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <span className="text-accent-600 font-bold uppercase tracking-widest text-sm block mb-4">Service Details</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900">What We Manage for You</h2>
                        <p className="text-xl text-slate-600 mt-6 max-w-2xl mx-auto font-light italic">
                            "Comprehensive support across the entire employee lifecycle under a single accountable framework."
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Joining & Onboarding",
                                desc: "End-to-end documentation, ID creation, workspace coordination, and induction support for new hires.",
                                icon: Zap
                            },
                            {
                                title: "Employee Files & Data",
                                desc: "Maintenance of digital and physical employee records, ensuring data privacy and quick retrieval.",
                                icon: Settings
                            },
                            {
                                title: "Policy Communication",
                                desc: "Regular updates and clarifications on company policies, holiday calendars, and employee handbooks.",
                                icon: HelpCircle
                            },
                            {
                                title: "Attendance & Leaves",
                                desc: "Centralized tracking and reporting of attendance cycles, leave balances, and regularizations.",
                                icon: Clock
                            },
                            {
                                title: "Statutory Coordination",
                                desc: "Supporting PF, ESIC, and other labor law related documentation and employee queries.",
                                icon: ClipboardCheck
                            },
                            {
                                title: "Separation Process",
                                desc: "Exit interviews, clearance coordination, final settlement support, and relieving documentation.",
                                icon: ShieldCheck
                            }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-10 rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-xl transition-all group">
                                <div className="w-14 h-14 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-600 mb-6 group-hover:bg-accent-500 group-hover:text-white transition-all">
                                    <item.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                                <p className="text-slate-600 leading-relaxed font-light">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-32 bg-brand-950 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-accent-500/10 skew-x-12 translate-x-20"></div>
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">Transfrom Your HR <br /><span className="text-accent-500">Service Delivery</span></h2>
                    <p className="text-xl text-slate-300 mb-12 leading-relaxed font-light">
                        "Stop getting bogged down by administrative tasks. Let CLink HR manage your operations while you focus on building your culture."
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link to="/contact" className="bg-accent-500 text-white px-12 py-5 rounded-full font-bold hover:bg-accent-600 transition-all shadow-2xl flex items-center justify-center gap-3">
                            Start Operations Support <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>

            <Testimonials />
        </div>
    );
};

export default HROperationsSupport;
