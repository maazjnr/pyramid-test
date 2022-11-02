import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { AntDesign, Ionicons, Feather } from "@expo/vector-icons";
import React from "react";

const Header = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          style={{ width: 30, height: 30 }}
          source={require("../assets/logo.png")}
        />
        <Text style={styles.pText}>Portfolio</Text>
        <Image resizeMode="cover"
          style={{ width: 40, height: 40 }}
          source={require("../assets/target.png")}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "gray",
    alignItems: 'center'
  },

  pText: {
    fontWeight: "bold",
    fontSize: 17,
  },
});

export default Header;
