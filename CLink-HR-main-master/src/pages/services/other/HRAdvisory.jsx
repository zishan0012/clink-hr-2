import React from 'react';
import { motion } from 'framer-motion';
import Testimonials from '../../../components/Testimonials';
import hrAdvisoryHero from '../../../assets/services-img/HR Advisory-hero.jpg';
import {
    Briefcase,
    TrendingUp,
    Users,
    MessageSquare,
    Target,
    Zap,
    Scale,
    ShieldCheck,
    ArrowRight,
    Search
} from 'lucide-react';
import { Link } from 'react-router-dom';

const HRAdvisory = () => {
    const services = [
        { title: "Organizational Design", desc: "Structuring departments and hierarchies for maximum efficiency.", icon: Target },
        { title: "Performance Systems", desc: "Designing OKRs, KPIs, and appraisal frameworks that drive results.", icon: TrendingUp },
        { title: "Culture Strategy", desc: "Crafting interventions to align employee behavior with core values.", icon: Heart },
        { title: "Compensation Benchmarking", desc: "Ensuring your pay structures remain competitive in the market.", icon: Scale },
        { title: "Employee Engagement", desc: "Building programs that reduce churn and boost productivity.", icon: Zap },
        { title: "Change Management", desc: "Strategic support during mergers, acquisitions, or restructuring.", icon: RefreshCw }
    ];

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="bg-brand-950 py-32 relative overflow-hidden">
                <div className="absolute inset-0">
                    <motion.img
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        src={hrAdvisoryHero}
                        alt="HR Advisory"
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
                            Strategic Consulting
                        </span>
                        <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-8 tracking-tight leading-[1.1]">
                            HR Advisory <br />
                            <span className="text-accent-500">& Strategy.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-200 max-w-3xl font-light leading-relaxed">
                            Transforming HR from a back-office function into a <span className="text-white font-medium">strategic growth engine</span> for your business.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Strategic Value */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-accent-600 font-bold uppercase tracking-widest text-sm mb-4 block">Future-Ready HR</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 tracking-tight leading-tight">
                                Consulting Beyond <br /><span className="text-brand-600">Compliance & Payroll</span>
                            </h2>
                            <p className="text-xl text-slate-600 mb-10 leading-relaxed font-light">
                                Many organizations struggle with scaling culture and performance as they grow. Our advisory team provides the <span className="text-accent-600 font-bold">strategic blueprint</span> to navigate complex people challenges.
                            </p>

                            <div className="space-y-4">
                                {[
                                    { t: "Evidence-Based Insights", d: "Using market data to drive people decisions.", icon: Search },
                                    { t: "Actionable Roadmap", d: "Not just reports, but executable implementation plans.", icon: Target },
                                    { t: "Scalability Focused", d: "Models designed to grow as your headcount doubles.", icon: TrendingUp }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-6 p-6 bg-slate-50 rounded-3xl border border-slate-100 group hover:border-accent-400 transition-all">
                                        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-accent-500 shrink-0 shadow-sm group-hover:bg-accent-600 group-hover:text-white transition-all">
                                            <item.icon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900">{item.t}</h4>
                                            <p className="text-slate-500 text-sm font-light leading-none mt-1">{item.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <div className="bg-brand-950 rounded-[3rem] p-12 text-white relative z-10 shadow-2xl overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-accent-500 rounded-full blur-3xl opacity-20"></div>
                                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                                    <MessageSquare className="w-6 h-6 text-accent-500" />
                                    Advisory Modules
                                </h3>
                                <div className="space-y-6">
                                    {[
                                        { t: "Org Structure & Hierarchy", d: "Defining levels & spans of control." },
                                        { t: "Performance Frameworks", desc: "KPIs, OKRs, & Meritocracy." },
                                        { t: "Retention Strategies", desc: "Reducing high-potential churn." },
                                        { t: "Statutory Health Check", desc: "Proactive compliance auditing." }
                                    ].map((m, i) => (
                                        <div key={i} className="flex gap-4 border-b border-white/10 pb-6 last:border-0">
                                            <div className="w-6 h-6 rounded-full bg-accent-500 flex items-center justify-center text-[10px] font-bold shrink-0">{i + 1}</div>
                                            <div>
                                                <h4 className="font-bold">{m.t}</h4>
                                                <p className="text-slate-400 text-xs mt-1">{m.d || m.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="absolute inset-0 bg-accent-500/10 rounded-[3rem] translate-x-4 translate-y-4 -z-0"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-24 bg-slate-900 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
                <div className="max-w-4xl mx-auto px-4 relative z-10">
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tight italic">Design Your <span className="text-accent-500">Growth DNA.</span></h2>
                    <p className="text-xl text-slate-400 mb-12 leading-relaxed max-w-2xl mx-auto font-light">
                        "HR should be a profit center, not a cost center. Let our advisors show you how to optimize your talent ROI."
                    </p>
                    <Link to="/contact" className="bg-accent-500 text-white px-12 py-5 rounded-full font-bold hover:bg-accent-600 transition-all shadow-xl inline-flex items-center gap-3">
                        Talk to a Strategic Advisor <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>

            <Testimonials />
        </div>
    );
};

// Missing imports fix
import { Heart, RefreshCw } from 'lucide-react';

export default HRAdvisory;
