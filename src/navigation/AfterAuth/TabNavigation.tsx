import React, { useCallback } from "react";
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { ReelsScreen, SearchScreen, ShopScreen } from "../../screens";
import { RouteProp } from "@react-navigation/native";
import HomeStackNavigation from "./HomeStackNavigation";
import AccountStackNavigation from "./AccountStackNavigation";
import HomeLogo from "../../../assets/icons/HomeLogo";
import {
  AccountLogo,
  ReelsLogo,
  SearchLogo,
  ShopLogo,
} from "../../../assets/icons";

export type RootTabParamList = {
  HomeStack: undefined;
  Search: undefined;
  Reels: undefined;
  Shop: undefined;
  AccountStack: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

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
        tabBarIcon: ({ focused }) => {
          switch (route.name) {
            case "HomeStack":
              return <HomeLogo focused={focused} />;
            case "Search":
              return <SearchLogo focused={focused} />;
            case "Reels":
              return <ReelsLogo focused={focused} />;
            case "Shop":
              return <ShopLogo focused={focused} />;
            case "AccountStack":
              return <AccountLogo focused={focused} />;
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
