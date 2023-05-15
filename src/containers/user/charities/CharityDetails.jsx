import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import DetailedPage from '../../DetailedPage '
import { getOneCharityById } from '../../../redux/charities/charityThunk'
import Snackbar from '../../../components/button/SnackBar'
import useToastBar from '../../../hooks/useToastBar'
import {
   deleteCharityRequest,
   reserveCharityRequest,
} from '../../../service/charityService'

const CharityDetails = () => {
   const [checked, setChecked] = useState(false)
   const isLoading = useSelector((state) => state.charity.isLoading)
   const { getOneCharity } = useSelector((state) => state.charity)
   const { userId } = useSelector((state) => state.auth)
   const { showToast } = useToastBar()
   const params = useParams()
   const dispatch = useDispatch()
   useEffect(() => {
      dispatch(getOneCharityById(params.id))
   }, [])
   const navigate = useNavigate()
   const deleteCharityHandler = async (id) => {
      try {
         const data = await deleteCharityRequest(id)
         navigate('/user/charity')
         return data
      } catch (error) {
         return showToast(
            'error',
            'Ошибка',
            'Что-то пошло не так повторите попытку позже'
         )
      }
   }
   const editCharityHandler = (id) =>
      navigate(`/user/charity/${id}/edit_charity`, { state: { getOneCharity } })

   const checkBoxChangeHandler = (e) => setChecked(e.target.checked)

   const reserveCharityHandler = async (anonymous, id) => {
      const dataReserve = {
         anonymous,
         id,
      }
      try {
         const { data } = await reserveCharityRequest(dataReserve)
         showToast(
            'success',
            'Успешно',
            'благотворительность успешно бронирована'
         )
         return data
      } catch (error) {
         return showToast(
            'error',
            'Ошибка',
            'Что-то пошло не так повторите попытку позже'
         )
      }
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
               isLoading={isLoading}
               handleChange={checkBoxChangeHandler}
               handleReserve={reserveCharityHandler}
            />
         </div>
      </>
   )
}

export default CharityDetails
