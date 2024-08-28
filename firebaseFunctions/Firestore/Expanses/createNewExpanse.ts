import { db } from "@/firebase";
import { collection, setDoc, doc } from "firebase/firestore";

export async function createNewExpanse(description: string, amount: number, date: string, groupId: string, paidBy: string) {
  
   await setDoc(doc(db, "expanses"), {
    description: description,
    amount: amount,
    date: date,
    groupId: groupId,
    paidBy: paidBy }
   )
}