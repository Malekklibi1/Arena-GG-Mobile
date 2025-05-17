import React, { memo } from "react";
import { View } from "react-native";
import { colors, radius, elevation } from "../constants/AppStyle";
import { Title, Text, Button, Surface } from "react-native-paper";
import { showToast } from "../lib/showToast";
import { useAppState } from "../stores/state";

export const TestingCard = memo(() => {
  const { state } = useAppState();
  const isConnected = state.networkStatus?.isConnected;

  return (
    <Surface
      style={{
        marginHorizontal: 10,
        marginBottom: 20,
        backgroundColor: colors.white,
        borderRadius: radius.m,
        elevation: elevation.card,
      }}
    >
      <View
        style={{
          paddingHorizontal: 24,
          borderBottomColor: colors["gray-600"],
          borderBottomWidth: 0.5,
          paddingTop: 16,
          paddingBottom: 16,
        }}
      >
        <Title style={{ fontSize: 22, fontWeight: "700" }}>Testing</Title>
      </View>
      <Text style={{ textAlign: "center" }}>
        Internet isConnected: {JSON.stringify(isConnected)}
      </Text>
      <View style={{ padding: 20 }}>
        <Text
          variant={"titleMedium"}
          style={{ textAlign: "center", marginBottom: 10 }}
        >
          Test Toast
        </Text>
        <View
          style={{
            justifyContent: "space-between",
            height: 150,
          }}
        >
          <Button
            mode="contained"
            onPress={() =>
              showToast(
                "Hello We are still working on this We are still working on this We are still working on this We are still working on this",
                "success"
              )
            }
            theme={{ roundness: radius.s }}
            style={{
              backgroundColor: colors["green-400"],
              marginBottom: 8,
              elevation: elevation.button,
            }}
            labelStyle={{ fontWeight: "bold" }}
          >
            success
          </Button>
          <Button
            mode="contained"
            onPress={() =>
              showToast(
                "Hello We are still working on this We are still working on this",
                "error"
              )
            }
            theme={{ roundness: radius.s }}
            style={{
              backgroundColor: colors["red-400"],
              marginBottom: 8,
              elevation: elevation.button,
            }}
            labelStyle={{ fontWeight: "bold" }}
          >
            error
          </Button>
          <Button
            mode="contained"
            onPress={() => showToast("Hello We are still working on this")}
            theme={{ roundness: radius.s }}
            style={{
              backgroundColor: colors["blue-400"],
              elevation: elevation.button,
            }}
            labelStyle={{ fontWeight: "bold" }}
          >
            default
          </Button>
        </View>
      </View>
    </Surface>
  );
});
