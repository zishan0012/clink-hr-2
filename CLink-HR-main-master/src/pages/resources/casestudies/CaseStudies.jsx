import React from 'react';
import { motion } from 'framer-motion';
import Testimonials from '../../../components/Testimonials';
import { Link } from 'react-router-dom';
import {
    Building2,
    Users,
    TrendingUp,
    ArrowRight,
    CheckCircle,
    Target,
    DollarSign,
    Shield
} from 'lucide-react';
import casestudy from '../../../assets/case-studies/casestudy.avif';

const CaseStudies = () => {
    const caseStudies = [
        {
            id: 1,
            title: "How CLink HR Helped a Fast-Growing Company Scale Hiring While Reducing Cost & Compliance Risk",
            industry: "IT Services & Digital Solutions",
            companySize: "350+ employees",
            duration: "9 months",
            slug: "it-services-scaling",
            highlights: [
                "132 positions closed (10% above target)",
                "41% reduction in time-to-hire",
                "33% reduction in cost per hire",
                "100% payroll accuracy with zero penalties"
            ],
            metrics: [
                { icon: Target, label: "Hiring Performance", value: "132", unit: "positions" },
                { icon: TrendingUp, label: "Time Saved", value: "41%", unit: "faster" },
                { icon: DollarSign, label: "Cost Reduction", value: "33%", unit: "savings" },
                { icon: Shield, label: "Compliance", value: "100%", unit: "accuracy" }
            ],
            tags: ["RPO", "Compliance", "Cost Optimization", "Technology"]
        }
    ];

    return (
        <div className="pt-20 min-h-screen bg-slate-50">
            {/* Hero Section */}
            <div className="relative bg-brand-900 py-32 overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={casestudy}
                        alt="Success Stories"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-brand-950/80"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold text-white mb-6"
                    >
                        Success Stories & Case Studies
                    </motion.h1>
                    <p className="text-xl text-brand-100 max-w-3xl">
                        See how we've helped companies transform their workforce, reduce costs, and scale efficiently.
                    </p>
                </div>
            </div>

            {/* Case Studies Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid gap-8">
                    {caseStudies.map((study, index) => (
                        <motion.div
                            key={study.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-3xl shadow-lg border border-slate-100 overflow-hidden hover:shadow-2xl transition-all duration-300"
                        >
                            <div className="p-8 md:p-12">
                                {/* Header */}
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="w-16 h-16 bg-brand-50 rounded-2xl flex items-center justify-center shrink-0">
                                        <Building2 className="w-8 h-8 text-brand-600" />
                                    </div>
                                    <div className="flex-1">
                                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 leading-tight">
                                            {study.title}
                                        </h2>
                                        <div className="flex flex-wrap gap-4 text-sm text-slate-600">
                                            <div className="flex items-center gap-2">
                                                <Building2 className="w-4 h-4 text-brand-500" />
                                                <span>{study.industry}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Users className="w-4 h-4 text-brand-500" />
                                                <span>{study.companySize}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <TrendingUp className="w-4 h-4 text-brand-500" />
                                                <span>{study.duration} engagement</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Metrics */}
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                                    {study.metrics.map((metric, idx) => (
                                        <div key={idx} className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                                            <div className="flex items-center gap-2 mb-2">
                                                <metric.icon className="w-5 h-5 text-brand-600" />
                                                <span className="text-xs text-slate-500 font-medium">{metric.label}</span>
                                            </div>
                                            <div className="text-2xl font-bold text-brand-700">{metric.value}</div>
                                            <div className="text-xs text-slate-600">{metric.unit}</div>
                                        </div>
                                    ))}
                                </div>

                                {/* Key Highlights */}
                                <div className="mb-8">
                                    <h3 className="text-lg font-bold text-slate-900 mb-4">Key Results</h3>
                                    <div className="grid md:grid-cols-2 gap-3">
                                        {study.highlights.map((highlight, idx) => (
                                            <div key={idx} className="flex items-start gap-3">
                                                <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                                                <span className="text-slate-700">{highlight}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {study.tags.map((tag, idx) => (
                                        <span
                                            key={idx}
                                            className="px-3 py-1 bg-brand-50 text-brand-700 rounded-full text-sm font-medium"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* CTA */}
                                <Link
                                    to={`/resources/case-studies/${study.slug}`}
                                    className="inline-flex items-center gap-2 bg-brand-600 text-white px-8 py-4 rounded-full font-bold hover:bg-brand-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 transform duration-300"
                                >
                                    Read Full Case Study <ArrowRight className="w-5 h-5" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <Testimonials />
        </div>
    );
};

export default CaseStudies;
