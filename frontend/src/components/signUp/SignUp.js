import * as React from 'react';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Import the BackgroundImage component
import SideImage from '../sideImage/SideImag';
import SignUpDetails from '../signUpDetails/SignUpDetails';

function SignUpSide() {

  const defaultTheme = createTheme();
  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <SideImage />
        <SignUpDetails />
      </Grid>
    </ThemeProvider>
  );
}

export default SignUpSide;
