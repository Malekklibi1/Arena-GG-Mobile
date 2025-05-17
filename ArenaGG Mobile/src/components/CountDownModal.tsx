import React, { useState, useEffect, useRef } from "react";
import { Modal as PaperModal, Portal, Text } from "react-native-paper";
import { colors, radius, elevation } from "../constants/AppStyle";

export const CountDownModal = ({ countDown = 10 }: { countDown?: number }) => {
  const [visible, setVisible] = useState(true);
  const [time, setTime] = useState(countDown);
  const timerRef = useRef(time);

  useEffect(() => {
    const timerId = setInterval(() => {
      timerRef.current -= 1;
      if (timerRef.current < 0) {
        clearInterval(timerId);
        setVisible(false);
      } else {
        setTime(timerRef.current);
      }
    }, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <Portal theme={{ colors: { primaryContainer: "transparent" } }}>
      <PaperModal
        visible={visible}
        onDismiss={() => {}}
        contentContainerStyle={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: colors["gray-900"],
          borderRadius: radius.l,
          elevation: elevation.modal,
        }}
      >
        <Text
          style={{
            fontSize: 100,
            fontWeight: "700",
            color: colors.white,
            textShadowColor: colors["red-400"],
            textShadowOffset: { width: 2, height: 2 },
            textShadowRadius: 8,
          }}
        >
          {time === 0 ? "🚀" : time}
        </Text>
      </PaperModal>
    </Portal>
  );
};
