import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import BookingForm from '../sections/BookingForm';

export default function ContactPage() {
  return (
    <div className="pt-20 lg:pt-[88px]">
      {/* Page Header */}
      <section className="py-24 lg:py-28 px-6 lg:px-16 bg-matte-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="/assets/decor/458134e4-e1fc-4014-a0a2-3559561829f5.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-linear-to-b from-matte-black/60 via-matte-black/80 to-matte-black" />

        <div className="relative z-10 max-w-[1400px] mx-auto">
          <motion.div initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px bg-champagne-gold/60" />
            <span className="text-champagne-gold/80 text-[10px] tracking-[0.35em] uppercase font-medium">Get In Touch</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mb-5 leading-[1.05]">
            Contact <span className="italic font-subheading text-champagne">Us</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-white/45 text-[15px] max-w-lg leading-[1.8]">
            We'd love to hear about your upcoming celebration. Let's create something extraordinary together.
          </motion.p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 lg:py-20 px-6 lg:px-16 bg-pearl">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: MapPin, label: 'Visit Us', info: 'Brgy. Marga, Tubod \nSurigao del Norte, Philippines' },
              { icon: Phone, label: 'Call Us', info: '+63 991 855 0522 \n+63 970 337 9468\nMon — Sun available' },
              { icon: Mail, label: 'Email Us', info: 'hello@jbscreation.com\nWe respond within 24h' },
              { icon: Clock, label: 'Office Hours', info: 'Mon — Sun\n9:00 AM — 7:00 PM' },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="group p-7 bg-white rounded-2xl border border-champagne/12 hover:border-champagne-gold/20 transition-all duration-400"
              >
                <div className="w-10 h-10 mb-5 rounded-xl bg-soft-beige flex items-center justify-center group-hover:bg-champagne-gold/10 transition-colors duration-400">
                  <item.icon className="w-4.5 h-4.5 text-champagne-gold" strokeWidth={1.5} />
                </div>
                <span className="text-champagne-gold text-[9px] tracking-[0.25em] uppercase font-medium block mb-2">
                  {item.label}
                </span>
                <p className="text-warm-gray text-[13px] leading-[1.7] whitespace-pre-line">{item.info}</p>
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
