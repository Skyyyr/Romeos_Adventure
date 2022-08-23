import { Button } from "@mui/material"
import axios from 'axios'


function MainMenu( {user, setGameMode, gameData} ) {

  const deleteChar = function(event){
    event.preventDefault()
    axios.delete('/gamedata').then((response)=>{
        setGameMode('Character')
        // window.location.reload()
        console.log('response from server: ', response)
     })
}

  return (
    <>
      <div id="game-title">
        <h1>
          Romeo's Adventure
        </h1>
      </div>
      <Button 
        variant="contained"
        color="secondary"
        onClick={()=>setGameMode("MapView")}
        disabled={user && !gameData}
      >
        Continue
      </Button>
      <Button 
        variant="contained"
        color="secondary"
        onClick={(event)=>((gameData && gameData.type) ? deleteChar(event) : setGameMode("Character"))}
      >
        New Game
      </Button>
    </>
  )
}

export default MainMenu