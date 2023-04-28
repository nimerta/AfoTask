import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Home";
import SearchScreen from "./SearchScreen";
import GenreScreen from "./GenreScreen";
import WatchlistScreen from "./WatchlistScreen";
import SettingsScreen from "./SettingScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialIcons";
import { FontAwesome5 } from "@expo/vector-icons";
import FeatherIcon from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import { TouchableOpacity, Text, View } from "react-native";
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const BottomNav = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "white",
        tabBarInactiveBackgroundColor: "black",
        tabBarLabelStyle: {
          fontSize: 12,
        },
        tabBarStyle: {
          backgroundColor: "black",
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let iconStyle = {};

          if (route.name === "Home") {
            (iconName = "home"),
              (iconComponent = (
                <FeatherIcon name={iconName} size={size} color={color} />
              ));
          } else if (route.name === "Search") {
            (iconName = "search"),
              (iconComponent = (
                <Icon name={iconName} size={size} color={color} />
              ));
          } else if (route.name === "Watchlist") {
            (iconName = "bookmark"),
              (iconComponent = (
                <FeatherIcon name={iconName} size={size} color={color} />
              ));
          } else if (route.name === "Genre") {
            iconName = "theater-masks";
            iconComponent = (
              <FontAwesome5 name={iconName} size={size} color={color} />
            );
          } else if (route.name === "Settings") {
            iconName = "settings-outline";
            iconComponent = (
              <Ionicons name={iconName} size={size} color={color} />
            );
          }

          if (focused) {
            iconStyle = {
              // borderRadius: 15,
              // backgroundColor: "rgba(255, 0, 0, 0.3)",
              // padding: 8,
              // overflow:"hidden",
              // position: "absloute",
              // top: 0,
              // left: 0,
            };
          }
          return (
            <View
              style={{
                borderRadius: 50,
                width: 60,
                height: 35,
                backgroundColor: focused
                  ? "rgba(255, 0, 0, 0.2)"
                  : "transparent",
                alignItems: "center",
                marginTop: 8,
              }}
            >
              {iconComponent}
            </View>
          );
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="Watchlist" component={WatchlistScreen} />
      <Tab.Screen name="Genre" component={GenreScreen} />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};
export default BottomNav;
