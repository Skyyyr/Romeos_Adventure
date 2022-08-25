import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';



export default function Profile({user}){
    const date = new Date()
    const accountDate = new Date(user['date_joined'])
    const accountAge = ((date - accountDate)/3600000).toFixed(2)
    return <div className='row justify-content-md-center' >
    <Box sx={{ width: '25%' }}>
    <Typography variant="h3">Account Details</Typography>
      <Stack spacing={2}>
        <Typography>Username/Email: {user['username']}</Typography>
        <Typography>First Name: {user['first_name']}</Typography>
        <Typography>Last Name: {user['last_name']}</Typography>
        <Typography>Account Age: {accountAge} hours</Typography>
      </Stack>
    </Box>
    
    </div>
}