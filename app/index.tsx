import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Redirect, useNavigation, useRouter } from "expo-router";

const App = () => {
  const token = false;

  if (!token) {
    return <Redirect href={"/(auth)/login"} />;
  }

  return <Redirect href={"/(tabs)"} />;
};

export default App;
