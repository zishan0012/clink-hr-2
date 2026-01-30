import React from 'react';
import { motion } from 'framer-motion';
import {
    MapPin,
    Globe,
    Share2,
    Building,
    Users,
    CheckCircle,
    ArrowRight,
    ShieldCheck,
    Briefcase
} from 'lucide-react';
import { Link } from 'react-router-dom';

const RegionCard = ({ title, desc, img, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.6 }}
        className="group relative overflow-hidden rounded-[2.5rem] h-96 shadow-lg cursor-pointer border border-slate-100"
    >
        <img
            src={img}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-950 via-brand-950/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-10 text-white w-full">
            <h3 className="text-3xl font-bold mb-3 tracking-tight">{title}</h3>
            <p className="text-slate-300 text-sm font-medium leading-relaxed group-hover:text-white transition-colors">{desc}</p>
        </div>
    </motion.div>
);

const PanIndiaPresence = () => {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="bg-brand-950 py-32 relative overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1532375810709-75b1da00537c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2076&q=80"
                        alt="India Gate - Pan India"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-brand-950/50"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-brand-800/50 border border-brand-700 text-brand-200 text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-md">
                            Nationwide Coverage
                        </span>
                        <h1 className="text-4xl md:text-8xl font-extrabold text-white mb-8 tracking-tight leading-[1.1]">
                            Pan-India <br />
                            <span className="text-accent-500">Service Network</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-200 max-w-4xl  leading-relaxed font-light">
                            One partner. Every hub. Consistent <span className="text-white font-medium">workforce solutions</span> across India's most critical business clusters.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Regions Grid */}
            <section className="py-24 bg-white relative -mt-16 rounded-t-[4rem] z-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-accent-600 font-bold uppercase tracking-widest text-sm mb-4 block">Regional Depth</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">Our Focus Centers</h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <RegionCard
                            title="Metro Hubs"
                            desc="Delhi NCR, Mumbai, Bangalore, Hyderabad, Chennai, Kolkata"
                            img="https://images.unsplash.com/photo-1596176530529-78163a4f7af2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1527&q=80"
                            delay={0}
                        />
                        <RegionCard
                            title="Tier-2 Growth"
                            desc="Pune, Ahmedabad, Jaipur, Indore, Chandigarh"
                            img="https://images.unsplash.com/photo-1599661046289-e31897846e41?ixlib=rb-4.0.3&auto=format&fit=crop&w=1527&q=80"
                            delay={0.1}
                        />
                        <RegionCard
                            title="Industrial Belts"
                            desc="Manufacturing clusters in Gujarat, Maharashtra, TN"
                            img="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                            delay={0.2}
                        />
                        <RegionCard
                            title="Tech Parks"
                            desc="Noida, Kochi, Trivandrum, Bhubaneswar"
                            img="https://images.unsplash.com/photo-1532009877282-3340270e0529?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                            delay={0.3}
                        />
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-accent-600 font-bold uppercase tracking-widest text-sm mb-4 block">Unified Delivery</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight tracking-tight">
                                Built for <br /><span className="text-brand-600">Multi-Location Scaling</span>
                            </h2>
                            <p className="text-xl text-slate-600 mb-10 leading-relaxed font-light">
                                Managing talent across cities is complex. We simplify this with a <span className="text-accent-600 font-bold">single dashboard framework</span> that maintains quality standards everywhere.
                            </p>

                            <div className="space-y-6">
                                {[
                                    { t: "Global Standard, Local Reach", d: "Recruiters who speak the local talent language with central control.", icon: Globe },
                                    { t: "Uniform Compliance Guardrails", d: "Consistent statutory adherence across state borders.", icon: ShieldCheck },
                                    { t: "Predictable Cost of Hire", d: "Standardized commercials regardless of region.", icon: Briefcase }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-6 p-6 bg-white rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-md transition-all group">
                                        <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-accent-500 shrink-0 group-hover:bg-accent-600 group-hover:text-white transition-colors">
                                            <item.icon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 text-lg">{item.t}</h4>
                                            <p className="text-slate-500 text-sm font-light mt-1">{item.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-brand-200 rounded-[3rem] rotate-3 opacity-30"></div>
                            <img
                                src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&auto=format&fit=crop&w=1742&q=80"
                                alt="Pan India Connectivity"
                                className="relative rounded-[3rem] shadow-2xl border-4 border-white"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-24 bg-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-8 tracking-tight italic">Your National <span className="text-accent-500">Growth Partner.</span></h2>
                    <p className="text-xl text-slate-600 mb-12 leading-relaxed max-w-2xl mx-auto font-light">
                        "Stop managing multiple vendors. Let CLink HR be your single point of accountability across India."
                    </p>
                    <Link to="/contact" className="bg-brand-600 text-white px-12 py-5 rounded-full font-bold hover:bg-brand-700 transition-all shadow-xl">
                        Explore Our Network
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default PanIndiaPresence;
