// import React, { useRef, useState } from 'react';
// import Webcam from 'react-webcam';
// import { Link } from 'react-router-dom';

// const PhotoCapturePage = () => {
//   const webcamRef = useRef(null);
//   const [capturedImage, setCapturedImage] = useState(null);

//   const capturePhoto = () => {
//     // Capture the photo using the webcam reference
//     const imageSrc = webcamRef.current.getScreenshot();
//     setCapturedImage(imageSrc);
//   };

//   const retakePhoto = () => {
//     setCapturedImage(null);
//   };

//   return (
//     <div>
//       {capturedImage ? (
//         // Show the captured image along with "Retake" and "Continue" buttons
//         <div>
//           <img src={capturedImage} alt="Captured" />
//           <Link style={{ textDecoration: 'none' }}>
//             <button onClick={retakePhoto}>Retake</button>
//           </Link>
//           <Link to="/" style={{ textDecoration: 'none' }}>
//             <button>Continue</button>
//           </Link>
//         </div>
//       ) : (
//         // Show the webcam component and "Capture Photo" button
//         <div>
//           <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
//           <button onClick={capturePhoto}>Capture Photo</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PhotoCapturePage;

import * as React from 'react';
import { useRef, useState } from 'react';
import Webcam from 'react-webcam';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Footer } from '../footer/Footer';
import { Link, useNavigate } from 'react-router-dom';
const imageUrl = require('../../image/ssml.png');

export default function PhotoCapturePage() {
  const navigate=useNavigate();
    const webcamRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);

  const capturePhoto = () => {
    // Capture the photo using the webcam reference
    const imageSrc = webcamRef.current.getScreenshot();
    setCapturedImage(imageSrc);
    localStorage.setItem('capturedImage', imageSrc);
  };

  const retakePhoto = () => {
    setCapturedImage(null);
  };

  return (
    <React.Fragment>
      {/* Container with heading and paragraph */}
      <Grid container xs={12} sm={8} md={7} spacing={3} sx={{ paddingTop: 3, paddingLeft: 2 }}>
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
          <Typography variant="h4">Please capture your face to continue</Typography>
          <Typography variant="body1">Please capture your face to continue</Typography>
        </Grid>
        <div>
       {capturedImage ? (
        <Grid item xs={12} sm={12} sx={{ paddingTop: 3, paddingLeft: 6 }}>
        <img src={capturedImage} alt="Captured" />
      <Typography variant="body2" align="center" sx={{ mt: 5 }} >
        <Button onClick={retakePhoto} variant="contained" sx={{marginRight: 2}}>
          Retake
        </Button>
        <Link to="/hospital" style={{ textDecoration: 'none' }}>
        <Button variant="contained">
          Continue
        </Button></Link>
  </Typography>
      </Grid>
      ) : (
          <Grid item xs={12} sm={12} sx={{ paddingTop: 3, paddingLeft: 6 }}>
          <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
        <Typography variant="body2" align="center" sx={{ mt: 5 }} >
          <Button onClick={capturePhoto} variant="contained">
            Capture
          </Button>
    </Typography>
        </Grid>
        // </div>
      )}
    </div>
        
        <Grid item xs={12} sm={12}>
          <Footer sx={{ mt: 5 }} />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
