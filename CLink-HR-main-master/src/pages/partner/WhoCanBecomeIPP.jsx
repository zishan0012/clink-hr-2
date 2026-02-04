import React from 'react';
import { motion } from 'framer-motion';
import Testimonials from '../../components/Testimonials';
import { Briefcase, UserCheck, GraduationCap, Building, Link, CheckCircle, XCircle, Search, Rocket } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';

import whoCanBecomeIPPHero from '../../assets/partners-img/Who Can Become an IPP-hero.jpg';

const WhoCanBecomeIPP = () => {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="relative bg-brand-950 py-40 overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={whoCanBecomeIPPHero}
                        alt="Who Can Become IPP"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-brand-950/50"></div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4 }}
                    >
                        <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-6">
                            Who Can Become an <span className="text-accent-500">IPP?</span>
                        </h1>
                        <div className="inline-block bg-white/10 backdrop-blur-md border border-white/10 px-6 py-2 rounded-full text-sm font-bold text-accent-400 mb-6 uppercase tracking-widest">
                            For Recruiters Ready to Build Their Own Brand
                        </div>
                        <p className="text-xl md:text-2xl text-slate-200 mb-8 font-light max-w-4xl leading-relaxed">
                            The Independent Prime Partner (IPP) model is designed for professionals and firms who want to operate as independent recruitment businesses, while being supported by a structured delivery ecosystem. If you can deliver quality hiring outcomes, you can become an IPP.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Ideal Profiles Grid */}
            <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900">Ideal IPP Profiles</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Independent Recruiters",
                            icon: UserCheck,
                            items: ["Have hands-on hiring experience", "Want to move beyond freelance work", "Aim to build a long-term recruitment brand"]
                        },
                        {
                            title: "Boutique Recruitment Firms",
                            icon: Building,
                            items: ["Specialize in specific industries or roles", "Want access to larger and consistent mandates", "Prefer delivery over client acquisition"]
                        },
                        {
                            title: "Domain & Industry Specialists",
                            icon: GraduationCap,
                            items: ["IT & Technology hiring expertise", "Manufacturing & Engineering", "Healthcare, Retail, Logistics knowledge"]
                        },
                        {
                            title: "Recruitment Entrepreneurs",
                            icon: Rocket,
                            items: ["Want to start their own recruitment firm", "Ready to operate under own brand name", "Prefer a structured support model"]
                        },
                        {
                            title: "Existing HR Consultants",
                            icon: Briefcase,
                            items: ["Understand hiring processes and compliance", "Want scalable delivery opportunities", "Prefer execution-focused engagement"]
                        }
                    ].map((item, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-2 group">
                            <div className="w-14 h-14 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-600 mb-6 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                                <item.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                            <ul className="space-y-2">
                                {item.items.map((point, i) => (
                                    <li key={i} className="flex items-start gap-2 text-slate-600 text-sm">
                                        <div className="w-1.5 h-1.5 rounded-full bg-accent-500 mt-2 shrink-0"></div>
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* What We Look For Card */}
                    <div className="bg-brand-900 p-8 rounded-3xl shadow-xl text-white flex flex-col justify-center">
                        <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-accent-400 mb-6">
                            <Search className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold mb-4">What We Look For</h3>
                        <ul className="space-y-3">
                            <li className="flex gap-2 text-slate-300 text-sm"><CheckCircle className="w-4 h-4 text-accent-500 shrink-0 mt-0.5" /> Proven recruitment experience</li>
                            <li className="flex gap-2 text-slate-300 text-sm"><CheckCircle className="w-4 h-4 text-accent-500 shrink-0 mt-0.5" /> Ability to manage closures independently</li>
                            <li className="flex gap-2 text-slate-300 text-sm"><CheckCircle className="w-4 h-4 text-accent-500 shrink-0 mt-0.5" /> Commitment to quality & timelines</li>
                        </ul>
                        <p className="mt-6 text-xs text-slate-400 italic border-t border-brand-800 pt-4">
                            "Team size is not a limitation—capability matters more."
                        </p>
                    </div>
                </div>

                {/* Not Required vs Support Comparison */}
                <div className="mt-20 grid lg:grid-cols-2 gap-12">
                    <div className="bg-red-50 rounded-3xl p-10 border border-red-100">
                        <h3 className="text-2xl font-bold text-red-900 mb-6 flex items-center gap-3">
                            <XCircle className="w-7 h-7 text-red-600" /> What Is Not Required
                        </h3>
                        <ul className="space-y-4">
                            {[
                                "No direct client acquisition",
                                "No large internal HR team",
                                "No investment in backend systems",
                                "No complex contracts with companies"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-red-800 font-medium">
                                    <div className="w-2 h-2 rounded-full bg-red-400"></div> {item}
                                </li>
                            ))}
                        </ul>
                        <p className="mt-8 text-sm font-bold text-red-700">CLink HR and Zryoss handle these centrally.</p>
                    </div>

                    <div className="bg-green-50 rounded-3xl p-10 border border-green-100">
                        <h3 className="text-2xl font-bold text-green-900 mb-6 flex items-center gap-3">
                            <CheckCircle className="w-7 h-7 text-green-600" /> Support You Receive
                        </h3>
                        <ul className="space-y-4">
                            {[
                                "Continuous access to structured requirements",
                                "Zryoss platform access and workflows",
                                "Training and delivery enablement",
                                "Central coordination and payout management"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-green-800 font-medium">
                                    <div className="w-2 h-2 rounded-full bg-green-500"></div> {item}
                                </li>
                            ))}
                        </ul>
                        <p className="mt-8 text-sm font-bold text-green-700">You stay independent, yet never unsupported.</p>
                    </div>
                </div>
            </section>

            {/* Final Statement CTA */}
            <section className="py-24 bg-white text-center border-t border-slate-100">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 italic tracking-tight leading-tight">
                        "If you can deliver quality hires and want to build your own recruitment brand, <span className="text-brand-600">you are ready to become an IPP.</span>"
                    </h2>
                    <RouterLink to="/partners/become-ipp-partner" className="inline-block bg-brand-600 text-white px-10 py-4 rounded-full font-bold hover:bg-brand-700 transition-all shadow-xl hover:shadow-brand-500/30">
                        Apply Now
                    </RouterLink>
                </div>
            </section>

            <Testimonials />
        </div>
    );
};

export default WhoCanBecomeIPP;
