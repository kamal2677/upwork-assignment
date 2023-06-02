import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { IStudentsData } from '../../Interfaces';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Student Name', width: 130 },
  { field: 'class', headerName: 'Class', width: 130 },
  {
    field: 'schoolName',
    headerName: 'School Name',
    width: 160,
    valueGetter: (params: GridValueGetterParams) => params.row.school?.name || '',
  },
  {
    field: 'schoolContactNo',
    headerName: 'School Address',
    width: 160,
    valueGetter: (params: GridValueGetterParams) => params.row.school?.address || '',
  },
  {
    field: 'legalGuardian',
    headerName: 'Legal Guardian Name',
    width: 180,
    valueGetter: (params: GridValueGetterParams) => params.row.legalGuardian?.name || '',
  },
  {
    field: 'legalGuardianRelation',
    headerName: 'Legal Guardian Relation',
    width: 190,
    valueGetter: (params: GridValueGetterParams) => params.row.legalGuardian?.relation || '',
  },
  {
    field: 'legalGuardianContactNo',
    headerName: 'Legal Guardian Contact No',
    width: 190,
    valueGetter: (params: GridValueGetterParams) => params.row.legalGuardian?.contactNo || '',
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
