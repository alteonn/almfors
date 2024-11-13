import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { submitContactForm } from '@/lib/api';

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Förhindra standardformulärets beteende
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
      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          type="text"
          name="name"
          placeholder="Namn"
          required
          className="input"
        />
        <input
          type="email"
          name="email"
          placeholder="E-post"
          required
          className="input"
        />
        <input
          type="text"
          name="subject"
          placeholder="Ämne"
          required
          className="input"
        />
        <textarea
          name="message"
          placeholder="Meddelande"
          required
          className="textarea"
        ></textarea>
        <button
          type="submit"
          className="button"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Skickar..." : "Skicka"}
        </button>
      </form>
    </section>
  );
};

export default Contact;
