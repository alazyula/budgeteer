import { addDoc, collection } from "firebase/firestore";
import Group from "@/model/Group";
import { db } from "@/firebase";
export async function createNewGroup(group: Group) {
    // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, "groups"), group);
    console.log("Document written with ID: ", docRef.id);
}