import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { styled } from '@mui/material/styles'
import { LocalizationProvider } from '@mui/x-date-pickers'

function DateInput({ onChange, value, valid }) {
   return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
         <StyledDatePicker
            value={value}
            valid={valid}
            onChange={(newValue) => onChange(newValue?.toDate())}
         />
      </LocalizationProvider>
   )
}

export default DateInput

const StyledDatePicker = styled(DatePicker)(({ theme, valid }) => ({
   width: '100%',

   '& .MuiOutlinedInput-root': {
      padding: 0,
      border: valid ? '1px solid red' : '1px solid #e0e0e0',
      borderRadius: theme.shape.borderRadius,

      '&:hover fieldset': {
         border: '1px solid #6200EE',
      },

      '&.Mui-focused fieldset': {
         border: '1px solid #6200EE',
      },
   },

   '& .MuiInputBase-input': {
      padding: '5px 10px',
   },

   '& .MuiSvgIcon-root': {
      marginRight: '0.8rem',
   },
}))
