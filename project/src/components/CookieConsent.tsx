import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Cookie, X, Settings2 } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Wait a bit before showing the banner
      const timer = setTimeout(() => setShowBanner(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    setPreferences({
      necessary: true,
      analytics: true,
      marketing: true,
    });
    localStorage.setItem('cookie-consent', 'all');
    setShowBanner(false);
  };

  const handleRejectAll = () => {
    setPreferences({
      necessary: true,
      analytics: false,
      marketing: false,
    });
    localStorage.setItem('cookie-consent', 'necessary');
    setShowBanner(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('cookie-consent', JSON.stringify(preferences));
    setShowSettings(false);
    setShowBanner(false);
  };

  return (
    <>
      <AnimatePresence>
        {showBanner && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
          >
            <div className="container mx-auto">
              <div className="relative bg-card border rounded-lg shadow-lg p-6 md:p-8">
                <motion.div
                  className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center"
                  animate={{ 
                    rotate: [0, -10, 10, -10, 0],
                    scale: [1, 1.1, 1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 1
                  }}
                >
                  <Cookie className="w-6 h-6 text-primary" />
                </motion.div>

                <button 
                  onClick={() => setShowBanner(false)}
                  className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="max-w-3xl mx-auto text-center space-y-4">
                  <h2 className="text-xl md:text-2xl font-bold gradient-text">
                    Nu kom du in här och tänkte att det här kommer vara väldigt dyrt!
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Men där har du fel. Det är billigare än du tror! 
                    <span className="block mt-2 text-sm">
                      (Och ja, vi behöver också fråga om cookies 🍪)
                    </span>
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
                    <Button
                      onClick={handleAcceptAll}
                      className="relative group overflow-hidden"
                    >
                      <motion.span
                        className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--accent-blue))] to-[hsl(var(--accent-purple))] opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                      />
                      Acceptera alla
                    </Button>
                    
                    <Button
                      variant="outline"
                      onClick={handleRejectAll}
                    >
                      Endast nödvändiga
                    </Button>
                    
                    <Button
                      variant="ghost"
                      onClick={() => setShowSettings(true)}
                      className="group"
                    >
                      <Settings2 className="w-4 h-4 mr-2 group-hover:rotate-90 transition-transform duration-300" />
                      Hantera
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Dialog open={showSettings} onOpenChange={setShowSettings}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Cookie-inställningar</DialogTitle>
            <DialogDescription>
              Hantera dina cookie-preferenser. Nödvändiga cookies kan inte stängas av eftersom de krävs för att webbplatsen ska fungera.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 py-4">
            <div className="flex items-center justify-between space-x-4">
              <div className="space-y-1">
                <Label>Nödvändiga cookies</Label>
                <p className="text-sm text-muted-foreground">
                  Krävs för grundläggande funktionalitet
                </p>
              </div>
              <Switch checked disabled />
            </div>

            <div className="flex items-center justify-between space-x-4">
              <div className="space-y-1">
                <Label>Analys</Label>
                <p className="text-sm text-muted-foreground">
                  Hjälper oss förstå hur webbplatsen används
                </p>
              </div>
              <Switch
                checked={preferences.analytics}
                onCheckedChange={(checked) =>
                  setPreferences((prev) => ({ ...prev, analytics: checked }))
                }
              />
            </div>

            <div className="flex items-center justify-between space-x-4">
              <div className="space-y-1">
                <Label>Marknadsföring</Label>
                <p className="text-sm text-muted-foreground">
                  Används för riktad marknadsföring
                </p>
              </div>
              <Switch
                checked={preferences.marketing}
                onCheckedChange={(checked) =>
                  setPreferences((prev) => ({ ...prev, marketing: checked }))
                }
              />
            </div>
          </div>

          <div className="flex justify-end gap-3">
            <Button variant="outline" onClick={() => setShowSettings(false)}>
              Avbryt
            </Button>
            <Button onClick={handleSavePreferences}>
              Spara inställningar
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CookieConsent;