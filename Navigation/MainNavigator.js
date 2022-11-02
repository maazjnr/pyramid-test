import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Search from "../Screens/Search";
import Home from "../Screens/Home";
import AddProduct from "../Screens/AddProduct";
import Notification from "../Screens/Notification";
import {Ionicons, AntDesign  } from '@expo/vector-icons'; 
import Details from "../Screens/Details";

const MainNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: () => (
            <Ionicons name="home-outline" size={24} color="#000" />
          )
        }}
        name="Home"
        component={Home}
      />

      <Tab.Screen
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: () => (
            <AntDesign name="search1" size={24} color="#000" />
          )
        }}
        name="Search"
        component={Search}
      />

      <Tab.Screen
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: () => (
            <AntDesign name="pluscircleo" size={30} color="#000" />
          )
        }}
        name="Add"
        component={AddProduct}
      />

      <Tab.Screen
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: () => (
            <Ionicons name="notifications-outline" size={24} color="#000" />
          )
        }}
        name="Notification"
        component={Notification}
      />

<Tab.Screen
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          
          tabBarIcon: ({focused}) => (
            <Ionicons name="pie-chart-outline" size={24} color="#000"
            borderBottomWidth={focused ? 2 : 4} />
          )
        }}
        name="Details"
        component={Details}
      />
    </Tab.Navigator>
  );
};

export default MainNavigator;
