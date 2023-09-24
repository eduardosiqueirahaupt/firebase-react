import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyAcbojCyjJ8-lk6M1R-Ygn-cO5zS0vx9Y8",
  authDomain: "atv-somativa.firebaseapp.com",
  projectId: "atv-somativa",
  storageBucket: "atv-somativa.appspot.com",
  messagingSenderId: "1071385176014",
  appId: "1:1071385176014:web:f35d1467c297da9445ad9f",
  measurementId: "G-10PF1XFKFD",
});

export const FirebaseContext = createContext();

export const FirebaseProvider = ({ children }) => {
  const db = getFirestore(firebaseApp);
  return (
    <FirebaseContext.Provider
      value={{
        db,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};

export const useFirebaseContext = () => useContext(FirebaseContext);
