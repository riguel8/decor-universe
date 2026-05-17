import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '../data';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-28 px-6 bg-matte-black relative overflow-hidden">
      {/* Refined background ambience */}
      <div className="absolute top-1/3 left-0 w-[600px] h-[600px] rounded-full bg-champagne-gold/8 blur-[140px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-champagne/5 blur-[140px]" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(201,169,110,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,0.5) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-10 h-px bg-champagne-gold/50" />
            <span className="text-champagne-gold text-[11px] tracking-[0.4em] uppercase font-medium">
              Client Stories
            </span>
            <div className="w-10 h-px bg-champagne-gold/50" />
          </div>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-[1.1]">
            Words from{' '}
            <span className="italic font-subheading text-champagne">our clients</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-base md:text-lg leading-[1.8] font-light">
            Reflections from those who entrusted us with their most precious moments.
          </p>
        </motion.div>

        {/* Testimonial Card */}
        <div className="relative">
          {/* Large decorative quote */}
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 z-0 pointer-events-none">
            <Quote className="w-24 h-24 text-champagne-gold/15" strokeWidth={1} />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[28px] p-10 md:p-16 text-center shadow-[0_30px_80px_-20px_rgba(0,0,0,0.5)]"
            >
              {/* Gold accent line */}
              <div className="w-12 h-px bg-champagne-gold mx-auto mb-8" />

              {/* Stars */}
              <div className="flex justify-center gap-1.5 mb-8">
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-champagne-gold fill-champagne-gold" />
                ))}
              </div>

              <p className="font-subheading text-2xl md:text-3xl lg:text-4xl text-white/90 leading-[1.5] mb-10 italic font-light">
                "{testimonials[current].content}"
              </p>

              <div className="flex flex-col items-center gap-4">
                <div className="relative">
                  <img
                    src={testimonials[current].avatar}
                    alt={testimonials[current].name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="absolute inset-0 rounded-full ring-2 ring-champagne-gold/40 ring-offset-2 ring-offset-matte-black" />
                </div>
                <div className="text-center">
                  <h4 className="text-white font-heading text-lg mb-1">
                    {testimonials[current].name}
                  </h4>
                  <p className="text-champagne-gold text-[10px] tracking-[0.3em] uppercase">
                    {testimonials[current].role} · {testimonials[current].eventType}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-10">
            <button
              onClick={prev}
              aria-label="Previous"
              className="group p-3 rounded-full border border-white/15 text-white/60 hover:border-champagne-gold/50 hover:text-champagne-gold transition-all duration-300"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex gap-2.5 items-center">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-px transition-all duration-500 ${
                    i === current ? 'w-10 bg-champagne-gold' : 'w-5 bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Next"
              className="group p-3 rounded-full border border-white/15 text-white/60 hover:border-champagne-gold/50 hover:text-champagne-gold transition-all duration-300"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
