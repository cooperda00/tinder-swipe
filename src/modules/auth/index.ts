import { auth } from "modules/firebase";
import { FirebaseError } from "firebase/app";
import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut as signOutOfFirebase,
} from "firebase/auth";

//TODO - encapsulate methods in a class + wrap error type in custom type

export const signIn = async (email: string, password: string) => {
  const { user } = await signInWithEmailAndPassword(auth, email, password);
  return user;
};

export const signOut = async () => {
  try {
    await signOutOfFirebase(auth);
  } catch (e) {
    const { code, message } = e as FirebaseError;
    console.error(`${code} Error : ${message}`);
  }
};

export const sendPasswordReset = async (email: string) => {
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (e) {
    const { code, message } = e as FirebaseError;
    console.error(`${code} Error : ${message}`);
  }
};

export { PrivateRoute } from "./PrivateRoute";
export { AuthProvider, useAuth } from "./AuthProvider";
