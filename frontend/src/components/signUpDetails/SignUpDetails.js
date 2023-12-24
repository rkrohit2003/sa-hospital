import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import axios from 'axios';
import { Footer } from '../footer/Footer';
import { styled } from '@mui/material/styles';
import { Link, useNavigate } from 'react-router-dom'
const imageUrl = require('../../image/ssml.png');

export default function SignUpForm() {
  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });
  
  const [selectedFile, setSelectedFile] = useState(null);
  const [hospitalName, setHospitalName] = useState('');
  const [emailId, setEmailId] = useState('');
  const [password, setPassword] = useState('');
  const [cPassword, setCPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [regNum, setRegNum] = useState('');
  const [state, setState] = useState('');
  const [wardNum, setWardNum] = useState('');
  const [pinCode, setPinCode] = useState('');
  // const [regCertificate, setRegCertificate] = useState('');
  const [regDate, setRegDate] = useState('');
  const [ambNum, setAmbNum] = useState('');

  const navigate=useNavigate();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(cPassword!==password){
      window.alert("Password and confirm password are not matching");
      return;
    }
    let formData = {
      hospitalName,
      emailId,
      password,
      phone,
      address,
      city,
      regNum,
      state,
      wardNum,
      pinCode,
      regDate,
      ambNum
    };
    // const formDataObject = new FormData();
    // formDataObject.append('hospitalName', hospitalName);
    // formDataObject.append('emailId', emailId);
    // formDataObject.append('password', password);
    // formDataObject.append('phone', phone);
    // formDataObject.append('address', address);
    // formDataObject.append('city', city);
    // formDataObject.append('regNum', regNum);
    // formDataObject.append('state', state);
    // formDataObject.append('wardNum', wardNum);
    // formDataObject.append('pinCode', pinCode);
    // formDataObject.append('regDate', regDate);
    // formDataObject.append('ambNum', ambNum);
    // formDataObject.append('regCertificate', selectedFile);
    // console.log(formDataObject)
    try {
      const response = await axios.post('https://sa-hospital.onrender.com/api/hospital', formData,{
        headers: {
          'Content-Type': 'multipart/form-data',
        }});
      console.log('Added hospital:', response.data);
      navigate("/signin");
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <React.Fragment>
      <Grid container xs={12} sm={8} md={7} spacing={3} sx={{ paddingTop: 3, paddingLeft: 2 }} component="form" onSubmit={handleSubmit} enctype="multipart/form-data">
        <Grid container xs={12} sx={{ padding: 2, alignItems: 'center' }}>
        {/* Logo on the left */}
        <Grid item xs={3}>
          <img src={imageUrl} alt="Logo" height="100" />
        </Grid>
        {/* Empty grid item to push buttons to the center */}
        <Grid item xs={2} />
        {/* Sign-Up and Login buttons in the center */}
        <Grid item xs={3} sx={{ textAlign: 'center' }}>
          {/* <Button sx={{ color: 'black', fontSize: 21 }}>
            Sign Up
          </Button> */}
          <Link style={{ color: 'black', fontSize: 24, textDecoration: 'none' }}> Sign Up </Link>
          <Link to='/signin' style={{ color: 'lightgray', fontSize: 24, textDecoration: 'none' }}>/ Login</Link>
          {/* <Button sx={{ color: 'lightgray', fontSize: 21 }} onClick={Navigate('/signin')}>
            / Login
          </Button> */}
        </Grid>
      </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="hospitalName"
            name="hospitalName"
            label="Hospital Name"
            fullWidth
            variant="standard"
            value={hospitalName}
            onChange={(e) => setHospitalName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="emailId"
            name="emailId"
            label="Email ID"
            fullWidth
            variant="standard"
            value={emailId}
            onChange={(e) => setEmailId(e.target.value)}
            type='email'
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="address"
            name="address"
            label="Address"
            fullWidth
            variant="standard"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="phone"
            name="phone"
            label="Phone Number"
            fullWidth
            variant="standard"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="tel"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            variant="standard"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="regNum"
            name="regNum"
            label="Hospital Registration Number"
            fullWidth
            variant="standard"
            value={regNum}
            onChange={(e) => setRegNum(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="state"
            name="state"
            label="State"
            fullWidth
            variant="standard"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="wardNum"
            name="wardNum"
            label="Emergency Ward Number"
            fullWidth
            variant="standard"
            value={wardNum}
            onChange={(e) => setWardNum(e.target.value)}
            type="number"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="pinCode"
            name="pinCode"
            label="Pincode"
            fullWidth
            variant="standard"
            value={pinCode}
            onChange={(e) => setPinCode(e.target.value)}
            type="number"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="regCertificate"
            name="regCertificate"
            label="Registration certificate upload"
            fullWidth
            variant="standard"
            value={selectedFile ? selectedFile.name : ''}
          disabled
          />
          <Button component="label" variant="contained" sx={{ mt: 1 }}>
  Choose
  <VisuallyHiddenInput type="file" onChange={handleFileChange} />
</Button>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="regDate"
            name="regDate"
            label="Hospital Registration Date"
            fullWidth
            variant="standard"
            value={regDate}
            onChange={(e) => setRegDate(e.target.value)}
            type="date"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="password"
            name="password"
            label="Create Password"
            fullWidth
            variant="standard"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="ambNum"
            name="ambNum"
            label="Number of ambulance available"
            fullWidth
            variant="standard"
            value={ambNum}
            onChange={(e) => setAmbNum(e.target.value)}
            type="number"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="cPassword"
            name="cPassword"
            label="Confirm Password"
            fullWidth
            variant="standard"
            value={cPassword}
            onChange={(e) => setCPassword(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
        <Typography variant="body2" align="center" sx={{ mt: 5 }} >
        <Button type="submit" variant="contained">
            Sign Up
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
