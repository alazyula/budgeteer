import { TextInput, Button, Text, Surface } from "react-native-paper";
import { useState } from "react";
import handleLogin from "@/firebaseFunctions/Auth/handleLogin";
import { View } from "react-native";
import styles from "@/stylesheets/styles";
import { Link } from "expo-router";
import { cyan100 } from "react-native-paper/lib/typescript/styles/themes/v2/colors";
export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  return (
    <Surface style={styles.outerContainer}>

        <Text variant="headlineLarge" style={styles.titleWithoutHeader}>Hoşgeldiniz</Text>

      <TextInput
        label="E-posta"
        mode="outlined"
        value={email}
        onChangeText={setEmail}
        style={styles.InnerItemMedium}
      />

      <TextInput
        label="Şifre"
        mode="outlined"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        style={styles.InnerItemMedium}
      />
      <Button style={styles.InnerItemMedium} mode="contained" onPress={() => handleLogin(email, password)}>
        Giriş Yap
      </Button>
      <Text>Henüz hesabınız yok mu? <Link style={styles.link} href="/signUp">Üye Ol</Link></Text>
    </Surface>
  );
}
