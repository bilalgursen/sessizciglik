import { RootLayout } from "@/layouts/RootLayout";
import { HeroSection } from "@/components/sections/HeroSection";
import { CardsSection } from "@/components/sections/CardsSection";

function App() {
  return (
    <RootLayout>
      <HeroSection />
      <CardsSection />
    </RootLayout>
  );
}

export default App;
