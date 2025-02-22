import { doc, setDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export async function createDonation(donationData: any) {
  // Add to Firestore
  await setDoc(doc(db, 'pays', donationData.vidtorId), donationData);
}
export const handlePay = async (paymentInfo: any, setPaymentInfo: any) => {
  try {
    const visitorId = localStorage.getItem('vistor');
    if (visitorId) {
      const docRef = doc(db, 'pays', visitorId);
      await setDoc(
        docRef,
        { ...paymentInfo, status: 'pending' },
        { merge: true }
      );
      setPaymentInfo((prev: any) => ({ ...prev, status: 'pending' }));
    }
  } catch (error) {
    console.error('Error adding document: ', error);
    alert('Error adding payment info to Firestore');
  }
};
