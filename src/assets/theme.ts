import { deepmerge } from '@mui/utils';
import ArrowDropDownRounded from '@mui/icons-material/ArrowDropDownRounded';
import { createTheme, ThemeOptions, Theme } from '@mui/material/styles';

declare module '@mui/material/styles/createPalette' {
  interface ColorRange {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  }

  interface PaletteColor extends ColorRange {}

  interface Palette {
    primaryDark: PaletteColor;
  }
}

declare module '@mui/material/styles/createTypography' {
  interface TypographyOptions {
    fontWeightExtraBold?: number;
    fontFamilyCode?: string;
  }

  interface Typography {
    fontWeightExtraBold: number;
    fontFamilyCode: string;
  }
}

// TODO: enable this once types conflict is fixed
// declare module '@mui/material/Button' {
//   interface ButtonPropsVariantOverrides {
//     code: true;
//   }
// }

const defaultTheme = createTheme();

const orange = {
  50: '#fff4e1',
  100: '#ffe2b4',
  200: '#ffcf83',
  300: '#ffbb52',
  400: '#ffbb52',
  500: '#ff9d12',
  600: '#ff9110',
  700: '#fa810e',
  main: '#f4710d',
  800: '#f4710d',
  900: '#eb570b',
};

export const orangeDark = {
  50: '#f5e9e5',
  100: '#f0ccb8',
  200: '#e7ac8b',
  300: '#de8e5d',
  main: '#de8e5d',
  400: '#d87939',
  500: '#d26611',
  600: '#c9600e',
  700: '#bc590b',
  800: '#ae520a',
  900: '#96460a',
};

const blue = {
  50: '#e2f7fb',
  100: '#b8ebf5',
  200: '#8cdfef',
  300: '#64d1e6',
  400: '#50c7df',
  main: '#50c7df',
  500: '#4abdd8',
  600: '#44adc5',
  700: '#3d98aa',
  800: '#378492',
  900: '#2a6167',
};

export const blueDark = {
  50: '#e1f4fc',
  100: '#b4e5f8',
  200: '#84d4f1',
  300: '#57c2e8',
  400: '#3bb7df',
  500: '#32abd6',
  600: '#2b9cc2',
  700: '#2088a8',
  800: '#17758f',
  main: '#17758f',
  900: '#065363',
};

const grey = {
  50: '#F3F6F9',
  100: '#EAEEF3',
  200: '#E5E8EC',
  300: '#D7DCE1',
  400: '#BFC7CF',
  500: '#AAB4BE',
  600: '#7F8E9D',
  700: '#46505A', // contrast 8.21:1
  800: '#2F3A45', // contrast 11.58:1
  900: '#20262D',
};

const systemFont = ['IRANSans'];

export const getMetaThemeColor = (mode: 'light' | 'dark') => {
  const themeColor = {
    light: grey[50],
    dark: orangeDark[800],
  };
  return themeColor[mode];
};

export const getDesignTokens = (mode: 'light' | 'dark') =>
  ({
    direction: 'rtl',
    palette: {
      primary: {
        ...orange,
        ...(mode === 'dark' && {
          main: orange[400],
        }),
        divider: mode === 'dark' ? orangeDark[700] : grey[200],
        primaryDark: orangeDark,
        mode,
        ...(mode === 'dark' && {
          background: {
            default: orangeDark[800],
            paper: orangeDark[900],
          },
        }),
        common: {
          black: '#1D1D1D',
        },
        ...(mode === 'light' && {
          text: {
            primary: grey[900],
            secondary: grey[800],
          },
        }),
        ...(mode === 'dark' && {
          text: {
            primary: '#fff',
            secondary: grey[500],
          },
        }),
        grey,
        error: {
          50: '#FFF0F1',
          100: '#FFDBDE',
          200: '#FFBDC2',
          300: '#FF99A2',
          400: '#FF7A86',
          500: '#FF505F',
          main: '#EB0014', // contrast 4.63:1
          600: '#EB0014',
          700: '#C70011',
          800: '#94000D',
          900: '#570007',
        },
        success: {
          50: '#E9FBF0',
          100: '#C6F6D9',
          200: '#9AEFBC',
          300: '#6AE79C',
          400: '#3EE07F',
          500: '#21CC66',
          600: '#1DB45A',
          ...(mode === 'dark' && {
            main: '#1DB45A', // contrast 6.17:1 (orangeDark.800)
          }),
          ...(mode === 'light' && {
            main: '#1AA251', // contrast 3.31:1
          }),
          700: '#1AA251',
          800: '#178D46',
          900: '#0F5C2E',
        },
        warning: {
          50: '#FFF9EB',
          100: '#FFF4DB',
          200: '#FFEDC2',
          300: '#FFE4A3',
          400: '#FFD980',
          500: '#FCC419',
          600: '#FAB005',
          main: '#F1A204', // does not pass constrast ratio
          700: '#F1A204',
          800: '#DB9A00',
          900: '#8F6400',
        },
      },
      secondary: {
        ...blue,
        ...(mode === 'dark' && {
          main: blue[700],
        }),
      },
    },
    shape: {
      borderRadius: 10,
    },
    spacing: 10,
    typography: {
      fontFamily: [...systemFont].join(','),
      fontFamilyCode: [...systemFont].join(','),
      fontFamilyTagline: [...systemFont].join(','),
      fontFamilySystem: systemFont.join(','),
      fontWeightExtraBold: 800,
      h1: {
        fontFamily: [...systemFont].join(','),
        fontSize: 'clamp(2.625rem, 1.2857rem + 3.5714vw, 4rem)',
        fontWeight: 800,
        lineHeight: 78 / 70,
        ...(mode === 'light' && {
          color: orangeDark[900],
        }),
      },
      h2: {
        fontFamily: [...systemFont].join(','),
        fontSize: 'clamp(1.5rem, 0.9643rem + 1.4286vw, 2.25rem)',
        fontWeight: 800,
        lineHeight: 44 / 36,
        color: mode === 'dark' ? grey[200] : orangeDark[700],
      },
      h3: {
        fontSize: defaultTheme.typography.pxToRem(36),
        lineHeight: 44 / 36,
        letterSpacing: 0,
      },
      h4: {
        fontSize: defaultTheme.typography.pxToRem(28),
        lineHeight: 42 / 28,
        letterSpacing: 0,
      },
      h5: {
        fontSize: defaultTheme.typography.pxToRem(24),
        lineHeight: 36 / 24,
        letterSpacing: 0,
      },
      h6: {
        fontSize: defaultTheme.typography.pxToRem(20),
        lineHeight: 30 / 20,
        letterSpacing: 0,
      },
      button: {
        textTransform: 'initial',
        fontWeight: 700,
        letterSpacing: 0,
      },
      subtitle1: {
        fontSize: defaultTheme.typography.pxToRem(18),
        lineHeight: 24 / 18,
        letterSpacing: 0,
        fontWeight: 500,
      },
      body1: {
        fontSize: defaultTheme.typography.pxToRem(16), // 16px
        lineHeight: 24 / 16,
        letterSpacing: 0,
      },
      body2: {
        fontSize: defaultTheme.typography.pxToRem(14), // 14px
        lineHeight: 21 / 14,
        letterSpacing: 0,
      },
      caption: {
        display: 'inline-block',
        fontSize: defaultTheme.typography.pxToRem(12), // 12px
        lineHeight: 18 / 12,
        letterSpacing: 0,
        fontWeight: 700,
      },
    },
  } as ThemeOptions);

export function getThemedComponents(theme: Theme) {
  return {
    components: {
      MuiButtonBase: {
        defaultProps: {
          disableTouchRipple: true,
        },
      },
      MuiButton: {
        defaultProps: {
          disableElevation: true,
        },
        styleOverrides: {
          sizeLarge: {
            padding: '1rem 1.25rem',
            ...theme.typography.body1,
            lineHeight: 21 / 16,
            fontWeight: 700,
          },
          containedPrimary: {
            backgroundColor: theme.palette.primary[500],
            color: '#fff',
          },
        },
        variants: [
          {
            props: { variant: 'code' },
            style: {
              color:
                theme.palette.mode === 'dark'
                  ? theme.palette.grey[400]
                  : theme.palette.grey[800],
              border: '1px solid',
              borderColor:
                theme.palette.mode === 'dark'
                  ? theme.palette.primaryDark[400]
                  : theme.palette.grey[200],
              backgroundColor:
                theme.palette.mode === 'dark'
                  ? theme.palette.primaryDark[700]
                  : theme.palette.grey[50],
              fontFamily: theme.typography.fontFamilyCode,
              '&:hover, &.Mui-focusVisible': {
                borderColor: theme.palette.primary.main,
                backgroundColor:
                  theme.palette.mode === 'dark'
                    ? theme.palette.primaryDark[600]
                    : theme.palette.primary[50],
                '& .MuiButton-endIcon': {
                  color:
                    theme.palette.mode === 'dark'
                      ? theme.palette.primary[300]
                      : theme.palette.primary.main,
                },
              },
              '& .MuiButton-startIcon': {
                color: theme.palette.grey[400],
              },
              '& .MuiButton-endIcon': {
                color:
                  theme.palette.mode === 'dark'
                    ? theme.palette.grey[400]
                    : theme.palette.grey[700],
              },
            },
          },
          {
            props: { variant: 'code', size: 'large' },
            style: {
              ...theme.typography.body2,
              fontFamily: theme.typography.fontFamilyCode,
              fontWeight: theme.typography.fontWeightBold,
            },
          },
        ],
      },
      MuiContainer: {
        styleOverrides: {
          root: {
            [theme.breakpoints.up('md')]: {
              paddingLeft: theme.spacing(2),
              paddingRight: theme.spacing(2),
            },
          },
        },
      },
      MuiDivider: {
        styleOverrides: {
          root: {
            borderColor:
              theme.palette.mode === 'dark'
                ? theme.palette.primaryDark[700]
                : theme.palette.grey[100],
          },
        },
      },
      MuiLink: {
        defaultProps: {
          underline: 'none',
        },
        styleOverrides: {
          root: {
            color:
              theme.palette.mode === 'dark'
                ? theme.palette.primary[400]
                : theme.palette.primary[600],
            fontWeight: 700,
            display: 'inline-flex',
            alignItems: 'center',
            '&.MuiTypography-body1 > svg': {
              marginTop: 2,
            },
            '& svg:last-child': {
              marginLeft: 2,
            },
          },
        },
      },
      MuiSelect: {
        defaultProps: {
          IconComponent: ArrowDropDownRounded,
        },
        styleOverrides: {
          iconFilled: {
            top: 'calc(50% - .25em)',
          },
        },
      },
      MuiTab: {
        defaultProps: {
          disableTouchRipple: true,
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundColor:
              theme.palette.mode === 'dark'
                ? theme.palette.primaryDark[900]
                : '#fff',
            '&[href]': {
              textDecorationLine: 'none',
            },
          },
          outlined: {
            display: 'block',
            borderColor:
              theme.palette.mode === 'dark'
                ? theme.palette.primaryDark[400]
                : theme.palette.grey[200],
            ...(theme.palette.mode === 'dark' && {
              backgroundColor: theme.palette.primaryDark[700],
            }),
            'a&, button&': {
              '&:hover': {
                boxShadow: '1px 1px 20px 0 rgb(90 105 120 / 20%)',
              },
            },
          },
        },
      },
      MuiTableCell: {
        styleOverrides: {
          root: {
            padding: theme.spacing(1, 2),
            borderColor: theme.palette.divider,
          },
          head: {
            color: theme.palette.text.primary,
            fontWeight: 700,
          },
          body: {
            color: theme.palette.text.secondary,
          },
        },
      },
      MuiToggleButtonGroup: {
        styleOverrides: {
          root: {
            backgroundColor:
              theme.palette.mode === 'dark'
                ? theme.palette.primaryDark[900]
                : '#fff',
          },
        },
      },
      MuiToggleButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            fontWeight: 700,
            color:
              theme.palette.mode === 'dark'
                ? theme.palette.grey[300]
                : theme.palette.grey[700],
            borderColor:
              theme.palette.mode === 'dark'
                ? theme.palette.primaryDark[500]
                : theme.palette.grey[200],
            '&.Mui-selected': {
              borderColor: `${theme.palette.primary[500]} !important`,
              color:
                theme.palette.mode === 'dark'
                  ? '#fff'
                  : theme.palette.primary[500],
              backgroundColor:
                theme.palette.mode === 'dark'
                  ? theme.palette.primary[800]
                  : theme.palette.primary[50],
            },
          },
        },
      },
      MuiTooltip: {
        styleOverrides: {
          tooltip: {
            paddingTop: 7,
            paddingBottom: 7,
          },
        },
      },
      MuiSwitch: {
        styleOverrides: {
          root: {
            width: 32,
            height: 20,
            padding: 0,
            '& .MuiSwitch-switchBase': {
              '&.Mui-checked': {
                transform: 'translateX(11px)',
                color: '#fff',
              },
            },
          },
          switchBase: {
            height: 20,
            width: 20,
            padding: 0,
            color: '#fff',
            '&.Mui-checked + .MuiSwitch-track': {
              opacity: 1,
            },
          },
          track: {
            opacity: 1,
            borderRadius: 32,
            backgroundColor:
              theme.palette.mode === 'dark'
                ? theme.palette.grey[800]
                : theme.palette.grey[400],
          },
          thumb: {
            flexShrink: 0,
            width: '14px',
            height: '14px',
          },
        },
      },
    },
  };
}

const darkTheme = createTheme(getDesignTokens('dark'));
export const sDarkTheme = deepmerge(darkTheme, getThemedComponents(darkTheme));

const lightTheme = createTheme(getDesignTokens('light'));
export const sLightTheme = deepmerge(
  lightTheme,
  getThemedComponents(lightTheme)
);
