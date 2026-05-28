import { motion } from 'framer-motion';
import { Heart, Instagram } from 'lucide-react';
import { socialPosts } from '../data';

export default function SocialFeed() {
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-16 bg-ivory-warm">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
        >
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-champagne-gold" />
              <span className="text-champagne-gold text-[10px] tracking-[0.35em] uppercase font-medium">
                Follow the Journey
              </span>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-matte-black leading-[1.08]">
              <span className="italic font-subheading text-champagne-gold">@</span>JB'sCreation
            </h2>
          </div>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-champagne-gold/30 rounded-full text-[10px] tracking-[0.2em] uppercase font-medium text-champagne-gold hover:bg-champagne-gold hover:text-white hover:border-champagne-gold transition-all duration-400 self-start md:self-auto"
          >
            <Instagram className="w-3.5 h-3.5" strokeWidth={1.5} />
            Follow on Instagram
          </a>
        </motion.div>

        {/* Social Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
          {socialPosts.map((post, index) => (
            <motion.a
              key={post.id}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              className="group relative aspect-square rounded-xl overflow-hidden"
            >
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-matte-black/0 group-hover:bg-matte-black/50 transition-colors duration-400 flex items-end p-3">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1.5">
                  <Heart className="w-3 h-3 text-white fill-white" />
                  <span className="text-white text-[11px]">
                    {post.likes.toLocaleString()}
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
