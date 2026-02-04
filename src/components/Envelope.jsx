"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function Envelope({ onClick }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -5 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="cursor-pointer flex items-center justify-center w-full"
    >
      {/* Envelope Container */}
      <div className="relative w-[320px] sm:w-[420px] md:w-[500px] lg:w-[560px] h-[200px] sm:h-[260px] md:h-[320px] lg:h-[340px]">
        
        {/* Envelope Body - White/Cream base */}
        <div className="absolute inset-0 bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border-2 border-pink-100">
          
          {/* Envelope Flap - Top Triangle pointing down */}
          <div 
            className="absolute top-0 left-0 right-0 z-10"
            style={{
              height: "55%",
              background: "linear-gradient(180deg, #FFF5F7 0%, #FFE8EE 100%)",
              clipPath: "polygon(0 0, 100% 0, 50% 100%)",
            }}
          />
          
          {/* Inner shadow on flap */}
          <div 
            className="absolute top-0 left-0 right-0 z-11"
            style={{
              height: "55%",
              background: "linear-gradient(180deg, transparent 60%, rgba(255,182,193,0.3) 100%)",
              clipPath: "polygon(0 0, 100% 0, 50% 100%)",
            }}
          />

          {/* Left diagonal line - from top-left to center-bottom */}
          <div 
            className="absolute inset-0 z-5"
            style={{
              background: "linear-gradient(to bottom right, transparent calc(50% - 1px), rgba(255,182,193,0.5) 50%, transparent calc(50% + 1px))",
            }}
          />
          
          {/* Right diagonal line - from top-right to center-bottom */}
          <div 
            className="absolute inset-0 z-5"
            style={{
              background: "linear-gradient(to bottom left, transparent calc(50% - 1px), rgba(255,182,193,0.5) 50%, transparent calc(50% + 1px))",
            }}
          />

          {/* Bottom section (behind content) */}
          <div className="absolute bottom-0 left-0 right-0 h-[60%] bg-gradient-to-t from-white to-pink-50/30 z-1" />

          {/* Heart Seal - centered on the envelope - simple heart without circle */}
          <motion.div
            className="absolute top-[38%] sm:top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30"
            animate={{
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
          >
            <Heart size={32} className="sm:w-10 sm:h-10 md:w-12 md:h-12 text-pink-400" fill="currentColor" />
          </motion.div>

          {/* Open Me Text - centered below the seal */}
          <div className="absolute top-[55%] sm:top-[58%] left-0 right-0 flex flex-col items-center justify-center text-center z-20 select-none">
            <motion.p
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="font-cursive text-2xl sm:text-3xl md:text-4xl text-pink-400 mb-3 sm:mb-4 select-none"
            >
              Open Me
            </motion.p>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
              className="flex items-center justify-center"
            >
              <Heart size={20} className="sm:w-6 sm:h-6 md:w-7 md:h-7 text-pink-300" />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
