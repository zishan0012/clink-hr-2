import React from "react";
import { motion } from "framer-motion";
import Testimonials from "../../components/Testimonials";
import {
    Stethoscope,
    Activity,
    Users,
    ShieldCheck,
    CheckCircle,
    ArrowRight,
    Heart,
    FlaskConical,
    Building2,
    Briefcase,
    Clock,
    ClipboardCheck,
    BarChart3,
    Microscope,
    Dna
} from "lucide-react";
import { Link } from "react-router-dom";
import healthcareHero from "../../assets/industries-img/Healthcare Solutions-hero.jpg";


const Healthcare = () => {
    return (
        <div className="min-h-screen bg-slate-50">

            {/* HERO */}
            <section className="relative bg-brand-950 py-32 overflow-hidden">
                <div className="absolute inset-0">
                    <motion.img
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        src={healthcareHero}
                        className="w-full h-full object-cover"
                        alt="Healthcare Logistics"
                        loading="eager"
                        fetchPriority="high"
                    />
                    <div className="absolute inset-0 bg-brand-950/50"></div>
                </div>

                <div className="relative z-10 max-w-7xl ml-0 mr-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-4xl"
                    >
                        <span className="inline-block mb-6 px-4 py-1 rounded-full bg-brand-800/50 border border-brand-700 text-brand-200 text-xs font-semibold tracking-widest uppercase backdrop-blur-md">
                            Industries We Serve
                        </span>

                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-[1.1] tracking-tight">
                            Healthcare <span className="text-accent-500">Solutions</span>
                        </h1>
                        <h2 className="text-xl md:text-2xl font-bold text-white mb-8 opacity-90">
                            HR Solutions Tailored for Healthcare Organizations
                        </h2>

                        <p className="text-xl md:text-2xl text-slate-200 mb-8 font-light max-w-4xl leading-relaxed">
                            Specialized workforce management and recruitment solutions for hospitals and diagnostic centers, ensuring clinical excellence and operational compliance.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                to="/contact/hire-talent"
                                className="bg-brand-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-brand-500 transition-all shadow-lg flex items-center justify-center gap-2"
                            >
                                Explore Healthcare<ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CHALLENGES – CARD GRID */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                            Key HR Challenges in <span className="text-brand-600">Healthcare</span>
                        </h2>
                        <p className="text-xl text-slate-600 max-w-2xl">
                            Healthcare organizations face evolving complexities that require specialized staffing and strict compliance oversight.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-8">
                        {[
                            { title: "Staffing Shortages", desc: "Recruiting qualified doctors, nurses, and allied health staff in high-demand periods.", icon: Heart },
                            { title: "24/7 Operations", desc: "Managing multi-shift rosters and continuous availability in clinical settings.", icon: Clock },
                            { title: "Statutory Compliance", desc: "Adhering to stringent healthcare regulations and labor laws for medical staff.", icon: ShieldCheck },
                            { title: "Diverse Workforce", desc: "Handling payroll and benefits for temporary, contract, and full-time staff categories.", icon: Users },
                            { title: "Documentation", desc: "Maintaining audit-ready records for certifications and legal requirements.", icon: ClipboardCheck },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -6, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
                                className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.4rem)] bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm group transition-all"
                            >
                                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-brand-600 mb-6 group-hover:bg-brand-600 group-hover:text-white transition-colors shadow-sm">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-16 p-8 bg-brand-900 rounded-3xl text-white">
                        <p className="text-lg md:text-xl font-medium">
                            CLink HR provides structured, scalable, and compliant HR solutions to meet the unique demands of the healthcare sector.
                        </p>
                    </div>
                </div>
            </section>

            {/* SOLUTIONS – STACKED MODULES */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                            Our <span className="text-brand-600">Healthcare</span> HR Solutions
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            {
                                title: "Talent Acquisition",
                                icon: Stethoscope,
                                items: [
                                    "Permanent and contract recruitment for clinical and non-clinical roles",
                                    "Specialized hiring for doctors, nurses, and technicians",
                                    "Fast closure of urgent staffing requirements",
                                ],
                            },
                            {
                                title: "Workforce & Contract Management",
                                icon: Users,
                                items: [
                                    "Vendor and third-party staff coordination",
                                    "Shift scheduling and attendance tracking",
                                    "Multi-location workforce oversight",
                                ],
                            },
                            {
                                title: "Payroll & Compliance",
                                icon: ShieldCheck,
                                items: [
                                    "Payroll processing for permanent and contract employees",
                                    "Statutory compliance (PF, ESI, and other labor laws)",
                                    "Audit-ready documentation and reporting",
                                ],
                            },
                            {
                                title: "HR Analytics & Reporting",
                                icon: BarChart3,
                                items: [
                                    "Centralized dashboards for headcount and workforce cost",
                                    "Attendance, leave, and performance MIS",
                                    "Insights for strategic workforce planning",
                                ],
                            },
                        ].map((block, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.01 }}
                                className="bg-white p-10 rounded-3xl border border-slate-100 hover:border-brand-200 transition-all hover:shadow-lg"
                            >
                                <div className="flex items-center gap-6 mb-8">
                                    <div className="w-14 h-14 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center shadow-sm">
                                        <block.icon className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900">{block.title}</h3>
                                </div>

                                <ul className="space-y-4">
                                    {block.items.map((item, idx) => (
                                        <li key={idx} className="flex gap-4 text-slate-700 items-start">
                                            <CheckCircle className="w-5 h-5 text-accent-500 mt-1 shrink-0" />
                                            <span className="text-lg">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHO + WHY – PREMIUM SPLIT */}
            <section className="py-24 bg-brand-950 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-800/10 skew-x-12" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-20">
                        {/* Left Column: Who We Serve */}
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-10 leading-tight">
                                Who We <span className="text-accent-400">Serve</span>
                            </h2>
                            <div className="flex flex-wrap gap-4 mb-16">
                                {[
                                    "Hospitals & Clinics",
                                    "Diagnostic & Healthcare Centers",
                                    "Medical Research Labs",
                                    "Pharma & Healthcare Service Providers",
                                    "Multi-location Healthcare Networks",
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ scale: 1.05 }}
                                        className="bg-white/10 border border-white/20 px-6 py-3 rounded-full text-sm font-medium backdrop-blur-sm"
                                    >
                                        {item}
                                    </motion.div>
                                ))}
                            </div>

                            <p className="text-slate-300 text-xl italic border-l-4 border-accent-500 pl-6 leading-relaxed mb-8">
                                "Efficient HR ensures quality care reaches every patient, every time."
                            </p>
                        </div>

                        {/* Right Column: Why Choose Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="bg-white text-slate-900 p-10 rounded-3xl shadow-2xl relative"
                        >
                            <h3 className="text-2xl font-bold mb-8 text-brand-900">Why Choose CLink HR for Healthcare</h3>
                            <ul className="space-y-6">
                                {[
                                    "Compliance-driven HR frameworks specifically for healthcare",
                                    "Scalable workforce management across multiple units",
                                    "Centralized payroll and HR operations for clinical staff",
                                    "Native expertise in healthcare-specific recruitment",
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-4 items-start group">
                                        <div className="w-6 h-6 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center shrink-0 mt-1 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                                            <CheckCircle className="w-4 h-4" />
                                        </div>
                                        <span className="text-slate-700 font-medium text-lg leading-tight">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <motion.div
                                className="mt-12 p-6 bg-slate-50 rounded-2xl border border-slate-100"
                                whileHover={{ scale: 1.02 }}
                            >
                                <p className="text-slate-600 font-medium text-center">
                                    Enabling healthcare providers to focus on what matters most: <span className="text-brand-600">Patient Care.</span>
                                </p>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="py-24 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-brand-900 rounded-[3rem] p-12 md:p-20 relative overflow-hidden text-center shadow-2xl">
                        <div className="absolute inset-0 opacity-10 pointer-events-none">
                            <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500 rounded-full blur-3xl -mr-48 -mt-48" />
                        </div>

                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                                Specialized HR Support <br /> for Better Care
                            </h2>
                            <p className="text-xl text-brand-200 mb-12 max-w-2xl mx-auto font-light">
                                CLink HR enables healthcare organizations to build efficient, compliant, and scalable workforce systems.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                <Link
                                    to="/contact/hire-talent"
                                    className="bg-accent-500 text-brand-900 px-10 py-5 rounded-full font-semibold hover:bg-accent-400 transition-all shadow-xl flex items-center justify-center gap-2"
                                >
                                    Explore Healthcare HR Solutions <ArrowRight className="w-5 h-5" />
                                </Link>
                                <Link
                                    to="/contact"
                                    className="bg-transparent border border-white text-white px-10 py-5 rounded-full font-semibold hover:bg-white/10 transition-all flex items-center justify-center"
                                >
                                    Talk to Our Industry Experts
                                </Link>
                            </div>

                            <p className="mt-12 text-accent-400 font-bold text-lg tracking-wide uppercase">
                                Quality care starts with the right team.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Testimonials />
        </div>
    );
};

export default Healthcare;
