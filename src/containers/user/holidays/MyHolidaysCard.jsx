import { useEffect } from 'react'
import { styled } from '@mui/material/styles'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useMeatballs } from '../../../hooks/useMeatballs'
import Delete from '../../../assets/icons/deleteIcon.svg'
import Edit from '../../../assets/icons/EditIcon.svg'
import { ACTION_TYPES } from '../../../utlis/constants/constnats'

import { getHolidayDetails } from '../../../redux/holidayDetails/holidayDetailThunk'
import HolidayDetailsCard from '../../../components/adminCard/HolidayDetailsCard'
import { deleteHolidayDetailService } from '../../../service/holidayDetailServis'
import useToastBar from '../../../hooks/useToastBar'

const MyHolidays = () => {
   const dispatch = useDispatch()

   const { open, anchorEl, handleClick, handleClose } = useMeatballs()
   const { showToast } = useToastBar()
   const { detailId } = useParams()
   // const navigate = useNavigate()
   const holidayDetail = useSelector((state) => state.holidayDetail.holiday)

   const meatballsContent = [
      {
         icon: Edit,
         title: 'Редактировать',
         func: () => {
            // navigate(`${}/`)
         },
      },
      {
         icon: Delete,
         title: 'Удалить',
         func: async (iDdetail) => {
            await deleteHolidayDetailService(`/api/wishes`, { id: iDdetail })
            dispatch(getHolidayDetails(detailId))
            showToast('success', '', ' успешно удален!')
         },
      },
   ]

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
            meatballsContent={meatballsContent}
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
   alignItems: 'center',
   marginBottom: '16px',
})

const Title = styled('p')({
   fontSize: '24px',
   fontWeight: 'bold',
})
