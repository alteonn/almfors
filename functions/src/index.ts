import * as functions from 'firebase-functions';
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import * as nodemailer from 'nodemailer';

const serviceAccount = {
  "type": "service_account",
  "project_id": "almfors",
  "private_key_id": process.env.FIREBASE_PRIVATE_KEY_ID,
  "private_key": process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  "client_email": process.env.FIREBASE_CLIENT_EMAIL,
  "client_id": process.env.FIREBASE_CLIENT_ID,
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": process.env.FIREBASE_CERT_URL
};

const app = initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore(app);

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: functions.config().email.user,
    pass: functions.config().email.pass
  }
});

// Handle contact form submissions
export const onContactFormSubmission = functions.firestore
  .document('contact_submissions/{submissionId}')
  .onCreate(async (snap, context) => {
    const submission = snap.data();
    
    const mailOptions = {
      from: 'Almfors Webbplats <noreply@almfors.se>',
      to: 'patrick@alteon.se',
      subject: `Nytt kontaktformulär: ${submission.subject}`,
      html: `
        <h2>Nytt meddelande från kontaktformuläret</h2>
        <p><strong>Namn:</strong> ${submission.name}</p>
        <p><strong>E-post:</strong> ${submission.email}</p>
        <p><strong>Ämne:</strong> ${submission.subject}</p>
        <p><strong>Meddelande:</strong></p>
        <p>${submission.message}</p>
      `
    };

    try {
      await transporter.sendMail(mailOptions);
      await snap.ref.update({ emailSent: true });
    } catch (error) {
      console.error('Error sending email:', error);
      await snap.ref.update({ emailError: error.message });
    }
  });

// Handle order form submissions
export const onOrderFormSubmission = functions.firestore
  .document('orders/{orderId}')
  .onCreate(async (snap, context) => {
    const order = snap.data();
    
    const mailOptions = {
      from: 'Almfors Webbplats <noreply@almfors.se>',
      to: 'patrick@alteon.se',
      subject: `Ny beställning: ${order.package}`,
      html: `
        <h2>Ny beställning från webbplatsen</h2>
        <p><strong>Paket:</strong> ${order.package}</p>
        <p><strong>Namn:</strong> ${order.name}</p>
        <p><strong>Företag:</strong> ${order.company}</p>
        <p><strong>E-post:</strong> ${order.email}</p>
        <p><strong>Telefon:</strong> ${order.phone}</p>
        ${order.message ? `<p><strong>Meddelande:</strong></p><p>${order.message}</p>` : ''}
      `
    };

    try {
      await transporter.sendMail(mailOptions);
      await snap.ref.update({ emailSent: true });
    } catch (error) {
      console.error('Error sending email:', error);
      await snap.ref.update({ emailError: error.message });
    }
  });