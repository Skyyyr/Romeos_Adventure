import { Button } from "@mui/material"
import './map.css'
import{ STAGES } from '../../components/Stages'
import { useEffect } from "react"


function MapView({gameData, setGameMode, saveGame, stateStage, stage, getGameData}) {
  const gameStageToMapStage = [
    STAGES.indexOf('STAGE_TEST_OUTRO'),
    STAGES.indexOf('STAGE_1_CONVO'),
    STAGES.indexOf('STAGE_2_CONVO'),
    STAGES.indexOf('STAGE_3_CONVO'),
    STAGES.indexOf('STAGE_4_CONVO'),
    STAGES.indexOf('STAGE_5_CONVO'),
    STAGES.indexOf('STAGE_6_CONVO'),
    STAGES.indexOf('STAGE_7_CONVO'),
    STAGES.indexOf('STAGE_8_CONVO'),
    STAGES.indexOf('STAGE_9_CONVO'),
    STAGES.indexOf('STAGE_10_CONVO'),
    STAGES.indexOf('STAGE_11_CONVO')]


  console.log('mapview',stateStage,gameStageToMapStage[0])
  function loadMapData() {
    let htmlContent = []
    for (let i = 0; i < 12; i++) {{
        htmlContent.push(
          <div className= {`stage-${i}`}>
            <Button
              variant="contained"
              color="secondary"
              disabled={!(gameStageToMapStage[i] === stateStage)}
              onClick={()=> {
                setGameMode("Story")
              }}
            >
              {i}
            </Button>
          </div>
        )
      }
    }
    return htmlContent
  }

  loadMapData()
  useEffect(()=>{
    saveGame()
  },[])
  

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