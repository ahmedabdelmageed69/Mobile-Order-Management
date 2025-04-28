import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRouter } from "expo-router";

const App = () => {
  const router = useRouter();

  const token = false;

  useEffect(() => {
    if (token) {
      router.push("/(tabs)");
    } else {
      router.push("/(auth)/login");
    }
  }, []);

  return (
    <SafeAreaView>
      <Text>Index</Text>
    </SafeAreaView>
  );
};

export default App;
