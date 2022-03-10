import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  // apiKey: process.env.NEXT_PUBLIC_APIKEY,
  apiKey: "AIzaSyCUa2v6weSrayikwNcJyT6jH0Fn5GQisX4",
  authDomain: "gctnaira.firebaseapp.com",
  projectId: "gctnaira",
  storageBucket: "gctnaira.appspot.com",
  messagingSenderId: "1082091374798",
  appId: "1:1082091374798:web:f4746abe970dcd7d0ea89f",
  measurementId: "G-46LHTTK7CR"
};

const app = initializeApp(firebaseConfig)
export const auth = getAuth()
