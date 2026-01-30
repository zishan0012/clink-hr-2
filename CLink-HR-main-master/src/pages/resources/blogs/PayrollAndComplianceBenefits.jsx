import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import operationalEfficiencyHero from '../../../assets/blog-img/Operational Efficiency.jpg';
import { Calendar, Clock, User, ArrowLeft, ShieldCheck, TrendingUp, CheckCircle, FileText, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

const PayrollAndComplianceBenefits = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white pt-20">
            {/* HERO SECTION */}
            <section className="relative bg-brand-950 py-20 pb-32 overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={operationalEfficiencyHero}
                        alt="Operational Efficiency"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-brand-950/60"></div>
                </div>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-800/50 border border-brand-700 text-brand-200 text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-md"
                    >
                        <span className="w-2 h-2 rounded-full bg-accent-500"></span>
                        Operational Efficiency
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-8 leading-tight"
                    >
                        How Effective Payroll & Compliance Services Can <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-brand-200">
                            Save Your Business Time and Money
                        </span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-wrap items-center gap-6 text-slate-300 text-sm md:text-base"
                    >
                        <div className="flex items-center gap-2">
                            <User className="w-4 h-4 text-accent-500" />
                            <span>CLink HR Team</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-accent-500" />
                            <span>Nov 12, 2025</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-accent-500" />
                            <span>7 min read</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CONTENT SECTION */}
            <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 -mt-20 mb-24">
                <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-slate-100">

                    {/* Introduction */}
                    <article className="prose prose-lg prose-slate max-w-none">
                        <p className="lead text-xl md:text-2xl text-slate-600 font-light leading-relaxed mb-10 border-l-4 border-accent-500 pl-6 italic">
                            Payroll and compliance are often treated as back-office tasks — until something goes wrong. A missed statutory filing, an incorrect salary calculation, or non-compliance with labour laws can lead to heavy penalties, legal disputes, employee dissatisfaction, and reputational damage.
                        </p>

                        <p className="mb-8">
                            In today’s complex regulatory environment, payroll and compliance are no longer administrative functions — they are critical business safeguards. As businesses scale, managing these in-house becomes increasingly challenging. This is where outsourced payroll and compliance services emerge as a strategic necessity.
                        </p>

                        <hr className="my-12 border-slate-200" />

                        <h2 className="text-3xl font-bold text-slate-900 mb-6">The Growing Complexity of Payroll & Compliance in India</h2>
                        <p className="mb-6">
                            India’s labour ecosystem is dynamic and highly regulated. Companies must comply with multiple laws, including:
                        </p>
                        <div className="grid md:grid-cols-2 gap-4 mb-8">
                            {[
                                "Provident Fund (PF)",
                                "Employee State Insurance (ESI)",
                                "Professional Tax (PT)",
                                "Gratuity Act",
                                "Minimum Wages Act",
                                "Shops & Establishment Acts",
                                "Labour Codes (wage, social security, OSH, IR)"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 p-3 bg-slate-50 border border-slate-100 rounded-lg">
                                    <FileText className="w-4 h-4 text-brand-600" />
                                    <span className="text-slate-700 text-sm font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                        <p className="mb-8">
                            Each regulation comes with its own timelines, documentation, audits, and reporting requirements. This complexity makes a strong case for outsourcing to specialized HR partners.
                        </p>

                        <h2 className="text-3xl font-bold text-slate-900 mb-6 pt-8">What Are Payroll & Compliance Services?</h2>
                        <div className="grid md:grid-cols-2 gap-6 mb-12">
                            <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm">
                                <h3 className="font-bold text-lg text-brand-800 mb-4 flex items-center gap-2">
                                    <TrendingUp className="w-5 h-5" /> Payroll Services
                                </h3>
                                <ul className="space-y-2 text-slate-600 text-sm">
                                    <li>• Salary calculation</li>
                                    <li>• Attendance and leave integration</li>
                                    <li>• Tax deductions & Reimbursements</li>
                                    <li>• Payslip generation</li>
                                    <li>• Payroll reports and analytics</li>
                                </ul>
                            </div>
                            <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm">
                                <h3 className="font-bold text-lg text-brand-800 mb-4 flex items-center gap-2">
                                    <ShieldCheck className="w-5 h-5" /> Compliance Services
                                </h3>
                                <ul className="space-y-2 text-slate-600 text-sm">
                                    <li>• Timely PF, ESI, PT filings</li>
                                    <li>• Labour law compliance</li>
                                    <li>• Employee documentation</li>
                                    <li>• Audit readiness</li>
                                    <li>• Regulatory updates implementation</li>
                                </ul>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-slate-900 mb-6">How It Saves You Time</h2>
                        <div className="space-y-6 mb-12">
                            {[
                                { title: "Automation Replaces Manual Effort", desc: "Outsourced payroll systems automate spreadsheets and repetitive calculations, drastically reducing administrative workload. CLink HR’s framework integrates auto-calculations and error-free payslips." },
                                { title: "Faster Processing Cycles", desc: "Payroll outsourcing eliminates last-minute delays. Defined workflows and expert teams ensure payroll is processed accurately and on time — every month." },
                                { title: "HR Teams Focus on Strategy", desc: "By outsourcing, internal HR teams can focus on talent engagement, workforce planning, and performance management instead of administrative tasks." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center text-brand-600 font-bold shrink-0">
                                        {i + 1}
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h4>
                                        <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <h2 className="text-3xl font-bold text-slate-900 mb-6">How It Saves You Money</h2>
                        <div className="space-y-6 mb-12">
                            {[
                                { title: "Reduced Operational Costs", desc: "Outsourcing eliminates the need for expensive in-house payroll staff, software licensing, training, and audit preparation expenses." },
                                { title: "Avoidance of Penalties", desc: "Non-compliance brings heavy fines and legal notices. With CLink HR managing statutory obligations, businesses avoid costly compliance errors." },
                                { title: "Predictable Cost Structure", desc: "Outsourced payroll operates on a fixed or scalable pricing model, helping businesses manage HR budgets more efficiently." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="w-8 h-8 rounded-full bg-accent-100 flex items-center justify-center text-accent-600 font-bold shrink-0">
                                        $
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h4>
                                        <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl mb-12">
                            <h3 className="text-amber-900 font-bold text-lg mb-2 flex items-center gap-2">
                                <AlertTriangle className="w-5 h-5" /> Compliance: The Risk You Can't Ignore
                            </h3>
                            <p className="text-amber-800 text-sm mb-4">
                                Compliance failures don’t just affect finances — they damage trust. CLink HR’s compliance-first approach ensures organizations stay ahead of regulatory changes — not react to them.
                            </p>
                        </div>

                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Payroll for a Flexible Workforce</h2>
                        <p className="mb-6">
                            With the rise of temporary staffing, gig roles, and project-based work, compliance has become more complex. CLink HR specializes in managing these models, ensuring correct worker classification, proper statutory coverage, and risk-free scaling.
                        </p>

                        <h2 className="text-3xl font-bold text-slate-900 mb-6">The Role of Technology in Modern Payroll Management</h2>
                        <p className="mb-6">
                            Technology is at the heart of modern payroll services. CLink HR leverages HRMS-enabled payroll solutions that offer:
                        </p>
                        <div className="bg-brand-50 rounded-2xl p-8 mb-12">
                            <ul className="space-y-4">
                                {[
                                    "Real-time payroll visibility",
                                    "Automated compliance alerts",
                                    "Secure data handling",
                                    "Employee self-service portals",
                                    "Custom reporting and analytics"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-brand-600 shrink-0" />
                                        <span className="text-brand-900 font-bold">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="mt-6 text-brand-800 font-medium border-t border-brand-200 pt-4">
                                This tech-driven approach enhances accuracy, transparency, and control — while minimizing human error.
                            </p>
                        </div>

                        <h2 className="text-3xl font-bold text-slate-900 mb-6 pt-4">Why Choose CLink HR for Payroll & Compliance Services?</h2>
                        <div className="grid md:grid-cols-2 gap-4 mb-12">
                            {[
                                { title: "Deep Regulatory Expertise", desc: "Continuous updates with evolving labour laws." },
                                { title: "End-to-End Ownership", desc: "Processing, filings, and audit support under one roof." },
                                { title: "Scalable Solutions", desc: "Services that scale with your workforce size." },
                                { title: "Technology-Driven", desc: "Real-time visibility via HRMS-enabled solutions." }
                            ].map((item, i) => (
                                <div key={i} className="p-4 bg-slate-50 rounded-lg">
                                    <strong className="block text-brand-700 mb-1">{item.title}</strong>
                                    <span className="text-slate-600 text-sm">{item.desc}</span>
                                </div>
                            ))}
                        </div>

                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Key Signs You Need to Outsource Payroll & Compliance</h2>
                        <p className="mb-6">
                            If you relate to any of these, it’s time to rethink your approach:
                        </p>
                        <div className="grid md:grid-cols-2 gap-4 mb-12">
                            {[
                                "Frequent payroll errors or delays",
                                "Increasing compliance notices",
                                "Overloaded HR team",
                                "Multi-location workforce expansion",
                                "Difficulty managing contract employees"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 p-4 bg-red-50 border border-red-100 rounded-lg text-red-900">
                                    <AlertTriangle className="w-5 h-5 text-red-500 shrink-0" />
                                    <span className="font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                        <p className="mb-12 text-lg font-medium text-slate-700 text-center">
                            Outsourcing isn’t a cost — it’s an investment in operational stability.
                        </p>

                        <div className="bg-gradient-to-r from-brand-600 to-brand-800 text-white p-8 rounded-2xl mb-12 shadow-lg">
                            <h3 className="text-2xl font-bold mb-4">Conclusion</h3>
                            <p className="text-brand-100 mb-4 leading-relaxed">
                                Payroll and compliance are too critical to be managed casually. By outsourcing to a trusted partner like CLink HR, organizations save time, reduce costs, eliminate legal risks, and build employee trust — all while focusing on what truly matters: growth.
                            </p>
                            <p className="font-medium">
                                Outsourcing isn’t just a cost — it’s an investment in operational stability.
                            </p>
                        </div>
                    </article>

                    <div className="mt-12 pt-8 border-t border-slate-100">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                            <div className="text-center md:text-left">
                                <h4 className="text-lg font-bold text-slate-900 mb-2">Struggling with payroll complexity?</h4>
                                <p className="text-slate-600 text-sm">Let us handle your compliance risk-free.</p>
                            </div>
                            <Link
                                to="/contact/payroll-inquiry"
                                className="bg-accent-500 text-brand-900 px-8 py-3 rounded-full font-bold hover:bg-accent-400 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 transform duration-300"
                            >
                                Get a Quote
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="mt-8 text-center">
                    <Link to="/company/blog" className="inline-flex items-center gap-2 text-slate-500 hover:text-brand-600 transition-colors font-medium">
                        <ArrowLeft className="w-4 h-4" /> Back to Blog
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PayrollAndComplianceBenefits;
