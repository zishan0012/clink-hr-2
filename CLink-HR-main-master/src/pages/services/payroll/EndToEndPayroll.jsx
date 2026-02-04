import React from 'react';
import { motion } from 'framer-motion';
import Testimonials from '../../../components/Testimonials';
import endToEndHero from '../../../assets/services-img/End-to-End-hero.jpg';
import {
    Activity,
    ShieldCheck,
    FileSpreadsheet,
    Calendar,
    CheckCircle,
    ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const EndToEndPayroll = () => {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="bg-brand-950 py-32 relative overflow-hidden">
                <div className="absolute inset-0">
                    <motion.img
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        src={endToEndHero}
                        alt="End-to-End Payroll Management"
                        className="w-full h-full object-cover"
                        loading="eager"
                        fetchPriority="high"
                    />
                    <div className="absolute inset-0 bg-brand-950/50"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="inline-block py-1 px-3 rounded-full bg-brand-800/50 border border-brand-700 text-brand-200 text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-md">
                                Total Management
                            </span>
                            <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-8 leading-[1.1] tracking-tight">
                                End-to-End <br />
                                <span className="text-accent-500">Payroll Support</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-slate-200 leading-relaxed font-light mb-10 max-w-2xl">
                                Complete Payroll Management from <span className="text-white font-medium">Onboarding to Exit</span>. Eliminate complexity and ensure timely salary processing.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link to="/contact/payroll-inquiry" className="bg-brand-600 text-white px-10 py-4 rounded-full font-bold hover:bg-brand-500 transition-all shadow-lg flex items-center justify-center gap-2 text-center">
                                    Discuss Solutions <ArrowRight className="w-5 h-5" />
                                </Link>
                            </div>
                        </motion.div>

                        {/* <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="relative block"
                        >
                            <div className="absolute inset-0 bg-brand-400/20 rounded-full blur-3xl"></div>
                            <img
                                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                                alt="Payroll Visualization"
                                className="relative z-10 rounded-[2.5rem] shadow-2xl border border-white/10 w-full object-cover h-[450px]"
                            /> */}
                        {/* Floating elements to add premium feel */}
                        {/* <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl z-20 flex items-center gap-3 border border-slate-100">
                                <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-green-600">
                                    <CheckCircle className="w-6 h-6" />
                                </div>
                                <div className="pr-4">
                                    <p className="text-[10px] text-slate-500 uppercase font-bold tracking-wider leading-none">Status</p>
                                    <p className="text-sm font-bold text-slate-900">Compliant</p>
                                </div>
                            </div>
                        </motion.div> */}
                    </div>
                </div>
            </section>

            {/* Approach Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="lg:pr-12">
                            <span className="text-accent-600 font-bold uppercase tracking-widest text-sm mb-4 block">Lifecycle Management</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">Complete Payroll <br /><span className="text-brand-600">Lifecycle</span></h2>
                            <p className="text-xl text-slate-600 mb-10 leading-relaxed font-light">
                                End-to-end payroll covers everything: employee onboarding, monthly processing, <span className="text-accent-600 font-bold">statutory compliance</span>, reporting, and final settlements. We take complete ownership.
                            </p>
                            <div className="grid grid-cols-2 gap-6 mt-8">
                                {[
                                    { label: "Onboarding Setup", icon: Calendar },
                                    { label: "Monthly Processing", icon: Activity },
                                    { label: "Statutory Compliance", icon: ShieldCheck },
                                    { label: "Reports & Analytics", icon: FileSpreadsheet }
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
                            <div className="absolute inset-0 bg-brand-200 rounded-[2rem] -rotate-3 opacity-30"></div>
                            <img
                                src="https://i.pinimg.com/1200x/57/a2/93/57a293dae3254368e2986e3fada70d38.jpg"
                                alt="Payroll Analytics"
                                className="relative rounded-[2rem] shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Scope Steps with Image */}
            <section className="py-24 bg-slate-50 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <span className="text-brand-600 font-bold uppercase tracking-widest text-sm">Full Cycle</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">Scope of Services</h2>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        <div className="space-y-6">
                            {[
                                { title: "Employee Onboarding", desc: "Data collection, verification, structure setup" },
                                { title: "Monthly Processing", desc: "Attendance input, calculation, payslip generation" },
                                { title: "Compliance Coordination", desc: "PF/ESIC deductions, audit readiness, documentation" },
                                { title: "Reporting & Records", desc: "Cost summaries, management reports, history maintenance" },
                                { title: "Exit Management", desc: "Full & final settlement, clearance support" }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex gap-6 items-start hover:shadow-md transition-shadow group"
                                >
                                    <span className="text-3xl font-bold text-brand-100 group-hover:text-brand-200 transition-colors">0{i + 1}</span>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                                        <p className="text-slate-600 font-light">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative lg:sticky lg:top-32"
                        >
                            <div className="absolute inset-0 bg-brand-900/10 rounded-[2.5rem] blur-2xl transform rotate-2"></div>
                            <img
                                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2426&q=80"
                                alt="Payroll Data Visualization"
                                className="relative rounded-[2rem] shadow-2xl border-8 border-white"
                            />
                            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-xl border border-slate-100 hidden md:block max-w-xs">
                                <p className="text-brand-600 font-bold mb-2 flex items-center gap-2">
                                    <ShieldCheck className="w-5 h-5" /> Data Security
                                </p>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    We use bank-grade encryption and secure protocols to handle all sensitive employee payroll data.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Key Benefits of End-to-End Management */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="absolute -inset-4 bg-brand-50 rounded-[3rem] -rotate-2"></div>
                            <img
                                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                                alt="Professional HR Support"
                                className="relative rounded-[2.5rem] shadow-2xl h-[500px] w-full object-cover"
                            />
                            <div className="absolute top-10 -right-10 bg-brand-600 text-white p-6 rounded-2xl shadow-xl hidden lg:block">
                                <p className="text-3xl font-extrabold mb-1">100%</p>
                                <p className="text-sm font-medium uppercase tracking-wider">Accuracy Guarantee</p>
                            </div>
                        </motion.div>

                        <div>
                            <span className="text-brand-600 font-bold uppercase tracking-widest text-sm mb-4 block">Why CLink HR?</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                                Benefits of Our Managed <span className="text-brand-600">Payroll Service</span>
                            </h2>
                            <div className="space-y-8">
                                {[
                                    { title: "Reduced Overhead", desc: "Save on internal HR and accounting costs by outsourcing to experts.", icon: Activity },
                                    { title: "Risk Mitigation", desc: "Avoid penalties with guaranteed statutory compliance and record-keeping.", icon: ShieldCheck },
                                    { title: "Scalable Operations", desc: "Easily grow your workforce without worrying about administrative limits.", icon: FileSpreadsheet },
                                    { title: "Employee Satisfaction", desc: "Accurate and timely payouts lead to a more motivated workforce.", icon: CheckCircle }
                                ].map((benefit, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center text-brand-600 shrink-0">
                                            <benefit.icon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1">{benefit.title}</h4>
                                            <p className="text-slate-600 leading-relaxed font-light">{benefit.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-24 bg-white">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="bg-brand-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-800 rounded-full -mr-32 -mt-32 blur-3xl opacity-50"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-800 rounded-full -ml-32 -mb-32 blur-3xl opacity-50"></div>

                        <div className="relative z-10">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center mx-auto mb-8 backdrop-blur-md border border-white/20"
                            >
                                <CheckCircle className="w-10 h-10 text-brand-400" strokeWidth={1.5} />
                            </motion.div>
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Take Complete Control of Your Payroll</h2>
                            <p className="text-xl text-brand-100 mb-10 leading-relaxed max-w-2xl mx-auto font-light">
                                "CLink HR delivers accuracy, compliance, and guaranteed peace of mind for your entire payroll function—from onboarding to final settlement."
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link to="/contact/payroll-inquiry" className="bg-white text-brand-900 px-10 py-5 rounded-full font-bold hover:bg-brand-50 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-2">
                                    Request End-to-End Proposal <ArrowRight className="w-5 h-5" />
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

export default EndToEndPayroll;
