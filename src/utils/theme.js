import { extendTheme } from "@chakra-ui/react";
import {
  ButtonStyles as Button,
} from "../styles/components";


const styles = {
  global: (props) => ({
    "*":{
      color: "lotusTextBody",
      fontFamily: "TTcommon Regular, sans-serif",
    }
  }),
}


const theme = extendTheme({
  colors: {
    lotusGreen: {
      100: "#E2F9F9",
      200: "#EDFFFF",
      300: "#60FFFF",
      400: "#00CECE"
    },
    lotusBlue: {
      100: "#518EF8",
      200: "#175FFF",
      300: "#4838A0",
      400: "#1E0B89"
    },
    lotusBlack :"#707070",
    lotusTextBody: "#2D2D2D"
  },
  fonts: {
    body: "TTcommon Regular, sans-serif",
  },
  components: {
    Button
  },
  styles
});

export default theme;
