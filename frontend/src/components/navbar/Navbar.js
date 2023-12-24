import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import { useNavigate } from 'react-router-dom';
const imageUrl = require('../../image/sa.png');

export default function Navbar({ setIsLoggedIn }) {
  const navigate=useNavigate();
  const imageUrl2=localStorage.getItem('capturedImage');
  const Hospital_Name=localStorage.getItem('hospitalName');
  const handleLogout = () => {
    localStorage.setItem('hospitalEmail', '');
    localStorage.setItem('hospitalName', '');
    setIsLoggedIn(false);
    navigate("/");
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#201A31' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <img src={imageUrl} alt="Logo" height="80" />
          </Typography>
          <IconButton sx={{ p: 0, marginRight: 2 }}>
                <Avatar alt="Remy Sharp" src={imageUrl2} />
              </IconButton>
              <span style={{ marginRight: 5 }}>{Hospital_Name}</span>
          <Button onClick={handleLogout} color="inherit">Log Out</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}