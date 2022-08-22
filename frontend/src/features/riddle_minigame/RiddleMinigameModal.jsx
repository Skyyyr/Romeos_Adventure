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

function RiddleMinigameModal({nextStage, name, disabled, riddleID}) {

  const [ riddleOpen, setRiddleOpen ] = useState(false)
  const handleRiddleOpen = () => setRiddleOpen(true)
  const handleRiddleClose = (condition = false) => {
    if (condition) {
      nextStage()
    }
    setRiddleOpen(false)
  }

  return (
    <>
      <Button 
        disabled={disabled}
        variant="contained"
        onClick={handleRiddleOpen}
      >
        {name ? name : "minigame"}
        </Button>
      <Modal
        open={riddleOpen}
        onClose={(reason) => {
          if (reason != 'backdropClick') {
            console.log('test')
            console.log(event)
            handleRiddleClose();
          }
        }}
      >
        <Box sx={style}>
          <Riddle_Minigame handleRiddleClose={handleRiddleClose} riddleID={riddleID} />
        </Box>
      </Modal>
    </>
  )
}

export default RiddleMinigameModal