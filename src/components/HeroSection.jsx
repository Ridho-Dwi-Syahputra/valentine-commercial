"use client";

import { motion } from "framer-motion";
import { Heart, ChevronDown } from "lucide-react";

export default function HeroSection() {
  const scrollToLetter = () => {
    const letterSection = document.getElementById("love-letter");
    if (letterSection) {
      letterSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Fixed positions for hearts to avoid hydration issues
  const heartPositions = [
    { left: "5%", top: "15%" },
    { left: "90%", top: "10%" },
    { left: "8%", top: "75%" },
    { left: "88%", top: "80%" },
    { left: "15%", top: "45%" },
    { left: "85%", top: "50%" },
    { left: "12%", top: "25%" },
    { left: "82%", top: "35%" },
    { left: "20%", top: "65%" },
    { left: "78%", top: "70%" },
    { left: "25%", top: "20%" },
    { left: "75%", top: "60%" },
    { left: "35%", top: "8%" },
    { left: "65%", top: "85%" },
    { left: "45%", top: "5%" },
    { left: "55%", top: "90%" },
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Decorative Hearts Background - Fixed Positions */}
      <div className="absolute inset-0 pointer-events-none">
        {heartPositions.map((pos, i) => (
          <motion.div
            key={i}
            className="absolute text-pink-300/30"
            style={{
              left: pos.left,
              top: pos.top,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0],
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut",
            }}
          >
            <Heart 
              size={i % 2 === 0 ? 30 : 24} 
              strokeWidth={1.5}
            />
          </motion.div>
        ))}
        
        {/* Additional Pulsing Hearts */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`pulse-${i}`}
            className="absolute text-pink-200/20"
            style={{
              left: `${10 + i * 12}%`,
              top: `${30 + (i % 3) * 20}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 2 + i * 0.3,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
          >
            <Heart size={18 + (i % 3) * 6} strokeWidth={1} />
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center justify-center text-center z-10 w-full max-w-4xl mx-auto"
      >
        {/* Decorative Line with Heart */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex items-center justify-center gap-3 mb-8 sm:mb-10"
        >
          <div className="w-16 sm:w-24 md:w-32 h-[1px] bg-gradient-to-r from-transparent to-pink-300"></div>
          <Heart size={14} className="text-pink-400" fill="currentColor" />
          <div className="w-16 sm:w-24 md:w-32 h-[1px] bg-gradient-to-l from-transparent to-pink-300"></div>
        </motion.div>

        {/* Small Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-pink-400/80 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 tracking-[0.3em] sm:tracking-[0.4em] uppercase font-medium text-center select-none"
        >
          A Special Message For
        </motion.p>

        {/* Main Title - NAMA SATU BARIS */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-cursive text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] gradient-text mb-6 sm:mb-8 md:mb-10 leading-tight text-center select-none"
          style={{ whiteSpace: 'nowrap' }}
        >
          Raisya Bungaya
        </motion.h1>

        {/* Quote */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-gray-500 text-base sm:text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto mb-12 sm:mb-14 md:mb-16 lg:mb-20 italic font-light text-center px-4 select-none"
        >
          "Falling in love may seem cheesy,
but not with the right person, and that person is you."
        </motion.p>
        <br></br>
        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex justify-center w-full"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToLetter}
            className="btn-primary inline-flex items-center justify-center gap-3 text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-5"
          >
            <Heart size={20} className="sm:w-6 sm:h-6" />
            <span>Click Ini</span>
          </motion.button>
        </motion.div>
        <br></br>
        {/* Subtitle under button, tanpa garis dekoratif */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex items-center justify-center mt-8 sm:mt-10"
        >
          <span className="text-pink-400/70 text-sm sm:text-base font-cursive italic whitespace-nowrap select-none"></span>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-pink-400/60 cursor-pointer"
          onClick={scrollToLetter}
        >
          <ChevronDown size={28} className="sm:w-8 sm:h-8" />
        </motion.div>
      </motion.div>
    </section>
  );
}
