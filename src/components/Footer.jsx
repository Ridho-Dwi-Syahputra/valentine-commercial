"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
      {/* Main Message */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center justify-center text-center w-full max-w-2xl mx-auto"
      >
        <h2 className="font-cursive text-3xl sm:text-4xl md:text-5xl text-gray-700 mb-6 sm:mb-8 select-none">
          Loveee youu alwayss'
        </h2>

        

        {/* Animated Hearts */}
        <div className="flex justify-center items-end gap-3 sm:gap-5 mb-10 sm:mb-12">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                scale: [1, 1.2, 1],
                y: [0, -5, 0],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.15,
              }}
            >
              <Heart
                className="text-pink-400"
                size={18 + i * 5}
                fill="currentColor"
              />
            </motion.div>
          ))}
        </div>

        {/* Valentine Message - without card, just text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex items-center justify-center gap-2"
        >
          <Heart size={20} className="text-pink-400" fill="currentColor" />
          <p className="font-cursive text-2xl sm:text-3xl md:text-4xl gradient-text select-none">
            Happy Valentine's Day {currentYear}
          </p>
          <Heart size={20} className="text-pink-400" fill="currentColor" />
        </motion.div>

        {/* Made with love text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex items-center justify-center gap-2 mt-8 sm:mt-10"
        >
          <br></br>
          <br></br>
        </motion.div>
      </motion.div>
    </footer>
  );
}
