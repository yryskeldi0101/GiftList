import Modal from '@mui/material/Modal'
import { styled } from '@mui/material'

const MyModal = ({ children, onClose, open, propswidth, ...rest }) => {
   return (
      <Modal open={open} onClose={onClose} {...rest}>
         <StyledBox propswidth={propswidth}>{children}</StyledBox>
      </Modal>
   )
}

export default MyModal

const StyledBox = styled('div')(({ propswidth }) => ({
   position: 'absolute',
   top: '50%',
   zIndex: '10',
   border: 'none',
   backgroundColor: '#fff',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   padding: '24px  50px  50px 24px',
   borderRadius: '10px',
   maxWidth: propswidth || '',
}))
