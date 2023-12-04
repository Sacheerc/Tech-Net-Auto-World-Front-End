import React, { FormEventHandler, useContext } from 'react';
import logo from '../../assets/images/logo.jpg';
import './Login.css';
import {
  Button,
  Paper,
  Typography,
  TextField,
  useTheme,
  Link,
  Container,
  Grid,
} from '@mui/material';

interface LoginProps {
  toggleTheme: () => void;
  onSubmit: FormEventHandler<HTMLFormElement>;
}

const Login: React.FC<LoginProps> = ({ toggleTheme, onSubmit }) => {
  const theme = useTheme();

  return (
    <Grid container>
      {/* Left Side - Image */}
      <Grid item xs={12} sm={8}>
        <Paper elevation={0} className='image-container'>
        </Paper>
      </Grid>

      <Grid
        container
        item
        xs={12}
        sm={4}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <div className='paper'>
          <img src={logo} alt='Logo' className='logo' />

          <Typography variant='subtitle2' gutterBottom>
            Sign in with your organizational account
          </Typography>

          {/* Username and Password Fields */}
          <form onSubmit={onSubmit}>
            <TextField
              label='Username'
              variant='outlined'
              margin='normal'
              name='email'
              fullWidth
              required
            />
            <TextField
              label='Password'
              type='password'
              name='password'
              variant='outlined'
              margin='normal'
              fullWidth
              required
            />
            <Button type='submit' variant='contained' color='primary'>
              Sign In
            </Button>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};

export default Login;
