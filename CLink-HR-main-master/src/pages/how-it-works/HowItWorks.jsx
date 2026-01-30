import React from 'react';
import { motion } from 'framer-motion';
import Testimonials from '../../components/Testimonials';
import howItWorksHero from '../../assets/how-it-works-img/how-it-works-main.jpg';
import {
    Network,
    ShieldCheck,
    Zap,
    Users,
    BarChart3,
    ArrowRight,
    CheckCircle,
    Target,
    Cpu,
    TrendingUp
} from 'lucide-react';
import { Link } from 'react-router-dom';

const HowItWorks = () => {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="bg-brand-950 py-32 relative overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={howItWorksHero}
                        alt="How It Works"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-brand-950/50"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl"
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-brand-800/50 border border-brand-700 text-brand-200 text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-md">
                            Our Process
                        </span>
                        <h1 className="text-4xl md:text-8xl font-extrabold text-white mb-8 tracking-tight leading-[1.1]">
                            How CLink HR <br />
                            <span className="text-accent-500">Works.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-200 leading-relaxed font-light mb-10 max-w-2xl">
                            A <span className="text-white font-medium">proven framework</span> combining technology, talent networks, and quality assurance to deliver exceptional HR and recruitment outcomes.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/contact" className="bg-brand-600 text-white px-8 py-4 rounded-full font-bold hover:bg-brand-500 transition-all shadow-lg flex items-center justify-center gap-2">
                                Get Started <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Overview Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-accent-600 font-bold uppercase tracking-widest text-sm mb-4 block">The CLink HR Framework</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                            Built for <span className="text-brand-600">Speed, Scale & Quality</span>
                        </h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light">
                            Our approach combines strategic planning, technology enablement, and a distributed partner network to deliver recruitment and HR solutions that work.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: Zap, label: "Fast Execution", desc: "Rapid turnaround on hiring and HR processes" },
                            { icon: Network, label: "Wide Reach", desc: "Pan-India coverage through IPP network" },
                            { icon: ShieldCheck, label: "Quality Assured", desc: "Structured SLA and compliance frameworks" }
                        ].map((item, i) => (
                            <div key={i} className="text-center p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg transition-all">
                                <div className="w-16 h-16 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-600 mx-auto mb-6">
                                    <item.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.label}</h3>
                                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Core Components */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">How We Deliver Excellence</h2>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">
                            Five interconnected pillars that power our recruitment and HR operations.
                        </p>
                    </div>

                    <div className="space-y-8">
                        {[
                            {
                                id: "delivery-model",
                                title: "Our Delivery Model",
                                desc: "A structured, end-to-end approach to recruitment and HR service delivery designed for consistency and scalability.",
                                icon: Target,
                                link: "/pages/howitworks/ourdeliverymodel",
                                features: ["Client requirement analysis", "Talent sourcing strategy", "Candidate screening & evaluation", "Onboarding & post-placement support"]
                            },
                            {
                                id: "ipp-network",
                                title: "IPP Partner Network",
                                desc: "A distributed network of Independent Prime Partners (IPP) enabling pan-India reach and specialized talent access.",
                                icon: Users,
                                link: "/pages/howitworks/ipppartnernetwork",
                                features: ["Verified partner ecosystem", "Industry-specific expertise", "Local market intelligence", "Scalable hiring capacity"]
                            },
                            {
                                id: "quality-sla",
                                title: "Quality & SLA Framework",
                                desc: "Defined service standards, performance metrics, and accountability structures ensuring predictable outcomes.",
                                icon: ShieldCheck,
                                link: "/pages/howitworks/quality&slaframework/",
                                features: ["Time-to-hire commitments", "Quality benchmarks", "Replacement guarantees", "Regular performance reviews"]
                            },
                            {
                                id: "technology",
                                title: "Technology Platform (Zryoss)",
                                desc: "Our proprietary HRMS and recruitment platform streamlining workflows, data management, and partner collaboration.",
                                icon: Cpu,
                                link: "/pages/howitworks/technologyplatform(zryoss)/",
                                features: ["Centralized candidate database", "Real-time tracking & reporting", "Automated compliance checks", "Partner portal access"]
                            },
                            {
                                id: "distribution",
                                title: "Requirement Distribution System",
                                desc: "Intelligent requirement routing to the right partners based on expertise, location, and performance history.",
                                icon: TrendingUp,
                                link: "/pages/howitworks/requirementdistributionsystem/",
                                features: ["Smart requirement matching", "Multi-partner collaboration", "Performance-based allocation", "Real-time status updates"]
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-xl transition-all group"
                            >
                                <div className="flex flex-col md:flex-row gap-8">
                                    <div className="shrink-0">
                                        <div className="w-20 h-20 bg-slate-50 rounded-2xl flex items-center justify-center text-accent-500 group-hover:bg-accent-600 group-hover:text-white transition-all shadow-sm">
                                            <item.icon className="w-10 h-10" strokeWidth={1.5} />
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">{item.title}</h3>
                                        <p className="text-slate-600 leading-relaxed font-light mb-6 text-lg">
                                            {item.desc}
                                        </p>
                                        <ul className="grid md:grid-cols-2 gap-3 mb-8">
                                            {item.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                                                    <CheckCircle className="w-4 h-4 text-brand-400 shrink-0" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                        <Link
                                            to={item.link}
                                            className="inline-flex items-center gap-2 text-brand-600 font-bold group-hover:text-brand-800 transition-colors hover:gap-3"
                                        >
                                            Learn More <ArrowRight className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Flow */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">The CLink HR Process</h2>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">
                            From requirement to delivery, here's how we work with you.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-6">
                        {[
                            { step: "01", title: "Requirement Analysis", desc: "Understanding your hiring or HR needs in detail" },
                            { step: "02", title: "Partner Activation", desc: "Routing to the right IPP partners via our system" },
                            { step: "03", title: "Execution & Tracking", desc: "Candidate sourcing, screening, and real-time updates" },
                            { step: "04", title: "Quality Assurance", desc: "SLA monitoring, feedback loops, and continuous improvement" }
                        ].map((item, i) => (
                            <div key={i} className="relative">
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-brand-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                                        {item.step}
                                    </div>
                                    <h4 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h4>
                                    <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                                </div>
                                {i < 3 && (
                                    <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-slate-200">
                                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-brand-600 rounded-full"></div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-slate-900 text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
                        Ready to Experience <span className="text-accent-500">The CLink HR Difference?</span>
                    </h2>
                    <p className="text-xl text-slate-300 mb-12 leading-relaxed font-light">
                        Let us show you how our proven framework can transform your recruitment and HR operations.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link to="/contact" className="bg-brand-600 text-white px-10 py-4 rounded-full font-bold hover:bg-brand-700 transition-all shadow-xl">
                            Schedule a Consultation
                        </Link>
                        <Link to="/partners/ipp-partner-program" className="bg-white text-brand-900 px-10 py-4 rounded-full font-bold hover:bg-slate-100 transition-all shadow-xl">
                            Become an IPP Partner
                        </Link>
                    </div>
                </div>
            </section>

            <Testimonials />
        </div>
    );
};

export default HowItWorks;
