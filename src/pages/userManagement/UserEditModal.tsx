import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, } from '@mui/material';
import User from '../../Models/vm/UserVm';

interface UserEditModalProps {
    user: User;
    open: boolean;
    onClose: () => void;
    onSave: (editedUser: User) => void;
}

const UserEditModal: React.FC<UserEditModalProps> = ({
    user,
    open,
    onClose,
    onSave,
}) => {
    const [editedUser, setEditedUser] = useState<User>(user);

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
        fieldName: string
      ) => {
        const { value } = e.target;
        setEditedUser((prevUser) => ({ ...prevUser, [fieldName]: value }));
      };      

    const handleSave = () => {
        onSave(editedUser);
        onClose();
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>User Management - Edit User</DialogTitle>
            <DialogContent>
                <TextField
                    label='Username'
                    name='username'
                    value={editedUser.username}
                    onChange={(e) => handleInputChange(e, 'username')}
                    fullWidth
                    variant='standard'
                    style={{ marginBottom: 16 }}
                />
                <TextField
                    label='Role'
                    name='role'
                    value={editedUser.role}
                    onChange={(e) => handleInputChange(e, 'role')}
                    fullWidth
                    variant='standard'
                    style={{ marginBottom: 16 }}
                />
                <TextField
                    label='Email'
                    name='email'
                    value={editedUser.email}
                    onChange={(e) => handleInputChange(e, 'email')}
                    fullWidth
                    variant='standard'
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button onClick={handleSave} color='primary'>
                    Save
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default UserEditModal;
