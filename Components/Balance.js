import { View, Text, Pressable, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";

const Balance = () => {
  const navigation = useNavigation();
  return (
    <View style={{ marginBottom: 20 }}>
      <Pressable style={styles.btn}>
        <Text>InvestMent in assets</Text>
        <Text>$38, 650.31</Text>
      </Pressable>

      <Pressable style={styles.btn}>
        <Text>Cash Balance</Text>
        <Text>$650.31</Text>
      </Pressable>

      <Pressable
        style={styles.btnDetails}
        onPress={() => navigation.navigate("Details")}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <Ionicons name="pie-chart" size={24} color="#000" />
          <Text style={{ fontWeight: "700", fontSize: 15, marginLeft: 10 }}>
            Account Details
          </Text>
        </View>

        <MaterialIcons name="navigate-next" size={24} color="black" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    borderWidth: StyleSheet.hairlineWidth,
    padding: 15,
    borderColor: "gray",
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },

  btnDetails: {
    borderWidth: StyleSheet.hairlineWidth,
    padding: 15,
    borderColor: "gray",
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    backgroundColor: "#ebecf0",
    alignItems: "center"
  },
});

export default Balance;
