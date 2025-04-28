import { Tabs } from "expo-router";
import React from "react";
import { Platform, Text } from "react-native";

import Language from "@/assets/images/mdi_language.svg";
import Home from "@/assets/images/home.svg";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 80,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: () => (
            <Text style={{ marginTop: 15, fontSize: 10 }}>Home</Text>
          ),
          tabBarIcon: ({ color }) => (
            <Home style={{ marginTop: 20 }} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="language"
        options={{
          title: () => (
            <Text style={{ marginTop: 15, fontSize: 10 }}>Language</Text>
          ),
          tabBarIcon: ({ color }) => <Language style={{ marginTop: 20 }} />,
        }}
      />
    </Tabs>
  );
}
