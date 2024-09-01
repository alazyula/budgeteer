import { db } from "@/firebase";
import { collection, setDoc, doc, addDoc } from "firebase/firestore";

export async function createNewExpanse( category:string ,description: string, amount: number, date: string, groupId: string, paidBy: string, payerId: string) {
  
   await addDoc(collection(db, "expanses"), {
    category: category,  
    description: description,
    amount: amount,
    date: date,
    groupId: groupId,
    paidBy: paidBy,
    payerId: payerId}
   )
}