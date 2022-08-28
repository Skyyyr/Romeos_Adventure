import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import HelpIcon from '@mui/icons-material/Help';
import { SvgIcon } from '@mui/material';
import {useNavigate, Link} from 'react-router-dom';
import axios from 'axios'
import {Icon} from '@mui/material';
import { useEffect } from 'react';


const pages = ['Play', 'Meet the Team'];
const pagesObj = {"Play":'game', "Meet the Team": 'about'}
const settings = ['Profile','Logout'];

const ResponsiveAppBar = ({user, gameData,getGameData}) => {

  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const settingHandler = function(event,key){
    event.preventDefault()
    if(key==="Profile"){
      navigate('/profile');
    }
    else{
        //console.log('You Logged Out')
      axios.post('/logout').then((response)=>{
        //console.log('response from server: ', response)
        navigate('/')
        window.location.reload()
      })
    }
  }

  useEffect(()=>{

  },[gameData])

  return (
    <AppBar position="static" color="primary">
      <Container>
        <Toolbar disableGutters sx={{position: 'relative'}}>
          <div id="navbar-center">
          <Box sx={{ display: 'flex' }}>
            {user && pages.map((page) => (
              <Button
                href={`#/${pagesObj[page]}`}
                key={page}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          </div>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              textAlign: 'left',
              flexGrow: 0,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Romeo's Adventure
          </Typography> 
          <div className="flex-grow-1"></div>
          {
            user && 
              <Typography 
                style = {{marginRight:'10px'}}
              >
                {user.first_name}
              </Typography>
          }
          {
            !user && 
              <Typography 
                as={Link}
                to="/signin" 
                className="navbar-login"
              >
                Log In
              </Typography>
          }
          <Box sx={{ flexGrow: 0 }} className="circle-icon-box">
            {
              gameData && gameData.type &&
                  <button 
                    className="headshot-img"
                    id={`${gameData.type}-head`}
                    onClick={handleOpenUserMenu}
                  ></button>
            }
            {
              user && !gameData &&
                <SvgIcon
                  component={HelpIcon}
                  onClick={handleOpenUserMenu}
                  id="avatar-icon"
                  sx={{border: 'transparent'}}
                />
            }
            {
              !user &&
                <SvgIcon
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
                    <Typography component='a' onClick={(event)=>settingHandler(event,setting)} textAlign="center">{setting}</Typography>
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
