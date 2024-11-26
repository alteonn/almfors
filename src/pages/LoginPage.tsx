import SEO from "@/components/SEO";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lock, Mail, Eye, EyeOff, Key, Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  email: z.string().email("Ogiltig e-postadress"),
  password: z.string().min(6, "Lösenordet måste vara minst 6 tecken"),
});

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);

    try {
      // Temporarily disabled login functionality
      toast({
        title: "Inloggning tillfälligt avstängd",
        description: "Kontakta oss för mer information.",
        variant: "destructive",
      });
    } catch (error) {
      toast({
        title: "Inloggning misslyckades",
        description: "Kontrollera dina uppgifter och försök igen.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="min-h-screen pt-24 pb-12 relative overflow-hidden">
      <SEO
        title="Logga in"
        description="Logga in på ditt Almfors-konto för att hantera dina tjänster och få tillgång till din kundportal."
        canonical="https://almfors.se/logga-in"
        type="website"
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

      {/* Floating elements */}
      <motion.div
        animate={{
          y: [-10, 10, -10],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-[20%] text-primary/20"
      >
        <Key className="w-12 h-12" />
      </motion.div>

      <motion.div
        animate={{
          y: [10, -10, 10],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
        className="absolute bottom-20 right-[20%] text-primary/20"
      >
        <Shield className="w-16 h-16" />
      </motion.div>

      <div className="container max-w-lg mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="relative overflow-hidden backdrop-blur-sm bg-background/80">
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--accent-blue))] to-[hsl(var(--accent-purple))] opacity-0 group-hover:opacity-5 transition-opacity duration-500"
              initial={false}
            />

            <CardHeader className="space-y-1">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
                className="w-20 h-20 mx-auto mb-6 relative"
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
                  <Lock className="w-10 h-10 text-primary" />
                </motion.div>
              </motion.div>

              <CardTitle className="text-2xl font-bold text-center gradient-text">
                Välkommen tillbaka
              </CardTitle>
            </CardHeader>

            <CardContent>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2">
                          <Mail className="w-4 h-4" />
                          E-post
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="din@email.se"
                            {...field}
                            className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2">
                          <Lock className="w-4 h-4" />
                          Lösenord
                        </FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input
                              type={showPassword ? "text" : "password"}
                              {...field}
                              className="pr-10 transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                            />
                            <button
                              type="button"
                              onClick={() => setShowPassword(!showPassword)}
                              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                            >
                              {showPassword ? (
                                <EyeOff className="w-4 h-4" />
                              ) : (
                                <Eye className="w-4 h-4" />
                              )}
                            </button>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      className="w-full relative overflow-hidden group"
                      disabled={isLoading}
                    >
                      <motion.span className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--accent-blue))] to-[hsl(var(--accent-purple))] opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                      {isLoading ? "Loggar in..." : "Logga in"}
                    </Button>
                  </motion.div>
                </form>
              </Form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default LoginPage;
