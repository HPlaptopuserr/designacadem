import Image from "next/image";

const PARTNERS = [
  { src: "/partners/AA.png", alt: "Partner Logo 1" },
  { src: "/partners/Logo.png", alt: "Partner Logo 2" },
  { src: "/partners/LA.png", alt: "Partner Logo 3" },
  { src: "/partners/Zetta.png", alt: "Partner Logo 4" },
  { src: "/partners/Virtual.png", alt: "Partner Logo 5" },
];

export default function Partners() {
  return (
    <section className="bg-white py-20 font-rounded">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="mb-8 pl-4">
          <h2 className="text-black text-3xl font-bold uppercase tracking-tight">
            Манай Компаниуд
          </h2>
        </div>

        <div className="bg-black rounded-2xl px-8 lg:px-16"> 
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 items-center justify-items-center">
            
            {PARTNERS.map((partner, index) => (
              <div 
                key={index} 
                className="group cursor-pointer hover:scale-110 transition-transform duration-300 w-full flex justify-center"
              >
                {/* bg-г logo size-аас хамааралгүй болгохын тулд:
                   - aspect-square эсвэл тогтмол h/w ашиглана.
                   - object-contain нь логог сунгахгүйгээр багтаана.
                */}
                <div className="w-24 h-24 md:w-32 md:h-32 relative flex items-center justify-center">
                   <Image
                     src={partner.src}
                     alt={partner.alt}
                     fill
                     className="object-contain opacity-70 group-hover:opacity-100 transition-all grayscale"
                   />
                </div>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}