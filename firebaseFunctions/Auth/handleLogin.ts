import {auth} from "@/firebase"
import { signInWithEmailAndPassword } from "firebase/auth";
import { router } from "expo-router";

export default async function handleLogin(email: string, password: string) {
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    router.push(`/user/${auth.currentUser?.uid}`)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}