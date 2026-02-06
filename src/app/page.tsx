import {HeroSection} from '@/components/HeroSection';
import {DirectionsSection} from '@/components/DirectionsSection';
import {FocusSection} from '@/components/FocusSection';
import {Footer} from '@/components/Footer';
import {Header} from "@/components/Header";
import {ScrollThemeListener} from "@/components/ScrollThemeListener";

export default function Home() {
  return (
    <>
      <ScrollThemeListener />
      <Header />
      <HeroSection />
      <DirectionsSection />
      <FocusSection />
      <Footer />
    </>
  )
}
