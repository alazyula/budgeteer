import { Text, View } from "react-native";
import LoginForm from "@/components/Auth/LoginForm";
import styles from "@/stylesheets/styles";
import SignUpForm from "@/components/Auth/SignUpForm";
import { ActivityIndicator, MD2Colors, Surface } from 'react-native-paper';
import { useEffect } from "react";
import { router } from "expo-router";
import { auth } from "@/firebase";
import checkLogin from "@/helperFunctions/checkLogin";

export default function Index() {

  useEffect(() => {
    
    setTimeout(checkLogin, 2000);
    
  }, []);
  return (
    <Surface style={{height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    }} >
     
     
     <ActivityIndicator animating={true} color={MD2Colors.red800} />
    

    </Surface>
  );
}
