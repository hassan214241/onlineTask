import { Text, View, TouchableOpacity, Image } from "react-native";
import { TextInput } from "react-native-paper";
import styled from "styled-components";

export const MainContainer = styled(View)`
  flex: 1;
`;
export const ContentConatiner = styled(View)`
  flex: 1;
`;
export const FlatListConatiner = styled(TouchableOpacity)`
  flex: 1;
  flex-direction: row;
  align-items: center;
  margin: 10px 5px 5px 5px;
`;
export const UserNameText = styled(Text)`
  color: skyblue;
  margin-left: 20px;
  font-size: 20px;
`;
export const FlatListContent = styled(View)`
  flex-direction: row;
  align-items: center;
  width: 90%;
  margin-left: 30px;
  margin-right: 30px;
`;
export const ModalConatiner = styled(View)`
  display: flex;
  flex: 1;
  background-color: rgba(0, 0, 0, 0.6);
`;
export const ModalContentContainer = styled(View)`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin: 100px 30px 80px 30px;
  justify-content: space-around;
  align-items: center;
  border-radius: 10px;
  background-color: #4595d2;
`;
export const ProfileIconPicker = styled(Image)`
  width: 100px;
  height: 100px;
`;
export const ProfileCotainer = styled(View)`
  flex: 0.3;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
export const InputConatiner = styled(ProfileCotainer)`
  flex: 0.4;
`;
export const ButtonContainer = styled(InputConatiner)`
  flex-direction: column;
  justify-content: space-around;
`;
export const Input = styled(TextInput)`
  width: 90%;
`;
export const ErrorContainer = styled(View)`
  display: flex;
  width: 80%;
  justify-content: flex-start;
  align-items: flex-start;
`;
export const ErrorText = styled(Text)`
  font-size: 10px;
  color: red;
`;
