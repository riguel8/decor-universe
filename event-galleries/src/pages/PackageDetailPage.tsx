import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, ArrowRight, Calendar, Clock, Users, Sparkles, Star } from 'lucide-react';
import { packages } from '../data';

const easeOutExpo: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function PackageDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const pkg = packages.find((p) => p.id === id);

  if (!pkg) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-ivory">
        <div className="text-center">
          <h1 className="font-heading text-4xl text-matte-black mb-4">Package Not Found</h1>
          <p className="text-warm-gray mb-8">The package you're looking for doesn't exist.</p>
          <Link
            to="/packages"
            className="inline-flex items-center gap-2 px-8 py-4 bg-matte-black text-white text-[11px] tracking-[0.25em] uppercase font-semibold rounded-full hover:bg-charcoal transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Packages
          </Link>
        </div>
      </div>
    );
  }

  const relatedPackages = packages.filter((p) => p.id !== id).slice(0, 3);

  return (
    <div className="bg-ivory min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-125 overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: easeOutExpo }}
          className="absolute inset-0"
        >
          <img
            src={pkg.image}
            alt={pkg.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-matte-black via-matte-black/50 to-transparent" />
          <div className="absolute inset-0 bg-linear-to-r from-matte-black/60 via-transparent to-matte-black/30" />
        </motion.div>

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="absolute top-32 left-6 lg:left-12 z-10"
        >
          <button
            onClick={() => navigate(-1)}
            className="group flex items-center gap-3 px-5 py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-white hover:bg-white hover:text-matte-black transition-all duration-500"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-[11px] tracking-[0.2em] uppercase font-medium">Back</span>
          </button>
        </motion.div>

        {/* Featured Badge */}
        {pkg.featured && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="absolute top-32 right-6 lg:right-12 z-10"
          >
            <div className="flex items-center gap-2 px-5 py-3 bg-linear-to-r from-champagne-gold/30 to-gold/30 backdrop-blur-xl rounded-full border border-champagne-gold/50">
              <Sparkles className="w-4 h-4 text-champagne-gold" />
              <span className="text-champagne-gold text-[11px] tracking-[0.25em] uppercase font-semibold">Most Popular</span>
            </div>
          </motion.div>
        )}

        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-12 pb-12 lg:pb-16">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: easeOutExpo }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-px bg-linear-to-r from-champagne-gold to-transparent" />
                <span className="text-champagne text-[11px] tracking-[0.5em] uppercase font-medium">
                  Luxury Package
                </span>
              </div>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white mb-6 leading-[1.05]">
                {pkg.name}
              </h1>
              <p className="text-white/70 text-lg md:text-xl max-w-2xl leading-relaxed font-light">
                {pkg.description}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 lg:py-28 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Left Column - Details */}
            <div className="lg:col-span-2 space-y-16">
              {/* What's Included */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: easeOutExpo }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-10 h-px bg-champagne-gold" />
                  <h2 className="text-[11px] tracking-[0.4em] uppercase text-champagne-gold font-semibold">
                    What's Included
                  </h2>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {pkg.services.map((service, idx) => (
                    <motion.div
                      key={service}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.05 }}
                      className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-champagne/20 hover:border-champagne-gold/30 hover:shadow-[0_10px_40px_-15px_rgba(212,175,55,0.15)] transition-all duration-500"
                    >
                      <div className="w-8 h-8 rounded-full bg-champagne-gold/10 flex items-center justify-center shrink-0">
                        <Check className="w-4 h-4 text-champagne-gold" strokeWidth={2.5} />
                      </div>
                      <span className="text-charcoal font-medium leading-relaxed">{service}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Package Highlights */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: easeOutExpo }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-10 h-px bg-champagne-gold" />
                  <h2 className="text-[11px] tracking-[0.4em] uppercase text-champagne-gold font-semibold">
                    Package Highlights
                  </h2>
                </div>
                <div className="grid sm:grid-cols-3 gap-6">
                  <div className="p-6 bg-soft-beige rounded-2xl text-center">
                    <div className="w-12 h-12 rounded-full bg-champagne-gold/15 flex items-center justify-center mx-auto mb-4">
                      <Users className="w-5 h-5 text-champagne-gold" />
                    </div>
                    <h3 className="font-heading text-2xl text-matte-black mb-1">150+</h3>
                    <p className="text-warm-gray text-sm">Guests Capacity</p>
                  </div>
                  <div className="p-6 bg-soft-beige rounded-2xl text-center">
                    <div className="w-12 h-12 rounded-full bg-champagne-gold/15 flex items-center justify-center mx-auto mb-4">
                      <Clock className="w-5 h-5 text-champagne-gold" />
                    </div>
                    <h3 className="font-heading text-2xl text-matte-black mb-1">8 Hours</h3>
                    <p className="text-warm-gray text-sm">Event Duration</p>
                  </div>
                  <div className="p-6 bg-soft-beige rounded-2xl text-center">
                    <div className="w-12 h-12 rounded-full bg-champagne-gold/15 flex items-center justify-center mx-auto mb-4">
                      <Star className="w-5 h-5 text-champagne-gold" />
                    </div>
                    <h3 className="font-heading text-2xl text-matte-black mb-1">Premium</h3>
                    <p className="text-warm-gray text-sm">Quality Materials</p>
                  </div>
                </div>
              </motion.div>

              {/* Process */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: easeOutExpo }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-10 h-px bg-champagne-gold" />
                  <h2 className="text-[11px] tracking-[0.4em] uppercase text-champagne-gold font-semibold">
                    Our Process
                  </h2>
                </div>
                <div className="space-y-6">
                  {[
                    { step: '01', title: 'Initial Consultation', desc: 'We discuss your vision, preferences, and event requirements in detail.' },
                    { step: '02', title: 'Design Proposal', desc: 'Our team creates a custom design concept tailored to your event.' },
                    { step: '03', title: 'Refinement', desc: 'We refine the design based on your feedback until it\'s perfect.' },
                    { step: '04', title: 'Execution', desc: 'On event day, we bring your vision to life with meticulous attention to detail.' },
                  ].map((item, idx) => (
                    <motion.div
                      key={item.step}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className="flex gap-6 items-start"
                    >
                      <span className="font-heading text-3xl text-champagne-gold/30">{item.step}</span>
                      <div>
                        <h3 className="font-heading text-xl text-matte-black mb-2">{item.title}</h3>
                        <p className="text-warm-gray leading-relaxed">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Column - Pricing Card */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: easeOutExpo }}
                className="sticky top-32"
              >
                <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-champagne/20">
                  <div className="text-center mb-8">
                    <span className="text-[10px] tracking-[0.4em] uppercase text-champagne-gold font-medium block mb-2">
                      Starting at
                    </span>
                    <span className="font-heading text-5xl lg:text-6xl text-matte-black">
                      {pkg.price}
                    </span>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3 text-charcoal">
                      <Check className="w-5 h-5 text-champagne-gold" />
                      <span>Personalized consultation</span>
                    </div>
                    <div className="flex items-center gap-3 text-charcoal">
                      <Check className="w-5 h-5 text-champagne-gold" />
                      <span>Custom design proposal</span>
                    </div>
                    <div className="flex items-center gap-3 text-charcoal">
                      <Check className="w-5 h-5 text-champagne-gold" />
                      <span>Premium quality materials</span>
                    </div>
                    <div className="flex items-center gap-3 text-charcoal">
                      <Check className="w-5 h-5 text-champagne-gold" />
                      <span>Day-of coordination</span>
                    </div>
                  </div>

                  <div className="h-px bg-champagne/30 mb-8" />

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      to="/contact"
                      className="flex items-center justify-center gap-3 w-full py-5 bg-linear-to-r from-champagne-gold to-gold text-white text-[11px] tracking-[0.3em] uppercase font-semibold rounded-full shadow-[0_8px_30px_-8px_rgba(212,175,55,0.5)] hover:shadow-[0_16px_40px_-8px_rgba(212,175,55,0.6)] transition-all duration-500"
                    >
                      <Calendar className="w-4 h-4" />
                      Book This Package
                    </Link>
                  </motion.div>

                  <p className="text-center text-warm-gray text-xs mt-4">
                    Free consultation · No commitment required
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Packages */}
      <section className="py-20 lg:py-28 px-6 lg:px-12 bg-soft-beige">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: easeOutExpo }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-5 mb-6">
              <div className="w-12 h-px bg-champagne-gold/50" />
              <span className="text-champagne-gold text-[11px] tracking-[0.5em] uppercase font-semibold">
                Explore More
              </span>
              <div className="w-12 h-px bg-champagne-gold/50" />
            </div>
            <h2 className="font-heading text-4xl md:text-5xl text-matte-black">
              Other <span className="italic font-subheading text-champagne-gold">Packages</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {relatedPackages.map((relPkg, idx) => (
              <motion.div
                key={relPkg.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1, ease: easeOutExpo }}
              >
                <Link
                  to={`/packages/${relPkg.id}`}
                  className="group block bg-white rounded-3xl overflow-hidden shadow-[0_10px_40px_-15px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_60px_-15px_rgba(212,175,55,0.2)] transition-all duration-700 hover:-translate-y-2"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={relPkg.image}
                      alt={relPkg.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-matte-black/80 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="text-champagne font-heading text-2xl">{relPkg.price}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-xl text-matte-black mb-2 group-hover:text-champagne-gold transition-colors">
                      {relPkg.name}
                    </h3>
                    <p className="text-warm-gray text-sm line-clamp-2">{relPkg.description}</p>
                    <div className="mt-4 flex items-center gap-2 text-champagne-gold text-[11px] tracking-[0.2em] uppercase font-medium">
                      View Details
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-matte-black relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 rounded-full bg-champagne-gold/5 blur-[200px]" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: easeOutExpo }}
          >
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-[1.1]">
              Ready to Create Something{' '}
              <span className="italic font-subheading text-champagne">Extraordinary?</span>
            </h2>
            <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto">
              Let's discuss how we can bring your vision to life with this package or create something completely custom.
            </p>
            <motion.div
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block"
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-12 py-5 bg-linear-to-r from-champagne-gold to-gold text-white text-[11px] tracking-[0.3em] uppercase font-semibold rounded-full shadow-[0_8px_40px_-8px_rgba(212,175,55,0.5)] hover:shadow-[0_16px_60px_-8px_rgba(212,175,55,0.6)] transition-all duration-500"
              >
                Start Your Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
