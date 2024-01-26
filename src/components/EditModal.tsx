import React, { useState } from 'react';
import { Modal, Paper, Grid, Typography, Button, TextField, Box, Stack, } from '@mui/material';
import InventoryService from '../services/InventoryService';
import { Row } from './CustomDataGrid';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

interface EditModalProps {
    isOpen: boolean;
    onClose: () => void;
    rowData: Row;
    updateData: () => void;
}

const EditModal: React.FC<EditModalProps> = ({
    isOpen,
    onClose,
    rowData,
    updateData,
}) => {
    const [editedData, setEditedData] = useState<Row>({ ...rowData });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setEditedData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSave = async () => {
        try {
            console.log('Edited data:', editedData);
            //const res = await InventoryService.add(editedData);
            updateData();
            onClose();
        } catch (error) {
            console.error('Error saving edited data:', error);
        }
    };

    const handleCancel = () => {
        onClose();
    };

    return (
        <Modal open={isOpen} onClose={onClose}>
            <Box sx={{ ...style }}>
                <Grid container spacing={3} p={3}>
                    <Grid item xs={12}>
                        <Typography variant='h6' gutterBottom>
                            Inventory Management - Edit New Item
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label='Code'
                            name='code'
                            value={editedData.code}
                            onChange={handleInputChange}
                            fullWidth
                            variant='standard'
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label='Item Name'
                            name='name'
                            value={editedData.name}
                            onChange={handleInputChange}
                            fullWidth
                            variant='standard'
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label='Description'
                            name='description'
                            value={editedData.description}
                            onChange={handleInputChange}
                            fullWidth
                            variant='standard'
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label='Quantity'
                            name='quantity'
                            type='number'
                            value={editedData.quantity}
                            onChange={handleInputChange}
                            fullWidth
                            variant='standard'
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label='Price'
                            name='price'
                            type='number'
                            value={editedData.price}
                            onChange={handleInputChange}
                            fullWidth
                            variant='standard'
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label='Location Code'
                            name='locationCode'
                            value={editedData.locationCode}
                            onChange={handleInputChange}
                            fullWidth
                            variant='standard'
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label='Country of Origin'
                            name='countryOfOrigin'
                            value={editedData.countryOfOrigin}
                            onChange={handleInputChange}
                            fullWidth
                            variant='standard'
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label='Brand'
                            name='brand'
                            value={editedData.brand}
                            onChange={handleInputChange}
                            fullWidth
                            variant='standard'
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Stack direction='row' spacing={2}>
                            <Grid item xs={6}>
                                <label htmlFor='image-input'>
                                    <Button component='span' variant='outlined'>
                                        Upload Image
                                    </Button>
                                </label>
                                <input
                                    type='file'
                                    accept='image/*'
                                    multiple
                                    id='image-input'
                                    //onChange={handleImageChange}
                                    style={{ display: 'none' }}
                                />
                            </Grid>
                            {/* {images.map((image, index) => (
                                <Grid
                                    container
                                    item
                                    key={index}
                                    direction={'column'}
                                    width={100}
                                >
                                    <Grid>
                                        <img
                                            src={URL.createObjectURL(image)}
                                            alt={`Preview ${index}`}
                                            width='100'
                                            height='100'
                                        />
                                    </Grid>
                                    <Grid>
                                        <Button
                                            variant='outlined'
                                            size='small'
                                            onClick={() => handleRemoveImage(index)}
                                            color='error'
                                        >
                                            Remove
                                        </Button>
                                    </Grid>
                                </Grid>
                            ))} */}
                        </Stack>
                    </Grid>
                    <Grid container item xs={12} justifyContent="flex-end" spacing={2} style={{ marginTop: 10 }}>
                        <Grid item>
                            <Button variant='outlined' onClick={handleCancel}>
                                Cancel
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button variant='contained' color='primary' onClick={handleSave}>
                                Save
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Modal>
    );
};

export default EditModal;
