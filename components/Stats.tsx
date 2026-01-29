import { statsData } from "@/lib/data";

export default function Stats() {
  return (
    <section className="bg-white pb-16 font-rounded">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="bg-black rounded-2xl py-8 px-8 lg:px-16 shadow-lg">
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-4">
            {statsData.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center text-center">
                <span className="text-brand-lime text-5xl lg:text-6xl font-black mb-2 tracking-tight">
                  {stat.value}
                </span>
                <span className="text-white text-sm lg:text-base font-medium opacity-90">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
          
        </div>

      </div>
    </section>
  );
}