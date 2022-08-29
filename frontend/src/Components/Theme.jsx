import { createTheme, rgbToHex} from '@mui/material';

export const themeOptions = createTheme({
    // body: {
    //   fontFamily: ['Poppins', 'sans-serif'].join(','),
    //   fontWeight: 800,
    // },
    typography: {
      fontFamily: `"Poppins", sans-serif`,
      white: {
        color: 'rgb(251,250,235)',
      },
      fontWeightLight: 600,
      fontWeightRegular: 700,
      fontWeightMedium: 800
    },
    palette: {
      type: 'dark',
      primary: {
        main: 'rgb(17,85,158)',
      },
      secondary: {
        main: 'rgb(8,39,73)',
      },
      outline: {
        main: 'rgb(142,228,232)'
      },
      text: {
        primary: 'rgb(251,250,235)',
        secondary: 'rgba(251,250,235,0.7)',
      },
    },
    shape: {
      borderRadius: 4,
    },
    direction: 'ltr',
    overrides: {
      MuiButton: {
        root: {
          background: 'inherit',
          border: 0,
          borderRadius: 3,
          boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
          color: '#9e4696',
          height: 48,
          padding: '0 30px',
        },
      },
    },
    props: {
      MuiGrid:{
        background:'inherit',
      },
      MuiList: {
        dense: true,
      },
      MuiMenu: {
        dense: true,
        hideBackDrop: true,
      },
      MuiMenuItem: {
        dense: true,
      },
      MuiTable: {
        size: 'small',
      },
      MuiButton: {
        size: 'small',
      },
      MuiButtonGroup: {
        size: 'small',
      },
      MuiCheckbox: {
        size: 'small',
      },
      MuiFab: {
        size: 'small',
      },
      MuiFormControl: {
        margin: 'dense',
        size: 'small',
      },
      MuiFormHelperText: {
        margin: 'dense',
      },
      MuiIconButton: {
        size: 'small',
      },
      MuiInputBase: {
        margin: 'dense',
      },
      MuiInputLabel: {
        margin: 'dense',
      },
      MuiRadio: {
        size: 'small',
      },
      MuiSwitch: {
        size: 'small',
      },
      MuiTextField: {
        margin: 'dense',
        size: 'small',
        borderColor: 'white',
      },
      MuiTooltip: {
        arrow: true,
      },
      MuiTab: {

      }
    },
  })