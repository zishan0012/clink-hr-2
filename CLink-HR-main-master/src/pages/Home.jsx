import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Rocket, Building2, Globe, Coins, Users, FileText, CheckCircle, BarChart, Server, Briefcase, Shirt, GraduationCap, Truck, Video, ShoppingBag, Quote, Activity } from 'lucide-react';
import Testimonials from '../components/Testimonials';
import bd from "../assets/clients/bd.png";
import quest from "../assets/clients/quest.png";
import micromax from "../assets/clients/micromax.png";
import henkel from "../assets/clients/henkel.png";
import rbs from "../assets/clients/rbs.png";
import bcube from "../assets/clients/bcube.png";
import boston from "../assets/clients/boston.png";
import airtel from "../assets/clients/airtel.png";
import c3i from "../assets/clients/c3i.png";
import iris from "../assets/clients/iris.png";
import indusind from "../assets/clients/indusind.png";
import kale from "../assets/clients/kale.png";
import legend3d from "../assets/clients/legend3d.png";
import art from "../assets/clients/art.png";
import vlink from "../assets/clients/vlink.png";
import velocis from "../assets/clients/velocis.png";
import techtree from "../assets/clients/techtree.png";
import bluestar from "../assets/clients/bluestar.png";
import fossil from "../assets/clients/fossil.png";
import pg from "../assets/clients/pg.png";
import sanofi from "../assets/clients/sanofi.png";
import cpafford from "../assets/clients/cpafford.png";
import itc from "../assets/clients/itc.png";

const Home = () => {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.replace('#', ''));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [hash]);

    // Form Modal State
    const [openForm, setOpenForm] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
        if (formData.phone.length !== 10) {
            alert("Phone number must be exactly 10 digits!");
            return;
        }
        setOpenForm(false);
        setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
        });

        alert("Thanks! Your request has been submitted.");
    };

    const [openBusinessForm, setOpenBusinessForm] = useState(false);

    const [businessData, setBusinessData] = useState({
        name: "",
        designation: "",
        company: "",
        location: "",
        phone: "",
        email: "",
        requirement: "",
    });

    const handleBusinessChange = (e) => {
        const { name, value } = e.target;
        setBusinessData((prev) => ({ ...prev, [name]: value }));
    };

    const handleBusinessSubmit = (e) => {
        e.preventDefault();

        // phone validation (10 digits)
        if (businessData.phone.length !== 10) {
            alert("Mobile number must be exactly 10 digits!");
            return;
        }

        console.log("Business Enquiry Submitted:", businessData);

        alert("Thanks! Your Business Enquiry has been submitted.");

        setOpenBusinessForm(false);
        setBusinessData({
            name: "",
            designation: "",
            company: "",
            location: "",
            phone: "",
            email: "",
            requirement: "",
        });
    };

    const clients = [
        { name: "BD", logo: bd, desc: "Healthcare & diagnostics solutions", tag: "Enterprise" },
        { name: "Quest Diagnostics", logo: quest, desc: "Diagnostics & lab services", tag: "Healthcare" },
        { name: "Micromax", logo: micromax, desc: "Consumer electronics & mobile", tag: "Electronics" },
        { name: "Henkel", logo: henkel, desc: "Consumer goods & adhesives", tag: "FMCG" },
        { name: "RBS", logo: rbs, desc: "Banking & financial services", tag: "BFSI" },
        { name: "B-Cube", logo: bcube, desc: "Business services & solutions", tag: "Services" },
        { name: "Boston Technologies", logo: boston, desc: "Technology & IT services", tag: "IT" },
        { name: "Airtel", logo: airtel, desc: "Telecom & connectivity", tag: "Telecom" },
        { name: "C3i Solutions", logo: c3i, desc: "Customer experience solutions", tag: "CX" },
        { name: "IRIS", logo: iris, desc: "Enterprise support & solutions", tag: "Corporate" },
        { name: "IndusInd Bank", logo: indusind, desc: "Banking & financial services", tag: "BFSI" },
        { name: "Kale Logistics", logo: kale, desc: "Logistics technology platform", tag: "Logistics" },
        { name: "Legend 3D", logo: legend3d, desc: "Design & visualization services", tag: "Design" },
        { name: "ART Housing Finance", logo: art, desc: "Housing finance solutions", tag: "Finance" },
        { name: "VLink", logo: vlink, desc: "Business & IT consulting", tag: "Consulting" },
        { name: "Velocis", logo: velocis, desc: "Network & telecom services", tag: "Telecom" },
        { name: "TechTree", logo: techtree, desc: "Technology & innovation", tag: "Tech" },
        { name: "Blue Star Infotech", logo: bluestar, desc: "IT services & solutions", tag: "IT" },
        { name: "Fossil", logo: fossil, desc: "Lifestyle & accessories", tag: "Retail" },
        { name: "P&G", logo: pg, desc: "Consumer goods & brands", tag: "FMCG" },
        { name: "Sanofi Aventis", logo: sanofi, desc: "Healthcare & pharmaceuticals", tag: "Pharma" },
        { name: "Cp Afford Plan", logo: cpafford, desc: "Affordable housing solutions", tag: "Housing" },
        { name: "ITC Limited", logo: itc, desc: "Consumer goods & brands", tag: "FMCG" },

    ];

    return (
        <>
            {/*SECTION:1 HEQ Hero Section */}
            {/*SECTION:1 HEQ Hero Section */}
            <section
                className="relative flex items-center overflow-hidden bg-slate-900 min-h-[90vh] pt-20"
            >
                {/* Background Image with Parallax-like effect */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transform scale-105"
                    style={{
                        backgroundImage: "url('/hero.jpg')",
                    }}
                />

                {/* Premium Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-brand-900/80 to-transparent z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent z-10"></div>

                {/* Content Container */}
                <div className="relative z-20 w-full ml-0 mr-auto px-6 sm:px-10 lg:px-20 h-full flex flex-col justify-center py-3 pb-10">


                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-5xl"
                    >
                        <span className="inline-block py-2 px-4 rounded-full bg-brand-800/20 border border-brand-700 text-brand-400 text-xs font-semibold tracking-widest uppercase mb-8 backdrop-blur-md shadow-lg">
                            Premier Workforce Solutions
                        </span>
                        <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold leading-tight text-white mb-8 tracking-tight drop-shadow-xl">



                            The Engine of <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-600">
                                Global Growth
                            </span>
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-lg md:text-xl text-slate-200 mb-10 leading-relaxed max-w-2xl font-light drop-shadow-md"
                    >
                        CLink HR helps organizations hire faster, manage workforce operations efficiently, and scale with confidence through a structured, technology-enabled delivery ecosystem.
                    </motion.p>

                    {/* Primary CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <Link
                            to="/contact/hire-talent"
                            className="group relative bg-brand-600 text-white px-6 py-3 rounded-full font-semibold overflow-hidden transition-all hover:scale-105 shadow-xl hover:shadow-brand-500/40 block w-fit"
                        >
                            <span className="relative flex items-center gap-2 text-base">
                                Hire Talent
                                <Rocket className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                            </span>
                        </Link>

                        <Link
                            to="/contact"
                            className="group bg-white/10 backdrop-blur-md text-white px-6 py-3 rounded-full font-semibold border border-white/20 hover:bg-white hover:text-brand-900 transition-all hover:border-white shadow-lg text-base block w-fit"
                        >
                            Talk to Us Today
                        </Link>

                    </motion.div>

                </div>
            </section>

            {/* SECTION 2: WHAT WE DO (Quick Overview) */}
            <section id="what-we-do" className="py-24 bg-white relative">
                <div className="absolute top-0 right-0 w-1 h-full bg-slate-50 rounded-tl-[100px] -z-0"></div>
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    {/* Heading */}
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="bg-brand-100 text-brand-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">Expertise</span>
                        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mt-4">
                            What We Do
                        </h2>
                        <p className="text-slate-600 mt-4 text-lg max-w-2xl mx-auto">
                            End-to-end hiring and HR solutions designed to support businesses with speed, compliance, and scalability.
                        </p>
                    </div>

                    {/* Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                        {[
                            { title: "Recruitment Services", desc: "Permanent hiring, contract staffing, bulk hiring, and executive search delivered with speed and accountability.", icon: <Users className="w-7 h-7" strokeWidth={1.5} /> },
                            { title: "Payroll & HR Services", desc: "Third-party payroll coordination, workforce compliance support, and HR operations management.", icon: <FileText className="w-7 h-7" strokeWidth={1.5} /> },
                            { title: "Business-Focused Solutions", desc: "Hiring and workforce solutions designed for startups, growing companies, and large enterprises.", icon: <Briefcase className="w-7 h-7" strokeWidth={1.5} /> },
                            { title: "Pan-India Delivery", desc: "Multi-location and distributed workforce support across India.", icon: <Globe className="w-7 h-7" strokeWidth={1.5} /> },
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group bg-white border border-slate-100 rounded-2xl p-8 hover:shadow-2xl transition-all hover:-translate-y-2"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-accent-500 mb-8 transition-all group-hover:bg-accent-600 group-hover:text-white shadow-sm font-bold">
                                    {item.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-brand-600 transition-colors tracking-tight">
                                    {item.title}
                                </h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            {/* SECTION 3: WHY CLINK HR */}
            {/* SECTION 3: WHY CLINK HR */}
            <section className="py-24 bg-brand-900 text-white relative overflow-hidden">
                {/* Decorative Background */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-800 rounded-full blur-3xl opacity-30 -mr-20 -mt-20"></div>

                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    {/* Heading */}
                    <div className="text-center mb-16">
                        <span className="bg-brand-800 text-brand-200 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-brand-700">Why Us</span>
                        <h2 className="text-3xl sm:text-5xl font-extrabold mt-4">
                            Why Choose CLink HR
                        </h2>
                        <p className="text-brand-100 mt-4 max-w-3xl mx-auto text-lg font-light">
                            Organizations partner with CLink HR because we combine <span className="font-bold text-white">scale, structure, and accountability</span> under one trusted framework.
                        </p>
                    </div>

                    {/* Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { text: "Faster hiring through parallel execution", icon: <Rocket className="w-6 h-6" strokeWidth={1.5} /> },
                            { text: "Single point of accountability", icon: <CheckCircle className="w-6 h-6" strokeWidth={1.5} /> },
                            { text: "Scalable delivery without internal hiring pressure", icon: <BarChart className="w-6 h-6" strokeWidth={1.5} /> },
                            { text: "Transparent processes and governance", icon: <FileText className="w-6 h-6" strokeWidth={1.5} /> },
                            { text: "Pan-India reach with centralized coordination", icon: <Globe className="w-6 h-6" strokeWidth={1.5} /> }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ scale: 1.02 }}
                                className="flex items-center gap-4 bg-brand-800/50 border border-brand-700 p-6 rounded-2xl hover:bg-brand-700 hover:border-brand-500/50 transition-all duration-300"
                            >
                                <div className="w-12 h-12 rounded-full bg-brand-700 flex items-center justify-center text-brand-400 shadow-lg">
                                    {item.icon}
                                </div>
                                <p className="text-lg font-medium text-brand-50">{item.text}</p>
                            </motion.div>
                        ))}
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="flex items-center gap-4 bg-brand-800/50 border border-brand-700 p-6 rounded-2xl hover:bg-brand-700 hover:border-brand-500/50 transition-all duration-300"
                        >
                            <div className="w-12 h-12 rounded-full bg-brand-700 flex items-center justify-center text-brand-400 shadow-lg">
                                <Briefcase className="w-6 h-6" strokeWidth={1.5} />
                            </div>
                            <div>
                                <p className="text-lg font-bold text-brand-50">More than a Vendor</p>
                                <p className="text-brand-200 text-sm">We build reliable workforce solutions.</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* SECTION 4: HOW IT WORKS */}
            <section id="how-it-works" className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Heading */}
                    <div className="text-center mb-16">
                        <p className="text-brand-600 font-bold tracking-widest uppercase text-sm mb-3">
                            How It Works
                        </p>
                        <h3 className="text-3xl md:text-4xl font-bold text-slate-900">
                            How CLink HR Works
                        </h3>
                    </div>

                    {/* Steps Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                        {/* Step 1 */}
                        <div className="group bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all">
                            <div className="flex items-start gap-5">
                                <div className="w-12 h-12 rounded-xl bg-brand-600 text-white font-extrabold flex items-center justify-center text-lg shadow-md">
                                    1
                                </div>

                                <div>
                                    <h4 className="text-xl font-bold text-slate-900 mb-2">
                                        Requirement Understanding
                                    </h4>
                                    <p className="text-slate-600 leading-relaxed">
                                        We understand your hiring or workforce requirement in detail—roles, timelines, scale, and expectations.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-6 h-[3px] w-0 bg-brand-600 rounded-full group-hover:w-full transition-all duration-300"></div>
                        </div>

                        {/* Step 2 */}
                        <div className="group bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all">
                            <div className="flex items-start gap-5">
                                <div className="w-12 h-12 rounded-xl bg-brand-600 text-white font-extrabold flex items-center justify-center text-lg shadow-md">
                                    2
                                </div>

                                <div>
                                    <h4 className="text-xl font-bold text-slate-900 mb-2">
                                        Solution Design & Planning
                                    </h4>
                                    <p className="text-slate-600 leading-relaxed">
                                        A tailored recruitment or workforce solution is designed with clear scope, SLAs, and delivery structure.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-6 h-[3px] w-0 bg-brand-600 rounded-full group-hover:w-full transition-all duration-300"></div>
                        </div>

                        {/* Step 3 */}
                        <div className="group bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all">
                            <div className="flex items-start gap-5">
                                <div className="w-16 h-12 rounded-xl bg-brand-600 text-white font-extrabold flex items-center justify-center text-lg shadow-md">
                                    3
                                </div>

                                <div>
                                    <h4 className="text-xl font-bold text-slate-900 mb-2">
                                        Execution & Coordination
                                    </h4>
                                    <p className="text-slate-600 leading-relaxed">
                                        Execution is managed through a structured delivery ecosystem, while coordination, reporting, and quality control remain centralized.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-6 h-[3px] w-0 bg-brand-600 rounded-full group-hover:w-full transition-all duration-300"></div>
                        </div>

                        {/* Step 4 */}
                        <div className="group bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all">
                            <div className="flex items-start gap-5">
                                <div className="w-12 h-12 rounded-xl bg-brand-600 text-white font-extrabold flex items-center justify-center text-lg shadow-md">
                                    4
                                </div>

                                <div>
                                    <h4 className="text-xl font-bold text-slate-900 mb-2">
                                        Closure, Reporting & Support
                                    </h4>
                                    <p className="text-slate-600 leading-relaxed">
                                        We ensure timely closures, transparent reporting, and ongoing support for long-term success.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-6 h-[3px] w-0 bg-brand-600 rounded-full group-hover:w-full transition-all duration-300"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 5: OUR SERVICES */}
            <section id="services" className="py-24 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-50/50 skew-x-12 opacity-50 pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    {/* Heading */}
                    <div className="text-center mb-16">
                        <span className="bg-brand-100 text-brand-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">Capabilities</span>
                        <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mt-4">
                            Our Core Capabilities
                        </h3>
                    </div>

                    {/* 2 Portions */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                        {/* Recruitment Services */}
                        <div className="relative">
                            <h4 className="text-2xl font-bold text-slate-900 mb-8 pl-4 flex items-center gap-3">
                                <div className="w-2 h-8 bg-brand-600 rounded-full"></div>
                                Recruitment Services
                            </h4>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                {[
                                    "Permanent Hiring",
                                    "Contract Staffing",
                                    "Bulk / Volume Hiring",
                                    "Executive Search",
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ scale: 1.03 }}
                                        className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-brand-500 transition-all cursor-default flex items-center gap-4"
                                    >
                                        <div className="w-10 h-10 rounded-full bg-brand-50 flex items-center justify-center text-brand-600 font-bold shadow-sm">
                                            <Briefcase className="w-6 h-6" strokeWidth={1.5} />
                                        </div>
                                        <p className="text-slate-800 font-semibold text-sm md:text-base">
                                            {item}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Payroll & HR Services */}
                        <div className="relative">
                            <div className="absolute -left-6 top-0 w-px h-full border-l-2 border-dashed border-brand-100 hidden lg:block"></div>
                            <h4 className="text-2xl font-bold text-slate-900 mb-8 pl-4 flex items-center gap-3">
                                <div className="w-2 h-8 bg-brand-600 rounded-full"></div>
                                Payroll & HR Services
                            </h4>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                {[
                                    "Third-Party Payroll Solutions",
                                    "Workforce Compliance Support",
                                    "HR Operations Coordination",
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ scale: 1.03 }}
                                        className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-brand-500 transition-all cursor-default flex items-center gap-4"
                                    >
                                        <div className="w-10 h-10 rounded-full bg-brand-50 flex items-center justify-center text-brand-600 font-bold shadow-sm">
                                            <FileText className="w-6 h-6" strokeWidth={1.5} />
                                        </div>
                                        <p className="text-slate-800 font-semibold text-sm md:text-base">
                                            {item}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 text-center">
                        <Link to="/services" className="inline-block bg-brand-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-brand-700 transition-all shadow-lg hover:-translate-y-1">
                            Explore Our Services
                        </Link>
                    </div>

                </div>
            </section>


            {/* SECTION 6: SOLUTIONS FOR EVERY BUSINESS STAGE */}
            <section id="solutions" className="py-28 bg-gradient-to-br from-white to-slate-50" >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-brand-600 font-bold tracking-widest uppercase text-sm mb-3"
                        >
                            Business Scale Solutions
                        </motion.p>
                        <motion.h3
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6"
                        >
                            Solutions Designed for Business Growth
                        </motion.h3>
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-slate-600 text-lg leading-relaxed max-w-2xl mx-auto"
                        >
                            Our solutions adapt as your business grows—without adding operational complexity.
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                title: "Startup Hiring Solutions",
                                desc: "Agile, budget-friendly recruitment for rapid team building.",
                                icon: <Rocket className="w-9 h-9 text-white" strokeWidth={1.5} />,
                                color: "bg-blue-500"
                            },
                            {
                                title: "Enterprise Hiring Solutions",
                                desc: "SLA-driven, compliance-ready hiring for large-scale operations.",
                                icon: <Building2 className="w-9 h-9 text-white" strokeWidth={1.5} />,
                                color: "bg-brand-500"
                            },
                            {
                                title: "Multi-Location Solutions",
                                desc: "Unified workforce management across multiple branches and cities.",
                                icon: <Globe className="w-9 h-9 text-white" strokeWidth={1.5} />,
                                color: "bg-purple-500"
                            },
                            {
                                title: "Cost-Optimized HR",
                                desc: "Strategic HR solutions designed to maximize ROI and efficiency.",
                                icon: <Coins className="w-9 h-9 text-white" strokeWidth={1.5} />,
                                color: "bg-green-500"
                            },
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group relative bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
                            >
                                <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                    {item.icon}
                                </div>
                                <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-600 transition-colors">
                                    {item.title}
                                </h4>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    {item.desc}
                                </p>
                                <div className="absolute bottom-0 left-0 h-1 w-0 bg-brand-500 transition-all duration-300 group-hover:w-full"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>



            {/* Industries We Serve Section */}
            <section className="py-24 bg-white relative overflow-hidden" >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="bg-brand-50 text-brand-600 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">Industries</span>
                        <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mt-4">Industries We Serve</h3>
                        <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-lg">
                            We support organizations across diverse industries.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { name: 'IT & Software', icon: <Server className="w-9 h-9" strokeWidth={1.5} /> },
                            { name: 'Manufacturing', icon: <Building2 className="w-9 h-9" strokeWidth={1.5} /> },
                            { name: 'Healthcare', icon: <Activity className="w-9 h-9" strokeWidth={1.5} /> }, // Professional Icon
                            { name: 'Retail & E-Commerce', icon: <ShoppingBag className="w-9 h-9" strokeWidth={1.5} /> },
                            { name: 'Logistics & Supply Chain', icon: <Truck className="w-9 h-9" strokeWidth={1.5} /> },
                            { name: 'BFSI', icon: <BarChart className="w-9 h-9" strokeWidth={1.5} /> },
                            { name: 'Education', icon: <GraduationCap className="w-9 h-9" strokeWidth={1.5} /> },
                            { name: 'Startups', icon: <Rocket className="w-9 h-9" strokeWidth={1.5} /> }
                        ].map((industry, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -5 }}
                                className="group bg-slate-50 p-8 rounded-3xl border border-slate-100 flex flex-col items-center justify-center hover:bg-white hover:shadow-xl transition-all duration-300"
                            >
                                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-4 text-slate-400 group-hover:bg-brand-600 group-hover:text-white transition-all shadow-sm duration-300">
                                    {industry.icon}
                                </div>
                                <h4 className="text-lg font-bold text-slate-700 group-hover:text-slate-900 transition-colors text-center">{industry.name}</h4>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* NEW SECTION 8: PAN-INDIA PRESENCE */}
            <section className="py-24 bg-brand-900 text-white relative overflow-hidden" >
                {/* Decorative Background */}
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://upload.wikimedia.org/wikipedia/commons/b/bb/India_High_Court_Regions_Map.svg')] bg-no-repeat bg-contain bg-right opacity-5 mix-blend-overlay" ></div>
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <span className="bg-brand-800 text-brand-200 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-brand-700">Reach</span>
                        <h2 className="text-3xl sm:text-5xl font-extrabold mt-4">
                            Nationwide Reach. Centralized Control.
                        </h2>
                        <p className="text-brand-100 mt-4 max-w-3xl mx-auto text-lg font-light">
                            CLink HR supports businesses across India with a delivery model built for multi-city and multi-state operations.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div className="p-8 bg-brand-800/50 rounded-2xl border border-brand-700">
                            <h4 className="text-xl font-bold text-white mb-2">Centralized Coordination</h4>
                            <p className="text-brand-100/80">Manage all your locations through a single point of contact.</p>
                        </div>
                        <div className="p-8 bg-brand-800/50 rounded-2xl border border-brand-700">
                            <h4 className="text-xl font-bold text-white mb-2">Location-Specific Execution</h4>
                            <p className="text-brand-100/80">On-ground support tailored to local requirements.</p>
                        </div>
                        <div className="p-8 bg-brand-800/50 rounded-2xl border border-brand-700">
                            <h4 className="text-xl font-bold text-white mb-2">Consistent Quality</h4>
                            <p className="text-brand-100/80">Uniform compliance and service standards everywhere.</p>
                        </div>
                    </div>
                    <p className="text-center mt-12 text-xl font-semibold text-white">Wherever your workforce is, CLink HR delivers with reliability.</p>
                </div>
            </section>

            {/* SECTION 9: Our Happy Clients */}
            <section id="clients" className="py-24 bg-white overflow-hidden border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="bg-slate-100 text-slate-600 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">Trusted Support</span>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4">
                            Trusted by Leading Brands
                        </h2>
                    </div>

                    <div className="relative w-full overflow-hidden mask-image-linear-gradient">
                        <div className="flex w-max animate-scroll gap-16 py-12 group hover:[animation-play-state:paused]">
                            {/* Original Set */}
                            {[...clients, ...clients].map((item, idx) => (
                                <div key={idx} className="relative group/item flex flex-col items-center justify-center gap-4 min-w-[120px] transition-opacity">
                                    <div className="w-24 h-24 rounded-full border border-slate-200 bg-white shadow-sm flex items-center justify-center transition-all group-hover/item:shadow-xl group-hover/item:scale-110">
                                        <img
                                            src={item.logo}
                                            alt={item.name}
                                            className="w-full h-full object-contain p-3"
                                        />
                                    </div>
                                    <div className="opacity-0 group-hover/item:opacity-100 transition-opacity text-center">
                                        <p className="font-bold text-slate-900 text-sm">{item.name}</p>
                                    </div>
                                </div>
                            ))}
                            {/* Duplicate Set Set */}
                            {/* {[...clients, ...clients].map((item, idx) => (
                                <div key={idx} className="relative group/item flex flex-col items-center justify-center gap-4 min-w-[120px] transition-opacity">
                                    <div className="w-24 h-24 rounded-full border border-slate-200 bg-white shadow-sm flex items-center justify-center transition-all group-hover/item:shadow-xl group-hover/item:scale-110">
                                        <img
                                            src={item.logo}
                                            alt={item.name}
                                            className="w-full h-full object-contain p-3"
                                        />
                                    </div>
                                    <div className="opacity-0 group-hover/item:opacity-100 transition-opacity text-center">
                                        <p className="font-bold text-slate-900 text-sm">{item.name}</p>
                                    </div>
                                </div>
                            ))} */}
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 10: Testimonials */}
            <Testimonials />

            {/* ===== Partner Ecosystem Highlight Section ===== */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative rounded-[2.5rem] bg-slate-900 overflow-hidden shadow-2xl">
                        {/* Decorative Background Elements */}
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-900/30 rounded-full blur-3xl -mr-20 -mt-20"></div>
                        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-900/10 rounded-full blur-3xl -ml-20 -mb-20"></div>

                        <div className="relative z-10 grid lg:grid-cols-2 gap-12 p-8 md:p-16 items-center">

                            {/* Left Content */}
                            <div>
                                <span className="inline-block py-1 px-3 rounded-full bg-slate-800 border border-slate-700 text-brand-300 text-xs font-bold tracking-widest uppercase mb-6">
                                    Delivery Ecosystem
                                </span>
                                <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                                    A Structured <br /> <span className="text-brand-400">Delivery Ecosystem</span>
                                </h2>
                                <p className="text-slate-400 text-lg leading-relaxed mb-8">
                                    Our delivery is enabled through a structured partner ecosystem, allowing faster execution while maintaining quality, governance, and accountability.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Link to="/partners" className="bg-brand-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-brand-500 transition-all shadow-lg hover:-translate-y-1 flex items-center justify-center gap-2">
                                        Partner With Us <Briefcase className="w-5 h-5" />
                                    </Link>
                                </div>
                            </div>

                            {/* Right Content - Feature List Card */}
                            <div className="bg-slate-800/50 rounded-3xl p-8 border border-slate-700 backdrop-blur-sm">
                                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-brand-500/20 flex items-center justify-center text-brand-400">
                                        <Briefcase className="w-6 h-6" />
                                    </div>
                                    CLink HR Manages:
                                </h3>

                                <ul className="space-y-4">
                                    {[
                                        { title: 'Client Relationships', desc: 'We handle all client agreements and frontend relationships.' },
                                        { title: 'Coordination & Escalation', desc: 'Centralized handling of all operational escalations.' },
                                        { title: 'Reporting & Governance', desc: 'Unified reporting and strict payout governance.' },
                                    ].map((item, i) => (
                                        <li key={i} className="flex gap-4 items-start p-4 rounded-xl hover:bg-slate-800 transition-colors border border-transparent hover:border-slate-700 group">
                                            <div className="mt-1 w-6 h-6 rounded-full bg-brand-900/50 border border-brand-500/30 flex items-center justify-center text-brand-400 shrink-0 group-hover:bg-brand-500 group-hover:text-white transition-all">
                                                <CheckCircle className="w-3.5 h-3.5" strokeWidth={3} />
                                            </div>
                                            <div>
                                                <h4 className="text-white font-bold text-base mb-1">{item.title}</h4>
                                                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== IPP SECTION ===== */}
            <section className="py-24 bg-slate-900 text-white relative overflow-hidden text-center">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
                <div className="max-w-5xl mx-auto px-4 relative z-10">
                    <span className="inline-block py-1 px-3 rounded-full bg-brand-500/20 text-brand-300 text-xs font-bold uppercase tracking-wider mb-6 border border-brand-500/30">
                        Strategic Partnership
                    </span>
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
                        Scale with our <span className="text-brand-400">IPP Model</span>
                    </h2>
                    <p className="text-slate-400 text-lg leading-relaxed mb-12 max-w-3xl mx-auto">
                        The <strong>Implementation Partner Program (IPP)</strong> empowers HR consultancies and agencies to deliver enterprise-grade solutions using our platform. Gain access to exclusive resources, training, and revenue streams.
                    </p>

                    <div className="grid md:grid-cols-3 gap-8 text-left mb-12">
                        <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-brand-500 transition-colors">
                            <h4 className="text-xl font-bold text-white mb-2">Revenue Sharing</h4>
                            <p className="text-slate-400 text-sm">Attractive commission structures on successful implementations and recurring revenue.</p>
                        </div>
                        <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-brand-500 transition-colors">
                            <h4 className="text-xl font-bold text-white mb-2">Training & Support</h4>
                            <p className="text-slate-400 text-sm">Full access to our LMS, certification programs, and dedicated technical support.</p>
                        </div>
                        <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-brand-500 transition-colors">
                            <h4 className="text-xl font-bold text-white mb-2">Growth Enablement</h4>
                            <p className="text-slate-400 text-sm">Co-branded marketing assets and sales enabling tools to help you win more business.</p>
                        </div>
                    </div>

                    <Link to="/partners/become-ipp-partner" className="inline-block bg-brand-600 text-white px-10 py-4 rounded-xl font-bold hover:bg-brand-500 transition-all shadow-lg hover:-translate-y-1">
                        Become an IPP Partner
                    </Link>
                </div>
            </section>

            {/* HRMS Software Section */}
            <section className="py-24 bg-slate-50 overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-1/2 bg-white skew-y-3 origin-left -z-0"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="lg:grid lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <span className="bg-brand-100 text-brand-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 inline-block">Technology</span>
                            <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">Zryoss HRMS <br /> <span className="text-brand-600">Unified & Powerful.</span></h3>
                            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                                An end-to-end enterprise HRMS web-based SaaS application which effectively manages the entire gamut of HR functions. Experience automation like never before.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                                {['Employee On-Boarding', 'Offer Letter Generation', 'Attendance Management', 'Leave Management',
                                    'Payroll Management', 'Statutory Compliance', 'Claim & Reimbursements', 'Performance Management'].map((feature, i) => (
                                        <div key={i} className="flex items-center gap-3 bg-white p-3 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                                            <div className="w-6 h-6 rounded-full bg-brand-100 flex items-center justify-center text-brand-600">
                                                <CheckCircle className="w-4 h-4" strokeWidth={2.5} />
                                            </div>
                                            <span className="text-slate-800 font-bold text-sm md:text-base">{feature}</span>
                                        </div>
                                    ))}
                            </div>

                            <div>
                                <Link to="/contact" className="inline-block bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                                    Book a Demo
                                </Link>
                            </div>
                        </div>
                        <div className="mt-12 lg:mt-0 relative group perspective-1000">
                            <div className="absolute inset-0 bg-brand-500 rounded-[3rem] rotate-6 opacity-20 group-hover:rotate-12 transition-transform duration-500 blur-xl"></div>
                            <img
                                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="HRMS Dashboard"
                                className="relative rounded-[2.5rem] shadow-2xl border-[8px] border-white transform transition-all duration-500 group-hover:scale-105 group-hover:-rotate-2 object-cover h-[500px] w-full"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* About Us Section */}
            <section id="about" className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        {/* LEFT SIDE IMAGE */}
                        <div className="w-full relative">
                            <img
                                src="/about-indian.png"
                                alt="About CLink HR"
                                className="w-full aspect-square object-cover rounded-2xl shadow-2xl"
                            />
                        </div>

                        {/* RIGHT SIDE CONTENT */}
                        <div className="text-left">
                            <span className="text-brand-600 font-bold uppercase tracking-wider text-sm mb-2 block">About Us</span>

                            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8">
                                Who We Are
                            </h2>

                            <div className="space-y-6 text-xl text-slate-600 leading-relaxed">
                                <p>
                                    At <span className="font-bold text-slate-900">Clink HR Services</span>  powered by<span className="font-bold text-slate-900"> CLink Consultancy Services</span>, we align the diversified and intricate HR needs of our clients by providing reliable and strategic staffing solutions.
                                </p>
                                <p>
                                    Headquartered in Gurgaon, India, we are a subsidiary of the <span className="font-bold text-slate-900">CLink Group</span> and pioneers of organized recruitment services in India.
                                </p>
                                <p>
                                    Over the years, we have emerged as the <span className="text-brand-600 font-bold">preferred recruitment partner</span> for multinationals and leading Indian businesses nationwide.
                                </p>
                            </div>

                            <div className="mt-10 flex gap-4">
                                <Link
                                    to="/company/about"
                                    className="inline-flex items-center justify-center bg-brand-600 text-white px-8 py-3 rounded-full font-bold hover:bg-brand-700 transition-all shadow-lg hover:-translate-y-1"
                                >
                                    Our Story
                                    <span className="ml-2">→</span>
                                </Link>
                                <Link
                                    to="/company/about"
                                    className="inline-flex items-center justify-center bg-white text-slate-900 border border-slate-200 px-8 py-3 rounded-full font-bold hover:bg-slate-50 transition-all shadow-sm hover:-translate-y-1"
                                >
                                    Meet the Team
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            {/* Contact CTA */}
            {/* <section id="contact" className="py-24 bg-brand-600">
                <div className="max-w-4xl mx-auto px-4 text-center text-white">
                    <h2 className="text-3xl font-bold mb-6">Ready to Optimize Your HR Operations?</h2>
                    <p className="text-brand-100 text-lg mb-10 max-w-2xl mx-auto">
                        Contact our consultants for a free strategy session on recruitment or payroll outsourcing.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button className="bg-white text-brand-600 px-10 py-4 rounded-xl font-bold hover:bg-brand-50 transition-all shadow-lg">
                            Get in Touch
                        </button>
                        <button className="bg-brand-700 text-white px-10 py-4 rounded-xl font-bold hover:bg-brand-800 transition-all shadow-lg border border-brand-500">
                            Business Enquiries
                        </button>
                    </div>
                </div>
            </section> */}
            <section id="contact" className="py-24 bg-brand-600 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <svg width="100%" height="100%">
                        <pattern id="pattern-circles" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                            <circle cx="2" cy="2" r="1" className="text-white" fill="currentColor" />
                        </pattern>
                        <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)" />
                    </svg>
                </div>

                <div className="max-w-4xl mx-auto px-4 text-center text-white relative z-10">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Ready to Simplify Hiring & Workforce Management?</h2>
                    <p className="text-brand-100 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
                        Whether you are hiring one role or managing a distributed workforce, CLink HR is ready to support your growth.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <button
                            onClick={() => setOpenForm(true)}
                            className="bg-white text-brand-600 px-12 py-5 rounded-2xl font-bold hover:bg-brand-50 transition-all shadow-xl hover:-translate-y-1 text-lg flex items-center justify-center"
                        >
                            Submit Your Requirement
                        </button>

                        <button
                            onClick={() => setOpenBusinessForm(true)}
                            className="bg-transparent border-2 border-brand-300 text-white px-12 py-5 rounded-2xl font-bold hover:bg-brand-700 hover:border-brand-200 transition-all shadow-xl hover:-translate-y-1 text-lg flex items-center justify-center"
                        >
                            Schedule a Consultation
                        </button>

                    </div>
                </div>
            </section>

            {/* Modal Form */}
            {
                openForm && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
                        {/* Overlay */}
                        <div
                            onClick={() => setOpenForm(false)}
                            className="absolute inset-0 bg-black/60"
                        />

                        {/* Modal Box */}
                        <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl p-6 sm:p-8">
                            {/* Close Button */}
                            <button
                                onClick={() => setOpenForm(false)}
                                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl"
                            >
                                ✕
                            </button>

                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Get in Touch</h3>
                            <p className="text-gray-600 mb-6">
                                Fill the form and our team will contact you shortly.
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Enter your full name"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-500"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Enter your email"
                                        pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                                        title="Please enter a valid email (example: name@gmail.com)"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-500"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                                        Phone Number
                                    </label>

                                    <div className="flex">
                                        {/* Country Code Fixed */}
                                        <span className="px-4 py-3 bg-gray-100 border border-gray-300 rounded-l-xl text-gray-700 font-semibold">
                                            +91
                                        </span>

                                        {/* 10 digit only */}
                                        <input
                                            type="tel"
                                            name="phone"
                                            required
                                            value={formData.phone}
                                            onChange={(e) => {
                                                const onlyDigits = e.target.value.replace(/\D/g, ""); // only numbers
                                                if (onlyDigits.length <= 10) {
                                                    setFormData((prev) => ({ ...prev, phone: onlyDigits }));
                                                }
                                            }}
                                            placeholder="Enter 10 digit number"
                                            maxLength={10}
                                            pattern="[0-9]{10}"
                                            className="w-full px-4 py-3 rounded-r-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-500"
                                        />
                                    </div>

                                    <p className="text-xs text-gray-500 mt-1">
                                        Enter 10 digit mobile number
                                    </p>
                                </div>


                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                                        Message
                                    </label>
                                    <textarea
                                        name="message"
                                        rows="4"
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Tell us what you need..."
                                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-500"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-brand-600 text-white py-3 rounded-xl font-bold hover:bg-brand-700 transition-all shadow-lg"
                                >
                                    Submit Request
                                </button>
                            </form>
                        </div>
                    </div>
                )
            }
            {/* Business Enquiry Modal */}
            {
                openBusinessForm && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
                        {/* Overlay */}
                        <div
                            onClick={() => setOpenBusinessForm(false)}
                            className="absolute inset-0 bg-black/60"
                        />

                        {/* Modal Box */}
                        <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl p-6 sm:p-8 max-h-[85vh] overflow-y-auto">
                            {/* Close */}
                            <button
                                onClick={() => setOpenBusinessForm(false)}
                                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl"
                            >
                                ✕
                            </button>

                            <h2 className="text-3xl font-bold text-center text-slate-900 mb-8">
                                Business Enquiry
                            </h2>

                            <form onSubmit={handleBusinessSubmit} className="space-y-5">
                                {/* Name */}
                                <div>
                                    <label className="block font-semibold text-slate-800 mb-2">
                                        Name<span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        value={businessData.name}
                                        onChange={handleBusinessChange}
                                        placeholder="Enter Name"
                                        className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500"
                                    />

                                </div>

                                {/* Designation */}
                                <div>
                                    <label className="block font-semibold text-slate-800 mb-2">
                                        Designation<span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="designation"
                                        required
                                        value={businessData.designation}
                                        onChange={handleBusinessChange}
                                        placeholder="Enter Designation"
                                        className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500"
                                    />
                                </div>

                                {/* Company */}
                                <div>
                                    <label className="block font-semibold text-slate-800 mb-2">
                                        Company<span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="company"
                                        required
                                        value={businessData.company}
                                        onChange={handleBusinessChange}
                                        placeholder="Enter Company Name"
                                        className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500"
                                    />
                                </div>

                                {/* Location */}
                                <div>
                                    <label className="block font-semibold text-slate-800 mb-2">
                                        Location<span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="location"
                                        required
                                        value={businessData.location}
                                        onChange={handleBusinessChange}
                                        placeholder="Enter Location"
                                        className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500"
                                    />
                                </div>

                                {/* Mobile */}
                                <div>
                                    <label className="block font-semibold text-slate-800 mb-2">
                                        Mobile No<span className="text-red-500">*</span>
                                    </label>

                                    <div className="flex">
                                        <span className="px-4 py-3 bg-slate-100 border border-slate-300 rounded-l-lg text-slate-700 font-semibold">
                                            +91
                                        </span>

                                        <input
                                            type="tel"
                                            name="phone"
                                            required
                                            value={businessData.phone}
                                            onChange={(e) => {
                                                const onlyDigits = e.target.value.replace(/\D/g, "");
                                                if (onlyDigits.length <= 10) {
                                                    setBusinessData((prev) => ({ ...prev, phone: onlyDigits }));
                                                }
                                            }}
                                            placeholder="Enter Mobile No."
                                            maxLength={10}
                                            pattern="[0-9]{10}"
                                            title="Enter 10 digit Indian mobile number"
                                            className="w-full border border-slate-300 rounded-r-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500"
                                        />
                                    </div>
                                </div>

                                {/* Email */}
                                <div>
                                    <label className="block font-semibold text-slate-800 mb-2">
                                        Email<span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        value={businessData.email}
                                        onChange={handleBusinessChange}
                                        placeholder="Enter Email ID"
                                        pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                                        title="Please enter a valid email (example: name@gmail.com)"
                                        className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500"
                                    />
                                </div>

                                {/* Requirement */}
                                <div>
                                    <label className="block font-semibold text-slate-800 mb-2">
                                        Nature of requirement<span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        name="requirement"
                                        required
                                        value={businessData.requirement}
                                        onChange={handleBusinessChange}
                                        placeholder="Enter Message"
                                        rows={4}
                                        className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500"
                                    />
                                </div>

                                {/* Submit */}
                                <button
                                    type="submit"
                                    className="w-full bg-brand-600 text-white py-3 rounded-xl font-bold hover:bg-brand-700 transition-all shadow-lg"
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                )
            }


        </>
    );
};

export default Home;

