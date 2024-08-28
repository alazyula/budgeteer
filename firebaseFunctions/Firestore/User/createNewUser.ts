import { db } from "@/firebase";
import { doc, addDoc, collection } from "firebase/firestore";

export async function createNewUser(name: string, userId: string) {
    await addDoc(collection(db, "users"), {
        name: name,
        userId: userId
      })
}