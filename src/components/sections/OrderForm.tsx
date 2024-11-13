import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  Package2,
  User,
  Building2,
  Mail,
  Phone,
  MessageSquare,
  CheckCircle,
} from 'lucide-react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  package: z.string().min(1, 'Välj ett paket'),
  name: z.string().min(2, 'Namnet måste vara minst 2 tecken'),
  company: z.string().min(2, 'Företagsnamnet måste vara minst 2 tecken'),
  email: z.string().email('Ogiltig e-postadress'),
  phone: z.string().min(6, 'Telefonnumret måste vara minst 6 siffror'),
  message: z.string().optional(),
});

const packages = [
  { id: 'web-small', name: 'Webbsida - SMAL', price: '9900' },
  { id: 'web-medium', name: 'Webbsida - MEDIUM', price: '19900' },
  { id: 'web-large', name: 'Webbsida - LARGE', price: '39900' },
  { id: 'social-mini', name: 'Sociala Medier - Mini', price: '2990' },
  { id: 'social-medium', name: 'Sociala Medier - Medium', price: '4990' },
  { id: 'social-large', name: 'Sociala Medier - Large', price: '9900' },
];

const OrderForm = ({ selectedPackage }: { selectedPackage?: string }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      package: selectedPackage || '',
      name: '',
      company: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    try {
      // Find the selected package details
      const selectedPkg = packages.find(pkg => pkg.id === data.package);
      
      const formData = {
        formType: 'order',
        packageId: data.package,
        packageName: selectedPkg?.name || '',
        packagePrice: selectedPkg?.price || '',
        name: data.name,
        company: data.company,
        email: data.email,
        phone: data.phone,
        message: data.message || '',
        timestamp: new Date().toISOString(),
        source: window.location.hostname,
        url: window.location.href
      };

      const response = await fetch('https://hooks.zapier.com/hooks/catch/20475824/25ncbch/', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      toast({
        title: "Tack för din beställning!",
        description: "Vi kontaktar dig inom kort för att komma igång.",
        duration: 5000,
      });
      
      setIsSubmitted(true);
    } catch (error) {
      console.error('Order submission error:', error);
      toast({
        title: "Ett fel uppstod",
        description: "Försök igen senare eller kontakta oss via telefon.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="container mx-auto px-4 py-24"
      >
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="w-20 h-20 mx-auto mb-8 rounded-full bg-primary/10 flex items-center justify-center"
          >
            <CheckCircle className="w-10 h-10 text-primary" />
          </motion.div>
          <h2 className="text-3xl font-bold mb-4">Tack för din beställning!</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Vi har mottagit din förfrågan och återkommer inom kort med mer information.
          </p>
          <Button onClick={() => window.location.href = '/'}>
            Tillbaka till startsidan
          </Button>
        </div>
      </motion.div>
    );
  }

  return (
    <section className="container mx-auto px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-4 gradient-text"
          >
            Beställ din lösning
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-muted-foreground"
          >
            Fyll i formuläret nedan så hjälper vi dig att komma igång
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-card border rounded-xl p-8 shadow-lg relative overflow-hidden"
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="package"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2">
                      <Package2 className="w-4 h-4" />
                      Välj paket
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Välj ditt paket" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {packages.map((pkg) => (
                          <SelectItem key={pkg.id} value={pkg.id}>
                            {pkg.name} - {Number(pkg.price).toLocaleString()} kr
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        Namn
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Ditt namn" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">
                        <Building2 className="w-4 h-4" />
                        Företag
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Företagsnamn" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                        <Input placeholder="din@email.se" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        Telefon
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Ditt telefonnummer" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2">
                      <MessageSquare className="w-4 h-4" />
                      Meddelande (valfritt)
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Berätta mer om dina önskemål..."
                        className="min-h-[100px]"
                        {...field}
                      />
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
                  className="w-full" 
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Skickar..." : "Skicka beställning"}
                </Button>
              </motion.div>
            </form>
          </Form>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default OrderForm;