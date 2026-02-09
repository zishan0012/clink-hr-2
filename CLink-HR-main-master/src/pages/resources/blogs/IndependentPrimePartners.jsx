import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Testimonials from '../../../components/Testimonials';
import recruitmentEvolutionHero from '../../../assets/blog-img/Recruitment_Evolution.jpg';
import { Calendar, Clock, User, ArrowLeft, Network, Target, Award, Briefcase, Zap, CheckCircle, XCircle, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const IndependentPrimePartners = () => {
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
                        src={recruitmentEvolutionHero}
                        alt="Recruitment Evolution"
                        className="w-full h-full object-cover"
                        loading="eager"
                        fetchPriority="high"
                    />
                    <div className="absolute inset-0 bg-brand-950/60"></div>
                </div>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-800/50 border border-brand-700 text-brand-200 text-xs font-semibold tracking-widest uppercase mb-6 backdrop-blur-md mx-auto"
                    >
                        <span className="w-2 h-2 rounded-full bg-accent-500"></span>
                        Recruitment Evolution
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0 }}
                        className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-8 leading-tight"
                    >
                        How <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-brand-200">Independent Prime Partners (IPP)</span> <br className="hidden md:block" />
                        Are Transforming Talent Acquisition
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="flex flex-wrap items-center justify-center gap-6 text-slate-300 text-sm md:text-base"
                    >
                        <div className="flex items-center gap-2">
                            <User className="w-4 h-4 text-accent-500" />
                            <span>CLink HR Team</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-accent-500" />
                            <span>Nov 19, 2025</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-accent-500" />
                            <span>9 min read</span>
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
                            Talent acquisition is no longer dominated by traditional recruitment agencies or in-house hiring teams alone. As hiring becomes more specialized, faster, and outcome-driven, a new recruitment ecosystem is emerging — one powered by Independent Prime Partners (IPP).
                        </p>

                        <p className="mb-8">
                            The IPP recruitment model represents a fundamental shift in how hiring partners collaborate, deliver results, and scale talent solutions. At the center of this model are independent recruiters — experienced professionals who operate autonomously while being deeply integrated into a larger hiring ecosystem.
                        </p>

                        <p className="mb-8">
                            For recruiters and partners, IPP is not just another engagement model — it’s a career evolution. In this blog, we break down what the IPP model is, how it works, and why independent recruiters consistently outperform traditional recruitment structures.
                        </p>

                        <hr className="my-12 border-slate-200" />

                        <h2 className="text-3xl font-bold text-slate-900 mb-6">What Is the IPP Recruitment Model?</h2>
                        <p className="mb-6">
                            The Independent Prime Partner (IPP) recruitment model is an ecosystem-based hiring framework where independent recruiters work as strategic hiring partners rather than employees or sub-vendors.
                        </p>
                        <div className="bg-brand-50 p-6 rounded-2xl border border-brand-100 mb-8">
                            <strong className="block text-brand-900 mb-4">Under this model:</strong>
                            <ul className="space-y-3">
                                {[
                                    "Recruiters operate independently",
                                    "They plug into a centralized hiring ecosystem",
                                    "Access live mandates, tools, and support",
                                    "Deliver results with full ownership and accountability"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-brand-600 shrink-0" />
                                        <span className="text-brand-800">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="mt-4 text-brand-800 font-medium">
                                Unlike agency hierarchies, IPPs are performance-driven partners, not middle layers. This model combines the freedom of independence with the power of scale.
                            </p>
                        </div>

                        <h2 className="text-3xl font-bold text-slate-900 mb-6 pt-8">Why Traditional Recruitment Models Are Struggling</h2>
                        <p className="mb-6">Before understanding why IPP works, it’s important to see what’s broken.</p>

                        <div className="grid md:grid-cols-2 gap-6 mb-12">
                            {[
                                { title: "Agency Dependency", desc: "Recruiters often operate under rigid targets, internal politics, and limited flexibility." },
                                { title: "Slow Decision-Making", desc: "Multiple layers between recruiter and client delay feedback and reduce hiring velocity." },
                                { title: "Limited Ownership", desc: "Recruiters work on volume, not outcomes — which impacts candidate quality." },
                                { title: "Burnout & Attrition", desc: "High pressure with low autonomy leads to constant recruiter churn." }
                            ].map((item, i) => (
                                <div key={i} className="bg-red-50 p-6 rounded-xl border border-red-100">
                                    <h3 className="flex items-center gap-2 text-red-900 font-bold mb-2">
                                        <XCircle className="w-5 h-5 text-red-500" /> {item.title}
                                    </h3>
                                    <p className="text-red-800 text-sm m-0">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                        <p className="mb-12 font-medium text-slate-700 italic border-l-4 border-slate-300 pl-4">
                            The result? Inconsistent hiring performance and disengaged recruiters.
                        </p>

                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Independent Recruiters Perform Better</h2>
                        <p className="mb-6">Independent recruiters thrive because they operate with clarity, accountability, and motivation.</p>

                        <div className="space-y-8 mb-12">
                            {[
                                {
                                    title: "Complete Ownership of Outcomes",
                                    desc: "Independent recruiters own candidate quality, client communication, and hiring success. There’s no diffusion of responsibility. This accountability naturally drives better performance.",
                                    icon: Target,
                                    color: "bg-blue-50 text-blue-600"
                                },
                                {
                                    title: "Stronger Candidate Relationships",
                                    desc: "Independent recruiters are not rushing to close tickets. They spend more time understanding candidates, build long-term talent pipelines, and focus on career alignment, not just placements. This leads to higher offer acceptance and retention rates.",
                                    icon: Users,
                                    color: "bg-green-50 text-green-600"
                                },
                                {
                                    title: "Specialization Over Generalization",
                                    desc: "Most independent recruiters focus on specific industries, niche skills, or senior roles. Specialization enables faster shortlisting and deeper talent insights — something generic agency models struggle to deliver.",
                                    icon: Briefcase,
                                    color: "bg-purple-50 text-purple-600"
                                },
                                {
                                    title: "Performance-Based Motivation",
                                    desc: "In IPP models, performance directly impacts earnings, reputation, and long-term opportunities. This creates a self-driven, high-performance culture — without micromanagement.",
                                    icon: Zap,
                                    color: "bg-amber-50 text-amber-600"
                                }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className={`w-12 h-12 rounded-full ${item.color} flex items-center justify-center shrink-0`}>
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">{i + 1}. {item.title}</h3>
                                        <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <h2 className="text-3xl font-bold text-slate-900 mb-6">How the IPP Ecosystem Model Works</h2>
                        <p className="mb-6">The real power of IPP lies in the ecosystem.</p>

                        <div className="bg-slate-900 text-slate-300 p-8 rounded-2xl mb-8">
                            <h3 className="text-white text-xl font-bold mb-4 flex items-center gap-2">
                                <Network className="w-5 h-5 text-accent-500" /> Centralized Support, Decentralized Execution
                            </h3>
                            <p className="mb-4">A strong IPP ecosystem provides:</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                                {['Verified client mandates', 'Transparent payout structures', 'Technology platforms (ATS, dashboards)', 'Compliance and contract support', 'Branding and credibility'].map((tag, i) => (
                                    <div key={i} className="flex items-center gap-2 bg-slate-800/50 p-2 rounded px-3 border border-slate-700">
                                        <div className="w-1.5 h-1.5 rounded-full bg-accent-500" /> {tag}
                                    </div>
                                ))}
                            </div>
                            <p className="text-brand-100 italic">Recruiters focus only on what they do best — hiring.</p>
                        </div>

                        <div className="bg-white border border-slate-200 p-8 rounded-2xl mb-12 shadow-sm">
                            <h3 className="text-brand-800 text-xl font-bold mb-4">Collaboration Without Competition</h3>
                            <p className="text-slate-600 mb-4">
                                Unlike agencies where recruiters compete internally, IPP ecosystems encourage skill-based collaboration, shared intelligence, and collective success. This creates a network effect, improving speed and quality across mandates.
                            </p>
                        </div>

                        <h2 className="text-3xl font-bold text-slate-900 mb-6">IPP vs Traditional Recruitment Models</h2>
                        <div className="overflow-x-auto mb-12 rounded-xl border border-slate-200 shadow-sm">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-slate-50 border-b border-slate-200">
                                        <th className="p-4 font-bold text-slate-900">Aspect</th>
                                        <th className="p-4 font-bold text-brand-700">IPP Recruitment Model</th>
                                        <th className="p-4 font-bold text-slate-500">Traditional Agency Model</th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm">
                                    {[
                                        { aspect: "Recruiter Role", ipp: "Strategic Partner", trad: "Employee / Sub-vendor" },
                                        { aspect: "Ownership", ipp: "High", trad: "Low" },
                                        { aspect: "Flexibility", ipp: "Complete", trad: "Limited" },
                                        { aspect: "Incentives", ipp: "Performance-driven", trad: "Target-driven" },
                                        { aspect: "Scalability", ipp: "Network-based", trad: "Headcount-based" },
                                        { aspect: "Candidate Quality", ipp: "High", trad: "Inconsistent" }
                                    ].map((row, i) => (
                                        <tr key={i} className="border-b border-slate-100 last:border-0 hover:bg-slate-50/50">
                                            <td className="p-4 font-medium text-slate-900">{row.aspect}</td>
                                            <td className="p-4 text-brand-700 font-medium bg-brand-50/30">{row.ipp}</td>
                                            <td className="p-4 text-slate-500">{row.trad}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="mb-12 text-center text-slate-700 font-medium">
                            The IPP recruitment model isn’t about replacing agencies — it’s about evolving recruitment economics.
                        </p>

                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Hiring Partners Prefer IPP Models</h2>
                        <p className="mb-6">From the hiring partner’s perspective, IPP ecosystems offer:</p>
                        <div className="grid md:grid-cols-2 gap-4 mb-12">
                            {[
                                { title: "Faster Turnaround", desc: "Independent recruiters move faster without bureaucratic delays." },
                                { title: "Higher Quality Candidates", desc: "Ownership and specialization result in better shortlists." },
                                { title: "Cost Efficiency", desc: "Lower overheads mean better ROI per hire." },
                                { title: "Scalability On Demand", desc: "Access to a distributed network of recruiters without increasing internal team size." }
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

                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Education Is the Missing Link in IPP Adoption</h2>
                        <p className="mb-6">
                            Despite its advantages, many recruiters hesitate because they don’t fully understand how IPP works. IPP is not:
                        </p>
                        <div className="flex flex-wrap gap-3 mb-6">
                            {['Freelancing without support', 'Unstructured gig hiring', 'Commission-only chaos'].map((tag, i) => (
                                <span key={i} className="px-4 py-2 bg-red-50 text-red-700 rounded-full text-sm font-medium border border-red-100 flex items-center gap-2">
                                    <XCircle className="w-4 h-4" /> {tag}
                                </span>
                            ))}
                        </div>
                        <p className="mb-6">
                            It is a structured, transparent, ecosystem-driven model built for serious recruiters who want autonomy with stability. Education around <strong>Mandate access, Compliance frameworks, Revenue models, and Performance tracking</strong> is critical to successful IPP adoption.
                        </p>

                        <h2 className="text-3xl font-bold text-slate-900 mb-6 pt-8">The Future of Talent Acquisition Is Ecosystem-Led</h2>
                        <p className="mb-6">The hiring landscape is moving toward:</p>
                        <ul className="mb-8 grid grid-cols-2 gap-4 list-disc pl-5 text-slate-700">
                            <li>Distributed talent networks</li>
                            <li>Outcome-based partnerships</li>
                            <li>Skill-led recruitment</li>
                            <li>Flexible engagement models</li>
                        </ul>
                        <p className="mb-8 font-medium text-brand-800">
                            Independent Prime Partners sit at the center of this future. Recruitment is no longer about who has the biggest team — it’s about who has the strongest network.
                        </p>

                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Now Is the Right Time to Go Independent</h2>
                        <div className="grid md:grid-cols-2 gap-6 mb-12">
                            <div className="bg-brand-50 p-6 rounded-xl border border-brand-100">
                                <h4 className="font-bold text-brand-800 mb-4 flex items-center gap-2"><User className="w-5 h-5" /> For Recruiters</h4>
                                <ul className="space-y-2 text-sm text-brand-900">
                                    <li>• Professional independence</li>
                                    <li>• Income scalability</li>
                                    <li>• Control over workload</li>
                                    <li>• Long-term career sustainability</li>
                                </ul>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                                <h4 className="font-bold text-slate-800 mb-4 flex items-center gap-2"><Briefcase className="w-5 h-5" /> For Hiring Partners</h4>
                                <ul className="space-y-2 text-sm text-slate-900">
                                    <li>• Speed</li>
                                    <li>• Quality</li>
                                    <li>• Accountability</li>
                                    <li>• Flexibility</li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-brand-600 to-brand-800 text-white p-8 rounded-2xl mb-12 shadow-lg">
                            <h3 className="text-2xl font-bold mb-4">Conclusion</h3>
                            <p className="text-brand-100 mb-4 leading-relaxed">
                                The IPP recruitment model is redefining how talent acquisition works — by empowering independent recruiters to operate as strategic hiring partners within scalable ecosystems.
                            </p>
                            <p className="text-brand-100 mb-6 leading-relaxed">
                                Independent recruiters perform better because they own outcomes, specialize deeply, build stronger relationships, and are motivated by results, not targets. As the recruitment industry evolves, ecosystem-led models like IPP will become the new standard.
                            </p>
                            <p className="font-medium text-lg">
                                For recruiters ready to step beyond traditional limitations — IPP isn’t the future. <br /> It’s already here.
                            </p>
                        </div>
                    </article>

                    <div className="mt-12 pt-8 border-t border-slate-100">
                        <div className="flex flex-col items-center justify-center text-center gap-6">
                            <div>
                                <h4 className="text-xl font-bold text-slate-900 mb-2">Are you a recruiter looking for independence?</h4>
                                <p className="text-slate-600 text-base">Join the IPP ecosystem today.</p>
                            </div>
                            <Link
                                to="/partners/become-ipp-partner"
                                className="bg-accent-500 text-brand-900 px-8 py-3 rounded-full font-semibold hover:bg-accent-400 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 transform duration-300"
                            >
                                Join as Partner
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

export default IndependentPrimePartners;
