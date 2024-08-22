import { TextInput, Button, Text } from "react-native-paper";
import { useState } from "react";
import handleLogin from "@/firebaseFunctions/Auth/handleLogin";
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
      <Button mode="contained" onPress={() => handleLogin(email, password)}>
        Giriş Yap
      </Button>
      <Text>Henüz hesabınız yok mu? Hemen <Text>Üye Ol</Text></Text>
    </View>
  );
}
