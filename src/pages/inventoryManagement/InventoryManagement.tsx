import React from 'react';
import CustomDataGrid from '../../components/CustomDataGrid';
import { GridColDef } from '@mui/x-data-grid';
import { Grid, Typography, Button } from '@mui/material';

import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';

const columns: GridColDef[] = [
  { field: 'code', headerName: 'Code' },
  { field: 'itemName', headerName: 'ItemName', width: 200 },
  { field: 'category', headerName: 'Category', width: 100 },
  { field: 'brand', headerName: 'Brand', width: 150 },
  {
    field: 'countryOfOrigin',
    headerName: 'Country of Origin',
    resizable: true,
    width: 180,
  },
  {
    field: 'receivedDate',
    headerName: 'receivedDate',
    align: 'center',
    headerAlign: 'center',
    width: 120,
  },
];

const data = [
  {
    id: 'AB001',
    code: 'AB001',
    itemName: 'Side Mirror',
    category: 'External',
    brand: 'Tesla',
    countryOfOrigin: 'Baveria',
    receivedDate: '22-11-2023',
  },
  {
    id: 'AB002',
    code: 'AB002',
    itemName: 'Tire',
    category: 'External',
    brand: 'Dunlope',
    countryOfOrigin: 'USA',
    receivedDate: '22-11-2023',
  },
  {
    id: 'AB003',
    code: 'AB003',
    itemName: 'Carpet',
    category: 'Internal',
    brand: 'BMW',
    countryOfOrigin: 'United Kingdom',
    receivedDate: '22-11-2023',
  },
  {
    id: 'AB004',
    code: 'AB004',
    itemName: 'Door Knob',
    category: 'Internal',
    brand: 'Ferari',
    countryOfOrigin: 'Sri Lanka',
    receivedDate: '22-11-2023',
  },
  {
    id: 'AB005',
    code: 'AB005',
    itemName: 'Signal Light',
    category: 'External',
    brand: 'Susuki',
    countryOfOrigin: 'Japan',
    receivedDate: '22-11-2023',
  },
  {
    id: 'AB006',
    code: 'AB006',
    itemName: 'Break Oil',
    category: 'Internal',
    brand: 'Jaguar',
    countryOfOrigin: 'Japan',
    receivedDate: '22-11-2023',
  },
  {
    id: 'AB007',
    code: 'AB007',
    itemName: 'Mount',
    category: 'Repair',
    brand: 'Benz',
    countryOfOrigin: 'India',
    receivedDate: '22-11-2023',
  },
];

const InventoryManagement: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Grid container xs={12} spacing={3} style={{ marginTop: 15 }}>
      <Grid item container direction={'row'}>
        <Grid xs={6}>
          <Typography variant='h6' gutterBottom>
            Inventory Management
          </Typography>
        </Grid>
        <Grid xs={6} display={'flex'} justifyContent={'flex-end'}>
          <Button
            variant='outlined'
            endIcon={<AddIcon />}
            onClick={() => navigate('/vehiclemanagement/add')}
          >
            Add Item
          </Button>
        </Grid>
      </Grid>
      <Grid item style={{ width: '100%' }}>
        <CustomDataGrid columns={columns} data={data} />
      </Grid>
    </Grid>
  );
};

export default InventoryManagement;
