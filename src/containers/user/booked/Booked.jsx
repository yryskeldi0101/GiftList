import { styled } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, memo } from 'react'
import { BookedCharities } from './BookedCharities'
import BookedWishes from './BookedWishes'
import {
   getBookedWishes,
   getBookedCharities,
} from '../../../redux/booked/bookedThunk'
import useToastBar from '../../../hooks/useToastBar'

const Booked = () => {
   const dispatch = useDispatch()
   const { showToast } = useToastBar()
   useEffect(() => {
      dispatch(getBookedCharities())
         .unwrap()
         .then()
         .catch(() =>
            showToast('error', 'Ошибка', 'При загрузке данных произошла ошибка')
         )
      dispatch(getBookedWishes())
         .unwrap()
         .then()
         .catch(() =>
            showToast('error', 'Ошибка', 'При загрузке данных произошла ошибка')
         )
   }, [])

   const { getChraititesData, getWishesData } = useSelector(
      (state) => state.booked
   )

   return (
      <BookedContainer>
         <div>
            <BookedWishes getWishesData={getWishesData} />
            <BookedCharities getChraititesData={getChraititesData} />
         </div>
      </BookedContainer>
   )
}
export default memo(Booked)

const BookedContainer = styled('div')`
   width: 100%;
`
