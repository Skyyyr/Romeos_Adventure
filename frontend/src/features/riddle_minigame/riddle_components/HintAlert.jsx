import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function HintAlert({open,setOpen,answer}) {

    const i = Math.floor(Math.random() * answer.length)
    const message = `RNGesus has revealed that letter number ${i} is ${answer[i]}...`

  return (
    <div>
      <Dialog
        open={open}
        onClose={setOpen}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText sx={{ color: 'primary.main' }}  id="alert-dialog-description">
            {message}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={setOpen} autoFocus>
            Got It
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
