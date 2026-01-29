import React from 'react';
import { motion } from 'framer-motion';
import {
    Briefcase,
    Users,
    BarChart3,
    Target,
    Zap,
    TrendingUp,
    CheckCircle,
    ArrowRight,
    Rocket,
    ShieldCheck,
    Building,
    Layers
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Solutions = () => {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="bg-brand-950 py-32 relative overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                        alt="HR Solutions"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-brand-950/85"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl"
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-brand-800/50 border border-brand-700 text-brand-200 text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-md">
                            Tailored Solutions
                        </span>
                        <h1 className="text-4xl md:text-8xl font-extrabold text-white mb-8 tracking-tight leading-[1.1]">
                            HR & Recruitment <br />
                            <span className="text-accent-500">Solutions.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-200 leading-relaxed font-light mb-10 max-w-2xl">
                            <span className="text-white font-medium">Industry-specific, scalable, and compliance-ready</span> HR solutions designed to solve real business challenges.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/contact" className="bg-brand-600 text-white px-8 py-4 rounded-full font-bold hover:bg-brand-500 transition-all shadow-lg flex items-center justify-center gap-2">
                                Explore Solutions <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Solution Categories Overview */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-accent-600 font-bold uppercase tracking-widest text-sm mb-4 block">Three Core Pillars</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                            Solutions Built for <span className="text-brand-600">Every Business Need</span>
                        </h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light">
                            Whether you're hiring talent, managing workforce, or optimizing HR operations — we have a solution designed for you.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: Briefcase, label: "Hiring Solutions", desc: "Specialized recruitment models for every business type and scale", link: "/solutions/hiring" },
                            { icon: Users, label: "Workforce Solutions", desc: "End-to-end workforce management and payroll solutions", link: "/solutions/workforce" },
                            { icon: BarChart3, label: "Business HR Solutions", desc: "Scalable, compliant, and cost-optimized HR frameworks", link: "/solutions/business-hr" }
                        ].map((item, i) => (
                            <Link key={i} to={item.link} className="group">
                                <div className="text-center p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-xl hover:border-brand-200 transition-all h-full">
                                    <div className="w-16 h-16 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-600 mx-auto mb-6 group-hover:bg-brand-600 group-hover:text-white transition-all">
                                        <item.icon className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-600 transition-colors">{item.label}</h3>
                                    <p className="text-slate-600 leading-relaxed mb-4">{item.desc}</p>
                                    <div className="inline-flex items-center gap-2 text-brand-600 font-medium text-sm group-hover:gap-3 transition-all">
                                        Explore <ArrowRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Hiring Solutions */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="w-12 h-12 bg-brand-600 rounded-xl flex items-center justify-center text-white">
                            <Briefcase className="w-6 h-6" />
                        </div>
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Hiring Solutions</h2>
                            <p className="text-slate-600">Recruitment models tailored to your business type and hiring needs</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                title: "IT Hiring Solutions",
                                desc: "Specialized tech talent acquisition for software, product, and IT services companies.",
                                link: "/solutions/hiring/it-hiring",
                                icon: Layers
                            },
                            {
                                title: "Non-IT Hiring Solutions",
                                desc: "Cross-functional hiring across sales, operations, finance, and support roles.",
                                link: "/solutions/hiring/non-it-hiring",
                                icon: Building
                            },
                            {
                                title: "Startup Hiring Solutions",
                                desc: "Fast, flexible hiring models designed for early-stage and growth-stage startups.",
                                link: "/solutions/hiring/startup-hiring",
                                icon: Rocket
                            },
                            {
                                title: "Enterprise Hiring Solutions",
                                desc: "Large-scale recruitment programs with dedicated account management and SLAs.",
                                link: "/solutions/hiring/enterprise-hiring",
                                icon: Target
                            },
                            {
                                title: "Fast Closure Hiring Model",
                                desc: "Accelerated hiring for urgent requirements with guaranteed turnaround times.",
                                link: "/solutions/hiring/fast-closure-hiring",
                                icon: Zap
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white p-6 rounded-2xl border border-slate-100 hover:shadow-lg hover:border-brand-200 transition-all group"
                            >
                                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-brand-600 mb-4 group-hover:bg-brand-600 group-hover:text-white transition-all">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                                <p className="text-sm text-slate-600 mb-4 leading-relaxed">{item.desc}</p>
                                <Link to={item.link} className="inline-flex items-center gap-2 text-brand-600 font-medium text-sm group-hover:gap-3 transition-all">
                                    Learn More <ArrowRight className="w-3 h-3" />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Workforce Solutions */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center text-white">
                            <Users className="w-6 h-6" />
                        </div>
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Workforce Solutions</h2>
                            <p className="text-slate-600">Comprehensive workforce management and payroll services</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Contract Workforce Management",
                                desc: "End-to-end management of contract employees including onboarding, payroll, and compliance.",
                                link: "/solutions/workforce/contract-management",
                                features: ["Contract hiring", "Payroll processing", "Statutory compliance", "Exit management"]
                            },
                            {
                                title: "Third-Party Payroll Solutions",
                                desc: "Outsourced payroll processing with full compliance and technology integration.",
                                link: "/solutions/workforce/third-party-payroll",
                                features: ["Payroll automation", "Tax compliance", "Employee self-service", "MIS & reporting"]
                            },
                            {
                                title: "Multi-Location Workforce Solutions",
                                desc: "Centralized workforce management across multiple cities and states.",
                                link: "/solutions/workforce/multi-location",
                                features: ["Pan-India operations", "Centralized reporting", "State-wise compliance", "Unified platform"]
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-lg hover:border-emerald-200 transition-all"
                            >
                                <h3 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h3>
                                <p className="text-sm text-slate-600 mb-4 leading-relaxed">{item.desc}</p>
                                <ul className="space-y-2 mb-6">
                                    {item.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-xs text-slate-600">
                                            <CheckCircle className="w-3 h-3 text-emerald-500 shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <Link to={item.link} className="inline-flex items-center gap-2 text-emerald-600 font-medium text-sm hover:gap-3 transition-all">
                                    Learn More <ArrowRight className="w-3 h-3" />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Business HR Solutions */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center text-white">
                            <BarChart3 className="w-6 h-6" />
                        </div>
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Business HR Solutions</h2>
                            <p className="text-slate-600">Strategic HR frameworks for operational excellence</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Scalable HR Model",
                                desc: "HR infrastructure that grows with your business from 50 to 5000+ employees.",
                                link: "/solutions/business-hr/scalable-hr-model",
                                icon: TrendingUp,
                                color: "purple"
                            },
                            {
                                title: "Compliance-Ready HR Solutions",
                                desc: "Audit-ready HR processes with built-in statutory compliance frameworks.",
                                link: "/solutions/business-hr/compliance-ready",
                                icon: ShieldCheck,
                                color: "purple"
                            },
                            {
                                title: "Cost-Optimized HR Solutions",
                                desc: "Reduce HR operational costs while improving efficiency and employee experience.",
                                link: "/solutions/business-hr/cost-optimized",
                                icon: Target,
                                color: "purple"
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white p-6 rounded-2xl border border-slate-100 hover:shadow-lg hover:border-purple-200 transition-all group"
                            >
                                <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600 mb-4 group-hover:bg-purple-600 group-hover:text-white transition-all">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                                <p className="text-sm text-slate-600 mb-4 leading-relaxed">{item.desc}</p>
                                <Link to={item.link} className="inline-flex items-center gap-2 text-purple-600 font-medium text-sm group-hover:gap-3 transition-all">
                                    Learn More <ArrowRight className="w-3 h-3" />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-slate-900 text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
                        Find the Right <span className="text-accent-500">Solution for Your Business</span>
                    </h2>
                    <p className="text-xl text-slate-300 mb-12 leading-relaxed font-light">
                        Not sure which solution fits your needs? Our team can help you design a custom approach.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link to="/contact" className="bg-brand-600 text-white px-10 py-4 rounded-full font-bold hover:bg-brand-700 transition-all shadow-xl">
                            Schedule a Consultation
                        </Link>
                        <Link to="/company/case-studies" className="bg-white text-brand-900 px-10 py-4 rounded-full font-bold hover:bg-slate-100 transition-all shadow-xl">
                            View Case Studies
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Solutions;
