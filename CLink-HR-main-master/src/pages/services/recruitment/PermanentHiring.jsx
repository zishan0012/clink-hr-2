import React from 'react';
import { motion } from 'framer-motion';
import Testimonials from '../../../components/Testimonials';
import permanentHiringHero from '../../../assets/services-img/Permanent hiring-hero.jpg';
import {
    Briefcase,
    Search,
    UserCheck,
    CheckCircle,
    Globe,
    Target,
    Users,
    ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const PermanentHiring = () => {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="bg-brand-950 py-32 relative overflow-hidden">
                <div className="absolute inset-0">
                    <motion.img
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        src={permanentHiringHero}
                        alt="Permanent Hiring"
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
                        className="max-w-3xl"
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-brand-800/50 border border-brand-700 text-brand-200 text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-md">
                            Recruitment Services
                        </span>
                        <h1 className="text-4xl md:text-8xl font-extrabold text-white mb-8 tracking-tight leading-[1.1]">
                            Permanent <br />
                            <span className="text-accent-500">Hiring Solutions</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-200 leading-relaxed font-light mb-10 max-w-2xl">
                            Build <span className="text-white font-medium">Strong, Long-Term Teams</span> with Confidence through our structured, centrally governed hiring approach.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/contact/hire-talent" className="bg-brand-600 text-white px-8 py-4 rounded-full font-bold hover:bg-brand-500 transition-all shadow-lg flex items-center justify-center gap-2">
                                Submit Requirement <ArrowRight className="w-5 h-5" />
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
                                <span className="text-accent-600 font-bold uppercase tracking-widest text-sm mb-4 block">Strategic Acquisition</span>
                                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">Our Permanent <br /><span className="text-brand-600">Hiring Approach</span></h2>
                                <p className="text-xl text-slate-600 mb-10 leading-relaxed font-light">
                                    Permanent hiring is not just about filling positions—it’s about building teams that <span className="text-accent-600 font-bold">perform and stay</span>. CLink HR focuses on role clarity and quality shortlisting.
                                </p>
                                <div className="grid grid-cols-2 gap-6 mt-8">
                                    {[
                                        { label: "Requirement & Role Clarity", icon: Search },
                                        { label: "Structured Sourcing", icon: Users },
                                        { label: "Quality Shortlisting", icon: CheckCircle },
                                        { label: "Closure Confirmation", icon: UserCheck }
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
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-brand-200 rounded-[2rem] -rotate-3 opacity-30"></div>
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                                alt="Team Building"
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
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">What We Cover in Permanent Hiring</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            "Requirement understanding and role clarity",
                            "Talent sourcing across relevant channels",
                            "Candidate screening and validation",
                            "Interview coordination and scheduling",
                            "Offer negotiation support",
                            "Joining follow-up and closure confirmation"
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
                    <h2 className="text-4xl font-bold text-slate-900 mb-6">Start Your Permanent Hiring</h2>
                    <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                        "CLink HR helps organizations build strong, long-term teams through structured, accountable, and scalable permanent hiring solutions."
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contact/hire-talent" className="bg-brand-600 text-white px-10 py-4 rounded-full font-bold hover:bg-brand-700 transition-all shadow-xl">
                            Start Hiring Now
                        </Link>
                    </div>
                </div>
            </section>

            <Testimonials />
        </div>
    );
};

export default PermanentHiring;
