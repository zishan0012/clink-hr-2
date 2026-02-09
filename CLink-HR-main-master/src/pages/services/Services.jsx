import React from 'react';
import { motion } from 'framer-motion';
import Testimonials from '../../components/Testimonials';
import servicesHero from '../../assets/services-img/Services main page-hero.jpg';
import {
    Users,
    CreditCard,
    Briefcase,
    Settings,
    Shield,
    CheckCircle,
    ArrowRight,
    Globe,
    Layers,
    Clock,
    BarChart3
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ title, description, benefits, icon: Icon, link }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group relative overflow-hidden flex flex-col h-full"
    >
        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-50 rounded-bl-[8rem] -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>

        <div className="relative z-10 flex-grow">
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-brand-600 shadow-sm mb-6 border border-slate-50">
                <Icon className="w-7 h-7" strokeWidth={1.5} />
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-4">{title}</h3>
            <p className="text-slate-600 mb-8 leading-relaxed font-light">
                {description}
            </p>

            <ul className="space-y-3 mb-8">
                {benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-700 text-sm font-medium">
                        <CheckCircle className="w-5 h-5 text-brand-500 shrink-0" />
                        {benefit}
                    </li>
                ))}
            </ul>
        </div>

        <div className="relative z-10 mt-auto">
            <Link to={link || "/contact"} className="inline-flex items-center gap-2 text-brand-600 font-bold hover:text-brand-800 transition-colors">
                Explore Services <ArrowRight className="w-4 h-4" />
            </Link>
        </div>
    </motion.div>
);

const Services = () => {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="bg-brand-950 py-32 relative overflow-hidden">
                <div className="absolute inset-0">
                    <motion.img
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        src={servicesHero}
                        alt="Comprehensive HR Services"
                        className="w-full h-full object-cover"
                        loading="eager"
                        fetchPriority="high"
                    />
                    <div className="absolute inset-0 bg-brand-950/70"></div>
                </div>

                <div className="max-w-7xl ml-0 mr-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="max-w-3xl"
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-brand-800/50 border border-brand-700 text-brand-200 text-xs font-semibold tracking-widest uppercase mb-6 backdrop-blur-md">
                            Services Overview
                        </span>
                        <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
                            HR Services <br />
                            <span className="text-accent-500">Built for Scale</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-200 leading-relaxed font-light mb-10 max-w-2xl">
                            CLink HR offers a range of recruitment, payroll, and workforce services designed to help organizations <span className="text-white font-medium">hire faster & operate efficiently</span>.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/contact/hire-talent" className="bg-brand-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-brand-500 transition-all shadow-lg flex items-center justify-center gap-2">
                                Hire Talent <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link to="/contact" className="px-8 py-4 rounded-full font-semibold border border-white/30 text-white hover:bg-white hover:text-brand-900 transition-all backdrop-blur-sm">
                                Talk to Our Team
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Service Philosophy */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="lg:pr-12">
                            <span className="text-accent-600 font-bold uppercase tracking-widest text-sm mb-4 block">Our DNA</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">Our Service <br /><span className="text-brand-600">Philosophy</span></h2>
                            <p className="text-xl text-slate-600 mb-8 leading-relaxed font-light">
                                We believe HR services should be <span className="text-accent-600 font-bold">simple to engage</span> and reliable to execute.
                            </p>
                            <p className="text-xl text-slate-600 mb-10 leading-relaxed font-light">
                                Delivered through a <span className="text-brand-600 font-bold">centralized management framework</span>, supported by deep domain expertise.
                            </p>
                            <div className="grid grid-cols-2 gap-6 mt-8">
                                {[
                                    { label: "Simple to Engage", icon: CheckCircle },
                                    { label: "Easy to Scale", icon: Layers },
                                    { label: "Transparent Mgmt", icon: Shield },
                                    { label: "Reliable Execution", icon: Settings }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:border-accent-200 transition-colors group">
                                        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-accent-500 shadow-sm shrink-0 group-hover:bg-accent-600 group-hover:text-white transition-colors">
                                            <item.icon className="w-6 h-6" />
                                        </div>
                                        <span className="font-bold text-slate-800 text-sm leading-tight">{item.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-brand-200 rounded-[2.5rem] rotate-3 opacity-30"></div>
                            <img
                                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                                alt="Service Philosophy"
                                className="relative rounded-[2.5rem] shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Categories */}
            <section className="py-24 bg-slate-50" id="services">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-2">Core Service Categories</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <ServiceCard
                            title="Recruitment Services"
                            description="End-to-end talent sourcing across junior, mid-level, and senior leadership positions."
                            benefits={["Permanent Hiring", "Contract Staffing", "Bulk Hiring", "Executive Search"]}
                            icon={Users}
                            link="/services/recruitment"
                        />
                        <ServiceCard
                            title="Payroll & HR Services"
                            description="Simplified payroll management and workforce administration for distributed teams."
                            benefits={["Third-Party Payroll", "Compliance Support", "HR Ops Support", "Audit Readiness"]}
                            icon={CreditCard}
                            link="/services/payroll"
                        />
                        <ServiceCard
                            title="Business Solutions"
                            description="Strategic hiring models designed around specific business growth use cases."
                            benefits={["Startup Hiring", "Enterprise Support", "Multi-Location Scaling", "Hiring Model Design"]}
                            icon={Briefcase}
                            link="/solutions/hiring"
                        />
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-32 bg-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="w-20 h-20 bg-brand-50 rounded-full flex items-center justify-center mx-auto mb-8 text-brand-600">
                        <Globe className="w-10 h-10" strokeWidth={1.5} />
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 tracking-tight">Hire with <span className="text-accent-500">Confidence.</span></h2>
                    <p className="text-xl text-slate-600 mb-12 leading-relaxed max-w-2xl mx-auto font-light">
                        "Your workforce is your competitive advantage. Build it right with CLink HR."
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link to="/contact/hire-talent" className="bg-brand-600 text-white px-12 py-5 rounded-full font-semibold hover:bg-brand-700 transition-all shadow-xl">
                            Start Hiring Now
                        </Link>
                    </div>
                </div>
            </section>

            <Testimonials />
        </div>
    );
};

export default Services;
