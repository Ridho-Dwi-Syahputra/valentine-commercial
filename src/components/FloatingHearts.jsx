"use client";

import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Heart, Flower2 } from "lucide-react";

// Color variants for hearts and flowers - pink pastel and soft colors
const colors = [
  "text-pink-200",
  "text-pink-300",
  "text-pink-400",
  "text-rose-200",
  "text-rose-300",
  "text-red-200",
  "text-red-300",
];

export default function FloatingHearts() {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Detect mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Use useMemo with REDUCED items for mobile - only 15 for mobile, 40 for desktop
  const items = useMemo(() => {
    const count = isMobile ? 15 : 40;
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: (i * 2.5) % 100,
      size: 24 + (i % 6) * 4,
      duration: 16 + (i % 6) * 3,
      delay: (i % 15) * 1.2,
      opacity: 0.15 + (i % 4) * 0.05,
      color: colors[i % colors.length],
      sway: 15 + (i % 5) * 8,
      filled: i % 2 === 0,
      isFlower: i % 10 < 7,
    }));
  }, [isMobile]);

  // Secondary layer - ONLY for desktop
  const largeItems = useMemo(() => {
    if (isMobile) return [];
    return items.slice(0, 12);
  }, [items, isMobile]);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Main layer - Reduced for mobile */}
      {items.map((item) => (
        <motion.div
          key={item.id}
          className={`absolute ${item.color}`}
          style={{
            left: `${item.x}%`,
            bottom: "-60px",
            willChange: "transform",
            transform: "translateZ(0)", // GPU acceleration
          }}
          animate={{
            y: [0, -1800],
            x: [0, item.sway, -item.sway * 0.5, 0],
            rotate: [0, 5, -5, 0],
            opacity: [0, item.opacity, item.opacity, 0],
          }}
          transition={{
            duration: item.duration,
            repeat: Infinity,
            delay: item.delay,
            ease: "linear",
          }}
        >
          {item.isFlower ? (
            <Flower2
              size={item.size}
              strokeWidth={1.5}
              fill={item.filled ? "currentColor" : "none"}
            />
          ) : (
            <Heart
              size={item.size}
              strokeWidth={1.5}
              fill={item.filled ? "currentColor" : "none"}
            />
          )}
        </motion.div>
      ))}

      {/* Second layer - DESKTOP ONLY */}
      {largeItems.map((item) => (
        <motion.div
          key={`large-${item.id}`}
          className="absolute text-pink-200/20"
          style={{
            left: `${(item.x + 50) % 100}%`,
            bottom: "-100px",
            willChange: "transform",
            transform: "translateZ(0)",
          }}
          animate={{
            y: [0, -2000],
            x: [0, item.sway * 1.2, -item.sway * 0.8, 0],
            rotate: [0, 4, -4, 0],
            opacity: [0, 0.15, 0.15, 0],
          }}
          transition={{
            duration: item.duration + 8,
            repeat: Infinity,
            delay: item.delay + 3,
            ease: "linear",
          }}
        >
          <Flower2
            size={item.size + 30}
            strokeWidth={1}
            fill="currentColor"
          />
        </motion.div>
      ))}
    </div>
  );
}
