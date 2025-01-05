import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { PiDiamondsFour, PiDiamondsFourFill } from "react-icons/pi";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

const menuItems = [
  { id: "hero", label: "Giriş" },
  { id: "cards", label: "Motifler" },
  { id: "artist", label: "Sanatçı" },
  { id: "about", label: "Hakkında" },
];

export function SideNav() {
  const [activeSection, setActiveSection] = useState<string>("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const observers = new Map();

    menuItems.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveSection(id);
              }
            });
          },
          { threshold: 0.1 }
        );

        observer.observe(element);
        observers.set(id, observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed md:top-8 md:right-8 top-5 right-5 z-50">
      {/* Hamburger Menü Butonu - Sadece Mobilde */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden bg-background/80 backdrop-blur-sm px-3 py-2 rounded-lg border border-border flex items-center gap-2 text-sm"
      >
        <RxHamburgerMenu className="text-lg" />
        <span>Menü</span>
      </button>

      {/* Menü İçeriği */}
      <div
        className={cn(
          "fixed right-0 top-0 h-screen w-64 bg-transparent transform transition-transform duration-300 ease-in-out md:static md:h-auto md:w-auto md:border-none md:bg-transparent md:translate-x-0",
          isMenuOpen ? "translate-x-0" : "translate-x-full",
          "md:transform-none"
        )}
      >
        {/* Mobil Kapatma Butonu */}
        <button
          onClick={() => setIsMenuOpen(false)}
          className="md:hidden bg-background/80 backdrop-blur-sm px-3 py-2 rounded-lg border border-border flex items-center gap-2 text-sm absolute top-5 right-5"
        >
          <IoClose className="text-lg" />
          <span>Kapat</span>
        </button>

        {/* Menü Öğeleri */}
        <ul className="flex flex-col md:flex-row items-end md:items-center mt-14 gap-4 p-5 md:p-0">
          {menuItems.map((item) => {
            const isActive = activeSection === item.id;
            const Icon = isActive ? PiDiamondsFourFill : PiDiamondsFour;

            return (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2",
                    "bg-background/80 backdrop-blur-sm",
                    "border border-border",
                    "transition-all duration-200 hover:scale-105 rounded-sm",
                    "shadow-lg hover:shadow-xl",
                    isActive && "border-primary"
                  )}
                  title={item.label}
                >
                  <Icon className="text-xl" />
                  <span className="text-sm font-medium">{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
