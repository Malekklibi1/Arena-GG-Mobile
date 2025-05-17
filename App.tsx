import { DefaultTheme } from "react-native-paper";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#6200ee",
    accent: "#03dac4",
  },
  fonts: {
    ...DefaultTheme.fonts,
    titleLarge: {
      ...DefaultTheme.fonts.titleLarge,
      fontFamily: "Inter-SemiBold",
      fontWeight: "700",
    },
  },
};

export default theme;