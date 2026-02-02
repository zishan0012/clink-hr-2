import React from 'react';
import { motion } from 'framer-motion';
import Testimonials from '../../../components/Testimonials';
import {
    Users,
    Search,
    Briefcase,
    Target,
    Layers,
    CheckCircle,
    ArrowRight,
    Globe,
    Shield,
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
            <Link to={link || "/contact/hire-talent"} className="inline-flex items-center gap-2 text-brand-600 font-bold hover:text-brand-800 transition-colors">
                Explore Service <ArrowRight className="w-4 h-4" />
            </Link>
        </div>
    </motion.div>
);

const RecruitmentServices = () => {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="bg-brand-950 py-32 relative overflow-hidden">
                <div className="absolute inset-0">
                    <motion.img
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80"
                        alt="Recruitment Strategy"
                        className="w-full h-full object-cover"
                        loading="eager"
                        fetchPriority="high"
                    />
                    <div className="absolute inset-0 bg-brand-950/50"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-3xl"
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-brand-800/50 border border-brand-700 text-brand-200 text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-md">
                            Specialized Recruitment
                        </span>
                        <h1 className="text-4xl md:text-8xl font-extrabold text-white mb-8 leading-[1.1] tracking-tight">
                            Scalable <br />
                            <span className="text-accent-500">Recruitment</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-200 leading-relaxed font-light mb-10 max-w-2xl">
                            CLink HR delivers end-to-end recruitment services designed to help organizations <span className="text-white font-medium">hire faster</span> and maintain hiring quality.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/contact/hire-talent" className="bg-brand-600 text-white px-8 py-4 rounded-full font-bold hover:bg-brand-500 transition-all shadow-lg flex items-center justify-center gap-2">
                                Submit Requirement <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link to="/contact" className="px-8 py-4 rounded-full font-bold border border-white/30 text-white hover:bg-white hover:text-brand-900 transition-all backdrop-blur-sm">
                                Talk to Our Team
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Our Approach */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="lg:pr-12">
                            <span className="text-accent-600 font-bold uppercase tracking-widest text-sm mb-4 block">Execution Excellence</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">Our Recruitment <br /><span className="text-brand-600">Approach & Method</span></h2>
                            <p className="text-xl text-slate-600 mb-10 leading-relaxed font-light">
                                Hiring today requires <span className="text-accent-600 font-bold">speed, reach, and control</span>. Our recruitment services are built to provide all three through a centralized governance model.
                            </p>
                            <div className="grid grid-cols-2 gap-6 mt-8">
                                {[
                                    { label: "Role Understanding", icon: Search },
                                    { label: "Parallel Hiring", icon: Layers },
                                    { label: "Defined SLAs", icon: Clock },
                                    { label: "Central Coordination", icon: Target }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:border-accent-200 transition-colors group">
                                        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-accent-500 shadow-sm shrink-0 group-hover:bg-accent-600 group-hover:text-white transition-colors">
                                            <item.icon className="w-6 h-6" />
                                        </div>
                                        <span className="font-bold text-slate-800 text-sm leading-tight">{item.label}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="mt-8 text-slate-600 italic border-l-4 border-brand-500 pl-4 font-light">
                                "Clients work with one trusted partner, while recruitment execution is managed efficiently in the background."
                            </p>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-brand-200 rounded-[2.5rem] -rotate-3 opacity-30"></div>
                            <img
                                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                                alt="Recruitment Team"
                                className="relative rounded-[2.5rem] shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Offerings */}
            <section className="py-24 bg-slate-50" id="services">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-brand-600 font-bold uppercase tracking-widest text-sm">Key Offerings</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-2">Our Recruitment Services</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <ServiceCard
                            title="Permanent Hiring"
                            description="We support permanent hiring across junior, mid-level, and senior roles with a focus on long-term fit."
                            benefits={["Role-based sourcing", "Structured screening", "Interview coordination", "Offer support"]}
                            icon={Briefcase}
                            link="/services/recruitment/permanent-hiring"
                        />
                        <ServiceCard
                            title="Contract Staffing"
                            description="Flexible staffing solutions for short-term, project-based, or ongoing workforce needs."
                            benefits={["Temporary hiring", "Payroll coordination", "Scalability", "Compliance support"]}
                            icon={Layers}
                            link="/services/recruitment/contract-staffing"
                        />
                        <ServiceCard
                            title="Bulk Hiring"
                            description="High-volume hiring solutions for large or time-sensitive workforce requirements."
                            benefits={["BPO & Support hiring", "Manufacturing roles", "Retail & Frontline", "Fast turnaround"]}
                            icon={Users}
                            link="/services/recruitment/bulk-hiring"
                        />
                        <ServiceCard
                            title="Executive Search"
                            description="Confidential and focused hiring support for leadership and critical roles."
                            benefits={["Senior management", "Talent mapping", "Discreet search", "Quality shortlisting"]}
                            icon={Shield}
                            link="/services/recruitment/executive-search"
                        />
                    </div>
                </div>
            </section>

            {/* Quality & Accountability */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Execution Rigor</h2>
                        <p className="text-xl text-slate-600 mt-4 max-w-2xl mx-auto font-light">
                            Every recruitment engagement is managed with transparency and confidence.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { title: "Defined timelines & SLAs", desc: "Clear expectations for delivery.", icon: Clock },
                            { title: "Quality screening", desc: "Rigorous validation process.", icon: CheckCircle },
                            { title: "Replacement frameworks", desc: "Assurance for failed hires.", icon: Layers },
                            { title: "Regular reporting", desc: "Consistent progress updates.", icon: BarChart3 }
                        ].map((item, i) => (
                            <div key={i} className="text-center p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all">
                                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm text-brand-600">
                                    <item.icon className="w-8 h-8" strokeWidth={1.5} />
                                </div>
                                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                                <p className="text-sm text-slate-600 font-light">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries & Why Choose Us */}
            <section className="py-24 bg-brand-950 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500 rounded-full blur-3xl -mr-48 -mt-48"></div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-bold mb-8">Why Choose <br /><span className="text-accent-500">CLink HR</span></h2>
                            <ul className="space-y-6">
                                {[
                                    "Faster hiring through structured execution",
                                    "Reduced dependency on a single team",
                                    "Consistent hiring quality and process control",
                                    "Pan-India hiring capability",
                                    "Single point of accountability"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-4 items-center p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all">
                                        <CheckCircle className="w-6 h-6 text-accent-500 shrink-0" />
                                        <span className="font-bold text-lg">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold mb-8">Recruitment Across Sectors</h2>
                            <div className="flex flex-wrap gap-3">
                                {["IT & Software", "Manufacturing", "Healthcare", "Retail & E-Commerce", "Logistics", "BFSI", "Education", "Startups"].map((ind, i) => (
                                    <span key={i} className="px-5 py-3 bg-white/10 rounded-xl text-sm font-bold border border-white/10 hover:bg-white/20 transition-colors cursor-default">
                                        {ind}
                                    </span>
                                ))}
                            </div>
                            <h2 className="text-3xl font-bold mb-8 mt-12">Target Engagement Models</h2>
                            <div className="grid grid-cols-2 gap-4">
                                {["Startup Build-outs", "Scaling Operations", "Multi-location Hiring", "High-volume Ramp-ups"].map((ind, i) => (
                                    <div key={i} className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                                        <h4 className="font-bold text-sm text-accent-400">{ind}</h4>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-32 bg-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="w-20 h-20 bg-brand-50 rounded-full flex items-center justify-center mx-auto mb-8 text-brand-600">
                        <Users className="w-10 h-10" strokeWidth={1.5} />
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 tracking-tight">Hire with <span className="text-accent-500">Precision.</span></h2>
                    <p className="text-xl text-slate-600 mb-12 leading-relaxed max-w-2xl mx-auto font-light">
                        "CLink HR delivers recruitment services that combine speed, scale, and accountability."
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link to="/contact/hire-talent" className="bg-brand-600 text-white px-12 py-5 rounded-full font-bold hover:bg-brand-700 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1">
                            Submit Your Requirement
                        </Link>
                    </div>
                </div>
            </section>

            <Testimonials />
        </div>
    );
};

export default RecruitmentServices;
