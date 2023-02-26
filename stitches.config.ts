import type * as Stitches from '@stitches/react'
import { createStitches } from '@stitches/react'
import {
  gray,
  mint,
  amber,
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
      primary: amber.amber1,
      secondary: gray.gray11,
      hiContrast: amber.amber12,
      loContrast: amber.amber11,
      borders: amber.amber6,
      hover: amber.amber4,
      active: amber.amber5,
      twitterBlue: '#1DA1F2',
      linkedinBlue: '#0077B5'
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
      smallContentSize: '350px',
      bigPostSize: '700px'
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
      titleSize: '38px'
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
  colors: {
    primary: blueDark.blue3,
    secondary: gray.gray1,
    hiContrast: amber.amber12,
    loContrast: amber.amber11,
    borders: amber.amber6,
    hover: amber.amber4,
    active: amber.amber5,
    twitterBlue: '#1DA1F2',
    linkedinBlue: '#0077B5'
  },
})

const GlobalStyles = globalCss({
  body: {
    backgroundColor: "$primary",
  },
  button: {
    all: 'unset'
  },
  fieldset: {
    all: 'unset'
  },
  input: {
    all: 'unset'
  },
  a: {
    textDecoration: 'none'
  },
  ul: {
    padding: 0,
    margin: 0
  }
})

GlobalStyles();
