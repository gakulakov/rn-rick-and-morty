import React from "react";
import { FirstScreen } from "../screens/FirstScreen";
import { SecondScreen } from "../screens/SecondScreen";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import {NavigationContainer} from "@react-navigation/native";
import {StatusBar} from 'expo-status-bar';
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

const Tab = createMaterialBottomTabNavigator();

export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={"First"}
        activeColor="#7FFF00"
        barStyle={{ backgroundColor: "#00ABC4" }}
      >
        <Tab.Screen
          name={"First"}
          component={FirstScreen}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color }) => (
              <AntDesign name="home" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name={"Second"}
          component={SecondScreen}
          options={{
            tabBarLabel: "Favorites",
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="favorite-border" size={24} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
};
