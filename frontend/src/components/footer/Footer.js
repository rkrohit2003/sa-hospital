import React from 'react'
import Typography from '@mui/material/Typography';

export const Footer = (props) => {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Terms and Condition privacy policy.'}
    </Typography>
  )
}
