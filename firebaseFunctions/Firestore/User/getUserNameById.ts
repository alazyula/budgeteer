import { db } from "@/firebase";
import { query, collection, where, getDocs } from "firebase/firestore";
export async function getUserNameById(id: string) {
    const q = query(collection(db, "users"), where("userId", "==", id));
    const querySnapshot = await getDocs(q);
    const name = querySnapshot.docs[0].data().name;
    return name;
}