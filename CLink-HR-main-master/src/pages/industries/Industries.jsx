import React from 'react';
import { motion } from 'framer-motion';
import Testimonials from '../../components/Testimonials';
import {
    Code2,
    Factory,
    Stethoscope,
    ShoppingCart,
    Truck,
    Building2,
    GraduationCap,
    Rocket,
    ArrowRight,
    CheckCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import industriesMainHero from '../../assets/industries-img/industries main page-hero.jpg';


const Industries = () => {
    const industries = [
        { name: 'IT & Software', path: '/industries/it-software', icon: Code2, desc: "Tech stacks, AI/ML, and digital transformation talent." },
        { name: 'Manufacturing', path: '/industries/manufacturing', icon: Factory, desc: "CORE engineering, supply chain, and operational roles." },
        { name: 'Healthcare', path: '/industries/healthcare', icon: Stethoscope, desc: "Clinical, diagnostic, and pharma recruitment solutions." },
        { name: 'Retail & E-Commerce', path: '/industries/retail-ecommerce', icon: ShoppingCart, desc: "Last-mile, store ops, and digital retail talent." },
        { name: 'Logistics', path: '/industries/logistics', icon: Truck, desc: "Warehouse, fleet management, and 3PL recruitment." },
        { name: 'BFSI', path: '/industries/bfsi', icon: Building2, desc: "Banking, insurance, and fintech specialized hiring." },
        { name: 'Education', path: '/industries/education', icon: GraduationCap, desc: "Academic, admin, and EdTech professional staffing." },
        { name: 'Startups', path: '/industries/startups', icon: Rocket, desc: "Agile hiring for seed to series stage growth." },
    ];

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="bg-brand-950 py-32 relative overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={industriesMainHero}
                        alt="Industries We Serve"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-brand-950/70"></div>
                </div>

                <div className="max-w-7xl ml-0 mr-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-brand-800/50 border border-brand-700 text-brand-200 text-xs font-semibold tracking-widest uppercase mb-6 backdrop-blur-md">
                            Industry Verticals
                        </span>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-8 tracking-tight leading-[1.1]">
                            Expertise Across <br />
                            <span className="text-accent-500">Every Sector</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-200 leading-relaxed font-light mb-10 max-w-3xl">
                            We don't just recruit; we understand the <span className="text-white font-medium">nuances of each domain</span> to find the perfect cultural and technical fit.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Industries Grid */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {industries.map((ind, i) => (
                            <Link
                                key={i}
                                to={ind.path}
                                className="group bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 hover:border-accent-400 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col h-full"
                            >
                                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-accent-500 mb-8 group-hover:bg-accent-600 group-hover:text-white transition-all shadow-sm">
                                    <ind.icon className="w-8 h-8" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-brand-600 transition-colors">{ind.name}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed font-light mb-8 flex-grow">
                                    {ind.desc}
                                </p>
                                <div className="flex items-center gap-2 text-brand-600 font-bold text-sm">
                                    Explore Sector <ArrowRight className="w-4 h-4" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Our Sector Focus */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 relative">
                            <div className="absolute inset-0 bg-brand-200 rounded-[2.5rem] rotate-3 opacity-30"></div>
                            <img
                                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                                alt="Expert Team"
                                className="relative rounded-[2.5rem] shadow-2xl"
                            />
                        </div>
                        <div className="order-1 lg:order-2">
                            <span className="text-accent-600 font-bold uppercase tracking-widest text-sm mb-4 block">Domain Depth</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">Why Our Sector <br /><span className="text-brand-600">Specialization Matters</span></h2>
                            <p className="text-xl text-slate-600 mb-10 leading-relaxed font-light">
                                Generic recruitment often fails to capture role nuances. Our specialized desks ensure that we speak the <span className="text-accent-600 font-bold">language of your industry</span>.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Dedicated recruitment desks for each sector",
                                    "Pre-validated candidate databases per domain",
                                    "Understanding of specific statutory regulations",
                                    "Market intelligence and compensation trends"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-4 items-center p-4 bg-white rounded-2xl border border-slate-100">
                                        <CheckCircle className="w-6 h-6 text-accent-500 shrink-0" />
                                        <span className="font-bold text-slate-800">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-32 bg-brand-950 text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500 rounded-full blur-3xl -mr-48 -mt-48"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-500 rounded-full blur-3xl -ml-48 -mb-48"></div>
                </div>
                <div className="max-w-4xl mx-auto px-4 relative z-10">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">Need Sector-Specific <br /><span className="text-accent-500">Talent Solutions?</span></h2>
                    <p className="text-xl text-slate-300 mb-12 leading-relaxed font-light">
                        "Your industry is unique. Your hiring partner should be too."
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link to="/contact" className="bg-accent-500 text-white px-12 py-5 rounded-full font-semibold hover:bg-accent-600 transition-all shadow-2xl">
                            Start Sector Consultation
                        </Link>
                    </div>
                </div>
            </section>

            <Testimonials />
        </div>
    );
};

export default Industries;
