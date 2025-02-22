import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDrR0sWPAaJeNBp8ey3DwVwbFEjQBgyHBE',
  authDomain: 'helprertf.firebaseapp.com',
  projectId: 'helprertf',
  storageBucket: 'helprertf.firebasestorage.app',
  messagingSenderId: '741205283129',
  appId: '1:741205283129:web:fa48f6d3d5e89fa2da58e8',
  measurementId: 'G-P3FNDFMB7X',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
