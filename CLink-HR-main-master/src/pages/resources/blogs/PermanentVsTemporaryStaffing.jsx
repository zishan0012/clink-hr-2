import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Testimonials from '../../../components/Testimonials';
import workforceStrategyHero from '../../../assets/blog-img/Workforce Strategy.jpg';
import { Calendar, Clock, User, ArrowLeft, TrendingUp, Users, CheckCircle, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const PermanentVsTemporaryStaffing = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white pt-20">
            {/* HER O SECTION */}
            <section className="relative bg-brand-950 py-20 pb-32 overflow-hidden">
                <div className="absolute inset-0">
                    <motion.img
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4 }}
                        src={workforceStrategyHero}
                        alt="Workforce Strategy"
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
                        <span className="w-2 h-2 rounded-full bg-accent-500"></span>
                        Workforce Strategy
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0 }}
                        className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-8 leading-tight"
                    >
                        Permanent vs Temporary Staffing: <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-brand-200">
                            How to Choose the Right Strategy
                        </span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="flex flex-wrap items-center gap-6 text-slate-300 text-sm md:text-base"
                    >
                        <div className="flex items-center gap-2">
                            <User className="w-4 h-4 text-accent-500" />
                            <span>CLink HR Team</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-accent-500" />
                            <span>Nov 05, 2025</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-accent-500" />
                            <span>6 min read</span>
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
                            In today’s fast-moving business environment, hiring is no longer just about filling vacancies — it’s about building the right workforce strategy. One of the most critical decisions organizations face is choosing between permanent staffing and temporary staffing.
                        </p>

                        <p className="mb-8">
                            Startups, SMEs, and even large enterprises in India are increasingly rethinking traditional hiring models. Market volatility, project-based work, skill shortages, and cost pressures are pushing companies to adopt flexible staffing solutions. So, how do you decide what’s right for your business?
                        </p>

                        <hr className="my-12 border-slate-200" />

                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Understanding Permanent Staffing</h2>
                        <div className="bg-brand-50 p-8 rounded-2xl mb-8">
                            <h3 className="text-xl font-bold text-brand-900 mb-4">What Is Permanent Staffing?</h3>
                            <p className="text-brand-800 m-0 leading-relaxed">
                                Permanent staffing refers to hiring employees on a full-time, long-term basis. These employees become part of the organization’s core workforce and play a key role in driving stability, culture, and long-term growth.
                            </p>
                        </div>

                        <h4 className="font-bold text-slate-900 mb-4">When Permanent Staffing Works Best</h4>
                        <ul className="mb-8 grid md:grid-cols-2 gap-4 list-none pl-0">
                            {[
                                "Roles are critical to business continuity",
                                "You want to build institutional knowledge",
                                "Long-term commitment and loyalty are required",
                                "The position demands deep expertise or leadership"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 bg-white border border-slate-200 p-4 rounded-lg shadow-sm">
                                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                                    <span className="text-slate-700 font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <h4 className="font-bold text-slate-900 mb-4">Benefits of Permanent Staffing</h4>
                        <div className="space-y-4 mb-12">
                            {[
                                { title: "Long-Term Stability", desc: "Permanent employees provide continuity, reducing disruptions and improving operational consistency." },
                                { title: "Stronger Company Culture", desc: "Full-time employees align more closely with organizational values, mission, and long-term goals." },
                                { title: "Higher Accountability", desc: "Permanent staff often demonstrate stronger ownership and responsibility toward outcomes." },
                                { title: "Leadership Development", desc: "They form the talent pipeline for future leadership roles." }
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-4">
                                    <div className="w-6 h-6 rounded-full bg-brand-100 flex items-center justify-center text-brand-600 mt-1 shrink-0">
                                        <CheckCircle className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <strong className="text-slate-900 block mb-1">{item.title}</strong>
                                        <p className="text-slate-600 m-0 text-sm">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <h2 className="text-3xl font-bold text-slate-900 mb-6 pt-8">Understanding Temporary Staffing</h2>
                        <div className="bg-amber-50 p-8 rounded-2xl mb-8">
                            <h3 className="text-xl font-bold text-amber-900 mb-4">What Is Temporary Staffing?</h3>
                            <p className="text-amber-800 m-0 leading-relaxed">
                                Temporary staffing involves hiring professionals for a specific duration, project, or seasonal requirement. These employees may be on contract, payroll outsourcing, or third-party rolls. It has become a strategic tool rather than a stopgap solution.
                            </p>
                        </div>

                        <h4 className="font-bold text-slate-900 mb-4">When Temporary Staffing Makes Sense</h4>
                        <ul className="mb-8 grid md:grid-cols-2 gap-4 list-none pl-0">
                            {[
                                "Workload fluctuates seasonally",
                                "Projects require specialized short-term skills",
                                "Companies need to scale quickly",
                                "Cost optimization is a priority",
                                "Compliance and payroll complexity needs outsourcing"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 bg-white border border-slate-200 p-4 rounded-lg shadow-sm">
                                    <CheckCircle className="w-5 h-5 text-amber-500 shrink-0" />
                                    <span className="text-slate-700 font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <h4 className="font-bold text-slate-900 mb-4">Benefits of Temporary Staffing</h4>
                        <div className="space-y-4 mb-12">
                            {[
                                { title: "Workforce Flexibility", desc: "Scale your team up or down without long-term commitments." },
                                { title: "Faster Hiring", desc: "Temporary staffing significantly reduces time-to-hire." },
                                { title: "Cost Efficiency", desc: "Lower fixed costs, reduced benefits burden, and optimized payroll management." },
                                { title: "Compliance Management", desc: "Statutory compliance and payroll risks are handled seamlessly by partners like CLink HR." }
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-4">
                                    <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 mt-1 shrink-0">
                                        <CheckCircle className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <strong className="text-slate-900 block mb-1">{item.title}</strong>
                                        <p className="text-slate-600 m-0 text-sm">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <h2 className="text-3xl font-bold text-slate-900 mb-6 pt-8">Permanent vs Temporary Staffing: A Quick Comparison</h2>
                        <div className="overflow-x-auto mb-12 rounded-xl border border-slate-200 shadow-sm">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-slate-50 border-b border-slate-200">
                                        <th className="p-4 font-bold text-slate-900">Aspect</th>
                                        <th className="p-4 font-bold text-brand-700">Permanent Staffing</th>
                                        <th className="p-4 font-bold text-amber-700">Temporary Staffing</th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm">
                                    {[
                                        { aspect: "Employment Duration", perm: "Long-term", temp: "Short-term / Project-based" },
                                        { aspect: "Cost Structure", perm: "Higher fixed costs", temp: "Flexible, variable costs" },
                                        { aspect: "Hiring Speed", perm: "Moderate", temp: "Fast" },
                                        { aspect: "Workforce Flexibility", perm: "Low to Medium", temp: "High" },
                                        { aspect: "Ideal For", perm: "Core roles", temp: "Seasonal / project needs" },
                                        { aspect: "Compliance Handling", perm: "In-house", temp: "Outsourced via HR partner" }
                                    ].map((row, i) => (
                                        <tr key={i} className="border-b border-slate-100 last:border-0 hover:bg-slate-50/50">
                                            <td className="p-4 font-medium text-slate-900">{row.aspect}</td>
                                            <td className="p-4 text-slate-600">{row.perm}</td>
                                            <td className="p-4 text-slate-600">{row.temp}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <h2 className="text-3xl font-bold text-slate-900 mb-6 pt-8">The Modern Workforce Reality: Hybrid Staffing Models</h2>
                        <p className="mb-6">
                            In 2026 and beyond, the smartest organizations aren’t choosing one over the other — they’re building hybrid workforce models. A hybrid staffing strategy combines:
                        </p>
                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            <div className="bg-brand-50 p-6 rounded-xl text-center border border-brand-100">
                                <h4 className="font-bold text-brand-800 mb-2">Core Functions</h4>
                                <p className="text-sm text-brand-700">Permanent employees for stability & culture</p>
                            </div>
                            <div className="bg-amber-50 p-6 rounded-xl text-center border border-amber-100">
                                <h4 className="font-bold text-amber-800 mb-2">Agility & Scale</h4>
                                <p className="text-sm text-amber-700">Temporary staff for speed & flexibility</p>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-slate-900 mb-6 pt-8">How CLink HR Helps You Choose</h2>
                        <div className="bg-slate-900 text-slate-300 p-8 rounded-2xl mb-12">
                            <ul className="space-y-4">
                                {[
                                    { title: "Strategic Workforce Planning", desc: "Evaluates your business needs, growth roadmap, and challenges." },
                                    { title: "End-to-End Hiring Support", desc: "From sourcing to onboarding and payroll — managed seamlessly." },
                                    { title: "Compliance & Payroll Expertise", desc: "Ensures risk-free workforce management compliant with labor laws." },
                                    { title: "Industry-Specific Solutions", desc: "Specialized hiring for IT, Manufacturing, Healthcare, and more." },
                                    { title: "Technology-Driven Operations", desc: "Real-time visibility into performance and costs via HRMS." }
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-4">
                                        <div className="w-6 h-6 rounded-full bg-accent-500/20 flex items-center justify-center text-accent-400 mt-1 shrink-0">
                                            <div className="w-2 h-2 rounded-full bg-accent-400" />
                                        </div>
                                        <div>
                                            <strong className="text-white block">{item.title}</strong>
                                            <span className="text-slate-400 text-sm">{item.desc}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Key Staffing Trends Shaping Business Decisions</h2>
                        <div className="bg-slate-50 border-l-4 border-brand-500 p-6 rounded-r-xl mb-12">
                            <ul className="space-y-4">
                                {[
                                    { title: "Rise of Project-Based Work", desc: "Companies are hiring for specific outcomes rather than roles." },
                                    { title: "Demand for Niche Skill Sets", desc: "Temporary experts are filling gaps in AI, digital transformation, and specialized engineering." },
                                    { title: "Gig and Contractual Employment Growth", desc: "Professionals increasingly prefer flexibility and autonomy." },
                                    { title: "Focus on Cost Optimization", desc: "Businesses are moving from fixed salary models to variable cost structures." },
                                    { title: "Remote and Hybrid Work Models", desc: "Location is no longer a barrier for temporary or permanent talent." }
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-4">
                                        <div className="w-2 h-2 rounded-full bg-brand-500 mt-2 shrink-0" />
                                        <div>
                                            <strong className="text-slate-900 block">{item.title}</strong>
                                            <span className="text-slate-600 text-sm">{item.desc}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <p className="mt-6 text-brand-800 font-medium pt-4">
                                These trends make temporary staffing more strategic — while permanent staffing remains essential for leadership, innovation, and stability.
                            </p>
                        </div>

                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Making the Right Decision: Key Questions to Ask</h2>
                        <div className="bg-white border border-slate-200 rounded-2xl p-8 mb-12 shadow-sm">
                            <p className="mb-6 text-slate-600">Before hiring, ask these critical questions:</p>
                            <ul className="grid md:grid-cols-2 gap-4">
                                {[
                                    "Is the role core to our business strategy?",
                                    "Do we need this skill for less than a year?",
                                    "Is our budget fixed or variable?",
                                    "How quickly do we need someone on board?",
                                    "what is the long-term growth plan for this position?"
                                ].map((q, i) => (
                                    <li key={i} className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg">
                                        <div className="w-8 h-8 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center font-bold text-sm shrink-0">?</div>
                                        <span className="text-slate-700 font-medium">{q}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-gradient-to-r from-brand-600 to-brand-800 text-white p-8 rounded-2xl mb-12 shadow-lg">
                            <h3 className="text-2xl font-bold mb-4">Conclusion</h3>
                            <p className="text-brand-100 mb-4 leading-relaxed">
                                The debate between permanent vs temporary staffing isn’t about which is better — it’s about what’s right for your business at the right time. Permanent staffing builds stability, while temporary staffing delivers speed.
                            </p>
                            <p className="font-medium">
                                With its comprehensive staffing solutions, deep market expertise, and technology-driven approach, CLink HR empowers businesses to hire smarter, scale faster, and stay compliant — without compromise.
                            </p>
                        </div>
                    </article>

                    <div className="mt-12 pt-8 border-t border-slate-100">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                            <div className="text-center md:text-left">
                                <h4 className="text-lg font-bold text-slate-900 mb-2">Need help with your workforce strategy?</h4>
                                <p className="text-slate-600 text-sm">Talk to our experts for a customized plan.</p>
                            </div>
                            <Link
                                to="/contact/hire-talent"
                                className="bg-accent-500 text-brand-900 px-8 py-3 rounded-full font-bold hover:bg-accent-400 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 transform duration-300"
                            >
                                Get Expert Advice
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

            <Testimonials />
        </div>
    );
};

export default PermanentVsTemporaryStaffing;
