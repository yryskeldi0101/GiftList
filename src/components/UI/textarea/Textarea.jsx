import styled from '@emotion/styled'
import { TextField } from '@mui/material'
import { forwardRef } from 'react'

const StyledTextareaAutosize = styled(TextField)`
   width: 100%;
   border-radius: 6px;
   font-family: 'Inter';
   font-weight: 300;
   font-size: 16px;
   line-height: 19px;
   padding: 18px 8px;
`

const EmptyTextarea = forwardRef(({ rows, title, value, onChange }, ref) => {
   return (
      <StyledTextareaAutosize
         multiline
         value={value}
         onChange={onChange}
         minRows={rows}
         placeholder={title}
         ref={ref}
      />
   )
})

export default EmptyTextarea
