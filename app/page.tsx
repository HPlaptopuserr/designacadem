import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Teachers from "@/components/Teachers";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Pricing from "@/components/Pricining";
import Banner from "@/components/Banner";
import Partners from "@/components/Partners";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Header/Navigation */}
      <Header />

      {/* 2. Hero Section (UX/UI Дизайн...) */}
      <section className="container mx-auto px-4">
        <Hero />
      </section>

      {/* 3. Stats Section (60 Төгсөгч...) */}
      <Stats />


      {/* 4. Үйлчилгээ (6 Карт) */}
      <Services />
      <Pricing />

      {/* 5. Манай чадварлаг баг */}
      <Teachers />
      <Banner />
      {/* 6. FAQ (Асуулт хариулт) */}
      <Faq />
      <Partners />
      {/* 7. Footer - Одоо хийж болно */}
      <Footer />
    </main>
  );
}