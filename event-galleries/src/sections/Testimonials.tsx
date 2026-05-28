import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '../data';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 lg:py-32 px-6 lg:px-16 bg-matte-black relative overflow-hidden">
      {/* Subtle ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-champagne-gold/5 blur-[180px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-8 h-px bg-champagne-gold/50" />
            <span className="text-champagne-gold text-[10px] tracking-[0.35em] uppercase font-medium">
              Client Stories
            </span>
            <div className="w-8 h-px bg-champagne-gold/50" />
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white mb-5 leading-[1.08]">
            Words from{' '}
            <span className="italic font-subheading text-champagne">our clients</span>
          </h2>
          <p className="text-white/40 max-w-lg mx-auto text-[15px] leading-[1.8]">
            Reflections from those who entrusted us with their most precious moments.
          </p>
        </motion.div>

        {/* Testimonial Card */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative border border-white/8 rounded-2xl p-8 md:p-14 text-center"
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-8">
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 text-champagne-gold fill-champagne-gold" />
                ))}
              </div>

              <p className="font-subheading text-xl md:text-2xl lg:text-3xl text-white/85 leading-[1.5] mb-10 italic font-light max-w-3xl mx-auto">
                "{testimonials[current].content}"
              </p>

              <div className="flex flex-col items-center gap-3">
                <img
                  src={testimonials[current].avatar}
                  alt={testimonials[current].name}
                  className="w-12 h-12 rounded-full object-cover ring-1 ring-white/10"
                />
                <div className="text-center">
                  <h4 className="text-white font-heading text-base mb-0.5">
                    {testimonials[current].name}
                  </h4>
                  <p className="text-white/35 text-[10px] tracking-[0.25em] uppercase">
                    {testimonials[current].role} · {testimonials[current].eventType}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-5 mt-8">
            <button
              onClick={prev}
              aria-label="Previous"
              className="p-2.5 rounded-full border border-white/10 text-white/40 hover:border-white/25 hover:text-white/70 transition-all duration-300"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex gap-2 items-center">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`rounded-full transition-all duration-400 ${
                    i === current ? 'w-6 h-1.5 bg-champagne-gold' : 'w-1.5 h-1.5 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Next"
              className="p-2.5 rounded-full border border-white/10 text-white/40 hover:border-white/25 hover:text-white/70 transition-all duration-300"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
