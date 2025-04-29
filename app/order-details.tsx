import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Entypo from "@expo/vector-icons/Entypo";
import CustomButton from "@/components/ui/CustomButton";
import { colors } from "@/constants/colors";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";
import OrderTypeIcon from "@/assets/images/pickup-icon.svg";
import OrderPriceIcon from "@/assets/images/dollar.svg";

const OrderDetails = () => {
  const [itemsExpanded, setItemsExpanded] = useState(false);

  const orderItems = [
    {
      name: "Cheesy Buffalo Burger (2)",
      price: "650EGP",
      extras: [
        { name: "Extra Cheese", price: "45" },
        { name: "Extra Mayo", price: "15" },
        { name: "Extra Pickles", price: "25" },
      ],
      specialInstructions:
        "Please make sure to remove onions from one of the sandwiches",
      image: require("@/assets/images/burger.png"),
    },
    {
      name: "Buffalo Signature Fries (4)",
      price: "250EGP",
      extras: [],
      specialInstructions: "",
      image: require("@/assets/images/fries.png"),
    },
    {
      name: "Coca-Cola (3)",
      price: "100EGP",
      extras: [],
      specialInstructions: "Please make one of the colas diet",
      image: require("@/assets/images/cola.png"),
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1, paddingHorizontal: 10 }}>
      {/* Header Section (unchanged) */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginVertical: 10,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Entypo name="chevron-small-left" size={24} color="black" />
          <Text style={{ fontSize: 20, fontWeight: "500" }}>Order Details</Text>
        </View>
        <CustomButton
          bg={colors.mainColor}
          title="Refund"
          textStyle={{ fontSize: 16, fontWeight: "600" }}
          style={{ height: 35, paddingVertical: 0, paddingHorizontal: 30 }}
          onPress={() => {}}
        />
      </View>

      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          backgroundColor: "#fff",
          padding: 10,
          borderRadius: 10,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 3,
          marginTop: 30,
        }}
      >
        <View>
          <Text style={{ fontSize: 20, fontWeight: "500" }}>
            Client Name Order
          </Text>
          <Text
            style={{
              color: colors.gray2,
              fontSize: 16,
            }}
          >
            TX-1231
          </Text>
        </View>
        <TouchableOpacity
          style={{
            width: 43,
            height: 43,
            borderRadius: 50,
            backgroundColor: "#3D3D43",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Feather name="phone" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <View
        style={{
          backgroundColor: "#fff",
          padding: 14,
          borderRadius: 10,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 3,
          marginTop: 30,
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "500" }}>Order Status</Text>
        <View style={{ gap: 8 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 10,
            }}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
            >
              <AntDesign name="clockcircleo" size={16} color="#848199" />
              <Text style={{ color: "#848199", fontSize: 16 }}>Ordered At</Text>
            </View>
            <Text style={{ fontSize: 16 }}>02:00 PM</Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
            >
              <OrderTypeIcon stroke={"#848199"} />
              <Text style={{ color: "#848199", fontSize: 16 }}>Order Type</Text>
            </View>
            <Text style={{ fontSize: 16 }}>Pickup</Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
            >
              <OrderPriceIcon stroke={"#848199"} />
              <Text style={{ color: "#848199", fontSize: 16 }}>
                Order Price
              </Text>
            </View>
            <Text style={{ fontSize: 16 }}>2000 EGP</Text>
          </View>
        </View>
      </View>

      <View
        style={{
          backgroundColor: "#fff",
          borderRadius: 10,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 3,
          marginTop: 30,
          marginBottom: 20,
          overflow: "hidden",
        }}
      >
        <TouchableOpacity
          onPress={() => setItemsExpanded(!itemsExpanded)}
          style={{
            padding: 14,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "500" }}>
            Item Details ({orderItems.length})
          </Text>
          <Entypo
            name={itemsExpanded ? "chevron-up" : "chevron-down"}
            size={20}
            color="#848199"
          />
        </TouchableOpacity>

        {itemsExpanded && (
          <View style={{ paddingHorizontal: 14, paddingBottom: 14 }}>
            {orderItems.map((item, index) => (
              <View
                key={index}
                style={{
                  marginBottom: index < orderItems.length - 1 ? 20 : 0,
                  borderBottomWidth: index < orderItems.length - 1 ? 1 : 0,
                  borderBottomColor: "#f5f5f5",
                  paddingBottom: index < orderItems.length - 1 ? 16 : 0,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={{ fontSize: 16, fontWeight: "600" }}>
                    {item.name}
                  </Text>
                  <Text style={{ fontWeight: "600" }}>{item.price}</Text>
                </View>

                {item.extras.length > 0 && (
                  <>
                    <Text
                      style={{ color: "#848199", fontSize: 14, marginTop: 8 }}
                    >
                      Extras:
                    </Text>
                    {item.extras.map((extra, i) => (
                      <View
                        key={i}
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <Text style={{ color: "#444444", fontSize: 14 }}>
                          {extra.name}
                        </Text>
                        <Text style={{ color: "#444444", fontSize: 14 }}>
                          {extra.price}
                        </Text>
                      </View>
                    ))}
                  </>
                )}
              </View>
            ))}
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default OrderDetails;
