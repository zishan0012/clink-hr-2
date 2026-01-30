import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Testimonials from '../../../components/Testimonials';
import leadershipStrategyHero from '../../../assets/blog-img/Leadership Strategy.jpg';
import { Calendar, Clock, User, ArrowLeft, Search, Briefcase, TrendingUp, ShieldCheck, Target, Globe, BarChart3, Users, XCircle, CheckCircle, Zap, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const ExecutiveSearchLeadershipHiring = () => {
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
                        src={leadershipStrategyHero}
                        alt="Leadership Strategy"
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
                        <span className="w-2 h-2 rounded-full bg-red-500"></span>
                        Leadership Strategy
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0 }}
                        className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-8 leading-tight"
                    >
                        Executive Search & <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-300">Leadership Hiring:</span> <br className="hidden md:block" />
                        Best Practices for Identifying Top Talent
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="flex flex-wrap items-center gap-6 text-slate-300 text-sm md:text-base"
                    >
                        <div className="flex items-center gap-2">
                            <User className="w-4 h-4 text-red-400" />
                            <span>CLink HR Team</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-red-400" />
                            <span>Dec 03, 2025</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-red-400" />
                            <span>12 min read</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CONTENT SECTION */}
            <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 -mt-20 mb-24">
                <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-slate-100">

                    {/* Introduction */}
                    <article className="prose prose-lg prose-slate max-w-none">
                        <p className="lead text-xl md:text-2xl text-slate-600 font-light leading-relaxed mb-10 border-l-4 border-red-500 pl-6 italic">
                            Great companies are built by great leaders. In today’s competitive and uncertain business environment, leadership hiring is no longer about filling senior positions quickly — it’s about identifying visionaries who can steer organizations through change, scale sustainably, and build high-performance cultures.
                        </p>

                        <p className="mb-6 font-bold text-xl text-brand-900">
                            This is where executive search and leadership hiring play a critical role.
                        </p>

                        <p className="mb-8">
                            Unlike traditional recruitment, executive hiring demands confidentiality, strategic alignment, and deep market intelligence. In this blog, we explore what executive search truly means, why leadership hiring has become more complex than ever, and how organizations can secure the right leadership talent with the help of an expert HR partner like CLink HR.
                        </p>

                        <hr className="my-12 border-slate-200" />

                        <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                            <Search className="w-8 h-8 text-brand-600" />
                            What Is Executive Search?
                        </h2>
                        <p className="mb-6">
                            Executive search is a specialized recruitment process focused on identifying, evaluating, and hiring senior-level professionals such as:
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                            {[
                                "CXOs (CEO, CFO, CTO, COO, CHRO)",
                                "Vice Presidents & Directors",
                                "Business Heads & Functional Leaders",
                                "Senior Technical & Strategic Roles"
                            ].map((role, i) => (
                                <div key={i} className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                                    <Briefcase className="w-5 h-5 text-brand-600" />
                                    <span className="font-bold text-slate-800">{role}</span>
                                </div>
                            ))}
                        </div>

                        <p className="mb-12 font-medium text-slate-700 bg-brand-50 p-6 rounded-lg border-l-4 border-brand-500">
                            Unlike mass recruitment, executive search is highly targeted, research-driven, and discreet, ensuring the right fit not just for the role — but for the organization’s long-term vision.
                        </p>

                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Leadership Hiring Is More Challenging Today</h2>

                        <div className="space-y-8 mb-12">
                            <div className="bg-white border border-slate-200 p-6 rounded-xl hover:shadow-md transition-shadow">
                                <h3 className="text-xl font-bold text-brand-800 mb-4 flex items-center gap-2">
                                    <span className="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center text-brand-700 text-sm">1</span>
                                    Leadership Skills Are Evolving
                                </h3>
                                <p className="mb-4 text-slate-600">Modern leaders are expected to do much more than manage operations. They must:</p>
                                <div className="flex flex-wrap gap-2">
                                    {['Drive digital transformation', 'Lead hybrid and remote teams', 'Build inclusive work cultures', 'Make data-driven decisions', 'Adapt quickly to market shifts'].map((tag, i) => (
                                        <span key={i} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-white border border-slate-200 p-6 rounded-xl hover:shadow-md transition-shadow">
                                <h3 className="text-xl font-bold text-brand-800 mb-4 flex items-center gap-2">
                                    <span className="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center text-brand-700 text-sm">2</span>
                                    Limited Availability of Proven Leaders
                                </h3>
                                <p className="text-slate-600">
                                    Top-performing leaders are rarely active job seekers. They are often passive candidates, deeply engaged in their current roles — making them harder to identify and attract without a strong executive search strategy.
                                </p>
                            </div>

                            <div className="bg-white border border-slate-200 p-6 rounded-xl hover:shadow-md transition-shadow">
                                <h3 className="text-xl font-bold text-brand-800 mb-4 flex items-center gap-2">
                                    <span className="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center text-brand-700 text-sm">3</span>
                                    High Cost of a Wrong Hire
                                </h3>
                                <p className="mb-4 text-slate-600">A poor leadership hire can result in:</p>
                                <div className="grid grid-cols-2 gap-3">
                                    {['Financial losses', 'Team disengagement', 'Cultural disruption', 'Strategic setbacks'].map((item, i) => (
                                        <div key={i} className="flex items-center gap-2 text-red-600 font-medium">
                                            <XCircle className="w-4 h-4" /> {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Executive Search vs Traditional Hiring</h2>
                        <div className="overflow-x-auto mb-12 rounded-xl border border-slate-200 shadow-sm">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-slate-50 border-b border-slate-200">
                                        <th className="p-4 font-bold text-slate-900">Aspect</th>
                                        <th className="p-4 font-bold text-brand-700">Executive Search</th>
                                        <th className="p-4 font-bold text-slate-500">Traditional Hiring</th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm">
                                    {[
                                        { aspect: "Talent Pool", exec: "Passive & active candidates", trad: "Mostly active candidates" },
                                        { aspect: "Approach", exec: "Research-led & consultative", trad: "Transactional" },
                                        { aspect: "Confidentiality", exec: "High", trad: "Moderate" },
                                        { aspect: "Assessment", exec: "Deep leadership evaluation", trad: "Skill-based screening" },
                                        { aspect: "Outcome Focus", exec: "Long-term business impact", trad: "Role fulfillment" }
                                    ].map((row, i) => (
                                        <tr key={i} className="border-b border-slate-100 last:border-0 hover:bg-slate-50/50">
                                            <td className="p-4 font-medium text-slate-900">{row.aspect}</td>
                                            <td className="p-4 text-brand-700 font-medium bg-brand-50/30">{row.exec}</td>
                                            <td className="p-4 text-slate-500">{row.trad}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div className="bg-slate-50 p-4 text-center text-sm font-medium text-slate-600 border-t border-slate-200">
                                Executive search is about precision and alignment, not speed alone.
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Key Elements of Effective Executive Search</h2>
                        <div className="space-y-6 mb-12">
                            {[
                                {
                                    title: "1. Deep Role & Business Understanding",
                                    desc: "Leadership hiring begins with clarity. CLink HR works closely with organizations to understand business goals, leadership gaps, organizational culture, and strategic direction.",
                                    icon: Briefcase
                                },
                                {
                                    title: "2. Market Mapping & Talent Research",
                                    desc: "Executive search relies on comprehensive market mapping. CLink HR leverages extensive networks to uncover high-impact leadership talent others may overlook.",
                                    icon: Globe
                                },
                                {
                                    title: "3. Leadership Assessment & Fitment",
                                    desc: "Beyond experience, we evaluate decision-making ability, strategic thinking, cultural alignment, people leadership skills, and change management capability.",
                                    icon: Target
                                },
                                {
                                    title: "4. Confidential & Professional Engagement",
                                    desc: "Senior leaders expect discretion. Executive search requires trust-based engagement, ensuring conversations remain confidential and respectful throughout the process.",
                                    icon: ShieldCheck
                                }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                                    <div className="shrink-0 mt-1">
                                        <item.icon className="w-6 h-6 text-brand-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                                        <p className="text-slate-600 text-sm leading-relaxed mb-0">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Leadership Hiring for a Changing Business Landscape</h2>

                        <div className="grid md:grid-cols-2 gap-6 mb-12">
                            <div className="bg-brand-900 text-white p-6 rounded-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-10"><Zap className="w-24 h-24" /></div>
                                <h3 className="text-xl font-bold mb-4 z-10 relative">🚀 Startups & Scale-Ups</h3>
                                <p className="mb-4 text-brand-100 z-10 relative">Fast-growing companies need leaders who can:</p>
                                <ul className="space-y-2 mb-6 z-10 relative">
                                    {['Build systems from scratch', 'Scale teams rapidly', 'Manage uncertainty', 'Balance speed with stability'].map((item, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm text-brand-200">
                                            <CheckCircle className="w-3 h-3 text-accent-500" /> {item}
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-sm font-medium text-accent-400 z-10 relative">
                                    CLink HR helps startups hire leaders who grow with the business — not outgrow it.
                                </p>
                            </div>

                            <div className="bg-slate-100 text-slate-900 p-6 rounded-2xl relative overflow-hidden border border-slate-200">
                                <div className="absolute top-0 right-0 p-4 opacity-10"><Briefcase className="w-24 h-24" /></div>
                                <h3 className="text-xl font-bold mb-4 z-10 relative">🏢 Enterprises & Corporates</h3>
                                <p className="mb-4 text-slate-600 z-10 relative">Large organizations seek leaders who:</p>
                                <ul className="space-y-2 mb-6 z-10 relative">
                                    {['Drive transformation', 'Manage complexity', 'Lead cross-functional teams', 'Align global and local strategies'].map((item, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm text-slate-700">
                                            <CheckCircle className="w-3 h-3 text-brand-600" /> {item}
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-sm font-medium text-brand-700 z-10 relative">
                                    Executive search ensures leadership continuity and strategic alignment.
                                </p>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-slate-900 mb-6">How CLink HR Delivers Value in Executive Search</h2>
                        <div className="bg-white border-2 border-brand-100 rounded-2xl p-8 mb-12">
                            <div className="grid gap-6">
                                {[
                                    { title: "Customized Search Strategy", desc: "Every leadership role is unique. CLink HR tailors search strategies based on industry, role complexity, and business objectives." },
                                    { title: "Industry-Specific Expertise", desc: "From IT and BFSI to manufacturing, healthcare, retail, and emerging sectors — CLink HR understands leadership requirements across industries." },
                                    { title: "End-to-End Ownership", desc: "From role definition and candidate research to negotiation and onboarding support — the process is seamless." },
                                    { title: "Reduced Time-to-Leadership", desc: "With proactive talent pipelines, CLink HR accelerates leadership hiring without compromising quality." },
                                    { title: "Long-Term Partnership Approach", desc: "CLink HR focuses on leadership success beyond hiring — supporting organizations through long-term talent strategies." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-1">
                                            <CheckCircle className="w-4 h-4 text-green-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900">{item.title}</h4>
                                            <p className="text-slate-600 text-sm">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Leadership Hiring Trends to Watch</h2>
                        <div className="flex flex-wrap gap-3 mb-12">
                            {[
                                "Diversity in leadership as a business priority",
                                "Data-driven leadership assessment",
                                "Cross-industry leadership hiring",
                                "Increased focus on cultural alignment",
                                "Succession planning as a strategic function"
                            ].map((tag, i) => (
                                <span key={i} className="px-4 py-2 bg-gradient-to-r from-brand-50 to-white border border-brand-100 text-brand-800 rounded-lg text-sm font-medium flex items-center gap-2 shadow-sm">
                                    <TrendingUp className="w-4 h-4 text-brand-500" /> {tag}
                                </span>
                            ))}
                        </div>

                        <h2 className="text-3xl font-bold text-slate-900 mb-6">When Should You Use Executive Search?</h2>
                        <div className="grid md:grid-cols-2 gap-8 mb-12 items-center">
                            <div className="order-2 md:order-1">
                                <ul className="space-y-4">
                                    {[
                                        "Hiring for senior or confidential roles",
                                        "Leadership failure carries high risk",
                                        "Specialized industry expertise is required",
                                        "Internal talent pipelines are limited",
                                        "Business transformation is underway"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 p-4 bg-slate-50 border-l-4 border-slate-300 rounded-r-lg">
                                            <Award className="w-5 h-5 text-slate-600" />
                                            <span className="font-medium text-slate-800">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="order-1 md:order-2 bg-slate-900 text-white p-8 rounded-2xl text-center">
                                <h3 className="text-xl font-bold mb-4">Leadership Defines Success</h3>
                                <p className="text-slate-300 mb-6">If leadership defines business direction — executive search defines leadership success.</p>
                                <Link to="/contact" className="inline-block bg-white text-brand-900 px-6 py-3 rounded-full font-bold hover:bg-slate-100 transition-colors">
                                    Start Executive Search
                                </Link>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white p-8 rounded-2xl mb-12 shadow-lg">
                            <h3 className="text-2xl font-bold mb-4">Conclusion</h3>
                            <p className="text-white/90 mb-4 leading-relaxed">
                                Leadership is the single most powerful driver of organizational success. In a rapidly evolving business world, executive hiring must be strategic, confidential, and future-focused.
                            </p>
                            <p className="text-white/90 mb-6 leading-relaxed">
                                With its consultative approach, industry insight, and proven executive search framework, CLink HR helps organizations identify, attract, and retain leaders who create lasting impact.
                            </p>
                            <p className="font-medium text-lg border-t border-white/20 pt-6 mt-6">
                                Because the right leader doesn’t just fill a position — <span className="font-bold text-yellow-300">they build the future.</span>
                            </p>
                        </div>
                    </article>

                    <div className="mt-12 pt-8 border-t border-slate-100">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                            <div className="text-center md:text-left">
                                <h4 className="text-lg font-bold text-slate-900 mb-2">Looking for transformative leadership?</h4>
                                <p className="text-slate-600 text-sm">Partner with CLink HR for executive search excellence.</p>
                            </div>
                            <Link
                                to="/contact"
                                className="bg-brand-600 text-white px-8 py-3 rounded-full font-bold hover:bg-brand-700 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 transform duration-300"
                            >
                                Contact Us
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

export default ExecutiveSearchLeadershipHiring;
