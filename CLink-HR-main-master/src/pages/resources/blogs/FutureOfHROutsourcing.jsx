import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import industryTrendsHero from '../../../assets/blog-img/Industry Trends.jpg';
import { Calendar, Clock, User, Share2, ArrowLeft, CheckCircle, TrendingUp, Users, ShieldCheck, Settings, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

const FutureOfHROutsourcing = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white pt-20">
            {/* HER O SECTION */}
            <section className="relative bg-brand-950 py-20 pb-32 overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={industryTrendsHero}
                        alt="Industry Trends"
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
                        Industry Insights
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-8 leading-tight"
                    >
                        The Future of HR Outsourcing: <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-brand-200">
                            Strategic Benefits of RPO & HRMS in 2026
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
                            <span>Oct 28, 2025</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-accent-500" />
                            <span>8 min read</span>
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
                            The talent marketplace is evolving faster than ever — and businesses must adapt their HR strategies to compete for skilled professionals. In 2026, HR Outsourcing and Recruitment Process Outsourcing (RPO) are no longer optional support functions — they are strategic levers driving competitive advantage.
                        </p>

                        <p className="mb-8">
                            Leading companies worldwide leverage these solutions to streamline hiring, enhance compliance, and deliver measurable business outcomes. In this blog, we dive into how modern HR outsourcing (powered by RPO and smart HRMS platforms) unlocks long-term growth, reduces costs, and puts organizations ahead in a dynamic market landscape.
                        </p>

                        <hr className="my-12 border-slate-200" />

                        <h2 className="text-3xl font-bold text-slate-900 mb-6">What Is HR Outsourcing & Why It Matters Now</h2>
                        <p className="mb-6">
                            HR outsourcing refers to delegating certain HR functions to specialized partners so companies can focus on core business priorities. From staffing and recruitment to payroll and compliance, outsourcing reduces overhead and increases agility.
                        </p>
                        <p className="mb-6">
                            <strong>CLink HR</strong>, a pioneer of organized recruitment services in India, has been refining this model for years — helping companies scale their HR capabilities with precision and efficiency.
                        </p>
                        <div className="bg-brand-50 p-6 rounded-2xl border border-brand-100 mb-8">
                            <p className="text-brand-800 font-medium m-0">
                                "This shift isn’t just about offloading tasks; it’s about strategic collaboration. Outsourcing partners bring deep market insights and structured processes that internal teams might lack, especially during growth phases or talent shortages."
                            </p>
                        </div>

                        <h2 className="text-3xl font-bold text-slate-900 mb-6 pt-8">Recruitment Process Outsourcing (RPO): A Game Changer</h2>
                        <p className="mb-6">
                            Recruitment Process Outsourcing (RPO) specifically focuses on outsourcing the entire recruitment workflow — from candidate sourcing and screening to onboarding. In a competitive hiring environment, RPO offers:
                        </p>
                        <ul className="grid md:grid-cols-2 gap-4 list-none pl-0 mb-8">
                            {[
                                { title: "Scalability", desc: "Rapidly adjust recruiting efforts based on demand without burdening internal HR teams." },
                                { title: "Quality Hiring", desc: "Access to a broader talent network and expertise in matching candidates to culture and skills requirements." },
                                { title: "Process Efficiency", desc: "Metrics-driven workflows that shorten time-to-hire and improve candidate experience." },
                            ].map((item, i) => (
                                <li key={i} className="bg-slate-50 p-5 rounded-xl border border-slate-100">
                                    <strong className="block text-brand-700 text-lg mb-2">{item.title}</strong>
                                    <span className="text-slate-600 text-sm">{item.desc}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="mb-8">
                            At CLink HR, RPO isn’t just transactional — it’s analytical and customized. Their RPO model integrates continuous improvement through analytics and recruiter-on-demand services, delivering quality hires with predictable timelines.
                        </p>

                        <h2 className="text-3xl font-bold text-slate-900 mb-6 pt-8">HRMS Platforms: Your Digital Backbone</h2>
                        <p className="mb-6">
                            While RPO handles strategic hiring, HRMS (Human Resource Management System) platforms act as the operational backbone for HR functions. Today’s HRMS platforms centralize:
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                            {['Automated payroll', 'Employee onboarding', 'Time and attendance', 'Leave tracking', 'Performance management', 'Statutory compliance'].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 p-3 bg-white border border-slate-200 rounded-lg shadow-sm">
                                    <div className="w-2 h-2 rounded-full bg-accent-500"></div>
                                    <span className="font-semibold text-slate-700 text-sm">{item}</span>
                                </div>
                            ))}
                        </div>
                        <p className="mb-8">
                            This consolidated system ensures that HR data is transparent, accessible, and actionable. CLink HR’s HRMS solutions streamline workflows and bring clarity and control to every stage of the employee lifecycle — driving productivity and minimizing manual errors.
                        </p>

                        <h2 className="text-3xl font-bold text-slate-900 mb-8 pt-8">Key Benefits of RPO + HRMS in 2026</h2>
                        <div className="space-y-6 mb-12">
                            {[
                                { title: "Reduced Recruitment Costs", desc: "By outsourcing hiring tasks to experienced teams that specialize in talent acquisition, companies can cut down on wasteful ad spend, reduce agency fees, and eliminate the cost of high turnover.", icon: TrendingUp },
                                { title: "Faster Hiring, Better Fit", desc: "Analytics-led recruitment and optimized HRMS workflows improve both speed and accuracy in hiring. Employers can quickly pivot to hiring profiles that genuinely align with business needs.", icon: Users },
                                { title: "Compliance Accuracy", desc: "Managing compliance manually is fraught with risk. HRMS integrations ensure statutory compliance is consistently met — safeguarding organizations from legal penalties and reputation damage.", icon: ShieldCheck },
                                { title: "Focus on Strategic Growth", desc: "HR leaders can transition from administrative responsibilities to strategic advisory roles — shaping workforce planning, employer branding, and long-term talent strategies.", icon: Settings },
                                { title: "Data-Driven Decision-Making", desc: "Modern HRMS systems generate actionable insights across employee performance, retention metrics, and recruitment funnel analytics — empowering smarter decisions.", icon: BarChart3 }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 items-start">
                                    <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center text-brand-600 shrink-0 mt-1">
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">{i + 1}. {item.title}</h3>
                                        <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <h2 className="text-3xl font-bold text-slate-900 mb-6 pt-8">Trends Shaping HR Outsourcing in India</h2>
                        <div className="bg-slate-900 text-slate-300 p-8 rounded-2xl mb-12">
                            <p className="mb-4 text-brand-200 uppercase tracking-widest text-xs font-bold">In 2026</p>
                            <ul className="space-y-4">
                                <li className="flex gap-3">
                                    <span className="text-accent-500 font-bold">🔹</span>
                                    <span><strong>Hybrid Work Models:</strong> Organizations seek flexible talent solutions that adapt to remote or hybrid working styles.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-accent-500 font-bold">🔹</span>
                                    <span><strong>Skill-Based Hiring:</strong> More companies prioritize skills over traditional qualifications, making talent matching technologies and RPO expertise even more valuable.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-accent-500 font-bold">🔹</span>
                                    <span><strong>Employee Experience Focus:</strong> Tools that improve engagement and satisfaction are now central to retention strategies.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-accent-500 font-bold">🔹</span>
                                    <span><strong>Automation & AI:</strong> Intelligent systems are reshaping recruitment, screening resumes and predicting candidate-job fit more accurately.</span>
                                </li>
                            </ul>
                        </div>

                        <h2 className="text-3xl font-bold text-slate-900 mb-6">How CLink HR Fits Into This Transformation</h2>
                        <p className="mb-6">
                            CLink HR provides a full suite of strategic HR solutions, including RPO, permanent and temporary staffing, executive search, payroll services, compliance support, and HRMS platforms — all designed to keep businesses competitive in a rapidly changing world.
                        </p>
                        <p className="mb-8">
                            Their approach integrates deep recruitment expertise with technology-led delivery, ensuring organizations benefit from end-to-end talent management solutions. Whether you’re scaling operations, transforming HR practices, or enhancing workforce productivity — outsourced HR services are the catalyst that drives measurable impact.
                        </p>

                        <div className="bg-gradient-to-r from-brand-600 to-brand-800 text-white p-8 rounded-2xl mb-12 shadow-lg">
                            <h3 className="text-2xl font-bold mb-4">Conclusion</h3>
                            <p className="text-brand-100 mb-4 leading-relaxed">
                                The future of HR lies in collaboration — combining human expertise with smart, scalable systems. Outsourcing HR functions like recruitment and HRMS removes friction, amplifies results, and empowers internal teams to focus on strategic growth.
                            </p>
                            <p className="font-medium">
                                In 2026, organizations that adopt modern HR outsourcing practices will be best positioned to attract and retain top talent, reduce operational costs, and build resilient, future-ready workplaces.
                            </p>
                        </div>
                    </article>

                    <div className="mt-12 pt-8 border-t border-slate-100">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                            <div className="text-center md:text-left">
                                <h4 className="text-lg font-bold text-slate-900 mb-2">Ready to transform your HR?</h4>
                                <p className="text-slate-600 text-sm">Explore what RPO and HRMS solutions can do for you.</p>
                            </div>
                            <Link
                                to="/contact"
                                className="bg-accent-500 text-brand-900 px-8 py-3 rounded-full font-bold hover:bg-accent-400 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 transform duration-300"
                            >
                                Get in Touch
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

export default FutureOfHROutsourcing;
