import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import bagIcon from '../../../assets/images/Bag.png'
import plaidIcon from '../../../assets/images/Plaid.png'
import shirtIcon from '../../../assets/images/Shirt.png'
import { ReactComponent as PlusIcon } from '../../../assets/icons/plusIcon.svg'
import MyButton from '../../../components/UI/Button'
import Cards from '../../../components/card/Card'
import useToastBar from '../../../hooks/useToastBar'
import {
   getCharityRequest,
   reserveCharityRequest,
} from '../../../service/charityService'

const UserCharity = () => {
   const [charityData, setCharityData] = useState([])
   const navigate = useNavigate()
   const { showToast } = useToastBar()

   const navigateToAddCharityHandler = () => navigate('add_charity')
   const navigateToCharityDetails = (id, userId) =>
      navigate(`${id}/${userId}/charity_details`)

   const getCharities = async () => {
      try {
         const { data } = await getCharityRequest()
         return data
      } catch (error) {
         return showToast(
            'error',
            'Ошибка',
            'Что-то пошло не так повторите попытку позже'
         )
      }
   }

   useEffect(() => {
      async function getData() {
         const data = await getCharities()
         setCharityData(data)
      }

      getData()
   }, [])

   const reserveCharityHandler = async (id, charityId) => {
      const dataReserve = {
         id: charityId,
         anonymous: id !== '1',
      }
      try {
         const { data } = await reserveCharityRequest(dataReserve)
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
      <div>
         <StyledContainer>
            <Title>Благотворительность</Title>
            <IconsContainer>
               <Images src={bagIcon} alt="bag" />
               <Images src={plaidIcon} alt="plaid" />
               <Images src={shirtIcon} alt="shirt" />
            </IconsContainer>
            <ButtonContainer>
               <MyButton
                  variant="contained"
                  hoverbackgroundcolor="#9c04fa"
                  background="#8639B5"
                  activebackgroundcolor="#44046b"
                  defaultcolor="#ffff"
                  onClick={navigateToAddCharityHandler}
               >
                  <PlusIcon />
                  Добавить подарок
               </MyButton>
            </ButtonContainer>
         </StyledContainer>
         <CardContainer>
            <StyledCardContainer>
               {charityData?.map((item) => {
                  return (
                     <div key={item.id}>
                        <Cards
                           changeCard={true}
                           navigateToCharityDetails={navigateToCharityDetails}
                           reserveHandler={reserveCharityHandler}
                           id={item.id}
                           userId={item.userId}
                           icon={item.userImage}
                           reserveUserImage={item.reserveUserImage}
                           userName={item.fullName}
                           birthDate={item.birthDate}
                           title={item.charityName}
                           img={item.image}
                           state={item.state}
                           category={item.category}
                           date={item.dateAdded}
                           disableMeatalls={item.isReserved}
                           reserve={item.isReserved}
                           charityMeatballs={item.isAnonymous}
                           expectation={item.isReserved}
                           charityMeatballsHandler={true}
                           bookChange={false}
                           openMeatballs={false}
                        />
                     </div>
                  )
               })}
            </StyledCardContainer>
         </CardContainer>
      </div>
   )
}

export default UserCharity
const StyledCardContainer = styled('div')`
   display: flex;
   width: 100%;
   flex-wrap: wrap;
   gap: 67px;
`
const StyledContainer = styled('div')`
   display: flex;
   align-items: center;
   margin-top: 40px;
`
const CardContainer = styled('div')`
   margin-top: 31px;
`
const Images = styled('img')`
   cursor: pointer;
`
const IconsContainer = styled('div')`
   display: flex;
   align-items: center;
   gap: 16px;
   margin-left: 28px;
`
const Title = styled('h1')`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 500;
   font-size: 20px;
   line-height: 24px;
   letter-spacing: 0.2px;
   color: #020202;
`
const ButtonContainer = styled('div')`
   display: flex;
   justify-content: flex-end;
   width: 100%;
   margin-right: 40px;
`
