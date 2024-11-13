import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useToast } from '@/hooks/use-toast';
import { submitOrderForm } from '@/lib/api';

// Definiera ett valideringsschema med Zod
const formSchema = z.object({
  name: z.string().nonempty("Namn är obligatoriskt"),
  email: z.string().email("Ogiltig e-postadress"),
  message: z.string().nonempty("Meddelande är obligatoriskt"),
});

// Definiera typen baserat på formulärets schema
type FormSchema = z.infer<typeof formSchema>;

interface OrderFormProps {
  selectedPackage: string;
}

const OrderForm = ({ selectedPackage }: OrderFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });

  // Funktion för att hantera formulärets inskick
  const onSubmit = async (data: FormSchema) => {
    setIsSubmitting(true);

    try {
      await submitOrderForm({ ...data, package: selectedPackage });
      setIsSubmitted(true);
      toast({
        title: "Tack för din beställning!",
        description: "Vi kontaktar dig inom kort för att komma igång.",
      });
      reset(); // Återställ formuläret efter inskick
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
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Namn fält */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium">Namn</label>
        <input
          type="text"
          id="name"
          {...register("name")}
          className="input"
          placeholder="Ditt namn"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
      </div>

      {/* E-post fält */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium">E-post</label>
        <input
          type="email"
          id="email"
          {...register("email")}
          className="input"
          placeholder="Din e-postadress"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
      </div>

      {/* Meddelande fält */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium">Meddelande</label>
        <textarea
          id="message"
          {...register("message")}
          className="textarea"
          placeholder="Skriv ditt meddelande här"
        ></textarea>
        {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
      </div>

      {/* Skicka-knapp */}
      <button
        type="submit"
        className="button"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Skickar..." : "Skicka"}
      </button>

      {isSubmitted && (
        <p className="text-green-500 mt-4">Tack! Din beställning har skickats.</p>
      )}
    </form>
  );
};

export default OrderForm;
