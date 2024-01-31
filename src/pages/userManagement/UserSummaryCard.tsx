import React from 'react';
import { Paper, Avatar, Grid, IconButton, Typography, MenuItem, Menu, Stack } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import avatar from '../../assets/images/dp.jpg';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import User from '../../Models/vm/UserVm';

interface UserSummaryProp {
  // username: string;
  // email: string;
  // dp: string;
  // role: string;
  user: User;
  onEdit: (user: User) => void;
  onDelete: (userId: number) => void;
}

const avatarStyle = { height: 75, width: 75 };
const iconButtonStyle = {
  position: 'absolute',
  top: 1,
  right: 1,
};
const settings = [
  { label: 'View', icon: <VisibilityIcon />, color: '#0000FF' },
  { label: 'Edit', icon: <EditIcon />, color: '#008000' },
  { label: 'Delete', icon: <DeleteIcon />, color: '#FF0000' },
];

const UserSummaryCard: React.FC<UserSummaryProp> = ({
  // username,
  // email,
  // dp,
  // role,
  user,
  onEdit,
  onDelete,
}) => {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleEdit = (id: string, row: any) => {
    console.log('Edit clicked for id:', id, ' and row:', row);
  };

  const handleView = (id: string) => {
    console.log('View clicked for id:', id);
  };

  const handleDelete = (id: string) => {
    console.log('Delete clicked for id:', id);
  };

  const handleEditClick = () => {
    onEdit(user);
  };

  const handleDeleteClick = () => {
    onDelete(user.id);
  };
  return (
    <Paper style={{ position: 'relative', padding: 20 }}>
      <IconButton color='primary' aria-label='settings' sx={iconButtonStyle} onClick={handleOpenUserMenu}>
        <MoreVertIcon />
      </IconButton>
      <Menu
        sx={{ mt: '45px' }}
        id='menu-appbar'
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {settings.map(({ label, icon, color }) => (
          <MenuItem key={label} onClick={handleCloseUserMenu}>
            <Stack direction="row" alignItems="center" spacing={1}>
              <IconButton color='inherit' style={{ color }}
                onClick={label === 'Edit' ? handleEditClick : undefined}>
                {icon}
              </IconButton>
              <Typography
                textAlign='center'
                style={{ flex: 1 }}
                onClick={
                  label === 'Edit'
                    ? handleEditClick
                    : label === 'Delete'
                      ? handleDeleteClick
                      : undefined
                }
              >
                {label}
              </Typography>
            </Stack>
          </MenuItem>
        ))}
      </Menu>
      <Grid container direction={'row'} spacing={4} alignItems={'center'}>
        <Grid item>
          <Avatar alt={user.username} src={avatar} sx={avatarStyle} />
        </Grid>
        <Grid item>
          <Grid container direction={'column'}>
            <Typography variant='subtitle1'>{user.username}</Typography>
            <Typography variant='subtitle2' gutterBottom>
              {user.email}
            </Typography>
            <Typography variant='subtitle1'>
              <strong>{user.role}</strong>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default UserSummaryCard;
