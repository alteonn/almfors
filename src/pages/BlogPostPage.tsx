import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SEO from "@/components/SEO";

type BlogPost = {
  slug: string;
  title: string;
  content: string;
  date: string;
  readTime: string;
};

// Blogginläggsdata
const blogPosts: BlogPost[] = [
  {
    slug: "sa-har-fungerar-seo",
    title: "Så här fungerar sökmotoroptimering (SEO)",
    content: `
      Många betraktar Google som ett digitalt bibliotek som är öppet 24 timmar om dygnet och alltid gratis. Men är det verkligen så? Visst stämmer det att du som går in på Google för att genomföra en sökning inte behöver betala något för att söka, men att plattformen är gratis är inte hela sanningen.

      Tusentals företag konkurrerar dagligen om att få din uppmärksamhet när du söker på Google, och för att lyckas med detta finns bland annat verktyget ”Google Ads” där företag betalar för annonser för att synas så högt upp som möjligt.

      Kort och gott vill Google tjäna pengar, och företaget är allt annat än opartiskt. Det är en kombination av den som betalar bäst och som har bäst strategi, som också får synas högst upp i sökfältet.

      I kombination med detta fungerar Google också som informatör och vill att varje användare som genomför en sökning via deras plattform ska bli så nöjd som möjligt. Detta innebär att din webbplats, genom ett strategiskt och väl genomfört arbete med SEO – sökmotoroptimering, kan lyckas riktigt väl med att få fler sökträffar enbart genom organisk spridning. Men du behöver såklart jobba för det!

      I den här artikeln går vi igenom några grundläggande steg som hjälper dig att förstå hur sökmotoroptimering är uppbyggt och fungerar.

      Att söka efter information på Google är vanligt
      Att söka efter information på Google är inget ovanligt i dagens samhälle. Begreppet ”googla” har i stort sett blivit ett verb som beskriver handlingen ”att söka efter information på webben”.

      Så här bestäms ordningen i träfflistorna
      Ordningen bestäms genom en avancerad urvalsprocess som består av en mängd olika algoritmer. En algoritm är en instruktion eller regel för hur något ska göras, och Google använder tusentals olika algoritmer som konstant sorterar och analyserar allt innehåll som finns på webben.

      Exakt hur dessa algoritmer är uppbyggda och fungerar är en stor företagshemlighet för Google. Men för att webbutvecklare ska veta hur de bäst bygger en webbplats för att ranka högt erbjuder Google vissa riktlinjer som tillsammans utgör en bra grund för att ranka högt i sökmotorn.

      Dessa riktlinjer kan innehålla allt från att skriva ren och snygg kod, till att ladda upp rätt filstorlekar och använda rätt rubriksättning, H1, H2, H3, osv. Oroa dig inte, vi kommer gå igenom allt detta.

      Så här fungerar algoritmen i stora drag
      Förenklat kan man dela in Googles avancerade algoritmer i tre olika kategorier.

      Tekniska riktlinjer
      Dessa riktlinjer fokuserar på om webbplatsen uppfyller alla tekniska riktlinjer som ges av Google. Bland annat behöver webbplatsen vara byggd på rätt sätt så att Google förstår rubriker, bilder och länkar. Koden måste vara ren och inte för tung. Den behöver vara mobilanpassad och vara en säker webbplats med SSL-kryptering och ett SSL-certifikat.

      Bra och relevant innehåll
      Innehållet är en av de viktigaste parametrarna. Uttrycket ”content is king” har nog aldrig varit så sant som när det kommer till att skapa SEO-anpassat innehåll för webbplatser. Dessa riktlinjer fokuserar helt och hållet på om innehållet på webbplatsen är relevant och specifikt. Det är trots allt innehållet som utgör sökresultatet som en besökare möts av.

      Andras rekommendationer (inkommande länkar)
      Denna kategori omfattar hur webbplatsen uppfattas av resten av webben. Man kan säga att det fungerar som i verkliga livet. Om jag tycker att en film är superbra så kommer jag att rekommendera den till andra. En rekommendation på webben sker i form av en länkning. Så när många länkar till din webbplats är det samma sak som att många rekommenderar den.

      För att optimera din webbplats krävs det att du skapar rätt typ av innehåll som följer vissa riktlinjer.

      En djupdykning: så fångar du algoritmens intresse
      Det är nu det blir riktigt intressant. I resten av den här artikeln kommer vi att gå igenom hur man uppfyller kraven och följer riktlinjerna i ovanstående kategorier. För det är den som kan leverera bäst på samtliga kategorier som till slut kommer vinna dragkampen och knipa de bästa placeringarna. Låt oss ta tjuren vid hornen och gå igenom dem en och en.

      Den tekniska delen av SEO
      Hur säkerställer man att webbplatsen uppfyller de tekniska riktlinjer som krävs? Till att börja med finns det några enkla saker som du snabbt kan utgå ifrån för att få en bra överblick gällande hemsidans tekniska kvalité.

      Du bör se till att webbplatsen har en så kallad SSL-kryptering och ett SSL-certifikat. SSL är en förkortning av Secure Socket Layer och är en teknik som används för att kryptera trafiken mellan en hemsida på en webbserver och en besökare från en webbläsare. Om hemsidan innehåller ett SSL-certifikat kan du enkelt se det genom att kolla i adressfältet där webbplatsens webbadress syns. Om det där dyker upp ett hänglås innebär det att hemsidan är krypterad och säkrad.

      Andra faktorer är exempelvis ren och snygg kod samt laddningstid. Webbplatser laddas in helt över internet och denna inladdning behöver gå fort. Till skillnad från program och appar som installeras på datorn eller telefonen kan en webbplats inte vara större än några megabyte. Google, Bing och andra sökmotorer använder sedan länge webbplatsens laddningstid, och den upplevda kvickheten mellan klicken, som en av markörerna för att bedöma vilken placering den får i träfflistorna.

      För att få en indikation på statusen för din webbplats kan du använda verktyget GTmetrix eller Googles eget verktyg PageSpeed Insight. Dessa verktyg genomför tester på din webbplats och mäter hur välbyggd och snabb en hemsida är.

      Skapa relevant innehåll
      Hur besökaren beter sig på din webbplats är en avgörande faktor för hur din webbplats rankas. En algoritm som fått stor betydelse för att mäta detta är ”avvisningsfrekvens”, det vill säga hur snabbt besökarna väljer att lämna webbplatsen istället för att stanna kvar en längre stund och surfa runt på sidan innan de, eventuellt, återgår till sökmotorn igen.

      Avvisningsfrekvensen blir för Google en indikator för om innehållet på din webbplats är relevant för det som besökaren sökt. Google kommer att ge din webbplats ”en chans” att bevisa vad du går för. Om för många personer klickar på din webbplats från Google och sedan hoppar tillbaka, kommer din webbplats sakta att börja tappa placeringar. Om det motsatta sker, dvs att besökaren stannar länge på din webbplats, kommer den istället att börja klättra i ranking.

      Fokusera därför på att skapa innehåll som riktiga människor faktiskt vill läsa och får nytta av. Om man inte gör det, spelar inget av det andra någon roll.

      Var specifik: ett sökord eller sökfras per sida
      Google bedömer egentligen inte din webbplats i sin helhet, utan de gör en enskild bedömning för varje sida på webbplatsen. För att övertyga Google om att en av dina sidor är relevant för en sökning, behöver temat som du behandlar på sidan ha ett laserfokus.

      Låt säga att någon söker efter ”tomater” på Google. Din konkurrent har en hel sida som endast avhandlar allt som har med tomater att göra, medan du har en sida som pratar om grönsaker i största allmänhet där tomater bara nämns på förbifarten. Din konkurrent kommer i ett sådant läge att fånga Googles uppmärksamhet då dennes sida uppfattas som mer relevant.

      För att skapa bra innehåll som optimeras utifrån Googles riktlinjer behöver du därför först bestämma dig för vad din sida ska handla om.

      Därefter kan du med fördel välja ut ett, max två, sökord eller en sökfras per sida. Försök att vara så specifik som möjligt. Istället för att skriva allmänt om ”digital marknadsföring” kan du specificera vilken typ av tjänst du erbjuder: är det ”Google Ads”, ”annonser i sociala medier” eller ”SEO”? Desto mer specifik din text är, desto mer specifik information ger du till Google vilket ökar dina chanser för högre ranking.
    `,
    date: "16 november 2024",
    readTime: "10 min",
  },
  {
    slug: "foretagsbloggning",
    title: "Företagsbloggning: Varför ditt företag behöver en blogg",
    content: `
      Att ha en blogg för ditt företag kan vara en kraftfull strategi för att bygga varumärkeskännedom, driva trafik till din webbplats och engagera dina kunder. Men varför är företagsbloggning så viktigt och hur kommer du igång? I detta inlägg går vi igenom fördelarna med företagsbloggning och ger dig en steg-för-steg-guide för att starta din egen blogg.

Varför ditt företag behöver en blogg
1. Förbättrar din SEO
En aktiv blogg hjälper din webbplats att ranka högre på sökmotorer som Google. Varje nytt blogginlägg skapar en ny webbsida som kan indexeras, vilket ökar chansen att din webbplats dyker upp i sökresultaten. Genom att använda relevanta nyckelord i dina inlägg kan du driva mer organisk trafik till din webbplats.

2. Bygger varumärkeskännedom och auktoritet
Genom att publicera informativa och värdefulla blogginlägg visar du din expertis inom ditt område. Detta hjälper till att bygga förtroende hos dina kunder och positionera ditt företag som en ledande aktör i branschen. En blogg ger dig också möjlighet att dela din företagskultur och värderingar, vilket stärker ditt varumärke.

3. Engagerar och behåller kunder
Blogginlägg som är intressanta och relevanta för din målgrupp kan skapa en starkare koppling till dina kunder. Genom att svara på deras frågor och ge lösningar på deras problem kan du engagera dem och uppmuntra till återkommande besök på din webbplats. En blogg kan också användas för att samla in feedback och insikter från dina läsare.

4. Stödjer dina marknadsföringsinsatser
En blogg fungerar som en central plattform för ditt innehåll. Blogginlägg kan delas på sociala medier, inkluderas i nyhetsbrev och användas i andra marknadsföringskampanjer. Detta hjälper dig att nå en bredare publik och öka effekten av dina marknadsföringsinsatser.

Hur du kommer igång med din företagsblogg
1. Definiera syftet med din blogg
Innan du startar din blogg är det viktigt att ha en klar uppfattning om dess syfte. Vad vill du uppnå med din blogg? Vill du öka trafik till din webbplats, bygga varumärkeskännedom eller engagera dina kunder? Genom att definiera syftet kan du skapa en tydlig strategi och mål för din blogg.

2. Känn din målgrupp
För att skapa innehåll som verkligen engagerar är det viktigt att förstå din målgrupp. Vilka är dina kunder? Vilka problem och frågor har de? Genom att känna din målgrupp kan du skapa relevant och värdefullt innehåll som talar direkt till dem.

3. Planera ditt innehåll
Skapa en innehållskalender för att planera dina blogginlägg. Bestäm vilka ämnen du ska skriva om och när du ska publicera dem. En välplanerad innehållskalender hjälper dig att hålla dig organiserad och säkerställer att du regelbundet publicerar nytt innehåll.

4. Skapa högkvalitativt innehåll
När du skriver dina blogginlägg, se till att de är informativa, välskrivna och värdefulla för dina läsare. Använd tydliga rubriker, underrubriker och punktlistor för att göra innehållet lättläst. Inkludera också bilder, videor och infografik för att göra inläggen mer engagerande.

5. Optimera för SEO
Använd relevanta nyckelord i dina rubriker, metabeskrivningar och genom hela texten för att förbättra din SEO. Se till att din webbplats är mobilvänlig och har snabba laddningstider. Använd interna länkar för att förbättra navigeringen på din webbplats och externa länkar för att stödja dina påståenden.

6. Marknadsför din blogg
Dela dina blogginlägg på sociala medier, inkludera dem i dina nyhetsbrev och använd dem i andra marknadsföringskampanjer. Uppmuntra dina läsare att dela inläggen och engagera sig genom kommentarer och feedback.

7. Mät och analysera resultat
Använd verktyg som Google Analytics för att mäta trafiken till din blogg och analysera vilka inlägg som presterar bäst. Genom att förstå vad som fungerar och vad som inte gör det kan du justera din strategi och förbättra din blogg över tid.

Slutsats
En företagsblogg är ett kraftfullt verktyg för att förbättra din SEO, bygga varumärkeskännedom, engagera kunder och stödja dina marknadsföringsinsatser. Genom att följa stegen ovan kan du komma igång med din egen blogg och börja dra nytta av dess många fördelar.

På Almfors Webbyrå är vi experter på att hjälpa företag att skapa och underhålla framgångsrika bloggar. Fokusera på det du är bäst på – att driva din verksamhet – så tar vi hand om din företagsblogg och SEO. Kontakta oss idag för att komma igång!
    `,
    date: "18 november 2024",
    readTime: "8 min",
  },
  {
    slug: "seo-optimering",
    title: "SEO-optimering: Så syns du på Google",
    content: `
      Så här fungerar sökmotoroptimering (SEO)
Många betraktar Google som ett digitalt bibliotek som är öppet 24 timmar om dygnet och alltid gratis. Men är det verkligen så? Visst stämmer det att du som går in på Google för att genomföra en sökning inte behöver betala något för att söka, men att plattformen är gratis är inte hela sanningen.

Tusentals företag konkurrerar dagligen om att få din uppmärksamhet när du söker på Google, och för att lyckas med detta finns bland annat verktyget ”Google Ads” där företag betalar för annonser för att synas så högt upp som möjligt.

Kort och gott vill Google tjäna pengar, och företaget är allt annat än opartiskt. Det är en kombination av den som betalar bäst och som har bäst strategi, som också får synas högst upp i sökfältet.

I kombination med detta fungerar Google också som informatör och vill att varje användare som genomför en sökning via deras plattform ska bli så nöjd som möjligt. Detta innebär att din webbplats, genom ett strategiskt och väl genomfört arbete med SEO – sökmotoroptimering, kan lyckas riktigt väl med att få fler sökträffar enbart genom organisk spridning. Men du behöver såklart jobba för det!

I den här artikeln går vi igenom några grundläggande steg som hjälper dig att förstå hur sökmotoroptimering är uppbyggt och fungerar.

Att söka efter information på Google är vanligt
Att söka efter information på Google är inget ovanligt i dagens samhälle. Begreppet ”googla” har i stort sett blivit ett verb som beskriver handlingen ”att söka efter information på webben”.

Så här bestäms ordningen i träfflistorna
Ordningen bestäms genom en avancerad urvalsprocess som består av en mängd olika algoritmer. En algoritm är en instruktion eller regel för hur något ska göras, och Google använder tusentals olika algoritmer som konstant sorterar och analyserar allt innehåll som finns på webben.

Exakt hur dessa algoritmer är uppbyggda och fungerar är en stor företagshemlighet för Google. Men för att webbutvecklare ska veta hur de bäst bygger en webbplats för att ranka högt erbjuder Google vissa riktlinjer som tillsammans utgör en bra grund för att ranka högt i sökmotorn.

Dessa riktlinjer kan innehålla allt från att skriva ren och snygg kod, till att ladda upp rätt filstorlekar och använda rätt rubriksättning, H1, H2, H3, osv. Oroa dig inte, vi kommer gå igenom allt detta.

Så här fungerar algoritmen i stora drag
Förenklat kan man dela in Googles avancerade algoritmer i tre olika kategorier.

Tekniska riktlinjer
Dessa riktlinjer fokuserar på om webbplatsen uppfyller alla tekniska riktlinjer som ges av Google. Bland annat behöver webbplatsen vara byggd på rätt sätt så att Google förstår rubriker, bilder och länkar. Koden måste vara ren och inte för tung. Den behöver vara mobilanpassad och vara en säker webbplats med SSL-kryptering och ett SSL-certifikat.

Bra och relevant innehåll
Innehållet är en av de viktigaste parametrarna. Uttrycket ”content is king” har nog aldrig varit så sant som när det kommer till att skapa SEO-anpassat innehåll för webbplatser. Dessa riktlinjer fokuserar helt och hållet på om innehållet på webbplatsen är relevant och specifikt. Det är trots allt innehållet som utgör sökresultatet som en besökare möts av.

Andras rekommendationer (inkommande länkar)
Denna kategori omfattar hur webbplatsen uppfattas av resten av webben. Man kan säga att det fungerar som i verkliga livet. Om jag tycker att en film är superbra så kommer jag att rekommendera den till andra. En rekommendation på webben sker i form av en länkning. Så när många länkar till din webbplats är det samma sak som att många rekommenderar den.

För att optimera din webbplats krävs det att du skapar rätt typ av innehåll som följer vissa riktlinjer.

En djupdykning: så fångar du algoritmens intresse
Det är nu det blir riktigt intressant. I resten av den här artikeln kommer vi att gå igenom hur man uppfyller kraven och följer riktlinjerna i ovanstående kategorier. För det är den som kan leverera bäst på samtliga kategorier som till slut kommer vinna dragkampen och knipa de bästa placeringarna. Låt oss ta tjuren vid hornen och gå igenom dem en och en.

Den tekniska delen av SEO
Hur säkerställer man att webbplatsen uppfyller de tekniska riktlinjer som krävs? Till att börja med finns det några enkla saker som du snabbt kan utgå ifrån för att få en bra överblick gällande hemsidans tekniska kvalité.

Du bör se till att webbplatsen har en så kallad SSL-kryptering och ett SSL-certifikat. SSL är en förkortning av Secure Socket Layer och är en teknik som används för att kryptera trafiken mellan en hemsida på en webbserver och en besökare från en webbläsare. Om hemsidan innehåller ett SSL-certifikat kan du enkelt se det genom att kolla i adressfältet där webbplatsens webbadress syns. Om det där dyker upp ett hänglås innebär det att hemsidan är krypterad och säkrad.

Andra faktorer är exempelvis ren och snygg kod samt laddningstid. Webbplatser laddas in helt över internet och denna inladdning behöver gå fort. Till skillnad från program och appar som installeras på datorn eller telefonen kan en webbplats inte vara större än några megabyte. Google, Bing och andra sökmotorer använder sedan länge webbplatsens laddningstid, och den upplevda kvickheten mellan klicken, som en av markörerna för att bedöma vilken placering den får i träfflistorna.

För att få en indikation på statusen för din webbplats kan du använda verktyget GTmetrix eller Googles eget verktyg PageSpeed Insight. Dessa verktyg genomför tester på din webbplats och mäter hur välbyggd och snabb en hemsida är.

Skapa relevant innehåll
Hur besökaren beter sig på din webbplats är en avgörande faktor för hur din webbplats rankas. En algoritm som fått stor betydelse för att mäta detta är ”avvisningsfrekvens”, det vill säga hur snabbt besökarna väljer att lämna webbplatsen istället för att stanna kvar en längre stund och surfa runt på sidan innan de, eventuellt, återgår till sökmotorn igen.

Avvisningsfrekvensen blir för Google en indikator för om innehållet på din webbplats är relevant för det som besökaren sökt. Google kommer att ge din webbplats ”en chans” att bevisa vad du går för. Om för många personer klickar på din webbplats från Google och sedan hoppar tillbaka, kommer din webbplats sakta att börja tappa placeringar. Om det motsatta sker, dvs att besökaren stannar länge på din webbplats, kommer den istället att börja klättra i ranking.

Fokusera därför på att skapa innehåll som riktiga människor faktiskt vill läsa och får nytta av. Om man inte gör det, spelar inget av det andra någon roll.

Var specifik: ett sökord eller sökfras per sida
Google bedömer egentligen inte din webbplats i sin helhet, utan de gör en enskild bedömning för varje sida på webbplatsen. För att övertyga Google om att en av dina sidor är relevant för en sökning, behöver temat som du behandlar på sidan ha ett laserfokus.

Låt säga att någon söker efter ”tomater” på Google. Din konkurrent har en hel sida som endast avhandlar allt som har med tomater att göra, medan du har en sida som pratar om grönsaker i största allmänhet där tomater bara nämns på förbifarten. Din konkurrent kommer i ett sådant läge att fånga Googles uppmärksamhet då dennes sida uppfattas som mer relevant.

För att skapa bra innehåll som optimeras utifrån Googles riktlinjer behöver du därför först bestämma dig för vad din sida ska handla om.

Därefter kan du med fördel välja ut ett, max två, sökord eller en sökfras per sida. Försök att vara så specifik som möjligt. Istället för att skriva allmänt om ”digital marknadsföring” kan du specificera vilken typ av tjänst du erbjuder: är det ”Google Ads”, ”annonser i sociala medier” eller ”SEO”? Desto mer specifik din text är, desto mer specifik information ger du till Google vilket ökar dina chanser för högre ranking.
    `,
    date: "15 november 2024",
    readTime: "6 min",
  },
];

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  // Om inlägget inte hittas
  if (!post) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <h1>Inlägget kunde inte hittas</h1>
        <Link to="/blogg">
          <Button variant="ghost">Tillbaka till bloggen</Button>
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-24 pb-16">
      <SEO
        title={post.title}
        description={post.content.substring(0, 150)}
        canonical={`https://almfors.se/blogg/${slug}`}
        type="article"
      />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link to="/blogg">
            <Button variant="ghost" className="group">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Tillbaka till bloggen
            </Button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Card className="relative overflow-hidden group">
            <CardContent className="p-8 relative">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3 }}
                className="w-20 h-20 mx-auto mb-8 relative"
              >
                <motion.div
                  className="absolute inset-0 rounded-full bg-primary/10"
                  animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                >
                  <Sparkles className="w-10 h-10 text-primary" />
                </motion.div>
              </motion.div>

              <div className="text-center mb-8">
                <h1 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
                  {post.title}
                </h1>
                <div className="flex items-center justify-center gap-4 text-muted-foreground">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime} läsning</span>
                </div>
              </div>

              <div className="prose prose-lg dark:prose-invert mx-auto">
                {post.content.split("\n\n").map((paragraph, index) => {
                  if (paragraph.startsWith("## ")) {
                    return (
                      <h2 key={index} className="text-2xl font-bold mt-8 mb-4 gradient-text">
                        {paragraph.replace("## ", "")}
                      </h2>
                    );
                  }
                  return (
                    <p key={index} className="text-muted-foreground leading-relaxed mb-6">
                      {paragraph}
                    </p>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </main>
  );
};

export default BlogPostPage;
