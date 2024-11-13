import { addDoc, collection } from 'firebase/firestore';
import { db } from './firebase';

interface EmailData {
  to: string;
  subject: string;
  html: string;
}

export const sendEmailNotification = async (emailData: EmailData) => {
  // Store the email in a separate collection for processing
  await addDoc(collection(db, 'mail'), {
    to: emailData.to,
    subject: emailData.subject,
    html: emailData.html,
    createdAt: new Date(),
    status: 'pending'
  });
};