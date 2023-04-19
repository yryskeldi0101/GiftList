import FormControl from '@mui/material/FormControl'
import MenuItem from '@mui/material/MenuItem'
import SelectMui from '@mui/material/Select'
import styled from 'styled-components'

const Placeholder = ({ children }) => {
   return <div style={{ color: '#8D949E' }}>{children}</div>
}
function AppSelect({ width, height, placeholder, options, value, setValue }) {
   const handleChange = (event) => {
      setValue(event.target.value)
   }

   return (
      <Form height={height} width={width}>
         <SelectMui
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
                  <Option key={item.id} value={item.title}>
                     {item.title}
                  </Option>
               )
            })}
         </SelectMui>
      </Form>
   )
}
export default AppSelect

const Option = styled(MenuItem)`
   &.css-kk1bwy-MuiButtonBase-root-MuiMenuItem-root:hover {
      background: rgba(134, 57, 181, 0.2);
   }
   &.css-kk1bwy-MuiButtonBase-root-MuiMenuItem-root:active {
      background: ·rgba(134, 57, 181, 0.4);
   }
`

const Form = styled(FormControl)`
   width: ${(props) => props.width || '396px'};
   background: #ffffff;
   border-radius: 2px;
   & fieldset {
      border: 1px solid #c4c4c4;
   }
`
