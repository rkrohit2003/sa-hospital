import * as React from 'react';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Import the BackgroundImage component
import SideImage from '../sideImage/SideImag';
import PhotoCapturePage from '../photoCapture/PhotoCapture';

function Camera() {

  const defaultTheme = createTheme();
  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <SideImage />
        <PhotoCapturePage />
      </Grid>
    </ThemeProvider>
  );
}

export default Camera;
