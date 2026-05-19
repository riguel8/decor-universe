import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { Check, ArrowRight, Sparkles } from 'lucide-react';
import { packages } from '../data';
import { useRef } from 'react';

const easeOutExpo: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function FeaturedPackages() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section ref={sectionRef} className="py-32 lg:py-40 px-6 lg:px-12 bg-ivory relative overflow-hidden">
      {/* Ambient Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-150 h-150 rounded-full bg-champagne-gold/8 blur-[180px]" />
        <div className="absolute -bottom-32 -left-32 w-125 h-125 rounded-full bg-champagne/15 blur-[150px]" />
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
              Exclusive Offerings
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
            Luxury{' '}
            <span className="italic font-subheading text-champagne-gold">Packages</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: easeOutExpo }}
            className="text-warm-gray max-w-2xl mx-auto text-base md:text-lg lg:text-xl leading-[1.9] font-light"
          >
            Thoughtfully curated experiences designed to elevate your most treasured occasions.
          </motion.p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.2 + index * 0.1, ease: easeOutExpo }}
              className={`relative group rounded-3xl overflow-hidden transition-all duration-700 hover:-translate-y-3 flex flex-col ${
                pkg.featured
                  ? 'bg-matte-black text-white shadow-[0_30px_80px_-20px_rgba(0,0,0,0.5)] ring-1 ring-champagne-gold/40'
                  : 'bg-white text-charcoal shadow-[0_15px_50px_-15px_rgba(0,0,0,0.08)] hover:shadow-[0_30px_70px_-20px_rgba(212,175,55,0.2)]'
              }`}
            >
              {/* Featured Badge */}
              {pkg.featured && (
                <div className="absolute top-5 right-5 z-20 flex items-center gap-2 px-4 py-2 bg-linear-to-r from-champagne-gold/20 to-gold/20 backdrop-blur-xl rounded-full border border-champagne-gold/40">
                  <Sparkles className="w-3.5 h-3.5 text-champagne-gold" />
                  <span className="text-champagne-gold text-[9px] tracking-[0.25em] uppercase font-semibold">Popular</span>
                </div>
              )}

              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />

                {/* Price tag */}
                <div className="absolute bottom-6 left-6">
                  <span className="text-[9px] text-champagne/70 tracking-[0.3em] uppercase block mb-1.5 font-medium">Starting at</span>
                  <span className="text-champagne font-heading text-3xl">
                    {pkg.price}
                  </span>
                </div>

                {/* Hover glow */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-20 bg-champagne-gold/30 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-1">
                <h3 className="font-heading text-2xl mb-4 leading-tight">{pkg.name}</h3>
                <p className={`text-sm mb-7 leading-[1.8] font-light ${pkg.featured ? 'text-white/60' : 'text-warm-gray'}`}>
                  {pkg.description}
                </p>

                <ul className="space-y-3.5 mb-8 flex-1">
                  {pkg.services.slice(0, 5).map((service) => (
                    <li key={service} className="flex items-start gap-3 text-sm">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                        pkg.featured ? 'bg-champagne-gold/25' : 'bg-champagne/30'
                      }`}>
                        <Check className="w-3 h-3 text-champagne-gold" strokeWidth={2.5} />
                      </div>
                      <span className={`leading-relaxed ${pkg.featured ? 'text-white/70' : 'text-warm-gray'}`}>
                        {service}
                      </span>
                    </li>
                  ))}
                  {pkg.services.length > 5 && (
                    <li className={`text-[11px] tracking-[0.15em] pl-8 ${pkg.featured ? 'text-champagne-gold/50' : 'text-champagne-gold/70'}`}>
                      + {pkg.services.length - 5} more inclusions
                    </li>
                  )}
                </ul>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                >
                  <Link
                    to={`/packages/${pkg.id}`}
                    className={`flex items-center justify-center gap-2.5 w-full py-4 rounded-full text-[11px] font-semibold tracking-[0.25em] uppercase transition-all duration-500 ${
                      pkg.featured
                        ? 'bg-linear-to-r from-champagne-gold to-gold text-white hover:shadow-[0_12px_35px_-8px_rgba(212,175,55,0.6)]'
                        : 'bg-matte-black text-pearl hover:bg-charcoal hover:shadow-[0_12px_35px_-8px_rgba(0,0,0,0.3)]'
                    }`}
                  >
                    View Details
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
