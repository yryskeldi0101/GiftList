import { styled } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { BookedCharities } from './BookedCharities'
import BookedWishes from './BookedWishes'
import {
   getBookedWishes,
   getBookedCharities,
} from '../../../redux/booked/bookedThunk'

const Booked = () => {
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(getBookedCharities())
      dispatch(getBookedWishes())
   }, [])

   const { getChraititesData, getWishesData } = useSelector(
      (state) => state.booked
   )

   console.log(
      getChraititesData,
      getWishesData,
      ' getChraititesData, getWishesData'
   )
   return (
      <BookedContainer>
         <h1>Забронированные</h1>

         <div>
            <BookedWishes getWishesData={getWishesData} />
            <BookedCharities getChraititesData={getChraititesData} />
         </div>
      </BookedContainer>
   )
}
export default Booked

const BookedContainer = styled('div')({
   margin: '0 10px 0 0',
})
