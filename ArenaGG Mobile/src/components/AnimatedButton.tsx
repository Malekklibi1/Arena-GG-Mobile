import React from "react";
import { Text, TouchableRipple } from "react-native-paper";
import { Animated } from "react-native";
import { colors, radius } from "../constants/AppStyle";

export const AnimateButton: React.FC<any> = ({ text }) => {
  const animatedButtonBorderRadius = new Animated.Value(50);

  const onPressIn = () => {
    Animated.spring(animatedButtonBorderRadius, {
      toValue: 20,
      useNativeDriver: true,
    }).start();
  };

  const onPressOut = () => {
    Animated.spring(animatedButtonBorderRadius, {
      toValue: 50,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View
      style={{
        borderRadius: animatedButtonBorderRadius,
        alignItems: "center",
        backgroundColor: colors["red-400"],
        justifyContent: "center",
        elevation: 4,
      }}
    >
      <TouchableRipple
        borderless
        style={{ height: 70, width: 70, borderRadius: radius.s }}
        onPress={() => {}}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
      >
        <Text style={{ color: colors.white, fontWeight: "bold" }}>{text}</Text>
      </TouchableRipple>
    </Animated.View>
  );
};
