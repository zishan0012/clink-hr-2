import React from 'react';
import { motion } from 'framer-motion';
import Testimonials from '../../../components/Testimonials';
import {
    TrendingUp,
    Layers,
    Shield,
    Users,
    BarChart3,
    CheckCircle,
    ArrowRight,
    Rocket,
    Factory,
    Building2,
    Truck,
    Stethoscope,
    Briefcase,
    Settings,
    UserPlus,
    FileText,
    ShoppingBag
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ScalableHRModel = () => {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="bg-brand-950 py-32 relative overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                        alt="Scalable HR Model"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-brand-950/50"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="max-w-4xl"
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-brand-800/50 border border-brand-700 text-brand-200 text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-md">
                            Scalable HR Model
                        </span>
                        <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-8 tracking-tight leading-[1.1]">
                            HR That Grows With <br />
                            <span className="text-accent-500">Your Business</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-200 mb-8 font-light max-w-4xl leading-relaxed">
                            CLink HR’s Scalable HR Model is a flexible, modular framework designed for organizations that are growing, evolving, or restructuring. We adapt as your workforce needs expand.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/contact/hire-talent" className="bg-brand-600 text-white px-8 py-4 rounded-full font-bold hover:bg-brand-500 transition-all shadow-lg flex items-center justify-center gap-2">
                                Explore Scalable HR Solutions <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Why Needed */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Why Businesses Need a <span className="text-brand-600">Scalable HR Model</span></h2>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">
                            As organizations grow, HR challenges change. A scalable model ensures HR never becomes a bottleneck to growth.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: "Process Limits", desc: "Informal HR processes stop working as you scale.", icon: Settings },
                            { title: "Compliance", desc: "Compliance requirements increase with headcount.", icon: Shield },
                            { title: "Hiring Volatility", desc: "Hiring volumes fluctuate, requiring flexible support.", icon: Users },
                            { title: "Management Complexity", desc: "Payroll and workforce management become complex.", icon: Layers }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
                                className="bg-slate-50 p-8 rounded-2xl transition-all border border-slate-100 group"
                            >
                                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-accent-500 shadow-sm mb-6 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <h3 className="font-bold text-slate-900 text-lg mb-3">{item.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Approach - Build Scale Optimize */}
            <section className="py-24 bg-brand-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <span className="text-accent-400 font-bold uppercase tracking-widest text-sm mb-4 block">Our Framework</span>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Build – Scale – Optimize</h2>
                        <p className="text-xl text-brand-200 max-w-2xl mx-auto font-light">
                            Our approach allows businesses to pay only for what they need—when they need it.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-10">
                        {[
                            { step: "01", title: "Build", desc: "Start with essential HR processes." },
                            { step: "02", title: "Scale", desc: "Add structured systems as headcount grows." },
                            { step: "03", title: "Optimize", desc: "Optimize governance, reporting, and compliance." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -10 }}
                                className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl relative"
                            >
                                <div className="text-6xl font-black text-white/5 absolute top-4 right-4">{item.step}</div>
                                <h3 className="text-2xl font-bold mb-4 text-accent-400">{item.title}</h3>
                                <p className="text-brand-100 text-lg">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Key Components */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Key Components of the <span className="text-brand-600">Scalable HR Model</span></h2>
                    </div>

                    <div className="flex flex-wrap justify-center gap-8">
                        {[
                            {
                                title: "Modular HR Services",
                                items: ["Choose HR services based on current business stage", "Add or remove services without disruption", "Flexible engagement models"],
                                icon: Layers
                            },
                            {
                                title: "Process Standardization",
                                items: ["Structured HR policies and SOPs", "Consistent employee lifecycle management", "Clear documentation and workflows"],
                                icon: FileText
                            },
                            {
                                title: "Hiring & Workforce Scalability",
                                items: ["Rapid scaling support during growth phases", "Controlled hiring during restructuring", "Workforce planning support"],
                                icon: UserPlus
                            },
                            {
                                title: "Payroll & Compliance Readiness",
                                items: ["Scalable payroll coordination", "Compliance-aligned workforce processes", "Audit and documentation readiness"],
                                icon: Shield
                            },
                            {
                                title: "HR Data & Reporting",
                                items: ["Workforce analytics and MIS", "Headcount and cost visibility", "Management dashboards"],
                                icon: BarChart3
                            }
                        ].map((service, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.02 }}
                                className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-brand-200 transition-all hover:shadow-lg w-full md:w-[calc(50%-1rem)]"
                            >
                                <div className="flex items-start gap-6">
                                    <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-brand-600 shadow-sm shrink-0">
                                        <service.icon className="w-7 h-7" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 text-xl mb-4">{service.title}</h3>
                                        <ul className="space-y-3">
                                            {service.items.map((item, idx) => (
                                                <li key={idx} className="text-slate-600 flex gap-2 items-start">
                                                    <CheckCircle className="w-5 h-5 text-accent-500 shrink-0 mt-0.5" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries & Benefits */}
            {/* Industries & Why Choose */}
            <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-800/20 skew-x-12"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16">

                        {/* Industries & Benefits Column */}
                        <div className="space-y-12">
                            {/* Industries */}
                            <div>
                                <h2 className="text-2xl font-bold mb-6 text-white">Industries We Support</h2>
                                <div className="flex flex-wrap gap-3">
                                    {[
                                        { name: "Technology & Startups", icon: Rocket },
                                        { name: "Manufacturing & Engineering", icon: Factory },
                                        { name: "BFSI & Fintech", icon: Building2 },
                                        { name: "Retail & Logistics", icon: ShoppingBag },
                                        { name: "Healthcare & Professional Services", icon: Stethoscope }
                                    ].map((ind, i) => (
                                        <motion.div
                                            key={i}
                                            whileHover={{ scale: 1.05 }}
                                            className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm font-medium hover:bg-white/20 transition-colors border border-white/5"
                                        >
                                            <ind.icon className="w-4 h-4 text-brand-200" />
                                            {ind.name}
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Benefits */}
                            <div>
                                <h3 className="text-2xl font-bold mb-6 text-white">Benefits of a Scalable HR Model</h3>
                                <ul className="space-y-4">
                                    {[
                                        "HR grows in sync with business expansion",
                                        "Reduced HR operational cost",
                                        "Improved compliance and governance",
                                        "Better workforce visibility",
                                        "No need for frequent HR restructuring"
                                    ].map((item, i) => (
                                        <motion.li
                                            key={i}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.1 }}
                                            className="flex gap-4 items-center text-slate-300"
                                        >
                                            <CheckCircle className="w-5 h-5 text-accent-500 shrink-0" />
                                            <span className="text-lg">{item}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Why Choose Card */}
                        <div>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="bg-white text-slate-900 p-8 rounded-3xl shadow-2xl relative"
                            >
                                <div className="absolute top-0 right-0 p-8 opacity-5">
                                    <Shield className="w-32 h-32 text-brand-900" />
                                </div>
                                <h3 className="text-2xl font-bold mb-8 text-brand-900">Why Choose CLink HR?</h3>
                                <ul className="space-y-5 relative z-10">
                                    {[
                                        "Flexible, growth-oriented HR frameworks",
                                        "Proven experience across business stages",
                                        "Centralized HR coordination",
                                        "Pan-India operational capability"
                                    ].map((item, i) => (
                                        <motion.li
                                            key={i}
                                            whileHover={{ x: 5 }}
                                            className="flex gap-4 items-start group"
                                        >
                                            <div className="w-6 h-6 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                                                <CheckCircle className="w-4 h-4" />
                                            </div>
                                            <span className="text-slate-700 font-medium group-hover:text-brand-700 transition-colors">{item}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                                <div className="mt-10 pt-8 border-t border-slate-100">
                                    <p className="text-slate-600 italic border-l-4 border-accent-500 pl-4 text-lg">
                                        "We help organizations scale faster—with HR that adapts, not breaks."
                                    </p>
                                </div>
                            </motion.div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Who Should Use + CTA */}
            <section className="py-24 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-12">Who Is This For?</h2>
                    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                        {[
                            "Startups & Early-Stage",
                            "Growing SMEs",
                            "New Market Entrants",
                            "Dynamic Enterprises"
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -5 }}
                                className="bg-slate-50 p-6 rounded-2xl flex flex-col items-center justify-center text-center h-full border border-slate-100 hover:border-accent-400 transition-colors"
                            >
                                <div className="w-2 h-2 bg-accent-500 rounded-full mb-4"></div>
                                <p className="font-medium text-slate-800">{item}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="bg-brand-900 rounded-[3rem] p-12 relative overflow-hidden">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                        <div className="relative z-10">
                            <h2 className="text-3xl font-bold text-white mb-6">Build HR That Supports Growth</h2>
                            <p className="text-xl text-brand-200 mb-8 max-w-3xl mx-auto">
                                With CLink HR’s Scalable HR Model, your HR function evolves seamlessly alongside your business.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link to="/contact/hire-talent" className="bg-accent-500 text-brand-900 px-10 py-4 rounded-full font-bold hover:bg-accent-400 transition-all shadow-xl">
                                    Explore Scalable HR Solutions
                                </Link>
                                <Link to="/contact" className="bg-transparent border border-white text-white px-10 py-4 rounded-full font-bold hover:bg-white/10 transition-all">
                                    Speak with Our HR Advisors
                                </Link>
                            </div>
                            <p className="mt-8 text-brand-300 text-sm font-light">
                                "A future-ready HR framework designed to grow, adapt, and scale with your business."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Testimonials />
        </div>
    );
};

export default ScalableHRModel;
