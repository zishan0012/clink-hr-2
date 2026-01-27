import React from 'react';
import { motion } from 'framer-motion';
import {
    Search,
    Layout,
    UserCheck,
    BarChart3,
    MonitorCheck,
    ArrowRight,
    CheckCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';

const StepCard = ({ number, title, description, icon: Icon, benefits, isLast }) => (
    <div className="relative">
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row gap-8 items-start relative z-10"
        >
            {/* Icon Column */}
            <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-2xl bg-brand-950 border border-brand-800 text-accent-500 flex items-center justify-center text-2xl font-bold shadow-xl sticky top-24 group-hover:bg-accent-600 group-hover:text-white transition-all">
                    <Icon className="w-10 h-10" strokeWidth={1.5} />
                </div>
                {!isLast && (
                    <div className="hidden md:block w-px h-full bg-slate-200 my-4 min-h-[250px] border-l-2 border-dashed border-slate-300"></div>
                )}
            </div>

            {/* Content Column */}
            <div className="flex-1 pb-16">
                <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 group">
                    <div className="flex items-center gap-6 mb-6">
                        <span className="text-6xl font-black text-slate-50 group-hover:text-accent-500/10 transition-colors uppercase tracking-tighter leading-none">{number}</span>
                        <h3 className="text-3xl font-bold text-slate-900 leading-tight">{title}</h3>
                    </div>

                    <p className="text-slate-600 text-xl leading-relaxed mb-8 font-light">
                        {description}
                    </p>

                    <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Deliverables & Impact</h4>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {benefits.map((b, i) => (
                                <div key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                                    <CheckCircle className="w-5 h-5 text-accent-500 shrink-0" />
                                    <span className="text-sm">{b}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    </div>
);

const OurApproach = () => {
    const steps = [
        {
            title: "Strategic Discovery",
            description: "We analyze your business objectives, culture, and operational bottlenecks before sourcing a single candidate.",
            benefits: ["Role Definition", "Scale Planning", "Timeline Audit", "Budget Mapping"],
            icon: Search
        },
        {
            title: "Solution Framework",
            description: "We architect a bespoke hiring or payroll model designed to absorb operational surges and maintain stability.",
            benefits: ["Engagement Design", "SLA Definition", "Process Automation", "Risk Mitigation"],
            icon: Layout
        },
        {
            title: "Governed Execution",
            description: "Execution is distributed across our network, but coordinated through a single point of accountability for you.",
            benefits: ["Unified Reporting", "Single Point of Contact", "Process Standard", "Seamless Sync"],
            icon: UserCheck
        },
        {
            title: "Rigor & Performance",
            description: "We govern outcomes through multi-level screening and regular audits to ensure speed never compromises quality.",
            benefits: ["Compliance Guardrails", "Quality Scoring", "Audit Readiness", "Efficiency Tracking"],
            icon: BarChart3
        },
        {
            title: "Tech Transparency",
            description: "You gain real-time visibility into the status of every mandate through our integrated data platforms.",
            benefits: ["Live Dashboards", "Candidate Analytics", "Pipeline Metrics", "Cost Visibility"],
            icon: MonitorCheck
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="bg-brand-950 py-32 relative overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                        alt="Methodology"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-brand-950/70"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-brand-800/50 border border-brand-700 text-brand-200 text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-md">
                            The Methodology
                        </span>
                        <h1 className="text-4xl md:text-8xl font-extrabold text-white mb-8 tracking-tight leading-[1.1]">
                            The <span className="text-accent-500">Method</span> Behind <br /> Our Execution.
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto font-light leading-relaxed">
                            A structured, <span className="text-white font-medium">5-step approach</span> built to deliver speed, control, and consistent quality.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Timeline Steps Section */}
            <section className="py-24 relative">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="md:pl-10">
                        {steps.map((step, index) => (
                            <StepCard
                                key={index}
                                number={`0${index + 1}`}
                                {...step}
                                isLast={index === steps.length - 1}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom Highlight */}
            <section className="pb-32 px-4 text-center">
                <div className="max-w-5xl mx-auto">
                    <div className="bg-brand-950 rounded-[3.5rem] p-16 md:p-24 relative overflow-hidden shadow-2xl group">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500 rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-all"></div>
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">Experience Global <br /><span className="text-accent-500">Service Standards.</span></h2>
                        <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                            "Understand the business. Design the right model. Execute with precision. Deliver with accountability."
                        </p>
                        <Link to="/contact" className="bg-accent-500 text-white px-12 py-5 rounded-full font-bold hover:bg-accent-600 transition-all shadow-xl inline-flex items-center gap-3">
                            Initiate Partnership <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default OurApproach;
