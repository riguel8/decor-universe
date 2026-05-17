import { motion } from 'framer-motion';
import { Palette, Flower2, Frame, CircleDot, UtensilsCrossed, Music, Calendar, Camera, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { services } from '../data';

const iconMap: Record<string, React.ElementType> = {
  Palette,
  Flower2,
  Frame,
  CircleDot,
  UtensilsCrossed,
  Music,
  Calendar,
  Camera,
};

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="py-32 px-6 bg-matte-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <img
            src="/assets/decor/4f2dc859-1b92-41f2-99e0-e27f2d882e83.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-linear-to-b from-matte-black/70 via-matte-black/80 to-matte-black" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-champagne-gold/10 blur-[120px]" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="w-10 h-px bg-champagne-gold/50" />
            <span className="text-champagne-gold text-[11px] tracking-[0.4em] uppercase font-medium">
              What We Offer
            </span>
            <div className="w-10 h-px bg-champagne-gold/50" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-heading text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-[1.05]"
          >
            Our{' '}
            <span className="italic font-subheading text-champagne">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-white/60 text-base md:text-lg max-w-2xl mx-auto leading-[1.8] font-light"
          >
            Comprehensive event styling crafted to bring your vision to life with unmatched elegance.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 bg-soft-beige">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon] || Palette;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="group p-8 rounded-2xl bg-white border border-champagne/20 hover:shadow-xl hover:shadow-champagne-gold/10 hover:border-champagne-gold/30 transition-all duration-500"
                >
                  <div className="w-16 h-16 mb-6 rounded-2xl bg-champagne/20 flex items-center justify-center group-hover:bg-champagne-gold/20 transition-colors duration-300">
                    <Icon className="w-7 h-7 text-champagne-gold" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-matte-black mb-3">
                    {service.title}
                  </h3>
                  <p className="text-warm-gray leading-relaxed mb-5">
                    {service.description}
                  </p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-champagne-gold text-sm font-medium hover:text-dark-gold transition-colors group/link"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-pearl relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-champagne-gold/5 blur-[120px]" />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-champagne-gold text-[11px] tracking-[0.4em] uppercase block mb-5">Let's Begin</span>
            <h2 className="font-heading text-4xl md:text-5xl text-charcoal mb-6 leading-[1.1]">
              Ready to create{' '}
              <span className="italic font-subheading text-champagne-gold">something extraordinary?</span>
            </h2>
            <p className="text-warm-gray text-base md:text-lg mb-10 leading-[1.8] font-light max-w-2xl mx-auto">
              Let's discuss how we can transform your event into an unforgettable experience.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-10 py-4 bg-charcoal text-pearl text-[11px] tracking-[0.25em] uppercase font-medium rounded-full hover:bg-champagne-gold transition-all duration-500 hover:shadow-[0_20px_50px_-15px_rgba(201,169,110,0.5)]"
            >
              Book a Consultation
              <ArrowRight className="w-3 h-3" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
