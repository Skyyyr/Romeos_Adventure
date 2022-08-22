import { Button } from "@mui/material"
import RiddleMinigameModal from '../../features/riddle_minigame/RiddleMinigameModal'


function MapView({gameData,setGameMode,setEnemy}) {

    return (

          <>
            <div>
                <h1>
                    Map
                </h1>
                <Button onClick={()=>{setGameMode("BattleView");setEnemy("Raphael")}}>Battle Raphael</Button>
                <Button onClick={()=>{setGameMode("BattleView");setEnemy("Adam")}}>Battle Adam</Button>
                <Button onClick={()=>{setGameMode("BattleView");setEnemy("Zaynab")}}>Battle Zaynab</Button>
            </div>
          </>
    )
}

export default MapView