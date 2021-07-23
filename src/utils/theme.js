import { extendTheme } from "@chakra-ui/react";
import {
  ButtonStyles as Button,
  MenuStyles as Menu
} from "../styles/components";


const styles = {
  global: (props) => ({
    "h1,h2,h3,h4,h5,p":{
      color: "lotusTextBody",
      fontFamily: "TTcommon Regular, sans-serif",
    },

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
    lotusRed: {
      100: "#FF2B22",
    },
    lotusBlue: {
      100: "#518EF8",
      200: "#175FFF",
      300: "#4838A0",
      400: "#1E0B89"
    },
    lotusBlack :"#707070",
    lotusTextBody: "#2D2D2D",
    lotusGrey: "#9B9B9B",
    lotusOrange:"#FFA429",
    lotusFadedPink:"#F9F7FF"
  },
  // fonts: {
  //   body: "TTcommon Regular, sans-serif",
  //   cocogoose: "Cocogoose"
  // },
  components: {
    Button,
    Menu
  },
  styles
});

export default theme;
