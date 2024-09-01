import { auth } from "@/firebase"
import { router } from "expo-router"

export default function checkInitialLogin() {

  auth.onAuthStateChanged((user) => {
    if(!user){
      router.push('/login')
    }
    else {
      router.push(`/user/${user.uid}`)
    }
   
   
    }) }