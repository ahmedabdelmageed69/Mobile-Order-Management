import { View, Text, Touchable, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import Entypo from "@expo/vector-icons/Entypo";

const OtpScreen = () => {
  return (
    <SafeAreaView>
      <Link href={"/(auth)/login"} asChild>
        <TouchableOpacity>
          <Entypo name="chevron-left" size={24} color="black" />
        </TouchableOpacity>
      </Link>
      <Text>OtpScreen</Text>
    </SafeAreaView>
  );
};

export default OtpScreen;
