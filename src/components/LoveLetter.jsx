"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Pen, Send } from "lucide-react";
import Envelope from "./Envelope";

export default function LoveLetter() {
  const [isOpen, setIsOpen] = useState(false);

  const letterContent = `Haloo Sayaaang, Aku mau ngucapin makasiii bangett karena udah mau modusin aku pertama kali. Mungkin emang betul kata ayaang, kalau ayaang yang ga mulai dulu, mungkin kita ga sampai ke titik ini. Makasiii yaa sayaaang karena udah mau perjuangin aku "awalnya". Awalnya ajaa yaaa, karena ayang tuh ngeselin waktu kita masih hts sama awal awal pacaran, ayang banyak boongin sama nyisihin aku. Ayang selalu prioritasin teman teman ayaang. Tapi yaa, walaupun gitu aku tetap sayaaangg bangeett sama ayaang, aku yakin ayang pasti bakal berubah, ayang pasti ga ngulangin apa yang ga aku suka dan ternyataa aku emang benarr. Ayang mau berubah demi aku, sekarang ayaang ga nyisihin aku agii, ayang selaluu prioritasin aku, makaciii yaa cayaangnyaa akuu. 
  
  Maaf yaa kalau aku kadang ngeselin, kadang suka buat ayang marah, buat ayaang nangiss, Maaf yaaa sayaaang. Aku ga ada maksud buat ayaang nangiss, aku cuman mau isengin ayang, tapi ternyataa too much sampai buat ayang nangiss, tapi ayang tuh gaboyee minta minta putuss gituu, aku sedihh... kalau kita ada masalah, ayaang selalu minta minta putuss, kasian tigran nanti ayaang. Ayaaang tuh haruss ingatt, kalau satu satunya cewek yang ada di hati aku tuh cumann ayaang, cuman ayang cewek yang aku effort in sampai sejauh ini, cuman samaa ayaang aku se kecintaan ini, cumaan ayang satu satunya cewek yang hubungannya paling lama sama aku, yaa walaupun ayang engga yaaa. Jadiii, ayaang tuhhh ga boyeh jealousss, I'm yourss babyy.  
  
  Akuuu tuhhh sayaaaaaaaaangggggg bangeeeett bangeeett bangeeeeett bangeeeettt bangeeetttt camaaa ayaang, makasih yaa udah buat aku se happy ini. aku janjii bakall buat ayang happy jugaa camaa akuu. Yeayyy Congratss ayaang, kitaa udah sampaii sejauh iniii. Janjii yaa kalau ada masalahh, kita selesain baik baik, kita ga boyehh minta minta putuss, kita gaboleh diamin masalah, gaboyeh block block, kalau ayang yang salah, aku bakal dengarin. teyuss kalau aku yang salah, ayang hayuss dengarinn jugaa yaa, gaboyehh biyaang putuss putuss yaa cintaa, ga boyeehh biyaaang udahan, gamau di chat lalalalaa. Wufyuuuuu Cayaaanggggnyaaa akuuu.💖💖💖
  
  Happy Valentine's Dayy Sayaaangggg.💘💘💘`;

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
        <AnimatePresence mode="wait">
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
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-10 sm:p-12 md:p-14 shadow-2xl border border-pink-100 max-w-2xl mx-auto"
            >
              {/* Letter Header */}
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
                className="font-cursive text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed whitespace-pre-line text-center select-none pointer-events-none px-16 sm:px-20 md:px-24"
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
