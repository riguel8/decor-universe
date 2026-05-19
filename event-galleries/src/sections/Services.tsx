import { motion, useInView } from 'framer-motion';
import { Palette, Flower2, Frame, CircleDot, UtensilsCrossed, Music, Calendar, Camera, ArrowRight } from 'lucide-react';
import { services } from '../data';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

const iconMap: Record<string, React.ElementType> = {
  Palette, Flower2, Frame, CircleDot, UtensilsCrossed, Music, Calendar, Camera,
};

const easeOutExpo: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section ref={sectionRef} className="py-32 lg:py-40 px-6 lg:px-12 bg-soft-beige relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-150 h-150 rounded-full bg-champagne-gold/5 blur-[200px]" />
        <div className="absolute bottom-0 left-0 w-125 h-125 rounded-full bg-champagne/10 blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: easeOutExpo }}
            className="flex items-center justify-center gap-5 mb-8"
          >
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-12 h-px bg-linear-to-r from-transparent to-champagne-gold/60 origin-right"
            />
            <span className="text-champagne-gold text-[11px] tracking-[0.5em] uppercase font-semibold">
              The Art of Detail
            </span>
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-12 h-px bg-linear-to-l from-transparent to-champagne-gold/60 origin-left"
            />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: easeOutExpo }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-matte-black mb-8 leading-[1.05]"
          >
            Our{' '}
            <span className="italic font-subheading text-champagne-gold">Services</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: easeOutExpo }}
            className="text-warm-gray max-w-2xl mx-auto text-base md:text-lg lg:text-xl leading-[1.9] font-light"
          >
            A comprehensive suite of event craftsmanship — from concept to celebration.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Palette;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.08, ease: easeOutExpo }}
              >
                <div className="group relative h-full p-8 lg:p-10 bg-white/80 backdrop-blur-sm rounded-3xl border border-champagne/20 hover:border-champagne-gold/30 hover:bg-white transition-all duration-700 hover:shadow-[0_20px_60px_-15px_rgba(212,175,55,0.15)]">
                  {/* Corner Accent */}
                  <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="absolute top-5 right-5 w-8 h-px bg-linear-to-l from-champagne-gold to-transparent" />
                    <div className="absolute top-5 right-5 h-8 w-px bg-linear-to-b from-champagne-gold to-transparent" />
                  </div>

                  {/* Icon */}
                  <div className="relative mb-8 inline-block">
                    <div className="absolute inset-0 bg-champagne-gold/20 rounded-2xl blur-2xl scale-125 opacity-0 group-hover:opacity-100 transition-all duration-700" />
                    <div className="relative w-16 h-16 rounded-2xl bg-linear-to-br from-ivory to-champagne/30 border border-champagne/30 flex items-center justify-center group-hover:border-champagne-gold/50 group-hover:scale-105 group-hover:rotate-3 transition-all duration-500">
                      <Icon className="w-7 h-7 text-champagne-gold" strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Number */}
                  <div className="absolute top-8 right-8 font-heading text-champagne-gold/20 text-[11px] tracking-[0.4em] group-hover:text-champagne-gold/40 transition-colors duration-500">
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  <h3 className="font-heading text-xl lg:text-2xl text-matte-black mb-4 leading-tight group-hover:text-charcoal transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-warm-gray text-sm lg:text-base leading-[1.8] font-light mb-6">
                    {service.description}
                  </p>

                  {/* Animated Underline */}
                  <div className="w-8 h-0.5 bg-linear-to-r from-champagne-gold/50 to-transparent group-hover:w-16 group-hover:from-champagne-gold transition-all duration-700" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8, ease: easeOutExpo }}
          className="text-center mt-16 lg:mt-20"
        >
          <motion.div
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            className="inline-block"
          >
            <Link
              to="/services"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-matte-black text-white text-[11px] tracking-[0.3em] uppercase font-semibold rounded-full hover:bg-charcoal transition-all duration-500 shadow-[0_8px_30px_-8px_rgba(0,0,0,0.3)] hover:shadow-[0_16px_40px_-8px_rgba(0,0,0,0.4)]"
            >
              View All Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
