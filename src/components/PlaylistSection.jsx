"use client";

import { motion } from "framer-motion";
import { Music, Heart } from "lucide-react";

export default function PlaylistSection() {

  return (
    <section className="min-h-screen py-16 sm:py-20 px-4 flex flex-col items-center justify-center">
      {/* Section Header - OUTSIDE Card like other sections */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center justify-center text-center mb-16 w-full relative z-20"
      >
        {/* Title with Icons */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <Music size={24} className="text-amber-400" />
          <h2 className="font-cursive text-4xl sm:text-5xl md:text-6xl text-gray-700 select-none pointer-events-none">
            Playlist for You
          </h2>
          <Music size={24} className="text-amber-400" />
        </div>

        {/* Subtitle */}
        <p className="text-pink-400/80 text-base md:text-lg max-w-lg mx-auto italic mb-8 select-none pointer-events-none">
          Lagu lagu ini khusus buat kamu
        </p>

        {/* Decorative Line */}
        <div className="flex items-center justify-center gap-3">
          <div className="w-24 sm:w-36 h-[1px] bg-gradient-to-r from-transparent to-pink-300"></div>
          <Heart size={14} className="text-pink-400" fill="currentColor" />
          <div className="w-24 sm:w-36 h-[1px] bg-gradient-to-l from-transparent to-pink-300"></div>
        </div>
      </motion.div>
      <br></br>
      {/* Main Card Container */}

      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full max-w-3xl mx-auto px-4"
      >
        {/* Outer Card - Pink Style as requested */}
        <br></br>
        <div className="bg-[#FFF0F5] rounded-[3rem] p-10 sm:p-14 shadow-[0_8px_40px_0_rgba(255,182,193,0.5)] border border-pink-100 relative overflow-hidden flex flex-col items-center">
          {/* Subtle Gradient Overlay */}
          <div className="absolute top-0 left-2 w-full h-full bg-gradient-to-br from-white/40 to-transparent pointer-events-none" />

          {/* Card Header - Our Playlist */}

          {/* Card Header - Our Playlist */}
          <br></br>
          <div className="flex items-center gap-3 mb-6 select-none relative z-5 w-full justify-center">
          
            <div className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 bg-[#E33558] shadow-md transform hover:scale-105 transition-transform duration-300">
        
              <Music className="text-white ml-0.5" size={32} strokeWidth={2} />
            </div>
           
            <div className="text-left">
           
              <h3 className="font-serif text-gray-700 text-2xl sm:text-4xl italic tracking-wide"></h3>
              <p className="text-[#E33558]/70 font-cursive text-xl italic leading-tight">Kuncinya Huruf pertama lagu</p>
            </div>
          </div>

          {/* Inner Spotify Card - Iframe */}
          <br></br>
          <div className="w-full sm:w-[90%] max-w-xl mx-auto transform transition-transform duration-300 rounded-2xl overflow-hidden shadow-2xl mb-8">
            <iframe
              style={{ borderRadius: "20px" }}
              src="https://open.spotify.com/embed/playlist/3apucrjRIUJwDZyKt4zaWG?utm_source=generator&theme=0"
              width="100%"
              height="400"
              allowFullScreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Playlist for you"
            ></iframe>
          </div>
          <br></br>
          {/* Play Our Love Text */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex items-center justify-center gap-2 select-none"
          >
            <Heart size={12} className="text-pink-400" fill="currentColor" />
            <span className="font-cursive text-lg text-pink-400 italic">ketemu artinya?</span> <br></br>
            <Heart size={12} className="text-pink-400" fill="currentColor" /> <br></br>
          </motion.div>
          <br></br>
        </div>
      </motion.div>
      <br></br>
    </section>
  );
}
