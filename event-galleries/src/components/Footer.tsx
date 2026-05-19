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
    <footer className="bg-matte-black pt-28 lg:pt-32 pb-10 px-6 lg:px-12 relative overflow-hidden">
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-champagne-gold/40 to-transparent" />

      {/* Ambient Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 left-1/4 w-150 h-100 rounded-full bg-champagne-gold/5 blur-[180px]" />
        <div className="absolute bottom-0 right-1/4 w-125 h-75 rounded-full bg-champagne/5 blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Newsletter band */}
        <div className="grid lg:grid-cols-2 gap-10 items-center pb-16 mb-16 border-b border-white/10">
          <div>
            <span className="text-champagne-gold text-[11px] tracking-[0.4em] uppercase block mb-3">
              Stay Inspired
            </span>
            <h3 className="font-heading text-3xl md:text-4xl text-white leading-[1.2]">
              Subscribe to receive{' '}
              <span className="italic font-subheading text-champagne">curated inspiration</span>
            </h3>
          </div>
          <form onSubmit={handleSubscribe} className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="w-full pl-6 pr-36 py-5 bg-white/4 border border-white/10 rounded-full text-white placeholder:text-white/30 focus:outline-none focus:border-champagne-gold/50 transition-colors text-sm"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-3 bg-champagne-gold text-white text-[11px] tracking-[0.2em] uppercase rounded-full hover:bg-dark-gold transition-colors flex items-center gap-2"
            >
              {subscribed ? 'Thanks!' : 'Subscribe'}
              <Send className="w-3 h-3" />
            </button>
          </form>
        </div>

        {/* Main columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-10 h-10 rounded-full bg-charcoal border border-champagne-gold/30 flex items-center justify-center">
                <span className="font-heading italic text-champagne-gold text-lg">JB</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-heading text-xl text-white">JB's Creation</span>
                <span className="text-[10px] tracking-[0.3em] uppercase text-champagne-gold mt-1">Luxury Events</span>
              </div>
            </Link>
            <p className="text-white/50 text-sm leading-[1.8] font-light mb-8 max-w-sm">
              Crafting extraordinary celebrations since 2012. Every detail considered, every moment cherished.
            </p>
            <div className="flex gap-3">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:border-champagne-gold hover:text-champagne-gold hover:-translate-y-0.5 transition-all duration-300"
                >
                  <Icon className="w-4 h-4" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-champagne-gold text-[10px] tracking-[0.3em] uppercase mb-6">Navigation</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-white/60 text-sm hover:text-champagne-gold hover:pl-2 inline-block transition-all duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="text-champagne-gold text-[10px] tracking-[0.3em] uppercase mb-6">Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <span className="text-white/60 text-sm hover:text-champagne-gold hover:pl-2 inline-block transition-all duration-300 cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3">
            <h4 className="text-champagne-gold text-[10px] tracking-[0.3em] uppercase mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-champagne-gold mt-0.5 shrink-0" strokeWidth={1.5} />
                <span className="text-white/60 text-sm leading-relaxed">
                  Brgy.Marga, Tubod<br />Surigao del Norte, Philippines
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-champagne-gold shrink-0" strokeWidth={1.5} />
                <span className="text-white/60 text-sm">+63 991 855 0522 / +63 970 337 9468</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-champagne-gold shrink-0" strokeWidth={1.5} />
                <span className="text-white/60 text-sm">hello@jbcreations.com</span>
              </li>
            </ul>
          </div>
          
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs tracking-wide">
            © 2026 JB's Creations. Crafted with elegance. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-white/30 text-xs hover:text-champagne-gold transition-colors">Privacy</a>
            <a href="#" className="text-white/30 text-xs hover:text-champagne-gold transition-colors">Terms</a>
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="p-2.5 rounded-full border border-white/10 text-white/50 hover:border-champagne-gold hover:text-champagne-gold hover:-translate-y-0.5 transition-all duration-300"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
          <p className="text-white/30 text-xs tracking-wide">
            Powered by <a href="https://riguel-portfolio.vercel.app" target="_blank" rel="noopener noreferrer" className="text-champagne-gold hover:underline">Riguel</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
