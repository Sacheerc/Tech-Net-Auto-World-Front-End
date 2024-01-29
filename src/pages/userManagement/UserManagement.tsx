import React, { useEffect, useState } from 'react';
import User from '../../Models/vm/UserVm';
import UserSummaryCard from './UserSummaryCard';
import { Button, Card, Grid, Paper, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';
import AuthService from '../../services/AuthService';

const userSummaryList: User[] = [
  {
    id: 10001,
    username: 'Sachintha Rathnayake',
    dp: 'image',
    email: 'sachintha@gmail.com',
    role: 'ADMIN',
  },
  {
    id: 10002,
    username: 'Helani Kathyana',
    dp: 'image',
    email: 'helani@gmail.com',
    role: 'SECRATARY',
  },
  {
    id: 10003,
    username: 'Salinda Rathnayake',
    dp: 'image',
    email: 'salinda@gmail.com',
    role: 'ACCOUNTANT',
  },
  {
    id: 10004,
    username: 'Steave Jobs',
    dp: 'image',
    email: 'steave@gmail.com',
    role: 'CEO',
  },
  {
    id: 10005,
    username: 'John Kenedy',
    dp: 'image',
    email: 'john@gmail.com',
    role: 'OFFICE',
  },
  {
    id: 10006,
    username: 'Kate Robinson',
    dp: 'image',
    email: 'kate@gmail.com',
    role: 'OFFICE',
  },
];

const UserManagement: React.FC = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState<any | null>(null);

  const fetchData = async () => {
    try {
      const data = await AuthService.getAll();
      setUserData(data);
      console.log(userData);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Grid container spacing={3} style={{ marginTop: 15 }}>
      <Grid item container direction={'row'}>
        <Grid xs={6}>
          <Typography variant='h6' gutterBottom>
            User Management
          </Typography>
        </Grid>
        <Grid xs={6} display={'flex'} justifyContent={'flex-end'}>
          <Button
            variant='outlined'
            endIcon={<AddIcon />}
            onClick={() => navigate('/usermanagement/add')}
          >
            Add User
          </Button>
        </Grid>
      </Grid>
      {userData?.users.map((user: any) => (
        <Grid key={user.id} item md={3}>
          <UserSummaryCard
            username={user.username}
            email={user.email}
            dp={user.dp}
            role={user.role}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default UserManagement;
