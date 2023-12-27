import {
  Grid,
  Typography,
  Button,
  TextField,
  Paper,
  Stack,
} from '@mui/material';
import React from 'react';

const VehicleDetailsForm: React.FC = () => {
  const [formData, setFormData] = React.useState({
    vehicleNo: '',
    model: '',
    color: '',
    ownerAddress: '',
    ownerNIC: '',
    ownerContact: '',
    ownerEmail: ''
  });

  const [formErrors, setFormErrors] = React.useState<Record<string, string>>(
    {}
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSave = () => {
    // Validate form fields
    const errors: Record<string, string> = {};

    // Example: Check if a field is empty
    if (!formData.vehicleNo) {
      errors.vehicleNo = 'vehicleNo is required';
    }

    // Set errors if any
    setFormErrors(errors);

    // If there are no errors, proceed with saving the data
    if (Object.keys(errors).length === 0) {
      // Add your save logic here
      console.log('Form data:', formData);
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
                  label='Vehicle No'
                  name='vehicleNo'
                  value={formData.vehicleNo}
                  onChange={handleInputChange}
                  fullWidth
                  error={Boolean(formErrors.vehicleNo)}
                  helperText={formErrors.vehicleNo}
                  variant='standard'
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  label='Model'
                  name='model'
                  value={formData.model}
                  onChange={handleInputChange}
                  fullWidth
                  error={Boolean(formErrors.model)}
                  helperText={formErrors.model}
                  variant='standard'
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  label='Color'
                  name='color'
                  value={formData.color}
                  onChange={handleInputChange}
                  fullWidth
                  error={Boolean(formErrors.color)}
                  helperText={formErrors.color}
                  variant='standard'
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  label='Owner Address'
                  name='ownerAddress'
                  value={formData.ownerAddress}
                  onChange={handleInputChange}
                  fullWidth
                  error={Boolean(formErrors.ownerAddress)}
                  helperText={formErrors.ownerAddress}
                  variant='standard'
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  label='Owner NIC'
                  name='ownerNIC'
                  value={formData.ownerAddress}
                  onChange={handleInputChange}
                  fullWidth
                  error={Boolean(formErrors.ownerNIC)}
                  helperText={formErrors.ownerNIC}
                  variant='standard'
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  label='Owner Contact'
                  name='ownerContact'
                  value={formData.ownerContact}
                  onChange={handleInputChange}
                  fullWidth
                  error={Boolean(formErrors.ownerContact)}
                  helperText={formErrors.ownerContact}
                  variant='standard'
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  label='Owner Email'
                  name='ownerEmail'
                  value={formData.ownerEmail}
                  onChange={handleInputChange}
                  fullWidth
                  error={Boolean(formErrors.ownerEmail)}
                  helperText={formErrors.ownerEmail}
                  variant='standard'
                />
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

export default VehicleDetailsForm;
