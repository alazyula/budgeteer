import { addDoc, collection } from "firebase/firestore";
import Group from "@/model/Group";
import { auth, db } from "@/firebase";
import { router } from "expo-router";
export async function createNewGroup(name : string) {
    
    const docRef = await addDoc(collection(db, "groups"), {
        name: name,
        owner: auth.currentUser?.uid,
        members: [auth.currentUser?.uid]

    }).then((docRef) => {
        router.push(`/group/${docRef.id}`);
    }).catch((error) => {
        console.error("Error adding document: ", error);
    });
  
}