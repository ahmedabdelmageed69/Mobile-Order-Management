import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LogoCircle from "@/assets/images/logo-circle.svg";
import Logo from "@/assets/images/blue-logo.svg";
import OrderCard from "@/components/ui/OrderCard";
import { Link } from "expo-router";

const orders = [
  {
    id: 1,
    waiterName: "TX-1231",
    orderTime: "19:24 PM",
    status: "Pickup",
  },
  {
    id: 2,
    waiterName: "S42",
    orderTime: "19:24 PM",
    status: "Delivery",
  },
  {
    id: 3,
    waiterName: "TX-66",
    orderTime: "19:24 PM",
    status: "Table 7",
  },
];

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ backgroundColor: "#fff" }}>
        <View
          style={{
            paddingHorizontal: 20,
            paddingVertical: 10,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <LogoCircle />
            <View>
              <Text>Restaurant Name</Text>
              <Text style={{ color: "#848199" }}>8:00 - 16:00</Text>
            </View>
          </View>
          <Logo />
        </View>

        {/* Tabs */}
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            style={{
              flex: 0.5,
              alignItems: "center",
              borderBottomWidth: 1,
              padding: 10,
              borderColor: "#29376B",
            }}
          >
            <Text>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 0.5,
              alignItems: "center",
              borderBottomWidth: 1,
              padding: 10,
              borderColor: "transparent",
            }}
          >
            <Text style={{ color: "rgba(0, 0, 0, 0.2)" }}>Ready</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ paddingVertical: 10, paddingHorizontal: 20 }}>
        <OrderCard />
      </View>
    </SafeAreaView>
  );
}
