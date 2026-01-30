'use client';

import React, { useState } from 'react';
import { Twitter, Youtube, Facebook, ChevronDown, PlayCircle } from 'lucide-react';
import Image from 'next/image';

const BehanceIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M8.228 15.01h-2.204v-2.303h2.204c.614 0 1.077.126 1.389.379.312.253.468.611.468 1.073 0 .445-.148.794-.443 1.047-.296.253-.767.379-1.414.379zm-.273-5.201H6.024v1.836h1.764c.594 0 1.045-.119 1.353-.357.308-.238.461-.57.461-.995 0-.414-.148-.737-.444-.969-.296-.232-.751-.348-1.365-.348h.165zM22 10.495h-4.322v1.072H22v-1.072zm-3.804 3.429c.148.33.393.585.735.766.342.181.758.271 1.248.271.606 0 1.08-.135 1.422-.405.341-.27.567-.61.678-1.021h1.701c-.161.85-.615 1.528-1.361 2.034-.746.506-1.7.759-2.863.759-1.355 0-2.427-.379-3.217-1.137-.79-.758-1.185-1.812-1.185-3.161 0-1.362.384-2.417 1.152-3.165.768-.748 1.789-1.122 3.064-1.122 1.229 0 2.222.348 2.979 1.044.757.696 1.136 1.666 1.136 2.909v.571h-5.49c.012.601.166 1.085.461 1.453.295.367.615.551.96.551zm.141-2.902h3.332c-.06-.481-.22-.843-.48-1.087-.26-.244-.619-.366-1.077-.366-.462 0-.837.135-1.125.405-.288.27-.473.619-.554 1.048h-.096zM0 6.136v11.728h8.514c1.55 0 2.76-.328 3.631-.985.87-.656 1.306-1.579 1.306-2.768 0-.916-.25-1.668-.75-2.254-.5-.587-1.196-1.002-2.088-1.246.643-.275 1.144-.683 1.503-1.224.359-.541.539-1.201.539-1.981 0-1.085-.363-1.944-1.089-2.578-.726-.634-1.745-.951-3.057-.951H0v.059zm12 0h-4v2h4v-2z" />
  </svg>
);

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
    <footer className="relative bg-black text-white overflow-hidden pt-24 pb-0 w-full">
      <div className="absolute md:top-[-70] md:left-[-150] md:w-[45%] md:h-[120%] left-[-50] w-full h-full z-0 pointer-events-none select-none">
        <Image 
          src="/logos/bgw.png" 
          alt="Footer Background" 
          fill
          className="opacity-100" 
        />
      </div>
      <div className="max-w-360 mx-auto px-10 lg:px-24 relative z-10 pb-20">
        <div className="grid grid-cols-12 gap-x-8">
          
          <div className="col-span-12 lg:col-span-5 space-y-12">
            <h2 className="text-[36px] font-normal tracking-wide leading-none">Холбоо барих</h2>
            
            <div className="space-y-6 text-[15px] font-light text-[#999] leading-relaxed tracking-wide">
              <p className="max-w-85">
                Sukhbaatar District, 1st Khoroo, Peace Avenue 23<br />
                UBH Center, 12th Floor, Room 1216
              </p>
              <div className="space-y-1">
                <p>Phone: +976 78008080</p>
                <p>E-mail: designactive01@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-2">
              <SocialIcon icon={<Twitter size={18} fill="black" stroke="none" />} />
              <SocialIcon icon={<Youtube size={18} fill="black" stroke="none" />} />
              <SocialIcon icon={<BehanceIcon size={18} />} />
              <SocialIcon icon={<PlayCircle size={18} fill="black" stroke="none" />} />
              <SocialIcon icon={<Facebook size={18} fill="black" stroke="none" />} />
            </div>
          </div>

          {/* Right Column: Quote Section */}
          <div className="col-span-12 lg:col-span-7 mt-16 lg:mt-0">
            <h2 className="text-[36px] font-normal tracking-wide leading-none mb-14">Үнийн санал авах</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-x-6 gap-y-6">
                <InputGroup label="Нэр*" name="name" value={formData.name} onChange={handleChange} />
                <InputGroup label="Утас*" name="phone" value={formData.phone} onChange={handleChange} />
                <InputGroup label="Е-Мэйл*" name="email" value={formData.email} onChange={handleChange} />
                
                <div className="relative group">
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full bg-transparent border border-[#ccff00] rounded-full py-2.5 px-8 text-[14px] text-gray-500 appearance-none focus:outline-none focus:border-[#dfff40] transition-colors cursor-pointer"
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

              <div className="pt-6">
                <button
                  type="submit"
                  className="bg-[#ccff00] hover:bg-[#dfff40] text-black font-semibold py-3.5 px-20 rounded-full transition-all duration-200 text-[15px] shadow-[0_5px_15px_rgba(204,255,0,0.2)]"
                >
                  Захиалах
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="bg-[#ccff00] py-4 relative z-20">
        <div className="max-w-360 mx-auto px-10 lg:px-24">
          <p className="text-black text-[12px] font-normal text-left">
            © 2022 Activecode.mn <span className="font-bold">Бүх эрх хуулиар хамгаалагдсан.</span> Art agency LLC
          </p>
        </div>
      </div>
    </footer>
  );
}

const SocialIcon = ({ icon }: { icon: React.ReactNode }) => (
  <a
    href="#"
    className="w-9 h-9 flex items-center justify-center rounded-full bg-[#ccff00] text-black hover:scale-110 hover:shadow-[0_0_10px_rgba(204,255,0,0.5)] transition-all"
  >
    {icon}
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
      className="w-full bg-transparent border border-[#ccff00] rounded-full py-2.5 px-8 text-white placeholder-gray-500 focus:outline-none focus:border-[#dfff40] text-[14px] transition-all"
    />
  </div>
);