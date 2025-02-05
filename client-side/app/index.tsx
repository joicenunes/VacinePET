import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

export default function Index() {
  const [user] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const navigate = async () => {
      if (user) {
        console.log('Navigate to home');
        router.replace('/(tabs)/home');
      } else {
        console.log('Navigate to login');
        router.push('/(auth)/login');
      }
    };

    navigate();
  }, [user, router]);

  return (
    <View></View>
  );
}
