import { RootLayout } from "@/layouts/RootLayout";
import { HeroSection } from "@/components/sections/HeroSection";
import { CardsSection } from "@/components/sections/CardsSection";
import { FaqSection } from "@/components/sections/FaqSection";

function App() {
  return (
    <RootLayout>
      <HeroSection />
      <CardsSection />
      {/* <FaqSection /> */}
    </RootLayout>
  );
}

export default App;
