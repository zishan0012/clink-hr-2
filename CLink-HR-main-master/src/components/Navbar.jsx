
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { NAVIGATION } from '../constants';

const MobileNavItem = ({ item, setIsOpen }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasChildren = item.children && item.children.length > 0;

  return (
    <div className="w-full overflow-hidden">
      <div className="flex items-center justify-between py-0.5 px-1 hover:bg-brand-50/50 rounded-lg transition-colors group">
        <Link
          to={item.path}
          onClick={() => {
            setIsOpen(false);
            document.body.style.overflow = 'unset';
          }}
          className={`flex-1 py-3 text-base font-bold tracking-tight ${hasChildren ? 'text-slate-900' : 'text-slate-600'}`}
        >
          {item.label}
        </Link>
        {hasChildren && (
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsExpanded(!isExpanded);
            }}
            className={`p-2.5 rounded-lg transition-all ${isExpanded ? 'bg-brand-50 text-brand-600' : 'text-slate-400 group-hover:text-brand-500'}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </button>
        )}
      </div>

      {hasChildren && isExpanded && (
        <div className="pl-4 mt-1 border-l border-slate-100 ml-2 space-y-1 transition-all duration-300">
          {item.children.map((child) => (
            <MobileNavItem key={child.label} item={child} setIsOpen={setIsOpen} />
          ))}
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) { // lg breakpoint
        setIsOpen(false);
        document.body.style.overflow = 'unset';
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="bg-white/90 backdrop-blur-lg border-b border-slate-100 sticky top-0 z-50 transition-all duration-300">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex-shrink-0 flex items-center gap-2 cursor-pointer transition-opacity hover:opacity-90">
              <img src="/clink-logo.png" alt="CLink HR Services" className="h-14 w-auto" />
            </Link>
          </div>

          <div className="hidden lg:flex lg:items-center lg:gap-4 lg:flex-1 lg:justify-center">
            {NAVIGATION.map((item) => (
              <div key={item.label} className="relative group flex items-center h-full">
                <Link to={item.path} className="text-slate-600 hover:text-brand-600 px-2 py-2 text-base font-bold capitalize tracking-tight transition-colors flex items-center gap-1 whitespace-nowrap">
                  {item.label}
                  {item.children && (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  )}
                </Link>
                {item.children && (
                  <div className="absolute top-full left-0 w-64 bg-white border border-brand-50 shadow-xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top translate-y-2 group-hover:translate-y-0 py-2">
                    {item.children.map((child) => (
                      <div key={child.label} className="relative group/sub">
                        <Link to={child.path} className="flex justify-between items-center px-4 py-3 text-sm text-slate-600 hover:bg-brand-50 hover:text-brand-700 transition-colors">
                          {child.label}
                          {child.children && (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3 -rotate-90">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                          )}
                        </Link>
                        {child.children && (
                          <div className="absolute top-0 left-full w-64 bg-white border border-brand-50 shadow-xl rounded-xl opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200 transform origin-left -translate-x-2 group-hover/sub:translate-x-0 py-2 ml-1">
                            {child.children.map((subChild) => (
                              <Link key={subChild.label} to={subChild.path} className="block px-4 py-3 text-sm text-slate-600 hover:bg-brand-50 hover:text-brand-700 transition-colors">
                                {subChild.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="hidden lg:flex items-center">
            <Link to="/contact/hire-talent" className="bg-brand-600 text-white px-8 py-3 rounded-full font-bold text-sm tracking-tight hover:bg-brand-500 transition-all shadow-lg hover:shadow-brand-500/20 active:scale-95 flex items-center gap-2 group">
              Get Started <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => {
                setIsOpen(!isOpen);
                if (!isOpen) document.body.style.overflow = 'hidden';
                else document.body.style.overflow = 'unset';
              }}
              className="text-slate-600 hover:text-brand-500 p-2 transition-colors"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="fixed inset-x-0 top-[80px] bg-white border-t border-slate-100 h-[calc(100vh-80px)] overflow-y-auto overflow-x-hidden z-[60] lg:hidden animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="w-full px-4 pt-4 pb-32 space-y-1">
            {NAVIGATION.map((item) => (
              <MobileNavItem
                key={item.label}
                item={item}
                setIsOpen={(val) => {
                  setIsOpen(val);
                  if (!val) document.body.style.overflow = 'unset';
                }}
              />
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
