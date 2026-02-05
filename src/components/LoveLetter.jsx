"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Pen, Send, X } from "lucide-react";
import Envelope from "./Envelope";

export default function LoveLetter() {
  const [isOpen, setIsOpen] = useState(false);

  const letterContent = `Kadang aku mikir, dari sekian banyak hal yang terjadi di hidup ini, ketemu kamu tuh salah satu yang paling bikin aku bersyukur. Bukan karena semuanya selalu sempurna, tapi karena bareng kamu, hal-hal sederhana jadi terasa cukup. Cara kamu hadir, tanpa sadar, selalu bikin hari-hariku lebih tenang.

Aku suka bagaimana kita bisa ketawa tanpa alasan yang jelas, ngobrol sampai lupa waktu, atau diam tapi tetap merasa dekat. Kamu ngajarin aku bahwa cinta nggak selalu harus besar dan ribut, kadang cukup konsisten, jujur, dan saling memahami. Dan di situ, aku nemu rasa pulang.

Di hari Valentine ini, aku cuma pengen bilang: terima kasih sudah jadi kamu, dengan segala versi baik dan kurangnya. Semoga ke depannya, kita bisa terus jalan bareng, pelan-pelan, sambil saling jaga. Kalau aku boleh berharap satu hal, semoga selalu ada "kita" di cerita-cerita selanjutnya 💘💘💘`;

  return (
    <>
      <section
        id="love-letter"
        className="min-h-screen flex flex-col items-center justify-center py-16 sm:py-20 px-4 sm:px-6 lg:px-8"
      >
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center text-center mb-16 sm:mb-20 w-full select-none"
        >
          {/* Title with Icons */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <Pen size={20} className="sm:w-6 sm:h-6 text-amber-400" />
            <h2 className="font-cursive text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-700 select-none">
              My Love Letter
            </h2>
            <Send size={20} className="sm:w-6 sm:h-6 text-amber-400" />
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-pink-400 text-sm sm:text-base md:text-lg select-none"
          >
            klik amplop dibawah
          </motion.p>
        </motion.div>
        <br></br>
        {/* Envelope Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center w-full max-w-3xl mx-auto"
        >
          <Envelope onClick={() => setIsOpen(true)} />
        </motion.div>
      </section>

      {/* Letter Modal - Appears centered on screen */}
      <AnimatePresence mode="sync">
        {isOpen && (
          <motion.div
            key="letter-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          >
            <motion.div
              key="letter-content"
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ duration: 0.5, type: "spring", bounce: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 sm:p-10 md:p-12 shadow-2xl border border-pink-100 w-full max-w-2xl mx-auto flex flex-col items-center my-auto max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 bg-pink-100 hover:bg-pink-200 rounded-full p-2 transition-colors"
              >
                <X size={20} className="text-pink-500" />
              </button>

              {/* Letter Header */}
              <div className="flex justify-center mb-8">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Heart
                    className="text-pink-500"
                    size={40}
                    fill="currentColor"
                  />
                </motion.div>
              </div>

              {/* Letter Content */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="font-cursive text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed whitespace-pre-line text-center select-none pointer-events-none max-w-xl mx-auto"
              >
                {letterContent}
              </motion.div>

              {/* Decorative Line */}
              <div className="flex items-center justify-center gap-3 my-8">
                <div className="w-16 h-[1px] bg-pink-200"></div>
                <Heart size={12} className="text-pink-300" fill="currentColor" />
                <div className="w-16 h-[1px] bg-pink-200"></div>
              </div>

              {/* Close Button */}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(false)}
                className="btn-primary text-sm sm:text-base px-8 py-3"
              >
                Close Letter 💌
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
