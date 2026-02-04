"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

// Color variants for hearts - pink pastel and soft red
const heartColors = [
  "text-pink-200",
  "text-pink-300",
  "text-pink-400",
  "text-rose-200",
  "text-rose-300",
  "text-red-200",
  "text-red-300",
];

export default function FloatingHearts() {
  const [hearts, setHearts] = useState([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Generate 60 hearts with random properties for much denser coverage and BIGGER sizes
    const initialHearts = Array.from({ length: 60 }, (_, i) => ({
      id: i,
      // Spread across entire width
      x: (i * 1.7) % 100,
      // BIGGER size (20-60px) as requested
      size: 20 + (i % 8) * 5,
      // Random duration (12-30 seconds)
      duration: 12 + (i % 10) * 2,
      // Staggered delay for continuous flow
      delay: (i % 25) * 0.6,
      // Opacity (0.2 - 0.5 for more visible effect)
      opacity: 0.2 + (i % 4) * 0.1,
      // Random color
      color: heartColors[i % heartColors.length],
      // Gentle sway amount
      sway: 20 + (i % 6) * 12,
      // More filled hearts
      filled: i % 2 === 0,
    }));
    setHearts(initialHearts);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className={`absolute ${heart.color}`}
          style={{
            left: `${heart.x}%`,
            bottom: "-80px",
          }}
          animate={{
            // Float from bottom to top (beyond screen)
            y: [0, -2200],
            // Gentle side-to-side sway
            x: [
              0,
              heart.sway,
              -heart.sway * 0.5,
              heart.sway * 0.8,
              -heart.sway * 0.3,
              0,
            ],
            // Slow rotation
            rotate: [0, 10, -10, 5, -5, 0],
            // Smooth opacity fade
            opacity: [
              0,
              heart.opacity * 0.6,
              heart.opacity,
              heart.opacity,
              heart.opacity * 0.7,
              0,
            ],
            // Gentle scale pulse
            scale: [0.8, 1, 1.1, 1, 0.9, 0.8],
          }}
          transition={{
            duration: heart.duration,
            repeat: Infinity,
            delay: heart.delay,
            ease: "easeInOut",
          }}
        >
          <Heart 
            size={heart.size} 
            strokeWidth={1.5} 
            fill={heart.filled ? "currentColor" : "none"}
          />
        </motion.div>
      ))}
      
      {/* Additional layer of EXTRA LARGE hearts for more impact */}
      {hearts.slice(0, 20).map((heart, index) => (
        <motion.div
          key={`large-${heart.id}`}
          className="absolute text-pink-200/25"
          style={{
            left: `${(heart.x + 50) % 100}%`,
            bottom: "-120px",
          }}
          animate={{
            y: [0, -2500],
            x: [0, heart.sway * 1.5, -heart.sway, heart.sway * 0.5, 0],
            rotate: [0, 8, -8, 4, 0],
            opacity: [0, 0.15, 0.25, 0.2, 0],
            scale: [0.9, 1, 1.15, 1, 0.9],
          }}
          transition={{
            duration: heart.duration + 8,
            repeat: Infinity,
            delay: heart.delay + 1,
            ease: "linear",
          }}
        >
          <Heart 
            size={heart.size + 30} 
            strokeWidth={1} 
            fill="currentColor"
          />
        </motion.div>
      ))}

      {/* Third layer - very large background hearts */}
      {hearts.slice(0, 15).map((heart, index) => (
        <motion.div
          key={`xlarge-${heart.id}`}
          className="absolute text-pink-100/20"
          style={{
            left: `${(heart.x + 25) % 100}%`,
            bottom: "-150px",
          }}
          animate={{
            y: [0, -2800],
            x: [0, heart.sway * 2, -heart.sway * 1.5, heart.sway, 0],
            rotate: [0, 5, -5, 3, 0],
            opacity: [0, 0.1, 0.2, 0.15, 0],
            scale: [0.8, 1, 1.2, 1, 0.8],
          }}
          transition={{
            duration: heart.duration + 15,
            repeat: Infinity,
            delay: heart.delay + 3,
            ease: "linear",
          }}
        >
          <Heart 
            size={heart.size + 50} 
            strokeWidth={0.8} 
            fill="currentColor"
          />
        </motion.div>
      ))}
    </div>
  );
}
