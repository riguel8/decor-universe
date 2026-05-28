import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useRef } from 'react';

const easeOutExpo: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function HeroBanner() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <section ref={containerRef} className="relative min-h-svh flex items-end overflow-hidden bg-matte-black">
      {/* Background Image with Parallax */}
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <motion.img
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.2, ease: easeOutExpo }}
          src="/assets/decor/bb167250-d8d0-48c1-851d-37daa01c7cec.jpg"
          alt="Luxury event decor"
          className="w-full h-full object-cover"
        />
        {/* Cinematic gradient overlays — simplified for clarity */}
        <div className="absolute inset-0 bg-linear-to-b from-matte-black/70 via-matte-black/20 to-matte-black/90" />
        <div className="absolute inset-0 bg-linear-to-r from-matte-black/50 via-transparent to-matte-black/30" />
      </motion.div>

      {/* Single subtle ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-champagne-gold/8 blur-[200px]" />
      </div>

      {/* Main Content — aligned to bottom-left for editorial feel */}
      <motion.div style={{ opacity }} className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-16 pb-20 lg:pb-28 pt-48">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: easeOutExpo }}
          className="flex items-center gap-4 mb-8"
        >
          <div className="w-10 h-px bg-champagne-gold/60" />
          <span className="text-champagne-gold/80 text-[10px] tracking-[0.4em] uppercase font-medium">
            Luxury Event Atelier
          </span>
        </motion.div>

        {/* Main Heading — staggered lines, left-aligned on desktop */}
        <div className="overflow-hidden mb-8 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1, delay: 0.5 }}
            className="font-heading text-white font-normal leading-[0.92]"
          >
            <motion.span 
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.1, delay: 0.5, ease: easeOutExpo }}
              className="block text-[clamp(2.8rem,7.5vw,5.5rem)] tracking-[-0.03em]"
            >
              Crafting
            </motion.span>
            <motion.span 
              initial={{ y: 120, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.1, delay: 0.65, ease: easeOutExpo }}
              className="block font-subheading italic text-champagne text-[clamp(3.2rem,9.5vw,7.5rem)] -mt-1 lg:-mt-2"
            >
              Extraordinary
            </motion.span>
            <motion.span 
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.1, delay: 0.8, ease: easeOutExpo }}
              className="block text-[clamp(2.8rem,7.5vw,5.5rem)] tracking-[-0.01em]"
            >
              Celebrations
            </motion.span>
          </motion.h1>
        </div>

        {/* Subtitle — left-aligned, max-width for readability */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.1, ease: easeOutExpo }}
          className="text-white/50 text-[15px] md:text-base lg:text-lg max-w-lg mb-12 leading-[1.8]"
        >
          Luxury event styling and modern decor artistry — crafted for life's most precious moments.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.3, ease: easeOutExpo }}
          className="flex flex-col sm:flex-row items-start gap-4"
        >
          <Link
            to="/gallery"
            className="group inline-flex items-center gap-2.5 px-8 py-4 bg-champagne-gold text-white text-[11px] tracking-[0.2em] uppercase font-medium rounded-full hover:bg-dark-gold transition-colors duration-400"
          >
            Explore Galleries
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-300" />
          </Link>
          
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2.5 px-8 py-4 bg-white/8 backdrop-blur-sm border border-white/15 text-white text-[11px] tracking-[0.2em] uppercase font-medium rounded-full hover:bg-white hover:text-matte-black transition-all duration-400"
          >
            Book Consultation
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-300" />
          </Link>
        </motion.div>

        {/* Stats — bottom row, right-aligned on larger screens */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8, ease: easeOutExpo }}
          className="mt-16 lg:mt-20 pt-8 border-t border-white/8"
        >
          <div className="flex items-center gap-10 md:gap-14 lg:gap-20">
            {[
              { value: '500+', label: 'Events Crafted' },
              { value: '12', label: 'Years of Excellence' },
              { value: '100%', label: 'Client Satisfaction' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-heading text-2xl md:text-3xl lg:text-4xl text-white/90 mb-1">
                  {stat.value}
                </div>
                <div className="text-white/35 text-[9px] md:text-[10px] tracking-[0.2em] uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="absolute bottom-8 right-6 lg:right-16 z-10"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-white/25 text-[8px] tracking-[0.3em] uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-px h-12 bg-linear-to-b from-white/30 to-transparent"
          />
        </div>
      </motion.div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-pearl to-transparent pointer-events-none" />
    </section>
  );
}
