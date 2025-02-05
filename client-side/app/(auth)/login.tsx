import { View, Text, Button, TextInput } from "react-native";

import { router } from "expo-router";

import { useSession } from "../ctx";

export default function LoginScreen() {
  const { signIn } = useSession();

  const handleLogin = () => {
    // Simulate login
    // router.push('/home');
  };

  return (
    <View>
      <Text>Login</Text>
      <TextInput placeholder="Email" />
      <TextInput placeholder="Senha" secureTextEntry />
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
