import React from 'react';
import { motion } from 'framer-motion';
import Testimonials from '../../components/Testimonials';
import {
    Users,
    Layers,
    MapPin,
    ShieldCheck,
    CheckCircle,
    ArrowRight,
    Briefcase,
    Globe,
    Settings,
    Clock
} from 'lucide-react';
import { Link } from 'react-router-dom';

const WorkforceSolutions = () => {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="bg-brand-950 py-32 relative overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80"
                        alt="Workforce Solutions"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-brand-950/70"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="max-w-3xl"
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-brand-800/50 border border-brand-700 text-brand-200 text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-md">
                            Agile Workforce Management
                        </span>
                        <h1 className="text-4xl md:text-8xl font-extrabold text-white mb-8 tracking-tight leading-[1.1]">
                            Workforce <br />
                            <span className="text-accent-500">Enablement.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-200 leading-relaxed font-light mb-10 max-w-2xl">
                            End-to-end management for <span className="text-white font-medium">distributed & contract teams</span>. Scale your workforce with precision and full compliance.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/contact" className="bg-brand-600 text-white px-8 py-4 rounded-full font-bold hover:bg-brand-500 transition-all shadow-lg flex items-center justify-center gap-2">
                                Consult With Us <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Core Capability Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="lg:pr-12">
                            <span className="text-accent-600 font-bold uppercase tracking-widest text-sm mb-4 block">Our Capability</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">Managing Global <br /><span className="text-brand-600">Workforce Dynamics</span></h2>
                            <p className="text-xl text-slate-600 mb-10 leading-relaxed font-light">
                                Modern businesses require more than just talent; they need <span className="text-accent-600 font-bold">operational flexibility</span> and risk mitigation. Our workforce solutions are built for scale and visibility.
                            </p>
                            <div className="grid grid-cols-2 gap-6 mt-8">
                                {[
                                    { label: "Contractor Mgmt", icon: Users },
                                    { label: "Risk Mitigation", icon: ShieldCheck },
                                    { label: "Rapid Deployment", icon: Clock },
                                    { label: "Operational Depth", icon: Settings }
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
                            <div className="absolute inset-0 bg-brand-200 rounded-[2rem] rotate-3 opacity-30"></div>
                            <img
                                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80"
                                alt="Workforce Planning"
                                className="relative rounded-[2rem] shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Solutions Grid */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Strategic Workforce Solutions</h2>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">
                            Operational excellence for every type of employment model.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                        {[
                            {
                                id: "contract",
                                title: "Contract workforce management",
                                desc: "Comprehensive management of temporary and project-based staff, focusing on continuity and performance.",
                                icon: Briefcase
                            },
                            {
                                id: "payroll",
                                title: "Third-party payroll solutions",
                                desc: "Offload your payroll liability and administration for contract workers through our compliant payroll engine.",
                                icon: Layers
                            },
                            {
                                id: "multi-location",
                                title: "Multi-location workforce solutions",
                                desc: "Consistent HR processes and compliance management across different cities and regions in India.",
                                icon: MapPin
                            }
                        ].map((item, i) => (
                            <div key={i} id={item.id} className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-xl transition-all group flex flex-col h-full">
                                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-accent-500 mb-8 group-hover:bg-accent-600 group-hover:text-white transition-all shadow-sm">
                                    <item.icon className="w-8 h-8" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                                <p className="text-slate-600 leading-relaxed font-light mb-8 flex-grow">
                                    {item.desc}
                                </p>
                                <ul className="space-y-3 mb-8">
                                    {["Risk Assessment", "Compliance Audit", "Process Mapping"].map((point, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-sm text-slate-500">
                                            <CheckCircle className="w-4 h-4 text-brand-400" />
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                                <Link to="/contact" className="flex items-center gap-2 text-brand-600 font-bold group-hover:text-brand-800 transition-colors">
                                    Learn More <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-24 bg-brand-950 relative overflow-hidden text-center">
                <div className="absolute top-0 left-0 w-1/3 h-full bg-accent-500/5 -skew-x-12 -translate-x-20"></div>
                <div className="max-w-4xl mx-auto px-4 relative z-10">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight italic">Scale Beyond <span className="text-accent-500">Borders.</span></h2>
                    <p className="text-xl text-slate-300 mb-12 leading-relaxed font-light">
                        "Unlock the power of a flexible workforce without the administrative headache."
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link to="/contact" className="bg-accent-500 text-white px-12 py-5 rounded-full font-bold hover:bg-accent-600 transition-all shadow-2xl flex items-center justify-center gap-3">
                            Consultation Call <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>

            <Testimonials />
        </div>
    );
};

export default WorkforceSolutions;
