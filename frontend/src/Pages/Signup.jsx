import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import axios from "axios";
import {useNavigate} from "react-router-dom";


export default function SignUp() {
  const nav = useNavigate()

  async function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const inputEmail = data.get('email')
    const inputPassword = data.get('password')
    console.log({
      email: inputEmail,
      password: inputPassword,
    });

    if (!inputEmail.includes("@") || !inputEmail.includes(".com")) {
      console.log("Not a valid email")
      return
    }
    if (inputPassword.split("").length <= 6) {
      console.log("pw too short")
      return
    }
    const signupResponse = await axios.post('/signup', {
      email: inputEmail,
      password: inputPassword
    }).catch((response) => {
      console.log('response from server: ', response)
    })

    console.log("signupResponse", signupResponse)
    const results = signupResponse.data['signup']
    if (results === 'success') {
        alert("You've successfully created your account.")
        nav('/login')
    } else {
      alert("The details you entered were not valid for an account to be made. Please enter a valid email, " +
          "and a password which is 7 characters or greater.")
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
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
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
                <Link href="/#/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
  );
}