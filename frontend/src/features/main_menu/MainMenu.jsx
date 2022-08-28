import { Button } from "@mui/material"
import axios from 'axios'
import { useEffect } from "react"
import DeleteWarning from "./DeleteWarning"


function MainMenu( {user, setGameMode, gameData,setStateStage,setGameData} ) {

  const deleteChar = function(event) {
    event.preventDefault()
    axios.delete('/gamedata').then((response)=>{
        setStateStage(0)
        setGameMode('Story')
        setGameData(null)
        //window.location.reload()
        //console.log('response from server: ', response)
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