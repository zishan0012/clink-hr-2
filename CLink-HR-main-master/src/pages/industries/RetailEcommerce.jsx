import React from "react";
import { motion } from "framer-motion";
import Testimonials from "../../components/Testimonials";
import {
    ShoppingCart,
    ShoppingBag,
    Truck,
    TrendingUp,
    CheckCircle,
    ArrowRight,
    Users,
    Globe,
    Zap,
    Briefcase,
    Store,
    Package,
    Clock,
    ShieldCheck,
    BarChart3,
    Calendar
} from "lucide-react";
import { Link } from "react-router-dom";

const RetailEcommerce = () => {
    return (
        <div className="min-h-screen bg-slate-50">

            {/* HERO */}
            <section className="relative bg-brand-950 py-32 overflow-hidden">
                <div className="absolute inset-0">
                    <motion.img
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                        className="w-full h-full object-cover"
                        alt="Retail & E-commerce Operations"
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

                        <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-4 leading-[1.1] tracking-tight">
                            Retail & <span className="text-accent-500">E-Commerce</span>
                        </h1>
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 opacity-90">
                            HR Solutions Tailored for Retail & E-Commerce
                        </h2>

                        <p className="text-xl md:text-2xl text-slate-200 mb-8 font-light max-w-4xl leading-relaxed">
                            The Retail & E-Commerce industry requires a workforce that is high-volume, flexible, and customer-focused.
                            CLink HR delivers tailored HR, recruitment, payroll, and workforce management solutions to support stores, warehouses, fulfillment centers, and online retail operations.
                            We help businesses scale operations, manage high-volume hiring, and maintain compliance, ensuring smooth business continuity.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                to="/contact/hire-talent"
                                className="bg-brand-600 text-white px-8 py-4 rounded-full font-bold hover:bg-brand-500 transition-all shadow-lg flex items-center justify-center gap-2"
                            >
                                Explore Retail HR Solutions <ArrowRight className="w-5 h-5" />
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
                            Key HR Challenges in <span className="text-brand-600">Retail & E-Commerce</span>
                        </h2>
                        <p className="text-xl text-slate-600 max-w-2xl">
                            Organizations in retail face unique operational hurdles that demand fast, scalable, and compliant staffing models.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-8">
                        {[
                            { title: "High-Volume Hiring", desc: "Recruiting for stores, warehouses, and delivery staff at scale.", icon: Users },
                            { title: "Seasonal Workforce", desc: "Managing seasonal surges and multi-location coordination efficiently.", icon: Calendar },
                            { title: "Shift Coordination", desc: "Streamlining shift scheduling and real-time attendance tracking.", icon: Clock },
                            { title: "Labor Compliance", desc: "Adhering to complex labor laws and minimum wage regulations.", icon: ShieldCheck },
                            { title: "Flex Workforce", desc: "Managing temporary, contract, and gig workforce output.", icon: Zap },
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
                            CLink HR provides scalable, structured HR solutions to address the high-velocity needs of retail and e-commerce.
                        </p>
                    </div>
                </div>
            </section>

            {/* SOLUTIONS – STACKED MODULES */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                            Our <span className="text-brand-600">Retail & E-Commerce</span> HR Solutions
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            {
                                title: "Volume Hiring & Staffing",
                                icon: ShoppingBag,
                                items: [
                                    "Recruitment for store associates, warehouse staff, and delivery personnel",
                                    "Seasonal and peak-demand workforce hiring",
                                    "Fast closure hiring for urgent operational roles",
                                ],
                            },
                            {
                                title: "Contract & Temporary Workforce Management",
                                icon: Users,
                                items: [
                                    "Contractor and gig workforce management",
                                    "Multi-location scheduling and attendance coordination",
                                    "Vendor workforce oversight and governance",
                                ],
                            },
                            {
                                title: "Payroll & Compliance",
                                icon: ShieldCheck,
                                items: [
                                    "Payroll management across distributed locations",
                                    "Statutory compliance for retail and warehouse staff",
                                    "Audit-ready documentation and reporting",
                                ],
                            },
                            {
                                title: "Workforce Reporting & Analytics",
                                icon: BarChart3,
                                items: [
                                    "Centralized dashboards for headcount, cost, and productivity",
                                    "Shift, attendance, and payroll reporting",
                                    "Data-driven insights for operational and peak planning",
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
                                    "Retail Chains & Stores",
                                    "E-Commerce Fulfillment & Warehouses",
                                    "Logistics & Delivery Partners",
                                    "Multi-location Retail Operations",
                                    "D2C & Online Retail Startups",
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
                                "Efficient HR keeps operations moving and customers happy."
                            </p>
                        </div>

                        {/* Right Column: Why Choose Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="bg-white text-slate-900 p-10 rounded-3xl shadow-2xl relative"
                        >
                            <h3 className="text-2xl font-bold mb-8 text-brand-900">Why Choose CLink HR for Retail & E-Commerce</h3>
                            <ul className="space-y-6">
                                {[
                                    "Fast, high-volume recruitment for front-line roles",
                                    "Centralized workforce coordination across multi-locations",
                                    "Compliance-ready HR and payroll operations",
                                    "Scalable workforce models built for seasonal peaks",
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
                                    Enabling retail and e-commerce leaders to focus on growth while we manage <span className="text-brand-600">Workforce Efficiency.</span>
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
                                Scale Your Retail Operations <br /> With the Right Talent Partner
                            </h2>
                            <p className="text-xl text-brand-200 mb-12 max-w-2xl mx-auto font-light">
                                CLink HR enables retail and e-commerce businesses to build efficient, compliant, and scalable workforce systems.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                <Link
                                    to="/contact/hire-talent"
                                    className="bg-accent-500 text-brand-900 px-10 py-5 rounded-full font-bold hover:bg-accent-400 transition-all shadow-xl flex items-center justify-center gap-2"
                                >
                                    Explore Retail HR Solutions <ArrowRight className="w-5 h-5" />
                                </Link>
                                <Link
                                    to="/contact"
                                    className="bg-transparent border border-white text-white px-10 py-5 rounded-full font-bold hover:bg-white/10 transition-all flex items-center justify-center"
                                >
                                    Talk to Our Industry Experts
                                </Link>
                            </div>

                            <p className="mt-12 text-accent-400 font-bold text-lg tracking-wide uppercase">
                                Speed, Scalability, and Success.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Testimonials />
        </div>
    );
};

export default RetailEcommerce;
