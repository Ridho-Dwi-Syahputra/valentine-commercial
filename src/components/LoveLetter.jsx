"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Pen, Send } from "lucide-react";
import Envelope from "./Envelope";

export default function LoveLetter() {
  const [isOpen, setIsOpen] = useState(false);

  const letterContent = `Kadang aku mikir, dari sekian banyak hal yang terjadi di hidup ini, ketemu kamu tuh salah satu yang paling bikin aku bersyukur. Bukan karena semuanya selalu sempurna, tapi karena bareng kamu, hal-hal sederhana jadi terasa cukup. Cara kamu hadir, tanpa sadar, selalu bikin hari-hariku lebih tenang.

Aku suka bagaimana kita bisa ketawa tanpa alasan yang jelas, ngobrol sampai lupa waktu, atau diam tapi tetap merasa dekat. Kamu ngajarin aku bahwa cinta nggak selalu harus besar dan ribut, kadang cukup konsisten, jujur, dan saling memahami. Dan di situ, aku nemu rasa pulang.

Di hari Valentine ini, aku cuma pengen bilang: terima kasih sudah jadi kamu, dengan segala versi baik dan kurangnya. Semoga ke depannya, kita bisa terus jalan bareng, pelan-pelan, sambil saling jaga. Kalau aku boleh berharap satu hal, semoga selalu ada “kita” di cerita-cerita selanjutnya 💘💘💘`;

  return (
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
        <AnimatePresence mode="sync">
          {!isOpen ? (
            <motion.div
              key="envelope"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20, scale: 0.9 }}
              transition={{ duration: 0.5 }}
            >
              <Envelope onClick={() => setIsOpen(true)} />
            </motion.div>
          ) : (
            <motion.div
              key="letter"
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-10 sm:p-12 md:p-14 shadow-2xl border border-pink-100 w-full max-w-3xl mx-auto flex flex-col items-center"
            >
              {/* Letter Header */}
              <br></br>
              <div className="flex justify-center mb-10">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Heart
                    className="text-pink-500"
                    size={36}
                    fill="currentColor"
                  />
                </motion.div>
              </div>

              {/* Letter Content */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="font-cursive text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed whitespace-pre-line text-center select-none pointer-events-none max-w-2xl mx-auto px-4"
              >
                {letterContent}
              </motion.div>

              {/* Decorative Line */}
              <div className="flex items-center justify-center gap-3 my-10">
                <div className="w-16 h-[1px] bg-pink-200"></div>
                <Heart size={12} className="text-pink-300" fill="currentColor" />
                <div className="w-16 h-[1px] bg-pink-200"></div>
              </div>
              <br></br>
              {/* Close Button */}
              <div className="flex justify-center w-full">
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsOpen(false)}
                  className="btn-primary text-sm sm:text-base px-8 py-3"
                >
                  Close Letter 💌
                </motion.button>
              </div>
              <br></br>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
