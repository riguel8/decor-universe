import { motion } from 'framer-motion';
import { Check, ArrowRight, Crown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { packages } from '../data';

export default function PackagesPage() {
  return (
    <div className="pt-20 lg:pt-[88px]">
      {/* Page Header */}
      <section className="py-24 lg:py-28 px-6 lg:px-16 bg-matte-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="/assets/decor/e83d558c-de58-42ca-886d-d511021c1284.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-linear-to-b from-matte-black/60 via-matte-black/80 to-matte-black" />

        <div className="relative z-10 max-w-[1400px] mx-auto">
          <motion.div initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px bg-champagne-gold/60" />
            <span className="text-champagne-gold/80 text-[10px] tracking-[0.35em] uppercase font-medium">Exclusive Offerings</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mb-5 leading-[1.05]">
            Luxury <span className="italic font-subheading text-champagne">Packages</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-white/45 text-[15px] max-w-lg leading-[1.8]">
            Thoughtfully curated experiences designed to elevate your most treasured moments.
          </motion.p>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 lg:py-20 px-6 lg:px-16 bg-pearl">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className={`relative group rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1 ${
                  pkg.featured
                    ? 'bg-matte-black text-white ring-1 ring-champagne-gold/25'
                    : 'bg-white text-charcoal'
                }`}
              >
                {pkg.featured && (
                  <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 px-3 py-1.5 bg-champagne-gold/15 backdrop-blur-sm rounded-full border border-champagne-gold/30">
                    <Crown className="w-3 h-3 text-champagne-gold" />
                    <span className="text-champagne-gold text-[9px] tracking-[0.2em] uppercase font-medium">Most Popular</span>
                  </div>
                )}

                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img src={pkg.image} alt={pkg.name} className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-linear-to-t from-matte-black/80 via-matte-black/30 to-transparent" />
                  <div className="absolute bottom-5 left-5">
                    <span className="text-[9px] text-white/50 tracking-[0.25em] uppercase block mb-1">Starting at</span>
                    <span className="text-champagne font-heading text-2xl">{pkg.price}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-heading text-xl mb-3 leading-tight">{pkg.name}</h3>
                  <p className={`text-[13px] mb-5 leading-[1.7] ${pkg.featured ? 'text-white/50' : 'text-warm-gray'}`}>
                    {pkg.description}
                  </p>

                  <div className={`w-8 h-[1.5px] mb-5 ${pkg.featured ? 'bg-champagne-gold/30' : 'bg-champagne/25'}`} />

                  <ul className="space-y-2.5 mb-6">
                    {pkg.services.map((service) => (
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

          {/* Custom Package CTA */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12"
          >
            <div className="bg-soft-beige rounded-2xl p-10 lg:p-14 border border-champagne/12 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div className="max-w-xl">
                <h3 className="font-heading text-2xl lg:text-3xl text-matte-black mb-3">
                  Need a <span className="italic font-subheading text-champagne-gold">custom package?</span>
                </h3>
                <p className="text-warm-gray text-[15px] leading-[1.8]">
                  Every celebration is unique. Let us craft a bespoke package tailored to your vision.
                </p>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-matte-black text-white text-[10px] tracking-[0.2em] uppercase font-medium rounded-full hover:bg-champagne-gold transition-colors duration-400 shrink-0 self-start lg:self-auto"
              >
                Request Custom Quote
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
