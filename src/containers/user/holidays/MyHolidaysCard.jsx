import { styled } from '@mui/material/styles'
import { useSelector } from 'react-redux'
import { useMeatballs } from '../../../hooks/useMeatballs'
import { ACTION_TYPES } from '../../../utlis/constants/constnats'
import HolidayDetailsCard from '../../../components/adminCard/HolidayDetailsCard'

const MyHolidays = () => {
   const { open, anchorEl, handleClick, handleClose } = useMeatballs()
   const holidayDetail = useSelector((state) => state.holidayDetail.holiday)
   console.log(holidayDetail, 'holidays')

   return (
      <>
         <Container>
            <Title>Мои праздники</Title>
         </Container>

         <HolidayDetailsCard
            dataCategory={ACTION_TYPES.HOLIDAYS_DETAIL}
            dataWishlist
            holidayDetail={holidayDetail}
            dataCharity
            handleClick={handleClick}
            handleClose={handleClose}
            open={open}
            anchorEl={anchorEl}
         />
      </>
   )
}

export default MyHolidays

const Container = styled('div')({
   display: 'flex',
   justifyContent: 'space-between',
   marginBottom: '16px',
   paddingLeft: '0px',
})

const Title = styled('p')({
   fontSize: '24px',
   fontWeight: 'bold',
})
