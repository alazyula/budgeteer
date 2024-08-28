import { auth } from "@/firebase"
import { router } from "expo-router"

export default function checkLogin() {
    if(!auth.currentUser){
        router.push('/login')
      }
    }