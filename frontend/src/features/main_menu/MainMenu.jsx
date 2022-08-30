import { Button, Typography } from "@mui/material"
import axios from 'axios'
import { useState,useEffect } from "react"
import DeleteWarning from "./DeleteWarning"
import { STAGES } from "../../Components/Stages"

function MainMenu( {user, setGameMode, gameData,setStateStage,setGameData} ) {
  const [nextVil, setNextVil] = useState('Adam')

  function loadNextVillain(){
    switch(gameData['stage']){
      case STAGES.indexOf('STAGE_8_CONVO'):
      case STAGES.indexOf('STAGE_9_CONVO'):
      case STAGES.indexOf('STAGE_10_CONVO'):
      case STAGES.indexOf('STAGE_10_BATTLE'):
        setNextVil('Zuckerborg')
        break
      case STAGES.indexOf('STAGE_11_CONVO'):
      case STAGES.indexOf('STAGE_11_BATTLE'):
        setNextVil('Raphael')
        break
      case STAGES.indexOf('STAGE_4_CONVO'):
      case STAGES.indexOf('STAGE_5_CONVO'):
      case STAGES.indexOf('STAGE_6_CONVO'):
      case STAGES.indexOf('STAGE_6_BATTLE'):
      case STAGES.indexOf('STAGE_7_CONVO'):
      case STAGES.indexOf('STAGE_7_BATTLE'):
        setNextVil('Zaynab')
        break
      default:
        setNextVil('Adam')
    }

  }

  useEffect(()=>{
    if(gameData)
      loadNextVillain()
  },[])

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
        <Typography sx={{'color':'secondary.main'}} variant='h3'>
          Romeo's Adventure
        </Typography>
      </div>
      <Button 
        variant="contained"
        color="secondary"
        sx={{'margin':'2px'}}
        onClick={()=>setGameMode("MapView")}
        disabled={user && !gameData}
      >
        Continue
      </Button>
      <DeleteWarning gameData={gameData} deleteChar={deleteChar} setGameMode={setGameMode}/>
      <div className={`mainmenu-char ${nextVil}-menu`}></div>

      </>
  )
}

export default MainMenu