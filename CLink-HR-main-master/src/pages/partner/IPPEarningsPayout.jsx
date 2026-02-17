import React from 'react';
import { motion } from 'framer-motion';
import Testimonials from '../../components/Testimonials';
import { PieChart, TrendingUp, CreditCard, DollarSign, BarChart3, ShieldCheck, CheckCircle } from 'lucide-react';

import earningsHero from '../../assets/partners-img/IPP Earnings & Payout Model-hero.jpg';

const IPPEarningsPayout = () => {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="bg-brand-950 py-40 text-white relative overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={earningsHero}
                        alt="IPP Earnings"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-brand-950/50"></div>
                </div>
                <div className="max-w-7xl ml-0 mr-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="inline-block bg-brand-800/50 backdrop-blur-md border border-brand-700 px-6 py-2 rounded-full text-sm font-semibold text-brand-200 mb-6 uppercase tracking-widest">
                        Transparent, Performance-Driven, and Scalable
                    </div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-5xl lg:text-7xl font-bold mb-6 text-white tracking-tight"
                    >
                        IPP Earnings & <span className="text-accent-500">Payout Model</span>
                    </motion.h1>
                    <p className="text-xl md:text-2xl text-slate-200 mb-8 font-light max-w-4xl leading-relaxed">
                        CLink HR’s IPP Earnings & Payout Model is designed to reward performance, ensure transparency, and provide predictable income for Independent Prime Partners (IPP). All payouts are processed centrally through the Zryoss platform, giving IPPs visibility and control over their earnings.
                    </p>
                </div>
            </section>

            {/* How IPP Earnings Work */}
            <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900">How IPP Earnings Work</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all group">
                        <div className="w-14 h-14 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-600 mb-6 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                            <TrendingUp className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-4">1. Performance-Based Earnings</h3>
                        <ul className="space-y-3 text-slate-600 text-sm">
                            <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-1.5 shrink-0"></div>IPP partners earn based on successful candidate placements</li>
                            <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-1.5 shrink-0"></div>The payout is tied to closures, not just submissions</li>
                            <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-1.5 shrink-0"></div>High-quality, on-time delivery can increase opportunities and priority allocations</li>
                        </ul>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all group">
                        <div className="w-14 h-14 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-600 mb-6 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                            <PieChart className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-4">2. Role-Based Payout Structure</h3>
                        <p className="text-sm text-slate-600 mb-2">Payouts vary depending on:</p>
                        <ul className="space-y-3 text-slate-600 text-sm">
                            <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-1.5 shrink-0"></div>Role complexity and seniority</li>
                            <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-1.5 shrink-0"></div>Industry and specialization</li>
                            <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-1.5 shrink-0"></div>Volume and SLA requirements</li>
                        </ul>
                        <p className="text-xs text-brand-600 font-bold mt-4">Complex or high-value roles earn proportionally higher payouts.</p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all group">
                        <div className="w-14 h-14 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-600 mb-6 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                            <BarChart3 className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-4">3. Transparent Tracking via Zryoss</h3>
                        <p className="text-sm text-slate-600 mb-2">All earnings are tracked in real-time through the Zryoss dashboard. IPPs can view:</p>
                        <ul className="space-y-3 text-slate-600 text-sm">
                            <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-1.5 shrink-0"></div>Active requirements</li>
                            <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-1.5 shrink-0"></div>Submissions made</li>
                            <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-1.5 shrink-0"></div>Pending and approved closures & expected payouts</li>
                        </ul>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all group">
                        <div className="w-14 h-14 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-600 mb-6 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                            <CreditCard className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-4">4. Centralized Payout Processing</h3>
                        <p className="text-sm text-slate-600 mb-2">Once a closure is validated by CLink HR:</p>
                        <ul className="space-y-3 text-slate-600 text-sm">
                            <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-1.5 shrink-0"></div>Payouts are approved and scheduled</li>
                            <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-1.5 shrink-0"></div>No disputes or delays</li>
                            <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-1.5 shrink-0"></div>All payments processed securely through the ecosystem</li>
                        </ul>
                    </div>

                    {/* Card 5 */}
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all group">
                        <div className="w-14 h-14 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-600 mb-6 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                            <DollarSign className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-4">5. Scalable Income Opportunities</h3>
                        <ul className="space-y-3 text-slate-600 text-sm">
                            <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-1.5 shrink-0"></div>Work on multiple roles simultaneously</li>
                            <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-1.5 shrink-0"></div>Take up bulk or high-value requirements</li>
                            <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-1.5 shrink-0"></div>Higher performance leads to more allocations and higher income</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Benefits & Flow Section (Side by Side) */}
            <section className="py-20 bg-white border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Benefits */}
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-8">Benefits of the IPP Payout Model</h2>
                            <div className="space-y-6">
                                {[
                                    { title: "Predictable & Transparent", desc: "Real-time tracking and clear payout schedules" },
                                    { title: "Performance-Driven", desc: "High performers are rewarded with priority allocations" },
                                    { title: "Independent", desc: "Operate your own brand while earning through structured support" },
                                    { title: "Scalable", desc: "Income grows as you take more responsibilities and closures" }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="w-10 h-10 rounded-full bg-brand-50 flex items-center justify-center shrink-0">
                                            <CheckCircle className="w-5 h-5 text-brand-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900">{item.title}</h4>
                                            <p className="text-slate-600 text-sm">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Example Flow */}
                        <div className="bg-brand-50 rounded-[2.5rem] p-10 border border-brand-100">
                            <h2 className="text-2xl font-bold text-brand-900 mb-8">Example Flow of Earnings</h2>
                            <div className="space-y-0 relative">
                                <div className="absolute top-0 bottom-0 left-4 w-0.5 bg-brand-200"></div>
                                {[
                                    "IPP receives structured requirement",
                                    "Sources, screens, and submits candidates",
                                    "Candidate is selected and validated",
                                    "Closure confirmed by CLink HR",
                                    "Payout credited through Zryoss platform"
                                ].map((step, i) => (
                                    <div key={i} className="relative pl-12 pb-8 last:pb-0">
                                        <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-brand-600 text-white flex items-center justify-center font-bold text-sm shadow-md border-4 border-brand-50">
                                            {i + 1}
                                        </div>
                                        <p className="font-medium text-brand-900 p-2 bg-white rounded-lg shadow-sm border border-brand-100 inline-block">{step}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Statement CTA */}
            <section className="py-24 bg-slate-50 text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="w-20 h-1 mx-auto bg-brand-500 mb-8"></div>
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 italic tracking-tight">
                        "Your performance drives your earnings. <br /> We handle the process, coordination, and payouts."
                    </h2>
                </div>
            </section>

            <Testimonials />
        </div>
    );
};

export default IPPEarningsPayout;
