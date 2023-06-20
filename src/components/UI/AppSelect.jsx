import FormControl from '@mui/material/FormControl'
import MenuItem from '@mui/material/MenuItem'
import SelectMui from '@mui/material/Select'
import { styled } from '@mui/material'
import React, { forwardRef } from 'react'

const Placeholder = ({ id, name, children }) => {
   return (
      <div
         id={id}
         name={name}
         style={{ color: '#8D949E', padding: 0, margin: 0 }}
      >
         {children}
      </div>
   )
}
const AppSelect = forwardRef(
   (
      {
         width,
         border,
         height,
         placeholder,
         options,
         background,
         value = '',
         onChange,
         id,
         name,
         borderError,
      },
      ref
   ) => {
      return (
         <Form
            height1={height}
            width={width}
            border={border}
            background={background}
         >
            <SelectStyled
               bordercolor={borderError}
               id={id}
               name={name}
               heightprops={height}
               onChange={onChange}
               value={value}
               displayEmpty
               ref={ref}
               renderValue={
                  value !== ''
                     ? undefined
                     : () => (
                          <Placeholder id={id} name={name}>
                             {placeholder}
                          </Placeholder>
                       )
               }
            >
               {options.map((item) => {
                  return (
                     <StyledMenuItem
                        id={id}
                        name={name}
                        key={item.id}
                        value={item.name}
                        ref={ref}
                     >
                        {item.name}
                     </StyledMenuItem>
                  )
               })}
            </SelectStyled>
         </Form>
      )
   }
)
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
   background: ${(props) => props.background || '#ffffff'};
   border-radius: 2px;
   padding-right: 0;
   & fieldset {
      border: ${(props) => props.border || '1px solid #c4c4c4'};
   }
   & {
      height: '20px';
   }
`
const SelectStyled = styled(SelectMui)(({ heightprops, bordercolor }) => ({
   height: heightprops || 'none',
   padding: 0,
   border: bordercolor === 'true' ? '1px solid red' : '',
}))
