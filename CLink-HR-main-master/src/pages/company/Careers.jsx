import React from 'react';
import { motion } from 'framer-motion';
import Testimonials from '../../components/Testimonials';
import {
    Briefcase,
    MapPin,
    Clock,
    Search,
    Star,
    Heart,
    Coffee,
    Monitor,
    Users,
    ArrowRight,
    Zap
} from 'lucide-react';
import { Link } from 'react-router-dom';

const JobCard = ({ title, location, type, department, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.5 }}
        className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all group relative overflow-hidden flex flex-col h-full"
    >
        <div className="relative z-10 flex-grow">
            <span className="inline-block px-4 py-1.5 bg-brand-50 text-brand-600 text-xs font-bold rounded-full mb-6 border border-brand-100 uppercase tracking-widest">
                {department}
            </span>
            <h3 className="text-2xl font-bold text-slate-900 group-hover:text-brand-600 transition-colors mb-4 leading-tight">
                {title}
            </h3>

            <div className="flex flex-wrap items-center gap-3 text-slate-500 text-sm mb-8">
                <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-xl">
                    <MapPin className="w-4 h-4 text-accent-500" /> {location}
                </div>
                <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-xl">
                    <Clock className="w-4 h-4 text-accent-500" /> {type}
                </div>
            </div>
        </div>

        <button className="w-full py-4 rounded-2xl bg-white border-2 border-slate-100 text-slate-600 font-bold hover:bg-brand-600 hover:text-white hover:border-brand-600 transition-all flex items-center justify-center gap-2 group/btn mt-auto">
            View Details <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
        </button>
    </motion.div>
);

const Careers = () => {
    const jobs = [
        { id: 1, title: 'Senior IT Recruiter', location: 'Gurgaon / Remote', type: 'Full-time', department: 'Recruitment' },
        { id: 2, title: 'Business Development Manager', location: 'Mumbai', type: 'Full-time', department: 'Sales' },
        { id: 3, title: 'HR Operations Executive', location: 'Bangalore', type: 'Full-time', department: 'Operations' },
        { id: 4, title: 'Talent Acquisition Specialist', location: 'Hyderabad', type: 'Full-time', department: 'Recruitment' },
        { id: 5, title: 'Key Account Manager', location: 'Pune', type: 'Full-time', department: 'Client Servicing' },
        { id: 6, title: 'Digital Marketing Lead', location: 'Gurgaon', type: 'Full-time', department: 'Marketing' },
    ];

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="bg-brand-950 py-32 relative overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80"
                        alt="Indian Office Culture"
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
                            Join Our Journey
                        </span>
                        <h1 className="text-4xl md:text-8xl font-extrabold text-white mb-8 tracking-tight leading-[1.1]">
                            Build the <br />
                            <span className="text-accent-500">Future of Work.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-200 max-w-3xl font-light leading-relaxed mb-10">
                            At CLink HR, we don't just hire people; we empower them to shape the <span className="text-white font-medium">careers of thousands</span>.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button onClick={() => document.getElementById('openings').scrollIntoView({ behavior: 'smooth' })} className="bg-brand-600 text-white px-10 py-4 rounded-full font-bold hover:bg-brand-500 transition-all shadow-xl flex items-center justify-center gap-2">
                                View Openings <Briefcase className="w-5 h-5" />
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Why Join Us */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-brand-600 font-bold uppercase tracking-widest text-sm mb-4 block">Employee Value</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">Why CLink HR?</h2>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { title: "Scale & Impact", text: "Shape workforce models for India's biggest brands.", icon: Zap },
                            { title: "Inclusive DNA", text: "A culture built on trust, transparency, and empathy.", icon: Heart },
                            { title: "Modern Work", text: "Agile processes and flexible working environments.", icon: Monitor },
                            { title: "Merit Driven", text: "Competitive rewards for those who deliver excellence.", icon: Star },
                        ].map((perk, i) => (
                            <div key={i} className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 hover:shadow-xl transition-all group">
                                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-8 text-accent-500 shadow-sm group-hover:bg-accent-600 group-hover:text-white transition-all">
                                    <perk.icon className="w-7 h-7" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">{perk.title}</h3>
                                <p className="text-slate-600 leading-relaxed font-light text-sm">{perk.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Life at CLink */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
                        <div>
                            <span className="text-accent-600 font-bold uppercase tracking-widest text-sm mb-4 block">Workplace Culture</span>
                            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight leading-tight">Life Inside <span className="text-brand-600">CLink.</span></h2>
                            <p className="text-xl text-slate-600 leading-relaxed font-light mt-6">
                                We celebrate wins, embrace challenges, and support each other. Life at CLink is defined by <span className="text-accent-600 font-bold">ownership and momentum</span>.
                            </p>
                        </div>
                        <div className="flex gap-6 justify-end">
                            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center">
                                <span className="block text-4xl font-extrabold text-brand-600">4.8</span>
                                <span className="text-sm text-slate-500 font-bold uppercase tracking-widest">Glassdoor</span>
                            </div>
                            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center">
                                <span className="block text-4xl font-extrabold text-brand-600">92%</span>
                                <span className="text-sm text-slate-500 font-bold uppercase tracking-widest">Retention</span>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-4 gap-4 h-[600px]">
                        <div className="md:col-span-2 md:row-span-2 relative rounded-[3rem] overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" alt="Team" className="w-full h-full object-cover" />
                        </div>
                        <div className="relative rounded-[2.5rem] overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80" alt="Meeting" className="w-full h-full object-cover" />
                        </div>
                        <div className="relative rounded-[2.5rem] overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" alt="Office" className="w-full h-full object-cover" />
                        </div>
                        <div className="md:col-span-2 relative rounded-[2.5rem] overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" alt="Brainstorming" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Job Listings */}
            <section className="py-24 bg-white" id="openings">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-brand-950 rounded-[4rem] p-12 md:p-20 mb-20 text-center shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500 rounded-full blur-[100px] opacity-10 group-hover:opacity-20 transition-all"></div>
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">Find Your Next <span className="text-accent-500">Mission.</span></h2>
                        <div className="relative max-w-2xl mx-auto">
                            <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-slate-400 w-6 h-6" />
                            <input
                                type="text"
                                placeholder="Search by role or location..."
                                className="w-full pl-16 pr-8 py-5 rounded-full border-none bg-white text-slate-800 focus:outline-none focus:ring-4 focus:ring-accent-500/20 text-lg shadow-xl"
                            />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {jobs.map((job) => (
                            <JobCard key={job.id} {...job} delay={job.id * 0.1} />
                        ))}
                    </div>
                </div>
            </section>

            <Testimonials />
        </div>
    );
};

export default Careers;
