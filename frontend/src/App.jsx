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
import ResponsiveAppBar from './components/Navbar';
import { themeOptions } from './components/Theme';
import axios from 'axios'


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
  
  const [user, setUser] = useState(null)

  const whoAmI = async () => {
    const response = await axios.get('/whoami')
    const user = response.data && response.data[0] && response.data[0].fields
    setUser(user)
  }

    useEffect(()=>{
        whoAmI()
    }, [])

  return (
      <div className="App">
      <ThemeProvider theme={themeOptions}>
        <Router>
          <ResponsiveAppBar user={user}/>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/signin' element={<Login user={user} setUser={setUser}/>} />
            <Route path='/about' element={<About />} />
            <Route path='/game' element={<Game user={user}/>} />
            <Route path='*' element={<PageNotFound />} />
        </Routes>
      </Router>
      </ThemeProvider>
      </div>
  )
}

export default App
