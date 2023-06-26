import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material'
import {
   blockAdminCharityRequest,
   deleteAdminCharityRequest,
   getAllAdminCharityRequest,
} from '../../../service/charityAdminService'
import useToastBar from '../../../hooks/useToastBar'
import Snackbar from '../../../components/button/SnackBar'
import CharityCard from '../../../components/card/CharityCard'

const AdminCharity = () => {
   const [charities, setCharities] = useState([])
   const { showToast } = useToastBar()
   const getAllCharities = async () => {
      try {
         const data = await getAllAdminCharityRequest()
         const charityData = data.data
         setCharities(charityData)
         return charities
      } catch (error) {
         return showToast(
            'error',
            'Ошибка',
            'При загрузке данных произошла ошибка! повторите попытку позже'
         )
      }
   }
   const deleteCharityHandler = async (id) => {
      try {
         await deleteAdminCharityRequest(id)
         showToast('success', 'Успешно', 'Благотворительность успешно удален')
         return await getAllCharities()
      } catch (error) {
         return showToast(
            'error',
            'Ошибка',
            'Что-то пошло не так повторите попытку позже'
         )
      }
   }
   const blockCharity = async (id) => {
      try {
         await blockAdminCharityRequest(id)
         showToast(
            'success',
            'Успешно',
            'Благотворительность успешно заблокирован'
         )
         return await getAllCharities()
      } catch (error) {
         return showToast(
            'error',
            'Ошибка',
            'Что-то пошло не так повторите попытку позже'
         )
      }
   }
   useEffect(() => {
      getAllCharities()
   }, [])
   const charityData = charities || []
   return (
      <>
         <Snackbar />
         <GlobalContainer>
            <CardContainer>
               {charityData?.map((item) => {
                  console.log(item, 'iteeem')
                  return (
                     <CharityCard
                        key={item.id}
                        id={item.id}
                        userId={item.userId}
                        icon={item.userImage}
                        userName={item.fullName}
                        birthDate={item.birthDate}
                        title={item.charityName}
                        img={item.image}
                        state={item.state}
                        date={item.dateAdded}
                        disableMeatalls={item.isReserved}
                        reserve={item.isReserved}
                        reserveIcon={item.userImage}
                        isAnonymous={item.isAnonymous}
                        handleDelete={deleteCharityHandler}
                        handleBlock={blockCharity}
                        adminCharity
                     />
                  )
               })}
            </CardContainer>
         </GlobalContainer>
      </>
   )
}
const GlobalContainer = styled('div')`
   margin-top: 95px;
`
const CardContainer = styled('div')`
   display: flex;
   flex-wrap: wrap;
   gap: 60px;
   max-width: 1170px;
`
export default AdminCharity
