import { useRouter } from 'expo-router';
import { View, Text, TextInput, Button } from 'react-native';

export default function LoginScreen() {
  const router = useRouter();

  const handleLogin = () => {
    // Simulate login
    router.push('/home');
  };

  return (
    <View>
      <Text>Cadastro</Text>
      <TextInput placeholder="Email" />
      <TextInput placeholder="Senha" secureTextEntry />
      <Button title="Entrar" onPress={handleLogin} />
    </View>
  );
}