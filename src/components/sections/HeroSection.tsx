import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section id="hero" className="relative py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-8 text-center">
          {/* Üst Yarım */}
          <img
            src="/src/assets/images/yarim_yarim-02.png"
            alt="Üst Motif"
            className="w-full max-w-2xl mx-auto"
          />

          {/* Başlık ve Açıklama */}
          <div className="max-w-3xl mx-auto space-y-6">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Sessiz Çığlık
            </h1>
            <p className="mx-auto max-w-[900px] text-gray-500 md:text-xl dark:text-gray-400 leading-relaxed">
              Anadolu kadınlarının kendilerini ifade etmenin en güçlü
              yollarından biri olan el işçiliği, onların duygularını,
              düşüncelerini ve yaşam hikayelerini aktardıkları özel bir dildir.
              Bu bağlamda, unutulmaya yüz tutmuş geleneksel halı motiflerini ele
              alarak bu anlam yüklü desenleri günümüz dijital sanatına
              taşıyoruz. "Sessiz Çığlıklar" NFT koleksiyonu, bu motiflere modern
              bir yorum getirerek onları yeniden hayata kazandırmayı ve
              anlamlarını gelecek nesillere aktarmayı hedefliyor. Her bir motif,
              kadınların dile getiremedikleri duygularını dijital bir sanat
              eseri aracılığıyla dünyaya fısıldıyor.
            </p>
          </div>

          {/* Alt Yarım */}
          <img
            src="/src/assets/images/yarim_yarim-01.png"
            alt="Alt Motif"
            className="w-full max-w-2xl mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
