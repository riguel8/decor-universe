import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { eventCategories } from '../data';
import { useRef } from 'react';

const easeOutExpo: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function EventCategories() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 px-6 lg:px-16 bg-pearl">
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
              Our Expertise
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1, ease: easeOutExpo }}
            className="font-heading text-3xl md:text-4xl lg:text-5xl text-matte-black mb-5 leading-[1.08]"
          >
            Curated Event{' '}
            <span className="italic font-subheading text-champagne-gold">Categories</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: easeOutExpo }}
            className="text-warm-gray text-[15px] leading-[1.8]"
          >
            From intimate gatherings to grand celebrations, we bring artistry
            and elegance to every occasion we touch.
          </motion.p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {eventCategories.map((category, idx) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.15 + idx * 0.07, ease: easeOutExpo }}
            >
              <Link
                to="/gallery"
                className="group relative block aspect-[3/4] rounded-2xl overflow-hidden bg-matte-black"
              >
                {/* Image */}
                <img
                  src={category.image}
                  alt={category.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                  loading="lazy"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-matte-black/85 via-matte-black/20 to-transparent" />

                {/* Number */}
                <div className="absolute top-5 left-5 text-white/20 text-[10px] tracking-[0.3em] font-heading">
                  {String(idx + 1).padStart(2, '0')}
                </div>

                {/* Hover Arrow */}
                <div className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-400">
                  <ArrowUpRight className="w-4 h-4 text-white" strokeWidth={1.5} />
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="w-8 h-[1.5px] bg-champagne-gold mb-4 transition-all duration-500 group-hover:w-12" />
                  
                  <h3 className="font-heading text-xl text-white mb-2 leading-snug">
                    {category.title}
                  </h3>
                  
                  <p className="text-white/50 text-[13px] mb-3 leading-relaxed line-clamp-2">
                    {category.description}
                  </p>
                  
                  <span className="text-champagne-gold/70 text-[9px] tracking-[0.3em] uppercase font-medium">
                    {category.count} Projects
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
