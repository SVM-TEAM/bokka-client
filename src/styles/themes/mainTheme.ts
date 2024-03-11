import { createTheme } from '@mui/material';

export const mainTheme = createTheme({
  palette: {
    primary: {
      main: '#9575cd',
    },
  },
  typography: {
    fontFamily: '"Comic Sans MS", cursive, sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          padding: '10px 20px',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          marginBottom: '10px',
        },
      },
    },
  },
});
