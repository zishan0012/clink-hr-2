import React from 'react';
import { motion } from 'framer-motion';
import {
    Calculator,
    ShieldCheck,
    FileText,
    Users,
    Clock,
    BarChart3,
    CheckCircle,
    ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ title, description, benefits, icon: Icon, id, link }) => (
    <motion.div
        id={id}
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
            <p className="text-slate-600 mb-8 leading-relaxed">
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
            <Link to={link || "/contact/payroll-inquiry"} className="inline-flex items-center gap-2 text-brand-600 font-bold hover:text-brand-800 transition-colors">
                Explore Service <ArrowRight className="w-4 h-4" />
            </Link>
        </div>
    </motion.div>
);

const PayrollServices = () => {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="bg-brand-950 py-32 relative overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                        alt="Financial Planning"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-brand-950/50"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl"
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-brand-600/20 border border-brand-500/30 text-brand-300 text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-md">
                            Operational Excellence
                        </span>
                        <h1 className="text-4xl md:text-8xl font-extrabold text-white mb-8 tracking-tight leading-[1.1]">
                            Payroll & <br />
                            <span className="text-accent-500">HR Operations</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-200 leading-relaxed font-light mb-10 max-w-2xl">
                            Ensure <span className="text-white font-medium">100% compliance</span>, timely processing, and complete accuracy for your distributed workforce.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/contact/payroll-inquiry" className="bg-brand-600 text-white px-8 py-4 rounded-full font-bold hover:bg-brand-500 transition-all shadow-lg flex items-center justify-center gap-2">
                                Discuss Requirements <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Why It Matters */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="lg:pr-12">
                            <span className="text-accent-600 font-bold uppercase tracking-widest text-sm mb-4 block">Process Integrity</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">Why Payroll & <br /><span className="text-brand-600">HR Management</span> Matters</h2>
                            <p className="text-xl text-slate-600 mb-10 leading-relaxed font-light">
                                Effective operations are critical for employee trust and <span className="text-accent-600 font-bold">statutory compliance</span>. CLink HR helps organizations reduce administrative burden while maintaining clarity.
                            </p>
                            <div className="grid grid-cols-2 gap-6 mt-8">
                                {[
                                    { label: "100% Statutory Compliance", icon: ShieldCheck },
                                    { label: "Timely Salary Processing", icon: Clock },
                                    { label: "Data Security Assurance", icon: FileText },
                                    { label: "Transparent Reporting", icon: BarChart3 }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm hover:border-accent-200 transition-colors group">
                                        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-accent-500 shadow-sm shrink-0 group-hover:bg-accent-600 group-hover:text-white transition-colors">
                                            <item.icon className="w-6 h-6" />
                                        </div>
                                        <span className="font-bold text-slate-800 text-sm leading-tight">{item.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-brand-200 rounded-[2rem] rotate-6 opacity-30"></div>
                            <img
                                src="https://i.pinimg.com/1200x/70/08/c4/7008c46c3d62fc9151f81e6894b07fd1.jpg"
                                alt="Payroll Accounting"
                                className="relative rounded-[2rem] shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24 bg-slate-50" id="services">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-brand-600 font-bold uppercase tracking-widest text-sm">What We Offer</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">Our Payroll & HR Service Offerings</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <ServiceCard
                            id="third-party"
                            title="Third-Party Payroll Solutions"
                            description="We support organizations that require payroll management for contract or third-party workforce."
                            benefits={["Salary processing coordination", "Payslip & documentation support", "Workforce data management", "Centralized reporting"]}
                            icon={Users}
                            link="/services/payroll/third-party-payroll"
                        />
                        <ServiceCard
                            id="compliance"
                            title="Workforce Compliance"
                            description="We help organizations stay compliant with applicable workforce regulations and labor laws."
                            benefits={["Statutory compliance (PF/ESIC)", "Process & audit readiness", "Compliance tracking & reporting", "Legal risk mitigation"]}
                            icon={ShieldCheck}
                            link="/services/payroll/statutory-compliance"
                        />
                        <ServiceCard
                            id="hr-ops"
                            title="HR Operations Support"
                            description="Structured HR support to simplify workforce administration and employee lifecycle management."
                            benefits={["Employee lifecycle coordination", "Attendance & leave management", "Policy alignment guidance", "Ongoing operational assistance"]}
                            icon={FileText}
                            link="/services/payroll/hr-operations"
                        />
                    </div>
                </div>
            </section>

            {/* Industries & Benefits */}
            <section className="py-24 bg-brand-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16">
                        <div>
                            <h2 className="text-3xl font-bold mb-8">Serving Across Industries</h2>
                            <div className="flex flex-wrap gap-3">
                                {["IT & Software", "Manufacturing", "Healthcare", "Retail", "Logistics", "BFSI", "Education", "Startups"].map((ind, i) => (
                                    <span key={i} className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium border border-white/10 hover:bg-white/20 transition-colors cursor-default">
                                        {ind}
                                    </span>
                                ))}
                            </div>
                            <p className="mt-8 text-brand-100 leading-relaxed font-light">
                                Whether you are a startup scaling fast or an enterprise with multi-location needs, our payroll solutions adapt to your sector's specific requirements.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold mb-8">Why Choose CLink HR?</h2>
                            <ul className="space-y-4">
                                {[
                                    "Centralized coordination & governance",
                                    "Reduced administrative burden",
                                    "Pan-India operational capability",
                                    "Scalable support for growth"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-4 items-center p-4 bg-brand-800/50 rounded-xl border border-brand-700">
                                        <CheckCircle className="w-6 h-6 text-brand-400" />
                                        <span className="font-bold text-lg">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-24 bg-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="w-20 h-20 bg-brand-50 rounded-full flex items-center justify-center mx-auto mb-8 text-brand-600">
                        <Calculator className="w-10 h-10" strokeWidth={1.5} />
                    </div>
                    <h2 className="text-4xl font-bold text-slate-900 mb-6">Simplify Your Payroll & HR Today</h2>
                    <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                        "CLink HR delivers structured payroll and HR services that combine compliance, accuracy, and centralized accountability."
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contact/payroll-inquiry" className="bg-brand-600 text-white px-10 py-4 rounded-full font-bold hover:bg-brand-700 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1">
                            Get a Quote
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PayrollServices;
