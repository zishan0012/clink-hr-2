import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowLeft, Network, Briefcase, Zap, CheckCircle, XCircle, BarChart3, Globe, ShieldCheck, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const BusinessPrimePartners = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white pt-20">
            {/* HERO SECTION */}
            <section className="relative bg-brand-950 py-20 pb-32 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,#3b82f6_0%,transparent_60%)]" />
                </div>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-800/50 border border-brand-700 text-brand-200 text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-md"
                    >
                        <span className="w-2 h-2 rounded-full bg-accent-500"></span>
                        Partnership Evolution
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-8 leading-tight"
                    >
                        How <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-brand-200">Business Prime Partners (BPP)</span> <br className="hidden md:block" />
                        Are Powering the Next Generation of <br className="hidden md:block" /> Talent & Business Growth
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-wrap justify-center items-center gap-6 text-slate-300 text-sm md:text-base"
                    >
                        <div className="flex items-center gap-2">
                            <User className="w-4 h-4 text-accent-500" />
                            <span>CLink HR Team</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-accent-500" />
                            <span>Nov 26, 2025</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-accent-500" />
                            <span>10 min read</span>
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
                            In a rapidly evolving business landscape, growth is no longer driven by isolated efforts. The most successful organizations today are built on strong partner ecosystems — where collaboration, accountability, and shared success define the model.
                        </p>

                        <p className="mb-6 font-bold text-xl text-brand-900">
                            This is where Business Prime Partners (BPP) come in.
                        </p>

                        <p className="mb-8">
                            The BPP partner model represents a strategic evolution in how businesses, consultants, recruiters, and service providers collaborate to drive scalable growth. Unlike traditional channel partnerships or referral programs, BPP is designed as a long-term, value-driven ecosystem where partners operate as an extension of the core business.
                        </p>

                        <div className="flex flex-col md:flex-row gap-6 mb-12">
                            <div className="flex-1 bg-brand-50 p-6 rounded-xl border border-brand-100">
                                <h4 className="font-bold text-brand-800 mb-2">For Partners</h4>
                                <p className="text-brand-900 m-0">BPP offers ownership, flexibility, and growth.</p>
                            </div>
                            <div className="flex-1 bg-accent-50 p-6 rounded-xl border border-accent-100">
                                <h4 className="font-bold text-accent-900 mb-2">For Businesses</h4>
                                <p className="text-accent-900 m-0">It delivers reach, speed, and execution excellence.</p>
                            </div>
                        </div>

                        <p className="mb-8">
                            In this blog, we explain what the BPP model is, how it works, and why it is becoming a preferred framework for sustainable business expansion.
                        </p>

                        <hr className="my-12 border-slate-200" />

                        <h2 className="text-3xl font-bold text-slate-900 mb-6">What Is the BPP (Business Prime Partner) Model?</h2>
                        <p className="mb-6">
                            The BPP model is an ecosystem-based partnership framework where independent professionals or firms collaborate with a central organization to deliver business outcomes — while retaining operational independence.
                        </p>

                        <div className="mb-8 p-6 bg-slate-50 rounded-2xl border border-slate-200">
                            <h3 className="text-lg font-bold text-slate-900 mb-4">A BPP is NOT:</h3>
                            <div className="flex flex-wrap gap-3 mb-6">
                                {['A reseller', 'A commission-only affiliate', 'A short-term contractor'].map((tag, i) => (
                                    <span key={i} className="px-4 py-2 bg-red-50 text-red-700 rounded-full text-sm font-medium border border-red-100 flex items-center gap-2">
                                        <XCircle className="w-4 h-4" /> {tag}
                                    </span>
                                ))}
                            </div>
                            <p className="font-bold text-brand-800 text-lg">A BPP is a strategic business partner.</p>
                        </div>

                        <div className="bg-white border-l-4 border-brand-500 pl-6 mb-8">
                            <strong className="block text-slate-900 mb-4">Under this model, partners:</strong>
                            <ul className="space-y-2">
                                {[
                                    "Represent services under a unified ecosystem",
                                    "Operate independently with defined accountability",
                                    "Access structured opportunities, systems, and support",
                                    "Grow revenue through performance-based engagement"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-brand-600 shrink-0" />
                                        <span className="text-slate-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <p className="mb-12 font-medium text-slate-700">
                            The BPP model blends entrepreneurial freedom with enterprise-level structure.
                        </p>

                        <h2 className="text-3xl font-bold text-slate-900 mb-6 pt-4">Why Traditional Partnership Models Fall Short</h2>
                        <p className="mb-6">Many partnership programs fail because they are built on transactions, not trust.</p>

                        <div className="space-y-4 mb-8">
                            {[
                                { title: "Referral-Only Partnerships", desc: "Limited engagement, low ownership, and inconsistent results." },
                                { title: "Channel Partner Models", desc: "Heavy dependence on volume, weak accountability, and slow scalability." },
                                { title: "Vendor-Based Relationships", desc: "Short-term focus with minimal alignment to long-term growth." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 p-4 border border-slate-100 rounded-lg hover:bg-red-50/50 transition-colors group">
                                    <XCircle className="w-6 h-6 text-red-400 mt-1 shrink-0 group-hover:text-red-500" />
                                    <div>
                                        <h3 className="font-bold text-slate-900">{item.title}</h3>
                                        <p className="text-slate-600 text-sm m-0">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <p className="mb-12 font-medium text-slate-700 italic">
                            These models lack integration, transparency, and performance alignment — all of which are foundational to the BPP ecosystem.
                        </p>

                        <h2 className="text-3xl font-bold text-slate-900 mb-6">How the BPP Ecosystem Works</h2>
                        <div className="bg-slate-900 text-slate-300 p-8 rounded-2xl mb-8">
                            <h3 className="text-white text-xl font-bold mb-4 flex items-center gap-2">
                                <Network className="w-5 h-5 text-accent-500" /> Centralized Strategy, Decentralized Execution
                            </h3>
                            <p className="mb-4 text-brand-100">
                                At the heart of the BPP model is a simple idea: <strong>Enable partners to focus on execution while the ecosystem handles structure.</strong>
                            </p>
                            <p className="mb-4 text-sm uppercase tracking-wider font-bold text-slate-400">A strong BPP ecosystem provides:</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                                {['Verified business opportunities', 'Clear service frameworks', 'Transparent revenue-sharing models', 'Process and compliance support', 'Technology platforms and dashboards', 'Brand credibility and market positioning'].map((tag, i) => (
                                    <div key={i} className="flex items-center gap-2 bg-slate-800/50 p-2 rounded px-3 border border-slate-700">
                                        <div className="w-1.5 h-1.5 rounded-full bg-accent-500" /> {tag}
                                    </div>
                                ))}
                            </div>
                            <p className="text-white italic text-center border-t border-slate-700 pt-4 mt-2">
                                Partners operate with autonomy — but never in isolation.
                            </p>
                        </div>

                        <div className="bg-brand-50 border border-brand-100 p-8 rounded-2xl mb-12">
                            <h3 className="text-brand-900 text-xl font-bold mb-4">Defined Roles, Clear Accountability</h3>
                            <p className="text-brand-800 mb-4">Each BPP operates with:</p>
                            <ul className="grid md:grid-cols-2 gap-4 mb-4">
                                {['Clearly defined scope of work', 'Performance metrics', 'Service-level expectations', 'Growth pathways within the ecosystem'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-2 text-brand-900 font-medium">
                                        <CheckCircle className="w-4 h-4 text-brand-600" /> {item}
                                    </li>
                                ))}
                            </ul>
                            <p className="text-brand-800 italic">This clarity drives consistent delivery and predictable outcomes.</p>
                        </div>

                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Why BPP Partners Perform Better</h2>
                        <div className="grid md:grid-cols-2 gap-6 mb-12">
                            {[
                                {
                                    title: "Ownership Mindset",
                                    desc: "BPP partners operate like business owners, not intermediaries. They are accountable for client outcomes, service quality, and long-term relationships. Ownership naturally leads to better execution.",
                                    icon: ShieldCheck
                                },
                                {
                                    title: "Focused Expertise",
                                    desc: "BPP partners often specialize in Recruitment & staffing, HR services, Sales enablement, Business consulting, or Industry-specific solutions. This specialization ensures depth over breadth.",
                                    icon: Target
                                },
                                {
                                    title: "Performance-Linked Growth",
                                    desc: "In the BPP model, growth is directly tied to results delivered, client success, and ecosystem contribution. This creates a merit-driven partnership culture, not a hierarchy-driven one.",
                                    icon: BarChart3
                                },
                                {
                                    title: "Reduced Operational Friction",
                                    desc: "With centralized systems and support, BPP partners avoid administrative overload, legal/compliance complexities, and technology investment burdens. They focus on what matters most — business development and delivery.",
                                    icon: Zap
                                }
                            ].map((item, i) => (
                                <div key={i} className="bg-white border border-slate-200 p-6 rounded-xl hover:shadow-md transition-shadow">
                                    <div className="w-12 h-12 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center mb-4">
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        <h2 className="text-3xl font-bold text-slate-900 mb-6">BPP vs Traditional Business Partnerships</h2>
                        <div className="overflow-x-auto mb-12 rounded-xl border border-slate-200 shadow-sm">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-slate-50 border-b border-slate-200">
                                        <th className="p-4 font-bold text-slate-900">Aspect</th>
                                        <th className="p-4 font-bold text-brand-700">BPP Model</th>
                                        <th className="p-4 font-bold text-slate-500">Traditional Partnership</th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm">
                                    {[
                                        { aspect: "Partner Role", bpp: "Strategic Business Partner", trad: "Vendor / Referrer" },
                                        { aspect: "Ownership", bpp: "High", trad: "Limited" },
                                        { aspect: "Revenue Model", bpp: "Performance-based", trad: "Transaction-based" },
                                        { aspect: "Scalability", bpp: "Ecosystem-driven", trad: "Linear" },
                                        { aspect: "Support Structure", bpp: "Centralized & ongoing", trad: "Minimal" },
                                        { aspect: "Long-Term Alignment", bpp: "Strong", trad: "Weak" }
                                    ].map((row, i) => (
                                        <tr key={i} className="border-b border-slate-100 last:border-0 hover:bg-slate-50/50">
                                            <td className="p-4 font-medium text-slate-900">{row.aspect}</td>
                                            <td className="p-4 text-brand-700 font-medium bg-brand-50/30">{row.bpp}</td>
                                            <td className="p-4 text-slate-500">{row.trad}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div className="bg-slate-50 p-4 text-center text-sm font-medium text-slate-600 border-t border-slate-200">
                                The BPP model is designed for sustainable growth, not quick wins.
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Who Should Become a BPP Partner?</h2>
                        <div className="flex flex-col md:flex-row gap-8 mb-12 items-center">
                            <div className="flex-1">
                                <p className="mb-4 text-slate-700">The BPP ecosystem is ideal for:</p>
                                <ul className="space-y-3">
                                    {[
                                        "Experienced recruiters & HR consultants",
                                        "Business development professionals",
                                        "Independent service providers",
                                        "Boutique firms looking to scale",
                                        "Entrepreneurs seeking structured growth"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 p-3 bg-white border border-slate-200 rounded-lg shadow-sm">
                                            <User className="w-5 h-5 text-accent-500" />
                                            <span className="font-medium text-slate-800">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex-1 bg-brand-900 text-white p-8 rounded-2xl text-center">
                                <h3 className="text-xl font-bold mb-4">Ready to Scale?</h3>
                                <p className="text-brand-100 mb-6">If you value independence with support, BPP is a powerful growth path.</p>
                                <Link to="/partner/bpp-program" className="inline-block bg-accent-500 text-brand-900 px-6 py-3 rounded-full font-bold hover:bg-accent-400 transition-colors">
                                    Join BPP Program
                                </Link>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-slate-900 mb-6">How BPP Partners Add Value to Businesses</h2>
                        <p className="mb-6">From a business perspective, BPP partnerships deliver:</p>
                        <div className="grid md:grid-cols-2 gap-4 mb-12">
                            {[
                                { title: "Faster Market Expansion", desc: "Access to distributed partner networks without increasing fixed costs." },
                                { title: "Local Market Expertise", desc: "Partners bring regional, industry, and client-level insights." },
                                { title: "Scalability Without Risk", desc: "Growth without heavy infrastructure investment." },
                                { title: "Stronger Client Relationships", desc: "Partners operate closer to clients, improving engagement and retention." }
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                                    <div>
                                        <strong className="block text-slate-900">{item.title}</strong>
                                        <span className="text-slate-600 text-sm">{item.desc}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <h2 className="text-3xl font-bold text-slate-900 mb-6">The Role of Education in a Successful BPP Model</h2>
                        <p className="mb-6">
                            A BPP ecosystem thrives on clarity and enablement. Successful platforms invest in:
                        </p>
                        <div className="flex flex-wrap gap-2 mb-6">
                            {['Partner onboarding programs', 'Process documentation', 'Performance frameworks', 'Continuous skill development', 'Transparent communication'].map((tag, i) => (
                                <span key={i} className="px-3 py-1 bg-brand-50 text-brand-700 rounded text-sm font-medium border border-brand-100">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <p className="mb-8 font-medium text-slate-700 border-l-4 border-accent-500 pl-4">
                            Education ensures partners are aligned, confident, and capable — not confused or disengaged.
                        </p>

                        <h2 className="text-3xl font-bold text-slate-900 mb-6">The Future of Business Growth Is Ecosystem-Led</h2>
                        <p className="mb-6">Across industries, growth is shifting from centralized teams to distributed partner ecosystems.</p>
                        <div className="bg-slate-900 text-white p-6 rounded-xl text-center mb-8">
                            <p className="text-lg font-light mb-4">The BPP model reflects this future by enabling:</p>
                            <div className="flex flex-wrap justify-center gap-4 text-accent-400 font-bold">
                                <span>DECENTRALIZED EXECUTION</span>
                                <span className="text-slate-600">•</span>
                                <span>CENTRALIZED GOVERNANCE</span>
                                <span className="text-slate-600">•</span>
                                <span>SHARED SUCCESS</span>
                                <span className="text-slate-600">•</span>
                                <span>LONG-TERM COLLABORATION</span>
                            </div>
                        </div>
                        <p className="mb-12 text-center font-medium text-brand-800">
                            Businesses that embrace ecosystem-led growth will scale faster and more sustainably.
                        </p>


                        <div className="bg-gradient-to-r from-brand-600 to-brand-800 text-white p-8 rounded-2xl mb-12 shadow-lg">
                            <h3 className="text-2xl font-bold mb-4">Conclusion</h3>
                            <p className="text-brand-100 mb-4 leading-relaxed">
                                The Business Prime Partner (BPP) model is redefining how modern businesses grow — by transforming partners into stakeholders, collaborators, and growth drivers.
                            </p>
                            <p className="text-brand-100 mb-6 leading-relaxed">
                                BPP partners succeed because they operate with ownership, leverage structured ecosystems, focus on outcomes, and grow alongside the business.
                            </p>
                            <p className="font-medium text-lg border-t border-brand-500 pt-6 mt-6">
                                For organizations looking to scale without complexity — and for partners seeking independence without instability — BPP is not just a model. <br /> <span className="text-accent-400 text-2xl font-bold mt-2 block">It’s a mindset for the future.</span>
                            </p>
                        </div>
                    </article>

                    <div className="mt-12 pt-8 border-t border-slate-100">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                            <div className="text-center md:text-left">
                                <h4 className="text-lg font-bold text-slate-900 mb-2">Want to grow as a Business Prime Partner?</h4>
                                <p className="text-slate-600 text-sm">Join the BPP ecosystem today.</p>
                            </div>
                            <Link
                                to="/partner/bpp-program"
                                className="bg-accent-500 text-brand-900 px-8 py-3 rounded-full font-bold hover:bg-accent-400 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 transform duration-300"
                            >
                                Apply Now
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

export default BusinessPrimePartners;
