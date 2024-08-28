import { db } from "@/firebase";
import Expense from "@/model/Expanse";
import { collection, query, where, getDocs } from "firebase/firestore";


export async function getExpansesByGroupId(groupId: string) {
    const expanses: Expense[] = []
    const q = query(collection(db, "expanses"), where("groupId", "==", groupId));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        const data = doc.data()
        const expanse : Expense = (doc.id, data.description, data.amount, data.date, data.groupId, data.paidBy)
        expanses.push(expanse)})

    return expanses

}