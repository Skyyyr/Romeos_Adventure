import * as React from 'react';
import { Typography } from '@mui/material';


export default function Profile({user}){
    const date = new Date()
    const accountDate = new Date(user['date_joined'])
    const accountAge = ((date - accountDate)/3600000).toFixed(2)
    return (
      <div className={'row justify-content-center'}>
        <div className={'col-12 m-5'}>
            <h1>
                <Typography variant="h3">Account Details</Typography>
            </h1>
        </div>
        <div className={'col-12 m-2'}>
            <Typography>Username/Email: {user['username']}</Typography>
        </div>
        <div className={'col-12 m-2'}>
            <Typography>First Name: {user['first_name']}</Typography>
        </div>
        <div className={'col-12 m-2'}>
            <Typography>Last Name: {user['last_name']}</Typography>
        </div>
        <div className={'col-12 m-2'}>
            <Typography>Account Age: {accountAge} hours</Typography>
        </div>
      </div>
    )
}