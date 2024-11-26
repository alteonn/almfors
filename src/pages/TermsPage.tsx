import { motion } from "framer-motion";
import { ScrollText } from "lucide-react";
import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";

const TermsPage = () => {
  return (
    <main className="min-h-screen pt-24 pb-16 relative overflow-hidden">
      <SEO
        title="Villkor"
        description="Läs om Almfors användarvillkor och avtalsvillkor. Här hittar du information om våra tjänster, betalning och support."
        canonical="https://almfors.se/villkor"
      />

      {/* Animated background elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.03, 0.08, 0.03], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-full h-full"
        style={{
          background:
            "radial-gradient(circle at 0% 0%, hsl(var(--accent-blue) / 0.15) 0%, transparent 50%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.05, 0.1, 0.05], scale: [1, 1.2, 1] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-0 right-0 w-full h-full"
        style={{
          background:
            "radial-gradient(circle at 100% 100%, hsl(var(--accent-purple) / 0.15) 0%, transparent 50%)",
        }}
      />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center"
            >
              <ScrollText className="w-8 h-8 text-primary" />
            </motion.div>
            <h1 className="text-4xl font-bold mb-4 gradient-text">
              Allmänna villkor
            </h1>
            <p className="text-lg text-muted-foreground">
              Senast uppdaterad: 2024-11-14
            </p>
          </div>

          <Card className="relative overflow-hidden group hover-lift">
            <CardContent className="p-8 space-y-8">
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold gradient-text">
                  Introduktion
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Almfors Webbyrå, (“Almfors”, “vi” eller “oss”) erbjuder
                  tjänster inom webbutveckling, design och marknadsföring till
                  företag. Dessa allmänna villkor (”Villkoren”) utgör ett
                  bindande avtal mellan dig som affärskund (”Kund” eller ”du”)
                  och Almfors.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold gradient-text">
                  Vilka tjänster erbjuder Almfors?
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Tjänsterna. Du kan köpa våra tjänster genom att välja en
                  prenumerationsmodell eller genom att acceptera ett anpassat
                  erbjudande från oss.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Anpassade erbjudanden. Om du har valt ett anpassat erbjudande
                  som inkluderar ett specifikt projekt kommer vi att leverera
                  projektet i enlighet med avtalet.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Prenumerationer. Om du har köpt en prenumeration får du
                  tillgång till ett visst antal arbetstimmar för dina projekt.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold gradient-text">
                  Hur använder jag tjänsterna?
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Plattformen administreras via vår webbaserade plattform, men
                  du kan även kontakta oss via e-post.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Auktoriserade användare och konton. Endast auktoriserade
                  användare har åtkomst till våra tjänster.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold gradient-text">
                  Hur lägger jag en beställning inom en prenumeration?
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Beställning av projekt sker via plattformen och måste
                  bekräftas för att vara bindande.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold gradient-text">
                  Betalningsvillkor
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Du ska betala avgifterna enligt angivna priser. Vid sena
                  betalningar förbehåller vi oss rätten att ta ut avgifter och
                  ränta.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold gradient-text">
                  Ansvarsbegränsning
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Vi ansvarar inte för indirekta skador såsom förlust av data
                  eller vinst. Vårt totala ansvar är begränsat till beloppet som
                  betalats de senaste sex månaderna.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold gradient-text">
                  Kontakt
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Om du har frågor kan du kontakta oss via chatten på vår
                  webbplats eller via e-post: info@almfors.se
                </p>
              </section>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </main>
  );
};

export default TermsPage;
