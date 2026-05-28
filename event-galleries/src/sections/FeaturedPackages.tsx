import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { Check, ArrowRight, Sparkles } from 'lucide-react';
import { packages } from '../data';
import { useRef } from 'react';

const easeOutExpo: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function FeaturedPackages() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 px-6 lg:px-16 bg-soft-beige">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: easeOutExpo }}
            className="flex items-center gap-3 mb-5"
          >
            <div className="w-8 h-px bg-champagne-gold" />
            <span className="text-champagne-gold text-[10px] tracking-[0.35em] uppercase font-medium">
              Exclusive Offerings
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1, ease: easeOutExpo }}
            className="font-heading text-3xl md:text-4xl lg:text-5xl text-matte-black mb-5 leading-[1.08]"
          >
            Luxury{' '}
            <span className="italic font-subheading text-champagne-gold">Packages</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: easeOutExpo }}
            className="text-warm-gray text-[15px] leading-[1.8]"
          >
            Thoughtfully curated experiences designed to elevate your most treasured occasions.
          </motion.p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 36 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 + index * 0.08, ease: easeOutExpo }}
              className={`relative group rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1 flex flex-col ${
                pkg.featured
                  ? 'bg-matte-black text-white ring-1 ring-champagne-gold/25'
                  : 'bg-white text-charcoal'
              }`}
            >
              {/* Featured Badge */}
              {pkg.featured && (
                <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 px-3 py-1.5 bg-champagne-gold/15 backdrop-blur-sm rounded-full border border-champagne-gold/30">
                  <Sparkles className="w-3 h-3 text-champagne-gold" />
                  <span className="text-champagne-gold text-[9px] tracking-[0.2em] uppercase font-medium">Popular</span>
                </div>
              )}

              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-linear-to-t from-matte-black/80 via-matte-black/30 to-transparent" />

                {/* Price tag */}
                <div className="absolute bottom-5 left-5">
                  <span className="text-[9px] text-white/50 tracking-[0.25em] uppercase block mb-1">Starting at</span>
                  <span className="text-champagne font-heading text-2xl">
                    {pkg.price}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-heading text-xl mb-3 leading-tight">{pkg.name}</h3>
                <p className={`text-[13px] mb-6 leading-[1.7] ${pkg.featured ? 'text-white/50' : 'text-warm-gray'}`}>
                  {pkg.description}
                </p>

                <ul className="space-y-2.5 mb-6 flex-1">
                  {pkg.services.slice(0, 4).map((service) => (
                    <li key={service} className="flex items-start gap-2.5 text-[13px]">
                      <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                        pkg.featured ? 'bg-champagne-gold/20' : 'bg-champagne/25'
                      }`}>
                        <Check className="w-2.5 h-2.5 text-champagne-gold" strokeWidth={2.5} />
                      </div>
                      <span className={`leading-relaxed ${pkg.featured ? 'text-white/60' : 'text-warm-gray'}`}>
                        {service}
                      </span>
                    </li>
                  ))}
                  {pkg.services.length > 4 && (
                    <li className={`text-[11px] tracking-[0.1em] pl-6.5 ${pkg.featured ? 'text-champagne-gold/40' : 'text-champagne-gold/60'}`}>
                      + {pkg.services.length - 4} more inclusions
                    </li>
                  )}
                </ul>

                <Link
                  to={`/packages/${pkg.id}`}
                  className={`flex items-center justify-center gap-2 w-full py-3.5 rounded-full text-[10px] font-medium tracking-[0.2em] uppercase transition-all duration-400 ${
                    pkg.featured
                      ? 'bg-champagne-gold text-white hover:bg-dark-gold'
                      : 'bg-matte-black text-white hover:bg-champagne-gold'
                  }`}
                >
                  View Details
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
