import { styled } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { useSelector } from 'react-redux'
import format from 'date-fns/format'

function InputDatePicker({ onChange }) {
   const { data } = useSelector((state) => state.ModalSlice)
   const date = new Date(data.date)
   const formattedDate = format(date, 'dd-MM-yyyy')
   // Форматируем дату в нужный формат
   return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
         <StyledDatePicker
            value={formattedDate}
            onChange={(newValue) => onChange(newValue)}
            format="DD-MM-YYYY"
         />
      </LocalizationProvider>
   )
}
export default InputDatePicker

const StyledDatePicker = styled(DatePicker)(() => ({
   width: '200px',
}))
