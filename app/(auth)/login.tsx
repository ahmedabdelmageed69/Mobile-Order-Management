import { colors } from "@/constants/colors";
import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Logo from "@/assets/images/logo.svg";
import CustomButton from "@/components/ui/CustomButton";
import { useRouter } from "expo-router";
import Feather from "@expo/vector-icons/Feather";

const LoginScreen = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          alignItems: "center",
          flex: 0.4,
          justifyContent: "space-around",
          paddingHorizontal: 20,
        }}
      >
        <Logo />
        <Text style={{ textAlign: "center", color: "#fff" }}>
          Login to get started with a seamless restaurant management experience{" "}
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "#fff",
          flex: 0.6,
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
          justifyContent: "space-between",
          paddingVertical: 40,
          paddingHorizontal: 14,
        }}
      >
        <View style={{ gap: 10 }}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <Feather name="phone" size={16} color="black" />
            <Text style={{ fontSize: 16, fontWeight: 400 }}>Phone Number</Text>
          </View>
          <TextInput
            placeholder="Please enter your phone number"
            style={{
              height: 50,
              backgroundColor: "#F3F3F3",
              borderRadius: 10,
              padding: 15,
            }}
          />
        </View>

        <CustomButton
          title="Login"
          onPress={() => router.push("/(auth)/otp")}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.mainColor,
  },
});

export default LoginScreen;
