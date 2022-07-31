import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      light: "#0eafa0",
      main: "#fff",
      dark: "#015C92",
      contrastText: "#fff",
    },
    secondary: {
      light: "#71708C",
      main: "#FAB70B",
      dark: "#FAB70B",
      contrastText: "#444",
    },
  },
  //#005671
});

export default theme;