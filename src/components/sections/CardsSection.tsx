import { FlipCard } from "@/components/ui/FlipCard";
import motifData from "@/data/motifs.json";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { IoMdClose } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import { balloons } from "balloons-js";

export function CardsSection() {
  const [viewedCards, setViewedCards] = useState<string[]>([]);
  const [anyCardFlipped, setAnyCardFlipped] = useState(false);
  const [forceCloseCards, setForceCloseCards] = useState(false);
  const [showPanel, setShowPanel] = useState(false);
  const [hasShownBalloons, setHasShownBalloons] = useState(false);

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
            <div key={motif.id} className="w-full flex justify-center">
              <FlipCard
                title={motif.title}
                description={motif.description}
                image={motif.image}
                video={motif.video}
                onFlip={(isFlipped) => handleCardFlip(motif.id, isFlipped)}
                forceClose={forceCloseCards}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Kontrol Paneli */}
      {showPanel && (
        <div className="fixed bottom-8 left-8 flex items-center gap-4">
          {/* Görüntülenen Kartlar */}
          <div className="bg-background/80 backdrop-blur-sm p-3 rounded-lg shadow-lg border border-border flex items-center gap-3">
            <p className="text-sm font-medium">
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
              size="sm"
              className="gap-2"
            >
              <IoMdClose className="text-lg" />
              Kartları Kapat
            </Button>
          )}
        </div>
      )}
    </section>
  );
}
