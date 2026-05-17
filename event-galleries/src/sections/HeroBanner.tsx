import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { useRef } from 'react';

const easeOutExpo: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function HeroBanner() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section ref={containerRef} className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-matte-black">
      {/* Background Image with Parallax */}
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <motion.img
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: easeOutExpo }}
          src="/assets/decor/bb167250-d8d0-48c1-851d-37daa01c7cec.jpg"
          alt="Luxury event decor"
          className="w-full h-full object-cover"
        />
        {/* Cinematic gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-matte-black/80 via-matte-black/30 to-matte-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-matte-black/60 via-transparent to-matte-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-matte-black via-transparent to-transparent" />
      </motion.div>

      {/* Floating Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            y: [0, -40, 0],
            x: [0, 20, 0],
            opacity: [0.15, 0.3, 0.15]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-[5%] w-[500px] h-[500px] rounded-full bg-champagne-gold/20 blur-[150px]"
        />
        <motion.div
          animate={{ 
            y: [0, 50, 0],
            x: [0, -30, 0],
            opacity: [0.1, 0.25, 0.1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-1/4 right-[5%] w-[600px] h-[600px] rounded-full bg-champagne/15 blur-[180px]"
        />
        <motion.div
          animate={{ 
            opacity: [0.05, 0.15, 0.05]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gold/10 blur-[200px]"
        />
      </div>

      {/* Decorative Side Lines */}
      <div className="hidden lg:flex absolute left-12 top-1/2 -translate-y-1/2 z-10 flex-col items-center gap-4">
        <motion.div
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 1, ease: easeOutExpo }}
          className="w-px h-32 bg-gradient-to-b from-transparent via-champagne-gold/50 to-transparent origin-top"
        />
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 2 }}
          className="w-2 h-2 rounded-full bg-champagne-gold/60"
        />
      </div>
      <div className="hidden lg:flex absolute right-12 top-1/2 -translate-y-1/2 z-10 flex-col items-center gap-4">
        <motion.div
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.2, ease: easeOutExpo }}
          className="w-px h-32 bg-gradient-to-b from-transparent via-champagne-gold/50 to-transparent origin-top"
        />
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 2.2 }}
          className="w-2 h-2 rounded-full bg-champagne-gold/60"
        />
      </div>

      {/* Main Content */}
      <motion.div style={{ opacity }} className="relative z-10 text-center px-6 lg:px-12 max-w-6xl mx-auto pt-24">
        {/* Eyebrow Label */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: easeOutExpo }}
          className="flex items-center justify-center gap-5 mb-10"
        >
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-16 h-px bg-gradient-to-r from-transparent to-champagne-gold/70 origin-right"
          />
          <span className="text-champagne/90 text-[11px] tracking-[0.5em] uppercase font-medium">
            Luxury Event Atelier
          </span>
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-16 h-px bg-gradient-to-l from-transparent to-champagne-gold/70 origin-left"
          />
        </motion.div>

        {/* Main Heading with Staggered Reveal */}
        <div className="overflow-hidden mb-10">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1, delay: 0.5 }}
            className="font-heading text-white font-normal leading-[0.95]"
          >
            <motion.span 
              initial={{ y: 120, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.5, ease: easeOutExpo }}
              className="block text-[clamp(2.5rem,8vw,6rem)] tracking-[-0.02em]"
            >
              Crafting
            </motion.span>
            <motion.span 
              initial={{ y: 140, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.65, ease: easeOutExpo }}
              className="block font-subheading italic text-champagne text-[clamp(3rem,10vw,8rem)] -mt-2 lg:-mt-4"
            >
              Extraordinary
            </motion.span>
            <motion.span 
              initial={{ y: 120, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.8, ease: easeOutExpo }}
              className="block text-[clamp(2.5rem,8vw,6rem)] tracking-[0.02em]"
            >
              Celebrations
            </motion.span>
          </motion.h1>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1, ease: easeOutExpo }}
          className="text-white/60 text-base md:text-lg lg:text-xl max-w-2xl mx-auto mb-14 font-light leading-[1.9] tracking-wide"
        >
          Luxury event styling, modern decor artistry, and unforgettable experiences 
          crafted for life's most precious moments.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.3, ease: easeOutExpo }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <motion.div
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          >
            <Link
              to="/gallery"
              className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-champagne-gold via-gold to-champagne-gold text-white text-[11px] tracking-[0.3em] uppercase font-semibold rounded-full overflow-hidden shadow-[0_8px_40px_-8px_rgba(212,175,55,0.5)] hover:shadow-[0_16px_60px_-8px_rgba(212,175,55,0.6)] transition-shadow duration-500"
            >
              <span className="relative z-10">Explore Galleries</span>
              <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-gold via-champagne-gold to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Link>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          >
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-white/5 backdrop-blur-xl border border-white/20 text-white text-[11px] tracking-[0.3em] uppercase font-semibold rounded-full hover:bg-white hover:text-matte-black hover:border-white transition-all duration-500"
            >
              <span>Book Consultation</span>
              <Play className="w-3.5 h-3.5 fill-current" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.6, ease: easeOutExpo }}
          className="mt-24 flex items-center justify-center"
        >
          <div className="flex items-center gap-8 md:gap-12 lg:gap-16">
            {[
              { value: '500+', label: 'Events Crafted' },
              { value: '12', label: 'Years of Excellence' },
              { value: '100%', label: 'Client Satisfaction' },
            ].map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-8 md:gap-12 lg:gap-16">
                <div className="text-center">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 1.8 + i * 0.1 }}
                    className="font-heading text-3xl md:text-4xl lg:text-5xl text-champagne mb-2"
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-white/40 text-[9px] md:text-[10px] tracking-[0.3em] uppercase font-medium">
                    {stat.label}
                  </div>
                </div>
                {i < 2 && (
                  <div className="w-px h-16 bg-gradient-to-b from-transparent via-champagne-gold/30 to-transparent" />
                )}
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center gap-3">
          <span className="text-white/30 text-[9px] tracking-[0.4em] uppercase font-medium">Scroll</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-px h-16 bg-gradient-to-b from-champagne-gold/60 via-champagne-gold/20 to-transparent"
          />
        </div>
      </motion.div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-ivory to-transparent pointer-events-none" />
    </section>
  );
}
