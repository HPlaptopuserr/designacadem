'use client';

import { useState } from 'react';
import { X, ChevronDown, Monitor } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Data Type
interface Course {
  icon: string | null;
  title: string;
  description: string;
  price: string;
}

// БҮТЭН ӨГӨГДӨЛ (Header дээрх 6 төрөл)
const COURSES: Course[] = [
  {
    icon: "/services/Services5.png",
    title: "UX/UI дизайны сургалт",
    description: "UX/UI дизайны суурь ерөнхий ойлголтыг өгөх мэргэжлийн арга барилд сургах сургалт.",
    price: "2,000,000₮"
  },
  {
    icon: "/services/Services.png",
    title: "UX-ийн хуулиудын сургалт",
    description: "UX-дизайны хууль, хэрэглэгчийн шаардлага тодорхойлох, системийн шинжилгээ.",
    price: "1,500,000₮"
  },
  {
    icon: "/services/Services1.png",
    title: "UI дизайн, Figma сургалт",
    description: "UX-дизайнераас ирсэн дизайныг хэрхэн UI-дизайн болгон зурах талаарх мэргэжлийн сургалт.",
    price: "1,200,000₮"
  },
  {
    icon: "/services/Services2.png",
    title: "Хүүхдийн дизайны сургалт",
    description: "Дизайны анхан шатны суурь ойлголт олгох сургалт, өнгө, зохиомж, харьцаа.",
    price: "600,000₮"
  },
  {
    icon: "/services/Services3.png",
    title: "Front-End хөгжүүлэлт",
    description: "HTML/CSS/JS/ReactJS ашиглан вэб хуудсыг хөгжүүлэх талаар анхан шатнаас нь эхлэн сургана.",
    price: "2,500,000₮"
  },
  {
    icon: "/services/Services4.png",
    title: "Зураг авалтын сургалт",
    description: "Мэргэжлийн түвшинд зураг дарж сурах, авсан зургаа хэрхэн засаж янзлах сургалт.",
    price: "800,000₮"
  }
];

// Анхны хоосон төлөв
const DEFAULT_COURSE: Course = {
  icon: null,
  title: "Сургалтын анги сонгох",
  price: "0.000.000₮",
  description: ""
};

export default function RegistrationModal({ isOpen, onClose }: RegistrationModalProps) {
  const [selectedCourse, setSelectedCourse] = useState<Course>(DEFAULT_COURSE);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '' });

  // Хаах үед утгуудыг цэвэрлэх функц
  const handleClose = () => {
    onClose();
    // Анимац дууссаны дараа (500ms) анхны төлөвт оруулна
    setTimeout(() => {
      setSelectedCourse(DEFAULT_COURSE);
      setFormData({ name: '', phone: '' });
      setIsDropdownOpen(false);
    }, 500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedCourse.icon) {
      alert("Та сургалтын ангиа сонгоно уу!");
      return;
    }
    alert(`Бүртгэл амжилттай!\nАнги: ${selectedCourse.title}\nҮнэ: ${selectedCourse.price}\nНэр: ${formData.name}\nУтас: ${formData.phone}`);
    handleClose();
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
            onClick={handleClose}
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
              onClick={handleClose}
              className="absolute top-6 right-6 text-gray-400 hover:text-black transition-colors"
            >
              <X size={24} />
            </button>

            {/* ICON AREA */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 border-2 border-black rounded-2xl flex items-center justify-center p-3 relative bg-white">
                 {selectedCourse.icon ? (
                   <Image 
                     src={selectedCourse.icon} 
                     alt={selectedCourse.title}
                     fill
                     className="object-contain p-2"
                   />
                 ) : (
                   <Monitor size={32} strokeWidth={1.5} />
                 )}
              </div>
            </div>

            {/* DROPDOWN AREA */}
            <div className="relative mb-2">
              <button 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center justify-center gap-2 mx-auto text-lg font-bold text-black hover:text-[#8ab300] transition-colors"
              >
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
                        key={index}
                        onClick={() => {
                          setSelectedCourse(course);
                          setIsDropdownOpen(false);
                        }}
                        className="w-full text-left px-6 py-3 hover:bg-gray-50 text-sm font-medium transition-colors text-black border-b border-gray-50 last:border-none flex items-center gap-3"
                      >
                         {/* List дотор жижиг icon харуулах */}
                         <div className="relative w-6 h-6 shrink-0">
                            <Image src={course.icon!} alt="icon" fill className="object-contain"/>
                         </div>
                        {course.title}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* PRICE AREA */}
            <div className="mb-10">
              <span className="text-3xl font-black text-black tracking-tight">
                {selectedCourse.price}
              </span>
            </div>

            {/* FORM AREA */}
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