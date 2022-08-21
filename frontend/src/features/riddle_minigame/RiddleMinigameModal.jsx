import { useState } from 'react';
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

function RiddleMinigameModal() {

  const [ riddleOpen, setRiddleOpen ] = useState(false)
  const handleRiddleOpen = () => setRiddleOpen(true)
  const handleRiddleClose = () => setRiddleOpen(false)

  return (
    <>
      <Button variant="contained" onClick={handleRiddleOpen}>Riddle Minigame</Button>
      <Modal
        open={riddleOpen}
        onClose={(reason) => {
          if (reason != 'backdropClick') {
            handleRiddleClose();
          }
        }}
      >
        <Box sx={style}>
          <Riddle_Minigame handleRiddleClose={handleRiddleClose} />
        </Box>
      </Modal>
    </>
  )
}

export default RiddleMinigameModal