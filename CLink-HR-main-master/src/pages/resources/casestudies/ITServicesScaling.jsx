import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Testimonials from '../../../components/Testimonials';
import {
    Building2,
    Users,
    TrendingUp,
    DollarSign,
    CheckCircle,
    ArrowRight,
    Calendar,
    MapPin,
    Briefcase,
    Target,
    AlertCircle,
    Zap,
    Shield,
    BarChart3,
    Award,
    Quote,
    ArrowLeft
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ITServicesScaling = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white pt-20">
            {/* HERO SECTION */}
            <section className="relative bg-brand-950 py-32 overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                        alt="IT Services Scaling"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-brand-950/70"></div>
                </div>

                <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-800/50 border border-brand-700 text-brand-200 text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-md"
                    >
                        <Award className="w-3 h-3" />
                        Case Study
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-8 leading-tight"
                    >
                        How CLink HR Helped a Fast-Growing Company <span className="text-accent-500">Scale Hiring</span> While Reducing Cost & Compliance Risk
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="grid md:grid-cols-4 gap-6 text-slate-300"
                    >
                        <div className="flex items-center gap-2">
                            <Building2 className="w-5 h-5 text-accent-500" />
                            <div>
                                <div className="text-xs text-slate-400">Industry</div>
                                <div className="font-bold text-white">IT Services</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <Users className="w-5 h-5 text-accent-500" />
                            <div>
                                <div className="text-xs text-slate-400">Company Size</div>
                                <div className="font-bold text-white">350+ employees</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin className="w-5 h-5 text-accent-500" />
                            <div>
                                <div className="text-xs text-slate-400">Location</div>
                                <div className="font-bold text-white">Pan-India</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar className="w-5 h-5 text-accent-500" />
                            <div>
                                <div className="text-xs text-slate-400">Duration</div>
                                <div className="font-bold text-white">9 months</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CLIENT OVERVIEW */}
            <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 -mt-20 mb-24">
                <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-slate-100">

                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Client Overview</h2>
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                            <p className="text-lg text-slate-700 leading-relaxed mb-4">
                                The client is a <strong>mid-sized IT services company</strong> experiencing rapid growth due to increased demand from enterprise and global clients. While business momentum was strong, their internal HR and recruitment processes struggled to keep pace.
                            </p>
                            <div className="grid md:grid-cols-2 gap-4 mt-6">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-brand-100 rounded-lg flex items-center justify-center">
                                        <MapPin className="w-5 h-5 text-brand-600" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-slate-500">Locations</div>
                                        <div className="font-bold text-slate-900">Bengaluru, Pune, Hyderabad</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-brand-100 rounded-lg flex items-center justify-center">
                                        <TrendingUp className="w-5 h-5 text-brand-600" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-slate-500">Growth Stage</div>
                                        <div className="font-bold text-slate-900">Series B Funded</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr className="my-12 border-slate-200" />

                    {/* BUSINESS CHALLENGES */}
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-slate-900 mb-8">Business Challenges</h2>
                        <p className="text-lg text-slate-600 mb-8">
                            As the company scaled, it faced multiple workforce-related challenges:
                        </p>

                        <div className="space-y-6">
                            {[
                                {
                                    icon: Target,
                                    title: "High Volume Hiring Pressure",
                                    desc: "The client needed to hire 120+ professionals within 6 months, including Software Engineers, QA Specialists, DevOps Engineers, and Project Managers.",
                                    impact: "Their internal recruitment team could not manage the volume without compromising quality.",
                                    color: "bg-red-50 border-red-100"
                                },
                                {
                                    icon: DollarSign,
                                    title: "Rising Cost Per Hire",
                                    desc: "Dependency on multiple recruitment agencies led to high agency fees, duplicate candidate submissions, and low offer-joining ratios.",
                                    impact: "Average cost per hire had increased by 28% over the previous year.",
                                    color: "bg-orange-50 border-orange-100"
                                },
                                {
                                    icon: Shield,
                                    title: "Compliance & Payroll Complexity",
                                    desc: "With employees spread across multiple states, the company struggled with payroll accuracy, PF & ESI compliance, and contract workforce documentation.",
                                    impact: "This increased legal risk and consumed significant HR bandwidth.",
                                    color: "bg-yellow-50 border-yellow-100"
                                },
                                {
                                    icon: BarChart3,
                                    title: "Poor Hiring Visibility",
                                    desc: "The leadership team lacked real-time hiring data, clear recruitment metrics, and workforce planning insights.",
                                    impact: "Decision-making was reactive rather than strategic.",
                                    color: "bg-blue-50 border-blue-100"
                                }
                            ].map((challenge, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className={`p-6 rounded-2xl border ${challenge.color}`}
                                >
                                    <div className="flex gap-4">
                                        <div className="shrink-0">
                                            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                                                <challenge.icon className="w-6 h-6 text-slate-700" />
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                                                <AlertCircle className="w-5 h-5 text-red-500" />
                                                {i + 1}. {challenge.title}
                                            </h3>
                                            <p className="text-slate-700 mb-3 leading-relaxed">{challenge.desc}</p>
                                            <p className="text-sm font-medium text-slate-800 italic border-l-2 border-slate-400 pl-3">
                                                {challenge.impact}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <hr className="my-12 border-slate-200" />

                    {/* THE CLINK HR SOLUTION */}
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">The CLink HR Solution</h2>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            CLink HR partnered with the client as a <strong className="text-brand-700">strategic HR & talent acquisition partner</strong>, not just a recruitment vendor.
                        </p>

                        <div className="space-y-8">
                            {[
                                {
                                    phase: "Phase 1",
                                    title: "Workforce & Hiring Assessment",
                                    icon: Target,
                                    points: [
                                        "Current hiring pipeline analysis",
                                        "Role criticality evaluation",
                                        "Skill gaps identification",
                                        "Cost inefficiencies review",
                                        "Compliance risks assessment"
                                    ],
                                    result: "This helped define a clear hiring roadmap aligned with business goals."
                                },
                                {
                                    phase: "Phase 2",
                                    title: "Recruitment Process Outsourcing (RPO)",
                                    icon: Users,
                                    points: [
                                        "Dedicated recruitment team",
                                        "Role-specific sourcing strategies",
                                        "Talent mapping for niche skills",
                                        "Standardized screening and interview workflows"
                                    ],
                                    result: "Faster hiring with consistent candidate quality."
                                },
                                {
                                    phase: "Phase 3",
                                    title: "Hybrid Staffing Strategy",
                                    icon: Briefcase,
                                    points: [
                                        "Permanent hiring for core roles",
                                        "Contract staffing for project-based requirements"
                                    ],
                                    result: "This reduced long-term cost exposure while maintaining delivery timelines."
                                },
                                {
                                    phase: "Phase 4",
                                    title: "Payroll & Compliance Management",
                                    icon: Shield,
                                    points: [
                                        "End-to-end payroll processing",
                                        "PF, ESI, PT filings across states",
                                        "Contract workforce compliance",
                                        "Audit documentation support"
                                    ],
                                    result: "Ensured 100% statutory compliance with zero penalties during the engagement period."
                                },
                                {
                                    phase: "Phase 5",
                                    title: "Technology & Reporting Enablement",
                                    icon: BarChart3,
                                    points: [
                                        "Hiring dashboards",
                                        "Time-to-hire metrics",
                                        "Offer-to-joining ratios",
                                        "Cost-per-hire tracking"
                                    ],
                                    result: "Leadership gained real-time visibility into workforce performance."
                                }
                            ].map((phase, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="bg-gradient-to-br from-brand-50 to-white p-8 rounded-2xl border border-brand-100 shadow-sm"
                                >
                                    <div className="flex items-start gap-4 mb-6">
                                        <div className="w-14 h-14 bg-brand-600 rounded-xl flex items-center justify-center text-white shrink-0">
                                            <phase.icon className="w-7 h-7" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold text-brand-600 mb-1">{phase.phase}</div>
                                            <h3 className="text-2xl font-bold text-slate-900">{phase.title}</h3>
                                        </div>
                                    </div>
                                    <ul className="space-y-3 mb-6">
                                        {phase.points.map((point, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                                                <span className="text-slate-700">{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="bg-white p-4 rounded-xl border border-brand-200">
                                        <div className="flex items-start gap-2">
                                            <Zap className="w-5 h-5 text-accent-500 shrink-0 mt-0.5" />
                                            <p className="font-bold text-brand-800">Result: {phase.result}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <hr className="my-12 border-slate-200" />

                    {/* RESULTS & IMPACT */}
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Results & Impact</h2>
                        <p className="text-lg text-slate-600 mb-8">
                            Within 9 months, CLink HR delivered measurable outcomes:
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            {/* Hiring Performance */}
                            <div className="bg-green-50 p-8 rounded-2xl border border-green-100">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                                        <Target className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-green-900">Hiring Performance</h3>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-baseline gap-2">
                                        <div className="text-4xl font-extrabold text-green-700">132</div>
                                        <div className="text-slate-600">positions closed (10% above target)</div>
                                    </div>
                                    <div className="flex items-baseline gap-2">
                                        <div className="text-4xl font-extrabold text-green-700">41%</div>
                                        <div className="text-slate-600">reduction in time-to-hire</div>
                                    </div>
                                    <div className="flex items-baseline gap-2">
                                        <div className="text-4xl font-extrabold text-green-700">84%</div>
                                        <div className="text-slate-600">offer-to-joining ratio (from 62%)</div>
                                    </div>
                                </div>
                            </div>

                            {/* Cost Optimization */}
                            <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                                        <DollarSign className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-blue-900">Cost Optimization</h3>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-baseline gap-2">
                                        <div className="text-4xl font-extrabold text-blue-700">33%</div>
                                        <div className="text-slate-600">reduction in cost per hire</div>
                                    </div>
                                    <div className="flex items-baseline gap-2">
                                        <div className="text-4xl font-extrabold text-blue-700">70%</div>
                                        <div className="text-slate-600">reduction in agency dependency</div>
                                    </div>
                                    <div className="pt-2">
                                        <CheckCircle className="w-5 h-5 text-blue-600 inline mr-2" />
                                        <span className="text-slate-700 font-medium">Improved workforce cost predictability</span>
                                    </div>
                                </div>
                            </div>

                            {/* Compliance & Risk */}
                            <div className="bg-purple-50 p-8 rounded-2xl border border-purple-100">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center">
                                        <Shield className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-purple-900">Compliance & Risk Reduction</h3>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-baseline gap-2">
                                        <div className="text-4xl font-extrabold text-purple-700">100%</div>
                                        <div className="text-slate-600">payroll accuracy</div>
                                    </div>
                                    <div className="flex items-baseline gap-2">
                                        <div className="text-4xl font-extrabold text-purple-700">Zero</div>
                                        <div className="text-slate-600">compliance notices or penalties</div>
                                    </div>
                                    <div className="pt-2">
                                        <CheckCircle className="w-5 h-5 text-purple-600 inline mr-2" />
                                        <span className="text-slate-700 font-medium">Audit-ready documentation across all locations</span>
                                    </div>
                                </div>
                            </div>

                            {/* HR Productivity */}
                            <div className="bg-amber-50 p-8 rounded-2xl border border-amber-100">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 bg-amber-600 rounded-xl flex items-center justify-center">
                                        <Users className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-amber-900">HR Productivity</h3>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-baseline gap-2">
                                        <div className="text-4xl font-extrabold text-amber-700">45%</div>
                                        <div className="text-slate-600">reduction in HR team workload</div>
                                    </div>
                                    <div className="pt-2 space-y-2">
                                        <div>
                                            <CheckCircle className="w-5 h-5 text-amber-600 inline mr-2" />
                                            <span className="text-slate-700 font-medium">HR leaders shifted focus to employee engagement</span>
                                        </div>
                                        <div>
                                            <CheckCircle className="w-5 h-5 text-amber-600 inline mr-2" />
                                            <span className="text-slate-700 font-medium">Improved coordination across departments</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr className="my-12 border-slate-200" />

                    {/* CLIENT TESTIMONIAL */}
                    <div className="mb-12">
                        <div className="bg-gradient-to-br from-brand-600 to-brand-800 p-10 rounded-3xl text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 opacity-10">
                                <Quote className="w-48 h-48" />
                            </div>
                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                    <Quote className="w-8 h-8 text-accent-400" />
                                    Client Testimonial
                                </h3>
                                <p className="text-xl md:text-2xl font-light leading-relaxed mb-6 text-brand-50">
                                    "CLink HR didn't just help us hire faster — they helped us hire smarter. Their structured approach, compliance expertise, and workforce insights gave us complete control over our growth. Today, our HR function is scalable, compliant, and future-ready."
                                </p>
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                                        <Users className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-white">Head of Human Resources</div>
                                        <div className="text-brand-200 text-sm">IT Services Company</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr className="my-12 border-slate-200" />

                    {/* WHY THIS CASE MATTERS */}
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Why This Case Matters</h2>
                        <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                            This engagement highlights how strategic HR partnerships outperform transactional recruitment models.
                        </p>
                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                            <h4 className="font-bold text-slate-900 mb-4 text-lg">CLink HR's success was driven by:</h4>
                            <div className="grid md:grid-cols-2 gap-4">
                                {[
                                    "Business-first mindset",
                                    "Customized RPO framework",
                                    "Hybrid staffing expertise",
                                    "Compliance-led operations",
                                    "Technology-driven visibility"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="w-6 h-6 bg-brand-600 rounded-full flex items-center justify-center shrink-0">
                                            <CheckCircle className="w-4 h-4 text-white" />
                                        </div>
                                        <span className="font-medium text-slate-800">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <hr className="my-12 border-slate-200" />

                    {/* CONCLUSION */}
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Conclusion</h2>
                        <p className="text-lg text-slate-700 leading-relaxed mb-6">
                            Scaling a business requires more than hiring talent — it requires building a workforce ecosystem that is agile, compliant, and data-driven.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed mb-6">
                            Through its integrated HR solutions, CLink HR helped this fast-growing organization:
                        </p>
                        <div className="grid md:grid-cols-2 gap-4 mb-8">
                            {[
                                "Scale without chaos",
                                "Reduce hiring costs",
                                "Eliminate compliance risk",
                                "Improve workforce visibility"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 bg-green-50 p-4 rounded-xl border border-green-100">
                                    <CheckCircle className="w-5 h-5 text-green-600 shrink-0" />
                                    <span className="font-bold text-green-900">{item}</span>
                                </div>
                            ))}
                        </div>
                        <div className="bg-brand-900 p-8 rounded-2xl text-center">
                            <p className="text-xl md:text-2xl font-bold text-white">
                                This is how CLink HR transforms workforce challenges into <span className="text-accent-400">competitive advantage.</span>
                            </p>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-12 pt-8 border-t border-slate-100">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                            <div className="text-center md:text-left">
                                <h4 className="text-lg font-bold text-slate-900 mb-2">Ready to transform your hiring process?</h4>
                                <p className="text-slate-600 text-sm">Let's discuss how CLink HR can help your organization scale.</p>
                            </div>
                            <Link
                                to="/contact"
                                className="bg-brand-600 text-white px-8 py-3 rounded-full font-bold hover:bg-brand-700 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 transform duration-300 flex items-center gap-2"
                            >
                                Schedule a Consultation <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="mt-8 text-center">
                    <Link to="/company/case-studies" className="inline-flex items-center gap-2 text-slate-500 hover:text-brand-600 transition-colors font-medium">
                        <ArrowLeft className="w-4 h-4" /> Back to Case Studies
                    </Link>
                </div>
            </div>

            <Testimonials />
        </div>
    );
};

export default ITServicesScaling;
