"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Pricing() {
  const courses = [
    {
      title: "UX ДИЗАЙН",
      subtitle: "Сургалтын хөтөлбөр:",
      price: "880,000",
      items: ["UX Дизайны ерөнхий ойлголт", "UX Дизайны хуулиуд", "Хэрэглэгчийн шаардлага тодорхойлох", "Системийн шинжилгээ хийх", "Хэрэглэгчийн судалгаа хийх"],
    },
    {
      title: "АНХАН ШАТ",
      subtitle: "Сургалтын хөтөлбөр:",
      price: "1,888,080", 
      items: ["Вэб сайтын ерөнхий ойлголт", "UX/UI Дизайны ерөнхий ойлголт", "Figma тухай ерөнхий ойлголт", "Вэб сайтын Мөр хоорондын зай", "Вэб сайтын фонт", "Вэб сайтын айкон", "Вэб сайтын зураг ашиглалт", "Вэб сайтын /Element/", "Вэб сайтын өнгө", "Вэб сайтын /Mockup/"],
    },
    {
      title: "UI ДИЗАЙН",
      subtitle: "Сургалтын хөтөлбөр:",
      price: "850,000",
      items: ["Вэб сайтын Мөр хоорондын зай", "Вэб сайтын фонт", "Вэб сайтын айкон", "Вэб сайтын зураг ашиглалт", "Вэб сайтын /Element/", "Вэб сайтын өнгө", "Вэб сайтын /Mockup/"],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  // Modal-д зориулсан state
  const [selectedCourse, setSelectedCourse] = useState<typeof courses[0] | null>(null);

  // Scroll түгжих логик
  useEffect(() => {
    document.body.style.overflow = selectedCourse ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedCourse]);

  const nextSlide = () => setCurrentIndex((prev) => prev + 1);
  const prevSlide = () => setCurrentIndex((prev) => prev - 1);

  const getCourseData = (index: number) => {
    const len = courses.length;
    const wrappedIndex = ((index % len) + len) % len;
    return courses[wrappedIndex];
  };

  const visibleItems = [];
  for (let i = 0; i < 3; i++) {
    const virtualIndex = currentIndex + i;
    visibleItems.push({
      data: getCourseData(virtualIndex),
      key: virtualIndex, 
    });
  }

  return (
    <section className="relative bg-[#C2F217] py-24 overflow-hidden font-rounded text-black">
      
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full z-0 pointer-events-none select-none flex items-center justify-center">
        <Image 
          src="/logos/bgw.png" 
          alt="Background Logo" 
          width={1200}
          height={1200}
          className="w-full h-[130%] object-contain opacity-100 brightness-0" 
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-2 uppercase">UI/UX</h2>
          <p className="text-2xl font-medium opacity-80">Дизайны ганцаарчилсан сургалт</p>
        </div>

        {/* Desktop Arrows */}
        <button onClick={prevSlide} className="hidden xl:flex absolute top-1/2 -translate-y-1/2 -left-16 2xl:-left-24 w-14 h-14 bg-black text-[#C2F217] rounded-full items-center justify-center hover:scale-110 active:scale-95 transition-transform shadow-lg z-20">
          <ChevronLeft size={28} strokeWidth={2.5} />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {visibleItems.map(({ data: course, key }) => (
            <motion.div 
              key={key} 
              layout 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex flex-col items-center text-center group p-6 bg-[#C2F217]/50 md:bg-transparent"
            >
              <h3 className="text-2xl font-bold uppercase mb-2 group-hover:scale-105 transition-transform duration-300">
                {course.title}
              </h3>
              <p className="text-sm font-bold mb-6">{course.subtitle}</p>
              
              <ul className="space-y-2 mb-8 text-[11px] font-medium leading-relaxed min-h-[180px]">
                {course.items.map((item, i) => <li key={i}>- {item}</li>)}
              </ul>
              
              <div className="mb-6 relative">
                <span className="text-3xl font-bold tracking-tight">{course.price}</span>
                <span className="absolute -top-1 -right-3 text-xs font-bold">₮</span>
              </div>
              
              <button 
                onClick={() => setSelectedCourse(course)}
                className="bg-black text-white text-[10px] font-bold uppercase py-3 px-10 rounded-full hover:scale-105 transition-transform shadow-md"
              >
                Бүртгүүлэх
              </button>
            </motion.div>
          ))}
        </div>

        <button onClick={nextSlide} className="hidden xl:flex absolute top-1/2 -translate-y-1/2 -right-16 2xl:-right-24 w-14 h-14 border-2 border-black text-black rounded-full items-center justify-center hover:bg-black hover:text-[#C2F217] transition-colors active:scale-95 shadow-lg z-20">
          <ChevronRight size={28} strokeWidth={2.5} />
        </button>

        {/* Mobile Buttons */}
        <div className="flex justify-center gap-6 mt-12 xl:hidden">
            <button onClick={prevSlide} className="w-12 h-12 bg-black text-[#C2F217] rounded-full flex items-center justify-center shadow-md"><ChevronLeft size={24} /></button>
            <button onClick={nextSlide} className="w-12 h-12 border border-black text-black rounded-full flex items-center justify-center shadow-md"><ChevronRight size={24} /></button>
        </div>
      </div>

      {/* Modal Section - Нэг файл дотор багтаав */}
      <AnimatePresence>
        {selectedCourse && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCourse(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative bg-white rounded-[2rem] p-8 md:p-12 w-full max-w-lg shadow-2xl z-[101]"
            >
              <button 
                onClick={() => setSelectedCourse(null)}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <X size={24} className="text-gray-500" />
              </button>

              <div className="flex flex-col items-center text-center mb-8">
                <h3 className="text-xl font-bold uppercase mb-2 text-black">{selectedCourse.title}</h3>
                <p className="text-3xl font-black text-black">{selectedCourse.price}₮</p>
              </div>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 ml-1">Таны Овог Нэр</label>
                  <input type="text" required className="w-full px-6 py-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C2F217] transition-all text-black" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 ml-1">Утасны Дугаар</label>
                  <input type="tel" required className="w-full px-6 py-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C2F217] transition-all text-black" />
                </div>
                <button className="w-full bg-[#C2F217] text-black font-bold text-sm uppercase py-4 rounded-full hover:brightness-95 active:scale-[0.98] transition-all shadow-md mt-4">
                  Бүртгүүлэх
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}