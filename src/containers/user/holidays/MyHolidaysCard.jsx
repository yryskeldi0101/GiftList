import { useEffect } from 'react'
import { styled } from '@mui/material/styles'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useMeatballs } from '../../../hooks/useMeatballs'
import { ACTION_TYPES } from '../../../utlis/constants/constnats'

import { getHolidayDetails } from '../../../redux/holidayDetails/holidayDetailThunk'
import HolidayDetailsCard from '../../../components/adminCard/HolidayDetailsCard'

const MyHolidays = () => {
   const dispatch = useDispatch()
   const { open, anchorEl, handleClick, handleClose } = useMeatballs()
   const { detailId } = useParams()
   const holidayDetail = useSelector((state) => state.holidayDetail.holiday)

   useEffect(() => {
      dispatch(getHolidayDetails(detailId))
   }, [])

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
