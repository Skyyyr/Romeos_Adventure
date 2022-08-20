import { useState } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios'
import './App.css'
import Home from "./Pages/Home.jsx";
import Signup from "./Pages/Signup.jsx";
import Login from "./Pages/Login.jsx";
import Logout from "./Pages/Logout.jsx";
import About from "./Pages/About.jsx";
import Game from "./Pages/Game.jsx";
import PageNotFound from "./Pages/PageNotFound.jsx";
import ResponsiveAppBar from './Components/Navbar';

const getCSRFToken = ()=> {
    let csrfToken

    // the browser's cookies for this page are all in one string, separated by semi-colons
    const cookies = document.cookie.split(';')
    for ( let cookie of cookies ) {
        // individual cookies have their key and value separated by an equal sign
        const crumbs = cookie.split('=')
        if ( crumbs[0].trim() === 'csrftoken') {
          csrfToken = crumbs[1]
        }
    }
    return csrfToken
}

axios.defaults.headers.common['X-CSRFToken'] = getCSRFToken()

function App() {

    // const whoAmI = async () => {
    //     const response = await axios.get('/whoami')
    //     const user = response.data && response.data[0] && response.data[0].fields
    //     setUser(user)
    // }

  return (
      <div className="App">
          <Router>
              <ResponsiveAppBar/>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/login' element={<Login />} />
                <Route path='/logout' element={<Logout />} />
                <Route path='/about' element={<About />} />
                <Route path='/game' element={<Game />} />
                <Route path='*' element={<PageNotFound />} />
            </Routes>
        </Router>
      </div>
  )
}

export default App
