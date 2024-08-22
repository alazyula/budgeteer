import { auth } from "@/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export async function handleSignUp(email: string, password: string) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
}
