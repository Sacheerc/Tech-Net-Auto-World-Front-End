import * as React from 'react';
import { DataGrid, GridCellParams, GridColDef, GridRowModel } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import { Grid } from '@mui/material';

declare module '@mui/x-data-grid' {
  interface FooterPropsOverrides {
    total: number;
  }
}

export interface Row {
  // id: number | string;
  [key: string]: any;
}

interface CustomDataGridProps {
  columns: GridColDef[];
  data: Row[];
  id: string;
  hideFooter?: boolean;
  deleteById?: (id: number | string) => void;
  openEditModal?: (rowData: Row) => void;
  updateRow?: (newRow: GridRowModel) => void;
  customFooter?: React.ComponentType<any>;
  customFooterPros?: any;
}

const CustomDataGrid: React.FC<CustomDataGridProps> = ({
  columns,
  data,
  id,
  hideFooter,
  deleteById,
  openEditModal,
  updateRow,
  customFooter,
  customFooterPros
}) => {

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


  const processRowUpdate = React.useCallback(
    (newRow: GridRowModel, oldRow: GridRowModel) =>
      new Promise<GridRowModel>((resolve, reject) => {
        resolve(newRow)
        updateRow && updateRow(newRow);
      }),
    [updateRow],
  );

  // Add custom actions column to the provided columns
  const columnsWithActions: GridColDef[] = [
    ...columns,
    {
      field: 'actions',
      headerName: 'Actions',
      headerAlign: 'right',
      width: 200,
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

  const totalWidth = columns.reduce((acc, column) => acc + (column.width || 100), 0);
  console.log(totalWidth)

  return (
    <Grid width={totalWidth + 250}>
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
        processRowUpdate={processRowUpdate}
        pageSizeOptions={[5]}
        autoHeight
        getRowId={(row) => row[id]}
        hideFooter={hideFooter}
        slots={{
          ...(customFooter && { footer: customFooter }),
        }}
        slotProps={{
          footer: {
            ...(customFooterPros)
          },
        }}
      />
    </Grid>
  );
};

export default CustomDataGrid;
