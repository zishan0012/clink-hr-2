import React from 'react';
import { motion } from 'framer-motion';
import Testimonials from '../../../components/Testimonials';
import {
    Users,
    FileText,
    Calculator,
    Shield,
    BarChart3,
    CheckCircle,
    ArrowRight,
    Factory,
    Truck,
    ShoppingBag,
    Building2,
    HeartPulse,
    Monitor,
    Layers,
    UserPlus,
    Settings
} from 'lucide-react';
import { Link } from 'react-router-dom';
import thirdpartyhero from '../../../assets/solutions-img/Third-Party Payroll Solutions-hero.jpg';

const ThirdPartyPayrollSolutions = () => {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="bg-brand-950 py-32 relative overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={thirdpartyhero}
                        alt="Payroll Solutions"
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
                            Third-Party Payroll Solutions
                        </span>
                        <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-8 tracking-tight leading-[1.1]">
                            Flexible Payroll Solutions for <br />
                            <span className="text-accent-500">Distributed & Contract</span> Workforce
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-200 mb-8 font-light max-w-4xl leading-relaxed">
                            CLink HR’s Third-Party Payroll Solutions help organizations manage workforce payroll through a structured, centrally coordinated payroll framework—without adding internal payroll complexity.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/contact/payroll-inquiry" className="bg-brand-600 text-white px-8 py-4 rounded-full font-bold hover:bg-brand-500 transition-all shadow-lg flex items-center justify-center gap-2">
                                Discuss Payroll Requirements <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Why Important */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Why Third-Party Payroll Solutions Are <span className="text-brand-600">Important</span></h2>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">
                            Without a structured payroll approach, businesses risk errors, delays, and compliance challenges. We bring process clarity.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: "Scale Workforce", desc: "Scale workforce quickly without payroll bottlenecks.", icon: Users },
                            { title: "Manage Contract Staff", desc: "Efficiently manage contract or off-roll employees.", icon: FileText },
                            { title: "Reduce Admin", desc: "Reduce internal payroll administration burden.", icon: Settings },
                            { title: "Maintain Flexibility", desc: "Maintain flexibility in workforce engagement.", icon: Layers }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-slate-50 p-8 rounded-2xl hover:shadow-lg transition-all border border-slate-100"
                            >
                                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-accent-500 shadow-sm mb-6">
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
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Our Third-Party Payroll Approach</h2>
                            <p className="text-xl text-slate-600 mb-8 font-light">
                                Our approach focuses on accuracy, coordination, and transparency. Clients benefit from one accountable payroll partner.
                            </p>
                            <div className="space-y-6">
                                {[
                                    "Centralized payroll coordination",
                                    "Workforce data and documentation management",
                                    "Payroll processing and payout coordination",
                                    "Ongoing query and escalation support"
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
                                src="https://images.unsplash.com/photo-1554224154-26032ffc0d07?ixlib=rb-4.0.3&auto=format&fit=crop&w=1426&q=80"
                                alt="Payroll Approach"
                                className="relative rounded-2xl shadow-2xl w-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>


            {/* Scope of Services */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Scope of Third-Party Payroll Solutions</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                title: "Employee Onboarding & Records",
                                items: ["Payroll onboarding coordination", "Employee master data management", "Documentation and compliance records"],
                                icon: UserPlus
                            },
                            {
                                title: "Payroll Processing & Payouts",
                                items: ["Salary calculation coordination", "Timely payroll processing", "Payout and reconciliation support"],
                                icon: Calculator
                            },
                            {
                                title: "Statutory & Compliance",
                                items: ["Statutory deduction alignment", "Compliance documentation readiness", "Support during audits or reviews"],
                                icon: Shield
                            },
                            {
                                title: "Payroll MIS & Reporting",
                                items: ["Payroll summaries and reports", "Cost and headcount visibility", "Management-level MIS support"],
                                icon: BarChart3
                            }
                        ].map((service, i) => (
                            <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-brand-200 transition-colors">
                                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-brand-600 shadow-sm mb-6">
                                    <service.icon className="w-6 h-6" />
                                </div>
                                <h3 className="font-bold text-slate-900 text-lg mb-4">{service.title}</h3>
                                <ul className="space-y-2">
                                    {service.items.map((item, idx) => (
                                        <li key={idx} className="text-sm text-slate-600 flex gap-2 items-start">
                                            <span className="w-1.5 h-1.5 bg-accent-500 rounded-full mt-2 shrink-0"></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries & Why Choose */}
            <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-800/20 skew-x-12"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16">

                        {/* Industries */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-2xl font-bold mb-6">Industries We Support</h2>
                                <div className="flex flex-wrap gap-3">
                                    {[
                                        { name: "IT & Software Services", icon: Monitor },
                                        { name: "Manufacturing & Engineering", icon: Factory },
                                        { name: "Logistics & Supply Chain", icon: Truck },
                                        { name: "Retail & E-Commerce", icon: ShoppingBag },
                                        { name: "BFSI & Financial Services", icon: Building2 },
                                        { name: "Healthcare & Facilities", icon: HeartPulse }
                                    ].map((ind, i) => (
                                        <div key={i} className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm font-medium hover:bg-white/20 transition-colors">
                                            <ind.icon className="w-4 h-4 text-brand-200" />
                                            {ind.name}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {/* Benefits */}
                            <div>
                                <h3 className="text-2xl font-bold mb-6">Benefits with CLink HR</h3>
                                <ul className="space-y-3">
                                    {[
                                        "Reduced payroll administration burden",
                                        "Centralized payroll visibility",
                                        "Improved accuracy and timelines",
                                        "Compliance-ready payroll operations",
                                        "Scalable support across locations"
                                    ].map((item, i) => (
                                        <li key={i} className="flex gap-3 items-center text-slate-300">
                                            <CheckCircle className="w-4 h-4 text-accent-500" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Why Choose Card */}
                        <div>
                            <div className="bg-white text-slate-900 p-8 rounded-3xl shadow-2xl">
                                <h3 className="text-2xl font-bold mb-6">Why Choose CLink HR?</h3>
                                <ul className="space-y-4">
                                    {[
                                        "Structured and transparent payroll processes",
                                        "Centralized coordination and accountability",
                                        "Pan-India payroll capability",
                                        "Scalable solutions aligned with business needs"
                                    ].map((item, i) => (
                                        <li key={i} className="flex gap-3 items-center">
                                            <CheckCircle className="w-5 h-5 text-brand-600 shrink-0" />
                                            <span className="text-slate-700 font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="mt-10 text-slate-600 italic border-l-4 border-accent-500 pl-4">
                                    "We ensure payroll operations remain reliable, compliant, and predictable."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Who Should Use + CTA */}
            <section className="py-24 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-12">Who Should Use Third-Party Payroll Solutions?</h2>
                    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                        {[
                            "Contract/Off-roll Workforce",
                            "Rapidly Scaling Ops",
                            "Multi-Location Enterprises",
                            "Efficiency Seekers"
                        ].map((item, i) => (
                            <div key={i} className="bg-slate-50 p-6 rounded-2xl flex flex-col items-center justify-center text-center h-full">
                                <div className="w-2 h-2 bg-accent-500 rounded-full mb-4"></div>
                                <p className="font-medium text-slate-800">{item}</p>
                            </div>
                        ))}
                    </div>

                    <div className="bg-brand-50 rounded-[3rem] p-12 relative overflow-hidden">
                        <div className="relative z-10">
                            <h2 className="text-3xl font-bold text-brand-900 mb-6">Simplify Payroll with Confidence</h2>
                            <p className="text-xl text-brand-800/80 mb-8 max-w-3xl mx-auto">
                                Partner with CLink HR to manage third-party payroll operations efficiently and focus on business growth.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link to="/contact/payroll-inquiry" className="bg-brand-600 text-white px-10 py-4 rounded-full font-bold hover:bg-brand-700 transition-all shadow-xl">
                                    Discuss Payroll Requirements
                                </Link>
                                <Link to="/contact" className="bg-white text-brand-700 border border-brand-200 px-10 py-4 rounded-full font-bold hover:bg-brand-50 transition-all">
                                    Talk to Our Payroll Solutions Team
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

export default ThirdPartyPayrollSolutions;
