import {
  Grid,
  Typography,
  Button,
  TextField,
  Paper,
  Stack,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import React from 'react';
import Vehicle from '../../Models/Vehicle';
import VehicleService from '../../services/VehicleService';
import { useNavigate } from 'react-router-dom';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ServiceRecordForm from '../../components/ServiceRecordForm';





const VehicleDetailsForm: React.FC<{ vehicle: Vehicle | null }> = (props) => {
  const navigate = useNavigate();
  const loadedVehicle = props.vehicle;
  console.log(loadedVehicle)
  const [formData, setFormData] = React.useState<Vehicle>(loadedVehicle ? loadedVehicle : {
    vehicleNo: '',
    model: '',
    color: '',
    ownerAddress: '',
    ownerNIC: '',
    ownerContact: '',
    ownerEmail: '',
    serviceRecords: [],
  });

  const [formErrors, setFormErrors] = React.useState<Record<string, string>>(
    {}
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSave = async () => {
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
      const vehicle: Vehicle = formData;
      const res = await VehicleService.add(vehicle);
      console.log(res);
      navigate('/vehiclemanagement');
    }
  };

  const handleCancel = () => {
    // Add your cancel logic here
    console.log('Form canceled');
  };

  return (

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
                InputProps={{
                  readOnly: loadedVehicle != null,
                }}
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
                InputProps={{
                  readOnly: loadedVehicle != null,
                }}
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
                InputProps={{
                  readOnly: loadedVehicle != null,
                }}
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
                InputProps={{
                  readOnly: loadedVehicle != null,
                }}
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                label='Owner NIC'
                name='ownerNIC'
                value={formData.ownerNIC}
                onChange={handleInputChange}
                fullWidth
                error={Boolean(formErrors.ownerNIC)}
                helperText={formErrors.ownerNIC}
                variant='standard'
                InputProps={{
                  readOnly: loadedVehicle != null,
                }}
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
                InputProps={{
                  readOnly: loadedVehicle != null,
                }}
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
                InputProps={{
                  readOnly: loadedVehicle != null,
                }}
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
      <Paper style={{ width: '100%', padding: 40 }}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>2024-01-07</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ServiceRecordForm serviceRecord={null}></ServiceRecordForm>
          </AccordionDetails>
        </Accordion>
      </Paper>
    </Grid>

  );
};

export default VehicleDetailsForm;
