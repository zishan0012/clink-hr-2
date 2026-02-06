import React from 'react';
import { motion } from 'framer-motion';
import Testimonials from '../../components/Testimonials';
import { Briefcase, Users, Award, TrendingUp, CheckCircle, Globe, Building2, ShieldCheck, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import about2 from '../../assets/company-img/about2.png';
import about1 from '../../assets/company-img/about1.avif';

const AboutUs = () => {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* --- Hero Section --- */}
            <section className="relative bg-brand-950 py-32 overflow-hidden">
                <div className="absolute inset-0">
                    <motion.img
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        src={about1}
                        alt="Indian Corporate Team"
                        className="w-full h-full object-cover"
                        loading="eager"
                        fetchPriority="high"
                    />
                    <div className="absolute inset-0 bg-brand-950/50"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-brand-800/50 border border-brand-700 text-brand-300 text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-md">
                            Who We Are
                        </span>
                        <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-8 tracking-tight leading-[1.1]">
                            Pioneering <br />
                            <span className="text-accent-500">Talent Excellence</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-200 max-w-4xl leading-relaxed font-light mb-10">
                            We are <span className="text-white font-medium">CLink HR</span>—a strategic growth partner for multinational corporations and leading businesses across India.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* --- Story / Introduction Section --- */}
            <section className="py-24 bg-white relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            <div className="absolute -inset-4 bg-brand-100 rounded-[2.5rem] transform -rotate-3 opacity-30"></div>
                            <img
                                src={about2}
                                alt="Strategy Meeting"
                                className="relative rounded-[2rem] shadow-2xl w-full object-cover h-[550px]"
                            />
                            <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-3xl shadow-xl flex flex-col items-center border border-slate-100">
                                <span className="text-5xl font-extrabold text-accent-600 tracking-tight">10+</span>
                                <span className="text-sm font-bold text-slate-500 uppercase tracking-widest mt-1">Years of Legacy</span>
                            </div>
                        </div>

                        <div>
                            <span className="text-accent-600 font-bold uppercase tracking-widest text-sm mb-4 block">Our Evolution</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                                Redefining HR for <br /><span className="text-brand-600">Dynamic Markets</span>
                            </h2>
                            <p className="text-xl text-slate-600 mb-8 leading-relaxed font-light">
                                Headquartered in Gurgaon, CLink HR has emerged as the preferred <span className="text-accent-600 font-bold">recruitment and workforce partner</span> for organizations seeking stability and scale.
                            </p>
                            <p className="text-xl text-slate-600 mb-10 leading-relaxed font-light">
                                We combine localized market intelligence with global delivery standards, ensuring that our clients hire faster and manage better.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {[
                                    { title: "Strategic Sourcing", icon: ShieldCheck },
                                    { title: "Centralized Ops", icon: Zap },
                                    { title: "Pan-India Reach", icon: Globe },
                                    { title: "Compliance Core", icon: CheckCircle }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-accent-500 shadow-sm shrink-0">
                                            <item.icon className="w-5 h-5" />
                                        </div>
                                        <span className="font-bold text-slate-800 text-sm">{item.title}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Stats Section --- */}
            <section className="py-24 bg-brand-950 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500 rounded-full blur-3xl opacity-10"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { label: "Clients Empowered", value: "500+", icon: Building2 },
                            { label: "Placements Done", value: "10k+", icon: Users },
                            { label: "Major Cities", value: "25+", icon: Globe },
                            { label: "Delivery Accuracy", value: "98%", icon: Award },
                        ].map((stat, idx) => (
                            <div key={idx} className="text-center">
                                <div className="text-4xl md:text-6xl font-extrabold mb-2 text-accent-500 tracking-tight">{stat.value}</div>
                                <div className="text-slate-300 text-sm uppercase tracking-widest font-bold">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Core Values --- */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-brand-600 font-bold uppercase tracking-widest text-sm">Our Foundation</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-3 leading-tight tracking-tight">The Values That <span className="text-accent-500 italic">Drive Us</span></h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Unwavering Reliability", desc: "We deliver on our commitments with consistent quality, no matter the scale.", icon: CheckCircle },
                            { title: "Agile Scalability", desc: "Our models grow with your business, adapting to surges and structural changes.", icon: TrendingUp },
                            { title: "Absolute Integrity", desc: "Transparency isn't a policy; it's our default operating mode in every partnership.", icon: Award },
                        ].map((val, i) => (
                            <div key={i} className="bg-white p-12 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-xl transition-all group">
                                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-accent-500 mb-8 group-hover:bg-accent-600 group-hover:text-white transition-all shadow-sm">
                                    <val.icon className="w-8 h-8" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">{val.title}</h3>
                                <p className="text-slate-600 leading-relaxed font-light">
                                    {val.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-24 bg-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 tracking-tight">Partner with the <span className="text-brand-600">Pioneers.</span></h2>
                    <p className="text-xl text-slate-600 mb-12 leading-relaxed max-w-2xl mx-auto font-light">
                        "Experience HR and recruitment services designed for the modern era of business."
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link to="/contact" className="bg-brand-600 text-white px-12 py-5 rounded-full font-bold hover:bg-brand-700 transition-all shadow-xl">
                            Talk to Us Today
                        </Link>
                    </div>
                </div>
            </section>

            <Testimonials />
        </div>
    );
};

export default AboutUs;