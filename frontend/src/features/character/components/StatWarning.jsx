import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


export default function StatWarning({setGameMode,createChar,spending}) {
  const [open, setOpen] = React.useState(false);

  console.log('spending',spending)

  const handleClickOpen = () => {
    console.log("opened")
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  

  return (
    <>
    <Button 
        color="secondary" 
        variant="contained" 
        style={{'margin':'10px', 'width':'100px','place-item':'bottom'}} 
        onClick={()=> (spending > 0 ? handleClickOpen() : setGameMode("Story"))}>
        Start Journey
    </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle sx={{ color: 'primary.main' }} id="alert-dialog-title">
          {"Unused Stat Points"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ color: 'primary.main' }} id="alert-dialog-description">
            You have stat points to spend, are you sure you want to continue?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Go Back</Button>
          <Button onClick={createChar} autoFocus>
            Continue
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}