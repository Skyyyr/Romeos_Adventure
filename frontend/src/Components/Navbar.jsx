import { useEffect, useRef, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import HelpIcon from '@mui/icons-material/Help';
import { SvgIcon } from '@mui/material';
import {useNavigate, Link} from 'react-router-dom';
import axios from 'axios'



// const pages = ['Play', 'Meet the Team'];
// const pagesObj = {"Play":'game', "Meet the Team": 'about'}
const settings = ['My Profile', 'Meet the Team', 'Logout'];

const ResponsiveAppBar = ({user, gameData, getGameData}) => {

  const [title, setTitle] = useState(window.innerWidth > 900 ? "Romeo's Adventure" : "R.A.")
  const [anchorElUser, setAnchorElUser] = useState(null);
  const navigate = useNavigate();
  const ref = useRef()

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(ref.current);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const settingHandler = function(event,key){
    event.preventDefault()
    if(key==="My Profile"){
      navigate('/profile');
    } else if (key==="Logout") {
      axios.post('/logout').then((resp)=>{
        navigate('/')
        window.location.reload()
      })
    } else if (key==="Meet the Team") {
      navigate('/about');
    }
  }

  useEffect( () => {
    function handleResize() {
      if (window.innerWidth > 900) {
        setTitle("Romeo's Adventure")
      } else {
        setTitle('R.A.')
      }
    }
    window.addEventListener('resize', handleResize)
  })

  

  return (
    <AppBar position="static" color="primary">
      <Container>
        <Toolbar disableGutters sx={{position: 'relative'}}>
          <Box sx={{ display: 'flex' }} id="navbar-center">
            <Button
              className="hover-underline-animation"
              as={Link}
              to={'/about'}
              sx={{
                padding: 0,
                color: 'white',
                display: { md:'block', xs:'none' },
                fontSize:18
              }}
            >
              Meet the Team
            </Button>
          </Box>
          <Typography
            className="hover-underline-animation"
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              fontSize: 25,
              fontWeight: 800,
              letterSpacing: '.25rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            {title}
          </Typography>
          <div className="flex-grow-1"></div>
          {
            user && 
              <Typography
                className="hover-underline-animation"
                onClick={handleOpenUserMenu}
                style = {{marginRight:'10px', cursor:'pointer'}}
              >
                {user.first_name}
              </Typography>
          }
          {
            !user && 
              <Typography
                className="navbar-login hover-underline-animation"
                as={Link}
                to="/signin" 
              >
                Log In
              </Typography>
          }
          <Box sx={{ flexGrow: 0 }} className="circle-icon-box">
            {
              gameData && gameData.type &&
                  <button 
                    ref={ref}
                    className="headshot-img"
                    id={`${gameData.type}-head`}
                    onClick={handleOpenUserMenu}
                  ></button>
            }
            {
              user && !gameData &&
                <SvgIcon
                  ref={ref}
                  component={HelpIcon}
                  onClick={handleOpenUserMenu}
                  id="avatar-icon"
                  sx={{border: 'transparent'}}
                />
            }
            {
              !user &&
                <SvgIcon
                  ref={ref}
                  component={HelpIcon}
                  onClick={handleOpenUserMenu}
                  id="avatar-icon-inactive"
                />
            }
            {user && <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography 
                      component='a'
                      onClick={ (event) => settingHandler(event,setting) }
                      textAlign="center"
                      sx={ setting === 'Meet the Team' ? { display: { xs: 'block', md: 'none' } } : null }
                    >
                      {setting}
                    </Typography>
                </MenuItem>
              ))}
            </Menu>}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
