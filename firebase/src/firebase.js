import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyARBTWg6k53pLxMmkykAOYClc83O91SmrA',
  authDomain: 'react-http-80271.firebaseapp.com',
  databaseURL: 'https://react-http-80271-default-rtdb.firebaseio.com',
  projectId: 'react-http-80271',
  storageBucket: 'react-http-80271.appspot.com',
  messagingSenderId: '193895376103',
  appId: '1:193895376103:web:592316164ac1f657fb6e42',
};

export const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
