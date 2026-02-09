import React from 'react';
import { motion } from 'framer-motion';
import Testimonials from '../../../components/Testimonials';
import {
    Shield,
    FileCheck,
    Scale,
    AlertTriangle,
    BookOpen,
    CheckCircle,
    ArrowRight,
    Factory,
    Monitor,
    Building2,
    Truck,
    ShoppingBag,
    Users,
    FileText,
    Gavel,
    Search
} from 'lucide-react';
import { Link } from 'react-router-dom';
import compliancereadyhero from '../../../assets/solutions-img/Compliance-Ready HR Solutions-hero.jpg';

const ComplianceReadyHRSolutions = () => {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="bg-brand-950 py-32 relative overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={compliancereadyhero}
                        alt="Compliance Ready HR"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-brand-950/50"></div>
                </div>

                <div className="max-w-7xl ml-0 mr-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="max-w-4xl"
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-brand-800/50 border border-brand-700 text-brand-200 text-xs font-semibold tracking-widest uppercase mb-6 backdrop-blur-md">
                            Compliance-Ready HR Solutions
                        </span>
                        <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-8 tracking-tight leading-[1.1]">
                            Stay Compliant <br />
                            Stay Confident<br />
                            <span className="text-accent-500">Stay Scalable</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-200 mb-8 font-light max-w-4xl leading-relaxed">
                            CLink HR’s Compliance-Ready HR Solutions help businesses operate with full regulatory confidence—ensuring workforce operations remain audit-ready, regulation-aligned, and risk-controlled.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/contact/hire-talent" className="bg-brand-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-brand-500 transition-all shadow-lg flex items-center justify-center gap-2">
                                Explore Compliance Solutions <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Why Matters */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Why Compliance-Ready HR <span className="text-brand-600">Matters</span></h2>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">
                            As organizations grow, compliance risks increase. Non-compliance can lead to penalties and operational disruptions.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: "Changing Regulations", desc: "Labor laws and statutory regulations evolve constantly.", icon: BookOpen },
                            { title: "Multi-State Compliance", desc: "Navigating workforce compliance across different states.", icon: GlobeIcon },
                            { title: "Third-Party Risks", desc: "Contractor and third-party payroll regulations.", icon: AlertTriangle },
                            { title: "Audit Readiness", desc: "Ensuring documentation is always ready for audits.", icon: FileCheck }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                                className="bg-slate-50 p-8 rounded-2xl border border-slate-100 group transition-all"
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

            {/* Our Approach */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-accent-600 font-bold uppercase tracking-widest text-sm mb-4 block">Our Approach</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Our Compliance-First HR Approach</h2>
                            <p className="text-xl text-slate-600 mb-8 font-light">
                                We embed compliance into every HR process rather than treating it as an afterthought.
                            </p>
                            <div className="space-y-6">
                                {[
                                    "Compliance-by-Design Framework",
                                    "Structured HR policies and SOPs",
                                    "Statutory alignment from onboarding to exit",
                                    "Centralized compliance tracking"
                                ].map((step, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="w-8 h-8 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center shrink-0 mt-1">
                                            <CheckCircle className="w-5 h-5" />
                                        </div>
                                        <p className="text-lg text-slate-700">{step}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute -inset-4 bg-brand-200/30 rounded-3xl -rotate-2"></div>
                            <img
                                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                                alt="Compliance Documentation"
                                className="relative rounded-2xl shadow-2xl w-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Compliance Areas */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Key Compliance Areas We Support</h2>
                    </div>

                    <div className="flex flex-wrap justify-center gap-8">
                        {[
                            {
                                title: "Statutory Compliance",
                                items: ["PF, ESI, PT, LWF coordination", "Statutory deductions oversight", "Regulatory documentation management"],
                                icon: Scale
                            },
                            {
                                title: "Labor Law Alignment",
                                items: ["Contract labor compliance coverage", "Shops & Establishment Act support", "Minimum wage adherence"],
                                icon: Gavel
                            },
                            {
                                title: "Payroll & Workforce",
                                items: ["Compliance-aligned payroll structuring", "Salary components validation", "Payroll audit readiness"],
                                icon: FileText
                            },
                            {
                                title: "Vendor & Partner",
                                items: ["Third-party workforce checks", "Documentation governance", "Periodic compliance reviews"],
                                icon: Users
                            },
                            {
                                title: "Audit & Reporting",
                                items: ["Compliance MIS and reports", "Internal and external audit coordination", "Documentation readiness"],
                                icon: Search
                            }
                        ].map((service, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.02 }}
                                className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-2rem)] bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-brand-200 transition-all hover:shadow-lg"
                            >
                                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-brand-600 shadow-sm mb-6">
                                    <service.icon className="w-7 h-7" />
                                </div>
                                <h3 className="font-bold text-slate-900 text-xl mb-4">{service.title}</h3>
                                <ul className="space-y-3">
                                    {service.items.map((item, idx) => (
                                        <li key={idx} className="text-slate-600 flex gap-2 items-start">
                                            <CheckCircle className="w-5 h-5 text-accent-500 shrink-0 mt-0.5" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

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
                                        { name: "Manufacturing & Engineering", icon: Factory },
                                        { name: "IT & Technology Services", icon: Monitor },
                                        { name: "BFSI & Fintech", icon: Building2 },
                                        { name: "Logistics & Warehousing", icon: Truck },
                                        { name: "Retail & Multi-Location", icon: ShoppingBag }
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
                                <h3 className="text-2xl font-bold mb-6 text-white">Benefits of Compliance-Ready HR</h3>
                                <ul className="space-y-4">
                                    {[
                                        "Reduced legal and statutory risk",
                                        "Audit-ready HR operations",
                                        "Standardized compliance governance",
                                        "Peace of mind for leadership teams",
                                        "Focus on business growth"
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
                                        "Deep workforce compliance frameworks",
                                        "Centralized compliance coordination",
                                        "Pan-India operational coverage",
                                        "Scalable compliance support"
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
                                        "We act as your compliance governance layer, ensuring nothing falls through the cracks."
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
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-12">Compliance Across Business Stages</h2>
                    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                        {[
                            "Startups Building Foundations",
                            "SMEs Expanding Regionally",
                            "Complex Enterprises",
                            "Contract Workforce Orgs"
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
                            <h2 className="text-3xl font-bold text-white mb-6">Operate With Confidence</h2>
                            <p className="text-xl text-brand-200 mb-8 max-w-3xl mx-auto">
                                With CLink HR’s Compliance-Ready HR Solutions, compliance becomes a business enabler—not a burden.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link to="/contact/hire-talent" className="bg-accent-500 text-brand-900 px-10 py-4 rounded-full font-semibold hover:bg-accent-400 transition-all shadow-xl">
                                    Explore Compliance Solutions
                                </Link>
                                <Link to="/contact" className="bg-transparent border border-white text-white px-10 py-4 rounded-full font-semibold hover:bg-white/10 transition-all">
                                    Talk to Our Compliance Experts
                                </Link>
                            </div>
                            <p className="mt-8 text-brand-300 text-sm font-light">
                                "Built to meet today’s regulations—and tomorrow’s expectations."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Testimonials />
        </div>
    );
};

// Helper Icon for Multi-State Compliance since GlobeIcon is not exported by default from lucide-react in all versions, 
// using a fallback or defined component.
const GlobeIcon = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <circle cx="12" cy="12" r="10" />
        <line x1="2" x2="22" y1="12" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
);

export default ComplianceReadyHRSolutions;
