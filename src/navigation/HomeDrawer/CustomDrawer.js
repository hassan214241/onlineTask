import React from "react";
import { View, Text, ScrollView } from "react-native";
import { Avatar } from "react-native-paper";
import styled from "styled-components";
import profileIcon from "../../assets/images/avatar.jpg";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { MaterialIcons } from "@expo/vector-icons";

// styled
const MainContainer = styled(View)`
  display: flex;
  flex: 1;
  background-color: #347980;
`;
const ProfileContainer = styled(View)`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #347980;
  margin-top: 30px;
`;
const UserName = styled(Text)`
  font-size: 20px;
  line-height: 24px;
  color: white;
  margin: 12px 0px 0px 0px;
`;
const AvailableText = styled(UserName)`
  margin: 0px;
  font-size: 14px;
`;
const PagesSection = styled(View)`
  flex: 1;
  display: flex;
  background-color: #ffffff;
  margin-top: 30px;
  padding-bottom: 150px;
`;

export const CustomDrawer = (props) => {
  return (
    <MainContainer>
      <DrawerContentScrollView {...props}>
        <ScrollView>
          <ProfileContainer>
            <Avatar.Image size={80} source={profileIcon} />
            <UserName>Muhammad Hassan</UserName>
            <AvailableText>available</AvailableText>
            <AvailableText>Waltham, MA, 04:04 PM</AvailableText>
          </ProfileContainer>
          <PagesSection>
            <DrawerItemList {...props} />
            <DrawerItem
              label="Sign Out"
              icon={({ color, size }) => (
                <MaterialIcons name="logout" size={size} color={"#347980"} />
              )}
            />
          </PagesSection>
        </ScrollView>
      </DrawerContentScrollView>
    </MainContainer>
  );
};
