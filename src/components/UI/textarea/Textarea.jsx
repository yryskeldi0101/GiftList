import styled from '@emotion/styled'
import { TextField } from '@mui/material'
import { forwardRef } from 'react'

const EmptyTextarea = forwardRef(
   ({ rows, title, value, onChange, id, name, borderError }, ref) => {
      return (
         <StyledTextareaAutosize
            id={id}
            name={name}
            multiline
            value={value}
            onChange={onChange}
            minRows={rows}
            placeholder={title}
            bordercolor={borderError}
            ref={ref}
         />
      )
   }
)
const StyledTextareaAutosize = styled(TextField)(({ bordercolor }) => ({
   width: '100%',
   borderRadius: '6px',
   fontFamily: 'Inter',
   fontWeight: 300,
   fontSize: '16px',
   lineHeight: '19px',
   '&.MuiTextField-root': {
      border: bordercolor === 'true' ? '1px solid red' : '',
   },
}))

export default EmptyTextarea
