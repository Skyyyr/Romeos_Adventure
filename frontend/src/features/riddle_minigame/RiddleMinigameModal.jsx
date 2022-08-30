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

function RiddleMinigameModal({setGameMode, name, riddleID, gameData,getGameData,setStateStage}) {

  const [ riddleOpen, setRiddleOpen ] = useState(false)
  const handleRiddleOpen = () => setRiddleOpen(true)
  const handleRiddleClose = (condition = false) => {
    if (condition) {
      setStateStage(prev=>prev+1)
      setGameMode('MapView')
    }
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