import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { styled } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers'

function DateInput({ onChange }) {
   return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
         <StyledDatePicker onChange={(newValue) => onChange(newValue)} />
      </LocalizationProvider>
   )
}
export default DateInput
const StyledDatePicker = styled(DatePicker)(() => ({
   width: '100px',
}))
