import React from 'react';
import CustomDataGrid from '../../components/CustomDataGrid';
import { GridColDef } from '@mui/x-data-grid';

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
  return (
    <>
      <h1>Inventory</h1>
      <br />
      <CustomDataGrid columns={columns} data={data} />
    </>
  );
};

export default InventoryManagement;
