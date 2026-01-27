import React from 'react';
import { motion } from 'framer-motion';
import {
    GraduationCap,
    BookOpen,
    Users,
    Zap,
    CheckCircle,
    ArrowRight,
    School,
    Globe,
    Award,
    Briefcase
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Education = () => {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="bg-brand-950 py-32 relative overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                        alt="Education"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-brand-950/70"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl"
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-brand-800/50 border border-brand-700 text-brand-200 text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-md">
                            Learning Vertical
                        </span>
                        <h1 className="text-4xl md:text-8xl font-extrabold text-white mb-8 tracking-tight leading-[1.1]">
                            Education & <br />
                            <span className="text-accent-500">EdTech Talent</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-200 leading-relaxed font-light mb-10 max-w-2xl">
                            Staffing solutions for <span className="text-white font-medium">schools, universities,</span> and rapidly evolving EdTech platforms.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/contact/hire-talent" className="bg-brand-600 text-white px-8 py-4 rounded-full font-bold hover:bg-brand-500 transition-all shadow-lg flex items-center justify-center gap-2">
                                Hire Academic Talent <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Education Expertise */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="lg:pr-12">
                            <span className="text-accent-600 font-bold uppercase tracking-widest text-sm mb-4 block">Shaping Futures</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">Empowering the <br /><span className="text-brand-600">Learning Ecosystem</span></h2>
                            <p className="text-xl text-slate-600 mb-10 leading-relaxed font-light">
                                From traditional academic roles to modern <span className="text-accent-600 font-bold">EdTech sales and product</span> positions, we source individuals who are passionate about knowledge delivery.
                            </p>
                            <div className="grid grid-cols-2 gap-6 mt-8">
                                {[
                                    { label: "K-12 & Higher Ed", icon: School },
                                    { label: "EdTech Product", icon: Zap },
                                    { label: "Content Desgin", icon: BookOpen },
                                    { label: "Academic Ops", icon: Award }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm hover:border-accent-200 transition-colors group">
                                        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-accent-500 shadow-sm shrink-0 group-hover:bg-accent-600 group-hover:text-white transition-colors">
                                            <item.icon className="w-6 h-6" />
                                        </div>
                                        <span className="font-bold text-slate-800 text-sm leading-tight">{item.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-brand-200 rounded-[2.5rem] -rotate-3 opacity-30"></div>
                            <img
                                src="https://images.unsplash.com/photo-1524178232363-1fb280bf852c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                                alt="Modern Classroom"
                                className="relative rounded-[2.5rem] shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Role Categories */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Focus Learning Roles</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "Academic Leadership", desc: "Principals, Deans, Registrar Leads, Academic Directors", icon: Award },
                            { title: "Teaching Excellence", desc: "SME Instructors, Tutors, K-12 Teachers, Professors", icon: BookOpen },
                            { title: "EdTech Growth", desc: "Academic Counselors, Sales Leads, BDM (Education)", icon: Zap },
                            { title: "Student Success", icon: Users, desc: "Admissions Officers, Career Counselors, Support Leads" },
                            { title: "Content & Tech", icon: Globe, desc: "Instructional Designers, LMS Experts, Content Managers" },
                            { title: "Institutional Ops", icon: Briefcase, desc: "Finance, HR, and Facility Managers for Institutes" }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all group flex flex-col h-full">
                                <div className="w-14 h-14 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-600 mb-6 group-hover:bg-accent-500 group-hover:text-white transition-all">
                                    <item.icon className="w-7 h-7" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                                <p className="text-slate-600 leading-relaxed font-light">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-24 bg-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 tracking-tight italic">Building the Future of <span className="text-accent-500">Learning.</span></h2>
                    <p className="text-xl text-slate-600 mb-12 leading-relaxed font-light">
                        "Great educators build great nations. Let us find the builders for your institution."
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link to="/contact/hire-talent" className="bg-brand-600 text-white px-10 py-4 rounded-full font-bold hover:bg-brand-700 transition-all shadow-xl">
                            Source Academic Talent
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Education;
