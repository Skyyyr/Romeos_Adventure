import { Button } from "@mui/material"
import MapData from './map_data.json'
import RiddleMinigameModal from "../riddle_minigame/RiddleMinigameModal"



function MapView({gameData, setGameMode, stage, nextStage}) {

  function loadMapData() {
    let htmlContent = []
    for (let i = 0; i < MapData.length; i++) {
      if (MapData[i]['function'] === "battle") {
        htmlContent.push(
          <div className="col-2 border border-light">
            <Button
              variant="contained"
              color="secondary"
              disabled={!(stage === i)}
              onClick={ ()=> {
                setGameMode("BattleView")
              }}
            >
              {MapData[i]['name']}
            </Button>
          </div>
        )
      } else {
        htmlContent.push(
          <div className="col-2 border border-light">
            <RiddleMinigameModal
              currency={gameData.currency}
              disabled={!(stage === i)}
              nextStage={nextStage}
              name={MapData[i]['name']}
              riddleID={MapData[i]['riddleID']}
              gameData={gameData}
            />
          </div>
        )
      }

    }
    return htmlContent
  }

  loadMapData()

  return (
    <div className="container h-100 p-0 d-flex justify-content-center align-items-center flex-wrap">
      <div className="row">
        <div className="col-12">
          <h1>
            Map
          </h1>
          <Button 
            color="secondary"
            variant="contained"
            onClick={()=>setGameMode("ViewCharacter")}
          >
            Character
          </Button>
          <Button 
            color="secondary"
            variant="contained"
            onClick={()=>setGameMode("MainMenu")}
          >
            Main Menu
           </Button>

        </div>
        {loadMapData()}
      </div>
    </div>
    
  )
}

export default MapView