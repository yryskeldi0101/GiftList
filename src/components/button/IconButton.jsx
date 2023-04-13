import { Button } from '@mui/material'
import { styled } from '@mui/material/styles'

const IconButton = styled(Button)({
   color: 'black',
   backgroundColor: 'white',
})

function MyIconButton({ children, ...restProps }) {
   return <IconButton {...restProps}>{children}</IconButton>
}

export default MyIconButton
