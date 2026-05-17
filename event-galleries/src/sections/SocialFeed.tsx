import { motion } from 'framer-motion';
import { Heart, Instagram } from 'lucide-react';
import { socialPosts } from '../data';

export default function SocialFeed() {
  return (
    <section className="py-28 px-6 bg-pearl">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-10 h-px bg-champagne-gold/50" />
            <span className="text-champagne-gold text-[11px] tracking-[0.4em] uppercase font-medium">
              Follow the Journey
            </span>
            <div className="w-10 h-px bg-champagne-gold/50" />
          </div>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-charcoal mb-6 leading-[1.1]">
            <span className="italic font-subheading text-champagne-gold">@</span>DecorUniverse
          </h2>
          <p className="text-warm-gray max-w-2xl mx-auto text-base md:text-lg leading-[1.8] font-light">
            A daily curation of our latest creations and behind-the-scenes moments.
          </p>
        </motion.div>

        {/* Social Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {socialPosts.map((post, index) => (
            <motion.a
              key={post.id}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative aspect-square rounded-2xl overflow-hidden shadow-[0_10px_30px_-15px_rgba(0,0,0,0.15)]"
            >
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-matte-black/0 group-hover:bg-matte-black/60 transition-colors duration-500 flex items-end p-4">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 w-full">
                  <Instagram className="w-4 h-4 text-champagne mb-2" strokeWidth={1.5} />
                  <div className="flex items-center gap-1.5">
                    <Heart className="w-3 h-3 text-white fill-white" />
                    <span className="text-white text-xs">
                      {post.likes.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 border border-champagne-gold/40 rounded-full text-[11px] tracking-[0.25em] uppercase font-medium text-champagne-gold hover:bg-champagne-gold hover:text-white hover:border-champagne-gold transition-all duration-500"
          >
            <Instagram className="w-4 h-4" strokeWidth={1.5} />
            Follow on Instagram
          </a>
        </motion.div>
      </div>
    </section>
  );
}
