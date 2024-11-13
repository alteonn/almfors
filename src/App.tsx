import { ThemeProvider } from '@/components/theme-provider';
import { BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AuthProvider } from '@/contexts/AuthContext';
import AppRoutes from '@/components/AppRoutes';
import { DecorativeArrow } from '@/components/Decorative';
import { Toaster } from '@/components/ui/toaster';
import CookieConsent from '@/components/CookieConsent';

const App = () => {
  return (
    <HelmetProvider>
      <ThemeProvider defaultTheme="light" storageKey="almfors-theme">
        <AuthProvider>
          <Router>
            <div className="min-h-screen bg-background text-foreground relative">
              <AppRoutes />
              <DecorativeArrow />
              <Toaster />
              <CookieConsent />
            </div>
          </Router>
        </AuthProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default App;