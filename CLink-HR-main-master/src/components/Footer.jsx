import React from 'react';
import { Link } from 'react-router-dom';
import { FOOTER_LINKS } from '../constants';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-10 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Section: Logo, About, Socials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="block">
              <img
                src="/clink-logo.png"
                alt="CLink HR Logo"
                className="h-14 w-auto"
              />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              CLink HR is a recruitment and workforce solutions company delivering scalable hiring and payroll support across India through a structured, technology-enabled delivery ecosystem.
            </p>

            {/* Social Links */}
            <div className="flex items-center space-x-4 pt-2">
              <SocialLink href="#" icon={<Facebook size={20} />} label="Facebook" />
              <SocialLink href="#" icon={<Twitter size={20} />} label="Twitter" />
              <SocialLink href="#" icon={<Linkedin size={20} />} label="LinkedIn" />
              <SocialLink href="#" icon={<Instagram size={20} />} label="Instagram" />
            </div>
          </div>

          {/* Links Columns (Mapped from Constants) */}
          <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {Object.entries(FOOTER_LINKS).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-accent-500 font-bold uppercase tracking-widest text-[10px] mb-6">{title}</h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.path}
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="text-slate-400 hover:text-brand-400 transition-colors text-sm hover:translate-x-1 duration-300 inline-block"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact / Newsletter Column */}
          <div className="space-y-6">
            <h3 className="text-accent-500 font-bold uppercase tracking-widest text-[10px]">Reach Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-sm text-slate-400">
                <MapPin size={18} className="text-accent-500 shrink-0 mt-0.5" />
                <span>Plot No 14, Sector 44,<br />Gurgaon, Haryana 122003, India</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-slate-400">
                <Phone size={18} className="text-accent-500 shrink-0" />
                <span>+91 0124 400 1234</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-slate-400">
                <Mail size={18} className="text-accent-500 shrink-0" />
                <span>hello@clinkhr.com</span>
              </li>
            </ul>

            <div className="pt-4">
              <h3 className="text-white font-semibold text-sm mb-3">Subscribe to Newsletter</h3>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="bg-slate-900 text-white px-4 py-2.5 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-brand-500 w-full text-sm border border-slate-800"
                />
                <button className="bg-brand-600 hover:bg-brand-700 text-white px-4 py-2.5 rounded-r-lg transition-colors">
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright & Legal */}
        <div className="border-t border-slate-900 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-slate-500 text-sm">
            &copy; {currentYear} CLink HR. All rights reserved.
          </div>
          <div className="flex items-center space-x-6 text-sm text-slate-500">
            <a href="#privacy" className="hover:text-brand-400 transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-brand-400 transition-colors">Terms of Service</a>
            <a href="#cookies" className="hover:text-brand-400 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Helper Component for Social Links
const SocialLink = ({ href, icon, label }) => (
  <a
    href={href}
    aria-label={label}
    className="bg-slate-900 p-2 rounded-full text-slate-400 hover:bg-brand-600 hover:text-white transition-all duration-300 transform hover:scale-110"
  >
    {icon}
  </a>
);

export default Footer;
