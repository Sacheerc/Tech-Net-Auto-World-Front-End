import { Grid, Typography, Button, TextField, Paper, Input, Stack, } from '@mui/material';
import React from 'react';
import CustomDataGrid from '../../components/CustomDataGrid';
import InventoryService from '../../services/InventoryService';
import Inventory from '../../Models/Inventory';
import { useNavigate } from 'react-router-dom';

const InventoryItemForm: React.FC<{ inventory: Inventory | null }> = (props) => {
  const [images, setImages] = React.useState<File[]>([]);
  const navigate = useNavigate();
  const loadedInventory = props.inventory;
  const [formData, setFormData] = React.useState<Inventory>(loadedInventory ? loadedInventory : {
    code: '',
    name: '',
    description: '',
    quantity: 0,
    price: 0,
    locationCode: '',
    countryOfOrigin: '',
    brand: '',
    usedInventoryItems: [],
    inventoryImages: []
  });

  const [formErrors, setFormErrors] = React.useState<Record<string, string>>(
    {}
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files;

    if (selectedFiles) {
      const newImages: File[] = Array.from(selectedFiles);
      setImages((prevImages) => [...prevImages, ...newImages]);
    }
  };

  const handleRemoveImage = (index: number) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const handleSave = async () => {
    // Validate form fields
    const errors: Record<string, string> = {};

    // Example: Check if a field is empty
    if (!formData.name) {
      errors.name = 'Item name is required';
    }

    // Set errors if any
    setFormErrors(errors);

    // If there are no errors, proceed with saving the data
    if (Object.keys(errors).length === 0) {
      // Add your save logic here
      console.log('Form data:', formData);
      const inventory: Inventory = formData;
      const res = await InventoryService.add(inventory);
      navigate('/inventorymanagement');
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
          Inventory Management - Add New Item
        </Typography>
      </Grid>
      <Grid item style={{ width: '100%' }}>
        <Paper style={{ width: '100%', padding: 40 }}>
          <form>
            <Grid container spacing={4}>
              <Grid item xs={2}>
                <TextField
                  label='Code'
                  name='code'
                  value={formData.code}
                  onChange={handleInputChange}
                  fullWidth
                  error={Boolean(formErrors.id)}
                  helperText={formErrors.id}
                  variant='standard'
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  label='Item Name'
                  name='name'
                  value={formData.name}
                  onChange={handleInputChange}
                  fullWidth
                  error={Boolean(formErrors.name)}
                  helperText={formErrors.name}
                  variant='standard'
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  label='Description'
                  name='description'
                  value={formData.description}
                  onChange={handleInputChange}
                  fullWidth
                  error={Boolean(formErrors.description)}
                  helperText={formErrors.description}
                  variant='standard'
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  label='Quantity'
                  name='quantity'
                  type='number'
                  value={formData.quantity}
                  onChange={handleInputChange}
                  fullWidth
                  error={Boolean(formErrors.quantity)}
                  helperText={formErrors.quantity}
                  variant='standard'
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  label='Price'
                  name='price'
                  type='number'
                  value={formData.price}
                  onChange={handleInputChange}
                  fullWidth
                  error={Boolean(formErrors.price)}
                  helperText={formErrors.price}
                  variant='standard'
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  label='Location Code'
                  name='locationCode'
                  value={formData.locationCode}
                  onChange={handleInputChange}
                  fullWidth
                  error={Boolean(formErrors.locationCode)}
                  helperText={formErrors.locationCode}
                  variant='standard'
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  label='Country of Origin'
                  name='countryOfOrigin'
                  value={formData.countryOfOrigin}
                  onChange={handleInputChange}
                  fullWidth
                  error={Boolean(formErrors.countryOfOrigin)}
                  helperText={formErrors.countryOfOrigin}
                  variant='standard'
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  label='Brand'
                  name='brand'
                  value={formData.brand}
                  onChange={handleInputChange}
                  fullWidth
                  error={Boolean(formErrors.brand)}
                  helperText={formErrors.brand}
                  variant='standard'
                />
              </Grid>
              <Grid item xs={12}>
                <Stack direction='row' spacing={2}>
                  <Grid item xs={2}>
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
                      onChange={handleImageChange}
                      style={{ display: 'none' }}
                    />
                  </Grid>
                  {images.map((image, index) => (
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
                  ))}
                </Stack>
              </Grid>
              {/* Add a section for multiple images */}
              {/* For multiple images, you might want to use a file input */}
              {/* <Grid item xs={6}>
                <input type='file' accept='image/*' multiple />
              </Grid> */}
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

export default InventoryItemForm;
