import React, { useEffect, useState } from 'react';
import CustomDataGrid from '../../components/CustomDataGrid';
import { GridColDef } from '@mui/x-data-grid';
import { Button, Grid, Paper, Typography } from '@mui/material';
import VehicleService from '../../services/VehicleService';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';

const columns: GridColDef[] = [
  { field: 'vehicleNo', headerName: 'Vehicle No', width: 120 },
  { field: 'model', headerName: 'Model', width: 110 },
  { field: 'color', headerName: 'Color' },
  { field: 'ownerNIC', headerName: 'Owner NIC', width: 120 },
  { field: 'ownerContact', headerName: 'Owner Contact', width: 150 },
];

const VehicleManagement: React.FC = () => {
  const navigate = useNavigate();
  const [vehicleData, setVehicleData] = useState<any | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await VehicleService.getAll();
        setVehicleData(data);
        console.log(vehicleData);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <Grid container spacing={3} style={{ marginTop: 20 }}>
      <Grid item container direction={'row'}>
        <Grid item xs={6}>
          <Typography variant='h6' gutterBottom>
            Vehicle Management
          </Typography>
        </Grid>
        <Grid item xs={6} display={'flex'} justifyContent={'flex-end'}>
          <Button
            variant='outlined'
            endIcon={<AddIcon />}
            onClick={() => navigate('/vehiclemanagement/add')}
          >
            Add Vehicle
          </Button>
        </Grid>
      </Grid>
      <Grid item style={{ width: '100%' }}>
        {vehicleData ? (
          <CustomDataGrid
            columns={columns}
            data={vehicleData.vehicles}
            id='vehicleNo'
          />
        ) : (
          <></>
        )}
      </Grid>
    </Grid>
  );
};

export default VehicleManagement;
