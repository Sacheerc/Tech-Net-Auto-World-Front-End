// App.tsx or index.tsx

import React, { useContext } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard';
import AuthContext from './context/AuthContextProvier';
import Auth from './pages/Login/Auth';


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
  const { authState } = useContext(AuthContext);
  const location = useLocation();
  const [themeMode, setThemeMode] = React.useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    setThemeMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={themeMode === 'light' ? lightTheme : darkTheme}>
      <CssBaseline />
      {/* Your other components go here */}
      {/* <Login toggleTheme={toggleTheme} /> */}
      <Routes>
        <Route
          path="/"
          element={
            <Navigate
              to={authState.isLoggedIn ? location.pathname : "/login"}
            />
          }
        />
        {!authState.isLoggedIn && (
          <Route path="login" element={<Auth toggleTheme={toggleTheme}/>} />
        )}
        {authState.isLoggedIn && (
          <Route path="dashboard" element={<Dashboard />} />
        )}
      </Routes>
    </ThemeProvider>
  );
};

export default App;
