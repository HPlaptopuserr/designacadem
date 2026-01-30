'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Home, LucideIcon, Menu, X, ChevronRight } from 'lucide-react';
// ШИНЭ: Modal-аа import хийнэ
import RegistrationModal from './RegistrationModal';

const HEADER_CONTENT = {
  logoTitle: "Design",
  logoSubtitle: "academy",
  primaryBtnText: "Бүртгүүлэх",
  secondaryBtnText: "7800 8080",
};

interface NavLink {
  label: string;
  href: string;
  icon?: LucideIcon;
}

const NAV_LINKS: NavLink[] = [
  { label: 'Нүүр', href: '/', icon: Home }, 
  { label: 'Бидний тухай', href: '/#teachers' },
  { label: 'Сургалт', href: '/#services' },
  { label: 'Холбоо Барих', href: '/#footer' },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = usePathname(); 

  useEffect(() => {
    if (isMobileMenuOpen || isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen, isModalOpen]);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-black backdrop-blur-lg border-b border-black">
        <div className="max-w-360 mx-auto px-6 lg:px-24 h-24 flex items-center justify-between">
          
        <Link href="/" className="flex items-center gap-3 z-50 group">
          <div className="relative w-28 h-10 lg:w-32 lg:h-12 transition-transform group-hover:scale-105">
              <Image 
                src="/desac.png"
                alt="Desac Logo" 
                fill
                priority 
                sizes="(max-width: 768px) 112px, 128px"
                className="object-contain" 
              />
          </div>
        </Link>

          <nav className="hidden xl:flex items-center gap-10">
            {NAV_LINKS.map((link, index) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.includes(link.href));
              
              return (
                <Link 
                  key={index} 
                  href={link.href} 
                  className={`relative flex items-center gap-2 font-bold text-[13px] transition-colors duration-300 
                    text-white hover:text-[#ccff00]`}
                >
                  {link.icon && <link.icon size={18} className="text-[#ccff00] opacity-70" />}
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden xl:flex items-center gap-4">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-[#ccff00] text-black font-black text-[13px] px-8 py-3 rounded-full hover:bg-[#dfff40] hover:shadow-[0_0_20px_rgba(204,255,0,0.3)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              {HEADER_CONTENT.primaryBtnText}
            </button>
            <button className="border border-[#ccff00]/50 text-white font-black text-[13px] px-6 py-2.5 rounded-full hover:bg-[#ccff00] hover:text-black hover:border-transparent transition-all duration-300">
              {HEADER_CONTENT.secondaryBtnText}
            </button>
          </div>

          <button 
            className="xl:hidden text-white hover:text-[#ccff00] transition-colors z-50 p-2 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            <div className="relative w-8 h-8 flex items-center justify-center">
               <span className={`absolute transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'}`}>
                 <Menu size={32} />
               </span>
               <span className={`absolute transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'}`}>
                 <X size={32} />
               </span>
            </div>
          </button>
        </div>
      </header>

      <div 
        className={`fixed inset-0 bg-black/95 backdrop-blur-2xl z-40 transition-all duration-500 ease-in-out ${
          isMobileMenuOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible pointer-events-none'
        }`}
      >
        <div className="flex flex-col h-full pt-32 px-8 pb-10">
          <nav className="flex flex-col space-y-2">
            {NAV_LINKS.map((link, index) => {
               return (
                <Link 
                  key={index} 
                  href={link.href} 
                  onClick={handleLinkClick}
                  className={`group flex items-center justify-between text-[24px] font-bold py-4 border-b border-white/5 transition-all
                    text-white hover:text-[#ccff00] hover:pl-4`}
                >
                  <div className="flex items-center gap-4">
                    {link.icon && <link.icon size={24} className="text-white/50 group-hover:text-[#ccff00]" />}
                    {link.label}
                  </div>
                  <ChevronRight size={20} className="opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                </Link>
               )
            })}
          </nav>

          <div className="mt-auto flex flex-col gap-4">
            <button 
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsModalOpen(true);
              }}
              className="w-full bg-[#ccff00] text-black font-black text-[16px] py-4 rounded-2xl hover:bg-[#dfff40] transition-all active:scale-[0.98] shadow-lg shadow-[#ccff00]/10"
            >
              {HEADER_CONTENT.primaryBtnText}
            </button>
            <button className="w-full border border-white/20 text-white font-black text-[16px] py-4 rounded-2xl hover:bg-white hover:text-black transition-all active:scale-[0.98]">
              {HEADER_CONTENT.secondaryBtnText}
            </button>
            <p className="text-center text-white/30 text-xs mt-4 uppercase tracking-widest">
              © {HEADER_CONTENT.logoTitle} {HEADER_CONTENT.logoSubtitle}
            </p>
          </div>
        </div>
      </div>

      <RegistrationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}