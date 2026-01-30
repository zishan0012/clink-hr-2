import React from 'react';
import { motion } from 'framer-motion';
import Testimonials from '../../../components/Testimonials';
import {
    Zap,
    Clock,
    Target,
    Users,
    CheckCircle,
    ArrowRight,
    TrendingUp,
    Shield,
    BarChart3,
    Briefcase,
    Layers,
    Rocket,
    FileText,
    Settings,
    UserPlus,
    Activity,
    Search,
    FastForward,
    ShoppingBag,
    Building2,
    Factory,
    Truck
} from 'lucide-react';
import { Link } from 'react-router-dom';

const FastClosureHiringModel = () => {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="bg-brand-950 py-32 relative overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80"
                        alt="Fast Paced Business"
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
                            Fast Closure Hiring Model
                        </span>
                        <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-8 tracking-tight leading-[1.1]">
                            When Speed Matters Most, <br />
                            <span className="text-accent-500">We Deliver</span> Faster Closures
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-200 mb-8 font-light max-w-4xl leading-relaxed">
                            CLink HR’s Fast Closure Hiring Model is built for organizations that need to close positions quickly without compromising on hiring quality. Ideally suited for urgent requirements, replacement hiring, project ramp-ups, and business-critical roles.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/contact/hire-talent" className="bg-brand-600 text-white px-8 py-4 rounded-full font-bold hover:bg-brand-500 transition-all shadow-lg flex items-center justify-center gap-2">
                                Activate Fast Closure Hiring <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Why Needed */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Why a Fast Closure Model is <span className="text-brand-600">Needed</span></h2>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">
                            Traditional hiring processes are often too slow. We step in when timelines are critical.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: "Business Critical", desc: "Positions that directly impact revenue or operations.", icon: Target },
                            { title: "Project Delays", desc: "Projects stuck or delayed due to open roles.", icon: Clock },
                            { title: "Sudden Attrition", desc: "Unexpected departures impacting daily operations.", icon: Users },
                            { title: "Tight Timelines", desc: "Client or delivery deadlines that cannot be moved.", icon: TrendingUp }
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

            {/* How It Works */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-accent-600 font-bold uppercase tracking-widest text-sm mb-4 block">Our Methodology</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">How It Works</h2>
                            <p className="text-xl text-slate-600 mb-8 font-light leading-relaxed">
                                Our model focuses on speed with structure, not shortcuts. We ensure parallel pipelines and faster feedback cycles to meet your urgent needs.
                            </p>
                            <div className="space-y-6">
                                {[
                                    { text: "Clear role understanding upfront", icon: Target },
                                    { text: "Priority sourcing and screening", icon: Search },
                                    { text: "Parallel candidate pipelines", icon: Layers },
                                    { text: "Faster coordination and feedback cycles", icon: FastForward }
                                ].map((step, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex gap-4 items-center"
                                    >
                                        <div className="w-10 h-10 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center shrink-0">
                                            <step.icon className="w-5 h-5" />
                                        </div>
                                        <p className="text-lg text-slate-700 font-medium">{step.text}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* <div className="relative">
                            <div className="absolute inset-0 bg-brand-600/5 rounded-3xl -rotate-3 scale-105"></div>
                            <div className="relative bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
                                <h3 className="text-2xl font-bold text-slate-900 mb-6">The Fast Closure Edge</h3>
                                <div className="space-y-4">
                                    <div className="p-4 bg-brand-50 rounded-2xl border border-brand-100">
                                        <div className="flex items-center gap-3 mb-2">
                                            <Activity className="w-5 h-5 text-brand-600" />
                                            <span className="font-bold text-brand-900">Real-time Tracking</span>
                                        </div>
                                        <p className="text-slate-600 text-sm">Monitor every stage of your urgent requirements with live updates and transparency.</p>
                                    </div>
                                    <div className="p-4 bg-accent-50 rounded-2xl border border-accent-100">
                                        <div className="flex items-center gap-3 mb-2">
                                            <Zap className="w-5 h-5 text-accent-600" />
                                            <span className="font-bold text-accent-900">Priority Activation</span>
                                        </div>
                                        <p className="text-slate-600 text-sm">Positions are assigned to dedicated consultants for immediate start within 4 hours.</p>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>

            {/* Key Features Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Key <span className="text-brand-600">Features</span></h2>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">
                            Designed for speed, built for quality. Explore the core elements of our fast hiring framework.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            {
                                title: "Priority Hiring Execution",
                                items: [
                                    "Dedicated focus on urgent requirements",
                                    "Faster resume turnaround (24-48 hours)",
                                    "Consultant accountability for every role"
                                ],
                                icon: Rocket
                            },
                            {
                                title: "Parallel Sourcing Strategy",
                                items: [
                                    "Multiple channels activated simultaneously",
                                    "Reduced dependency on single pipelines",
                                    "Extensive database & network tapping"
                                ],
                                icon: Layers
                            },
                            {
                                title: "Accelerated Screening",
                                items: [
                                    "Immediate candidate validation",
                                    "Ready-to-interview shortlists",
                                    "Strict quality filtering at speed"
                                ],
                                icon: Shield
                            },
                            {
                                title: "Fast Interview Coordination",
                                items: [
                                    "Real-time scheduling support",
                                    "Rapid feedback tracking",
                                    "Dedicated offer management desk"
                                ],
                                icon: Clock
                            }
                        ].map((feature, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.02 }}
                                className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-brand-200 transition-all hover:shadow-lg"
                            >
                                <div className="flex items-start gap-6">
                                    <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-brand-600 shadow-sm shrink-0">
                                        <feature.icon className="w-7 h-7" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 text-xl mb-4">{feature.title}</h3>
                                        <ul className="space-y-3">
                                            {feature.items.map((item, idx) => (
                                                <li key={idx} className="text-slate-600 flex gap-2 items-start text-sm">
                                                    <CheckCircle className="w-4 h-4 text-accent-500 shrink-0 mt-0.5" />
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

            {/* Roles & Industries */}
            <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-800/20 skew-x-12"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Roles & Industries Column */}
                        <div className="space-y-12">
                            {/* Roles */}
                            <div>
                                <h2 className="text-2xl font-bold mb-6 text-white">Roles Best Suited</h2>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {[
                                        "Critical technology roles",
                                        "Sales and revenue roles",
                                        "Operations and support",
                                        "Urgent backfills",
                                        "Time-bound project hiring"
                                    ].map((role, i) => (
                                        <motion.div
                                            key={i}
                                            whileHover={{ scale: 1.05 }}
                                            className="flex items-center gap-3 p-4 bg-white/10 rounded-xl border border-white/5"
                                        >
                                            <CheckCircle className="w-5 h-5 text-accent-500 shrink-0" />
                                            <span className="text-slate-200 font-medium text-sm">{role}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Industries */}
                            <div>
                                <h2 className="text-2xl font-bold mb-6 text-white">Industries We Support</h2>
                                <div className="flex flex-wrap gap-3">
                                    {[
                                        { name: "IT & Software Services", icon: Rocket },
                                        { name: "E-Commerce & Retail", icon: ShoppingBag },
                                        { name: "BFSI & FinTech", icon: Building2 },
                                        { name: "Manufacturing", icon: Factory },
                                        { name: "Logistics", icon: Truck },
                                        { name: "Startups", icon: Rocket }
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
                                        "Speed-driven hiring framework",
                                        "Centralized coordination and accountability",
                                        "Scalable execution across locations",
                                        "Clear communication and reporting"
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
                                        "We focus on closing positions, not just sharing resumes."
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
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-12">Who Should Use This Model?</h2>
                    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                        {[
                            "Urgent/Replacement Hiring",
                            "Delivery Deadlines",
                            "Quick Ramp-up Needs",
                            "Limited Hiring Bandwidth"
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
                            <h2 className="text-3xl font-bold text-white mb-6">Close Positions Faster with Confidence</h2>
                            <p className="text-xl text-brand-200 mb-8 max-w-3xl mx-auto font-light">
                                CLink HR’s Fast Closure Hiring Model is designed to reduce time-to-hire through focused execution, parallel sourcing, and centralized coordination.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link to="/contact/hire-talent" className="bg-accent-500 text-brand-900 px-10 py-4 rounded-full font-bold hover:bg-accent-400 transition-all shadow-xl">
                                    Discuss Urgent Hiring Requirements
                                </Link>
                                <Link to="/contact" className="bg-transparent border border-white text-white px-10 py-4 rounded-full font-bold hover:bg-white/10 transition-all">
                                    Contact Our Fast Closure Team
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Testimonials />
        </div>
    );
};

export default FastClosureHiringModel;
