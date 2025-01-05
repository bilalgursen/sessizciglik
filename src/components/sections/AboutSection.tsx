import aboutData from "@/data/about.json";

export function AboutSection() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Sol Pattern */}
      <div className="absolute -left-20 top-40 inset-y-0 w-40 md:w-80 flex flex-col">
        {[...Array(3)].map((_, index) => (
          <div key={index} className="w-40 md:w-80 h-40 md:h-80 mb-4">
            <img
              src="/images/akrep_yarim.png"
              alt="Akrep Motifi"
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>

      {/* Sağ Pattern */}
      <div className="absolute -right-20 top-40 inset-y-0 w-40 md:w-80 flex flex-col">
        {[...Array(3)].map((_, index) => (
          <div key={index} className="w-40 md:w-80 h-40 md:h-80 mb-4">
            <img
              src="/images/akrep_yarim.png"
              alt="Akrep Motifi"
              className="w-full h-full object-contain rotate-180"
            />
          </div>
        ))}
      </div>

      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter text-center mb-10">
          Hakkında
        </h2>
        <div className="grid gap-8 md:gap-12 max-w-3xl mx-auto">
          {aboutData.sections.map((section) => (
            <div key={section.id} className="p-6">
              <h3 className="text-xl font-semibold text-center mb-4">
                {section.title}
              </h3>
              <p className="text-muted-foreground text-center">
                {section.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
