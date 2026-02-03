import React from 'react';
import { motion } from 'framer-motion';
import Testimonials from '../../components/Testimonials';
import {
    BarChart3,
    ShieldCheck,
    Coins,
    TrendingUp,
    CheckCircle,
    ArrowRight,
    PieChart,
    Users,
    Settings,
    Briefcase
} from 'lucide-react';
import { Link } from 'react-router-dom';
import businesshrhero from '../../assets/solutions-img/Business HR main page-hero.jpg';

const BusinessHRSolutions = () => {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="bg-brand-950 py-32 relative overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={businesshrhero}
                        alt="Business HR Solutions"
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
                            Strategic HR Partnership
                        </span>
                        <h1 className="text-4xl md:text-8xl font-extrabold text-white mb-8 tracking-tight leading-[1.1]">
                            Business HR <br />
                            <span className="text-accent-500">Enablement.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-200 leading-relaxed font-light mb-10 max-w-2xl">
                            Scalable, <span className="text-white font-medium">cost-optimized HR models</span> designed for business impact. Align your people strategy with your bottom line.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/contact" className="bg-brand-600 text-white px-8 py-4 rounded-full font-bold hover:bg-brand-500 transition-all shadow-lg flex items-center justify-center gap-2">
                                Discuss Business HR <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Impact Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="lg:pr-12">
                            <span className="text-accent-600 font-bold uppercase tracking-widest text-sm mb-4 block">Strategic Alignment</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">HR as a <br /><span className="text-brand-600">Growth Driver</span></h2>
                            <p className="text-xl text-slate-600 mb-10 leading-relaxed font-light">
                                Many businesses treat HR as a back-office function. We transform it into a <span className="text-accent-600 font-bold">strategic asset</span> that improves efficiency and reduces organizational friction.
                            </p>
                            <div className="grid grid-cols-2 gap-6 mt-8">
                                {[
                                    { label: "Predictable Costs", icon: Coins },
                                    { label: "Scalable Operations", icon: TrendingUp },
                                    { label: "Process Visibility", icon: BarChart3 },
                                    { label: "People Analytics", icon: PieChart }
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
                            <div className="absolute inset-0 bg-brand-200 rounded-[2rem] -rotate-3 opacity-30"></div>
                            <img
                                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                                alt="Business Strategy"
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
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Explore Business HR Models</h2>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">
                            Practical solutions designed to solve real-world business challenges.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                id: "scalable",
                                title: "Scalable HR model",
                                desc: "An HR framework that grows with your organization, from 50 to 5000 employees without breaking down.",
                                icon: TrendingUp
                            },
                            {
                                id: "compliance",
                                title: "Compliance-ready HR solutions",
                                desc: "Infrastructure and processes designed with mandatory statutory compliance at the core.",
                                icon: ShieldCheck
                            },
                            {
                                id: "cost",
                                title: "Cost-optimized HR solutions",
                                desc: "Models that focus on RPU (Revenue Per Unit) and reducing the cost of hire and operations.",
                                icon: Coins
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
                                    {["Business Alignment", "Audit Readiness", "Efficiency Tracking"].map((point, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-sm text-slate-500">
                                            <CheckCircle className="w-4 h-4 text-brand-400" />
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                                <Link to="/contact" className="flex items-center gap-2 text-brand-600 font-bold group-hover:text-brand-800 transition-colors">
                                    Build Your Model <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-24 bg-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 tracking-tight italic">Empower Your <span className="text-accent-500">Business HR.</span></h2>
                    <p className="text-xl text-slate-600 mb-12 leading-relaxed font-light">
                        "Stop guessing. Start building a data-driven, compliant, and cost-efficient HR engine."
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link to="/contact" className="bg-brand-600 text-white px-10 py-4 rounded-full font-bold hover:bg-brand-700 transition-all shadow-xl">
                            Request Strategic Consult
                        </Link>
                    </div>
                </div>
            </section>

            <Testimonials />
        </div>
    );
};

export default BusinessHRSolutions;
