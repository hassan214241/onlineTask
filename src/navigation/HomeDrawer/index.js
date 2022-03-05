import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { View, Text, TouchableOpacity } from "react-native";
import { About } from "../../screens/about";
import { Help } from "../../screens/help";
import { Preferences } from "../../screens/preferences";
import { Queues } from "../../screens/queues";
import { Setting } from "../../screens/settings";
import { TestCall } from "../../screens/testCall";
import { Contacts } from "../../screens/contacts";
import { CustomDrawer } from "./CustomDrawer";
import { MaterialIcons, Feather } from "@expo/vector-icons";
import styled from "styled-components";

const Drawer = createDrawerNavigator();

const HeaderTitleContainer = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 1;
  justify-content: space-between;
  width: 100%;
`;
const HeaderText = styled(Text)`
  color: white;
  font-size: 16px;
  font-weight: bold;
`;

export const HomeDrawer = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Contacts"
      screenOptions={{
        drawerType: "back",
        headerTintColor: "white",
      }}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen
        name="Contacts"
        component={Contacts}
        options={{
          drawerIcon: () => <Feather name="users" size={24} color="#347980" />,
          headerTitleAlign: "left",
          headerStyle: {
            backgroundColor: "#4595D2",
          },
          headerTitle: () => (
            <HeaderTitleContainer>
              <HeaderText>Contacts</HeaderText>
              <TouchableOpacity>
                <MaterialIcons name="search" size={28} color="white" />
              </TouchableOpacity>
            </HeaderTitleContainer>
          ),
        }}
      />
      <Drawer.Screen
        name="Setting"
        component={Setting}
        options={{
          drawerIcon: () => (
            <Feather name="settings" size={24} color="#347980" />
          ),
          headerTitleAlign: "left",
          headerStyle: {
            backgroundColor: "#4595D2",
          },
        }}
      />
      <Drawer.Screen
        name="Preferences"
        component={Preferences}
        options={{
          drawerIcon: () => (
            <MaterialIcons name="room-preferences" size={24} color="#347980" />
          ),
          headerTitleAlign: "left",
          headerStyle: {
            backgroundColor: "#4595D2",
          },
        }}
      />
      <Drawer.Screen
        name="Queues"
        component={Queues}
        options={{
          drawerIcon: () => (
            <MaterialIcons name="queue" size={24} color="#347980" />
          ),
          headerTitleAlign: "left",
          headerStyle: {
            backgroundColor: "#4595D2",
          },
        }}
      />
      <Drawer.Screen
        name="TestCall"
        component={TestCall}
        options={{
          drawerIcon: () => (
            <MaterialIcons name="add-call" size={24} color="#347980" />
          ),
          headerTitleAlign: "left",
          headerStyle: {
            backgroundColor: "#4595D2",
          },
        }}
      />
      <Drawer.Screen
        name="About"
        component={About}
        options={{
          drawerIcon: () => (
            <MaterialIcons name="room-preferences" size={24} color="#347980" />
          ),
          headerTitleAlign: "left",
          headerStyle: {
            backgroundColor: "#4595D2",
          },
        }}
      />
      <Drawer.Screen
        name="Help"
        component={Help}
        options={{
          drawerIcon: () => (
            <MaterialIcons name="help" size={24} color="#347980" />
          ),
          headerTitleAlign: "left",
          headerStyle: {
            backgroundColor: "#4595D2",
          },
        }}
      />
    </Drawer.Navigator>
  );
};
