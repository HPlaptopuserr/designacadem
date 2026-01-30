"use client";

import { useState } from "react";
import Image from "next/image";
import { Plus, Minus, ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Анимацын тохиргоо (Өмнөх зөөлөн хэвээр нь)
const transitionSettings = {
  type: "spring" as const,
  stiffness: 100,
  damping: 20,
  mass: 1.2
};

const faqs = [
  {
    question: "Манай сургалтын давуу тал юу вэ?",
    answer: "Бид олон улсын стандартын дагуу UX/UI дизайныг мэргэжлийн өндөр түвшинд  зааж дэлхийн хаана ч хүлээн зөвшөөрөгдөх мэргэжилтнүүдийг бэлтгэхээр  зорьдог. Манай багш нар монголын томоохон кампани вэб сайт, аппликейшинуудыг UX/UI дизайныг хийж бүтээсэн туршлагатай баг хамт олноос бүрдсэн",
  },
  {
    question: "Танай сургалт юу юугаар хангах вэ?",
    answer: "Бид мэргэжлийн анги танхим, компьютер, сурах бичгээр хангана. Цай, кофе үнэгүй.",
    images: ["/fuq/tanhim.png", "/fuq/image.png", "/fuq/tanhim.png"],
  },
  {
    question: "Онлайн анги байгаа юу?",
    answer: "Манай сургалт нь зөвхөн танхимаар хичээллэдэг ба ингэснээр суралцагч  нарт зөв системийн дагуу чанартай мэдлэг олгох боломжтой байдаг билээ.  Мэдээж танхимын хичээлдээ зарим тохиолдолд ирж амжаагүй тохиолдолд  багшийн зүгээс сургалт болон хичээлийн материал зэргийг суралцагчдадаа  зориулан бэлтгэсэн байдаг.",
  },
  {
    question: "Танайх сертвикат олгох уу?",
    answer: "Бид бүхэн бүх зүйлийг хамгийн анхан шатнаас нь маш энгийнээр заах бөгөөд 100% цэвэр практик буюу бодит байдал дээл тулгуурлаж заадаг тул Янз  бүрийн сертификат олгохгүй. Зөвхөн зөв цэгцтэй арга барилд сугарна.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeImgIndex, setActiveImgIndex] = useState(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
    if (openIndex !== index) setActiveImgIndex(0);
  };

  const nextImage = (totalImages: number) => {
    setActiveImgIndex((prev) => (prev + 1) % totalImages);
  };

  const prevImage = (totalImages: number) => {
    setActiveImgIndex((prev) => (prev - 1 + totalImages) % totalImages);
  };

  return (
    <section className="py-24 bg-white font-rounded text-black">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <h2 className="text-5xl font-black uppercase mb-1">АСУУЛТ</h2>
          <p className="text-3xl text-gray-800 font-normal">Хариулт</p>
        </div>

        <div className="md:col-span-8">
          <div className="flex flex-col">
            {faqs.map((faq, idx) => {
              const totalImages = faq.images?.length || 0;
              const prevIndex = (activeImgIndex - 1 + totalImages) % totalImages;
              const nextIndex = (activeImgIndex + 1) % totalImages;

              return (
                <div key={idx} className="border-b border-brand-lime">
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

                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      openIndex === idx ? "max-h-[800px] opacity-100 pb-8" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-gray-500 text-sm leading-relaxed mb-6">
                      {faq.answer}
                    </p>

                    {faq.images && openIndex === idx && (
                      <div className="relative h-[200px] md:h-[240px] w-full flex items-center justify-center">
                        <AnimatePresence mode="popLayout">
                          
                          {/* CALCULATION FOR GAP-4 (16px):
                              Side Width = 25% - 8px (Half of 16px)
                          */}
                          <motion.div
                            key={`prev-${prevIndex}`}
                            layoutId={`img-container-${prevIndex}`}
                            className="hidden md:block absolute left-0 h-[50%] rounded-2xl overflow-hidden cursor-pointer z-0"
                            style={{ width: "calc(25% - 8px)" }} // Custom width logic
                            onClick={() => prevImage(totalImages)}
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={transitionSettings}
                          >
                            <Image
                              src={faq.images[prevIndex]}
                              alt="Previous"
                              fill
                              className="object-cover"
                            />
                            <div className="absolute inset-0 bg-black/60 transition-opacity duration-300" />
                            <div className="absolute inset-0 m-auto w-10 h-10 rounded-full bg-brand-lime text-black flex items-center justify-center hover:scale-110 transition-transform shadow-md z-10">
                               <ArrowLeft size={20} />
                            </div>
                          </motion.div>

                          {/* CALCULATION FOR GAP-4 (16px):
                              Center Width = 50% - 16px (Full 16px gap to account for both sides)
                          */}
                          <motion.div
                            key={`active-${activeImgIndex}`}
                            layoutId={`img-container-${activeImgIndex}`}
                            className="absolute h-full rounded-2xl overflow-hidden border-2 border-brand-lime shadow-xl z-20"
                            style={{ width: "calc(50% - 16px)" }} // Custom width logic
                            transition={transitionSettings}
                          >
                            <Image
                              src={faq.images[activeImgIndex]}
                              alt="Main"
                              fill
                              className="object-cover"
                            />
                          </motion.div>

                          {/* CALCULATION FOR GAP-4 (16px):
                              Side Width = 25% - 8px (Half of 16px)
                          */}
                          <motion.div
                            key={`next-${nextIndex}`}
                            layoutId={`img-container-${nextIndex}`}
                            className="hidden md:block absolute right-0 h-[50%] rounded-2xl overflow-hidden cursor-pointer z-0"
                            style={{ width: "calc(25% - 8px)" }} // Custom width logic
                            onClick={() => nextImage(totalImages)}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 50 }}
                            transition={transitionSettings}
                          >
                            <Image
                              src={faq.images[nextIndex]}
                              alt="Next"
                              fill
                              className="object-cover"
                            />
                            <div className="absolute inset-0 bg-black/60 transition-opacity duration-300" />
                            <div className="absolute inset-0 m-auto w-10 h-10 rounded-full bg-brand-lime text-black flex items-center justify-center hover:scale-110 transition-transform shadow-md z-10">
                              <ArrowRight size={20} />
                            </div>
                          </motion.div>
                        </AnimatePresence>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}