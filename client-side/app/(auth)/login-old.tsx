import { View, Text, Button, TextInput } from "react-native";

import { router } from "expo-router";

import { useSession } from "../../providers/ctx";

export default function LoginScreen() {
  const { signIn } = useSession();

  const handleLogin = () => {
    // Simulate login
    // router.push('/home');
  };

  return (
    <View style={{ marginTop: 60 }}>
      <Text style={{ color: "white" }}>Imagi</Text>
      <TextInput placeholder="Email" style={{ backgroundColor: "white" }} />
      <TextInput
        placeholder="Senha"
        secureTextEntry
        style={{ backgroundColor: "white" }}
      />
      <Button
        title="Login"
        onPress={() => {
          signIn();
          // Navigate after signing in. You may want to tweak this to ensure sign-in is
          // successful before navigating.
          router.replace("/");
        }}
      ></Button>
      {/* <TextInput placeholder="Email" />
      <TextInput placeholder="Senha" secureTextEntry />
      <Button title="Entrar" onPress={handleLogin} /> */}
    </View>
  );
}
