import { Typography,Button } from '@mui/material'
import axios from 'axios'


function BattleEndView({setGameMode,gameMode,getGameData,nextStage, gameData}){

    let message = ''
 
    if(gameMode == 'BattleEndWon'){
        message = "You won the battle!"
    }
    else if(gameMode == 'BattleEndLost'){
        message = "You lost the battle!"
    }

        
    return(
        <div>
            <h1>Battle End</h1>
            <Typography variant="h1">{message}</Typography>
            <Button variant="contained" color="secondary" size="medium" onClick={()=>setGameMode('MapView')}>Return Home</Button> 
        </div>
    )
}

export default BattleEndView