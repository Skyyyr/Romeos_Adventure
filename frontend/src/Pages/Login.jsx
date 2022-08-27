import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import axios from 'axios'
import {useNavigate} from 'react-router-dom';
import { rgbToHex } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState,useEffect } from 'react';
import { Alert, getBottomNavigationActionUtilityClass } from '@mui/material';


export default function Login({user}) {
    const nav = useNavigate()
    const [invalidLogin,setInvalidLogin] = useState(false)


  async function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const response = await axios.post('/login', {email: data.get('email'), password: data.get('password')}).catch((resp)=>{
      console.log(resp.data['result'])
    })

    if(response.data['result']=='success'){
      nav('/')
      window.location.reload()
    }
    else if(response.data['result']=='invalid_login'){
      setInvalidLogin(true) 
    }
  }

  const LoginTextField = styled(TextField)({
    '& input:valid + fieldset': {
      borderColor: 'rgb(17,85,158)',
      borderWidth: 2,
    },
    '& input:invalid + fieldset': {
      borderColor: 'warning',
      borderWidth: 2,
    },
    '& input:valid:hover + fieldset': {
      borderColor: 'rgb(142,228,232)',
      borderLeftWidth: 2,
      padding: '4px !important',
    },
    '& input:valid:focus + fieldset': {
      color: 'rgb(251,250,235) !important',
      borderColor: 'rgb(142,228,232)',
      borderLeftWidth: 6,
      padding: '4px !important',
    },
  });

  return (
      <Container className="page-bg" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >

          <Typography variant="white" component="h2">
            Sign In
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <LoginTextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              error={invalidLogin}
              helperText={invalidLogin && "Password and email combination are invalid"}
            />
            <LoginTextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              error={invalidLogin}
              helperText={invalidLogin && "Password and email combination are invalid"}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link  href="/#/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
  );
}