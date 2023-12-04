// Login.tsx

import React, { FormEventHandler, useContext } from 'react';
import { Button, Paper, Typography, TextField, useTheme, Link } from '@mui/material';

interface LoginProps {
  toggleTheme: () => void;
  onSubmit: FormEventHandler<HTMLFormElement>;
}

const Login: React.FC<LoginProps> = ({ toggleTheme, onSubmit }) => {
  const theme = useTheme();

  return (
    <Paper style={{ padding: theme.spacing(2), maxWidth: 300 }}>
      <Typography variant="h5" gutterBottom>
        Login
      </Typography>
      <form onSubmit={onSubmit}>
        <TextField
          label="Username"
          variant="outlined"
          margin="normal"
          name='email'
          fullWidth
          required
        />
        <TextField
          label="Password"
          type="password"
          name='password'
          variant="outlined"
          margin="normal"
          fullWidth
          required
        />
        <Button type="submit" variant="contained" color="primary">
          Log In
        </Button>
      </form>
      {/* <Button variant="outlined" onClick={toggleTheme}>
        Toggle Theme
      </Button> */}
    </Paper>
  );
};

export default Login;
