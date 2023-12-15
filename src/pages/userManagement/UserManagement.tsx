import * as React from 'react';
import User from '../../Models/vm/UserVm';
import UserSummaryCard from './UserSummaryCard';
import { Card, Grid, Paper } from '@mui/material';

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
  return (
    <Grid container spacing={3}>
      {userSummaryList.map((user) => (
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
