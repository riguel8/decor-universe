import { motion } from 'framer-motion';
import { Palette, Flower2, Frame, CircleDot, UtensilsCrossed, Music, Calendar, Camera, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { services } from '../data';

const iconMap: Record<string, React.ElementType> = {
  Palette, Flower2, Frame, CircleDot, UtensilsCrossed, Music, Calendar, Camera,
};

export default function ServicesPage() {
  return (
    <div className="pt-20 lg:pt-[88px]">
      {/* Page Header */}
      <section className="py-24 lg:py-28 px-6 lg:px-16 bg-matte-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="/assets/decor/4f2dc859-1b92-41f2-99e0-e27f2d882e83.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-linear-to-b from-matte-black/60 via-matte-black/80 to-matte-black" />

        <div className="relative z-10 max-w-[1400px] mx-auto">
          <motion.div initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px bg-champagne-gold/60" />
            <span className="text-champagne-gold/80 text-[10px] tracking-[0.35em] uppercase font-medium">What We Offer</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mb-5 leading-[1.05]">
            Our <span className="italic font-subheading text-champagne">Services</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-white/45 text-[15px] max-w-lg leading-[1.8]">
            Comprehensive event styling crafted to bring your vision to life with unmatched elegance.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-20 px-6 lg:px-16 bg-pearl">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon] || Palette;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.06 }}
                  className="group p-7 rounded-2xl bg-white border border-champagne/12 hover:border-champagne-gold/20 transition-all duration-500"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-soft-beige flex items-center justify-center group-hover:bg-champagne-gold/10 transition-colors duration-400">
                      <Icon className="w-5.5 h-5.5 text-champagne-gold" strokeWidth={1.5} />
                    </div>
                    <span className="text-champagne/60 text-[10px] tracking-[0.3em] font-heading mt-1">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="font-heading text-xl text-matte-black mb-3 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-warm-gray text-[14px] leading-[1.7] mb-5">
                    {service.description}
                  </p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 text-champagne-gold text-[12px] font-medium hover:text-dark-gold transition-colors group/link"
                  >
                    Learn More
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-24 px-6 lg:px-16 bg-soft-beige">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="w-8 h-px bg-champagne-gold" />
              <span className="text-champagne-gold text-[10px] tracking-[0.35em] uppercase font-medium">Let's Begin</span>
              <div className="w-8 h-px bg-champagne-gold" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl text-matte-black mb-5 leading-[1.1]">
              Ready to create{' '}
              <span className="italic font-subheading text-champagne-gold">something extraordinary?</span>
            </h2>
            <p className="text-warm-gray text-[15px] mb-8 leading-[1.8] max-w-xl mx-auto">
              Let's discuss how we can transform your event into an unforgettable experience.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-matte-black text-white text-[10px] tracking-[0.2em] uppercase font-medium rounded-full hover:bg-champagne-gold transition-colors duration-400"
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
