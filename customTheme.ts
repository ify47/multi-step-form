import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import type { StyleFunctionProps } from "@chakra-ui/styled-system";

import "@fontsource/ubuntu/400.css";
import "@fontsource/ubuntu/500.css";
import "@fontsource/ubuntu/700.css";

const colors = {
  leftLayout: {
    primaryText: "hsl(231, 11%, 63%)",
    secondaryText: "hsl(0, 0%, 100%)",
    borderColor: "hsl(217, 100%, 97%)",
  },
  rightLayout: {
    primaryText: "hsl(213, 96%, 18%)",
    secondaryText: "hsl(231, 11%, 63%)",
    placeholderText: "hsl(231, 11%, 63%)",
    amountText: "hsl(243, 100%, 62%)",
    switcher: "hsl(231, 100%, 99%)",
    borderColor: "hsl(243, 100%, 62%)",
    backColor: "hsl(231, 11%, 63%)",
  },
};

const fonts = {
  body: "ubuntu",
  heading: "ubuntu",
};

const breakpoints = {
  md: "568px",
};

const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      bg: mode("hsl(217, 100%, 97%)", "hsl(217, 100%, 97%)")(props),
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
    },
  }),
};

export const customTheme = extendTheme({ colors, fonts, breakpoints, styles });
