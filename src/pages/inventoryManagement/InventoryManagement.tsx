import React, { useEffect, useState } from 'react';
import CustomDataGrid from '../../components/CustomDataGrid';
import { GridColDef } from '@mui/x-data-grid';
import { Grid, Typography, Button } from '@mui/material';

import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';
import InventoryService from '../../services/InventoryService';
import EditModal from '../../components/EditModal';
import { Row } from '../../components/CustomDataGrid';

const columns: GridColDef[] = [
  { field: 'code', headerName: 'Code' },
  { field: 'name', headerName: 'Item Name', width: 200 },
  { field: 'description', headerName: 'Item Description', width: 200 },
  { field: 'brand', headerName: 'Brand', width: 150 },
  { field: 'countryOfOrigin', headerName: 'Country of Origin', resizable: true, width: 180 },
  { field: 'receivedDate', headerName: 'Received Date', align: 'center', headerAlign: 'center', width: 120 },
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
  const [inventoryData, setInventoryData] = useState<any | null>(null);
  const [editModalOpen, setEditModalOpen] = useState<boolean>(false);
  const [selectedRowData, setSelectedRowData] = useState<Row | null>(null);

  const fetchData = async () => {
    try {
      const data = await InventoryService.getAll();
      setInventoryData(data);
      console.log(inventoryData);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const openEditModal = (rowData: Row) => {
    setEditModalOpen(true);
    setSelectedRowData(rowData);
  };

  const closeEditModal = () => {
    setEditModalOpen(false);
    setSelectedRowData(null);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deleteById = async (id: string | number) => {
    console.log(`Delete dunction in inventory management for ID: ${id}`);
    await InventoryService.deleteByCode(id);
    await fetchData();
    console.log(`Successfully deleted ID: ${id}`);
  };

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
            onClick={() => navigate('/inventorymanagement/add')}
          >
            Add Item
          </Button>
        </Grid>
      </Grid>
      <Grid item style={{ width: '100%' }}>
        {inventoryData && (
          <>
            <CustomDataGrid
              columns={columns}
              data={inventoryData.inventories}
              id='code'
              deleteById={deleteById}
              openEditModal={openEditModal}
            />
            {selectedRowData && (
              <EditModal
                rowData={selectedRowData}
                isOpen={editModalOpen}
                onClose={closeEditModal}
                updateData={fetchData}
              />
            )}
          </>
        )}
      </Grid>
    </Grid>
  );
};

export default InventoryManagement;
