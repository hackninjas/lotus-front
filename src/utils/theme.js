import { extendTheme } from "@chakra-ui/react";
import {
  ButtonStyles as Button,
} from "../styles/components";

const theme = extendTheme({
  colors: {
    lotusGreen: {
      100: "#E2F9F9",
      200: "#EDFFFF",
      300: "#60FFFF",
      400: "#00CECE"
    },
    lotusBlue:"#1E0B89",
    lotusBlack :"#707070"
  },
  fonts: {
    body: "TTcommon Regular, sans-serif",
  },
  components: {
    Button
  },
});

export default theme;
