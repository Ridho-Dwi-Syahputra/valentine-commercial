"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Flower2 } from "lucide-react";

// Color variants for flowers - pink pastel and soft colors
const flowerColors = [
  "text-pink-200",
  "text-pink-300",
  "text-pink-400",
  "text-rose-200",
  "text-rose-300",
  "text-red-200",
  "text-red-300",
];

export default function FloatingHearts() {
  const [flowers, setFlowers] = useState([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Generate 60 flowers with random properties for much denser coverage and BIGGER sizes
    const initialFlowers = Array.from({ length: 60 }, (_, i) => ({
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
      color: flowerColors[i % flowerColors.length],
      // Gentle sway amount
      sway: 20 + (i % 6) * 12,
      // More filled flowers
      filled: i % 2 === 0,
    }));
    setFlowers(initialFlowers);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {flowers.map((flower) => (
        <motion.div
          key={flower.id}
          className={`absolute ${flower.color}`}
          style={{
            left: `${flower.x}%`,
            bottom: "-80px",
          }}
          animate={{
            // Float from bottom to top (beyond screen)
            y: [0, -2200],
            // Gentle side-to-side sway
            x: [
              0,
              flower.sway,
              -flower.sway * 0.5,
              flower.sway * 0.8,
              -flower.sway * 0.3,
              0,
            ],
            // Slow rotation
            rotate: [0, 10, -10, 5, -5, 0],
            // Smooth opacity fade
            opacity: [
              0,
              flower.opacity * 0.6,
              flower.opacity,
              flower.opacity,
              flower.opacity * 0.7,
              0,
            ],
            // Gentle scale pulse
            scale: [0.8, 1, 1.1, 1, 0.9, 0.8],
          }}
          transition={{
            duration: flower.duration,
            repeat: Infinity,
            delay: flower.delay,
            ease: "easeInOut",
          }}
        >
          <Flower2
            size={flower.size}
            strokeWidth={1.5}
            fill={flower.filled ? "currentColor" : "none"}
          />
        </motion.div>
      ))}

      {/* Additional layer of EXTRA LARGE flowers for more impact */}
      {flowers.slice(0, 20).map((flower, index) => (
        <motion.div
          key={`large-${flower.id}`}
          className="absolute text-pink-200/25"
          style={{
            left: `${(flower.x + 50) % 100}%`,
            bottom: "-120px",
          }}
          animate={{
            y: [0, -2500],
            x: [0, flower.sway * 1.5, -flower.sway, flower.sway * 0.5, 0],
            rotate: [0, 8, -8, 4, 0],
            opacity: [0, 0.15, 0.25, 0.2, 0],
            scale: [0.9, 1, 1.15, 1, 0.9],
          }}
          transition={{
            duration: flower.duration + 8,
            repeat: Infinity,
            delay: flower.delay + 1,
            ease: "linear",
          }}
        >
          <Flower2
            size={flower.size + 30}
            strokeWidth={1}
            fill="currentColor"
          />
        </motion.div>
      ))}

      {/* Third layer - very large background flowers */}
      {flowers.slice(0, 15).map((flower, index) => (
        <motion.div
          key={`xlarge-${flower.id}`}
          className="absolute text-pink-100/20"
          style={{
            left: `${(flower.x + 25) % 100}%`,
            bottom: "-150px",
          }}
          animate={{
            y: [0, -2800],
            x: [0, flower.sway * 2, -flower.sway * 1.5, flower.sway, 0],
            rotate: [0, 5, -5, 3, 0],
            opacity: [0, 0.1, 0.2, 0.15, 0],
            scale: [0.8, 1, 1.2, 1, 0.8],
          }}
          transition={{
            duration: flower.duration + 15,
            repeat: Infinity,
            delay: flower.delay + 3,
            ease: "linear",
          }}
        >
          <Flower2
            size={flower.size + 50}
            strokeWidth={0.8}
            fill="currentColor"
          />
        </motion.div>
      ))}
    </div>
  );
}
