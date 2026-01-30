import Image from 'next/image';

export default function Banner() {
  return (
    <section className="py-24 bg-white font-rounded">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="relative bg-dark-bg rounded-2xl overflow-hidden min-h-50 grid grid-cols-12 items-center">
          
          <div className="absolute left-[-15%] lg:left-[-8%] top-1/2 -translate-y-1/2 w-[80%] lg:w-[50%] h-[140%] z-0 pointer-events-none opacity-100">
              <Image 
                src="/logos/bgg.png" 
                alt="Footer Background" 
                fill
                className="opacity-100" 
              />
          </div>

          <div className="col-span-12 lg:col-span-6 lg:col-start-7 relative z-10 px-8 lg:px-16 py-20 flex flex-col justify-center items-start">
            
            <h2 className="text-white text-3xl lg:text-4xl uppercase leading-[0.9] tracking-tighter mb-3">
              СУДАЛХАА БОЛЬЁ ЭХЭЛ...
            </h2>
            
            <p className="text-brand-lime text-lg font-medium mb-10 tracking-wide max-w-md">
              Бидэнтэй Холбогдоорой.
            </p>
            
            <button className="bg-brand-lime text-black font-black text-[13px] uppercase tracking-[0.2em] py-4 px-12 rounded-full hover:scale-105 hover:text-black transition-all duration-300">
              Бүртгүүлэх
            </button>
          </div>

          {/* Decorative Glow Effect */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-lime opacity-[0.03] blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

        </div>
      </div>
    </section>
  );
}