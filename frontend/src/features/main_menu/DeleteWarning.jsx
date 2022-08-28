import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


export default function DeleteWarning({gameData, deleteChar, setGameMode}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  

  return (
    <>
      <Button 
        variant="contained"
        color="secondary"
        onClick={()=>((gameData && gameData.type) ? handleClickOpen() : setGameMode("Story"))}
      >
        New Game
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle sx={{ color: 'primary.main' }} id="alert-dialog-title">
          {"Are you sure you want to start a new game?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ color: 'primary.main' }} id="alert-dialog-description">
            This action will delete your saved game data.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Go Back</Button>
          <Button onClick={deleteChar} autoFocus>
            Continue
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
