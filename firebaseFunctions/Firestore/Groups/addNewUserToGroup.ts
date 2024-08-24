import { db } from "@/firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";

export async function addNewUserToGroup(groupId: string, userEmail: string) {
    const groupRef = doc(db, "groups", groupId);
    const userRef = doc(db, "users", userEmail);

    await updateDoc(groupRef, {
        members: arrayUnion(userRef.id)
    });
   
}