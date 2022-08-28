import {BrowserRouter as Router, Link} from 'react-router-dom';
import { Button } from '@mui/material';
import { Typography } from '@mui/material';


function Home( {user} ) {

    return (
        <div className="page-container">
          <div className="game-container">
            <div id="home-top-half">
              {/*<h1>
                  Welcome to Romeo's Adventure!
            </h1>*/}
            </div>
            <div id="home-bottom-half">
              { user ?
                <div>
                  <Link to="/game">
                    <Button color="primary" variant="contained">Play Game</Button>
                  </Link>
                </div>
              :
                <div>
                  <Link to="/signin">
                      <Button color="primary" variant="contained">Login</Button>
                  </Link>
                  <Link to="/signup">
                      <Button color="primary" variant="contained">Sign Up</Button>
                  </Link>
                </div>
              }
            </div>
          </div>  
        </div>
    )
}

export default Home