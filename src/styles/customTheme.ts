import { theme, extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  useSystemColorMode: true,
  fonts: {
    ...theme.fonts,
    body: "Inter, sans-serif",
    heading: "Inter, sans-serif",
  },
  colors: {
    ...theme.colors,
    /** Example */
    // teal: {
    //   ...theme.colors.teal,
    //   700: "#005661",
    //   500: "#00838e",
    //   300: "#4fb3be",
    // },
  },
  components: {
    /** Example */
    // Button: {
    //   baseStyle: {
    //     borderRadius: 24,
    //   },
    // },
  },
});

export default customTheme;
