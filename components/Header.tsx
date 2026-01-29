import Link from 'next/link';
import { Home, LucideIcon } from 'lucide-react';

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
  { label: 'Нүүр', href: '#', icon: Home }, 
  { label: 'Бидний тухай', href: '#' },
  { label: 'Сургалт', href: '#' },
  { label: 'Холбоо Барих', href: '#' },
];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-360 mx-auto px-10 lg:px-24 h-24 flex items-center justify-between">
        
        <div className="flex items-center gap-3">
          <div className="w-12 h-10 relative">
            <svg viewBox="0 0 100 80" className="w-full h-full fill-none stroke-[#ccff00]" strokeWidth="12" strokeLinecap="round">
              <path d="M20,10 H50 C70,10 85,25 85,40 C85,55 70,70 50,70 H20 V40 H40" />
            </svg>
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-white text-[24px] font-black tracking-tight">
              {HEADER_CONTENT.logoTitle}
            </span>
            <span className="text-[#ccff00] text-[14px] font-bold tracking-[0.1em] uppercase">
              {HEADER_CONTENT.logoSubtitle}
            </span>
          </div>
        </div>

        <nav className="hidden xl:flex items-center gap-10">
          {NAV_LINKS.map((link, index) => (
            <Link 
              key={index} 
              href={link.href} 
              className="flex items-center gap-2 text-white font-bold text-[13px] hover:text-[#ccff00] transition-colors"
            >
              {link.icon && <link.icon size={18} className="text-[#ccff00]" />}
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button className="bg-[#ccff00] text-black font-black text-[13px] px-10 py-3 rounded-full hover:bg-[#dfff40] transition-all transform hover:scale-105">
            {HEADER_CONTENT.primaryBtnText}
          </button>
          <button className="border-2 border-[#ccff00] text-white font-black text-[13px] px-8 py-2.5 rounded-full hover:bg-[#ccff00]/10 transition-all">
            {HEADER_CONTENT.secondaryBtnText}
          </button>
        </div>

      </div>
    </header>
  );
}