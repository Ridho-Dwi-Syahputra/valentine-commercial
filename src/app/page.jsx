"use client";

import HeroSection from "@/components/HeroSection";
import LoveLetter from "@/components/LoveLetter";
import MemoriesSection from "@/components/MemoriesSection";
import PlaylistSection from "@/components/PlaylistSection";
import Footer from "@/components/Footer";
import FloatingHearts from "@/components/FloatingHearts";

export default function Home() {
  return (
    <main className="relative">
      {/* Floating Hearts Background */}
      <FloatingHearts />
      <br></br>
      {/* Hero / Landing Section */}
      <HeroSection />

      {/* Love Letter with Envelope Section */}
      <LoveLetter />

      {/* Memories Gallery Section */}
      <MemoriesSection />

      {/* Playlist Section */}
      <PlaylistSection />

      {/* Footer / Closing Section */}
      <Footer />
    </main>
  );
}
