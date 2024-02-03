"use client"
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    useSystemColorMode: true,
  },
  styles: {
    global: (props) => ({
      ":root": {
        // Define your custom CSS variables here
        "--main-color": "#0F1035",
        "--secondary-color": "#365486",
        "--third-color": "#7FC7D9",
        "--body-color": "#DCF2F1",
        "--white-color": "#fff",
        "--big-font-size": "45px",
        "--medium-font-size": "18px",
        "--small-font-size": "14px",
        "--big-font-weight": "900",
        "--medium-font-weight": "400",
        "--big-spacing": "20px",
        "--medium-spacing": "10px",
        "--small-spacing": "5px",
      },
      // Include other global styles here
      "::-webkit-scrollbar": {
        width: "12px",
        backgroundColor: "var(--secondary-color)",
      },
      "::-webkit-scrollbar-thumb": {
        backgroundColor: "var(--body-color)",
      },
      "*": {
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
      },
      body: {
        backgroundColor: "var(--body-color)",
      },
      input: {
        border: "none",
        outline: "none",
      },
      button: {
        border: "none",
        outline: "none",
      },
      a: {
        textDecoration: "none",
      },
      ul: {
        listStyle: "none",
      },
      html: {
        scrollBehavior: "smooth",
      },
    }),
  },
});

export default theme;
