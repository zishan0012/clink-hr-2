import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from 'lucide-react';

const ContactUs = () => {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="bg-brand-950 py-32 relative overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                        alt="Contact Us"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-brand-950/70"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-brand-800/50 border border-brand-700 text-brand-200 text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-md">
                            Connect With Us
                        </span>
                        <h1 className="text-4xl md:text-8xl font-extrabold text-white mb-8 tracking-tight leading-[1.1]">
                            Let's Talk <br />
                            <span className="text-accent-500">Business.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-200 max-w-2xl mx-auto font-light leading-relaxed">
                            Have a requirement or a question? Reach out to our <span className="text-white font-medium">strategic HR specialists</span> today.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Contact Area */}
            <section className="py-24 relative -mt-16 z-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-12 gap-8">
                        {/* Info Column */}
                        <div className="lg:col-span-5 space-y-8">
                            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 h-full">
                                <h2 className="text-3xl font-bold text-slate-900 mb-10 tracking-tight">Our Offices</h2>
                                <div className="space-y-10">
                                    <div className="flex gap-6">
                                        <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-brand-600 shrink-0 border border-slate-100 shadow-sm">
                                            <MapPin className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 text-lg mb-2">Corporate Head Office</h4>
                                            <p className="text-slate-600 font-light text-sm leading-relaxed">
                                                Plot No 14, Sector 44, <br />
                                                Gurgaon, Haryana 122003, India
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-6">
                                        <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-brand-600 shrink-0 border border-slate-100 shadow-sm">
                                            <Mail className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 text-lg mb-2">Email Inquiry</h4>
                                            <p className="text-slate-600 font-light text-sm">hello@clinkhr.com</p>
                                            <p className="text-slate-600 font-light text-sm">sales@clinkhr.com</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-6">
                                        <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-brand-600 shrink-0 border border-slate-100 shadow-sm">
                                            <Phone className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 text-lg mb-2">Call Us</h4>
                                            <p className="text-slate-600 font-light text-sm">+91 0124 400 1234</p>
                                            <p className="text-slate-600 font-light text-sm">+91 91122 33445</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-6">
                                        <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-brand-600 shrink-0 border border-slate-100 shadow-sm">
                                            <Clock className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 text-lg mb-2">Working Hours</h4>
                                            <p className="text-slate-600 font-light text-sm">Mon - Fri: 09:30 AM - 06:30 PM</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Form Column */}
                        <div className="lg:col-span-7">
                            <div className="bg-white p-10 md:p-14 rounded-[2.5rem] shadow-sm border border-slate-100">
                                <h2 className="text-3xl font-bold text-slate-900 mb-8 tracking-tight">Drop us a Message</h2>
                                <form className="space-y-6">
                                    <div className="grid sm:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                                            <input
                                                type="text"
                                                className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-4 focus:ring-brand-500/20 text-slate-900 placeholder-slate-400 transition-all font-light"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-slate-700 ml-1">Work Email</label>
                                            <input
                                                type="email"
                                                className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-4 focus:ring-brand-500/20 text-slate-900 placeholder-slate-400 transition-all font-light"
                                                placeholder="john@company.com"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700 ml-1">Subject</label>
                                        <select className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-4 focus:ring-brand-500/20 text-slate-900 transition-all font-light appearance-none">
                                            <option>General Inquiry</option>
                                            <option>Hiring Talent</option>
                                            <option>Payroll Outsourcing</option>
                                            <option>Strategic Advisory</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700 ml-1">Message</label>
                                        <textarea
                                            rows={5}
                                            className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-4 focus:ring-brand-500/20 text-slate-900 placeholder-slate-400 transition-all font-light"
                                            placeholder="Tell us about your requirement..."
                                        ></textarea>
                                    </div>
                                    <button className="w-full sm:w-auto bg-brand-600 text-white px-10 py-5 rounded-full font-bold hover:bg-brand-700 transition-all shadow-xl flex items-center justify-center gap-3 group">
                                        Send Message <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactUs;
