import { Routes, Route } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import HomePage from '@/pages/HomePage';
import SocialMediaPage from '@/pages/SocialMediaPage';
import OrderPage from '@/pages/OrderPage';
import WhyAlmforsPage from '@/pages/WhyAlmforsPage';
import AboutPage from '@/pages/AboutPage';
import CustomerServicePage from '@/pages/CustomerServicePage';
import WebdesignPage from '@/pages/WebdesignPage';
import LoginPage from '@/pages/LoginPage';
import Footer from '@/components/Footer';
import { useScrollRestoration } from '@/hooks/useScrollRestoration';

const AppRoutes = () => {
  useScrollRestoration();

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sociala-medier" element={<SocialMediaPage />} />
        <Route path="/bestall" element={<OrderPage />} />
        <Route path="/varfor-almfors" element={<WhyAlmforsPage />} />
        <Route path="/om-oss" element={<AboutPage />} />
        <Route path="/kundservice" element={<CustomerServicePage />} />
        <Route path="/webbdesign" element={<WebdesignPage />} />
        <Route path="/logga-in" element={<LoginPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default AppRoutes;