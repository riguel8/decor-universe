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
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 px-6 lg:px-16 bg-pearl">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16 lg:mb-20">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease: easeOutExpo }}
              className="flex items-center gap-3 mb-5"
            >
              <div className="w-8 h-px bg-champagne-gold" />
              <span className="text-champagne-gold text-[10px] tracking-[0.35em] uppercase font-medium">
                The Art of Detail
              </span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.1, ease: easeOutExpo }}
              className="font-heading text-3xl md:text-4xl lg:text-5xl text-matte-black mb-5 leading-[1.08]"
            >
              Our{' '}
              <span className="italic font-subheading text-champagne-gold">Services</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2, ease: easeOutExpo }}
              className="text-warm-gray text-[15px] leading-[1.8]"
            >
              A comprehensive suite of event craftsmanship — from concept to celebration.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4, ease: easeOutExpo }}
          >
            <Link
              to="/services"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-matte-black text-white text-[10px] tracking-[0.2em] uppercase font-medium rounded-full hover:bg-champagne-gold transition-colors duration-400"
            >
              View All Services
              <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Palette;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 32 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.1 + index * 0.06, ease: easeOutExpo }}
              >
                <div className="group h-full p-7 bg-white rounded-2xl border border-champagne/12 hover:border-champagne-gold/20 transition-all duration-500">
                  {/* Icon + Number row */}
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

                  <div className="w-6 h-[1.5px] bg-champagne-gold/40 group-hover:w-10 group-hover:bg-champagne-gold transition-all duration-500" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
