import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, Calendar, User, Mail, MessageSquare } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  eventType: string;
  date: string;
  budget: string;
  message: string;
}

const easeOutExpo: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function BookingForm() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    eventType: '',
    date: '',
    budget: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const eventTypes = [
    'Wedding',
    'Birthday Party',
    'Graduation',
    'Debut',
    'Corporate Event',
    'Baptism',
    'Baby Shower',
    'Anniversary',
    'Engagement',
  ];

  const budgetRanges = [
    '₱50,000 - ₱100,000',
    '₱100,000 - ₱200,000',
    '₱200,000 - ₱500,000',
    '₱500,000+',
  ];

  return (
    <section ref={sectionRef} className="py-32 lg:py-40 px-6 lg:px-12 bg-champagne-light relative overflow-hidden">
      {/* Ambient Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-150 h-150 bg-champagne-gold/10 rounded-full blur-[200px]" />
        <div className="absolute bottom-0 left-1/4 w-125 h-125 bg-champagne/20 rounded-full blur-[180px]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: easeOutExpo }}
            className="flex items-center justify-center gap-5 mb-8"
          >
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-12 h-px bg-linear-to-r from-transparent to-champagne-gold/60 origin-right"
            />
            <span className="text-champagne-gold text-[11px] tracking-[0.5em] uppercase font-semibold">
              Begin Your Story
            </span>
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-12 h-px bg-linear-to-l from-transparent to-champagne-gold/60 origin-left"
            />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: easeOutExpo }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-matte-black mb-8 leading-[1.05]"
          >
            Book a{' '}
            <span className="italic font-subheading text-champagne-gold">Consultation</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: easeOutExpo }}
            className="text-warm-gray max-w-2xl mx-auto text-base md:text-lg lg:text-xl leading-[1.9] font-light"
          >
            Share your vision with us, and let's craft something extraordinary together.
          </motion.p>
        </div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="bg-white/60 backdrop-blur-2xl border border-white/60 rounded-[28px] p-8 md:p-14 shadow-[0_30px_80px_-20px_rgba(201,169,110,0.15)]"
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-champagne-gold/20 flex items-center justify-center">
                <Send className="w-7 h-7 text-champagne-gold" />
              </div>
              <h3 className="font-heading text-2xl text-matte-black mb-2">Thank You!</h3>
              <p className="text-warm-gray">We'll be in touch within 24 hours.</p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div className="relative group">
                <label className="block text-[10px] tracking-[0.3em] uppercase text-warm-gray mb-2.5 font-medium">Name</label>
                <div className="relative">
                  <User className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-champagne-gold" strokeWidth={1.5} />
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full pl-7 pr-2 pb-3 bg-transparent border-b border-warm-gray/25 text-charcoal placeholder:text-warm-gray/40 focus:outline-none focus:border-champagne-gold transition-colors duration-300"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="relative group">
                <label className="block text-[10px] tracking-[0.3em] uppercase text-warm-gray mb-2.5 font-medium">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-champagne-gold" strokeWidth={1.5} />
                  <input
                    type="email"
                    name="email"
                    placeholder="email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-7 pr-2 pb-3 bg-transparent border-b border-warm-gray/25 text-charcoal placeholder:text-warm-gray/40 focus:outline-none focus:border-champagne-gold transition-colors duration-300"
                  />
                </div>
              </div>

              {/* Event Type */}
              <div className="relative">
                <label className="block text-[10px] tracking-[0.3em] uppercase text-warm-gray mb-2.5 font-medium">Event Type</label>
                <select
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  required
                  className="w-full pb-3 bg-transparent border-b border-warm-gray/25 text-charcoal appearance-none focus:outline-none focus:border-champagne-gold transition-colors duration-300 cursor-pointer"
                >
                  <option value="">Select event type</option>
                  {eventTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              {/* Date */}
              <div className="relative">
                <label className="block text-[10px] tracking-[0.3em] uppercase text-warm-gray mb-2.5 font-medium">Event Date</label>
                <div className="relative">
                  <Calendar className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-champagne-gold" strokeWidth={1.5} />
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full pl-7 pb-3 bg-transparent border-b border-warm-gray/25 text-charcoal focus:outline-none focus:border-champagne-gold transition-colors duration-300"
                  />
                </div>
              </div>

              {/* Budget */}
              <div className="md:col-span-2">
                <label className="block text-[10px] tracking-[0.3em] uppercase text-warm-gray mb-2.5 font-medium">Estimated Budget</label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  required
                  className="w-full pb-3 bg-transparent border-b border-warm-gray/25 text-charcoal appearance-none focus:outline-none focus:border-champagne-gold transition-colors duration-300 cursor-pointer"
                >
                  <option value="">Select budget range</option>
                  {budgetRanges.map((range) => (
                    <option key={range} value={range}>{range}</option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div className="md:col-span-2 relative">
                <label className="block text-[10px] tracking-[0.3em] uppercase text-warm-gray mb-2.5 font-medium">Your Vision</label>
                <div className="relative">
                  <MessageSquare className="absolute left-0 top-3 w-4 h-4 text-champagne-gold" strokeWidth={1.5} />
                  <textarea
                    name="message"
                    placeholder="Tell us about your dream celebration..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full pl-7 pr-2 pb-3 pt-2 bg-transparent border-b border-warm-gray/25 text-charcoal placeholder:text-warm-gray/40 focus:outline-none focus:border-champagne-gold transition-colors duration-300 resize-none"
                  />
                </div>
              </div>

              {/* Submit */}
              <div className="md:col-span-2 pt-2">
                <button
                  type="submit"
                  className="group w-full py-5 bg-charcoal text-pearl text-[12px] tracking-[0.25em] uppercase font-medium rounded-full hover:bg-champagne-gold transition-all duration-500 hover:shadow-[0_15px_40px_-10px_rgba(201,169,110,0.5)] flex items-center justify-center gap-3"
                >
                  <Send className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                  Send Inquiry
                </button>
                <p className="text-center text-warm-gray text-xs mt-4 font-light">
                  We'll respond within 24 hours · No commitment required
                </p>
              </div>
            </div>
          )}
        </motion.form>
      </div>
    </section>
  );
}
