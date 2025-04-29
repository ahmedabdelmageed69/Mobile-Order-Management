import { View, Text, Touchable, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import Entypo from "@expo/vector-icons/Entypo";
import { OtpInput } from "react-native-otp-entry";
import CustomButton from "@/components/ui/CustomButton";

const OtpScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, padding: 10 }}>
      <Link href={"/(auth)/login"} asChild>
        <TouchableOpacity>
          <Entypo name="chevron-left" size={24} color="black" />
        </TouchableOpacity>
      </Link>
      <Text style={{ fontSize: 16, padding: 10 }}>
        We have sent a 4 digit code to your phone number{" "}
        <Text style={{ fontWeight: 600 }}>+966 655 366 112</Text> ,please add it
        blow to continue
      </Text>

      <OtpInput
        numberOfDigits={4}
        onTextChange={(text) => console.log(text)}
        type="numeric"
        theme={{
          pinCodeContainerStyle: {
            borderWidth: 1,
            width: 67.25,
            height: 67.25,
            borderRadius: 0,
          },
          filledPinCodeContainerStyle: {
            backgroundColor: "rgba(234, 55, 74, 0.1)",
            borderWidth: 1,
            borderColor: "#EA374A",
          },
          focusedPinCodeContainerStyle: {
            backgroundColor: "transparent",
            borderWidth: 1,
            borderColor: "#EA374A",
          },
          pinCodeTextStyle: {
            color: "#3D3D43",
            fontSize: 48,
            fontWeight: "700",
          },
          containerStyle: {
            paddingVertical: 50,
          },
        }}
      />

      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text
          style={{
            fontSize: 48,
            fontWeight: 700,
            color: "#3D3D43",
            marginBottom: 10,
          }}
        >
          00:43
        </Text>
        <Text style={{ fontSize: 20, fontWeight: 600, color: "#3D3D43" }}>
          Didn’t receive code?
        </Text>
        <TouchableOpacity>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 800,
              color: "#EA374A",
              textDecorationLine: "underline",
            }}
          >
            Resend
          </Text>
        </TouchableOpacity>
      </View>

      <Link href={"/(tabs)"} asChild>
        <CustomButton
          title="Confirm OTP"
          style={{ position: "absolute", bottom: 10, width: "100%", left: 10 }}
          onPress={() => console.log("Hello")}
        />
      </Link>
    </SafeAreaView>
  );
};

export default OtpScreen;
