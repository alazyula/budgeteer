import { db } from "@/firebase";
import Expense from "@/model/Expanse";
import { collection, query, where, getDocs } from "firebase/firestore";


export async function getExpansesByGroupId(groupId: string) {
    const expanses: Expense[] = []
    const q = query(collection(db, "expanses"), where("groupId", "==", groupId));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        const data = doc.data()
        let expanse : Expense 
        expanse = {
            id: doc.id,
            description: data.description,
            category: data.category,
            amount: data.amount,
            date: data.date,
            groupId: data.groupId,
            paidBy: data.paidBy,
            payerId: data.payerId
        }
        expanses.push(expanse)})

    return expanses

}