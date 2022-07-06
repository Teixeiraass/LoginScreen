import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyCAvkxJ7sGgpF967OT4NAKDyKTN7I2Wgng",
  authDomain: "loginsc-b4b88.firebaseapp.com",
  projectId: "loginsc-b4b88",
  storageBucket: "loginsc-b4b88.appspot.com",
  messagingSenderId: "119286277528",
  appId: "1:119286277528:web:471aade65837ca413977ed"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export function signUp(email, password){
  return createUserWithEmailAndPassword(auth, email, password);
}

export function logIn(email, password){
  return signInWithEmailAndPassword(auth, email, password);
}

export function LogOut(){
  return signOut(auth)
}

// custom hook
export function useAuth(){
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
    return unsub;
  }, [])

  return currentUser;
}
