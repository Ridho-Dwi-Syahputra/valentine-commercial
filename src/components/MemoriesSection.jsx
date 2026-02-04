"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, Heart, X } from "lucide-react";

// Import actual images
import image1 from "../assets/images/memories/image-1.jpeg";
import image2 from "../assets/images/memories/image-2.jpeg";
import image3 from "../assets/images/memories/image-3.jpeg";
import image4 from "../assets/images/memories/image-4.jpeg";
import image5 from "../assets/images/memories/image-5.jpeg";
import image6 from "../assets/images/memories/image-6.jpeg";

// Memories data with actual images
const memories = [
  {
    id: 1,
    image: image1,
    caption: "Ini Foto Pertamaa Kitaa Ketemuu",
    date: "25 Juny 2025",
  },
  {
    id: 2,
    image: image2,
    caption: "Ini Foto Waktu Pertaama kita nonton Bioskop",
    date: "26 Juny 2025",
  },
  {
    id: 3,
    image: image3,
    caption: "Photobooth pertamaaa kitaaa yeayy",
    date: "26 Juny 2025",
  },
  {
    id: 4,
    image: image4,
    caption: "Ini Waktu aku nyusulin ayaaang di TM",
    date: "29 Juny 2025",
  },
  {
    id: 5,
    image: image5,
    caption: "Ini Foto Waktu Terakhir kita nge datee dan malam sebelum kita tunangan",
    date: "26 July",
  },
  {
    id: 6,
    image: image6, // Using image-5 for the 6th slot as requested
    caption: "Ini Waktu Aku Ulang Tahun, Ayang Ngacii aku curprisee yeayy",
    date: "9 Desember 2025",
  },
];

export default function MemoriesSection() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="min-h-screen py-16 sm:py-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center justify-center text-center mb-12 sm:mb-16 md:mb-20 w-full"
      >
        {/* Title with Icons */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
          <Camera size={20} className="sm:w-6 sm:h-6 text-amber-400" />
          <h2 className="font-cursive text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-700 select-none pointer-events-none">
            Foto Foto Kita
          </h2>
          <Camera size={20} className="sm:w-6 sm:h-6 text-amber-400" />
        </div>

        {/* Subtitle */}
        <p className="text-pink-400/80 text-sm sm:text-base md:text-lg max-w-lg mx-auto italic mb-6 sm:mb-8 select-none pointer-events-none">
          Kok Dikit? Ya gimana lagi ayang duyuu lebih milih teman teman ayang
        </p>

        {/* Decorative Line */}
        <div className="flex items-center justify-center gap-3">
          <div className="w-20 sm:w-28 md:w-36 h-[1px] bg-gradient-to-r from-transparent to-pink-300"></div>
          <Heart size={12} className="text-pink-400" fill="currentColor" />
          <div className="w-20 sm:w-28 md:w-36 h-[1px] bg-gradient-to-l from-transparent to-pink-300"></div>
        </div>
      </motion.div>
      <br></br>

      {/* Gallery Grid - Centered */}
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {memories.map((memory, index) => (
            <motion.div
              key={memory.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              onClick={() => setSelectedImage(memory)}
              className="cursor-pointer w-full group"
            >
              {/* Image Card */}
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-lg">
                {/* Actual Image */}
                <img
                  src={memory.image.src}
                  alt={memory.caption}
                  className="w-full h-full object-cover"
                />

                {/* Heart Icons - top left and right corners */}
                <div className="absolute top-4 left-4 z-10">
                  <Heart
                    size={28}
                    className="text-white/70 drop-shadow-lg"
                    strokeWidth={1.5}
                  />
                </div>
                <div className="absolute top-4 right-4 z-10">
                  <Heart
                    size={28}
                    className="text-white/70 drop-shadow-lg"
                    strokeWidth={1.5}
                  />
                </div>

                {/* Hover Overlay - Pink gradient with centered text */}
                <div className="absolute inset-0 bg-gradient-to-t from-pink-400/80 via-pink-300/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-end pb-8 sm:pb-10">
                  <div className="flex flex-col items-center justify-center text-center select-none pointer-events-none px-4">
                    <p className="text-white font-cursive text-xl sm:text-2xl mb-2 drop-shadow-lg">
                      {memory.caption}
                    </p>
                    <p className="text-white/90 text-sm sm:text-base flex items-center justify-center gap-2">
                      <Heart size={14} fill="currentColor" />
                      <span>{memory.date}</span>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <br></br>
      {/* Bottom Decoration */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="flex items-center justify-center mt-12 sm:mt-16"
      >
        <br></br>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-center">
          <div className="hidden sm:block w-16 sm:w-24 h-[1px] bg-gradient-to-r from-transparent to-pink-300"></div>
          <div className="flex items-center gap-2">
            <Heart size={14} className="text-pink-400" fill="currentColor" />
            <span className="text-pink-400 text-sm sm:text-base font-cursive italic select-none text-center">awas masih nanya, "ayang sayang sama aku"</span>
            <Heart size={14} className="text-pink-400" fill="currentColor" />
          </div>
          <div className="hidden sm:block w-16 sm:w-24 h-[1px] bg-gradient-to-l from-transparent to-pink-300"></div>
        </div>
      </motion.div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 sm:p-8"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/40 transition-colors"
              >
                <X size={24} />
              </button>

              {/* Image */}
              <div className="aspect-[4/3] bg-gradient-to-br from-pink-100 to-pink-200 flex items-center justify-center overflow-hidden">
                <img
                  src={selectedImage.image.src}
                  alt={selectedImage.caption}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Caption */}
              <div className="p-4 sm:p-6 text-center select-none pointer-events-none">
                <p className="font-cursive text-xl sm:text-2xl text-gray-700 mb-2">
                  {selectedImage.caption}
                </p>
                <p className="text-pink-400 flex items-center justify-center gap-2">
                  <Heart size={14} fill="currentColor" />
                  <span>{selectedImage.date}</span>
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
