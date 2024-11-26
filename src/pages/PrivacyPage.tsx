import { motion } from "framer-motion";
import { Shield, Lock, Eye, FileText, Bell, Server } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import SEO from "@/components/SEO";

const sections = [
  {
    title: "Introduktion",
    icon: Shield,
    content: `Denna integritetspolicy beskriver vilken typ av personuppgifter vi samlar in, varför vi samlar in dem och dina rättigheter i förhållande till dessa uppgifter. Policyn gäller när du interagerar med oss eller när du skapar ett konto på vår designplattform som finns på vår webbplats och använder våra tjänster ("Tjänsterna").

    Policyn gäller för data vi samlar in och använder för våra egna ändamål som "personuppgiftsansvarig". Observera att när vi tillhandahåller våra tjänster agerar vi även som "personuppgiftsbiträde" för våra kunders räkning. Behandlingen av sådana personuppgifter styrs av ett separat personuppgiftsbiträdesavtal som ingåtts mellan oss och kundorganisationen som köper tjänsterna.

    Med "vi" eller "oss" avses Almfors Webbyrå. Om du har frågor om denna integritetspolicy är du alltid välkommen att kontakta oss via e-post på info@almfors.se.`,
  },
  {
    title: "Insamling och användning",
    icon: Eye,
    content: `Vi samlar in följande typer av personuppgifter:

    • Kontaktuppgifter: namn, e-post, titel, företag, adress och telefonnummer
    • Information från andra sajter (med ditt samtycke)
    • Teknisk data: IP-adress, loggfiler och användardata
    • Foton och/eller videor vid supportsessioner eller marknadsföring

    Vi använder dina uppgifter för att:
    • Tillhandahålla åtkomst till plattformen
    • Administration och bokföring
    • Kommunikation och support
    • Utskick av nyhetsbrev
    • Marknadsföring
    • Förbättring av våra tjänster
    • Datasäkerhet och bedrägeriförebyggande`,
  },
  {
    title: "Delning av information",
    icon: Server,
    content: `Vi kan dela dina uppgifter med:

    • Leverantörer som hjälper oss att tillhandahålla våra tjänster
    • Myndigheter när det krävs enligt lag
    • Andra tredje parter vid eventuell sammanslagning eller försäljning

    Alla tredjepartsleverantörer får endast använda dina uppgifter i enlighet med våra instruktioner och under strikta säkerhetsåtgärder.`,
  },
  {
    title: "Säkerhet och lagring",
    icon: Lock,
    content: `Vi vidtar omfattande tekniska och organisatoriska säkerhetsåtgärder för att skydda dina uppgifter mot obehörig åtkomst och skador.

    Data lagras huvudsakligen inom EU men kan överföras till andra länder där våra partners finns. Vi säkerställer att lämpliga säkerhetsåtgärder är på plats vid sådan överföring.`,
  },
  {
    title: "Dina rättigheter",
    icon: FileText,
    content: `Du har rätt att:

    • Begära tillgång till dina uppgifter
    • Begära rättelse av felaktig information
    • Begära radering eller begränsning av dina uppgifter
    • Invända mot behandling av dina uppgifter
    • Begära dataportabilitet

    Kontakta oss på info@almfors.se för att utöva dina rättigheter.`,
  },
  {
    title: "Uppdateringar och kontakt",
    icon: Bell,
    content: `Vi kan uppdatera denna policy vid behov. Om vi gör väsentliga ändringar kommer vi att informera dig via e-post eller på vår plattform.

    Kontakta oss:
    Almfors Webbyrå
    E-post: info@almfors.se

    Vi använder cookies för att bearbeta dina personuppgifter när du besöker vår webbplats. För frågor om vår cookiepolicy, kontakta oss via e-post.`,
  },
];

const PrivacyPage = () => {
  return (
    <main className="min-h-screen pt-24 pb-16 relative overflow-hidden">
      <SEO
        title="Integritetspolicy"
        description="Läs om hur Almfors hanterar och skyddar din personliga information. Vi värnar om din integritet och följer GDPR."
        canonical="https://almfors.se/integritetspolicy"
      />

      {/* Animated background elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0.03, 0.08, 0.03],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 left-0 w-full h-full"
        style={{
          background:
            "radial-gradient(circle at 0% 0%, hsl(var(--accent-blue) / 0.15) 0%, transparent 50%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0.05, 0.1, 0.05],
          scale: [1, 1.2, 1],
        }}
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

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="w-20 h-20 mx-auto mb-8 relative"
            >
              <motion.div
                className="absolute inset-0 rounded-full bg-primary/10"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 10 }}
              >
                <Shield className="w-10 h-10 text-primary" />
              </motion.div>
            </motion.div>

            <h1 className="text-4xl font-bold mb-4 gradient-text">
              Integritetspolicy
            </h1>
            <p className="text-lg text-muted-foreground">
              Din integritet är viktig för oss. Här förklarar vi hur vi samlar
              in, använder och skyddar din information.
            </p>
          </div>

          <div className="space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="relative overflow-hidden group hover-lift">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--accent-blue))] to-[hsl(var(--accent-purple))] opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                    initial={false}
                  />

                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0"
                      >
                        <section.icon className="w-6 h-6 text-primary" />
                      </motion.div>

                      <div className="space-y-4">
                        <h2 className="text-2xl font-semibold gradient-text">
                          {section.title}
                        </h2>
                        <div className="text-muted-foreground space-y-4">
                          {section.content.split("\n\n").map((paragraph, i) => (
                            <p key={i} className="text-lg leading-relaxed">
                              {paragraph.trim()}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Decorative corner elements */}
                    <motion.div
                      className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"
                      animate={{
                        rotate: [0, 90, 0],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                    <motion.div
                      className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"
                      animate={{
                        rotate: [0, -90, 0],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5,
                      }}
                    />
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-sm text-muted-foreground text-center mt-8"
            >
              Senast uppdaterad: {new Date().toLocaleDateString("sv-SE")}
            </motion.p>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default PrivacyPage;
