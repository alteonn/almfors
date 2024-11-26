import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles, Rocket, Target } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const blogPosts = [
  {
    slug: "sa-har-fungerar-seo",
    icon: Sparkles,
    title: "Så här fungerar sökmotoroptimering (SEO)",
    excerpt:
      "En guide till SEO och hur det kan förbättra din webbplats synlighet.",
    date: "16 november 2024",
    readTime: "10 min",
    gradient: "from-[hsl(var(--accent-blue))] to-[hsl(var(--accent-purple))]",
    animation: { rotate: [0, 360], scale: [1, 1.1, 1] },
  },
  {
    slug: "foretagsbloggning",
    icon: Rocket,
    title: "Företagsbloggning: Varför ditt företag behöver en blogg",
    excerpt:
      "Lär dig varför en företagsblogg är viktig och hur du kommer igång.",
    date: "18 november 2024",
    readTime: "8 min",
    gradient: "from-[hsl(var(--accent-purple))] to-[hsl(var(--accent-teal))]",
    animation: { y: [-5, 5], rotate: [-10, 10] },
  },
  {
    slug: "seo-optimering",
    icon: Target,
    title: "SEO-optimering: Så syns du på Google",
    excerpt: "Praktiska tips för att förbättra din synlighet i sökmotorer.",
    date: "15 november 2024",
    readTime: "6 min",
    gradient: "from-[hsl(var(--accent-teal))] to-[hsl(var(--accent-orange))]",
    animation: { scale: [1, 1.2, 1], rotate: [0, 10, 0] },
  },
];

const BlogPage: React.FC = () => {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <section className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-16">Blogg</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link to={`/blogg/${post.slug}`}>
                <Card className="h-full relative group overflow-hidden hover-lift">
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${post.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                    initial={false}
                  />
                  <CardHeader>
                    <motion.div
                      className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 mx-auto"
                      animate={post.animation}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <post.icon className="w-8 h-8 text-primary" />
                    </motion.div>
                    <CardTitle className="text-xl gradient-text text-center">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{post.excerpt}</p>
                    <div className="text-sm text-gray-500 mt-4">
                      {post.date} • {post.readTime} läsning
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default BlogPage;
