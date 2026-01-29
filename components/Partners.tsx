import Image from "next/image";

export default function Partners() {
  return (
    <section className="bg-white py-20 font-rounded">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Heading */}
        <div className="mb-8 pl-4">
          <h2 className="text-black text-3xl font-bold uppercase tracking-tight">
            Манай Компаниуд
          </h2>
        </div>

        {/* Black Container */}
        <div className="bg-dark-bg rounded-2xl py-8 px-8 lg:px-16">
            
          {/* Grid Layout */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 items-center justify-items-center">
              
              {/* 1-р лого */}
              <div className="group cursor-pointer hover:scale-110 transition-transform duration-300">
                {/* Хэмжээг томруулсан: w-24 h-24 md:w-32 md:h-32 */}
                <div className="w-24 h-24 md:w-32 md:h-32 relative flex items-center justify-center">
                   <Image
                     src="/partners/AA.png"
                     alt="Partner Logo 1"
                     fill
                     className="object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                   />
                </div>
              </div>

              {/* 2-р лого */}
              <div className="group cursor-pointer hover:scale-110 transition-transform duration-300">
                <div className="w-24 h-24 md:w-32 md:h-32 relative flex items-center justify-center">
                   <Image
                     src="/partners/Logo.png"
                     alt="Partner Logo 2"
                     fill
                     className="object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                   />
                </div>
              </div>

              {/* 3-р лого */}
              <div className="group cursor-pointer hover:scale-110 transition-transform duration-300">
                <div className="w-24 h-24 md:w-32 md:h-32 relative flex items-center justify-center">
                   <Image
                     src="/partners/LA.png"
                     alt="Partner Logo 3"
                     fill
                     className="object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                   />
                </div>
              </div>

              {/* 4-р лого */}
              <div className="group cursor-pointer hover:scale-110 transition-transform duration-300">
                <div className="w-24 h-24 md:w-32 md:h-32 relative flex items-center justify-center">
                   <Image
                     src="/partners/Zetta.png"
                     alt="Partner Logo 4"
                     fill
                     className="object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                   />
                </div>
              </div>

              {/* 5-р лого */}
              <div className="group cursor-pointer hover:scale-110 transition-transform duration-300">
                <div className="w-24 h-24 md:w-32 md:h-32 relative flex items-center justify-center">
                   <Image
                     src="/partners/Virtual.png"
                     alt="Partner Logo 5"
                     fill
                     className="object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                   />
                </div>
              </div>

          </div>
        </div>

      </div>
    </section>
  );
}