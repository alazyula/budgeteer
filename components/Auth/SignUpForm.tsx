import { TextInput, Button, Text } from "react-native-paper";
import { useState } from "react";
import { handleSignUp } from "@/firebaseFunctions/Auth/handleSignUp";
import { View } from "react-native";
import styles from "@/stylesheets/styles";
import { Link } from "expo-router";
export default function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  return (
    <View style = {styles.outerContainer}>

        <Text variant="headlineLarge" style={styles.titleWithoutHeader}>Hoşgeldiniz</Text>

      <TextInput
        label="Email"
        mode="outlined"
        value={email}
        onChangeText={setEmail}
        style={styles.InnerItemMedium}
      />

      <TextInput
        label="Password"
        mode="outlined"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        style={styles.InnerItemMedium}
        
      />
      <Button style={styles.InnerItemMedium} mode="contained" onPress={() => handleSignUp(email, password)}>
       Kayıt Ol
      </Button>
        <Text>Zaten hesabınız var mı?  <Link href={"/login"}>Giriş Yap</Link></Text>
    </View>
  );
}
