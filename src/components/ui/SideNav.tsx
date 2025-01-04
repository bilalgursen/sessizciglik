import { cn } from "@/lib/utils";
import { FaRegDotCircle, FaDotCircle } from "react-icons/fa";
import { useEffect, useState } from "react";

const menuItems = [
  { id: "hero", label: "Ana Sayfa" },
  { id: "cards", label: "Motifler" },
  //   { id: "faq", label: "S.S.S" },
];

export function SideNav() {
  const [activeSection, setActiveSection] = useState<string>("");

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
          { threshold: 0.5 }
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
  };

  return (
    <nav className="fixed top-8 right-8 z-50">
      <ul className="flex items-center gap-4">
        {menuItems.map((item) => {
          const isActive = activeSection === item.id;
          const Icon = isActive ? FaDotCircle : FaRegDotCircle;

          return (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-full",
                  "bg-background/80 backdrop-blur-sm",
                  "border border-border",
                  "transition-all duration-200 hover:scale-105",
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
    </nav>
  );
}
