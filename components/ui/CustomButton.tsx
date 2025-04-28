import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { colors } from "@/constants/colors";

type CustomButtonProps = {
  title: string;
  onPress: () => void;
};

const CustomButton = ({ title, onPress }: CustomButtonProps) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: colors.mainColor,
        padding: 10,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
        height: 50,
      }}
      onPress={onPress}
    >
      <Text style={{ color: "#fff", fontSize: 20, fontWeight: 600 }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
