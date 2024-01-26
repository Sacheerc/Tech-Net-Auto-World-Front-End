import * as React from 'react';
import { DataGrid, GridCellParams, GridColDef } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import { Grid } from '@mui/material';

 export interface Row {
  // id: number | string;
  [key: string]: any;
}

interface CustomDataGridProps {
  columns: GridColDef[];
  data: Row[];
  id: string;
  deleteById?: (id:number|string)=> void;
  openEditModal?: (rowData: Row) => void;
}

const CustomDataGrid: React.FC<CustomDataGridProps> = ({
  columns,
  data,
  id,
  deleteById,
  openEditModal,
}) => {
  console.log(columns[0].field);
  const handleEdit = (id: number | string, rowData: Row) => {
    console.log(`Edit button clicked for ID: ${id}`);
    openEditModal && openEditModal(rowData);
  };

  const handleView = (id: number | string) => {
    console.log(`View button clicked for ID: ${id}`);
  };

  const handleDelete = (id: number | string) => {
    console.log(`Delete button clicked for ID: ${id}`);
    deleteById && deleteById(id);
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
          <IconButton onClick={() => handleEdit(params.id, params.row)}>
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
