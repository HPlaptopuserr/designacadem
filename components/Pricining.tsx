"use client"; 
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
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
  const itemsToShow = 3;
  const len = courses.length;

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % len);
  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? len - 1 : prev - 1));

  const visibleCourses = [...courses, ...courses].slice(currentIndex, currentIndex + itemsToShow);

  return (
    <section className="relative bg-[#C2F217] py-24 overflow-hidden font-rounded text-black">
      ы
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full z-0 pointer-events-none select-none flex items-center justify-center">
        <Image 
          src="/logos/bgw.png" 
          alt="Background Logo" 
          width={1200}
          height={1200}
          className="w-full h-[130%] object-contain opacity-100 brightness-0" 
        />
    </div>

      {/* Decorative 'S' Letter */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-5 z-0">
        <div className="absolute top-[-20%] left-[-10%] text-[500px] font-black leading-none">S</div>
      </div>

      {/* PARENT CONTAINER: z-index 10 өгч зурагны дээр гаргана */}
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-2 uppercase">UI/UX</h2>
          <p className="text-2xl font-medium opacity-80">Дизайны ганцаарчилсан сургалт</p>
        </div>

        <button onClick={prevSlide} className="hidden xl:flex absolute top-1/2 -translate-y-1/2 -left-16 2xl:-left-24 w-14 h-14 bg-black text-[#C2F217] rounded-full items-center justify-center hover:scale-110 active:scale-95 transition-transform shadow-lg z-20">
          <ChevronLeft size={28} strokeWidth={2.5} />
        </button>

        <div key={currentIndex} className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-soft">
          {visibleCourses.map((course, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group backdrop-blur-sm bg-white/20 rounded-3xl p-6 border border-black/5 hover:bg-white/40 transition-all duration-300">
              <h3 className="text-2xl font-bold uppercase mb-2 group-hover:scale-105 transition-transform duration-300">{course.title}</h3>
              <p className="text-sm font-bold mb-6">{course.subtitle}</p>
              <ul className="space-y-2 mb-8 text-[11px] font-medium leading-relaxed min-h-[180px]">
                {course.items.map((item, i) => <li key={i}>- {item}</li>)}
              </ul>
              <div className="mb-6 relative">
                <span className="text-3xl font-bold tracking-tight">{course.price}</span>
                <span className="absolute -top-1 -right-3 text-xs font-bold">₮</span>
                <span className="block text-[8px] font-bold text-right mt-1 opacity-60 uppercase tracking-widest">Сараар</span>
              </div>
              <button className="bg-black text-white text-[10px] font-bold uppercase py-3 px-10 rounded-full hover:scale-105 transition-transform shadow-md hover:shadow-xl">
                Бүртгүүлэх
              </button>
            </div>
          ))}
        </div>

        <button onClick={nextSlide} className="hidden xl:flex absolute top-1/2 -translate-y-1/2 -right-16 2xl:-right-24 w-14 h-14 border-2 border-black text-black rounded-full items-center justify-center hover:bg-black hover:text-[#C2F217] transition-colors active:scale-95 shadow-lg z-20">
          <ChevronRight size={28} strokeWidth={2.5} />
        </button>

        <div className="flex justify-center gap-6 mt-12 xl:hidden">
            <button onClick={prevSlide} className="w-12 h-12 bg-black text-[#C2F217] rounded-full flex items-center justify-center shadow-md active:scale-95"><ChevronLeft size={24} /></button>
            <button onClick={nextSlide} className="w-12 h-12 border border-black text-black rounded-full flex items-center justify-center shadow-md active:scale-95"><ChevronRight size={24} /></button>
        </div>

      </div>
    </section>
  );
}