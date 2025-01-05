export function ArtistSection() {
  return (
    <section id="artist" className="py-20">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter text-center mb-10">
          Sanatçı
        </h2>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Sabit Resim */}
          <div className="relative lg:order-last">
            <div className="sticky top-6 flex justify-center">
              <img
                src="/images/artist/serap_pacaci.png"
                alt="Serap Paçacı"
                className="aspect-[3/4] w-3/4 rounded-lg object-cover"
              />
            </div>
          </div>

          {/* Metin İçeriği */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold">Serap Paçacı</h1>
              <h2 className="text-2xl text-muted-foreground">
                Dijital Sanatçı
              </h2>
            </div>

            <div className="space-y-6 text-muted-foreground">
              <p>
                Serap Paçacı, geleneksel Türk halı motiflerini dijital sanatla
                buluşturan yenilikçi bir sanatçıdır. Anadolu'nun zengin kültürel
                mirasını modern bir yaklaşımla yorumlayan Paçacı, özellikle
                kadın hikayelerini motifler aracılığıyla anlatmaya
                odaklanmaktadır.
              </p>

              <p>
                Sanatçı, her motifi bir hikayenin parçası olarak görür ve bu
                hikayeleri dijital dünyaya taşırken, geleneksel değerleri
                korumaya özen gösterir. Çalışmalarında kullandığı her motif,
                yüzyıllardır süregelen kadın anlatılarının modern bir yorumudur.
              </p>

              <p>
                Sessiz Çığlık koleksiyonu, sanatçının bu vizyonunun en kapsamlı
                ifadesidir. Koleksiyondaki her eser, geleneksel motiflerin
                taşıdığı derin anlamları, çağdaş dijital sanatın olanaklarıyla
                yeniden yorumlar. Bu eserler, kadınların sessiz hikayelerini
                görünür kılmayı amaçlar.
              </p>

              <p>
                Paçacı'nın eserleri, sadece estetik değil, aynı zamanda sosyal
                bir mesaj da taşır. Her motif, kadınların yüzyıllardır
                dokudukları halılara işledikleri duygu ve düşüncelerin modern
                bir yansımasıdır. Bu yaklaşım, geleneksel el sanatlarımızın
                dijital çağda nasıl yaşatılabileceğinin de güzel bir örneğidir.
              </p>

              <p>
                Sanatçı, NFT teknolojisini kullanarak, bu geleneksel motifleri
                blockchain üzerinde ölümsüzleştirirken, aynı zamanda bu kültürel
                mirasın gelecek nesillere aktarılmasına da katkıda
                bulunmaktadır. Her bir NFT, benzersiz bir hikayenin taşıyıcısı
                olmanın yanı sıra, kolektif kadın belleğinin de dijital bir
                arşivi niteliğindedir.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
