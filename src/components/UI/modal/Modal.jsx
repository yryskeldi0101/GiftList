import Dialog from '@mui/material/Dialog'

export default function Modal({ open, handleClose, children, ...rest }) {
   return (
      <Dialog open={open} onClose={handleClose} {...rest}>
         {children}
      </Dialog>
   )
}
