import {auth} from "@/firebase"
import { signInWithEmailAndPassword } from "firebase/auth";

export default async function handleLogin(email: string, password: string) {
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}