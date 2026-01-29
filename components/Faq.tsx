"use client";

import { useState } from "react";
import Image from "next/image";
import { Plus, Minus, ArrowLeft, ArrowRight } from "lucide-react";

const faqs = [
  {
    question: "Манай сургалтын давуу тал юу вэ?",
    answer: "Бид олон улсын жишгийн дагуу боловсруулсан хөтөлбөрөөр, бодит төсөл дээр суурилсан дадлага олгодог. Мөн мэргэжлийн менторууд танд ганцаарчлан зөвлөгөө өгөх болно.",
  },
  {
    question: "Танай сургалт юу юугаар хангах вэ?",
    answer: "Бид мэргэжлийн анги танхим, компьютер, сурах бичгээр хангана. Цай, кофе үнэгүй.",
    // Энд зургуудын замыг оруулна (public фолдерт байгаа зургууд)
    images: ["/fuq/tanhim.png", "/fuq/image.png", "/fuq/tanhim.png"], 
  },
  {
    question: "Онлайн анги байгаа юу?",
    answer: "Тийм ээ, бид танхимын сургалтаас гадна цаг зав муутай хүмүүст зориулсан бүрэн хэмжээний онлайн, видео сургалтын хөтөлбөртэй.",
  },
  {
    question: "Танайх сертвикат олгох уу?",
    answer: "Тийм. Сургалтаа амжилттай төгссөн бүх сурагчдад албан ёсны сертификат олгох бөгөөд шилдэг төгсөгчдийг ажлын байранд зуучилна.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white font-rounded text-black">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-12 gap-12">
        
        {/* Left Side: Title */}
        <div className="md:col-span-4">
          <h2 className="text-5xl font-black uppercase mb-1">АСУУЛТ</h2>
          <p className="text-3xl text-gray-800 font-normal">Хариулт</p>
        </div>

        {/* Right Side: Questions */}
        <div className="md:col-span-8">
          <div className="flex flex-col">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="border-b border-[#C2F217]"
              >
                {/* Question Button */}
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full py-6 flex items-center justify-between text-left group"
                >
                  <span className="text-lg md:text-xl font-medium group-hover:text-gray-600 transition-colors">
                    {faq.question}
                  </span>
                  <span className="shrink-0 ml-4">
                    {openIndex === idx ? <Minus size={24} /> : <Plus size={24} />}
                  </span>
                </button>
                
                {/* Answer Content */}
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === idx 
                      ? "max-h-[800px] opacity-100 pb-8" // Зурагтай үед өндөр байх хэрэгтэй
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    {faq.answer}
                  </p>

                  {/* Image Gallery (Зөвхөн зурагтай асуултанд харагдана) */}
                  {faq.images && (
                    <div className="flex items-center gap-4 h-[200px] md:h-[240px]">
                      
                      {/* Left Image (Dimmed) */}
                      <div className="hidden md:block relative w-1/4 h-full rounded-2xl overflow-hidden opacity-60 hover:opacity-100 transition-opacity">
                        <Image src={faq.images[0]} alt="Classroom" fill className="object-cover" />
                        {/* Arrow Button */}
                        <button className="absolute inset-0 m-auto w-10 h-10 rounded-full bg-[#C2F217] text-black flex items-center justify-center hover:scale-110 transition-transform">
                          <ArrowLeft size={20} />
                        </button>
                      </div>

                      {/* Center Image (Active/Highlighted) */}
                      <div className="relative w-full md:w-2/4 h-full rounded-2xl overflow-hidden border-2 border-[#C2F217] shadow-lg transform scale-105 z-10">
                         <Image src={faq.images[1]} alt="Classroom Main" fill className="object-cover" />
                      </div>

                      {/* Right Image (Dimmed) */}
                      <div className="hidden md:block relative w-1/4 h-full rounded-2xl overflow-hidden opacity-60 hover:opacity-100 transition-opacity">
                        <Image src={faq.images[2]} alt="Classroom" fill className="object-cover" />
                        {/* Arrow Button */}
                        <button className="absolute inset-0 m-auto w-10 h-10 rounded-full bg-[#C2F217] text-black flex items-center justify-center hover:scale-110 transition-transform">
                          <ArrowRight size={20} />
                        </button>
                      </div>

                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}