'use client';

import { useState } from 'react';
import { X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image'; // Image import нэмсэн

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// ТАНЫ ӨГСӨН СУРГАЛТЫН МЭДЭЭЛЭЛ
const COURSES = [
  {
    icon: "/services/Services5.png",
    title: "UX/UI дизайны сургалт",
    description: "ux/ui дизайны суурь ерөнхий ойлголтыг өгөх мэргэжлийн арга барилд сургах сургалтандаа таныг урьж байна.",
    price: "2,000,000₮"
  },
  {
    icon: "/services/Services.png",
    title: "UX -ийн хуулиудын сургалт",
    description: "Ux-дизайны хууль, хэрэглэгчийн шаардлага тодорхойлох, системийн шинжилгээ, ux зураглал, ux тест мэргэжлийн арга барилд сургах сургалтандаа таныг урьж байна.",
    price: "1,500,000₮"
  },
  {
    icon: "/services/Services1.png",
    title: "UI дизайн, figma сургалт",
    description: "ux-дизайнераас ирсэн дизайныг хэрхэн ui-дизайн болгон зурах талаарх мэргэжлийн арга барилд сургах сургалтандаа таныг урьж байна.",
    price: "1,200,000₮"
  },
  {
    icon: "/services/Services2.png",
    title: "Хүүхдийн дизайны сургалт",
    description: "Дизайны анхан шатны суурь ойлголт олгох сургалт, өнгө, зохиомж, харьцаа гэсэн алтан дүрмийн ойлголттой болно.",
    price: "600,000₮"
  },
  {
    icon: "/services/Services3.png",
    title: "Front end сургалт",
    description: "Вэб технологиуд болох html/css/js/reactjs ашиглан хэрхэн вэб хуудсыг хөгжүүлэх талаар анхан шатнаас нь эхлэн практикт суурилсан хөтөлбөрөөр цогц ойлголтыг авна.",
    price: "2,500,000₮"
  },
  {
    icon: "/services/Services4.png",
    title: "Зураг авалтын сургалт",
    description: "Энгийн нөхцөлд мэргэжлийн түвшинд зураг дарж сурах, авсан зургаа хэрхэн засаж янзлах гэх мэт мэргэжлийн арга барилд сургах сургалтандаа таныг урьж байна.",
    price: "800,000₮"
  }
];

export default function RegistrationModal({ isOpen, onClose }: RegistrationModalProps) {
  const [selectedCourse, setSelectedCourse] = useState(COURSES[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // selectedCourse.name биш selectedCourse.title болгож зассан
    alert(`Бүртгэл амжилттай!\nАнги: ${selectedCourse.title}\nҮнэ: ${selectedCourse.price}\nНэр: ${formData.name}\nУтас: ${formData.phone}`);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative bg-white w-full max-w-[500px] rounded-[32px] p-8 md:p-12 shadow-2xl z-10 font-rounded text-center"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 text-gray-400 hover:text-black transition-colors"
            >
              <X size={24} />
            </button>

            {/* Icon Section - Динамик болгосон */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 border-2 border-black rounded-2xl flex items-center justify-center p-3 relative">
                 {/* Monitor icon-ы оронд тухайн хичээлийн icon-ыг харуулна */}
                 <Image 
                   src={selectedCourse.icon} 
                   alt={selectedCourse.title}
                   fill
                   className="object-contain p-2"
                 />
              </div>
            </div>

            {/* Dropdown Section */}
            <div className="relative mb-2">
              <button 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center justify-center gap-2 mx-auto text-lg font-bold text-black hover:text-[#8ab300] transition-colors"
              >
                {/* selectedCourse.name -> selectedCourse.title */}
                {selectedCourse.title}
                <ChevronDown 
                  size={20} 
                  className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} 
                />
              </button>

              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-white border border-gray-100 rounded-2xl shadow-xl overflow-hidden z-20 max-h-60 overflow-y-auto scrollbar-hide"
                  >
                    {COURSES.map((course, index) => (
                      <button
                        // course.id байхгүй тул index ашиглав
                        key={index}
                        onClick={() => {
                          setSelectedCourse(course);
                          setIsDropdownOpen(false);
                        }}
                        className="w-full text-left px-6 py-3 hover:bg-gray-50 text-sm font-medium transition-colors text-black border-b border-gray-50 last:border-none"
                      >
                        {/* course.name -> course.title */}
                        {course.title}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Price */}
            <div className="mb-10">
              <span className="text-3xl font-black text-black tracking-tight">
                {selectedCourse.price}
              </span>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="text-left space-y-1">
                <label className="text-xs font-bold ml-4 text-gray-500">Таны Овог Нэр</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full border border-gray-400 rounded-full py-3 px-6 text-black focus:outline-none focus:border-[#ccff00] focus:ring-1 focus:ring-[#ccff00] transition-all"
                />
              </div>

              <div className="text-left space-y-1">
                <label className="text-xs font-bold ml-4 text-gray-500">Утасны Дугаар</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full border border-gray-400 rounded-full py-3 px-6 text-black focus:outline-none focus:border-[#ccff00] focus:ring-1 focus:ring-[#ccff00] transition-all"
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-[#ccff00] hover:bg-[#dfff40] text-black font-black text-lg py-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 active:scale-95 transition-all duration-300 uppercase tracking-wide"
                >
                  Бүртгүүлэх
                </button>
              </div>
            </form>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}