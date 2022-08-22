import { Button } from "@mui/material"

function MainMenu( {user, setGameMode, gameData} ) {

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
        onClick={()=>setGameMode("Character")}
      >
        New Game
      </Button>
    </>
  )
}

export default MainMenu