import React from 'react';
import { motion } from 'framer-motion';
import Testimonials from '../../components/Testimonials';
import { ShieldCheck, Target, UserX, TrendingUp, Zap, Layers, Award, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import whyJoinIPPHero from '../../assets/partners-img/Why Join as an IPP-hero.jpg';

const WhyJoinIPP = () => {
    const reasons = [
        {
            title: "Operate Under Your Own Brand",
            desc: "Build and grow your recruitment firm independently. Retain full brand identity and establish credibility with clients.",
            icon: ShieldCheck
        },
        {
            title: "Access Structured Requirements",
            desc: "Receive verified client mandates via the Zryoss platform. Work on high-quality, industry-aligned opportunities across multiple locations.",
            icon: Target
        },
        {
            title: "Zero Client Acquisition Burden",
            desc: "No need to pitch or acquire clients. CLink HR handles onboarding and contracts, letting you focus only on sourcing and closures.",
            icon: UserX
        },
        {
            title: "Transparent Payouts",
            desc: "Clear, performance-linked payouts with a timely and centralized payment process. No disputes or delays.",
            icon: TrendingUp
        },
        {
            title: "Scalable Growth Opportunities",
            desc: "Work on single or bulk requirements. Access to enterprise clients and high-value mandates for long-term expansion.",
            icon: Zap
        },
        {
            title: "Zryoss Ecosystem Support",
            desc: "Centralized dashboards, workflows, training, and delivery enablement. Full process support for JD understanding.",
            icon: Layers
        },
        {
            title: "Performance-Driven Recognition",
            desc: "High-performing IPPs get priority allocations, opportunities for higher-value roles, and long-term growth.",
            icon: Award
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="bg-brand-950 py-40 relative overflow-hidden text-white">
                <div className="absolute inset-0">
                    <img
                        src={whyJoinIPPHero}
                        alt="Why Join IPP"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-brand-950/50"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    ><div className="inline-block bg-brand-800/50 backdrop-blur-md border border-brand-700 px-6 py-2 rounded-full text-sm font-bold text-brand-200 mb-6 uppercase tracking-widest">
                            Build Your Own Recruitment Brand with Support
                        </div>
                        <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-6 tracking-tight">
                            Why Join as an <span className="text-accent-500">IPP?</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-200 mb-8 font-light max-w-4xl leading-relaxed">
                            Joining CLink HR as an Independent Prime Partner (IPP) allows you to focus on delivering quality hires, while we manage clients, coordination, and backend operations. The program is designed for recruiters and firms who want independence, growth, and scalability without operational hassles.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Top Reasons Grid */}
            <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900">Top Reasons to Join</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reasons.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all group lg:last:col-span-3 lg:last:w-1/2 lg:last:mx-auto"
                        >
                            <div className="w-14 h-14 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-600 mb-6 group-hover:bg-brand-600 group-hover:text-white transition-colors shadow-sm">
                                <item.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                            <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Who Benefits Most */}
            <section className="py-20 bg-white border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-brand-50 rounded-[3rem] p-10 md:p-16 border border-brand-100 flex flex-col md:flex-row items-center gap-12">
                        <div className="flex-1">
                            <h2 className="text-3xl font-bold text-brand-900 mb-8">Who Benefits Most?</h2>
                            <ul className="space-y-4">
                                {[
                                    "Independent recruiters looking to expand reach",
                                    "Boutique recruitment firms seeking structured opportunities",
                                    "Experienced hiring professionals wanting operational freedom",
                                    "Entrepreneurs building a recruitment brand"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-brand-800 font-medium text-lg">
                                        <CheckCircle className="w-6 h-6 text-brand-600 shrink-0" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="shrink-0">
                            <Link to="/partners/become-ipp-partner" className="bg-brand-600 text-white px-10 py-5 rounded-full font-bold hover:bg-brand-700 transition-all shadow-xl flex items-center gap-2 text-lg">
                                Join as a Partner <ArrowRight className="w-6 h-6" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Value Statement */}
            <section className="py-24 bg-slate-50 text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 italic tracking-tight">
                        "Operate independently. Focus on delivery. <br /><span className="text-brand-500">Scale with structure and support.</span>"
                    </h2>
                </div>
            </section>

            <Testimonials />
        </div>
    );
};

export default WhyJoinIPP;
