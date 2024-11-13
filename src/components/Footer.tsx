import { useState } from 'react';
import { Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState(() => {
    const saved = localStorage.getItem('cookie-consent');
    if (saved === 'all') {
      return { necessary: true, analytics: true, marketing: true };
    }
    if (saved === 'necessary') {
      return { necessary: true, analytics: false, marketing: false };
    }
    try {
      return JSON.parse(saved || '{}');
    } catch {
      return { necessary: true, analytics: false, marketing: false };
    }
  });

  const handleSavePreferences = () => {
    localStorage.setItem('cookie-consent', JSON.stringify(preferences));
    setShowSettings(false);
  };

  return (
    <footer className="bg-muted py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Almfors</h3>
            <p className="text-muted-foreground">
              Vi skapar moderna webbplatser och hanterar sociala medier som driver resultat.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Tjänster</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Webbdesign
                </Link>
              </li>
              <li>
                <Link to="/sociala-medier" className="text-muted-foreground hover:text-primary transition-colors">
                  Sociala medier
                </Link>
              </li>
              <li>
                <Link to="/bestall" className="text-muted-foreground hover:text-primary transition-colors">
                  Beställ
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Företag</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/varfor-almfors" className="text-muted-foreground hover:text-primary transition-colors">
                  Varför Almfors?
                </Link>
              </li>
              <li>
                <Link to="/om-oss" className="text-muted-foreground hover:text-primary transition-colors">
                  Om oss
                </Link>
              </li>
              <li>
                <Link to="/kundservice" className="text-muted-foreground hover:text-primary transition-colors">
                  Kundservice
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Följ oss</h4>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/almfors.se" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Almfors. Alla rättigheter förbehållna.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link to="/kundservice" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Integritetspolicy
              </Link>
              <Link to="/kundservice" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Villkor
              </Link>
              <button 
                onClick={() => setShowSettings(true)}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Cookie-inställningar
              </button>
            </div>
          </div>
        </div>
      </div>

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
    </footer>
  );
};

export default Footer;