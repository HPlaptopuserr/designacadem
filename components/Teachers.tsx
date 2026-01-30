"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Facebook, Twitter, Youtube } from "lucide-react";
import { teachersData } from "@/lib/data";
import { motion } from "framer-motion"; // AnimatePresence-ийг авч хаясан

export default function Teachers() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = 4;
  const len = teachersData.length;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % len);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? len - 1 : prev - 1));
  };

  const visibleTeachers = [];
  for (let i = 0; i < itemsToShow; i++) {
    const index = (currentIndex + i) % len;
    // Data доторх обьектыг шууд авна
    visibleTeachers.push(teachersData[index]);
  }

  return (
    <section id="teachers" className="py-24 bg-white font-rounded overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-black uppercase mb-2 tracking-tight text-black">
            Манай
          </h2>
          <p className="text-3xl text-gray-800 font-normal">
            Чадварлаг Баг
          </p>
        </div>

        <button
          onClick={prevSlide}
          className="hidden xl:flex absolute top-1/2 -translate-y-1/2 -left-20 2xl:-left-24 w-14 h-14 bg-black text-white rounded-full items-center justify-center hover:scale-110 active:scale-95 transition-transform shadow-lg z-20"
        >
          <ChevronLeft size={28} strokeWidth={2.5} />
        </button>

        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-y-0 items-start min-h-[500px]">
            {visibleTeachers.map((teacher, idx) => (
              <motion.div

                key={teacher.name} 
                
                layout 
                
                initial={{ opacity: 0, x: 20 }} // Шинээр орж ирж буй карт баруун талаас бүдгэрч орж ирнэ
                animate={{ opacity: 1, x: 0 }} 
                transition={{ 
                    type: "spring", 
                    stiffness: 80, 
                    damping: 15,
                    mass: 1 
                }}
                
                className="group flex flex-col items-center cursor-pointer relative"
                
                // Zig-Zag effect: Margin өөрчлөгдөхөд Framer Motion үүнийг автоматаар animate хийнэ
                style={{ marginTop: idx % 2 !== 0 ? '4rem' : '0px' }} 
              >
                
                {/* Image Container */}
                <div className="relative w-full aspect-[3/4.2] rounded-2xl overflow-hidden mb-6 bg-gray-100 shadow-sm">
                  <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-400">
                    <span className="text-4xl opacity-20">FOTO</span>
                  </div>
                  <Image
                    src={teacher.image}
                    alt={teacher.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    unoptimized
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-3 backdrop-blur-[2px]">
                    <div className="w-10 h-10 rounded-full bg-[#C2F217] text-black flex items-center justify-center hover:scale-110 transition-transform">
                      <Twitter size={18} fill="currentColor" className="border-none" />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-[#C2F217] text-black flex items-center justify-center hover:scale-110 transition-transform">
                      <Youtube size={18} fill="currentColor" />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-[#C2F217] text-black flex items-center justify-center hover:scale-110 transition-transform">
                      <Facebook size={18} fill="currentColor" />
                    </div>
                  </div>
                </div>

                {/* Text */}
                <motion.div layout="position">
                    <h3 className="text-lg font-bold uppercase tracking-wide mb-1 text-black text-center">
                        {teacher.name}
                    </h3>
                    <p className="text-gray-500 text-xs font-medium uppercase tracking-wider text-center">
                        {teacher.role}
                    </p>
                </motion.div>
              </motion.div>
            ))}
        </div>

        <button
          onClick={nextSlide}
          className="hidden xl:flex absolute top-1/2 -translate-y-1/2 -right-20 2xl:-right-24 w-14 h-14 bg-[#C2F217] text-black rounded-full items-center justify-center hover:scale-110 active:scale-95 transition-transform shadow-lg z-20"
        >
          <ChevronRight size={28} strokeWidth={2.5} />
        </button>

        {/* Mobile Navigation */}
        <div className="flex justify-center gap-6 mt-16 xl:hidden">
          <button onClick={prevSlide} className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center shadow-md active:scale-95 transition-transform z-20">
            <ChevronLeft size={24} />
          </button>
          <button onClick={nextSlide} className="w-12 h-12 bg-[#C2F217] text-black rounded-full flex items-center justify-center shadow-md active:scale-95 transition-transform z-20">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}