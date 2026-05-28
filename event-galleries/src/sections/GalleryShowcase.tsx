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
    <section className="py-24 lg:py-32 px-6 lg:px-16 bg-ivory-warm">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mb-12"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px bg-champagne-gold" />
            <span className="text-champagne-gold text-[10px] tracking-[0.35em] uppercase font-medium">
              Portfolio
            </span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-matte-black mb-5 leading-[1.08]">
            Gallery{' '}
            <span className="italic font-subheading text-champagne-gold">Showcase</span>
          </h2>
          <p className="text-warm-gray text-[15px] leading-[1.8]">
            A curated collection of our finest event designs and luxury installations.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 rounded-full text-[11px] tracking-[0.12em] uppercase font-medium transition-all duration-300 ${
                activeFilter === cat
                  ? 'bg-matte-black text-white'
                  : 'bg-white text-warm-gray hover:bg-soft-beige hover:text-matte-black border border-champagne/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Masonry Grid */}
        <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                className="break-inside-avoid group relative rounded-xl overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage(item.image)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-matte-black/0 group-hover:bg-matte-black/50 transition-colors duration-400 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-4">
                    <ZoomIn className="w-6 h-6 text-white mx-auto mb-2" strokeWidth={1.5} />
                    <h4 className="text-white font-heading text-base">
                      {item.title}
                    </h4>
                    <p className="text-white/60 text-[12px] mt-1">{item.category}</p>
                  </div>
                </div>
                {item.featured && (
                  <div className="absolute top-3 left-3 px-2.5 py-1 bg-champagne-gold/90 text-white text-[10px] font-medium rounded-full tracking-wide">
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
            className="fixed inset-0 z-50 bg-matte-black/95 flex items-center justify-center p-6"
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
              src={selectedImage.replace('w=800', 'w=1400')}
              alt="Gallery preview"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
