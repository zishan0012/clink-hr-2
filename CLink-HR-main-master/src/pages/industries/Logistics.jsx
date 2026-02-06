import React from "react";
import { motion } from "framer-motion";
import Testimonials from "../../components/Testimonials";
import {
    Truck,
    Package,
    MapPin,
    Navigation,
    CheckCircle,
    ArrowRight,
    Users,
    ShieldCheck,
    BarChart3,
    Briefcase,
    Clock,
    Scale,
    TrendingUp,
    Globe,
    Calendar
} from "lucide-react";
import { Link } from "react-router-dom";
import logisticsHero from "../../assets/industries-img/Logistics & Supply Chain-hero.jpg";


const Logistics = () => {
    return (
        <div className="min-h-screen bg-slate-50">

            {/* HERO */}
            <section className="relative bg-brand-950 py-32 overflow-hidden">
                <div className="absolute inset-0">
                    <motion.img
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        src={logisticsHero}
                        className="w-full h-full object-cover"
                        alt="Logistics & Supply Chain Operations"
                        loading="eager"
                        fetchPriority="high"
                    />
                    <div className="absolute inset-0 bg-brand-950/50"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-4xl"
                    >
                        <span className="inline-block mb-6 px-4 py-1 rounded-full bg-brand-800/50 border border-brand-700 text-brand-200 text-xs font-bold tracking-widest uppercase backdrop-blur-md">
                            Industries We Serve
                        </span>

                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-[1.1] tracking-tight">
                            Logistics & <span className="text-accent-500">Supply Chain</span>
                        </h1>
                        <h2 className="text-xl md:text-2xl font-bold text-white mb-8 opacity-90">
                            HR Solutions for Logistics & Supply Chain Businesses
                        </h2>

                        <p className="text-xl md:text-2xl text-slate-200 mb-8 font-light max-w-4xl leading-relaxed">
                            Scalable HR and recruitment solutions for logistics and supply chain networks, managing distributed teams with speed and operational precision.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                to="/contact/hire-talent"
                                className="bg-brand-600 text-white px-8 py-4 rounded-full font-bold hover:bg-brand-500 transition-all shadow-lg flex items-center justify-center gap-2"
                            >
                                Explore Logistics <ArrowRight className="w-5 h-5" />
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
                            Key HR Challenges in <span className="text-brand-600">Logistics & Supply Chain</span>
                        </h2>
                        <p className="text-xl text-slate-600 max-w-2xl">
                            Organizations in logistics face unique workforce challenges that require structured and scalable HR intervention.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-8">
                        {[
                            { title: "High-Volume Hiring", desc: "Recruiting for warehouse, transportation, and field operations at scale.", icon: Users },
                            { title: "Multi-Location Management", desc: "Coordinating a distributed workforce across various regional hubs.", icon: MapPin },
                            { title: "Seasonal Peaks", desc: "Managing workforce spikes during peak-demand and festive seasons.", icon: TrendingUp },
                            { title: "Shift & Attendance", desc: "Streamlining complex shift scheduling and real-time attendance tracking.", icon: Clock },
                            { title: "Statutory Compliance", desc: "Ensuring adherence to labor laws, contracts, and safety regulations.", icon: ShieldCheck },
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
                            CLink HR provides structured, scalable, and cost-effective HR solutions to meet the velocity and compliance needs of the supply chain sector.
                        </p>
                    </div>
                </div>
            </section>

            {/* SOLUTIONS – STACKED MODULES */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                            Our <span className="text-brand-600">Logistics</span> HR Solutions
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            {
                                title: "Volume Hiring & Workforce Management",
                                icon: Truck,
                                items: [
                                    "Recruitment for warehouse staff, drivers, and delivery executives",
                                    "Seasonal, project-based, and urgent hiring models",
                                    "Fast closure hiring for critical field and support roles",
                                ],
                            },
                            {
                                title: "Contract & Temporary Workforce Management",
                                icon: Users,
                                items: [
                                    "Contractor and gig workforce onboarding and management",
                                    "Multi-location shift scheduling and attendance coordination",
                                    "Vendor workforce supervision and compliance audits",
                                ],
                            },
                            {
                                title: "Payroll & Compliance",
                                icon: ShieldCheck,
                                items: [
                                    "Payroll processing across multiple locations and units",
                                    "Statutory compliance (PF, ESI, minimum wage, etc.)",
                                    "Audit-ready workforce documentation and records",
                                ],
                            },
                            {
                                title: "Workforce Analytics & Reporting",
                                icon: BarChart3,
                                items: [
                                    "Centralized dashboards for headcount, productivity, and cost",
                                    "Attendance, shift, and payroll daily/monthly MIS",
                                    "Data-driven insights for operational workforce planning",
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
                                    "Logistics Companies & Freight Operators",
                                    "Warehousing & Fulfillment Centers",
                                    "Transportation & Fleet Management",
                                    "E-Commerce Delivery Networks",
                                    "Multi-location Supply Chain Operations",
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
                                "Efficient HR operations keep the supply chain moving seamlessly—from warehouses to delivery points."
                            </p>
                        </div>

                        {/* Right Column: Why Choose Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="bg-white text-slate-900 p-10 rounded-3xl shadow-2xl relative"
                        >
                            <h3 className="text-2xl font-bold mb-8 text-brand-900">Why Choose CLink HR for Logistics</h3>
                            <ul className="space-y-6">
                                {[
                                    "High-volume recruitment capabilities for distributed teams",
                                    "Centralized coordination for multi-location hub operations",
                                    "Compliance-ready HR and automated payroll processes",
                                    "Scalable workforce models built for seasonal surges",
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
                                    Keeping the lifeline of commerce moving with <span className="text-brand-600">the right people.</span>
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
                                Optimize Your Logistics Workforce <br /> with Specialized HR Support
                            </h2>
                            <p className="text-xl text-brand-200 mb-12 max-w-2xl mx-auto font-light">
                                CLink HR helps logistics businesses maintain operational efficiency, reduce overhead, and ensure adherence across hubs.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                <Link
                                    to="/contact/hire-talent"
                                    className="bg-accent-500 text-brand-900 px-10 py-5 rounded-full font-bold hover:bg-accent-400 transition-all shadow-xl flex items-center justify-center gap-2"
                                >
                                    Explore Logistics HR Solutions <ArrowRight className="w-5 h-5" />
                                </Link>
                                <Link
                                    to="/contact"
                                    className="bg-transparent border border-white text-white px-10 py-5 rounded-full font-bold hover:bg-white/10 transition-all flex items-center justify-center"
                                >
                                    Talk to Our Industry Experts
                                </Link>
                            </div>

                            <p className="mt-12 text-accent-400 font-bold text-lg tracking-wide uppercase">
                                Moving Business Forward.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Testimonials />
        </div>
    );
};

export default Logistics;
