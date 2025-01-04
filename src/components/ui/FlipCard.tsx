import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface FlipCardProps {
  title: string;
  description: string;
  image: string;
  video: string;
  onFlip?: (isFlipped: boolean) => void;
  forceClose?: boolean;
  forceOpen?: boolean;
}

export function FlipCard({
  title,
  description,
  image,
  video,
  onFlip,
  forceClose,
  forceOpen,
}: FlipCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

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
    <div
      className="card w-80 h-80 cursor-pointer perspective-800"
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
            "flex flex-col justify-center text-center"
          )}
        >
          <h3 className="text-6xl text-left font-bold mb-4">{title}</h3>
          <p className="text-sm text-left">{description}</p>
        </div>
      </div>
    </div>
  );
}
