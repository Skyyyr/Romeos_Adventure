import {BrowserRouter as Router, Link} from 'react-router-dom';
import { Button, Icon, Typography } from '@mui/material';
import RomeoLogo from '../features/assets/romeologo.png';
import BackgroundImage from '../features/assets/homepage-adventure-background.jpg';
import Logo from '../features/assets/romeologo.svg';

function Home( {user, gameData} ) {

    const imageAttr = "https://www.freepik.com/free-vector/blank-nature-park-landscape-scene-daytime_16879862.htm#query=nature%20banner&position=10&from_view=keyword"
    const imageAttrStyle = {
      position: 'absolute',
      margin:0,
      bottom: 0,
      right: 0,
      fontSize: 10,
      opacity: 0.8,
    }

    return (
      <div className="page-container">
        <div id="homepage-background-image" style={{position:'relative'}}>
          <p style={imageAttrStyle}>
            <a href={imageAttr} target="_blank" rel="noreferrer">Image by brgfx on Freepik</a>
          </p>
          <div className="d-flex justify-content-center align-items-end" style={{marginTop:'16px'}}>
            <div id="game-logo">
              <img src={Logo} id="game-logo-image"/>
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center" style={{height:'216px'}}>
            { user ?
              <>
                <Link to="/game">
                  <Button 
                    className="home-buttons button-shadow"
                    color="primary"
                    variant="contained"
                    sx={{fontSize:25}}
                  >
                    Play Game
                  </Button>
                </Link>
              </>
            :
              <div className="d-flex flex-column">
                <Link to="/signin">
                    <Button 
                      className="home-buttons button-shadow" 
                      color="primary" 
                      variant="contained"
                      sx={{fontSize:25, marginBottom:2}}
                    >
                      Login
                    </Button>
                </Link>
                <Link to="/signup">
                    <Button 
                      className="home-buttons button-shadow"
                      color="primary"
                      variant="contained"
                      sx={{fontSize:25}}
                    >
                      Sign Up
                    </Button>
                </Link>
              </div>
            }
          </div>
        </div>
      </div>
    )
}

export default Home