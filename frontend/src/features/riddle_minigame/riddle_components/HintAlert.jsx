import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function HintAlert({open,setOpen,answer}) {

    const i = Math.floor(Math.random() * answer.length)
    let j = Math.floor(Math.random() * answer.length)
    let k = Math.floor(Math.random() * answer.length)
    
    function isEqual(){
      while ( i === j || i === k || j === k) {
        if (i === j)  {
          j = Math.floor(Math.random() * answer.length)
        }
        if (j === k) {
          k = Math.floor(Math.random() * answer.length)
        }
        if (i === k) {
          k = Math.floor(Math.random() * answer.length)
        }
      }
    }

    isEqual()

    const message = `Letter number ${i+1} is ${answer[i]}.\n
                     Letter number ${j+1} is ${answer[j]}.\n
                     Letter number ${k+1} is ${answer[k]}.`

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
