import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const Testimonials = ({ bgClass = "bg-brand-50" }) => {
    const testimonials = [
        {
            text: "CLink HR helped us scale hiring across multiple locations with clear communication and predictable delivery.",
            author: "Corporate Client",
            role: "HR Head"
        },
        {
            text: "Their structured approach reduced our hiring timelines significantly.",
            author: "Strategic Partner",
            role: "Operations Manager"
        }
    ];

    return (
        <section className={`py-28 ${bgClass} relative`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="bg-white text-brand-600 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">Testimonials</span>
                    <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mt-4">What Our Clients Say</h3>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {testimonials.map((testimonial, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -5 }}
                            className="bg-white p-10 rounded-3xl shadow-sm border border-brand-100 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-50 rounded-bl-[100px] -mr-10 -mt-10"></div>
                            <Quote className="w-12 h-12 text-brand-200 mb-6 relative z-10" strokeWidth={1.5} />
                            <p className="text-slate-700 text-lg leading-relaxed relative z-10 mb-8 italic">
                                "{testimonial.text}"
                            </p>
                            <div className="relative z-10 border-t border-slate-100 pt-6">
                                <p className="font-bold text-slate-900 text-lg">{testimonial.author}</p>
                                <p className="text-brand-600 text-sm font-medium">{testimonial.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
