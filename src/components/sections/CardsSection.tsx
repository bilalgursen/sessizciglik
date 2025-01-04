import { FlipCard } from "@/components/ui/FlipCard";
import motifData from "@/data/motifs.json";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { IoMdClose } from "react-icons/io";
import { balloons } from "balloons-js";
import { TbCards } from "react-icons/tb";

export function CardsSection() {
  const [viewedCards, setViewedCards] = useState<string[]>([]);
  const [anyCardFlipped, setAnyCardFlipped] = useState(false);
  const [forceCloseCards, setForceCloseCards] = useState(false);
  const [showPanel, setShowPanel] = useState(false);
  const [hasShownBalloons, setHasShownBalloons] = useState(false);
  const hasPlayedIntro = useRef(false);
  const [autoOpenCardId, setAutoOpenCardId] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowPanel(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("cards");
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  // Tüm kartlar görüntülendiğinde balon efektini göster
  useEffect(() => {
    const isCompleted = viewedCards.length === motifData.motifs.length;
    if (isCompleted && !hasShownBalloons) {
      balloons();
      setHasShownBalloons(true);
    }
  }, [viewedCards, hasShownBalloons]);

  // İlk 3 karttan rastgele birini aç-kapa efekti
  useEffect(() => {
    if (showPanel && !hasPlayedIntro.current) {
      hasPlayedIntro.current = true;
      const randomIndex = Math.floor(2);
      const selectedMotif = motifData.motifs[randomIndex];

      setTimeout(() => {
        // Kartı aç
        setAutoOpenCardId(selectedMotif.id);
        // 2 saniye sonra kapat
        setTimeout(() => {
          setAutoOpenCardId(null);
          closeAllCards();
        }, 4000);
      }, 2000);
    }
  }, [showPanel]);

  const handleCardFlip = (id: string, isFlipped: boolean) => {
    if (isFlipped && !viewedCards.includes(id)) {
      setViewedCards((prev) => [...prev, id]);
    }
    setTimeout(() => {
      const cards = document.querySelectorAll(".card__content");
      const hasFlippedCard = Array.from(cards).some((card) =>
        card.classList.contains("rotate-y-180")
      );
      setAnyCardFlipped(hasFlippedCard);
    }, 100);
  };

  const closeAllCards = () => {
    setForceCloseCards(true);
    setTimeout(() => setForceCloseCards(false), 100);
  };

  const isCompleted = viewedCards.length === motifData.motifs.length;

  return (
    <section id="cards" className="py-20">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter text-center mb-10">
          Motifler
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
          {motifData.motifs.map((motif) => (
            <div
              key={motif.id}
              className="w-full aspect-square flex justify-center"
            >
              <FlipCard
                title={motif.title}
                description={motif.description}
                image={motif.image}
                video={motif.video}
                onFlip={(isFlipped) => handleCardFlip(motif.id, isFlipped)}
                forceClose={forceCloseCards}
                forceOpen={autoOpenCardId === motif.id}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Kontrol Paneli */}
      {showPanel && (
        <div className="fixed h-min justify-center md:top-6 md:left-8 md:translate-x-0  bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-1">
          {/* Görüntülenen Kartlar */}
          <div className="bg-background/80 h-12 backdrop-blur-sm p-3 shadow-lg border border-border w-full flex items-center gap-3">
            <p className="text-sm font-medium gap-1 flex items-center">
              <TbCards className="text-lg" />
              <span className="text-sm font-medium">Motifler</span>
              {viewedCards.length}/{motifData.motifs.length}
            </p>
            {isCompleted && (
              <div className="flex items-center gap-1">
                🎈
                <span className="text-xs">Tüm Kartları Görüntülediniz</span>
              </div>
            )}
          </div>

          {/* Kartları Kapat Butonu */}
          {anyCardFlipped && (
            <Button
              onClick={closeAllCards}
              variant="outline"
              className="bg-background/80 h-12 backdrop-blur-sm p-3 shadow-lg border border-border flex items-center gap-3 rounded-none md:w-full"
            >
              <IoMdClose className="text-lg" />
              <span className="md:flex hidden">
                {Array.from(document.querySelectorAll(".card__content")).filter(
                  (card) => card.classList.contains("rotate-y-180")
                ).length > 1
                  ? "Kartları Kapat"
                  : "Kartı Kapat"}
              </span>
            </Button>
          )}
        </div>
      )}
    </section>
  );
}
