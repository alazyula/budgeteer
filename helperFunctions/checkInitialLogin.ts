import { auth } from "@/firebase"
import { router } from "expo-router"

export default function checkInitialLogin() {
   
    if(!auth.currentUser){
        router.push('/login')
      }
      else {
        router.push(`/user/${auth.currentUser?.uid}`)
      }
    }