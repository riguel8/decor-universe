import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { eventCategories } from '../data';
import { useRef } from 'react';

const easeOutExpo: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function EventCategories() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section ref={sectionRef} className="py-32 lg:py-40 px-6 lg:px-12 bg-ivory relative overflow-hidden">
      {/* Ambient Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-champagne/20 blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-125 h-125 rounded-full bg-champagne-gold/10 blur-[180px]" />
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
              Our Expertise
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
            Curated Event{' '}
            <span className="italic font-subheading text-champagne-gold">Categories</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: easeOutExpo }}
            className="text-warm-gray max-w-2xl mx-auto text-base md:text-lg lg:text-xl leading-[1.9] font-light"
          >
            From intimate gatherings to grand celebrations, we bring artistry
            and elegance to every occasion we touch.
          </motion.p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {eventCategories.map((category, idx) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.2 + idx * 0.1, ease: easeOutExpo }}
            >
              <Link
                to="/gallery"
                className="group relative block h-120 rounded-3xl overflow-hidden bg-matte-black"
              >
                {/* Image with Zoom Effect */}
                <div className="absolute inset-0 overflow-hidden">
                  <motion.img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                    loading="lazy"
                    whileHover={{ scale: 1.05 }}
                  />
                </div>

                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-linear-to-t from-matte-black via-matte-black/40 to-transparent opacity-90" />
                <div className="absolute inset-0 bg-linear-to-br from-transparent via-transparent to-champagne-gold/0 group-hover:to-champagne-gold/20 transition-all duration-700" />
                
                {/* Glassmorphism Border on Hover */}
                <div className="absolute inset-3 rounded-2xl border border-white/0 group-hover:border-white/20 backdrop-blur-0 group-hover:backdrop-blur-[2px] transition-all duration-700" />

                {/* Number Badge */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.5 + idx * 0.1 }}
                  className="absolute top-7 left-7 font-heading text-white/30 text-[11px] tracking-[0.4em]"
                >
                  {String(idx + 1).padStart(2, '0')}
                </motion.div>

                {/* Hover Arrow */}
                <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
                  <ArrowUpRight className="w-5 h-5 text-white" strokeWidth={1.5} />
                </div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <div className="transition-all duration-500 group-hover:-translate-y-2">
                    {/* Animated Underline */}
                    <div className="w-10 h-0.5 bg-linear-to-r from-champagne-gold to-gold mb-5 transition-all duration-700 group-hover:w-20" />
                    
                    <h3 className="font-heading text-2xl lg:text-[1.7rem] text-white font-normal mb-3 leading-tight tracking-wide">
                      {category.title}
                    </h3>
                    
                    <p className="text-white/60 text-sm mb-5 font-light leading-relaxed line-clamp-2">
                      {category.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-champagne-gold text-[10px] tracking-[0.35em] uppercase font-medium">
                        {category.count} Projects
                      </span>
                      <span className="text-white/40 text-[10px] tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        View All →
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom Glow Effect */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-champagne-gold/20 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
