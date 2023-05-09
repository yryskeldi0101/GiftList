import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import DetailedPage from '../../DetailedPage '
import {
   deleteCharity,
   getOneCharityById,
   reserveCharity,
} from '../../../redux/charities/charityThunk'
import Snackbar from '../../../components/button/SnackBar'

const CharityDetails = () => {
   const [checked, setChecked] = useState(false)

   const { getOneCharity } = useSelector((state) => state.charity)
   const { userId } = useSelector((state) => state.auth)

   const params = useParams()
   const dispatch = useDispatch()
   useEffect(() => {
      dispatch(getOneCharityById(params.id))
   }, [])
   const navigate = useNavigate()
   const deleteCharityHandler = (id) => {
      dispatch(deleteCharity(id))
         .unwrap()
         .then(() => navigate('/user/charity'))
   }
   const editCharityHandler = (id) =>
      navigate(`/user/charity/${id}/edit_charity`, { state: { getOneCharity } })

   const checkBoxChangeHandler = (e) => setChecked(e.target.checked)

   const reserveCharityHandler = (anonymous, id) => {
      const data = {
         anonymous,
         id,
      }
      dispatch(reserveCharity(data)).then(() => navigate('/user/charity'))
   }

   return (
      <>
         <Snackbar />
         <div>
            <DetailedPage
               id={userId}
               userId={params.userId}
               profileDetails={getOneCharity}
               onClick={deleteCharityHandler}
               handleClick={editCharityHandler}
               checked={checked}
               handleChange={checkBoxChangeHandler}
               handleReserve={reserveCharityHandler}
            />
         </div>
      </>
   )
}

export default CharityDetails
