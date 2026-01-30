import Image from "next/image";

export default function Partners() {
  return (
    <section className="bg-white py-20 font-rounded">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="mb-8 pl-4">
          <h2 className="text-black text-3xl font-bold uppercase tracking-tight">
            Манай Компаниуд
          </h2>
        </div>

        <div className="bg-black rounded-2xl py-8 px-8 lg:px-16"> {/* bg-dark-bg -ийг bg-black болгов (хэрэв dark-bg config-т байхгүй бол) */}
            
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 items-center justify-items-center">
              
              {/* Logo 1 */}
              <div className="group cursor-pointer hover:scale-110 transition-transform duration-300">
                <div className="w-24 h-24 md:w-32 md:h-32 relative flex items-center justify-center">
                   <Image
                     src="/partners/AA.png"
                     alt="Partner Logo 1"
                     fill
                     className="object-contain opacity-70 group-hover:opacity-100 transition-all grayscale"
                   />
                </div>
              </div>

              {/* Logo 2 */}
              <div className="group cursor-pointer hover:scale-110 transition-transform duration-300">
                <div className="w-24 h-24 md:w-32 md:h-32 relative flex items-center justify-center">
                   <Image
                     src="/partners/Logo.png"
                     alt="Partner Logo 2"
                     fill
                     className="object-contain opacity-70 group-hover:opacity-100 transition-all grayscale"
                   />
                </div>
              </div>

              {/* Logo 3 */}
              <div className="group cursor-pointer hover:scale-110 transition-transform duration-300">
                <div className="w-24 h-24 md:w-32 md:h-32 relative flex items-center justify-center">
                   <Image
                     src="/partners/LA.png"
                     alt="Partner Logo 3"
                     fill
                     className="object-contain opacity-70 group-hover:opacity-100 transition-all grayscale"
                   />
                </div>
              </div>

              {/* Logo 4 */}
              <div className="group cursor-pointer hover:scale-110 transition-transform duration-300">
                <div className="w-24 h-24 md:w-32 md:h-32 relative flex items-center justify-center">
                   <Image
                     src="/partners/Zetta.png"
                     alt="Partner Logo 4"
                     fill
                     className="object-contain opacity-70 group-hover:opacity-100 transition-all grayscale"
                   />
                </div>
              </div>

              {/* Logo 5 */}
              <div className="group cursor-pointer hover:scale-110 transition-transform duration-300">
                <div className="w-24 h-24 md:w-32 md:h-32 relative flex items-center justify-center">
                   <Image
                     src="/partners/Virtual.png"
                     alt="Partner Logo 5"
                     fill
                     className="object-contain opacity-70 group-hover:opacity-100 transition-all grayscale"
                   />
                </div>
              </div>

          </div>
        </div>

      </div>
    </section>
  );
}