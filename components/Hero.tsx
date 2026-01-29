'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Play, ArrowRight, X } from 'lucide-react';

// --- MOCK DATA START ---
const HERO_CONTENT = {
  highlight: "UX/UI",
  subTitle1: "дизайн",
  subTitle2: "СУРГАЛТЫН",
  mainTitle: "ЭЛСЭЛТ ЭХЭЛЛЭЭ!",
  description: "Бид олон улсын стандартын дагуу UX/UI дизайныг мэргэжилийн өндөр түвшинд заана.",
  ctaText: "Элсэх",
};

const HERO_VIDEOS = [
  { id: 'c8nx06K_08M', title: 'UX Design Process' },
  { id: 'zXidXHe7xIs', title: 'UI Design Principles' },
  { id: '96mS7Xh_X2g', title: 'Figma Mastery' }
];
// --- MOCK DATA END ---

export default function Hero() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const scrollToFooter = () => {
    document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-white pb-16 pt-32 px-10 lg:px-32 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        {/* Main Typography Area */}
        <div className="mb-20">
          <div className="flex flex-col lg:flex-row lg:items-end gap-x-6 leading-[0.85]">
            <span className="text-[#ccff00] text-[120px] lg:text-[180px] font-black tracking-tighter">
              {HERO_CONTENT.highlight}
            </span>
            <div className="flex flex-col pb-4 lg:pb-8">
              <span className="text-black text-[48px] lg:text-[64px] font-black uppercase tracking-tight">
                {HERO_CONTENT.subTitle1}
              </span>
              <span className="text-black text-[48px] lg:text-[64px] font-black uppercase tracking-tight">
                {HERO_CONTENT.subTitle2}
              </span>
            </div>
          </div>
          <h1 className="text-black text-[80px] lg:text-[110px] font-black uppercase leading-none tracking-tight">
            {HERO_CONTENT.mainTitle}
          </h1>
        </div>

        {/* Bottom Content Area: Thumbnails + Description */}
        <div className="flex flex-col lg:flex-row gap-8 items-end">
          {/* Thumbnails (Left side) */}
          <div className="flex gap-4 w-full lg:w-auto overflow-x-auto pb-4 lg:pb-0 scrollbar-hide">
            {HERO_VIDEOS.map((video) => (
              <Thumbnail 
                key={video.id}
                videoId={video.id}
                onClick={() => setActiveVideo(video.id)}
              />
            ))}
          </div>

          {/* Description and CTA (Right side) */}
          <div className="flex-grow flex flex-col gap-6 pb-2">
            <p className="text-gray-600 text-[14px] leading-relaxed max-w-[420px] font-medium">
              {HERO_CONTENT.description}
            </p>
            
            <button 
              onClick={scrollToFooter}
              className="flex flex-col items-start group w-fit outline-none"
            >
              <span className="text-black font-black text-[15px] mb-2 uppercase tracking-wide">
                {HERO_CONTENT.ctaText}
              </span>
              <div className="flex items-center">
                <div className="h-[2px] w-20 bg-[#ccff00] origin-left transition-all duration-300 group-hover:w-32"></div>
                <div className="text-[#ccff00] -ml-1">
                   <ArrowRight size={24} strokeWidth={3} />
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Video Modal Overlay */}
      {activeVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
          <div 
            className="absolute inset-0 bg-black/95 backdrop-blur-sm cursor-pointer" 
            onClick={() => setActiveVideo(null)}
          ></div>
          <button 
            className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-[110]"
            onClick={() => setActiveVideo(null)}
          >
            <X size={40} />
          </button>
          <div className="relative w-full max-w-[1100px] aspect-video z-[110] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
}

// Helper Component
interface ThumbnailProps {
  videoId: string;
  onClick: () => void;
}

function Thumbnail({ videoId, onClick }: ThumbnailProps) {
  return (
    <div 
      onClick={onClick}
      className="relative flex-shrink-0 w-[160px] md:w-[200px] lg:w-[240px] h-[100px] md:h-[130px] lg:h-[150px] rounded-2xl overflow-hidden group cursor-pointer shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
    >
      <Image 
        src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`} 
        alt="Video preview" 
        fill
        sizes="(max-width: 768px) 160px, (max-width: 1024px) 200px, 240px"
        className="object-cover grayscale-[0.5] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
      />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500 z-10"></div>
      
      {/* Iconic Lime Green Play Button */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div className="w-14 h-14 bg-[#ccff00] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(204,255,0,0.4)] transform scale-90 group-hover:scale-100 transition-all duration-300">
          <Play size={24} className="text-black fill-black ml-1" />
        </div>
      </div>
      
      {/* Subtle Inner Border */}
      <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none z-30"></div>
    </div>
  );
}