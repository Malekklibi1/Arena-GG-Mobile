import { DrawerContentScrollView } from "@react-navigation/drawer";
import * as React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Button, Drawer, Text } from "react-native-paper";
import { colors, radius } from "../constants/AppStyle";
import { useAppState } from "../stores/state";

const DrawerItemsData = [
  {
    label: "Home",
    activeIcon: "home-variant",
    icon: "home-variant-outline",
    action: "Home Page",
  },
  {
    label: "Activity Log",
    activeIcon: "clipboard-list",
    icon: "clipboard-list-outline",
    action: "ActivityLogs",
  },
];

export const DrawerContent = ({ navigation, state: navState }: any) => {
  const { state, setState } = useAppState();
  const userId = state.userId;

  let activeRoute = "";
  if (!isNaN(navState.index) && navState.routes.length > 0)
    activeRoute = navState.routes[navState.index].name || "";

  const resetTaskProgress = () => setState((prev: any) => ({ ...prev, taskProgress: [] }));
  const resetResult = () => setState((prev: any) => ({ ...prev, result: {} }));
  const logout = () => setState((prev: any) => ({ ...prev, userId: "" }));

  return (
    <>
      <DrawerContentScrollView style={styles.drawerContent}>
        <View
          style={{
            width: "100%",
            alignItems: "center",
            paddingVertical: 20,
            paddingHorizontal: 16,
            borderBottomWidth: 0.5,
            borderBottomColor: colors["gray-500"],
          }}
        >
          <Image
            source={require("../assets/icon.png")}
            style={{ width: 150, height: 150, marginBottom: 20 }}
          />
          <View
            style={{
              backgroundColor: colors["gray-200"],
              borderRadius: radius.m,
              paddingVertical: 15,
              width: "100%",
              paddingLeft: 20,
            }}
          >
            <Text
              variant="titleMedium"
              style={{
                fontSize: 18,
                marginBottom: 3,
                fontWeight: "bold",
                color: colors["red-500"],
              }}
            >
              ArenaGG
            </Text>
            <Text
              style={{ color: colors["blue-600"] }}
              variant="titleSmall"
            >
              {userId}
            </Text>
            <Text variant="labelMedium" style={{ color: colors["gray-700"] }}>
              UserId
            </Text>
          </View>
        </View>
        <View
          style={{
            flexGrow: 1,
            flex: 1,
            marginVertical: 20,
            marginHorizontal: 6,
          }}
        >
          {DrawerItemsData.map((props, index) => (
            <Drawer.Item
              theme={{
                colors: { secondaryContainer: colors["light-blue-100"] },
              }}
              key={index}
              label={props.label}
              style={{ marginBottom: 8 }}
              active={activeRoute === props.action}
              icon={
                activeRoute === props.action ? props.activeIcon : props.icon
              }
              onPress={() => navigation.navigate(props.action)}
            />
          ))}
        </View>
      </DrawerContentScrollView>
      <Button
        onPress={() => {
          resetResult();
          resetTaskProgress();
          logout();
        }}
        mode="contained"
        icon="logout-variant"
        theme={{ roundness: radius.s }}
        labelStyle={{ paddingVertical: 5, fontWeight: "bold" }}
        style={{ backgroundColor: colors["red-400"] }}
      >
        Logout
      </Button>
    </>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  badge: {
    alignSelf: "center",
  },
});
