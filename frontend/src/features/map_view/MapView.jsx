import { Button } from "@mui/material"
import MapData from './map_data.json'
import RiddleMinigameModal from "../riddle_minigame/RiddleMinigameModal"
import './map.css'


function MapView({gameData, setGameMode, stage, nextStage,getGameData}) {

  function loadMapData() {
    let htmlContent = []
    for (let i = 0; i < MapData.length; i++) {
      if (MapData[i]['function'] === "battle") {
        htmlContent.push(
          <div className= {`stage-${i+1}`}>
            <Button
              variant="contained"
              color="secondary"
              disabled={!(stage === i)}
              onClick={ ()=> {
                setGameMode("Story")
              }}
            >
              {MapData[i]['name']}
            </Button>
          </div>
        )
      } else {
        htmlContent.push(
          <div className={`stage-${i+1}`}>
            <RiddleMinigameModal
              currency={gameData.currency}
              disabled={!(stage === i)}
              nextStage={nextStage}
              name={MapData[i]['name']}
              riddleID={MapData[i]['riddleID']}
              gameData={gameData}
              getGameData={getGameData}
            />
          </div>
        )
      }

    }
    return htmlContent
  }

  loadMapData()

  return (
    <div>
      <button 
        className="headshot-img"
        id={`${gameData.type}-head`}
      ></button>
      <Button 
        className="character-button"
        color="secondary"
        variant="contained"
        onClick={()=>setGameMode("ViewCharacter")}
      >
        Character
      </Button>
      <Button 
        className="menu-button"
        color="secondary"
        variant="contained"
        onClick={()=>setGameMode("MainMenu")}
      >
        Main Menu
        </Button>
      {loadMapData()}
    </div>
    
  )
}

export default MapView