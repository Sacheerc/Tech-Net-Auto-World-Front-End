import * as React from 'react';
import { DataGrid, GridCellParams, GridColDef } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import { Grid } from '@mui/material';

interface Row {
  // id: number | string;
  [key: string]: any;
}

interface CustomDataGridProps {
  columns: GridColDef[];
  data: Row[];
  id: string;
}

const CustomDataGrid: React.FC<CustomDataGridProps> = ({
  columns,
  data,
  id,
}) => {
  console.log(columns[0].field);
  const handleEdit = (id: number | string) => {
    console.log(`Edit button clicked for ID: ${id}`);
  };

  const handleView = (id: number | string) => {
    console.log(`View button clicked for ID: ${id}`);
  };

  const handleDelete = (id: number | string) => {
    console.log(`Delete button clicked for ID: ${id}`);
  };

  // Add custom actions column to the provided columns
  const columnsWithActions: GridColDef[] = [
    ...columns,
    {
      field: 'actions',
      headerName: 'Actions',
      headerAlign: 'right',
      flex: 1,
      align: 'right',
      renderCell: (params: GridCellParams<Row>) => (
        <div>
          <IconButton onClick={() => handleEdit(params.id)}>
            <EditIcon />
          </IconButton>
          <IconButton color='info' onClick={() => handleView(params.id)}>
            <VisibilityIcon />
          </IconButton>
          <IconButton color='error' onClick={() => handleDelete(params.id)}>
            <DeleteIcon />
          </IconButton>
        </div>
      ),
    },
  ];

  return (
    <Grid item container>
      <DataGrid
        rows={data}
        columns={columnsWithActions}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        autoHeight
        getRowId={(row) => row[id]}
      />
    </Grid>
  );
};

export default CustomDataGrid;
