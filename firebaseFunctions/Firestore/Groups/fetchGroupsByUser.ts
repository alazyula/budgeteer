import { db } from "@/firebase";
import Group from "@/model/Group";
import { query, collection, where, getDocs } from "firebase/firestore";

export async function fetchGroupsByUser(userId: string) {

    const groups: Group[] = []
    const q = query(collection(db, "groups"), where("members", "array-contains", userId));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        const data = doc.data()
        const group: Group = { id: doc.id, name: data.name, members: data.members, owner: data.owner, description: data.description }
        groups.push(group)
    })

    return groups

}