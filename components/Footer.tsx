'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Request Sent!');
  };

  return (
    <footer id="footer" className="relative bg-black text-white overflow-hidden pt-24 pb-0 w-full font-rounded">
      <div className="absolute md:top-[-70px] md:left-[-150px] md:w-[45%] md:h-[120%] left-[-50px] w-full h-full z-0 pointer-events-none select-none">
        <Image 
          src="/logos/bgw.png" 
          alt="Footer Background" 
          fill
          className="opacity-100 object-contain" 
        />
      </div>

      <div className="max-w-7xl mx-auto px-5 relative z-10 pb-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-12">
          
          <div className="col-span-12 lg:col-span-5 space-y-10">
            <h2 className="text-[36px] font-normal tracking-wide leading-none">Холбоо барих</h2>
            
            <div className="space-y-6 text-[15px] font-light text-[#999] leading-relaxed tracking-wide">
              <p className="max-w-xs">
                Sukhbaatar District, 1st Khoroo, Peace Avenue 23<br />
                UBH Center, 12th Floor, Room 1216
              </p>
              <div className="space-y-1">
                <p>Phone: +976 78008080</p>
                <p>E-mail: designactive01@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-2">
                <SocialIcon src="/footer/Twitter.png" alt="Twitter" />
                <SocialIcon src="/footer/youtube.png" alt="Youtube" />
                <SocialIcon src="/footer/Behance.png" alt="Behance" />
                <SocialIcon src="/footer/youtube.png" alt="Instagram" />
                <SocialIcon src="/footer/facebook.png" alt="Facebook" />
            </div>
          </div>

          <div className="col-span-12 lg:col-span-7 mt-8 lg:mt-0">
            <h2 className="text-[36px] font-normal tracking-wide leading-none mb-10">Үнийн санал авах</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 
                 <InputGroup label="Нэр*" name="name" value={formData.name} onChange={handleChange} />
                 <InputGroup label="Утас*" name="phone" value={formData.phone} onChange={handleChange} />
                 
                 <InputGroup label="Е-Мэйл*" name="email" value={formData.email} onChange={handleChange} />
                 
                 <div className="relative group">
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full bg-transparent border border-[#ccff00] rounded-full py-3 px-8 text-[14px] text-gray-500 appearance-none focus:outline-none focus:border-[#dfff40] transition-colors cursor-pointer"
                    >
                      <option value="" disabled className="bg-black">Вэб сайтын төрөл*</option>
                      <option value="corp" className="bg-black text-white">Байгууллагын вэб сайт</option>
                      <option value="shop" className="bg-black text-white">Цахим дэлгүүр</option>
                      <option value="app" className="bg-black text-white">Гар утасны апп</option>
                    </select>
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-[#ccff00]">
                      <ChevronDown size={20} />
                    </div>
                 </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="bg-[#ccff00] hover:bg-[#dfff40] text-black font-bold py-3.5 px-20 rounded-full transition-all duration-200 text-[15px] shadow-[0_5px_15px_rgba(204,255,0,0.2)] hover:scale-105 active:scale-95"
                >
                  Захиалах
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="bg-[#ccff00] py-4 relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-black text-[12px] font-normal text-left">
            © 2022 Activecode.mn <span className="font-bold">Бүх эрх хуулиар хамгаалагдсан.</span> Art agency LLC
          </p>
        </div>
      </div>
    </footer>
  );
}

const SocialIcon = ({ src, alt }: { src: string; alt: string }) => (
  <a
    href="#"
    className="relative w-10 h-10 hover:scale-110 transition-transform duration-200 block"
  >
    <Image 
      src={src} 
      alt={alt} 
      fill 
      sizes="40px"
      className="object-contain" 
    />
  </a>
);

interface InputGroupProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputGroup = ({ label, name, value, onChange }: InputGroupProps) => (
  <div className="relative">
    <input
      type="text"
      name={name}
      placeholder={label}
      value={value}
      onChange={onChange}
      className="w-full bg-transparent border border-[#ccff00] rounded-full py-3 px-8 text-white placeholder-gray-500 focus:outline-none focus:border-[#dfff40] text-[14px] transition-all"
    />
  </div>
);