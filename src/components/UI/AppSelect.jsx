import FormControl from '@mui/material/FormControl'
import MenuItem from '@mui/material/MenuItem'
import SelectMui from '@mui/material/Select'
import { styled } from '@mui/material'

const Placeholder = ({ children }) => {
   return <div style={{ color: '#8D949E' }}>{children}</div>
}
function AppSelect({
   width,
   border,
   height,
   placeholder,
   options,
   value,
   setValue,
}) {
   const handleChange = (event) => {
      setValue(event.target.value)
   }
   return (
      <Form height1={height} width={width} border={border}>
         <SelectStyled
            heightprops={height}
            onChange={handleChange}
            value={value}
            displayEmpty
            renderValue={
               value !== ''
                  ? undefined
                  : () => <Placeholder>{placeholder}</Placeholder>
            }
         >
            {options.map((item) => {
               return (
                  <StyledMenuItem key={item.id} value={item.name}>
                     {item.name}
                  </StyledMenuItem>
               )
            })}
         </SelectStyled>
      </Form>
   )
}
export default AppSelect

const StyledMenuItem = styled(MenuItem)(() => ({
   '&:hover': {
      background: 'rgba(134, 57, 181, 0.2)',
   },
   '&:active': {
      background: 'rgba(134, 57, 181, 0.4)',
   },
}))
const Form = styled(FormControl)`
   width: ${(props) => props.width || '396px'};
   background: #ffffff;
   border-radius: 2px;
   & fieldset {
      border: ${(props) => props.border || '1px solid #c4c4c4'};
   }
   & {
      height: '20px';
   }
`
const SelectStyled = styled(SelectMui)(({ heightprops }) => ({
   height: heightprops || 'none',
}))
