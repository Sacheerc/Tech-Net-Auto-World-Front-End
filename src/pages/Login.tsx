// Login.tsx

import React from 'react';
import { Button, Paper, Typography, TextField, useTheme } from '@mui/material';

interface LoginProps {
  toggleTheme: () => void;
}

const Login: React.FC<LoginProps> = ({ toggleTheme }) => {
  const theme = useTheme();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your login logic here
  };

  return (
    <Paper style={{ padding: theme.spacing(2), maxWidth: 300 }}>
      <Typography variant="h5" gutterBottom>
        Login
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Username"
          variant="outlined"
          margin="normal"
          fullWidth
          required
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          margin="normal"
          fullWidth
          required
        />
        <Button type="submit" variant="contained" color="primary">
          Log In
        </Button>
      </form>
      <Button variant="outlined" onClick={toggleTheme}>
        Toggle Theme
      </Button>
    </Paper>
  );
};

export default Login;
