import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import Cards from '../../../components/card/Card'
import { getAllAdminCharityRequest } from '../../../service/charityAdminService'
import useToastBar from '../../../hooks/useToastBar'
import Snackbar from '../../../components/button/SnackBar'

const AdminCharity = () => {
   const [charities, setCharities] = useState([])
   const { showToast } = useToastBar()
   const navigate = useNavigate()
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
                  return (
                     <Cards
                        key={item.id}
                        changeCard={true}
                        navigateToCharityDetails={() =>
                           navigate(`${item.id}/detail`)
                        }
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
                        charityMeatballs={item.isAnonymous}
                        expectation={item.isReserved}
                        charityMeatballsHandler={true}
                        bookChange={false}
                        openMeatballs="false"
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
