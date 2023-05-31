import { styled } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'

function MyDatePickers({ value, onChange }) {
   return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
         <DemoContainer
            sx={{ padding: 0 }}
            components={['DatePicker', 'DatePicker']}
         >
            <StyledDatePicker
               value={value}
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
