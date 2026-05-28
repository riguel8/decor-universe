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
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });
  
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
    <section ref={sectionRef} className="py-24 lg:py-32 px-6 lg:px-16 bg-soft-beige">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left — Header */}
          <div className="lg:col-span-2 lg:sticky lg:top-32 lg:self-start">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease: easeOutExpo }}
              className="flex items-center gap-3 mb-5"
            >
              <div className="w-8 h-px bg-champagne-gold" />
              <span className="text-champagne-gold text-[10px] tracking-[0.35em] uppercase font-medium">
                Begin Your Story
              </span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.1, ease: easeOutExpo }}
              className="font-heading text-3xl md:text-4xl lg:text-[42px] text-matte-black mb-5 leading-[1.1]"
            >
              Book a{' '}
              <span className="italic font-subheading text-champagne-gold">Consultation</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2, ease: easeOutExpo }}
              className="text-warm-gray text-[15px] leading-[1.8] mb-8"
            >
              Share your vision with us, and let's craft something extraordinary together.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3, ease: easeOutExpo }}
              className="hidden lg:block space-y-4 pt-6 border-t border-champagne/15"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-champagne-gold/10 flex items-center justify-center">
                  <Mail className="w-3.5 h-3.5 text-champagne-gold" strokeWidth={1.5} />
                </div>
                <span className="text-warm-gray text-[13px]">hello@jbscreation.com</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-champagne-gold/10 flex items-center justify-center">
                  <Calendar className="w-3.5 h-3.5 text-champagne-gold" strokeWidth={1.5} />
                </div>
                <span className="text-warm-gray text-[13px]">Mon — Sun, 9AM — 7PM</span>
              </div>
            </motion.div>
          </div>

          {/* Right — Form */}
          <div className="lg:col-span-3">
            <motion.form
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-7 md:p-10 border border-champagne/10"
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16"
                >
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-champagne-gold/15 flex items-center justify-center">
                    <Send className="w-6 h-6 text-champagne-gold" />
                  </div>
                  <h3 className="font-heading text-2xl text-matte-black mb-2">Thank You!</h3>
                  <p className="text-warm-gray text-[14px]">We'll be in touch within 24 hours.</p>
                </motion.div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label className="block text-[10px] tracking-[0.25em] uppercase text-warm-gray mb-2 font-medium">Name</label>
                    <div className="relative">
                      <User className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-champagne-gold/60" strokeWidth={1.5} />
                      <input
                        type="text"
                        name="name"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full pl-7 pb-3 bg-transparent border-b border-champagne/20 text-matte-black placeholder:text-warm-gray-light/60 focus:outline-none focus:border-champagne-gold transition-colors duration-300 text-[14px]"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-[10px] tracking-[0.25em] uppercase text-warm-gray mb-2 font-medium">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-champagne-gold/60" strokeWidth={1.5} />
                      <input
                        type="email"
                        name="email"
                        placeholder="email@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full pl-7 pb-3 bg-transparent border-b border-champagne/20 text-matte-black placeholder:text-warm-gray-light/60 focus:outline-none focus:border-champagne-gold transition-colors duration-300 text-[14px]"
                      />
                    </div>
                  </div>

                  {/* Event Type */}
                  <div>
                    <label className="block text-[10px] tracking-[0.25em] uppercase text-warm-gray mb-2 font-medium">Event Type</label>
                    <select
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      required
                      className="w-full pb-3 bg-transparent border-b border-champagne/20 text-matte-black appearance-none focus:outline-none focus:border-champagne-gold transition-colors duration-300 cursor-pointer text-[14px]"
                    >
                      <option value="">Select event type</option>
                      {eventTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  {/* Date */}
                  <div>
                    <label className="block text-[10px] tracking-[0.25em] uppercase text-warm-gray mb-2 font-medium">Event Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-champagne-gold/60" strokeWidth={1.5} />
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        className="w-full pl-7 pb-3 bg-transparent border-b border-champagne/20 text-matte-black focus:outline-none focus:border-champagne-gold transition-colors duration-300 text-[14px]"
                      />
                    </div>
                  </div>

                  {/* Budget */}
                  <div className="md:col-span-2">
                    <label className="block text-[10px] tracking-[0.25em] uppercase text-warm-gray mb-2 font-medium">Estimated Budget</label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      required
                      className="w-full pb-3 bg-transparent border-b border-champagne/20 text-matte-black appearance-none focus:outline-none focus:border-champagne-gold transition-colors duration-300 cursor-pointer text-[14px]"
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range}>{range}</option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div className="md:col-span-2">
                    <label className="block text-[10px] tracking-[0.25em] uppercase text-warm-gray mb-2 font-medium">Your Vision</label>
                    <div className="relative">
                      <MessageSquare className="absolute left-0 top-3 w-4 h-4 text-champagne-gold/60" strokeWidth={1.5} />
                      <textarea
                        name="message"
                        placeholder="Tell us about your dream celebration..."
                        value={formData.message}
                        onChange={handleChange}
                        rows={3}
                        className="w-full pl-7 pb-3 pt-1 bg-transparent border-b border-champagne/20 text-matte-black placeholder:text-warm-gray-light/60 focus:outline-none focus:border-champagne-gold transition-colors duration-300 resize-none text-[14px]"
                      />
                    </div>
                  </div>

                  {/* Submit */}
                  <div className="md:col-span-2 pt-3">
                    <button
                      type="submit"
                      className="group w-full py-4 bg-matte-black text-white text-[11px] tracking-[0.2em] uppercase font-medium rounded-full hover:bg-champagne-gold transition-colors duration-400 flex items-center justify-center gap-2.5"
                    >
                      <Send className="w-3.5 h-3.5" />
                      Send Inquiry
                    </button>
                    <p className="text-center text-warm-gray-light text-[11px] mt-3">
                      We'll respond within 24 hours · No commitment required
                    </p>
                  </div>
                </div>
              )}
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}
