import { Button } from "@mui/material"
import axios from 'axios'
import DeleteWarning from "./DeleteWarning"


function MainMenu( {user, setGameMode, gameData} ) {

  const deleteChar = function(event) {
    event.preventDefault()
    axios.delete('/gamedata').then((response)=>{
        //window.location.reload()
        setGameMode('Character')
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
      <DeleteWarning gameData={gameData} deleteChar={deleteChar} setGameMode={setGameMode}/>
    </>
  )
}

export default MainMenu