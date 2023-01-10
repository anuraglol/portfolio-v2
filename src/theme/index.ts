import { neutralPalette } from "@/lib/constants/colors";
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    primary: "#10100e",
    neutral: neutralPalette,
  },
  fonts: {
    body: "Satoshi, sans-serif",
    secondary: "Sentient, serif",
  },
});

export { theme };
