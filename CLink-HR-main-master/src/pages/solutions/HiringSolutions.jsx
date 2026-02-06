import React from 'react';
import { motion } from 'framer-motion';
import Testimonials from '../../components/Testimonials';
import {
    Target,
    Zap,
    Building2,
    Rocket,
    Code2,
    CheckCircle,
    ArrowRight,
    Users,
    Briefcase,
    Globe
} from 'lucide-react';
import { Link } from 'react-router-dom';
import hiringsolutionhero from '../../assets/solutions-img/Hiring solution main  page-hero.jpg';

const HiringSolutions = () => {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="bg-brand-950 py-32 relative overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={hiringsolutionhero}
                        alt="Hiring Solutions"
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
                            Strategic Talent Acquisition
                        </span>
                        <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-8 tracking-tight leading-[1.1]">
                            Hiring <br />
                            <span className="text-accent-500">Solved.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-200 leading-relaxed font-light mb-10 max-w-2xl">
                            Specialized hiring models designed for <span className="text-white font-medium">startups, enterprises,</span> and mid-size organizations. Find the right talent, the first time.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/contact/hire-talent" className="bg-brand-600 text-white px-8 py-4 rounded-full font-bold hover:bg-brand-500 transition-all shadow-lg flex items-center justify-center gap-2">
                                Discuss Your Needs <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Models Overview */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="lg:pr-12">
                            <span className="text-accent-600 font-bold uppercase tracking-widest text-sm mb-4 block">Our Expertise</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">Tailored Hiring <br /><span className="text-brand-600">Architectures</span></h2>
                            <p className="text-xl text-slate-600 mb-10 leading-relaxed font-light">
                                Every organization has unique hiring challenges. We've developed specific models that address <span className="text-accent-600 font-bold">domain-specific nuances</span> and organizational scale.
                            </p>
                            <div className="space-y-6">
                                {[
                                    { title: "Niche Tech Stacks", desc: "Access to top IT & software engineering talent." },
                                    { title: "Domain Specificity", icon: Users, desc: "Expertise in Non-IT, BFSI, and Healthcare." },
                                    { title: "Scalable Teams", icon: Rocket, desc: "Rapid scaling for startups and high-growth phases." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-accent-500 shadow-sm shrink-0">
                                            <CheckCircle className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-900">{item.title}</h3>
                                            <p className="text-slate-600 text-sm">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-brand-200 rounded-[2rem] -rotate-3 opacity-30"></div>
                            <img
                                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                                alt="Hiring Team"
                                className="relative rounded-[2rem] shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Detailed Solutions Grid */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Explore Our Hiring Models</h2>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">
                            Choosing the right model depends on your urgency, budget, and role complexity.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                id: "it",
                                title: "IT Hiring Solutions",
                                desc: "Dedicated tech recruiters for full-stack, AI/ML, Cloud, and Data Engineering roles.",
                                icon: Code2,
                                color: "blue"
                            },
                            {
                                id: "non-it",
                                title: "Non-IT Solutions",
                                desc: "Broad-spectrum hiring for Sales, Marketing, Operations, and Finance functions.",
                                icon: Briefcase,
                                color: "orange"
                            },
                            {
                                id: "startup",
                                title: "Startup Hiring",
                                desc: "Agile, outcome-based hiring for seed to series stage startups looking for culture fits.",
                                icon: Rocket,
                                color: "purple"
                            },
                            {
                                id: "enterprise",
                                title: "Enterprise Solutions",
                                desc: "Large-scale recruitment drives with centrally managed coordination and reporting.",
                                icon: Building2,
                                color: "slate"
                            },
                            {
                                id: "fast-closure",
                                title: "Fast-Closure Model",
                                desc: "Urgent hiring solution designed for critical positions with a 48-72 hour turnaround.",
                                icon: Zap,
                                color: "yellow"
                            },
                            {
                                id: "pan-india",
                                title: "Pan-India Presence",
                                desc: "Hiring across Tier-1, Tier-2, and Tier-3 cities with local candidate network access.",
                                icon: Globe,
                                color: "green"
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
                                <Link
                                    to={item.id === 'pan-india' ? '/company/pan-india' : `/solutions/hiring/${item.id}-hiring`}
                                    className="flex items-center gap-2 text-brand-600 font-bold group-hover:text-brand-800 transition-colors"
                                >
                                    Get Started <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-24 bg-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 tracking-tight">Ready to Find Your <br /><span className="text-accent-500">Next Great Hire?</span></h2>
                    <p className="text-xl text-slate-600 mb-12 leading-relaxed font-light">
                        "Stop settling for average. CLink HR delivers high-quality candidates through a structured, accountable hiring process."
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link to="/contact/hire-talent" className="bg-brand-600 text-white px-10 py-4 rounded-full font-bold hover:bg-brand-700 transition-all shadow-xl">
                            Register Your Requirement
                        </Link>
                        <Link to="/services" className="px-10 py-4 rounded-full font-bold border-2 border-slate-200 text-slate-700 hover:bg-slate-50 transition-all">
                            View All Services
                        </Link>
                    </div>
                </div>
            </section>

            <Testimonials />
        </div>
    );
};

export default HiringSolutions;
