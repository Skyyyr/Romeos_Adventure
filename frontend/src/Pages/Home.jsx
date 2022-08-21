import {BrowserRouter as Router, Link} from 'react-router-dom';
import { Button } from '@mui/material';
import { Typography } from '@mui/material';


function Home( {user} ) {

    return (
        <div className="page-container">
          <div className="game-container">
            <div id="home-top-half">
              <h1>
                  Welcome to Romeo's Adventure!
              </h1>
              { user ?
                  <div>
                    <Link to="/game">
                      <Button color="secondary" variant="contained">Play Game</Button>
                    </Link>
                  </div>
                :
                  <div>
                    <Link to="/signin">
                        <Button color="secondary" variant="contained">Login</Button>
                    </Link>
                    <Link to="/signup">
                        <Button color="secondary" variant="contained">Sign Up</Button>
                    </Link>
                  </div>
              }

            </div>
            <div id="home-bottom-half">
              <div className="home-details">
                <Typography variant="h3">Words</Typography>
              </div>
              <div className="home-details">
                <Typography variant="h3">Words</Typography>
              </div>
              <div className="home-details">
                <Typography variant="h3">Words</Typography>
              </div>
            </div>
          </div>  
        </div>
    )
}

export default Home