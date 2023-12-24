import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { IconButton, Toolbar, Tooltip, Typography } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';

export default function BasicTable() {
  const [rows, setRows] = useState([]);
  useEffect(() => {
    fetch('https://sa-hospital.onrender.com/api/hospitals')
      .then(response => response.json())
      .then(data => setRows(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []); 

  return (
    <TableContainer component={Paper}>
      <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 }
      }}
    >
      <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Hospital Registrations
        </Typography>
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
        </Toolbar>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
            <Typography variant="subtitle1" fontWeight="bold">
                No.
              </Typography>
            </TableCell>
            <TableCell align="right">
              <Typography variant="subtitle1" fontWeight="bold">
                Date & Time
              </Typography>
              </TableCell>
            <TableCell align="right">
              <Typography variant="subtitle1" fontWeight="bold">
                Hospital Name
              </Typography>
              </TableCell>
            <TableCell align="right">
              <Typography variant="subtitle1" fontWeight="bold">
                Email
              </Typography>
              </TableCell>
            <TableCell align="right">
              <Typography variant="subtitle1" fontWeight="bold">
                Address
              </Typography>
              </TableCell>
            <TableCell align="right">
              <Typography variant="subtitle1" fontWeight="bold">
                Phone No.
              </Typography>
              </TableCell>
            <TableCell align="right">
              <Typography variant="subtitle1" fontWeight="bold">
                City
              </Typography>
              </TableCell>
            <TableCell align="right">
              <Typography variant="subtitle1" fontWeight="bold">
                State
              </Typography>
              </TableCell>
            <TableCell align="right">
              <Typography variant="subtitle1" fontWeight="bold">
                Pincode
              </Typography>
              </TableCell>
            <TableCell align="right">
              <Typography variant="subtitle1" fontWeight="bold">
                Hospital Registration Date
              </Typography>
              </TableCell>
            <TableCell align="right">
              <Typography variant="subtitle1" fontWeight="bold">
                Hospital Registration Number
              </Typography>
              </TableCell>
            <TableCell align="right">
              <Typography variant="subtitle1" fontWeight="bold">
                Emergency Ward Number
              </Typography>
              </TableCell>
            <TableCell align="right">
              <Typography variant="subtitle1" fontWeight="bold">
                Number of Ambulance
              </Typography>
               </TableCell>
            <TableCell align="right">
              <Typography variant="subtitle1" fontWeight="bold">
                Status
              </Typography>
              </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row,index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {index + 1}
              </TableCell>
              <TableCell align="right">{row.signupDate}</TableCell>
              <TableCell align="right">{row.hospitalName}</TableCell>
              <TableCell align="right">{row.emailId}</TableCell>
              <TableCell align="right">{row.address}</TableCell>
              <TableCell align="right">{row.phone}</TableCell>
              <TableCell align="right">{row.city}</TableCell>
              <TableCell align="right">{row.state}</TableCell>
              <TableCell align="right">{row.pinCode}</TableCell>
              <TableCell align="right">{row.regDate}</TableCell>
              <TableCell align="right">{row.regNum}</TableCell>
              <TableCell align="right">{row.wardNum}</TableCell>
              <TableCell align="right">{row.ambNum}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}