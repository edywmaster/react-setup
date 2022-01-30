import { createStitches, globalCss } from '@stitches/react';
import type * as Stitches from '@stitches/react';


export const { css, styled, getCssText, createTheme, theme } = createStitches({
  theme: {
    colors: {

      gray900: "hsl(205,5%,7%)",
      gray700: "hsl(205,5%,25%)",
      gray500: "hsl(205,5%,35%)",
      gray50: "hsl(205,5%,95%)",
      blue900: "hsl(216, 71%, 5%)",
      blue500: "hsl(205,90%,45%)",

      // Alias
      primary: "$gray900",
      secondary: "$gray700",
      tertiary: "$gray500",
      link: "$blue500",
      background: "$gray900",
      border: "$gray900",

    },

    fonts: {
      headers: 'Poppis, sans-serif',
      texts: 'Roboto, sans-serif',
    },

  },
});

export const darkTheme = createTheme({
  colors: {
    primary: "$gray50",
    secondary: "$gray200",
    tertiary: "$gray300",
    link: "$blue500",
    background: "$blue900",
    border: "$gray100",
  },
});

export const lightTheme = createTheme({
  colors: {
    primary: "$blue900",
    secondary: "$gray200",
    tertiary: "$gray300",
    link: "$blue500",
    background: "$gray50",
    border: "$gray100",
  },
});

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  html: {
    width: '100vw',
    height: '100vh',
  },
  body: {
    background: theme.colors.background
  },
  "@dark": {
    // notice the `media` definition on the stitches.config.ts file
    ":root:not(.light)": {
      ...Object.keys(darkTheme.colors).reduce((varSet, currentColorKey) => {
        const currentColor = darkTheme.colors[currentColorKey];
        const currentColorValue =
          currentColor.value.substring(0, 1) === "$"
            ? `$colors${currentColor.value}`
            : currentColor.value;

        return {
          [currentColor.variable]: currentColorValue,
          ...varSet,
        };
      }, {}),
    },
  },
});

globalStyles();

