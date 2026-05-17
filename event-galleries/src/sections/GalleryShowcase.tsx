import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import { galleryItems } from '../data';

const categories = ['All', ...new Set(galleryItems.map((item) => item.category))];

export default function GalleryShowcase() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredItems =
    activeFilter === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <section className="py-28 px-6 bg-white">
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
              Portfolio
            </span>
            <div className="w-10 h-px bg-champagne-gold/50" />
          </div>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-charcoal mb-6 leading-[1.1]">
            Gallery{' '}
            <span className="italic font-subheading text-champagne-gold">Showcase</span>
          </h2>
          <p className="text-warm-gray max-w-2xl mx-auto text-base md:text-lg leading-[1.8] font-light">
            A curated collection of our finest event designs and luxury installations.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-16"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-6 py-2.5 rounded-full text-[11px] tracking-[0.15em] uppercase font-medium transition-all duration-400 ${
                activeFilter === cat
                  ? 'bg-charcoal text-pearl shadow-[0_10px_30px_-10px_rgba(0,0,0,0.4)]'
                  : 'bg-soft-beige text-warm-gray hover:bg-champagne/50 hover:text-charcoal'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Masonry Grid */}
        <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="break-inside-avoid group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                onClick={() => setSelectedImage(item.image)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                    <ZoomIn className="w-8 h-8 text-white mx-auto mb-2" />
                    <h4 className="text-white font-heading text-lg font-semibold">
                      {item.title}
                    </h4>
                    <p className="text-white/70 text-sm">{item.category}</p>
                  </div>
                </div>
                {item.featured && (
                  <div className="absolute top-4 left-4 px-3 py-1 bg-champagne-gold text-white text-xs font-medium rounded-full">
                    Featured
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              src={selectedImage.replace('w=800', 'w=1400')}
              alt="Gallery preview"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 p-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
