export function FaqSection() {
  return (
    <section id="faq" className="py-20">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter text-center mb-10">
          Sıkça Sorulan Sorular
        </h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {/* Soru örneği */}
          <div className="p-6 bg-muted rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Soru 1?</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Cevap metni buraya gelecek
            </p>
          </div>
          {/* Diğer sorular buraya eklenebilir */}
        </div>
      </div>
    </section>
  );
}
