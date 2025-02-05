import { router } from "expo-router";
import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";

export default function PasswordRecoveryScreen() {
  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={require("@/assets/images/image.png")}
        style={styles.logo}
      />

      {/* Email Input */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#C0C0C0"
        keyboardType="email-address"
        autoCapitalize="none"
      />

      {/* Recover Password Button */}
      <TouchableOpacity style={styles.recoverButton}>
        <Text style={styles.buttonText}>Recuperar Senha</Text>
      </TouchableOpacity>

      {/* Separator */}
      <View style={styles.separator} />

      <Text style={styles.signInText}>Já tem uma conta?</Text>

      <TouchableOpacity
        style={styles.signInButton}
        onPress={() => {
          router.replace("/login");
        }}
      >
        <Text style={styles.signInButtonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 40,
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#FFF",
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
    borderColor: "#FF914D",
    borderWidth: 1,
    color: "#333",
  },
  recoverButton: {
    backgroundColor: "#FF914D",
    width: "100%",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: "#DDD",
    marginVertical: 10,
  },
  signInText: {
    fontSize: 14,
    color: "#555",
  },
  signInButton: {
    marginTop: 5,
    padding: 10,
  },
  signInButtonText: {
    color: "#FF914D",
    fontWeight: "bold",
  },
});
