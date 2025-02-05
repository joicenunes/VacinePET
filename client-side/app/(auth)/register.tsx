import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useSession } from "../../providers/ctx";
import { router } from "expo-router";

export default function RegisterScreen() {
  const { signIn } = useSession();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/image.png")}
        style={styles.logo}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Senha"
          secureTextEntry={!passwordVisible}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
          <Feather
            name={passwordVisible ? "eye" : "eye-off"}
            size={20}
            color="#555"
          />
        </TouchableOpacity>
      </View>

      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Confirmar senha"
          secureTextEntry={!confirmPasswordVisible}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <TouchableOpacity
          onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
        >
          <Feather
            name={confirmPasswordVisible ? "eye" : "eye-off"}
            size={20}
            color="#555"
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>

      <Text style={styles.loginPrompt}>Já tem uma conta?</Text>

      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => {
          router.replace("/login");
        }}
      >
        <Text style={styles.loginButtonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  logo: {
    width: 120,
    height: 120,
    alignSelf: "center",
    marginBottom: 32,
  },
  input: {
    backgroundColor: "#FFF",
    borderRadius: 8,
    padding: 12,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: "#FFA726",
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 8,
    padding: 12,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: "#FFA726",
  },
  passwordInput: {
    flex: 1,
  },
  button: {
    backgroundColor: "#FFA726",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 16,
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
  },
  loginPrompt: {
    textAlign: "center",
    marginTop: 24,
  },
  loginButton: {
    marginTop: 8,
    padding: 12,
    borderWidth: 1,
    borderColor: "#FFA726",
    borderRadius: 8,
    alignItems: "center",
  },
  loginButtonText: {
    color: "#FFA726",
    fontWeight: "bold",
  },
});
