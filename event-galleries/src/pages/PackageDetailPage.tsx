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
    <div className="bg-pearl min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-100 overflow-hidden">
        <motion.div
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: easeOutExpo }}
          className="absolute inset-0"
        >
          <img src={pkg.image} alt={pkg.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-linear-to-t from-matte-black/90 via-matte-black/40 to-transparent" />
        </motion.div>

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="absolute top-28 lg:top-32 left-6 lg:left-16 z-10"
        >
          <button
            onClick={() => navigate(-1)}
            className="group flex items-center gap-2 px-4 py-2.5 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full text-white hover:bg-white hover:text-matte-black transition-all duration-400"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
            <span className="text-[10px] tracking-[0.18em] uppercase font-medium">Back</span>
          </button>
        </motion.div>

        {/* Featured Badge */}
        {pkg.featured && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="absolute top-28 lg:top-32 right-6 lg:right-16 z-10"
          >
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-champagne-gold/15 backdrop-blur-sm rounded-full border border-champagne-gold/30">
              <Sparkles className="w-3 h-3 text-champagne-gold" />
              <span className="text-champagne-gold text-[9px] tracking-[0.2em] uppercase font-medium">Most Popular</span>
            </div>
          </motion.div>
        )}

        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 right-0 px-6 lg:px-16 pb-10 lg:pb-14">
          <div className="max-w-[1400px] mx-auto">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3, ease: easeOutExpo }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-champagne-gold/60" />
                <span className="text-champagne-gold/80 text-[10px] tracking-[0.35em] uppercase font-medium">Luxury Package</span>
              </div>
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white mb-4 leading-[1.08]">{pkg.name}</h1>
              <p className="text-white/50 text-[15px] max-w-xl leading-[1.8]">{pkg.description}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-20 px-6 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-3 gap-10 lg:gap-14">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-12">
              {/* What's Included */}
              <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: easeOutExpo }}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-px bg-champagne-gold" />
                  <h2 className="text-[10px] tracking-[0.35em] uppercase text-champagne-gold font-medium">What's Included</h2>
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  {pkg.services.map((service, idx) => (
                    <motion.div
                      key={service}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.04 }}
                      className="flex items-start gap-3 p-4 bg-white rounded-xl border border-champagne/10"
                    >
                      <div className="w-6 h-6 rounded-full bg-champagne-gold/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-champagne-gold" strokeWidth={2.5} />
                      </div>
                      <span className="text-matte-black text-[14px] leading-relaxed">{service}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Package Highlights */}
              <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: easeOutExpo }}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-px bg-champagne-gold" />
                  <h2 className="text-[10px] tracking-[0.35em] uppercase text-champagne-gold font-medium">Package Highlights</h2>
                </div>
                <div className="grid sm:grid-cols-3 gap-3">
                  {[
                    { icon: Users, value: '150+', label: 'Guests Capacity' },
                    { icon: Clock, value: '8 Hours', label: 'Event Duration' },
                    { icon: Star, value: 'Premium', label: 'Quality Materials' },
                  ].map((item) => (
                    <div key={item.label} className="p-5 bg-soft-beige rounded-xl text-center">
                      <div className="w-10 h-10 rounded-lg bg-champagne-gold/10 flex items-center justify-center mx-auto mb-3">
                        <item.icon className="w-4.5 h-4.5 text-champagne-gold" />
                      </div>
                      <h3 className="font-heading text-xl text-matte-black mb-0.5">{item.value}</h3>
                      <p className="text-warm-gray text-[12px]">{item.label}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Process */}
              <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: easeOutExpo }}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-px bg-champagne-gold" />
                  <h2 className="text-[10px] tracking-[0.35em] uppercase text-champagne-gold font-medium">Our Process</h2>
                </div>
                <div className="space-y-5">
                  {[
                    { step: '01', title: 'Initial Consultation', desc: 'We discuss your vision, preferences, and event requirements in detail.' },
                    { step: '02', title: 'Design Proposal', desc: 'Our team creates a custom design concept tailored to your event.' },
                    { step: '03', title: 'Refinement', desc: 'We refine the design based on your feedback until it\'s perfect.' },
                    { step: '04', title: 'Execution', desc: 'On event day, we bring your vision to life with meticulous attention to detail.' },
                  ].map((item, idx) => (
                    <motion.div
                      key={item.step}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.08 }}
                      className="flex gap-5 items-start"
                    >
                      <span className="font-heading text-2xl text-champagne/50 mt-0.5">{item.step}</span>
                      <div>
                        <h3 className="font-heading text-lg text-matte-black mb-1">{item.title}</h3>
                        <p className="text-warm-gray text-[14px] leading-[1.7]">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Column - Pricing Card */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15, ease: easeOutExpo }}
                className="sticky top-28"
              >
                <div className="bg-white rounded-2xl p-7 lg:p-8 border border-champagne/12">
                  <div className="text-center mb-6">
                    <span className="text-[9px] tracking-[0.3em] uppercase text-warm-gray-light block mb-1.5">Starting at</span>
                    <span className="font-heading text-4xl lg:text-5xl text-matte-black">{pkg.price}</span>
                  </div>

                  <div className="space-y-3 mb-6">
                    {['Personalized consultation', 'Custom design proposal', 'Premium quality materials', 'Day-of coordination'].map((item) => (
                      <div key={item} className="flex items-center gap-2.5 text-[13px] text-warm-gray">
                        <Check className="w-4 h-4 text-champagne-gold shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="h-px bg-champagne/15 mb-6" />

                  <Link
                    to="/contact"
                    className="flex items-center justify-center gap-2.5 w-full py-4 bg-matte-black text-white text-[10px] tracking-[0.2em] uppercase font-medium rounded-full hover:bg-champagne-gold transition-colors duration-400"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    Book This Package
                  </Link>

                  <p className="text-center text-warm-gray-light text-[11px] mt-3">
                    Free consultation · No commitment required
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Packages */}
      <section className="py-16 lg:py-20 px-6 lg:px-16 bg-soft-beige">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: easeOutExpo }}
            className="flex items-center gap-3 mb-10"
          >
            <div className="w-8 h-px bg-champagne-gold" />
            <span className="text-champagne-gold text-[10px] tracking-[0.35em] uppercase font-medium">Explore More</span>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-4">
            {relatedPackages.map((relPkg, idx) => (
              <motion.div
                key={relPkg.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.08, ease: easeOutExpo }}
              >
                <Link
                  to={`/packages/${relPkg.id}`}
                  className="group block bg-white rounded-2xl overflow-hidden hover:-translate-y-1 transition-all duration-500"
                >
                  <div className="relative h-44 overflow-hidden">
                    <img src={relPkg.image} alt={relPkg.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-linear-to-t from-matte-black/70 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="text-champagne font-heading text-xl">{relPkg.price}</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading text-lg text-matte-black mb-1.5 group-hover:text-champagne-gold transition-colors">
                      {relPkg.name}
                    </h3>
                    <p className="text-warm-gray text-[13px] line-clamp-2 leading-relaxed">{relPkg.description}</p>
                    <div className="mt-3 flex items-center gap-1.5 text-champagne-gold text-[10px] tracking-[0.18em] uppercase font-medium">
                      View Details
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-24 px-6 lg:px-16 bg-matte-black">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: easeOutExpo }}
          >
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="w-8 h-px bg-champagne-gold/50" />
              <span className="text-champagne-gold text-[10px] tracking-[0.35em] uppercase font-medium">Let's Begin</span>
              <div className="w-8 h-px bg-champagne-gold/50" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white mb-5 leading-[1.08]">
              Ready to Create Something{' '}
              <span className="italic font-subheading text-champagne">Extraordinary?</span>
            </h2>
            <p className="text-white/40 text-[15px] mb-8 max-w-xl mx-auto leading-[1.8]">
              Let's discuss how we can bring your vision to life with this package or create something completely custom.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-champagne-gold text-white text-[10px] tracking-[0.2em] uppercase font-medium rounded-full hover:bg-dark-gold transition-colors duration-400"
            >
              Start Your Consultation
              <ArrowRight className="w-3 h-3" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
