import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, FileText, UserCheck, Layout, BookOpen, Target, Rocket, PlayCircle } from 'lucide-react';

const IPPOnboardingProcess = () => {
    const steps = [
        {
            title: "Application & Profile Submission",
            desc: "Submit your application to become an IPP. Provide details about your experience, specialization, and industries served. Highlight your hiring strengths and focus areas.",
            icon: FileText
        },
        {
            title: "Review & Approval",
            desc: "CLink HR evaluates your profile and experience. If approved, you are officially registered as an IPP partner and receive access to the Zryoss platform and partner dashboard.",
            icon: UserCheck
        },
        {
            title: "Brand Enablement",
            desc: "Operate under your own independent brand. Get guidance on digital presence and recruitment brand positioning with support for website and social media.",
            icon: Layout
        },
        {
            title: "Training & Orientation",
            desc: "Introduction to the CLink HR delivery process. Understand client requirements, Zryoss platform workflows, submission guidelines, and SLA expectations.",
            icon: BookOpen
        },
        {
            title: "Requirement Allocation",
            desc: "Live, structured requirements are shared based on your specialization and expertise, with clear timelines, KPIs, and expectations for each role.",
            icon: Target
        },
        {
            title: "Execution & Delivery",
            desc: "Start sourcing, screening, and submitting candidates. Track progress through the Zryoss dashboard and focus solely on delivery performance.",
            icon: Rocket
        },
        {
            title: "Closure & Payout",
            desc: "Closures are validated centrally by CLink HR. Payouts processed transparently via the ecosystem with ongoing feedback to improve performance.",
            icon: CheckCircle
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="bg-brand-950 py-40 text-center text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-brand-950/70 via-brand-950/90 to-brand-950"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
                            IPP <span className="text-accent-500">Onboarding</span> Process
                        </h1>
                        <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-6">
                            Start Your Journey as an Independent Prime Partner
                        </p>
                        <p className="text-slate-400 max-w-2xl mx-auto text-sm leading-relaxed mb-8">
                            Becoming an Independent Prime Partner (IPP) with CLink HR is simple, structured, and designed for independent recruiters. The onboarding process ensures you are fully enabled to deliver quality recruitment services, while CLink HR and the Zryoss ecosystem handle clients, coordination, and backend operations.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Steps Section */}
            <section className="py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="space-y-12 relative">
                    {/* Connecting Line */}
                    <div className="absolute left-[27px] top-4 bottom-4 w-0.5 bg-slate-200 hidden md:block"></div>

                    {steps.map((step, i) => (
                        <div key={i} className="flex flex-col md:flex-row gap-8 items-start relative">
                            {/* Number Badge */}
                            <div className="shrink-0 relative z-10">
                                <div className="w-14 h-14 rounded-full bg-brand-600 text-white flex items-center justify-center font-bold text-xl shadow-lg border-4 border-slate-50">
                                    {i + 1}
                                </div>
                            </div>

                            {/* Content Card */}
                            <div className="flex-grow bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-lg transition-all w-full">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-3 bg-brand-50 rounded-xl text-brand-600">
                                        <step.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900">{step.title}</h3>
                                </div>
                                <p className="text-slate-600 text-lg leading-relaxed">{step.desc}</p>
                                {i === 2 && (
                                    <div className="mt-4 p-3 bg-accent-50 text-accent-800 text-sm font-bold rounded-lg inline-block border border-accent-100">
                                        You remain independent while backed by a structured ecosystem.
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 bg-white border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-slate-900 mb-12">Key Benefits of the Onboarding Process</h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        {[
                            "Quick and structured onboarding",
                            "Brand independence with central support",
                            "Access to structured requirements immediately",
                            "Training and process enablement",
                            "Transparent payout and performance tracking"
                        ].map((benefit, i) => (
                            <span key={i} className="bg-slate-50 text-slate-700 px-6 py-3 rounded-full font-medium border border-slate-200 shadow-sm flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-green-500" /> {benefit}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final Statement */}
            <section className="py-24 bg-brand-50 text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-brand-900 mb-6 italic tracking-tight">
                        "Simple, structured, and designed to empower your recruitment brand."
                    </h2>
                </div>
            </section>
        </div>
    );
};

export default IPPOnboardingProcess;
