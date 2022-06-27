import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#782878',
    },
  },
  typography: {
    fontFamily: 'Poppins',
    // color: '#4B3A5A',
    fontSize: 12,
    button: {
      letterSpacing: '0.2px',
    },
    body1: {
      color: '#4B3A5A',
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        // fontSize: '1.4rem',
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '3px',
          textTransform: 'none',
          height: 50,
          fontSize: 12,
        },
      },
      defaultProps: {
        variant: 'contained',
        disableElevation: true,
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          // borderRadius: '2px',
        },
      },
      defaultProps: {
        // variant: 'outlined',
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderRadius: '2px',
            },
          },
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontSize: 11,
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderRadius: '4px',
            },
            '&:hover fieldset': {
              borderColor: 'rgba(0,0,0,0.4)',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'purple',
            },
          },
        },
        inputRoot: {
          // fontSize: '11.5px',
          // height: '3.1rem',
        },
        paper: { fontSize: '12px' },
      },
    },
  },
});

export default theme;
