import React from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { styled } from '@mui/material'
import dayjs from 'dayjs'

function MyDatePickers({ value, onChange }) {
   const today = dayjs()
   return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
         <DemoContainer components={['DatePicker', 'DatePicker']}>
            <StyledDatePicker
               value={value || today}
               onChange={(newValue) => onChange(newValue)}
            />
         </DemoContainer>
      </LocalizationProvider>
   )
}
export default MyDatePickers
const StyledDatePicker = styled(DatePicker)(() => ({
   width: '100px',
}))
