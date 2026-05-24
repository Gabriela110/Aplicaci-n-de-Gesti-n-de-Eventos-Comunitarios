import { initializeApp } from 'firebase/app';

import { getAuth } from 'firebase/auth';

import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {

  apiKey: "AIzaSyALh_NLtj8T-zKOsIE_8Xgm0DoI-wEGOgw",

  authDomain: "eventgo-8c77e.firebaseapp.com",

  projectId: "eventgo-8c77e",

  storageBucket: "eventgo-8c77e.firebasestorage.app",

  messagingSenderId: "567111923692",

  appId: "1:567111923692:web:afa7b1607faff2280f32c9"

};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);