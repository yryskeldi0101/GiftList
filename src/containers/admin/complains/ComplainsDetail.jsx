import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import DetailedPage from '../../DetailedPage '
import {
   getDetailsCharityReq,
   getDetailsWishReq,
} from '../../../service/complainService'
import useToastBar from '../../../hooks/useToastBar'
import {
   blockCharity,
   blockWish,
   deleteCharity,
   deleteWish,
} from '../../../redux/complains/complainsThunk'

export const ComplainsDetail = () => {
   const [wishDetail, setWishDetail] = useState([])
   const { showToast } = useToastBar()
   const [charityDetail, setCharityDetail] = useState([])
   const { id } = useParams()
   const location = useLocation()
   const dispatch = useDispatch()

   const getWishDetail = async () => {
      try {
         const { data } = await getDetailsWishReq(id)
         setWishDetail(data)
         return data
      } catch (error) {
         return showToast(
            'error',
            'Ошибка',
            'Что-то пошло не так повторите попытку позже'
         )
      }
   }
   const getCharityDetail = async () => {
      try {
         const data = await getDetailsCharityReq(id)
         setCharityDetail(data.data)
         return data.data
      } catch (error) {
         return showToast(
            'error',
            'Ошибка',
            'Что-то пошло не так повторите попытку позже'
         )
      }
   }
   useEffect(() => {
      const fetchDetails = async () => {
         if (location.pathname === `/admin/complaints/${id}/charity-details`) {
            await getCharityDetail()
         } else {
            await getWishDetail()
         }
      }

      fetchDetails()
   }, [])

   const blockWishHandler = (id) => {
      dispatch(blockWish(id))
   }
   const blockCharityHandler = (id) => {
      dispatch(blockCharity(id))
   }

   const deleteWishHandler = (id) => {
      dispatch(deleteWish(id))
   }
   const deleteCharityHandler = (id) => {
      dispatch(deleteCharity(id))
   }
   const locationPath =
      location.pathname === `/admin/complaints/${id}/charity-details`
   const dataDetail = locationPath ? charityDetail : wishDetail

   return (
      <div>
         {[dataDetail].map((item) => (
            <p key={id}>
               Жалобы / {locationPath ? item.charityName : item.wishName}
            </p>
         ))}

         {[dataDetail]?.map((item) => (
            <div>
               <DetailedPage
                  key={id}
                  dataDetail={dataDetail}
                  profileDetails={item}
                  complainerData={[item.whoComplaintResponses]}
                  reserveUserImage={item.reserveUserImage}
                  isReserved={item.reserved}
                  category={item.category}
                  title={locationPath ? item.charityName : item.wishName}
                  date={locationPath ? item.dateAdded : item.date}
                  image={locationPath ? item.charityImage : item.wishImage}
                  complains={true}
                  complainer={true}
                  id={id}
                  handleReserve={
                     locationPath
                        ? () => blockCharityHandler(id)
                        : () => blockWishHandler(id)
                  }
                  deleteHandler={
                     locationPath
                        ? () => deleteCharityHandler(id)
                        : () => deleteWishHandler(id)
                  }
               />
            </div>
         ))}
      </div>
   )
}
