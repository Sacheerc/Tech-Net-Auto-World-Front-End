import React from 'react';
import { Paper, Avatar, Grid, IconButton, Typography } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import avatar from '../../assets/images/dp.jpg';

interface UserSummaryProp {
  username: string;
  email: string;
  dp: string;
  role: string;
}

const avatarStyle = { height: 75, width: 75 };
const iconButtonStyle = {
  position: 'absolute',
  top: 1,
  right: 1,
};

const UserSummaryCard: React.FC<UserSummaryProp> = ({
  username,
  email,
  dp,
  role,
}) => {
  return (
    <Paper style={{ position: 'relative', padding: 20 }}>
      <IconButton color='primary' aria-label='settings' sx={iconButtonStyle}>
        <MoreVertIcon />
      </IconButton>
      <Grid container direction={'row'} spacing={4} alignItems={'center'}>
        <Grid item>
          <Avatar alt={username} src={avatar} sx={avatarStyle} />
        </Grid>
        <Grid item>
          <Grid container direction={'column'}>
            <Typography variant='subtitle1'>{username}</Typography>
            <Typography variant='subtitle2' gutterBottom>
              {email}
            </Typography>
            <Typography variant='subtitle1'>
              <strong>{role}</strong>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default UserSummaryCard;
