import { Tabs } from "expo-router";
import React from "react";

import { Text } from "react-native";
import { Redirect } from "expo-router";

import { useSession } from '../../../../providers/ctx';

export default function TabLayout() {
  const { session, isLoading } = useSession();

  // You can keep the splash screen open, or render a loading screen like we do here.
  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  // Only require authentication within the (app) group's layout as users
  // need to be able to access the (auth) group and sign in again.
  if (!session) {
    // On web, static rendering will stop here as the user is not authenticated
    // in the headless Node process that the pages are rendered in.
    return <Redirect href="/login" />;
  }

  return (
    <Tabs
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarStyle: {
          display: 'none'
        }
      })}
    >
      <Tabs.Screen
        name="edit"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}
