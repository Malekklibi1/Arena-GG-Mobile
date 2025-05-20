import NetInfo from "@react-native-community/netinfo";
import { useFonts } from "expo-font";
import React from "react";
import { Text, TextInput, Image } from "react-native";
import "react-native-gesture-handler";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";
import { toastConfig } from "./src/lib/defaultToastConfig";
import { MainNavigator } from "./src/MainNavigator";
import { StateProvider } from "./src/stores/state";
import {
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
} from "react-native-paper";
import { colors, fonts } from "./src/constants/AppStyle";

// import "./src/lib/firbase";

if ((Text as any).defaultProps == null) {
  (Text as any).defaultProps = {};
  (Text as any).defaultProps.allowFontScaling = false;
}

if ((TextInput as any).defaultProps == null) {
  (TextInput as any).defaultProps = {};
  (TextInput as any).defaultProps.allowFontScaling = false;
}

export const theme = {
  ...DefaultTheme,
  roundness: 2,
  version: 3 as const,
  colors: {
    ...DefaultTheme.colors,
    primary: colors["primary"],
    secondary: colors["secondary"],
    tertiary: colors.accent,
    primaryContainer: colors["primaryContainer"],
    secondaryContainer: colors["secondaryContainer"],
  },
  fonts: {
    ...DefaultTheme.fonts,
    titleLarge: {
      ...DefaultTheme.fonts.titleLarge,
      fontFamily: "Inter-SemiBold",
      fontWeight: "700" as any,
      letterSpacing: 0.5,
    },
    titleMedium: {
      ...DefaultTheme.fonts.titleMedium,
      fontFamily: "Inter-SemiBold",
      fontWeight: "600" as any,
      letterSpacing: 0.2,
    },
    labelLarge: {
      ...DefaultTheme.fonts.labelLarge,
      fontWeight: "600" as any,
    },
  },
};

const App = () => {
  const [fontsLoaded] = useFonts({
    "Inter-Light": require("./src/assets/fonts/Inter-Light.ttf"),
    "Inter-Regular": require("./src/assets/fonts/Inter-Regular.ttf"),
    "Inter-SemiBold": require("./src/assets/fonts/Inter-SemiBold.ttf"),
  });

  if (!fontsLoaded) return null;

  return (
    <StateProvider>
      <SafeAreaProvider>
        <SafeAreaView />
        <PaperProvider theme={theme}>
          <Image
            source={require("./src/assets/ArenaGG logo.png")}
            style={{ width: 180, height: 60, alignSelf: "center", marginTop: 10, resizeMode: "contain" }}
          />
          <MainNavigator />
        </PaperProvider>
        <Toast
          config={toastConfig}
          onPress={() => Toast.hide()}
          visibilityTime={4000}
          autoHide
        />
      </SafeAreaProvider>
    </StateProvider>
  );
};

export default App;
