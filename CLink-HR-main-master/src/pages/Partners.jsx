import React from 'react';
import { motion } from 'framer-motion';
import {
    Users,
    TrendingUp,
    Award,
    Briefcase,
    CheckCircle,
    ArrowRight,
    Target,
    DollarSign,
    UserPlus,
    Zap,
    Shield,
    Network
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Partners = () => {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="bg-brand-950 py-32 relative overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=1587&q=80"
                        alt="Partner with CLink HR"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-brand-950/85"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="max-w-3xl"
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-brand-800/50 border border-brand-700 text-brand-200 text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-md">
                            Partnership Program
                        </span>
                        <h1 className="text-4xl md:text-8xl font-extrabold text-white mb-8 tracking-tight leading-[1.1]">
                            Become an <br />
                            <span className="text-accent-500">IPP Partner.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-200 leading-relaxed font-light mb-10 max-w-2xl">
                            Join India's fastest-growing <span className="text-white font-medium">Independent Prime Partner (IPP) network</span> and build a scalable recruitment business with CLink HR.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/partners/become-ipp-partner" className="bg-brand-600 text-white px-8 py-4 rounded-full font-bold hover:bg-brand-500 transition-all shadow-lg flex items-center justify-center gap-2">
                                Become an IPP Partner <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link to="/contact/partner-inquiry" className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all flex items-center justify-center gap-2">
                                Partner Inquiry
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Value Proposition */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-accent-600 font-bold uppercase tracking-widest text-sm mb-4 block">Why Partner with CLink HR</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                            Build Your <span className="text-brand-600">Recruitment Business</span>
                        </h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light">
                            The IPP model empowers recruiters, consultants, and HR professionals to scale their business with zero infrastructure investment.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: TrendingUp, label: "Scalable Income", desc: "Unlimited earning potential with performance-based payouts" },
                            { icon: Shield, label: "Zero Investment", desc: "No setup costs, no technology fees, no hidden charges" },
                            { icon: Network, label: "Pan-India Access", desc: "Work on requirements across industries and locations" }
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

            {/* IPP Program Components */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Everything You Need to Know</h2>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">
                            Comprehensive information about the IPP Partner Program.
                        </p>
                    </div>

                    <div className="space-y-8">
                        {[
                            {
                                title: "IPP Partner Program",
                                desc: "A structured partnership model enabling independent recruiters and consultants to access CLink HR's client base, technology platform, and operational support.",
                                icon: Award,
                                link: "/partners/ipp-partner-program",
                                features: ["Access to verified client requirements", "Technology platform access", "Brand association with CLink HR", "Operational & compliance support"]
                            },
                            {
                                title: "Who Can Become an IPP",
                                desc: "The IPP model is designed for recruitment professionals, HR consultants, freelance recruiters, and agencies looking to scale without infrastructure investment.",
                                icon: Users,
                                link: "/partners/who-can-become-ipp",
                                features: ["Independent recruiters", "HR consultants & advisors", "Recruitment agencies", "Experienced talent acquisition professionals"]
                            },
                            {
                                title: "Why Join as an IPP",
                                desc: "Unlock growth opportunities with zero investment, flexible work models, performance-based earnings, and comprehensive business support.",
                                icon: Target,
                                link: "/partners/why-join-as-ipp",
                                features: ["Zero setup investment", "Flexible working model", "Unlimited earning potential", "Technology & brand support"]
                            },
                            {
                                title: "How IPP Model Works",
                                desc: "A transparent, technology-enabled process from requirement distribution to candidate placement and payout processing.",
                                icon: Zap,
                                link: "/partners/how-ipp-model-works",
                                features: ["Requirement allocation via platform", "Candidate sourcing & submission", "Client interview coordination", "Closure & payout processing"]
                            },
                            {
                                title: "IPP Onboarding Process",
                                desc: "A simple, structured onboarding journey designed to get you started quickly with full training and support.",
                                icon: UserPlus,
                                link: "/partners/ipp-onboarding-process",
                                features: ["Application & verification", "Agreement signing", "Platform training", "First requirement allocation"]
                            },
                            {
                                title: "IPP Earnings & Payout Model",
                                desc: "Transparent, performance-based earnings with timely payouts and clear payout structures across different hiring models.",
                                icon: DollarSign,
                                link: "/partners/ipp-earnings-payout",
                                features: ["Performance-based earnings", "Transparent payout structure", "Timely payment processing", "Bonus & incentive programs"]
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

            {/* Partner Journey */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Your IPP Journey</h2>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">
                            From application to your first successful placement.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-6">
                        {[
                            { step: "01", title: "Apply Online", desc: "Submit your IPP partner application with basic details" },
                            { step: "02", title: "Verification & Onboarding", desc: "Complete verification and sign partnership agreement" },
                            { step: "03", title: "Platform Training", desc: "Get trained on our technology platform and processes" },
                            { step: "04", title: "Start Earning", desc: "Receive requirements and start closing positions" }
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

            {/* Success Stories */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">IPP Partner Success</h2>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">
                            Real results from our partner network.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { number: "500+", label: "Active IPP Partners", desc: "Across India" },
                            { number: "10,000+", label: "Placements", desc: "Closed by IPP network" },
                            { number: "₹50L+", label: "Avg. Annual Earnings", desc: "For top performers" }
                        ].map((stat, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl border border-slate-100 text-center">
                                <div className="text-4xl md:text-5xl font-extrabold text-brand-600 mb-2">{stat.number}</div>
                                <div className="text-lg font-bold text-slate-900 mb-1">{stat.label}</div>
                                <div className="text-sm text-slate-500">{stat.desc}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-slate-900 text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
                        Ready to Build Your <span className="text-accent-500">Recruitment Business?</span>
                    </h2>
                    <p className="text-xl text-slate-300 mb-12 leading-relaxed font-light">
                        Join hundreds of successful IPP partners who are scaling their recruitment business with CLink HR.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link to="/partners/become-ipp-partner" className="bg-brand-600 text-white px-10 py-4 rounded-full font-bold hover:bg-brand-700 transition-all shadow-xl">
                            Apply as IPP Partner
                        </Link>
                        <Link to="/contact/partner-inquiry" className="bg-white text-brand-900 px-10 py-4 rounded-full font-bold hover:bg-slate-100 transition-all shadow-xl">
                            Schedule a Call
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Partners;
