import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import axios from "axios";
import {useNavigate} from "react-router-dom";
import { useState,useEffect } from 'react';
import { Alert, getBottomNavigationActionUtilityClass } from '@mui/material';





export default function SignUp() {
  const nav = useNavigate()
  const [signUpAttempt, setSignUpAttempt] = useState(false)
  const [firstNameInput, setFirstNameInput] = useState('')
  const [lastNameInput, setLastNameInput] = useState('')
  const [userNameInput, setUserNameInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')
  const [firstNameInputVal, setFirstNameInputVal] = useState(false)
  const [lastNameInputVal, setLastNameInputVal] = useState(false)
  const [userNameInputVal, setUserNameInputVal] = useState(false)
  const [passwordInputVal, setPasswordInputVal] = useState(false)
  const [emailTaken,setEmailTaken] = useState(false)


  //Validators
  const emailReg = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
  const passwordMinLength = 5
  const firstNameMinLen = 2
  const lastNameMinLen = 2

  async function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const inputFirstName = data.get('firstName')
    const inputLastName = data.get('lastName')
    const inputEmail = data.get('email')
    const inputPassword = data.get('password')
    setSignUpAttempt(true)

    if(firstNameInputVal && lastNameInputVal && userNameInputVal && passwordInputVal){
      const signupResponse = await axios.post('/signup', {
        first_name: inputFirstName,
        last_name: inputLastName,
        email: inputEmail,
        password: inputPassword
      }).catch((response) => {
        console.log('response from server: ', response)
      })

      const results = signupResponse.data['signup']
      if (results === 'success') {
          alert("You've successfully created your account.")
          nav('/')
          window.location.reload()
      }else if(results=="username_used"){
          setEmailTaken(true)
      }else{
        alert('error on backend')
      }

      }
    }


  return (
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >

          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={(event)=>handleSubmit(event)} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
            <TextField
              autoComplete="given-name"
              name="firstName"
              required
              fullWidth
              id="firstName"
              label="First Name"
              autoFocus
              error={(firstNameInput=="" || !firstNameInputVal) && signUpAttempt}
              helperText={((firstNameInput=="" || !firstNameInputVal) && signUpAttempt) ? `Must be at least ${firstNameMinLen} characters` : ''}
              onChange={(e)=>(setFirstNameInput(e.target.value),setFirstNameInputVal(e.target.value.length>=firstNameMinLen))}
            />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
                onChange={(e)=>(setLastNameInput(e.target.value),setLastNameInputVal(e.target.value.length>=lastNameMinLen))}
                error={(lastNameInput=="" || !lastNameInputVal) && signUpAttempt}
                helperText={((lastNameInput=="" || !lastNameInputVal) && signUpAttempt) ? `Must be at least ${lastNameMinLen} characters` : ''}
              />
            </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={(e)=>(setUserNameInput(e.target.value),setUserNameInputVal(emailReg.test(e.target.value)))}
                  error={((userNameInput==""  || !userNameInputVal) && signUpAttempt) || emailTaken}
                  helperText={
                    (((userNameInput=="" || !userNameInputVal) && signUpAttempt) ? "Must be a valid email" : '')
                    || (emailTaken ? "Username/Email is already in use" : '')
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={(e)=>(setPasswordInput(e.target.value), setPasswordInputVal((e.target.value.length >= passwordMinLength)))}
                  error={(passwordInput==""  || !passwordInputVal) && signUpAttempt}
                  helperText={((passwordInput=="" || !passwordInputVal) && signUpAttempt) ? `Must be at least ${passwordMinLength} characters` : ''}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/#/signin" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
  );
}
