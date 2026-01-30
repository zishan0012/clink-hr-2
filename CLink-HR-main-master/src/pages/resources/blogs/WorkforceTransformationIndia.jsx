import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Testimonials from '../../../components/Testimonials';
import hrTrendsHero from '../../../assets/blog-img/HR Trends 2026.jpg';
import { Calendar, Clock, User, ArrowLeft, TrendingUp, Users, Laptop, Award, ShieldCheck, BarChart3, Rocket, CheckCircle, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const WorkforceTransformationIndia = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white pt-20">
            {/* HERO SECTION */}
            <section className="relative bg-brand-950 py-20 pb-32 overflow-hidden">
                <div className="absolute inset-0">
                    <motion.img
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4 }}
                        src={hrTrendsHero}
                        alt="HR Trends 2026"
                        className="w-full h-full object-cover"
                        loading="eager"
                        fetchPriority="high"
                    />
                    <div className="absolute inset-0 bg-brand-950/60"></div>
                </div>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-800/50 border border-brand-700 text-brand-200 text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-md"
                    >
                        <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                        HR Trends 2026
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0 }}
                        className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-8 leading-tight"
                    >
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Workforce Transformation</span> <br className="hidden md:block" />
                        in India: HR Insights for <br className="hidden md:block" /> 2026 & Beyond
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="flex flex-wrap items-center gap-6 text-slate-300 text-sm md:text-base"
                    >
                        <div className="flex items-center gap-2">
                            <User className="w-4 h-4 text-emerald-400" />
                            <span>CLink HR Team</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-emerald-400" />
                            <span>Jan 15, 2026</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-emerald-400" />
                            <span>11 min read</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CONTENT SECTION */}
            <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 -mt-20 mb-24">
                <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-slate-100">

                    {/* Introduction */}
                    <article className="prose prose-lg prose-slate max-w-none">
                        <p className="lead text-xl md:text-2xl text-slate-600 font-light leading-relaxed mb-10 border-l-4 border-emerald-500 pl-6 italic">
                            India’s workforce is undergoing its most significant transformation in decades. Rapid digitalization, evolving employee expectations, new labour codes, and the rise of flexible work models are redefining how organizations hire, manage, and retain talent.
                        </p>

                        <p className="mb-6 font-bold text-xl text-brand-900">
                            By 2026 and beyond, workforce transformation will no longer be optional — it will be a survival strategy.
                        </p>

                        <p className="mb-8">
                            HR leaders are now expected to act as business strategists, culture architects, and technology enablers — all at once. In this blog, we explore the key forces shaping workforce transformation in India, the emerging HR trends businesses must prepare for, and how organizations can stay future-ready with the right HR partner like CLink HR.
                        </p>

                        <hr className="my-12 border-slate-200" />

                        <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                            <TrendingUp className="w-8 h-8 text-emerald-600" />
                            What Is Workforce Transformation?
                        </h2>
                        <p className="mb-6">
                            Workforce transformation refers to the strategic rethinking of how people, processes, and technology come together to drive business outcomes.
                        </p>

                        <div className="bg-brand-50 p-6 rounded-2xl border border-brand-100 mb-8">
                            <h3 className="text-lg font-bold text-brand-900 mb-4">It goes beyond automation or policy updates — it’s about:</h3>
                            <ul className="grid md:grid-cols-2 gap-3">
                                {[
                                    "Building agile workforce models",
                                    "Aligning talent strategy with business goals",
                                    "Adapting to new ways of working",
                                    "Enhancing employee experience",
                                    "Leveraging data-driven HR decisions"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-2 text-brand-800 font-medium">
                                        <CheckCircle className="w-4 h-4 text-emerald-500" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <p className="mb-12 font-medium text-slate-700">
                            In India’s fast-growing economy, workforce transformation is becoming a key differentiator between high-growth organizations and those struggling to adapt.
                        </p>

                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Key Drivers of Workforce Transformation in India</h2>

                        <div className="space-y-8 mb-12">
                            {[
                                {
                                    title: "1. Digital-First Business Models",
                                    desc: "Technology is reshaping every function — and HR is no exception. Organizations are adopting HRMS platforms, AI-driven recruitment tools, and workforce analytics for better decision-making.",
                                    icon: Laptop
                                },
                                {
                                    title: "2. The Rise of Flexible & Hybrid Workforces",
                                    desc: "Permanent, office-based roles are no longer the default. India is witnessing a surge in contractual staffing, remote models, and gig roles requiring new workforce strategies.",
                                    icon: Users
                                },
                                {
                                    title: "3. Skills Over Job Titles",
                                    desc: "By 2026, skills will matter more than traditional roles. HR teams must focus on skill-based hiring, upskilling, and cross-functional deployment.",
                                    icon: Award
                                },
                                {
                                    title: "4. Changing Employee Expectations",
                                    desc: "Today’s workforce values career growth, work-life balance, and transparency. Employee experience is now a business priority impacting retention and branding.",
                                    icon: Rocket
                                },
                                {
                                    title: "5. Regulatory Evolution & Compliance Complexity",
                                    desc: "New labour codes require businesses to navigate compliance proactively. Audit readiness and statutory compliance across states are critical survival factors.",
                                    icon: ShieldCheck
                                }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 p-6 bg-white border border-slate-200 rounded-xl hover:shadow-lg transition-all hover:border-emerald-200 group">
                                    <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                                        <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <h2 className="text-3xl font-bold text-slate-900 mb-6">HR Insights That Will Define 2026 & Beyond</h2>
                        <div className="grid md:grid-cols-2 gap-6 mb-12">
                            {[
                                {
                                    title: "Agile Workforce Models Will Dominate",
                                    content: "Future-ready organizations will adopt hybrid workforce models — blending permanent, temporary, and outsourced talent for scalability and cost control."
                                },
                                {
                                    title: "HR Will Become a Data-Driven Function",
                                    content: "HR decisions will increasingly be backed by workforce analytics, performance metrics, and attrition insights powered by technology."
                                },
                                {
                                    title: "Leadership & Culture Will Be Strategic Priorities",
                                    content: "As work becomes more distributed, strong leadership, inclusive culture, and succession planning will define organizational success."
                                },
                                {
                                    title: "Outsourcing Will Shift from Tactical to Strategic",
                                    content: "Organizations will rely on partners for strategic RPO, workforce planning, and compliance, moving beyond just operational tasks."
                                }
                            ].map((item, i) => (
                                <div key={i} className="bg-brand-950 text-slate-300 p-6 rounded-xl border border-brand-800">
                                    <h4 className="text-emerald-400 font-bold mb-3 flex items-center gap-2">
                                        <Zap className="w-4 h-4" /> Insight {i + 1}
                                    </h4>
                                    <h3 className="text-white text-lg font-bold mb-3">{item.title}</h3>
                                    <p className="text-sm leading-relaxed">{item.content}</p>
                                </div>
                            ))}
                        </div>

                        <h2 className="text-3xl font-bold text-slate-900 mb-6">How CLink HR Enables Workforce Transformation</h2>
                        <div className="bg-emerald-50 p-8 rounded-2xl mb-12 border border-emerald-100">
                            <p className="mb-6 font-medium text-emerald-900">CLink HR offers end-to-end HR solutions designed for modern businesses:</p>
                            <div className="space-y-4">
                                {[
                                    { title: "Strategic Staffing Solutions", desc: "Permanent, temporary, and executive hiring aligned with business goals." },
                                    { title: "Recruitment Process Outsourcing (RPO)", desc: "Scalable hiring models to meet evolving talent demands." },
                                    { title: "Payroll & Compliance Management", desc: "Accurate, audit-ready, and regulation-compliant workforce operations." },
                                    { title: "HRMS & Technology Enablement", desc: "Streamlined HR processes powered by modern HR technology." },
                                    { title: "Industry-Specific Expertise", desc: "Solutions tailored to IT, manufacturing, BFSI, healthcare, retail, startups, and more." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-3 bg-white p-4 rounded-lg shadow-sm border border-emerald-100/50">
                                        <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                                        <div>
                                            <strong className="block text-emerald-900">{item.title}</strong>
                                            <span className="text-emerald-700 text-sm">{item.desc}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-6 pt-6 border-t border-emerald-200 text-center font-bold text-emerald-800">
                                CLink HR helps organizations move from traditional HR to transformational HR.
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Preparing Your Organization for the Future Workforce</h2>
                        <div className="flex flex-wrap gap-2 mb-8">
                            {['Invest in flexible workforce strategies', 'Embrace HR technology', 'Focus on skills and leadership development', 'Strengthen compliance frameworks', 'Partner with HR experts'].map((tag, i) => (
                                <span key={i} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium border border-slate-200">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <p className="mb-12 font-medium text-slate-700 italic border-l-4 border-emerald-500 pl-4">
                            Workforce transformation isn’t a one-time initiative — it’s a continuous journey.
                        </p>

                        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-8 rounded-2xl mb-12 shadow-lg">
                            <h3 className="text-2xl font-bold mb-4">Conclusion</h3>
                            <p className="text-emerald-50 mb-4 leading-relaxed">
                                The future of work in India is dynamic, digital, and deeply human. Organizations that proactively transform their workforce strategies will attract better talent, operate more efficiently, and build resilient cultures.
                            </p>
                            <p className="text-emerald-50 mb-6 leading-relaxed">
                                With its integrated HR solutions, compliance expertise, and forward-thinking approach, CLink HR empowers businesses to navigate workforce transformation confidently — today and in the years ahead.
                            </p>
                            <p className="font-medium text-lg border-t border-emerald-500 pt-6 mt-6">
                                Because the future belongs to organizations that <span className="font-bold text-white uppercase tracking-wider">prepare for it.</span>
                            </p>
                        </div>
                    </article>

                    <div className="mt-12 pt-8 border-t border-slate-100">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                            <div className="text-center md:text-left">
                                <h4 className="text-lg font-bold text-slate-900 mb-2">Ready to transform your workforce?</h4>
                                <p className="text-slate-600 text-sm">Let CLink HR guide your journey to 2026.</p>
                            </div>
                            <Link
                                to="/contact"
                                className="bg-emerald-600 text-white px-8 py-3 rounded-full font-bold hover:bg-emerald-700 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 transform duration-300"
                            >
                                Get Future-Ready
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="mt-8 text-center">
                    <Link to="/company/blog" className="inline-flex items-center gap-2 text-slate-500 hover:text-brand-600 transition-colors font-medium">
                        <ArrowLeft className="w-4 h-4" /> Back to Blog
                    </Link>
                </div>
            </div >

            <Testimonials />
        </div >
    );
};

export default WorkforceTransformationIndia;
