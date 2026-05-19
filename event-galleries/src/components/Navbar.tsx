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
    const handleScroll = () => setScrolled(window.scrollY > 50);
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
        transition={{ duration: 0.8, ease: easeOutExpo }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          transparent
            ? 'bg-transparent'
            : 'bg-ivory/80 backdrop-blur-2xl shadow-[0_1px_0_0_rgba(212,175,55,0.1),0_4px_30px_-5px_rgba(0,0,0,0.08)]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-4 group">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                className={`w-11 h-11 rounded-full flex items-center justify-center transition-all duration-700 ${
                  transparent 
                    ? 'bg-white/10 backdrop-blur-xl border border-white/25 shadow-[0_0_30px_rgba(255,255,255,0.1)]' 
                    : 'bg-linear-to-br from-matte-black to-charcoal shadow-[0_4px_20px_-4px_rgba(0,0,0,0.3)]'
                }`}
              >
                <span className={`font-heading text-xl italic transition-colors duration-500 ${
                  transparent ? 'text-champagne' : 'text-champagne-gold'
                }`}>JB</span>
              </motion.div>
              <div className="flex flex-col leading-none">
                <span className={`font-heading text-[22px] font-medium tracking-wide transition-colors duration-500 ${
                  transparent ? 'text-white' : 'text-matte-black'
                }`}>
                  JB's Creation
                </span>
                <span className={`text-[9px] tracking-[0.35em] uppercase mt-1.5 font-medium transition-colors duration-500 ${
                  transparent ? 'text-champagne/90' : 'text-champagne-gold'
                }`}>
                  Luxury Events
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1" ref={dropdownRef}>
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
                      className={`group relative flex items-center gap-1.5 px-5 py-3 text-[12px] font-medium tracking-[0.18em] uppercase transition-all duration-500 ${
                        active
                          ? (transparent ? 'text-champagne' : 'text-champagne-gold')
                          : (transparent ? 'text-white/90 hover:text-white' : 'text-charcoal/80 hover:text-matte-black')
                      }`}
                    >
                      <span className="relative">
                        {link.name}
                        <span className={`absolute -bottom-1 left-0 h-px bg-champagne-gold transition-all duration-500 ${
                          active ? 'w-full' : 'w-0 group-hover:w-full'
                        }`} />
                      </span>
                      {hasDropdown && (
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${
                          activeDropdown === link.name ? 'rotate-180' : ''
                        }`} />
                      )}
                    </Link>

                    {/* Mega Dropdown */}
                    <AnimatePresence>
                      {hasDropdown && activeDropdown === link.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.98 }}
                          transition={{ duration: 0.3, ease: easeOutExpo }}
                          className="absolute top-full left-1/2 -translate-x-1/2 pt-4 z-50"
                        >
                          <div className="bg-white/95 backdrop-blur-2xl rounded-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.2)] border border-champagne/20 overflow-hidden min-w-120">
                            <div className="p-6">
                              <div className="grid grid-cols-2 gap-3">
                                {link.dropdown?.map((item, idx) => (
                                  <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.05, duration: 0.3 }}
                                  >
                                    <Link
                                      to={item.path}
                                      className="group flex items-center gap-4 p-3 rounded-xl hover:bg-champagne/10 transition-all duration-300"
                                    >
                                      {item.image && (
                                        <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0">
                                          <img 
                                            src={item.image} 
                                            alt={item.name}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                          />
                                        </div>
                                      )}
                                      <div className="flex-1 min-w-0">
                                        <span className="block text-sm font-medium text-matte-black group-hover:text-champagne-gold transition-colors">
                                          {item.name}
                                        </span>
                                        {item.description && (
                                          <span className="block text-xs text-warm-gray mt-0.5 truncate">
                                            {item.description}
                                          </span>
                                        )}
                                      </div>
                                      <ArrowRight className="w-4 h-4 text-champagne-gold opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                                    </Link>
                                  </motion.div>
                                ))}
                              </div>
                              <div className="mt-4 pt-4 border-t border-champagne/15">
                                <Link 
                                  to={link.path}
                                  className="flex items-center justify-center gap-2 text-xs font-medium tracking-[0.15em] uppercase text-champagne-gold hover:text-dark-gold transition-colors"
                                >
                                  View All Galleries
                                  <ArrowRight className="w-3.5 h-3.5" />
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
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            >
              <Link
                to="/contact"
                className={`hidden lg:inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-[11px] font-semibold tracking-[0.2em] uppercase transition-all duration-500 ${
                  transparent
                    ? 'bg-white/10 backdrop-blur-xl border border-white/25 text-white hover:bg-white hover:text-matte-black shadow-[0_0_30px_rgba(255,255,255,0.1)]'
                    : 'bg-linear-to-r from-champagne-gold to-gold text-white shadow-[0_4px_20px_-4px_rgba(212,175,55,0.5)] hover:shadow-[0_8px_30px_-4px_rgba(212,175,55,0.6)]'
                }`}
              >
                Book Now
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden relative w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300 ${
                transparent 
                  ? 'bg-white/10 backdrop-blur-xl border border-white/20 text-white' 
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
                    <X className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-5 h-5" />
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
              transition={{ duration: 0.4 }}
              className="fixed inset-0 z-40 bg-matte-black/60 backdrop-blur-sm lg:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Slide-in Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.5, ease: easeOutExpo }}
              className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-md bg-ivory/98 backdrop-blur-2xl shadow-[-20px_0_60px_-15px_rgba(0,0,0,0.3)] lg:hidden overflow-y-auto"
            >
              {/* Close Button */}
              <div className="sticky top-0 flex justify-end p-6 bg-ivory/80 backdrop-blur-xl z-10">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsOpen(false)}
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-soft-beige text-matte-black"
                >
                  <X className="w-5 h-5" />
                </motion.button>
              </div>

              {/* Mobile Nav Links */}
              <div className="px-8 pb-12">
                <nav className="space-y-2">
                  {navLinks.map((link, i) => {
                    const hasDropdown = !!link.dropdown;
                    const isAccordionOpen = mobileAccordion === link.name;

                    return (
                      <motion.div
                        key={link.name}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
                      >
                        {hasDropdown ? (
                          <div>
                            <button
                              onClick={() => setMobileAccordion(isAccordionOpen ? null : link.name)}
                              className="w-full flex items-center justify-between py-4 border-b border-champagne/15"
                            >
                              <span className="font-heading text-2xl text-matte-black">
                                {link.name}
                              </span>
                              <ChevronDown className={`w-5 h-5 text-champagne-gold transition-transform duration-300 ${
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
                                  <div className="py-3 pl-4 space-y-1">
                                    {link.dropdown?.map((item) => (
                                      <Link
                                        key={item.name}
                                        to={item.path}
                                        className="flex items-center gap-3 py-3 text-warm-gray hover:text-champagne-gold transition-colors"
                                      >
                                        {item.image && (
                                          <div className="w-10 h-10 rounded-lg overflow-hidden shrink-0">
                                            <img 
                                              src={item.image} 
                                              alt={item.name}
                                              className="w-full h-full object-cover"
                                            />
                                          </div>
                                        )}
                                        <span className="font-medium">{item.name}</span>
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
                            className={`block py-4 font-heading text-2xl border-b border-champagne/15 transition-colors ${
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
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                  className="mt-10"
                >
                  <Link
                    to="/contact"
                    className="flex items-center justify-center gap-3 w-full py-5 bg-linear-to-r from-champagne-gold to-gold text-white text-[12px] tracking-[0.25em] uppercase font-semibold rounded-full shadow-[0_8px_30px_-4px_rgba(212,175,55,0.4)]"
                  >
                    Book Consultation
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>

                {/* Contact Info */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                  className="mt-12 pt-8 border-t border-champagne/20"
                >
                  <p className="text-[10px] tracking-[0.3em] uppercase text-champagne-gold mb-4">Contact</p>
                  <p className="text-warm-gray text-sm">hello@decoruniverse.com</p>
                  <p className="text-warm-gray text-sm mt-1">+63 917 123 4567</p>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
