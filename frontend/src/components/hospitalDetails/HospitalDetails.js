import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function BasicTable() {
  const [rows, setRows] = useState([]);
  useEffect(() => {
    // fetch('http://localhost:8000/api/hospitals')
    fetch('https://sa-hospital.onrender.com/api/hospitals')
      .then(response => response.json())
      .then(data => setRows(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []); 

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>No.</TableCell>
            <TableCell align="right">Date & Time</TableCell>
            <TableCell align="right">Hospital Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Address</TableCell>
            <TableCell align="right">Phone No.</TableCell>
            <TableCell align="right">City</TableCell>
            <TableCell align="right">State</TableCell>
            <TableCell align="right">Pincode</TableCell>
            <TableCell align="right">Hospital Registration Date</TableCell>
            <TableCell align="right">Hospital Registration Number</TableCell>
            <TableCell align="right">Emergency Ward Number</TableCell>
            <TableCell align="right">Numberof Ambulance </TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row,index) => (
            <TableRow
              key={index} // Using array index as the key
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