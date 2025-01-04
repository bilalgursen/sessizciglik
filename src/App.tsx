import { RootLayout } from "@/layouts/RootLayout";
import { HeroSection } from "@/components/sections/HeroSection";
import { CardsSection } from "@/components/sections/CardsSection";
import { ThemeProvider } from "@/components/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <RootLayout>
        <HeroSection />
        <CardsSection />
      </RootLayout>
    </ThemeProvider>
  );
}

export default App;
