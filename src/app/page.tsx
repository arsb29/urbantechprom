import {HeroSection} from '@/components/HeroSection';
import {DirectionsSection} from '@/components/DirectionsSection';
import {FocusSection} from '@/components/FocusSection';
import {Footer} from '@/components/Footer';
import {Header} from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <DirectionsSection />
      <FocusSection />
      <Footer />
    </>
  )
}
