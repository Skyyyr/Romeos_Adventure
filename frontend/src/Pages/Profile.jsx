import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



export default function Profile({user}){
    const date = new Date()
    const accountDate = new Date(user['date_joined'])
    const accountAge = ((date - accountDate)/3600000).toFixed(2)
    return <div className='row justify-content-md-center' >
    <Box sx={{ width: '25%' }}>
    <Typography variant="h1">Account Details</Typography>
      <Stack spacing={2}>
        <Item>Username/Email: {user['username']}</Item>
        <Item>First Name: {user['first_name']}</Item>
        <Item>Last Name: {user['last_name']}</Item>
        <Item>Account Age: {accountAge} hours</Item>
      </Stack>
    </Box>
    
    </div>
}