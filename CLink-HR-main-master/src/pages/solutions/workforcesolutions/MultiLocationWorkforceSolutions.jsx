import React from 'react';
import { motion } from 'framer-motion';
import Testimonials from '../../../components/Testimonials';
import {
    MapPin,
    Globe,
    Users,
    BarChart3,
    Shield,
    CheckCircle,
    ArrowRight,
    Factory,
    ShoppingBag,
    Truck,
    Building2,
    HeartPulse,
    Monitor,
    LayoutGrid,
    FileCheck
} from 'lucide-react';
import { Link } from 'react-router-dom';
import multilocationhero from '../../../assets/solutions-img/Multi-Location Workforce Solutions-hero.jpg';

const MultiLocationWorkforceSolutions = () => {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="bg-brand-950 py-32 relative overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={multilocationhero}
                        alt="Multi-Location Workforce"
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
                            Multi-Location Workforce Solutions
                        </span>
                        <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-8 tracking-tight leading-[1.1]">
                            One Workforce Partner for <br />
                            <span className="text-accent-500">Multiple Locations</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-200 mb-8 font-light max-w-4xl leading-relaxed">
                            CLink HR’s Multi-Location Workforce Solutions help organizations manage teams across multiple cities, states, and operational units—maintaining consistency, visibility, and control.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/contact/hire-talent" className="bg-brand-600 text-white px-8 py-4 rounded-full font-bold hover:bg-brand-500 transition-all shadow-lg flex items-center justify-center gap-2">
                                Discuss Multi-Location Needs <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Challenges */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Challenges of Managing a <span className="text-brand-600">Multi-Location</span> Workforce</h2>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">
                            Organizations operating across locations often face complexities. We solve them through a structured, centrally governed model.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: "Inconsistent Processes", desc: "Lack of uniform HR and workforce processes across regions.", icon: LayoutGrid },
                            { title: "Limited Visibility", desc: "Difficulty in tracking workforce data centrally.", icon: Globe },
                            { title: "Complex Coordination", desc: "Managing coordination across multiple operational units.", icon: Users },
                            { title: "Compliance Risks", desc: "Navigating varied compliance requirements across regions.", icon: Shield }
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
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Our Multi-Location Workforce Approach</h2>
                            <p className="text-xl text-slate-600 mb-8 font-light">
                                Our approach balances central governance with distributed execution, ensuring predictable outcomes and consistent experiences.
                            </p>
                            <div className="space-y-6">
                                {[
                                    "Centralized workforce coordination",
                                    "Standardized processes across locations",
                                    "Location-wise workforce tracking",
                                    "Unified reporting and MIS"
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
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80"
                                alt="Multi-Location Team"
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
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Scope of Multi-Location Workforce Solutions</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                title: "Centralized Coordination",
                                items: ["Single point of workforce management", "Requirement and change coordination", "Location-wise execution tracking"],
                                icon: MapPin
                            },
                            {
                                title: "Standardized HR & Payroll",
                                items: ["Consistent HR and payroll processes", "Uniform documentation and data management", "Payroll and payout coordination"],
                                icon: FileCheck
                            },
                            {
                                title: "Attendance & Workforce Data",
                                items: ["Location-wise attendance coordination", "Headcount and movement tracking", "Central workforce dashboards"],
                                icon: Users
                            },
                            {
                                title: "Compliance & Governance",
                                items: ["Workforce compliance coordination", "Documentation readiness across regions", "Support during audits and reviews"],
                                icon: Shield
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
                                        { name: "Manufacturing & Engineering", icon: Factory },
                                        { name: "Retail & E-Commerce", icon: ShoppingBag },
                                        { name: "Logistics & Supply Chain", icon: Truck },
                                        { name: "BFSI & Financial Services", icon: Building2 },
                                        { name: "Healthcare & Facilities", icon: HeartPulse },
                                        { name: "IT & Project-Based Services", icon: Monitor }
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
                                        "Centralized control with local flexibility",
                                        "Consistent workforce processes across locations",
                                        "Improved data visibility and reporting",
                                        "Reduced operational complexity",
                                        "Compliance-ready workforce operations"
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
                                        "Centralized workforce ownership",
                                        "Scalable, location-agnostic execution",
                                        "Pan-India operational capability",
                                        "Structured reporting and accountability"
                                    ].map((item, i) => (
                                        <li key={i} className="flex gap-3 items-center">
                                            <CheckCircle className="w-5 h-5 text-brand-600 shrink-0" />
                                            <span className="text-slate-700 font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="mt-10 text-slate-600 italic border-l-4 border-accent-500 pl-4">
                                    "We ensure workforce operations remain aligned—no matter how wide your footprint."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Who Should Use + CTA */}
            <section className="py-24 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-12">Who Should Use Multi-Location Solutions?</h2>
                    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                        {[
                            "Multi-City Enterprises",
                            "Regional Expansion",
                            "Distributed Teams",
                            "Unified Governance"
                        ].map((item, i) => (
                            <div key={i} className="bg-slate-50 p-6 rounded-2xl flex flex-col items-center justify-center text-center h-full">
                                <div className="w-2 h-2 bg-accent-500 rounded-full mb-4"></div>
                                <p className="font-medium text-slate-800">{item}</p>
                            </div>
                        ))}
                    </div>

                    <div className="bg-brand-50 rounded-[3rem] p-12 relative overflow-hidden">
                        <div className="relative z-10">
                            <h2 className="text-3xl font-bold text-brand-900 mb-6">Manage Workforce Across Locations with Confidence</h2>
                            <p className="text-xl text-brand-800/80 mb-8 max-w-3xl mx-auto">
                                Partner with CLink HR to simplify multi-location workforce management and focus on business expansion.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link to="/contact/hire-talent" className="bg-brand-600 text-white px-10 py-4 rounded-full font-bold hover:bg-brand-700 transition-all shadow-xl">
                                    Discuss Multi-Location Needs
                                </Link>
                                <Link to="/contact" className="bg-white text-brand-700 border border-brand-200 px-10 py-4 rounded-full font-bold hover:bg-brand-50 transition-all">
                                    Talk to Our Workforce Solutions Team
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

export default MultiLocationWorkforceSolutions;
