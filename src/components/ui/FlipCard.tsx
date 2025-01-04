import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { LuBookCheck } from "react-icons/lu";

interface FlipCardProps {
  title: string;
  description: string;
  image: string;
  video: string;
  onFlip?: (isFlipped: boolean) => void;
  forceClose?: boolean;
  forceOpen?: boolean;
  isViewed?: boolean;
}

export function FlipCard({
  title,
  description,
  image,
  video,
  onFlip,
  forceClose,
  forceOpen,
  isViewed,
}: FlipCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [showCheckmark, setShowCheckmark] = useState(false);

  // İkon gösterme kontrolü
  useEffect(() => {
    if (isViewed && !showCheckmark) {
      const timer = setTimeout(() => {
        setShowCheckmark(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isViewed]);

  // Dışarıdan kapatma kontrolü
  useEffect(() => {
    if (forceClose && isFlipped) {
      setIsFlipped(false);
      onFlip?.(false);
    }
  }, [forceClose]);

  // Dışarıdan açma kontrolü
  useEffect(() => {
    if (forceOpen && !isFlipped) {
      setIsFlipped(true);
      onFlip?.(true);
    }
  }, [forceOpen]);

  const handleClick = () => {
    const newFlipped = !isFlipped;
    setIsFlipped(newFlipped);
    onFlip?.(newFlipped);
  };

  return (
    <div className="flex flex-col gap-2">
      <div
        className="card w-96 h-96 cursor-pointer perspective-800"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
      >
        <div
          className={cn(
            "card__content relative w-full h-full transition-transform duration-1000",
            "transform-style-preserve-3d",
            isFlipped && "rotate-y-180"
          )}
        >
          {/* Ön Yüz */}
          <div className="card__front absolute inset-0 backface-hidden">
            {isHovered ? (
              <video
                className="w-full h-full object-cover rounded-lg"
                autoPlay
                loop
                muted
              >
                <source src={video} type="video/mp4" />
              </video>
            ) : (
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover rounded-lg"
              />
            )}
          </div>

          {/* Arka Yüz */}
          <div
            className={cn(
              "card__back absolute inset-0 p-6 bg-primary text-primary-foreground rounded-lg",
              "backface-hidden rotate-y-180",
              "flex flex-col justify-between"
            )}
          >
            <div>
              <h3 className="text-6xl text-left font-bold mb-4">{title}</h3>
              <p className="text-sm text-left">{description}</p>
            </div>
            {showCheckmark && (
              <div className="flex items-center gap-2 mt-2 text-primary-foreground/80 animate-fade-in">
                <LuBookCheck className="text-xl" />
                <span className="text-sm font-medium">Keşfedildi</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
