import { createTheme} from '@mui/material';

export const themeOptions = createTheme({
    typography: {
      fontFamily: ['MedievalSharp', 'cursive'].join(','),
    },
    palette: {
      type: 'dark',
      primary: {
        main: '#020024',
      },
      secondary: {
        main: '#79091a',
      },
      text: {
        primary: '#73090b',
        secondary: 'rgba(148,36,36,0.7)',
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
      },
      MuiTooltip: {
        arrow: true,
      },
    },
  })