import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { HomeDrawer } from "../HomeDrawer";

export const AppStack = () => {
  return (
    <NavigationContainer>
      <HomeDrawer />
    </NavigationContainer>
  );
};
