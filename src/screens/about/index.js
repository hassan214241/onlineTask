import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components";

export const MainContainer = styled(View)`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const About = () => {
  return (
    <MainContainer>
      <Text>About Screen</Text>
    </MainContainer>
  );
};
