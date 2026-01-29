export default function Banner() {
  return (
    <section className="py-24 bg-white font-rounded">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="relative bg-[#0A0A0A] rounded-2xl overflow-hidden min-h-[420px] grid grid-cols-12 items-center">
          
          <div className="absolute left-[-15%] lg:left-[-5%] top-1/2 -translate-y-1/2 w-[80%] lg:w-[50%] h-[140%] z-0 pointer-events-none opacity-100">
            <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
              <path 
                d="M10,20 H45 C75,20 95,40 95,70 C95,100 75,120 45,120 H10 V20 Z M25,35 V105 H45 C65,105 80,90 80,70 C80,50 65,35 45,35 H25 Z" 
                fill="#C2F217" 
              />
              <path 
                d="M10,60 H40 C50,60 58,68 58,78 C58,88 50,96 40,96 H10 V60 Z" 
                fill="#C2F217" 
              />
            </svg>
          </div>

          <div className="col-span-12 lg:col-span-6 lg:col-start-7 relative z-10 px-8 lg:px-16 py-12 flex flex-col justify-center items-start">
            
            <h2 className="text-white text-4xl lg:text-6xl font-black uppercase leading-[0.9] tracking-tighter mb-4">
              СУДАЛХАА <br />
              БОЛЬЁ <br />
              <span className="text-[#C2F217]">ЭХЭЛ...</span>
            </h2>
            
            <p className="text-gray-400 text-lg font-medium mb-10 tracking-wide max-w-md">
              Бүх зүйл танаас хамаарна. Яг одоо бидэнтэй холбогдоорой.
            </p>
            
            <button className="bg-[#C2F217] text-black font-black text-[13px] uppercase tracking-[0.2em] py-4 px-12 rounded-2xl hover:scale-105 hover:bg-white hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(194,242,23,0.4)]">
              Бүртгүүлэх
            </button>
          </div>

          {/* Decorative Glow Effect */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C2F217] opacity-[0.03] blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

        </div>
      </div>
    </section>
  );
}