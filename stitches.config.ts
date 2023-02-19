import type * as Stitches from '@stitches/react'
import { createStitches } from '@stitches/react'
import {
  gray,
  slate,
  blue,
  grayDark,
  blueDark,
} from '@radix-ui/colors';

export const {
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  styled,
  theme,
} = createStitches({
  theme: {
    colors: {
      ...gray,
      ...blue,
      ...grayDark,
      ...blueDark,
      ...slate,
      primary: slate.slate3,
      secondary: gray.gray11,
      hiContrast: blueDark.blue7
    },
    space: {
      1: '4px',
      2: '8px',
      3: '12px',
      4: '16px',
      5: '20px',
      6: '24px',
    },
    sizes: {
      1: '4px',
      2: '8px',
      3: '12px',
      4: '16px',
      5: '20px',
      6: '24px',
      bigContentSize: '400px',
      smallContentSize: '350px'
    },
    fontSizes: {
      1: '12px',
      2: '13px',
      3: '15px',
      4: '17px',
      5: '19px',
      6: '21px',
      7: '24px',
      8: '28px',
      titleSize: '32px'
    },
    fonts: {
      system: 'system-ui',
    },
  },
  utils: {
    marginX: (value: Stitches.PropertyValue<'margin'>) => ({
      marginLeft: value,
      marginRight: value,
    }),
    marginY: (value: Stitches.PropertyValue<'margin'>) => ({
      marginTop: value,
      marginBottom: value,
    }),
    paddingX: (value: Stitches.PropertyValue<'padding'>) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    paddingY: (value: Stitches.PropertyValue<'padding'>) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
  },
  media: {
    bp1: '(min-width: 520px)',
    bp2: '(min-width: 900px)',
  },
})


export const darkTheme = createTheme({
  theme: {
    primary: blueDark.blue3,
    secondary: gray.gray1
  }
})

const GlobalStyles = globalCss({
  body: {
    background: "$primary",
  },
  button: {
    all: 'unset'
  },
  fieldset: {
    all: 'unset'
  },
  input: {
    all: 'unset'
  }
})

GlobalStyles();
