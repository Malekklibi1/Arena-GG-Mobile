import React, { useState } from "react";
import { Image, View } from "react-native";
import { Button, Text } from "react-native-paper";
import { colors, radius, elevation } from "../constants/AppStyle";
import { SignInModal } from "../components/SignInModal";
import { showToast } from "../lib/showToast";
import { useAppState } from "../stores/state";

const LandingScreen = ({ navigation }: any) => {
  const [modalOpen, setModalOpen] = useState(false);
  const { state } = useAppState();
  const userId = state.userId;

  return (
    <View style={{ flex: 1, paddingVertical: "20%", alignItems: "center" }}>
      {modalOpen ? <SignInModal setVisible={setModalOpen} /> : null}
      <View
        style={{
          flex: 1,
          justifyContent: "flex-start",
          marginBottom: 30,
          width: 300,
        }}
      >
        <Image
          source={require("../assets/images/general-instruction.png")}
          style={{ width: 100, height: 100 }}
        />
        <Text
          variant="headlineLarge"
          style={{
            color: colors["blue-600"],
            fontWeight: "700",
            marginTop: 20,
            marginBottom: 40,
          }}
        >
          Welcome to ArenaGG
        </Text>
        <Text variant="headlineSmall" style={{ fontSize: 17, lineHeight: 26 }}>
          The complete assessment will take around 15 minutes.{"\n\n"}There will
          be 5 tasks altogether.{"\n\n"}Please find a quiet place where you can
          concentrate and perform the assessment uninterrupted
        </Text>
      </View>
      <Button
        mode="contained"
        style={{
          width: 300,
          marginVertical: 15,
          paddingVertical: 2,
          backgroundColor: colors["blue-600"],
          borderRadius: radius.s,
          elevation: elevation.button,
        }}
        labelStyle={{ fontWeight: "bold", fontSize: 18 }}
        onPress={() => {
          if (userId) navigation.navigate("Home Page");
          else showToast("Please add User_Id", "error");
        }}
      >
        OK! LET'S START
      </Button>
      <Button
        mode="contained"
        style={{
          width: 300,
          marginVertical: 5,
          paddingVertical: 2,
          backgroundColor: colors["green-400"],
          borderRadius: radius.s,
          elevation: elevation.button,
        }}
        labelStyle={{ fontWeight: "bold", fontSize: 18 }}
        onPress={() => setModalOpen(!modalOpen)}
      >
        ADD USER_ID
      </Button>
    </View>
  );
};

export default LandingScreen;
