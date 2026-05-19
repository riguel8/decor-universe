import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import BookingForm from '../sections/BookingForm';

export default function ContactPage() {
  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="py-32 px-6 bg-matte-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <img
            src="/assets/decor/458134e4-e1fc-4014-a0a2-3559561829f5.jpg"
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
              Get In Touch
            </span>
            <div className="w-10 h-px bg-champagne-gold/50" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-heading text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-[1.05]"
          >
            Contact{' '}
            <span className="italic font-subheading text-champagne">us</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-white/60 text-base md:text-lg max-w-2xl mx-auto leading-[1.8] font-light"
          >
            We'd love to hear about your upcoming celebration. Let's create something extraordinary together.
          </motion.p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 px-6 bg-pearl">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-champagne-gold/15 rounded-3xl overflow-hidden border border-champagne-gold/15">
            {[
              { icon: MapPin, label: 'Visit Us', info: 'Brgy. Marga, Tubod \nSurigao del Norte, Philippines' },
              { icon: Phone, label: 'Call Us', info: '+63 991 855 0522 \n+63 970 337 9468\nMon — Sun available' },
              { icon: Mail, label: 'Email Us', info: 'hello@decoruniverse.com\nWe respond within 24h' },
              { icon: Clock, label: 'Office Hours', info: 'Mon — Sun\n9:00 AM — 7:00 PM' },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="group text-center p-10 bg-pearl hover:bg-white transition-colors duration-500"
              >
                <div className="w-14 h-14 mx-auto mb-6 rounded-full border border-champagne-gold/30 flex items-center justify-center bg-pearl group-hover:border-champagne-gold group-hover:rotate-6 transition-all duration-500">
                  <item.icon className="w-5 h-5 text-champagne-gold" strokeWidth={1.5} />
                </div>
                <span className="text-champagne-gold text-[10px] tracking-[0.3em] uppercase font-medium block mb-3">
                  {item.label}
                </span>
                <p className="text-charcoal text-sm leading-[1.8] font-light whitespace-pre-line">{item.info}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <BookingForm />
    </div>
  );
}
