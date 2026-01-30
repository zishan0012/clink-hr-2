import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Plus,
    Minus,
    HelpCircle,
    MessageCircle,
    PhoneCall,
    Search
} from 'lucide-react';
import { Link } from 'react-router-dom';

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
    return (
        <motion.div
            initial={false}
            className={`border border-slate-200 rounded-2xl overflow-hidden mb-4 transition-all duration-300 ${isOpen ? 'bg-white shadow-lg ring-1 ring-brand-100 border-brand-200' : 'bg-white hover:border-brand-300'}`}
        >
            <button
                onClick={onClick}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
            >
                <span className={`text-lg font-bold pr-8 ${isOpen ? 'text-brand-700' : 'text-slate-800'}`}>
                    {question}
                </span>
                <span className={`p-2 rounded-full transition-colors flex-shrink-0 ${isOpen ? 'bg-brand-100 text-brand-600' : 'bg-slate-50 text-slate-400'}`}>
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </span>
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="px-6 pb-8 text-slate-600 leading-relaxed border-t border-slate-50 pt-4 text-base">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

const FAQsClients = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            question: "What services does CLink HR offer?",
            answer:
                "CLink HR provides end-to-end recruitment, payroll, and HR support services, including permanent hiring, contract staffing, bulk hiring, third-party payroll, compliance support, and workforce coordination.",
        },
        {
            question: "How is CLink HR different from a traditional recruitment agency?",
            answer:
                "CLink HR follows a structured and scalable delivery approach. Instead of relying on a limited internal team, we use defined processes, technology, and a nationwide delivery framework to ensure faster turnaround times, wider reach, and consistent accountability.",
        },
        {
            question: "Who will be our point of contact?",
            answer:
                "You will have a single point of contact from CLink HR who manages your requirements, coordination, reporting, and overall delivery. This ensures clarity, ownership, and smooth communication at all stages.",
        },
        {
            question: "How fast can positions be closed?",
            answer:
                "Hiring timelines depend on role complexity, volume, and market conditions. However, our delivery model allows parallel execution, which helps reduce time-to-hire significantly compared to conventional models.",
        },
        {
            question: "Do you handle PAN-India or multi-location requirements?",
            answer:
                "Yes. CLink HR supports pan-India and multi-location hiring and payroll operations, making it easier for organizations with distributed teams or expansion plans.",
        },
        {
            question: "What industries do you specialize in?",
            answer:
                "We work across multiple industries, including IT & Software, Manufacturing, Healthcare, Retail & E-Commerce, Logistics & Supply Chain, BFSI, Education, and Startups and emerging businesses.",
        },
        {
            question: "How do you ensure quality and consistency in hiring?",
            answer:
                "Quality is managed through defined SLAs and delivery timelines, structured screening and validation processes, regular performance monitoring, and replacement and escalation mechanisms. Our focus is on predictable and reliable outcomes, not just closures.",
        },
        {
            question: "Do you provide replacement guarantees?",
            answer:
                "Yes. Replacement terms are clearly defined at the start of the engagement, based on the role and service model. This ensures transparency and risk mitigation for clients.",
        },
        {
            question: "Can CLink HR manage payroll and compliance?",
            answer:
                "Yes. We offer end-to-end payroll coordination, including salary processing, statutory compliance, and workforce documentation—under a centralized management framework.",
        },
        {
            question: "How does pricing work?",
            answer:
                "Pricing depends on the type of service, role complexity or workforce size, and engagement model. All commercials are discussed and finalized transparently before starting.",
        },
        {
            question: "Is data security and confidentiality maintained?",
            answer:
                "Absolutely. CLink HR follows strict data security, confidentiality, and compliance practices to protect client and candidate information.",
        },
        {
            question: "How do we get started with CLink HR?",
            answer:
                "Getting started is simple. Share your requirement, discuss scope and timelines, onboard, and begin execution with centralized coordination.",
        },
    ];

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="bg-brand-950 py-32 relative overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80"
                        alt="Client Meeting"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-brand-950/50"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block py-1.5 px-4 rounded-full bg-brand-800/50 border border-brand-700 text-brand-200 text-sm font-bold tracking-widest uppercase mb-6 shadow-lg backdrop-blur-md">
                            Resource Center
                        </span>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                            FAQs – Clients
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-200 mb-8 font-light max-w-4xl leading-relaxed">
                            Everything you need to know about partnering with CLink HR for your recruitment and workforce needs.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* FAQs List */}
            <section className="py-24 bg-white relative -mt-10 rounded-t-[3rem] z-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Common questions regarding our services</h2>
                        <div className="relative max-w-lg mx-auto mt-8">
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search for a topic..."
                                className="w-full pl-12 pr-4 py-4 rounded-full border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-200 transition-all shadow-sm"
                            />
                        </div>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                question={faq.question}
                                answer={faq.answer}
                                isOpen={openIndex === index}
                                onClick={() => setOpenIndex(index === openIndex ? null : index)}
                            />
                        ))}
                    </div>

                    {/* Contact CTA */}
                    <div className="mt-16 bg-brand-50 rounded-3xl p-8 md:p-12 text-center border border-brand-100">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-brand-600">
                            <MessageCircle className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">Still have questions?</h3>
                        <p className="text-slate-600 mb-8 max-w-lg mx-auto">
                            Can't find the answer you're looking for? Please chat to our friendly team.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/contact" className="bg-brand-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-brand-700 transition-all shadow-lg hover:-translate-y-1">
                                Get in Touch
                            </Link>
                            <a href="tel:+911234567890" className="bg-white text-slate-700 border border-slate-200 px-8 py-3 rounded-xl font-bold hover:border-brand-500 hover:text-brand-600 transition-all flex items-center justify-center gap-2">
                                <PhoneCall className="w-4 h-4" /> Call Us
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FAQsClients;
