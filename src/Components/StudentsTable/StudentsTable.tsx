import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { IStudentsData } from '../../Interfaces';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) => `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

type Props = {
  rows: IStudentsData[];
};

const StudentsTable = ({ rows }: Props) => {
  return (
    <div style={{ height: 400, width: '100%' }}>
      {/*  Using MUI Grid Component We can use any grid Component here  */}
      <DataGrid
        rows={rows}
        columns={columns}
        getRowId={row => row?.id || 0}
        initialState={{ pagination: { paginationModel: { page: 0, pageSize: 5 } } }}
        pageSizeOptions={[5, 10]}
      />
    </div>
  );
};

export default StudentsTable;
