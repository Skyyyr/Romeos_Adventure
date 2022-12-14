import { useState, useRef } from 'react';
import { Button, Modal, Box } from "@mui/material";
import Riddle_Minigame from "./RiddleMinigame";

const style = {
  height: 'auto',
  width: 'auto',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
};

function RiddleMinigameModal({setGameMode,setStateCurrency, name, riddleID, gameData, getGameData , setStateStage, storyBG}) {

  const [ riddleOpen, setRiddleOpen ] = useState(false)
  const handleRiddleOpen = () => setRiddleOpen(true)
  
  const handleRiddleClose = (condition = false) => {
    if (condition) {
      setStateStage(prev=>prev+1)
      setStateCurrency(prev=>prev+3)
      setGameMode('MapView')
    }

    const htmlElement = document.getElementById('dialogue-bg')
    htmlElement.classList.remove(storyBG)

    setRiddleOpen(false)
  }


  return (
    <>
      <button
        className={'menu-option riddle-button'}
        onClick={handleRiddleOpen}
      >
        {name ? name : "minigame"}
      </button>
      <Modal
        open={riddleOpen}
        onClose={
          (reason) => {
            if (reason !== 'backdropClick') {
              handleRiddleClose();
            }

          }
        }
      >
        <Box sx={style}>
          <Riddle_Minigame 
            handleRiddleClose={handleRiddleClose}
            riddleID={riddleID}
            gameData={gameData}
            getGameData={getGameData}
          />
        </Box>
      </Modal>
    </>
  )
}

export default RiddleMinigameModal