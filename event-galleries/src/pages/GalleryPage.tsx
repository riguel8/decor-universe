import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, Filter } from 'lucide-react';
import { galleryItems } from '../data';

const categories = ['All', ...new Set(galleryItems.map((item) => item.category))];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredItems =
    activeFilter === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="py-32 px-6 bg-matte-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <img
            src="/assets/decor/28ecb6db-7db5-4124-8dcc-5b7515cb104f.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-linear-to-b from-matte-black/70 via-matte-black/80 to-matte-black" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-champagne-gold/10 blur-[120px]" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="w-10 h-px bg-champagne-gold/50" />
            <span className="text-champagne-gold text-[11px] tracking-[0.4em] uppercase font-medium">
              Our Portfolio
            </span>
            <div className="w-10 h-px bg-champagne-gold/50" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-heading text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-[1.05]"
          >
            Event{' '}
            <span className="italic font-subheading text-champagne">Gallery</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-white/60 text-base md:text-lg max-w-2xl mx-auto leading-[1.8] font-light"
          >
            Explore our curated collection of luxury event designs, installations, and unforgettable celebrations.
          </motion.p>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="py-20 px-6 bg-pearl">
        <div className="max-w-7xl mx-auto">
          {/* Filter Tabs */}
          <div className="flex items-center gap-2 mb-14 flex-wrap justify-center">
            <div className="flex items-center gap-2 mr-3 text-champagne-gold">
              <Filter className="w-3.5 h-3.5" strokeWidth={1.5} />
              <span className="text-[10px] tracking-[0.3em] uppercase font-medium">Filter</span>
            </div>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-6 py-2.5 rounded-full text-[11px] tracking-[0.15em] uppercase font-medium transition-all duration-400 ${
                  activeFilter === cat
                    ? 'bg-charcoal text-pearl shadow-[0_10px_30px_-10px_rgba(0,0,0,0.4)]'
                    : 'bg-white text-warm-gray hover:bg-champagne/40 hover:text-charcoal border border-champagne/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-5 space-y-5">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="break-inside-avoid group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer bg-white"
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
                      <h4 className="text-white font-heading text-lg font-semibold px-4">
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
      </section>

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
              src={selectedImage}
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
    </div>
  );
}
