import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavItem {
  name: string;
  path: string;
  dropdown?: { name: string; path: string; image?: string; description?: string }[];
}

const navLinks: NavItem[] = [
  { name: 'Home', path: '/' },
  {
    name: 'Galleries',
    path: '/gallery',
    dropdown: [
      { name: 'Weddings', path: '/gallery?category=weddings', image: 'assets/decor/28ecb6db-7db5-4124-8dcc-5b7515cb104f.jpg', description: 'Elegant wedding celebrations' },
      { name: 'Birthdays', path: '/gallery?category=birthdays', image: 'assets/decor/4b02ed24-c7cc-4afb-a621-935451414aed.jpg', description: 'Memorable birthday parties' },
      { name: 'Graduation', path: '/gallery?category=graduation', image: 'assets/decor/f26b442a-66cd-4981-837e-f68e9a7a9864.jpg', description: 'Achievement celebrations' },
      { name: 'Corporate', path: '/gallery?category=corporate', image: 'assets/decor/458134e4-e1fc-4014-a0a2-3559561829f5.jpg', description: 'Professional events' },
      { name: 'Debut', path: '/gallery?category=debut', image: 'assets/decor/28ecb6db-7db5-4124-8dcc-5b7515cb104f.jpg', description: 'Coming of age celebrations' },
    ],
  },
  { name: 'Services', path: '/services' },
  { name: 'Packages', path: '/packages' },
  { name: 'Contact', path: '/contact' },
];

const easeOutExpo: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
    setMobileAccordion(null);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const transparent = isHome && !scrolled;

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.9, ease: easeOutExpo }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          transparent
            ? 'bg-transparent'
            : 'bg-pearl/85 backdrop-blur-2xl border-b border-champagne/10'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
          <div className="flex items-center justify-between h-20 lg:h-[88px]">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3.5 group">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
                transparent 
                  ? 'bg-white/8 backdrop-blur-xl border border-white/15' 
                  : 'bg-matte-black'
              }`}>
                <span className={`font-heading text-lg italic transition-colors duration-500 ${
                  transparent ? 'text-champagne' : 'text-champagne-gold'
                }`}>JB</span>
              </div>
              <div className="flex flex-col">
                <span className={`font-heading text-xl leading-tight tracking-normal transition-colors duration-500 ${
                  transparent ? 'text-white' : 'text-matte-black'
                }`}>
                  JB's Creation
                </span>
                <span className={`text-[9px] tracking-[0.3em] uppercase mt-0.5 font-medium transition-colors duration-500 ${
                  transparent ? 'text-white/50' : 'text-champagne-gold'
                }`}>
                  Luxury Events
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-0.5" ref={dropdownRef}>
              {navLinks.map((link) => {
                const active = location.pathname === link.path || 
                  (link.dropdown && location.pathname.includes(link.path.split('?')[0]));
                const hasDropdown = !!link.dropdown;

                return (
                  <div 
                    key={link.name} 
                    className="relative"
                    onMouseEnter={() => hasDropdown && setActiveDropdown(link.name)}
                    onMouseLeave={() => hasDropdown && setActiveDropdown(null)}
                  >
                    <Link
                      to={link.path}
                      className={`group relative flex items-center gap-1 px-4 py-2.5 text-[11px] font-medium tracking-[0.14em] uppercase transition-all duration-400 ${
                        active
                          ? (transparent ? 'text-white' : 'text-matte-black')
                          : (transparent ? 'text-white/70 hover:text-white' : 'text-warm-gray hover:text-matte-black')
                      }`}
                    >
                      <span className="relative">
                        {link.name}
                        <span className={`absolute -bottom-1 left-0 h-[1.5px] bg-champagne-gold transition-all duration-400 ${
                          active ? 'w-full' : 'w-0 group-hover:w-full'
                        }`} />
                      </span>
                      {hasDropdown && (
                        <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${
                          activeDropdown === link.name ? 'rotate-180' : ''
                        }`} />
                      )}
                    </Link>

                    {/* Mega Dropdown */}
                    <AnimatePresence>
                      {hasDropdown && activeDropdown === link.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.25, ease: easeOutExpo }}
                          className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50"
                        >
                          <div className="bg-white rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] border border-champagne/12 overflow-hidden min-w-[480px]">
                            <div className="p-5">
                              <div className="grid grid-cols-2 gap-1.5">
                                {link.dropdown?.map((item, idx) => (
                                  <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.04, duration: 0.25 }}
                                  >
                                    <Link
                                      to={item.path}
                                      className="group/item flex items-center gap-3.5 p-3 rounded-xl hover:bg-soft-beige transition-colors duration-250"
                                    >
                                      {item.image && (
                                        <div className="w-14 h-14 rounded-lg overflow-hidden shrink-0 ring-1 ring-champagne/15">
                                          <img 
                                            src={item.image} 
                                            alt={item.name}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover/item:scale-110"
                                          />
                                        </div>
                                      )}
                                      <div className="flex-1 min-w-0">
                                        <span className="block text-[13px] font-medium text-matte-black group-hover/item:text-champagne-gold transition-colors">
                                          {item.name}
                                        </span>
                                        {item.description && (
                                          <span className="block text-[11px] text-warm-gray mt-0.5 leading-relaxed">
                                            {item.description}
                                          </span>
                                        )}
                                      </div>
                                    </Link>
                                  </motion.div>
                                ))}
                              </div>
                              <div className="mt-3 pt-3 border-t border-champagne/10">
                                <Link 
                                  to={link.path}
                                  className="flex items-center justify-center gap-2 text-[10px] font-medium tracking-[0.15em] uppercase text-champagne-gold hover:text-dark-gold transition-colors py-1"
                                >
                                  View All Galleries
                                  <ArrowRight className="w-3 h-3" />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* Book Now Button (desktop) */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            >
              <Link
                to="/contact"
                className={`hidden lg:inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-[10px] font-semibold tracking-[0.18em] uppercase transition-all duration-500 ${
                  transparent
                    ? 'bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-white hover:text-matte-black'
                    : 'bg-matte-black text-white hover:bg-champagne-gold'
                }`}
              >
                Book Now
                <ArrowRight className="w-3 h-3" />
              </Link>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.92 }}
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden relative w-11 h-11 flex items-center justify-center rounded-full transition-all duration-300 ${
                transparent 
                  ? 'bg-white/10 backdrop-blur-xl border border-white/15 text-white' 
                  : 'bg-soft-beige text-matte-black'
              }`}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-4.5 h-4.5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-4.5 h-4.5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="fixed inset-0 z-40 bg-matte-black/50 backdrop-blur-sm lg:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Slide-in Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.45, ease: easeOutExpo }}
              className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm bg-pearl shadow-[-8px_0_40px_-10px_rgba(0,0,0,0.2)] lg:hidden overflow-y-auto"
            >
              {/* Close Button */}
              <div className="sticky top-0 flex justify-between items-center px-6 py-5 bg-pearl/90 backdrop-blur-xl z-10">
                <span className="font-heading text-lg text-matte-black">Menu</span>
                <motion.button
                  whileTap={{ scale: 0.92 }}
                  onClick={() => setIsOpen(false)}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-soft-beige text-matte-black"
                >
                  <X className="w-4 h-4" />
                </motion.button>
              </div>

              {/* Mobile Nav Links */}
              <div className="px-6 pb-10">
                <nav className="space-y-0">
                  {navLinks.map((link, i) => {
                    const hasDropdown = !!link.dropdown;
                    const isAccordionOpen = mobileAccordion === link.name;

                    return (
                      <motion.div
                        key={link.name}
                        initial={{ opacity: 0, x: 24 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.08 + i * 0.04, duration: 0.35 }}
                      >
                        {hasDropdown ? (
                          <div>
                            <button
                              onClick={() => setMobileAccordion(isAccordionOpen ? null : link.name)}
                              className="w-full flex items-center justify-between py-4 border-b border-champagne/12"
                            >
                              <span className="font-heading text-[22px] text-matte-black">
                                {link.name}
                              </span>
                              <ChevronDown className={`w-4 h-4 text-warm-gray transition-transform duration-300 ${
                                isAccordionOpen ? 'rotate-180' : ''
                              }`} />
                            </button>
                            <AnimatePresence>
                              {isAccordionOpen && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: 'auto', opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.3, ease: easeOutExpo }}
                                  className="overflow-hidden"
                                >
                                  <div className="py-3 pl-1 space-y-0.5">
                                    {link.dropdown?.map((item) => (
                                      <Link
                                        key={item.name}
                                        to={item.path}
                                        className="flex items-center gap-3 py-2.5 text-warm-gray hover:text-champagne-gold transition-colors"
                                      >
                                        {item.image && (
                                          <div className="w-9 h-9 rounded-lg overflow-hidden shrink-0 ring-1 ring-champagne/15">
                                            <img 
                                              src={item.image} 
                                              alt={item.name}
                                              className="w-full h-full object-cover"
                                            />
                                          </div>
                                        )}
                                        <span className="text-[14px]">{item.name}</span>
                                      </Link>
                                    ))}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ) : (
                          <Link
                            to={link.path}
                            className={`block py-4 font-heading text-[22px] border-b border-champagne/12 transition-colors ${
                              location.pathname === link.path 
                                ? 'text-champagne-gold' 
                                : 'text-matte-black hover:text-champagne-gold'
                            }`}
                          >
                            {link.name}
                          </Link>
                        )}
                      </motion.div>
                    );
                  })}
                </nav>

                {/* Mobile CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35, duration: 0.35 }}
                  className="mt-8"
                >
                  <Link
                    to="/contact"
                    className="flex items-center justify-center gap-2.5 w-full py-4 bg-matte-black text-white text-[11px] tracking-[0.2em] uppercase font-medium rounded-full"
                  >
                    Book Consultation
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </motion.div>

                {/* Contact Info */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.45, duration: 0.35 }}
                  className="mt-10 pt-6 border-t border-champagne/12"
                >
                  <p className="text-[9px] tracking-[0.25em] uppercase text-warm-gray-light mb-3">Contact</p>
                  <p className="text-warm-gray text-[13px]">hello@jbscreation.com</p>
                  <p className="text-warm-gray text-[13px] mt-1">+63 991 855 0522</p>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
