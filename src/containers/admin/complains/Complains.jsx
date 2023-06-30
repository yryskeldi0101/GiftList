import styled from '@emotion/styled'
import React, { useEffect, useState, memo } from 'react'
import { useNavigate } from 'react-router-dom'

import { getAllComplainsReq } from '../../../service/complainService'
import useToastBar from '../../../hooks/useToastBar'
import Cards from '../../../components/card/Card'
import Spinner from '../../../components/UI/Spinner'

const Complains = () => {
   const { showToast } = useToastBar()
   const [isLoading, setIsLoading] = useState(true)
   const [complains, setComplains] = useState([])
   const navigate = useNavigate()

   const getAllComplains = async () => {
      try {
         const { data } = await getAllComplainsReq()
         setComplains(data)
         return data
      } catch (error) {
         return showToast(
            'error',
            'Ошибка',
            'Что-то пошло не так повторите попытку позже'
         )
      } finally {
         setIsLoading(false)
      }
   }
   useEffect(() => {
      getAllComplains()
   }, [])

   const openWishCardDetails = (id) => {
      navigate(`${id}/wish-details`)
   }
   const openCharityCardDetails = (id) => {
      navigate(`${id}/charity-details`)
   }
   return (
      <ComplainTitle>
         <h1>Жалобы</h1>

         {isLoading ? (
            <StyledSpinner>
               <Spinner />
            </StyledSpinner>
         ) : (
            <ComplainCards>
               {complains.charityResponseWIthComplaints?.map((obj) => (
                  <Cards
                     key={obj.id}
                     id={obj.id}
                     icon={obj.userImage}
                     secondIcon={obj.whomUserImage}
                     userName={obj.fullName}
                     title={obj.name}
                     img={obj.charityImage}
                     date={obj.dateOfIssue}
                     birthDate="День рождения"
                     reserve={obj.reserve}
                     changeCard="true"
                     charityMeatballsHandler={false}
                     complainChange={true}
                     display={true}
                     complainsCard={true}
                     navigateToCharityDetails={openCharityCardDetails}
                     meatballsChangeHandler={() =>
                        openCharityCardDetails(obj.id)
                     }
                  />
               ))}

               {complains.wishResponseWithComplaints?.map((obj) => (
                  <Cards
                     key={obj.id}
                     id={obj.id}
                     icon={obj.userImage}
                     secondIcon={obj.whomUserImage}
                     userName={obj.fullName}
                     birthDate="День рождения"
                     title={obj.name}
                     img={obj.wishImage}
                     date={obj.dateOfIssue}
                     reserve={obj.reserve}
                     changeCard="true"
                     complainChange={true}
                     display={true}
                     complainsCard={true}
                     navigateToCharityDetails={openWishCardDetails}
                     meatballsChangeHandler={() => openWishCardDetails(obj.id)}
                  />
               ))}
            </ComplainCards>
         )}
      </ComplainTitle>
   )
}

export default memo(Complains)

const ComplainTitle = styled('div')(() => ({
   width: '100%',
   h1: {
      padding: '40px 0 30px',
      fontWeight: 500,
      fontSize: '20px',
      display: 'flex',
      alignItems: 'center',
      letterSpacing: '0.2px',
      color: '#020202',
   },
}))
const ComplainCards = styled('div')(() => ({
   display: 'flex',
   flexWrap: 'wrap',
   gap: '40px',
   width: '100%',
}))
const StyledSpinner = styled('div')(() => ({
   marginTop: '200px',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
}))
