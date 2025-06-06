export const radius = {
  s: 12, // more rounded for small elements
  m: 20, // modern medium radius
  l: 32, // pronounced for cards/modals
};

export const fontFamily = {
  light: "Inter-Light",
  regular: "Inter-Regular",
  semiBold: "Inter-SemiBold",
};

export const fontSize = {
  h1: 56,
  h2: 28,
  h3: 23,
  h4: 20,
  h5: 17,
  paragraph: 14,
  small: 12,
  xs: 10,
};

export const colors = {
  backdrop: "rgba(50, 47, 55, 0.4)",
  background: "#ffebee", // very light red background
  elevation: {
    level0: "transparent",
    level1: "rgb(247, 243, 249)",
    level2: "rgb(243, 237, 246)",
    level3: "rgb(238, 232, 244)",
    level4: "rgb(236, 230, 243)",
    level5: "rgb(233, 227, 241)",
  },
  error: "rgba(179, 38, 30, 1)",
  errorContainer: "rgba(249, 222, 220, 1)",
  inverseOnSurface: "rgba(244, 239, 244, 1)",
  inversePrimary: "rgba(208, 188, 255, 1)",
  inverseSurface: "rgba(49, 48, 51, 1)",
  onBackground: "rgba(28, 27, 31, 1)",
  onError: "rgba(255, 255, 255, 1)",
  onErrorContainer: "rgba(65, 14, 11, 1)",
  onPrimary: "rgba(255, 255, 255, 1)",
  onPrimaryContainer: "rgba(33, 0, 93, 1)",
  onSecondary: "rgba(255, 255, 255, 1)",
  onSecondaryContainer: "rgba(29, 25, 43, 1)",
  onSurface: "rgba(28, 27, 31, 1)",
  onSurfaceDisabled: "rgba(28, 27, 31, 0.38)",
  onSurfaceVariant: "rgba(73, 69, 79, 1)",
  onTertiary: "rgba(255, 255, 255, 1)",
  onTertiaryContainer: "rgba(49, 17, 29, 1)",
  outline: "rgba(121, 116, 126, 1)",
  primary: "#d32f2f", // strong red
  primaryContainer: "#ffcdd2", // light red
  secondary: "#b71c1c", // deep red
  secondaryContainer: "#ffebee", // very light red
  surface: "#ffcdd2", // light red for surfaces
  surfaceDisabled: "rgba(28, 27, 31, 0.12)",
  surfaceVariant: "rgba(231, 224, 236, 1)",
  tertiary: "rgba(125, 82, 96, 1)",
  tertiaryContainer: "rgba(255, 216, 228, 1)",
  text: "#b71c1c", // deep red for text
  textDark: "#0b0e11",
  primary100: "#dee3ea",
  primary200: "#b2bdcd",
  primary300: "#5d7290",
  primary600: "#323d4d",
  primary700: "#242c37",
  primary800: "#151a21",
  primary900: "#0b0e11",
  secondaryWashedOut: "#879eed",
  accent: "#fd4d4d", // keep accent as a vibrant red
  accentHover: "#fd6868",
  accentDisabled: "#f5bfbf",
  transparent: "transparent",
  black: "#000000",
  white: "#ffffff",

  red: "#f44336",
  "red-50": "#ffebee",
  "red-100": "#ffcdd2",
  "red-200": "#ef9a9a",
  "red-300": "#e57373",
  "red-400": "#ef5350",
  "red-500": "#f44336",
  "red-600": "#e53935",
  "red-700": "#d32f2f",
  "red-800": "#c62828",
  "red-900": "#b71c1c",

  pink: "#e91e63",
  "pink-50": "#fce4ec",
  "pink-100": "#f8bbd0",
  "pink-200": "#f48fb1",
  "pink-300": "#f06292",
  "pink-400": "#ec407a",
  "pink-500": "#e91e63",
  "pink-600": "#d81b60",
  "pink-700": "#c2185b",
  "pink-800": "#ad1457",
  "pink-900": "#880e4f",

  purple: "#9c27b0",
  "purple-50": "#f3e5f5",
  "purple-100": "#e1bee7",
  "purple-200": "#ce93d8",
  "purple-300": "#ba68c8",
  "purple-400": "#ab47bc",
  "purple-500": "#9c27b0",
  "purple-600": "#8e24aa",
  "purple-700": "#7b1fa2",
  "purple-800": "#6a1b9a",
  "purple-900": "#4a148c",

  indigo: "#3f51b5",
  "indigo-50": "#e8eaf6",
  "indigo-100": "#c5cae9",
  "indigo-200": "#9fa8da",
  "indigo-300": "#7986cb",
  "indigo-400": "#5c6bc0",
  "indigo-500": "#3f51b5",
  "indigo-600": "#3949ab",
  "indigo-700": "#303f9f",
  "indigo-800": "#283593",
  "indigo-900": "#1a237e",

  blue: "#2196f3",
  "blue-50": "#EBF5FF",
  "blue-100": "#E1EFFE",
  "blue-200": "#C3DDFD",
  "blue-300": "#A4CAFE",
  "blue-400": "#76A9FA",
  "blue-500": "#3F83F8",
  "blue-600": "#1C64F2",
  "blue-700": "#1A56DB",
  "blue-800": "#1E429F",
  "blue-900": "#233876",
  // "blue-50": "#e3f2fd",
  // "blue-100": "#bbdefb",
  // "blue-200": "#90caf9",
  // "blue-300": "#64b5f6",
  // "blue-400": "#42a5f5",
  // "blue-500": "#2196f3",
  // "blue-600": "#1e88e5",
  // "blue-700": "#1976d2",
  // "blue-800": "#1565c0",
  // "blue-900": "#0d47a1",
  "light-blue": "#03a9f4",
  "light-blue-50": "#e1f5fe",
  "light-blue-100": "#b3e5fc",
  "light-blue-200": "#81d4fa",
  "light-blue-300": "#4fc3f7",
  "light-blue-400": "#29b6f6",
  "light-blue-500": "#03a9f4",
  "light-blue-600": "#039be5",
  "light-blue-700": "#0288d1",
  "light-blue-800": "#0277bd",
  "light-blue-900": "#01579b",

  cyan: "#00bcd4",
  "cyan-50": "#e0f7fa",
  "cyan-100": "#b2ebf2",
  "cyan-200": "#80deea",
  "cyan-300": "#4dd0e1",
  "cyan-400": "#26c6da",
  "cyan-500": "#00bcd4",
  "cyan-600": "#00acc1",
  "cyan-700": "#0097a7",
  "cyan-800": "#00838f",
  "cyan-900": "#006064",

  teal: "#009688",
  "teal-50": "#e0f2f1",
  "teal-100": "#b2dfdb",
  "teal-200": "#80cbc4",
  "teal-300": "#4db6ac",
  "teal-400": "#26a69a",
  "teal-500": "#009688",
  "teal-600": "#00897b",
  "teal-700": "#00796b",
  "teal-800": "#00695c",
  "teal-900": "#004d40",

  green: "#4caf50",
  "green-50": "#F3FAF7",
  "green-100": "#DEF7EC",
  "green-200": "#BCF0DA",
  "green-300": "#84E1BC",
  "green-400": "#31C48D",
  "green-500": "#0E9F6E",
  "green-600": "#057A55",
  "green-700": "#046C4E",
  "green-800": "#03543F",
  "green-900": "#014737",
  // "green-50": "#e8f5e9",
  // "green-100": "#c8e6c9",
  // "green-200": "#a5d6a7",
  // "green-300": "#81c784",
  // "green-400": "#66bb6a",
  // "green-500": "#4caf50",
  // "green-600": "#43a047",
  // "green-700": "#388e3c",
  // "green-800": "#2e7d32",
  // "green-900": "#1b5e20",
  "light-green": "#8bc34a",
  "light-green-50": "#f1f8e9",
  "light-green-100": "#dcedc8",
  "light-green-200": "#c5e1a5",
  "light-green-300": "#aed581",
  "light-green-400": "#9ccc65",
  "light-green-500": "#8bc34a",
  "light-green-600": "#7cb342",
  "light-green-700": "#689f38",
  "light-green-800": "#558b2f",
  "light-green-900": "#33691e",

  lime: "#cddc39",
  "lime-50": "#f9fbe7",
  "lime-100": "#f0f4c3",
  "lime-200": "#e6ee9c",
  "lime-300": "#dce775",
  "lime-400": "#d4e157",
  "lime-500": "#cddc39",
  "lime-600": "#c0ca33",
  "lime-700": "#afb42b",
  "lime-800": "#9e9d24",
  "lime-900": "#827717",

  yellow: "#ffeb3b",
  "yellow-50": "#fffde7",
  "yellow-100": "#fff9c4",
  "yellow-200": "#fff59d",
  "yellow-300": "#fff176",
  "yellow-400": "#ffee58",
  "yellow-500": "#ffeb3b",
  "yellow-600": "#fdd835",
  "yellow-700": "#fbc02d",
  "yellow-800": "#f9a825",
  "yellow-900": "#f57f17",

  amber: "#ffc107",
  "amber-50": "#fff8e1",
  "amber-100": "#ffecb3",
  "amber-200": "#ffe082",
  "amber-300": "#ffd54f",
  "amber-400": "#ffca28",
  "amber-500": "#ffc107",
  "amber-600": "#ffb300",
  "amber-700": "#ffa000",
  "amber-800": "#ff8f00",
  "amber-900": "#ff6f00",

  orange: "#ff9800",
  "orange-50": "#fff3e0",
  "orange-100": "#ffe0b2",
  "orange-200": "#ffcc80",
  "orange-300": "#ffb74d",
  "orange-400": "#ffa726",
  "orange-500": "#ff9800",
  "orange-600": "#fb8c00",
  "orange-700": "#f57c00",
  "orange-800": "#ef6c00",
  "orange-900": "#e65100",
  "deep-orange": "#ff5722",
  "deep-orange-50": "#fbe9e7",
  "deep-orange-100": "#ffccbc",
  "deep-orange-200": "#ffab91",
  "deep-orange-300": "#ff8a65",
  "deep-orange-400": "#ff7043",
  "deep-orange-500": "#ff5722",
  "deep-orange-600": "#f4511e",
  "deep-orange-700": "#e64a19",
  "deep-orange-800": "#d84315",
  "deep-orange-900": "#bf360c",

  brown: "#795548",
  "brown-50": "#efebe9",
  "brown-100": "#d7ccc8",
  "brown-200": "#bcaaa4",
  "brown-300": "#a1887f",
  "brown-400": "#8d6e63",
  "brown-500": "#795548",
  "brown-600": "#6d4c41",
  "brown-700": "#5d4037",
  "brown-800": "#4e342e",
  "brown-900": "#3e2723",

  gray: "#9e9e9e",
  "gray-50": "#fafafa",
  "gray-100": "#f5f5f5",
  "gray-200": "#eeeeee",
  "gray-300": "#e0e0e0",
  "gray-400": "#bdbdbd",
  "gray-500": "#9e9e9e",
  "gray-600": "#757575",
  "gray-700": "#616161",
  "gray-800": "#424242",
  "gray-900": "#212121",
};

export const elevation = {
  card: 6,
  modal: 12,
  button: 4,
};

export const fonts = {
  bodyLarge: {
    fontFamily: "Inter-Regular",
    fontSize: 16,
    fontWeight: "400",
    letterSpacing: 0.15,
    lineHeight: 24,
  },
  bodyMedium: {
    fontFamily: "Inter-Regular",
    fontSize: 14,
    fontWeight: "400",
    letterSpacing: 0.25,
    lineHeight: 20,
  },
  bodySmall: {
    fontFamily: "Inter-Regular",
    fontSize: 12,
    fontWeight: "400",
    letterSpacing: 0.4,
    lineHeight: 16,
  },
  displayLarge: {
    fontFamily: "Inter-Regular",
    fontSize: 57,
    fontWeight: "400",
    letterSpacing: 0,
    lineHeight: 64,
  },
  displayMedium: {
    fontFamily: "Inter-Regular",
    fontSize: 30,
    fontWeight: "400",
    letterSpacing: 0,
    lineHeight: 33,
  },
  displaySmall: {
    fontFamily: "Inter-Regular",
    fontSize: 25,
    fontWeight: "400",
    letterSpacing: 0,
    lineHeight: 27,
  },
  headlineLarge: {
    fontFamily: "Inter-Regular",
    fontSize: 21,
    fontWeight: "400",
    letterSpacing: 0,
    lineHeight: 25,
  },
  headlineMedium: {
    fontFamily: "Inter-Regular",
    fontSize: 18,
    fontWeight: "400",
    letterSpacing: 0,
    lineHeight: 22,
  },
  headlineSmall: {
    fontFamily: "Inter-Regular",
    fontSize: 16,
    fontWeight: "400",
    letterSpacing: 0,
    lineHeight: 18,
  },
  labelLarge: {
    fontFamily: "Inter-Regular",
    fontSize: 16,
    fontWeight: "500",
    letterSpacing: 0.1,
    lineHeight: 20,
  },
  labelMedium: {
    fontFamily: "Inter-Regular",
    fontSize: 14,
    fontWeight: "500",
    letterSpacing: 0.5,
    lineHeight: 16,
  },
  labelSmall: {
    fontFamily: "Inter-Regular",
    fontSize: 12,
    fontWeight: "500",
    letterSpacing: 0.5,
    lineHeight: 16,
  },
  titleLarge: {
    fontFamily: "Inter-SemiBold",
    fontSize: 22,
    fontWeight: "400",
    letterSpacing: 0,
    lineHeight: 28,
  },
  titleMedium: {
    fontFamily: "Inter-SemiBold",
    fontSize: 16,
    fontWeight: "400",
    letterSpacing: 0.5,
    lineHeight: 22,
  },
  titleSmall: {
    fontFamily: "Inter-SemiBold",
    fontSize: 14,
    fontWeight: "400",
    letterSpacing: 0.1,
    lineHeight: 20,
  },
};
