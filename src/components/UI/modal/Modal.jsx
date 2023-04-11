import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'

export default function Modal({
   open,
   handleClose,
   title,
   message,
   agreeText,
   disagreeText,
}) {
   return (
      <Dialog
         open={open}
         onClose={handleClose}
         aria-labelledby="alert-dialog-title"
         aria-describedby="alert-dialog-description"
      >
         <DialogTitle id="alert-dialog-title">{title}</DialogTitle>

         <DialogContent>
            <DialogContentText id="alert-dialog-description">
               {message}
            </DialogContentText>
         </DialogContent>

         <DialogActions>
            <Button onClick={handleClose}>{disagreeText}</Button>
            <Button onClick={handleClose} autoFocus>
               {agreeText}
            </Button>
         </DialogActions>
      </Dialog>
   )
}
