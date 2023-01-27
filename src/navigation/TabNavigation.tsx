import React, { useCallback } from "react";
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { ReelsScreen, SearchScreen, ShopScreen } from "../screens";
import { Icon } from "react-native-eva-icons";
import { RouteProp } from "@react-navigation/native";
import HomeStackNavigation from "./HomeStackNavigation";
import AccountStackNavigation from "./AccountStackNavigation";

type RootTabParamList = {
  HomeStack: undefined;
  Search: undefined;
  Reels: undefined;
  Shop: undefined;
  AccountStack: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();
const TAB_ICON_SIZE = 32;

const TabNavigation = () => {
  const screenOptions = useCallback(
    ({
      route,
    }: {
      route: RouteProp<RootTabParamList, keyof RootTabParamList>;
      navigation: any;
    }): BottomTabNavigationOptions => {
      return {
        tabBarStyle: { position: "relative" },
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({ color }) => {
          switch (route.name) {
            case "HomeStack":
              return (
                <Icon
                  name="home-outline"
                  color={color}
                  width={TAB_ICON_SIZE}
                  height={TAB_ICON_SIZE}
                />
              );
            case "Search":
              return (
                <Icon
                  name="search-outline"
                  color={color}
                  width={TAB_ICON_SIZE}
                  height={TAB_ICON_SIZE}
                />
              );
            case "Reels":
              return (
                <Icon
                  name="film-outline"
                  color={color}
                  width={TAB_ICON_SIZE}
                  height={TAB_ICON_SIZE}
                />
              );
            case "Shop":
              return (
                <Icon
                  name="shopping-bag-outline"
                  color={color}
                  width={TAB_ICON_SIZE}
                  height={TAB_ICON_SIZE}
                />
              );
            case "AccountStack":
              return (
                <Icon
                  name="person-outline"
                  color={color}
                  width={TAB_ICON_SIZE}
                  height={TAB_ICON_SIZE}
                />
              );
          }
        },
      };
    },
    [],
  );

  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="HomeStack" component={HomeStackNavigation} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Reels" component={ReelsScreen} />
      <Tab.Screen name="Shop" component={ShopScreen} />
      <Tab.Screen name="AccountStack" component={AccountStackNavigation} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
