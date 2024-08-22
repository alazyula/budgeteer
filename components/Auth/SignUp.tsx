import { TextInput, Button, Text } from "react-native-paper";
import { useState } from "react";
import { handleSignUp } from "@/firebaseFunctions/Auth/handleSignUp";
import { View } from "react-native";
import styles from "@/stylesheets/styles";
export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  return (
    <View>

        <Text>Hoşgeldiniz</Text>

      <TextInput
        label="Email"
        mode="outlined"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        label="Password"
        mode="outlined"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        
      />
      <Button mode="contained" onPress={() => handleSignUp(email, password)}>
       Kayıt Ol
      </Button>
        <Text>Zaten hesabınız var mı? Hemen <Text>Giriş Yap</Text></Text>
    </View>
  );
}
