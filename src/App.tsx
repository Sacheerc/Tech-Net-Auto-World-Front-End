import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Routes from './routes';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const App: React.FC = () => {
  // const location = useLocation();
  const [themeMode, setThemeMode] = React.useState<'light' | 'dark'>('dark');

  const toggleTheme = () => {
    setThemeMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={themeMode === 'light' ? lightTheme : darkTheme}>
      <CssBaseline />
      <Routes />
    </ThemeProvider>
  );
};

export default App;
