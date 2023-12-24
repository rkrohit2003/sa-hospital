import * as React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Footer } from '../footer/Footer';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useHospitalEmail } from '../../hospitalEmailContext';
const imageUrl = require('../../image/ssml.png');

export default function SignInForm({ setIsLoggedIn }) {
  const navigate=useNavigate();
  const { setHospitalEmail } = useHospitalEmail();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const hospitalName = data.get('hospitalName');
    const emailId = data.get('emailId');
    const password = data.get('password');

    try {
      const response = await axios.post('http://localhost:8000/api/login', {
        hospitalName,
        emailId,
        password
      });

      const isLoggedIn = response.data !== 0;

      if (isLoggedIn) {
        setIsLoggedIn(isLoggedIn);
        localStorage.setItem('hospitalName', hospitalName.toString());
        setHospitalEmail(emailId);
        localStorage.setItem('hospitalEmail', emailId.toString());
        navigate('/photo-capture');
      } else {
        window.alert('Incorrect Hospital Name or Email or password');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <React.Fragment>
      {/* Container with heading and paragraph */}
      <Grid container xs={12} sm={8} md={7} spacing={3} sx={{ paddingTop: 3, paddingLeft: 2 }} component="form" onSubmit={handleSubmit}>
        <Grid container xs={12} sx={{ padding: 2, alignItems: 'center' }}>
          {/* Logo and buttons */}
          <Grid item xs={3}>
            <img src={imageUrl} alt="Logo" height="100" />
          </Grid>
          <Grid item xs={2} />
          <Grid item xs={3} sx={{ textAlign: 'center' }}>
            <Link to='/' style={{ color: 'lightgray', fontSize: 24, textDecoration: 'none' }}> Sign Up / </Link>
            <Link style={{ color: 'black', fontSize: 24, textDecoration: 'none' }}>Login</Link>
          </Grid>
        </Grid>

        {/* Heading and paragraph */}
        <Grid item xs={12} sx={{ mt: 3 }}>
          <Typography variant="h4">Welcome to Sicu-aura</Typography>
          <Typography variant="body1">Your one-stop safety solutions using innovative technologies</Typography>
        </Grid>

        {/* Form */}
        <Grid item xs={12}>
          <TextField
            required
            id="hospitalName"
            name="hospitalName"
            label="Hospital Name"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="emailId"
            name="emailId"
            label="Email ID"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="password"
            name="password"
            label="Password"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="specialCode"
            name="specialCode"
            label="Special Code"
            fullWidth
            variant="standard"
          />
        </Grid>
      <Grid item xs={12} sm={12}>
        <Typography variant="body2" align="center" sx={{ mt: 5 }} >
          <Button type="submit" variant="contained">
            Sign In
          </Button>
    </Typography>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Footer sx={{ mt: 5 }} />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
