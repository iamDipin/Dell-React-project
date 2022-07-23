import * as React from 'react';
import {Link} from "react-router-dom"
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Grid } from '@mui/material';
import { ThemeTitle } from '../../components/Title/Title';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'Request ID', width: 120, renderCell: (params) => 
      <Link to={`${params.row.id}`}>{params.row.id}</Link>,
   },
  { field: 'firstName', headerName: 'First name', width: 130 },
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
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  { id: 112345678, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 212345678, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 312345678, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 412345678, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 512345678, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 612345678, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 712345678, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 812345678, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 912345678, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function RequestList() {
  return (
    <Grid container  sx={{marginTop:'60px'}}>
        <Grid item   sx={{marginLeft:'500px',marginBottom:'20px'}}>
        <ThemeTitle>Request Details</ThemeTitle>
        </Grid>
        <Grid item  height={400} width='100%' >

      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </Grid>
    </Grid>
  );
}
