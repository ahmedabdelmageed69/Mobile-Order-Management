import {
  View,
  Text,
  TouchableOpacity,
  ViewProps,
  TextProps,
} from "react-native";
import React from "react";
import { colors } from "@/constants/colors";

type CustomButtonProps = {
  title: string;
  onPress: () => void;
  style: ViewProps["style"];
  icon?: React.ReactNode;
  bg?: string;
  textStyle: TextProps["style"];
};

const CustomButton = ({
  title,
  onPress,
  style,
  icon,
  bg = colors.mainColor,
  textStyle,
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      style={[
        {
          backgroundColor: bg,
          padding: 10,
          borderRadius: 25,
          alignItems: "center",
          justifyContent: "center",
          height: 50,
          flexDirection: "row",
          gap: 8,
        },
        style,
      ]}
      onPress={onPress}
    >
      {icon}
      <Text
        style={[{ color: "#fff", fontSize: 20, fontWeight: 600 }, textStyle]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
