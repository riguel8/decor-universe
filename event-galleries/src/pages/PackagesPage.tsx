import { motion } from 'framer-motion';
import { Check, ArrowRight, Crown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { packages } from '../data';

export default function PackagesPage() {
  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="py-32 px-6 bg-matte-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <img
            src="/assets/decor/e83d558c-de58-42ca-886d-d511021c1284.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-linear-to-b from-matte-black/70 via-matte-black/80 to-matte-black" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 rounded-full bg-champagne-gold/10 blur-[120px]" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="w-10 h-px bg-champagne-gold/50" />
            <span className="text-champagne-gold text-[11px] tracking-[0.4em] uppercase font-medium">
              Exclusive Offerings
            </span>
            <div className="w-10 h-px bg-champagne-gold/50" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-heading text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-[1.05]"
          >
            Luxury{' '}
            <span className="italic font-subheading text-champagne">Packages</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-white/60 text-base md:text-lg max-w-2xl mx-auto leading-[1.8] font-light"
          >
            Thoughtfully curated experiences designed to elevate your most treasured moments.
          </motion.p>
        </div>
      </section>

      {/* Packages */}
      <section className="py-24 px-6 bg-soft-beige">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className={`relative group rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 ${
                  pkg.featured
                    ? 'bg-matte-black text-white shadow-[0_30px_70px_-20px_rgba(0,0,0,0.4)] ring-1 ring-champagne-gold/30'
                    : 'bg-white text-charcoal shadow-[0_15px_40px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_30px_70px_-20px_rgba(201,169,110,0.25)]'
                }`}
              >
                {pkg.featured && (
                  <div className="absolute top-6 right-6 z-20 flex items-center gap-1.5 px-3 py-1.5 bg-champagne-gold/15 backdrop-blur-md rounded-full border border-champagne-gold/30">
                    <Crown className="w-3 h-3 text-champagne-gold" />
                    <span className="text-champagne-gold text-[9px] tracking-[0.25em] uppercase font-medium">Most Popular</span>
                  </div>
                )}

                {/* Image */}
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute bottom-6 left-7">
                    <span className="text-[10px] text-champagne/80 tracking-[0.25em] uppercase block mb-1.5">Starting at</span>
                    <span className="text-champagne font-heading text-3xl leading-none">
                      {pkg.price}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-9">
                  <h3 className="font-heading text-2xl mb-3 leading-tight">{pkg.name}</h3>
                  <p className={`mb-7 text-sm leading-[1.8] font-light ${pkg.featured ? 'text-white/60' : 'text-warm-gray'}`}>
                    {pkg.description}
                  </p>

                  <div className={`w-10 h-px mb-6 ${pkg.featured ? 'bg-champagne-gold/40' : 'bg-champagne-gold/30'}`} />

                  <ul className="space-y-3.5 mb-9">
                    {pkg.services.map((service) => (
                      <li key={service} className="flex items-start gap-3">
                        <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                          pkg.featured ? 'bg-champagne-gold/20' : 'bg-champagne-gold/15'
                        }`}>
                          <Check className="w-2.5 h-2.5 text-champagne-gold" strokeWidth={3} />
                        </div>
                        <span className={`text-sm leading-relaxed ${pkg.featured ? 'text-white/75' : 'text-warm-gray'}`}>
                          {service}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to={`/packages/${pkg.id}`}
                    className={`inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-[11px] font-medium tracking-[0.25em] uppercase transition-all duration-500 ${
                      pkg.featured
                        ? 'bg-champagne-gold text-white hover:bg-dark-gold hover:shadow-[0_15px_40px_-10px_rgba(201,169,110,0.6)]'
                        : 'bg-charcoal text-pearl hover:bg-champagne-gold hover:shadow-[0_15px_40px_-10px_rgba(201,169,110,0.4)]'
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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-20 text-center p-14 bg-white rounded-3xl shadow-[0_20px_60px_-20px_rgba(0,0,0,0.1)] border border-champagne/20 relative overflow-hidden"
          >
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-100 h-100 rounded-full bg-champagne-gold/5 blur-[100px]" />
            <div className="relative z-10">
              <span className="text-champagne-gold text-[11px] tracking-[0.4em] uppercase block mb-4">Bespoke</span>
              <h3 className="font-heading text-3xl md:text-4xl text-charcoal mb-4 leading-[1.15]">
                Need a{' '}
                <span className="italic font-subheading text-champagne-gold">custom package?</span>
              </h3>
              <p className="text-warm-gray mb-8 max-w-xl mx-auto leading-[1.8] font-light">
                Every celebration is unique. Let us craft a bespoke package tailored to your vision.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2.5 px-9 py-4 border border-champagne-gold text-champagne-gold text-[11px] tracking-[0.25em] uppercase font-medium rounded-full hover:bg-champagne-gold hover:text-white transition-all duration-500"
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
