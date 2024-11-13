interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface OrderFormData {
  package: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  message?: string;
}

const ZAPIER_WEBHOOK_URL = 'https://hooks.zapier.com/hooks/catch/20475824/25ncbch/';

export const submitContactForm = async (data: ContactFormData) => {
  try {
    const response = await fetch(ZAPIER_WEBHOOK_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        formType: 'contact',
        ...data,
        timestamp: new Date().toISOString(),
        source: window.location.hostname
      }),
    });

    return { success: true };
  } catch (error) {
    console.error('Contact form submission error:', error);
    throw new Error('Kunde inte skicka meddelandet. Försök igen senare.');
  }
};

export const submitOrderForm = async (data: OrderFormData) => {
  try {
    const response = await fetch(ZAPIER_WEBHOOK_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        formType: 'order',
        ...data,
        timestamp: new Date().toISOString(),
        source: window.location.hostname
      }),
    });

    return { success: true };
  } catch (error) {
    console.error('Order form submission error:', error);
    throw new Error('Kunde inte skicka beställningen. Försök igen senare.');
  }
};