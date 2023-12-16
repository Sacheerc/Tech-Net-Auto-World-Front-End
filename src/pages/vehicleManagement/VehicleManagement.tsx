import React from 'react';
import CustomDataGrid from '../../components/CustomDataGrid';
import { GridColDef } from '@mui/x-data-grid';
import { Button, Grid, Paper, Typography } from '@mui/material';

import AddIcon from '@mui/icons-material/Add';

const columns: GridColDef[] = [
  { field: 'vehicleNo', headerName: 'Vehicle No', width: 120 },
  { field: 'vehicle', headerName: 'Vehicle', width: 100 },
  { field: 'model', headerName: 'Model', width: 110 },
  { field: 'color', headerName: 'Color' },
  {
    field: 'inTime',
    headerName: 'In Time',
    width: 180,
  },
  {
    field: 'outTime',
    headerName: 'Out Time',
    width: 180,
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 120,
  },
];

const data = [
  {
    id: 'CAQ-6219',
    vehicleNo: 'CAQ-6219',
    vehicle: 'Toyota Prius',
    model: 'Cargo Car',
    color: 'Red',
    inTime: '22-11-2023 09.45 AM',
    outTime: '22-11-2023 09.45 AM',
    status: 'Complete',
  },
  {
    id: 'CBQ-6218',
    vehicleNo: 'CBQ-6218',
    vehicle: 'Toyota Prius',
    model: 'Cargo Car',
    color: 'Black',
    inTime: '22-11-2023 09.45 AM',
    outTime: '22-11-2023 09.45 AM',
    status: 'In Progress',
  },
  {
    id: 'CAR-6219',
    vehicleNo: 'CAR-6219',
    vehicle: 'Toyota Prius',
    model: 'Cargo Car',
    color: 'Red',
    inTime: '22-11-2023 09.45 AM',
    outTime: '22-11-2023 09.45 AM',
    status: 'Canceled',
  },
  {
    id: 'CAQ-6220',
    vehicleNo: 'CAQ-6220',
    vehicle: 'Toyota Prius',
    model: 'Cargo Car',
    color: 'Black',
    inTime: '22-11-2023 09.45 AM',
    outTime: '22-11-2023 09.45 AM',
    status: 'Completed',
  },
];

const VehicleManagement: React.FC = () => {
  return (
    <Grid container xs={12} spacing={3} style={{ marginTop: 20 }}>
      <Grid item container direction={'row'}>
        <Grid xs={6}>
          <Typography variant='h6' gutterBottom>
            Vehicle Management
          </Typography>
        </Grid>
        <Grid xs={6} display={'flex'} justifyContent={'flex-end'}>
          <Button variant='outlined' endIcon={<AddIcon />}>
            Add Vehicle
          </Button>
        </Grid>
      </Grid>
      <Grid item style={{ width: '100%' }}>
        <CustomDataGrid columns={columns} data={data} />
      </Grid>
    </Grid>
  );
};

export default VehicleManagement;
