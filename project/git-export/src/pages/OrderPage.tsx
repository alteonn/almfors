import SEO from '@/components/SEO';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import OrderForm from '@/components/sections/OrderForm';
import { DecorativeDots, DecorativeCircles } from '@/components/Decorative';

const OrderPage = () => {
  const location = useLocation();
  const selectedPackage = location.state?.package || null;

  return (
    <main className="min-h-screen pt-20">
      <SEO 
        title="Beställ"
        description="Beställ din nya webbplats eller hantering av sociala medier. Enkelt, snabbt och utan bindningstid. Börja din digitala resa med Almfors idag."
        canonical="https://almfors.se/bestall"
      />
      <DecorativeDots />
      <DecorativeCircles />
      <OrderForm selectedPackage={selectedPackage} />
    </main>
  );
};

export default OrderPage;