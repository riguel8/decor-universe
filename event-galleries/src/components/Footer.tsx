import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ArrowUp, Instagram, Facebook, Linkedin, Send } from 'lucide-react';
import { useState } from 'react';

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Services', path: '/services' },
  { name: 'Packages', path: '/packages' },
  { name: 'Contact', path: '/contact' },
];

const serviceLinks = [
  'Event Styling',
  'Floral Design',
  'Backdrop Creation',
  'Balloon Styling',
  'Table Setup',
  'Event Coordination',
];

const socials = [
  { Icon: Instagram, href: '#', label: 'Instagram' },
  { Icon: Facebook, href: '#', label: 'Facebook' },
  { Icon: Linkedin, href: '#', label: 'LinkedIn' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-matte-black pt-20 lg:pt-24 pb-8 px-6 lg:px-16 relative">
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-white/6" />

      <div className="max-w-[1400px] mx-auto">
        {/* Newsletter band */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 pb-14 mb-14 border-b border-white/8">
          <div className="max-w-md">
            <span className="text-champagne-gold text-[9px] tracking-[0.3em] uppercase block mb-2.5">
              Stay Inspired
            </span>
            <h3 className="font-heading text-2xl md:text-3xl text-white leading-[1.15]">
              Subscribe for{' '}
              <span className="italic font-subheading text-champagne">curated inspiration</span>
            </h3>
          </div>
          <form onSubmit={handleSubscribe} className="relative max-w-md w-full">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="w-full pl-5 pr-32 py-4 bg-white/4 border border-white/8 rounded-full text-white placeholder:text-white/25 focus:outline-none focus:border-champagne-gold/40 transition-colors text-[13px]"
            />
            <button
              type="submit"
              className="absolute right-1.5 top-1/2 -translate-y-1/2 px-5 py-2.5 bg-champagne-gold text-white text-[10px] tracking-[0.15em] uppercase font-medium rounded-full hover:bg-dark-gold transition-colors flex items-center gap-1.5"
            >
              {subscribed ? 'Thanks!' : 'Subscribe'}
              <Send className="w-3 h-3" />
            </button>
          </form>
        </div>

        {/* Main columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-14">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-full bg-white/6 flex items-center justify-center">
                <span className="font-heading italic text-champagne-gold text-base">JB</span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-lg text-white leading-tight">JB's Creation</span>
                <span className="text-[8px] tracking-[0.25em] uppercase text-white/30 mt-0.5">Luxury Events</span>
              </div>
            </Link>
            <p className="text-white/35 text-[13px] leading-[1.7] mb-6 max-w-xs">
              Crafting extraordinary celebrations since 2012. Every detail considered, every moment cherished.
            </p>
            <div className="flex gap-2">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-white/8 flex items-center justify-center text-white/35 hover:border-white/20 hover:text-white/70 transition-all duration-300"
                >
                  <Icon className="w-3.5 h-3.5" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-white/25 text-[9px] tracking-[0.25em] uppercase mb-5">Navigation</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-white/50 text-[13px] hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="text-white/25 text-[9px] tracking-[0.25em] uppercase mb-5">Services</h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <span className="text-white/50 text-[13px] hover:text-white transition-colors duration-300 cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3">
            <h4 className="text-white/25 text-[9px] tracking-[0.25em] uppercase mb-5">Contact</h4>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-white/30 mt-0.5 shrink-0" strokeWidth={1.5} />
                <span className="text-white/50 text-[13px] leading-relaxed">
                  Brgy. Marga, Tubod<br />Surigao del Norte, Philippines
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-white/30 shrink-0" strokeWidth={1.5} />
                <span className="text-white/50 text-[13px]">+63 991 855 0522</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-white/30 shrink-0" strokeWidth={1.5} />
                <span className="text-white/50 text-[13px]">hello@jbscreation.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/6 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/20 text-[11px] tracking-wide">
            © 2026 JB's Creations. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <a href="#" className="text-white/20 text-[11px] hover:text-white/50 transition-colors">Privacy</a>
            <a href="#" className="text-white/20 text-[11px] hover:text-white/50 transition-colors">Terms</a>
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="p-2 rounded-full border border-white/8 text-white/30 hover:border-white/20 hover:text-white/60 transition-all duration-300"
            >
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
          <p className="text-white/20 text-[11px] tracking-wide">
            Powered by <a href="https://riguel-portfolio.vercel.app" target="_blank" rel="noopener noreferrer" className="text-champagne-gold/60 hover:text-champagne-gold transition-colors">Riguel</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
