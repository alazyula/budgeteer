import { db } from "@/firebase";
import { collection, doc, getDoc, query, where } from "firebase/firestore";
import Group from "@/model/Group";

export async function fetchGroupById(id: string) {
  const docRef = doc(db, "groups", id);
  const docSnap = await getDoc(docRef);
  return docSnap.data() as Group; 
  
}