import React, { useState } from "react";
import { FlatList, TouchableOpacity, Modal } from "react-native";
import { Avatar, FAB, Button } from "react-native-paper";
import { data } from "./data";
import { Formik } from "formik";
import * as Yup from "yup";
import profileIcon from "../../assets/images/profilePickerIcon.png";
import * as ImagePicker from "expo-image-picker";
import {
  MainContainer,
  ContentConatiner,
  FlatListConatiner,
  UserNameText,
  FlatListContent,
  ModalConatiner,
  ModalContentContainer,
  ProfileIconPicker,
  ProfileCotainer,
  InputConatiner,
  ButtonContainer,
  Input,
  ErrorContainer,
  ErrorText,
} from "./styles";

export const Contacts = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [mediaUri, setMediaUri] = useState(null);

  const initialValues = {
    name: "",
    number: "",
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    number: Yup.string().required("Required"),
  });

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      // allowsEditing: true,
      // aspect: [4, 3],
      // quality: 1,
    });

    setMediaUri(result.uri);

    // if (!result.cancelled) {
    //   setImage(result.uri);
    //   console.log("res", res);
    // }
  };

  return (
    <MainContainer>
      {/* Modal start */}
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <ModalConatiner>
          <ModalContentContainer>
            <ProfileCotainer>
              <TouchableOpacity onPress={pickImage}>
                <ProfileIconPicker source={profileIcon} />
                {/* {mediaUri ? (
                  <ProfileIconPicker source={mediaUri} />
                ) : (
                  <ProfileIconPicker source={profileIcon} />
                )} */}
              </TouchableOpacity>
            </ProfileCotainer>

            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              // onSubmit={ (values) => {
              //  console.log(values) ;
              // }}
            >
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                touched,
              }) => (
                <React.Fragment>
                  <InputConatiner>
                    <Input
                      name="name"
                      onChangeText={handleChange("name")}
                      onBlur={handleBlur("name")}
                      value={values.name}
                      mode="outlined"
                      placeholder="Enter a name"
                      theme={{ roundness: 25 }}
                      activeOutlineColor="gray"
                    />
                    <ErrorContainer>
                      {errors.name && touched.name ? (
                        <ErrorText>{errors.name}</ErrorText>
                      ) : null}
                    </ErrorContainer>
                    <Input
                      name="number"
                      onChangeText={handleChange("number")}
                      onBlur={handleBlur("number")}
                      value={values.number}
                      mode="outlined"
                      placeholder="Enter a number"
                      theme={{ roundness: 25 }}
                      keyboardType="number-pad"
                      activeOutlineColor="gray"
                    />
                    <ErrorContainer>
                      {errors.number && touched.number ? (
                        <ErrorText>{errors.number}</ErrorText>
                      ) : null}
                    </ErrorContainer>
                  </InputConatiner>
                  <ButtonContainer>
                    <Button
                      style={{ borderRadius: 25 }}
                      uppercase={false}
                      contentStyle={{
                        height: 55,
                        width: "100%",
                        backgroundColor: "white",
                      }}
                      labelStyle={{ color: "black" }}
                      onPress={handleSubmit}
                    >
                      Submit
                    </Button>
                    <Button
                      style={{ marginBottom: 40, borderRadius: 25 }}
                      uppercase={false}
                      contentStyle={{
                        height: 55,
                        width: "100%",
                        backgroundColor: "white",
                      }}
                      labelStyle={{ color: "black" }}
                      onPress={() => setModalVisible(false)}
                    >
                      Close
                    </Button>
                  </ButtonContainer>
                </React.Fragment>
              )}
            </Formik>
          </ModalContentContainer>
        </ModalConatiner>
      </Modal>

      {/* Modal End */}

      <FAB
        color="white"
        icon="plus"
        onPress={() => setModalVisible(true)}
        style={{
          position: "absolute",
          margin: 16,
          right: 0,
          bottom: 0,
          backgroundColor: "#4595D2",
          zIndex: 1,
        }}
      />
      <ContentConatiner>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <FlatListConatiner>
              <FlatListContent>
                <Avatar.Image size={50} source={item.imageIcon} />
                <UserNameText>{item.userName}</UserNameText>
              </FlatListContent>
            </FlatListConatiner>
          )}
        />
      </ContentConatiner>
    </MainContainer>
  );
};
