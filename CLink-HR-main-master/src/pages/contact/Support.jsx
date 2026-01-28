import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LifeBuoy, Users, Briefcase, Monitor, Clock, Send, MessageSquare } from 'lucide-react';

const Support = () => {
    const [ticketData, setTicketData] = useState({
        name: '',
        userType: 'Client',
        email: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Support Request:", ticketData);
        alert("Your support ticket has been created. We will respond shortly.");
    };

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="bg-brand-950 py-40 relative overflow-hidden text-center text-white">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80')] bg-cover bg-center opacity-10"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-brand-950 via-brand-950/90 to-brand-950"></div>

                <div className="max-w-4xl mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-accent-500/10 border border-accent-500/20 text-accent-400 text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-md">
                            Help Center
                        </span>
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
                            Reliable Support for <span className="text-accent-500">Clients & IPP Partners</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
                            At CLink HR, support is not an afterthought—it’s a core part of our delivery model. Through a centralized support framework powered by the Zryoss platform, we ensure timely assistance, clarity, and resolution.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content Area */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-20 pb-24">
                <div className="grid lg:grid-cols-3 gap-8">

                    {/* Left Column: Support Categories */}
                    <div className="lg:col-span-2 space-y-8">

                        {/* Client & IPP Support Grid */}
                        <div className="grid md:grid-cols-2 gap-6">
                            {/* Client Support */}
                            <div className="bg-white rounded-3xl p-8 shadow-md border border-slate-100">
                                <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center text-brand-600 mb-6">
                                    <Briefcase className="w-6 h-6" />
                                </div>
                                <h2 className="text-xl font-bold text-slate-900 mb-4">Client Support</h2>
                                <p className="text-sm text-slate-500 mb-4">For companies using recruitment/payroll services:</p>
                                <ul className="space-y-2 mb-6 text-base text-slate-600">
                                    {["Hiring progress & updates", "Payroll & compliance queries", "SLA tracking & delivery", "Issue escalation"].map((item, i) => (
                                        <li key={i} className="flex gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-brand-400 mt-2 shrink-0"></div> {item}
                                        </li>
                                    ))}
                                </ul>
                                <div className="pt-4 border-t border-slate-100 text-base">
                                    <p className="font-bold text-brand-900">support@clinkhr.com</p>
                                    <p className="text-slate-500">+91-XXXXXXXXXX</p>
                                </div>
                            </div>

                            {/* IPP Partner Support */}
                            <div className="bg-white rounded-3xl p-8 shadow-md border border-slate-100">
                                <div className="w-12 h-12 bg-accent-50 rounded-xl flex items-center justify-center text-accent-600 mb-6">
                                    <Users className="w-6 h-6" />
                                </div>
                                <h2 className="text-xl font-bold text-slate-900 mb-4">IPP Partner Support</h2>
                                <p className="text-sm text-slate-500 mb-4">For Independent Prime Partners (IPP):</p>
                                <ul className="space-y-2 mb-6 text-base text-slate-600">
                                    {["Requirement & JD clarity", "Submission & delivery guidance", "Platform (Zryoss) assistance", "Payout & closure support"].map((item, i) => (
                                        <li key={i} className="flex gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-accent-400 mt-2 shrink-0"></div> {item}
                                        </li>
                                    ))}
                                </ul>
                                <div className="pt-4 border-t border-slate-100 text-base">
                                    <p className="font-bold text-slate-900">ipp-support@clinkhr.com</p>
                                    <p className="text-slate-500">+91-XXXXXXXXXX</p>
                                </div>
                            </div>
                        </div>

                        {/* Zryoss Support & Hours */}
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-slate-900 text-white rounded-3xl p-8 shadow-md">
                                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                                    <Monitor className="w-5 h-5 text-accent-500" /> Zryoss Platform Support
                                </h2>
                                <p className="text-slate-300 text-base mb-4">The Zryoss ecosystem enables structured tracking:</p>
                                <ul className="space-y-2 text-base text-slate-400">
                                    <li>• Ticket-based issue tracking</li>
                                    <li>• Centralized communication logs</li>
                                    <li>• SLA-driven resolution timelines</li>
                                    <li>• Role-based access & visibility</li>
                                </ul>
                            </div>

                            <div className="bg-white rounded-3xl p-8 shadow-md border border-slate-100">
                                <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                                    <Clock className="w-5 h-5 text-brand-600" /> Support Hours
                                </h2>
                                <div className="space-y-3 text-base">
                                    <div className="flex justify-between border-b border-slate-100 pb-2">
                                        <span className="text-slate-600">Mon - Fri</span>
                                        <span className="font-bold text-slate-900">9:30 AM – 6:30 PM</span>
                                    </div>
                                    <div className="flex justify-between border-b border-slate-100 pb-2">
                                        <span className="text-slate-600">Saturday</span>
                                        <span className="font-bold text-amber-600">Limited Support</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-slate-600">Sunday</span>
                                        <span className="font-bold text-red-500">Closed</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Right Column: Support Ticket Form */}
                    <div className="lg:col-span-1">
                        <div className="bg-white p-6 rounded-3xl shadow-xl border border-slate-100 sticky top-24">
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Support Request</h3>
                            <p className="text-slate-500 text-base mb-6">Create a ticket for quick resolution.</p>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-xs font-bold text-slate-700 mb-1">Full Name</label>
                                    <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-500 focus:bg-white focus:outline-none text-sm transition-all" placeholder="Your Name" required />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-slate-700 mb-1">Support Type</label>
                                    <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-500 focus:bg-white focus:outline-none text-sm transition-all">
                                        <option>Client Support</option>
                                        <option>IPP Partner Support</option>
                                        <option>General Inquiry</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                                    <input type="email" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-500 focus:bg-white focus:outline-none text-sm transition-all" placeholder="email@example.com" required />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-slate-700 mb-1">Issue Description</label>
                                    <textarea rows="3" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-500 focus:bg-white focus:outline-none text-sm transition-all" placeholder="Describe your issue..."></textarea>
                                </div>
                                <button type="submit" className="w-full bg-brand-600 text-white font-bold py-3.5 rounded-xl hover:bg-brand-700 transition-all shadow-lg flex items-center justify-center gap-2">
                                    Create Ticket <Send className="w-4 h-4" />
                                </button>

                                <div className="mt-6 pt-4 border-t border-slate-100">
                                    <h4 className="text-xs font-bold text-slate-700 mb-2">Process:</h4>
                                    <ol className="text-xs text-slate-500 space-y-1 list-decimal pl-4">
                                        <li>Ticket logged & categorized</li>
                                        <li>Assigned to support team</li>
                                        <li>Resolution within SLA</li>
                                        <li>Closure confirmation</li>
                                    </ol>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>

            {/* Key Statement */}
            <section className="py-16 bg-brand-50 text-center border-t border-brand-100">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-brand-900 italic tracking-tight">
                        "Structured support. Clear communication. <br /> <span className="text-accent-600">Reliable resolution.</span>"
                    </h2>
                </div>
            </section>
        </div>
    );
};

export default Support;
