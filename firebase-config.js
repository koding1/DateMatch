import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDw3B0zxnz2C3JDu_Igt7wCiD-Y2-_Z6vI",
  authDomain: "dating-4cd4b.firebaseapp.com",
  databaseURL:
    "https://dating-4cd4b-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "dating-4cd4b",
  storageBucket: "dating-4cd4b.appspot.com",
  messagingSenderId: "800176545426",
  appId: "1:800176545426:web:e71c63f9b1650f237ed04b",
  measurementId: "G-5DDWL8E9YQ",
};

const app = initializeApp(firebaseConfig);
//export const authentication = getAuth(app);
export const db = getDatabase(app);

export const androidClientId =
  "78075718912-jelf2t612q5qvn0pnqupkon4mrgkki2s.apps.googleusercontent.com";
export const iosClientId =
  "78075718912-p3rlisrv4e26ahrps9f7gvfjiamjs53k.apps.googleusercontent.com";