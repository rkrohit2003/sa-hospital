// import * as React from 'react';
// import Paper from '@mui/material/Paper';
// import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// const imageUrl=require('../../image/medicalLogo.png')

// function TopSide() {
// //   const handleSubmit = (event) => {
// //     event.preventDefault();
// //     const data = new FormData(event.currentTarget);
// //     console.log({
// //       email: data.get('email'),
// //       password: data.get('password'),
// //     });
// //   };

//   const defaultTheme = createTheme();

//   return (
//     <ThemeProvider theme={defaultTheme}>

//         <Grid item component={Paper} elevation={6} sx={{height: '20%'}} square>
//           <Box
//             sx={{
//               my: 8,
//               mx: 4,
//               display: 'flex',
//               flexDirection: 'column',
//               alignItems: 'center',
//             }}
//           >
            
//             <Typography component="h1">
//               <Button>
//                 Sign-Up
//               </Button>/
//               <Button>
//                 Login
//               </Button>
//             </Typography>
//           </Box>
//         </Grid>
//     </ThemeProvider>
//   );
// }

// export default TopSide;


import * as React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const imageUrl = require('../../image/ssml.png');

function TopSide() {
  const defaultTheme = createTheme();

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid item component={Paper} elevation={6} sx={{ height: '25%' }} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* Grid container for logo and buttons */}
          <Grid container spacing={2} alignItems="center">
            {/* Logo on the left */}
            <Grid item>
              <img src={imageUrl} alt="Logo" height="80" />
            </Grid>
            {/* Empty grid item to push the following items to the center */}
            <Grid item xs={3} />
            {/* Sign-up/Login buttons in the middle */}
            <Grid item>
              <Typography component="h1">
                <Button>Sign-Up</Button>/
                <Button>Login</Button>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </ThemeProvider>
  );
}

export default TopSide;
