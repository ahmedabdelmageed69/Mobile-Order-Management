import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import PickupIcon from "@/assets/images/pickup-icon.svg";
import CustomButton from "./CustomButton";
import { colors } from "@/constants/colors";
import MessageIcon from "@/assets/images/message-dots-circle.svg";
import ReceiptCheck from "@/assets/images/receiptCheck.svg";
import { useRouter } from "expo-router";

const OrderCard = () => {
  const router = useRouter();

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => router.push("/order-details")}
    >
      <View
        style={{
          borderRadius: 10,
          padding: 15,
          backgroundColor: "white",
          gap: 10,
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ fontSize: 20, fontWeight: "500" }}>Waiter Name</Text>
          <Text style={{ fontSize: 20, fontWeight: "600" }}>TX-1231</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
            <SimpleLineIcons name="clock" size={16} color="black" />
            <Text>19:24 PM</Text>
          </View>
          <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
            <PickupIcon />
            <Text>Pickup</Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            gap: 10,
            borderTopWidth: 1,
            borderColor: colors.black1,
            paddingTop: 10,
          }}
        >
          <CustomButton
            title="Send SMS"
            textStyle={{ fontSize: 13 }}
            bg={colors.secondColor}
            icon={<MessageIcon />}
            style={{ flex: 0.5, height: 30, padding: 0 }}
            onPress={() => {}}
          />
          <CustomButton
            title="Picked Up"
            textStyle={{ fontSize: 13, color: colors.black3 }}
            bg={colors.gray}
            icon={<ReceiptCheck />}
            style={{ flex: 0.5, height: 30, padding: 0 }}
            onPress={() => {}}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default OrderCard;
