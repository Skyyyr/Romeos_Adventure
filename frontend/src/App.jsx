import {useState,useEffect} from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import {ThemeProvider } from '@mui/material';
import Home from "./Pages/Home.jsx";
import Signup from "./Pages/Signup.jsx";
import Login from "./Pages/Login.jsx";
import About from "./Pages/About.jsx";
import Game from "./Pages/Game.jsx";
import PageNotFound from "./Pages/PageNotFound.jsx";
import ResponsiveAppBar from './Components/Navbar';
import { themeOptions } from './Components/Theme';
import axios from 'axios'
import Profile from "./Pages/Profile.jsx"
import { useMediaPredicate } from "react-media-hook";


// Create Cookie for session
function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== '') {
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
          const cookie = cookies[i].trim();
          // Does this cookie string begin with the name we want?
          if (cookie.substring(0, name.length + 1) === (name + '=')) {
              cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
              break;
          }
      }
  }
  return cookieValue;
}
const csrftoken = getCookie('csrftoken');
axios.defaults.headers.common['X-CSRFToken'] = csrftoken



function App() {
  
  const [gameData, setGameData] = useState(null)
  const [user, setUser] = useState(null)
  const minWidth = useMediaPredicate("(min-width: 1050px)");
  const minHeight = useMediaPredicate("(min-height: 650px)");

  const whoAmI = async () => {
    const response = await axios.get('/whoami')
    const user = response.data && response.data[0] && response.data[0].fields
    setUser(user)
  }

  const getGameData = async () => {
    const response = await axios.get('/gamedata').catch((e) => {
      console.log(e)
    })
    if (response.data['results']) {
      setGameData(response.data['get_data'])
    }
  }

    useEffect(()=>{
        whoAmI()
        getGameData()
    }, [])

  return (
      <div className="App">
        {minWidth && minHeight && <div>
        <ThemeProvider theme={themeOptions}>
          <Router>
            <ResponsiveAppBar user={user} gameData={gameData}/>
            <Routes>
              <Route path='/' element={<Home user={user} />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/signin' element={<Login user={user} setUser={setUser}/>} />
              <Route path='/about' element={<About />} />
              <Route path='/profile' element={<Profile user={user}/>} />
              <Route path='/game' element={user && <Game user={user} getGameData={getGameData} gameData={gameData}/>} />
              <Route path='*' element={<PageNotFound />} />
          </Routes>
        </Router>
        </ThemeProvider>
        </div>}
        {!(minWidth && minHeight) && <div>You must enlarge your screen to play</div>}
      </div>
  )
}

export default App
