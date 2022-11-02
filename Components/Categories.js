import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const CategoryName = [
  {
    id: 1,
    title: "Overview",
  },
  {
    id: 2,
    title: "Arts",
  },

  {
    id: 3,
    title: "Crypto",
  },

  {
    id: 4,
    title: "Stocks",
  },

  {
    id: 5,
    title: "Estate",
  },
];

const Categories = () => {
  const [activeCat, setActiveCat] = useState(undefined);

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {CategoryName.map((category) => (
        <TouchableOpacity
          key={category.id}
          onPress={() => setActiveCat(category)}
          style={{
            backgroundColor: activeCat?.id === category.id ? "#000" : "#ebecf0",
            borderRadius: 20,
            margin: 10,
          }}
        >
          <Text
            style={{
              fontWeight: "600",
              fontSize: 18,
              color: activeCat?.id === category.id ? "#fff" : "#000",
              width: 100,
              textAlign: "center",
              padding: 5,
            }}
          >
            {category.title}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default Categories;
