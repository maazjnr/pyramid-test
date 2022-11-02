import {
  View,
  Text,
  Pressable,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

const Categories = () => {
  const [changeBg, setChangeBg] = useState(false);

  const changeBackBg = () => {
    setChangeBg("blue");
  };

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <TouchableOpacity
        onPress={changeBackBg}
        style={{
          backgroundColor: changeBg ? "#000" : "red",
          padding: 5,
          borderRadius: 15,
          margin: 10,
        }}
      >
        <Text style={{fontWeight: "600", fontSize: 16}}>Overviews</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={changeBackBg}
        style={{
          backgroundColor: changeBg ? "yellow" : "red",
          backgroundColor: "#ebecf0",
          padding: 5,
          borderRadius: 15,
          margin: 10,
        }}
      >
        <Text style={{fontWeight: "600", fontSize: 20}}>Arts</Text>
      </TouchableOpacity>
      
    </ScrollView>
  );
};

export default Categories;
