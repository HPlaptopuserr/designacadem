"use client";

import { useState, useEffect } from "react"; 
import Image from "next/image";
import { X } from "lucide-react";

interface ServiceItem {
  icon: string;
  title: string;
  description: string;
  price: string;
}

const services: ServiceItem[] = [
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

export default function Services() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedService]); 

  const openModal = (service: ServiceItem) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <section id="services" className="bg-white py-24 font-rounded text-black relative">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="text-center mb-16">
          <h2 className="text-[42px] font-bold mb-2 tracking-tight">Design Academy</h2>
          <h3 className="text-[36px] font-medium mb-6 text-gray-800">Үйлчилгээ</h3>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
            Бид олон улсын стандартын дагуу ux/ui дизайныг мэргэжилийн өндөр түвшинд зааж 
            дэлхийн хаана ч хүлээн зөвшөөрөгдөх мэргэжилтнүүдийг бэлтгэхээр зорьдог.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-x-8 gap-y-16">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="col-span-12 md:col-span-6 lg:col-span-4 flex flex-col items-center text-center group"
            >
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300 relative w-16 h-16">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              
              <h4 className="text-xl font-bold mb-4 uppercase tracking-tight h-14 flex items-center">
                {service.title}
              </h4>
              
              <p className="text-[13px] text-gray-500 mb-8 leading-relaxed max-w-[300px] min-h-[80px]">
                {service.description}
              </p>
              
              <button 
                onClick={() => openModal(service)}
                className="bg-[#C2F217] text-black font-bold text-[11px] uppercase tracking-widest py-3 px-10 rounded-full hover:scale-105 transition-transform shadow-sm"
              >
                Бүртгүүлэх
              </button>
            </div>
          ))}
        </div>
      </div>

      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={closeModal}
          ></div>

          <div className="relative bg-white rounded-[2rem] p-8 md:p-12 w-full max-w-lg shadow-2xl transform transition-all scale-100 animate-in fade-in zoom-in duration-200">
            
            <button 
              onClick={closeModal}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <X size={24} className="text-gray-500" />
            </button>

            <div className="flex flex-col items-center text-center mb-8">
              <div className="w-16 h-16 relative mb-4">
                <Image
                  src={selectedService.icon}
                  alt={selectedService.title}
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold uppercase mb-2">{selectedService.title}</h3>
              <p className="text-3xl font-black text-black">{selectedService.price}</p>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 ml-1">
                  Таны Овог Нэр
                </label>
                <input 
                  type="text" 
                  className="w-full px-6 py-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-lime focus:border-transparent transition-all"
                  placeholder=""
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 ml-1">
                  Утасны Дугаар
                </label>
                <input 
                  type="tel" 
                  className="w-full px-6 py-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-lime focus:border-transparent transition-all"
                  placeholder=""
                />
              </div>

              <button className="w-full bg-brand-lime text-black font-bold text-sm uppercase tracking-widest py-4 rounded-full hover:brightness-95 active:scale-[0.98] transition-all shadow-md mt-4">
                Бүртгүүлэх
              </button>
            </form>

          </div>
        </div>
      )}

    </section>
  );
}