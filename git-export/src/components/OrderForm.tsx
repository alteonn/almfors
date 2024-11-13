import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { submitOrderForm } from '@/lib/api';
// ... rest of the imports

const OrderForm = ({ selectedPackage }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    try {
      await submitOrderForm(data);
      setIsSubmitted(true);
      toast({
        title: "Tack för din beställning!",
        description: "Vi kontaktar dig inom kort för att komma igång.",
      });
    } catch (error) {
      toast({
        title: "Ett fel uppstod",
        description: "Försök igen senare eller kontakta oss via telefon.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // ... rest of the component remains the same
};