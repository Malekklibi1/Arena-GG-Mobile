import React, { useState } from "react";
import { Button } from "react-native-paper";
import { colors } from "../constants/AppStyle";
import { saveData } from "../lib/dummyBackend";
import { useAppState } from "../stores/state";

export default function SyncResultButton() {
  const { state } = useAppState();
  const [loading, setLoading] = useState(false);

  const onPress = async () => {
    setLoading(true);
    if (state.userId) {
      const resultToSave = { ...state.result, userId: state.userId };
      await saveData("result", resultToSave);
    }
    setLoading(false);
  };

  return (
    <Button
      mode="contained"
      icon={loading ? "" : "autorenew"}
      loading={loading}
      theme={{ roundness: 1 }}
      style={{
        flex: 1,
        marginLeft: 10,
        backgroundColor: colors["orange-400"],
      }}
      onPress={onPress}
    >
      Sync Result
    </Button>
  );
}
