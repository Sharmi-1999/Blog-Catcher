import { createMuiTheme } from "@material-ui/core";
import { darkTheme } from "./color";

export const dark = () =>
  createMuiTheme({
    palette: {
      type: "dark",
      primary: {
        main: darkTheme.formBackground,
        secondary: darkTheme.createBackground,
      },
      background: {
        default: darkTheme.background,
      },
      text: {
        main: darkTheme.textDarkColor,
        primary: darkTheme.textColor,
        secondary: darkTheme.textsubtitleColor,
      },
    },
    typography: {
      fontFamily: "HKGrotesk",
      h1: {
        fontWeight: 900,
      },
      subtitle1: {
        display: "inline",
        marginLeft: "0.4rem",
        fontWeight: 700,
      },
    },
    overrides: {
      MuiList: {
        root: {
          background: darkTheme.background,
        },
      },
    },
  });
