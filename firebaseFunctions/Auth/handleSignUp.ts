import { auth } from "@/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { createNewUser } from "../Firestore/User/createNewUser";
import { router } from "expo-router";

export async function handleSignUp(email: string,name: string, password: string) {
createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      createNewUser(name, user.uid).then(() => {
        router.push(`/user/${auth.currentUser?.uid}`)
    })
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
}
