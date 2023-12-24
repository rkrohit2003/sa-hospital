import * as React from 'react';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Import the BackgroundImage component
import SideImage from '../sideImage/SideImag';
import SignInDetails from '../signInDetails/SignInDetails';

function SignInSide({ setIsLoggedIn }) {

  const defaultTheme = createTheme();
  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <SideImage />
        <SignInDetails setIsLoggedIn={setIsLoggedIn}/>
      </Grid>
    </ThemeProvider>
  );
}

export default SignInSide;
