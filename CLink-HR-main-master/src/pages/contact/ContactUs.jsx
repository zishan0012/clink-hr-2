import React from 'react';
import { motion } from 'framer-motion';
import Testimonials from '../../components/Testimonials';
import contactusHero from '../../assets/contact-img/contactus-hero.avif';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, Globe, Facebook, Twitter, Instagram, Linkedin, Briefcase } from 'lucide-react';

const ContactUs = () => {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            {/* Hero Section */}
            <section className="bg-brand-950 py-32 relative overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={contactusHero}
                        alt="Contact Us"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-brand-950/50"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-brand-800/50 border border-brand-700 text-brand-200 text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-md">
                            Get in Touch
                        </span>
                        <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-6">
                            We’re Here to <span className="text-accent-500">Help You Grow</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 max-w-2xl leading-relaxed">
                            Have questions about CLink HR services, IPP Partner Program, or recruitment solutions? Our team is ready to assist you.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Contact Content */}
            <section className="py-32 bg-slate-50 relative z-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-12 gap-8">

                        {/* Left Info Column */}
                        <div className="lg:col-span-5 space-y-8">
                            {/* Office Info Card */}
                            <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow">
                                <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2">
                                    <MapPin className="text-brand-600" /> Corporate Office
                                </h2>
                                <div className="space-y-6">
                                    <div className="pl-4 border-l-2 border-brand-100">
                                        <h4 className="font-bold text-brand-900">CLink HR Pvt. Ltd.</h4>
                                        <p className="text-slate-600 text-base mt-1">
                                            [Address Line 1] <br />
                                            [City, State, ZIP Code]
                                        </p>
                                    </div>
                                    <div className="pl-4 border-l-2 border-brand-100">
                                        <div className="flex items-center gap-2 text-slate-700 mb-1">
                                            <Phone className="w-4 h-4 text-brand-500" /> <span className="font-bold">+91-XXXXXXXXXX</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-slate-700">
                                            <Mail className="w-4 h-4 text-brand-500" /> <span className="font-bold">contact@clinkhr.com</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Enquiries Grid */}
                            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-6">
                                {/* Business Enquiries */}
                                <div className="bg-brand-50 p-6 rounded-3xl border border-brand-100 hover:shadow-md transition-shadow">
                                    <h3 className="font-bold text-brand-900 mb-2 flex items-center gap-2">
                                        <Briefcase className="w-5 h-5 text-brand-600" /> Business Enquiries
                                    </h3>
                                    <p className="text-sm text-slate-600 mb-3">
                                        For recruitment, payroll services, or collaborations:
                                    </p>
                                    <div className="space-y-1 text-base font-medium text-brand-800">
                                        <p>business@clinkhr.com</p>
                                        <p>+91-XXXXXXXXXX</p>
                                    </div>
                                </div>

                                {/* IPP Enquiries */}
                                <div className="bg-accent-50 p-6 rounded-3xl border border-accent-100 hover:shadow-md transition-shadow">
                                    <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                                        <MessageSquare className="w-5 h-5 text-accent-600" /> IPP Partner Enquiries
                                    </h3>
                                    <p className="text-sm text-slate-600 mb-3">
                                        Interested in becoming an Independent Prime Partner?
                                    </p>
                                    <div className="space-y-1 text-base font-medium text-slate-800">
                                        <p>ipp@clinkhr.com</p>
                                        <p>+91-XXXXXXXXXX</p>
                                    </div>
                                </div>
                            </div>

                            {/* Social Media */}
                            <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow">
                                <h3 className="font-bold text-lg mb-6">Connect with Us</h3>
                                <div className="flex gap-4 mb-6">
                                    <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-500 transition-colors"><Linkedin className="w-5 h-5" /></a>
                                    <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-500 transition-colors"><Facebook className="w-5 h-5" /></a>
                                    <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-500 transition-colors"><Twitter className="w-5 h-5" /></a>
                                    <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-500 transition-colors"><Instagram className="w-5 h-5" /></a>
                                </div>
                                <p className="text-slate-400 text-sm italic">
                                    Stay updated on industry insights, hiring trends, and IPP partner opportunities.
                                </p>
                            </div>
                        </div>

                        {/* Right Form Column */}
                        <div className="lg:col-span-7">
                            <div className="bg-white p-10 md:p-12 rounded-3xl shadow-xl border border-slate-100 h-full">
                                <h2 className="text-3xl font-bold text-slate-900 mb-2">Quick Contact Form</h2>
                                <p className="text-slate-500 mb-8">Our team will respond within 24–48 hours.</p>

                                <form className="space-y-6">
                                    <div className="grid sm:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-slate-700 ml-1">Name</label>
                                            <input
                                                type="text"
                                                className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-brand-500 focus:bg-white text-slate-900 placeholder-slate-400 transition-all"
                                                placeholder="Your Name"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-slate-700 ml-1">Phone</label>
                                            <input
                                                type="tel"
                                                className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-brand-500 focus:bg-white text-slate-900 placeholder-slate-400 transition-all"
                                                placeholder="+91..."
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700 ml-1">Email</label>
                                        <input
                                            type="email"
                                            className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-brand-500 focus:bg-white text-slate-900 placeholder-slate-400 transition-all"
                                            placeholder="you@email.com"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700 ml-1">Message</label>
                                        <textarea
                                            rows={5}
                                            className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-brand-500 focus:bg-white text-slate-900 placeholder-slate-400 transition-all"
                                            placeholder="How can we help you?"
                                        ></textarea>
                                    </div>
                                    <button className="w-full bg-brand-600 text-white px-10 py-5 rounded-xl font-bold hover:bg-brand-700 transition-all shadow-xl hover:shadow-brand-500/25 flex items-center justify-center gap-3">
                                        Submit <Send className="w-5 h-5" />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer CTA Statement */}
            <section className="py-20 bg-white text-center border-t border-slate-100">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 italic tracking-tight leading-tight">
                        "Your hiring solutions and partnership journey start here. <span className="text-accent-600">Reach out today.</span>"
                    </h2>
                </div>
            </section>

            <Testimonials />
        </div>
    );
};

export default ContactUs;
