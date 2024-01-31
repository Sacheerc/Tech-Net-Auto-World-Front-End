import { Grid, Typography, Button, TextField, Paper, Input, Stack, } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from '../../services/AuthService';
import User from '../../Models/vm/UserVm';

const UserForm: React.FC<{ user: User | null }> = (props) => {
  const navigate = useNavigate();
  const loadedUser = props.user;
  const [formData, setFormData] = React.useState<User>(loadedUser ? loadedUser : {
    id: 0,
    username: '',
    email: '',
    dp: '',
    role: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSave = async () => {
    // Validate form fields
    const errors: Record<string, string> = {};

    // Example: Check if a field is empty
    if (!formData.username) {
      errors.username = 'User name is required';
    }

    // If there are no errors, proceed with saving the data
    if (Object.keys(errors).length === 0) {
      // Add your save logic here
      console.log('Form data:', formData);
      const user: User = formData;
      const res = await AuthService.add(user);
      navigate('/usermanagement');
    }
  };

  const handleCancel = () => {
    // Add your cancel logic here
    console.log('Form canceled');
  };

  return (
    <Grid container spacing={1}>
      <Grid item container direction={'row'}>
        <Typography variant='h6' gutterBottom>
          User Management - Add New User
        </Typography>
      </Grid>
      <Grid item style={{ width: '100%' }}>
        <Paper style={{ width: '100%', padding: 40 }}>
          <form>
            <Grid container spacing={4}>
              <Grid item xs={4}>
                <TextField
                  label='Username'
                  name='username'
                  value={formData.username}
                  onChange={handleInputChange}
                  fullWidth
                  variant='standard'
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  label='Role'
                  name='role'
                  value={formData.role}
                  onChange={handleInputChange}
                  fullWidth
                  variant='standard'
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  label='Email'
                  name='email'
                  value={formData.email}
                  onChange={handleInputChange}
                  fullWidth
                  variant='standard'
                />
              </Grid>
            </Grid>

            {/* Buttons for save and cancel */}
            <Grid
              container
              justifyContent='flex-end'
              spacing={2}
              style={{ marginTop: 10 }}
            >
              <Grid item>
                <Button variant='outlined' onClick={handleCancel}>
                  Cancel
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant='contained'
                  color='primary'
                  onClick={handleSave}
                >
                  Save
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default UserForm;
