import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  TouchableHighlight,
} from "react-native";

const days = [
  {
    id: 1,
    title: "1H",
  },
  {
    id: 2,
    title: "1D",
  },

  {
    id: 3,
    title: "1W",
  },

  {
    id: 4,
    title: "1M",
  },

  {
    id: 5,
    title: "1Y",
  },

  {
    id: 6,
    title: "All",
  },
];

const Card = () => {

  const [isActive, setIsActive] = useState(undefined)

  return (
    <View style={styles.container}>
      <View style={{ marginTop: 15 }}>
        <Text style={{ fontSize: 15, color: "gray" }}>Portfolio balance</Text>
        <Text style={{ fontSize: 30, fontWeight: "600" }}>$38,552.62</Text>
        <Text style={{ fontSize: 15, color: "#48c118" }}>+1,439.58(3.88%)</Text>
        <Image style={styles.trade} source={require("../assets/trade.png")} />
      </View>

      {/* Days Categories */}

      <View style={styles.day}>
        {days.map((day) => (
         <Text onPress={() => setIsActive(day)} style={{
          color: isActive?.id === day.id ? "#48c118" : "gray"
         }}>
          {day.title}
         </Text>
        ))}
      </View>

      {/* Different types of Categories */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},

  trade: {
    width: "100%",
    height: 400,
  },

  day: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
    paddingHorizontal: 20,
    fontSize: 8,
  },
});

export default Card;
