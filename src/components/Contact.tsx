import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { submitContactForm } from '@/lib/api';

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string,
    };

    try {
      await submitContactForm(data);
      toast({
        title: "Tack för ditt meddelande!",
        description: "Vi återkommer till dig inom kort.",
        duration: 5000,
      });
      (e.target as HTMLFormElement).reset();
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

  return (
    <section className="py-24 relative overflow-hidden" id="contact">
      {/* Rest of the component remains the same */}
    </section>
  );
};

export default Contact;