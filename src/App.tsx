import { RootLayout } from "@/layouts/RootLayout";
import { HeroSection } from "@/components/sections/HeroSection";
import { CardsSection } from "@/components/sections/CardsSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ArtistSection } from "@/components/sections/ArtistSection";

function App() {
  return (
    <RootLayout>
      <HeroSection />
      <CardsSection />
      <AboutSection />
      <ArtistSection />
    </RootLayout>
  );
}

export default App;
