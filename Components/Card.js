import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  Pressable,
  TouchableHighlight,
} from "react-native";

const Card = () => {

  return (
    <View style={styles.container}>
      <StatusBar />
      <Text style={{ fontSize: 15, color: "gray" }}>Portfolio balance</Text>
      <Text style={{ fontSize: 30, fontWeight: "600" }}>$38,552.62</Text>
      <Text style={{ fontSize: 15, color: "#48c118" }}>+1,439.58(3.88%)</Text>
      <Image style={styles.trade} source={require("../assets/trade.png")} />

{/* Days Categories */}

      <View style={styles.day}>
        <Pressable
          children={({ pressed }) => (
            <Text style={{ color: pressed ? "#48c118" : "gray" }}>1H</Text>
          )}
        />
        <Pressable
          children={({ pressed }) => (
            <Text style={{ color: pressed ? "#48c118" : "gray" }}>1D</Text>
          )}
        />
        <Pressable
          children={({ pressed }) => (
            <Text style={{ color: pressed ? "#48c118" : "gray" }}>1W</Text>
          )}
        />
        <Pressable
          children={({ pressed }) => (
            <Text style={{ color: pressed ? "#48c118" : "gray" }}>1M</Text>
          )}
        />
        <Pressable
          children={({ pressed }) => (
            <Text style={{ color: pressed ? "#48c118" : "gray" }}>1Y</Text>
          )}
        />
        <Pressable
          children={({ pressed }) => (
            <Text style={{ color: pressed ? "#48c118" : "gray" }}>All</Text>
          )}
        />
      </View>

      {/* Different types of Categories */}

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },

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
