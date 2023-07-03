import React, { useEffect, memo } from 'react'
import { styled } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import bagIcon from '../../../assets/images/Bag.png'
import plaidIcon from '../../../assets/images/Plaid.png'

import shirtIcon from '../../../assets/images/Shirt.png'
import { ReactComponent as PlusIcon } from '../../../assets/icons/plusIcon.svg'
import MyButton from '../../../components/UI/Button'

import useToastBar from '../../../hooks/useToastBar'
import { reserveCharityRequest } from '../../../service/charityService'
import CharityCard from '../../../components/card/CharityCard'
import { getAllUserCharities } from '../../../redux/search/searchThunk'

const UserCharity = () => {
   const dataCharitySearched = useSelector((state) => state.search.data)
   const navigate = useNavigate()
   const { showToast } = useToastBar()
   const navigateToAddCharityHandler = () => navigate('add_charity')
   const navigateToCharityDetails = (id, userId) =>
      navigate(`${id}/${userId}/charity_details`)
   const dispatch = useDispatch()
   useEffect(() => {
      dispatch(getAllUserCharities())
         .unwrap()
         .then()
         .catch(() =>
            showToast(
               'error',
               'Ошибка',
               'При загрузке данных произошла ошибка! повторите попытку позже'
            )
         )
   }, [dispatch])

   const reserveCharityHandler = async (id, anonym) => {
      const dataReserve = {
         id,
         anonymous: anonym,
      }
      try {
         await reserveCharityRequest(dataReserve)
         showToast(
            'success',
            'Успешно',
            'Благотворительность успешно забронирован'
         )
         return dispatch(getAllUserCharities())
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
               {dataCharitySearched?.map((item) => {
                  return (
                     <div key={item.id}>
                        <CharityCard
                           navigateToCharityDetails={navigateToCharityDetails}
                           reserveHandler={reserveCharityHandler}
                           id={item.id}
                           userId={item.userId}
                           icon={item.userImage || item.image}
                           userName={item.fullName || item.firstName}
                           birthDate={item.birthDate}
                           title={item.charityName}
                           img={item.image}
                           state={item.state}
                           date={item.dateAdded}
                           disableMeatalls={item.isReserved}
                           reserve={item.isReserved}
                           charityMeatballs={item.isAnonymous}
                           isAnonymous={item.isAnonymous}
                           expectation={item.isReserved}
                           reserveIcon={item.reserveUserImage || item.image}
                           reserveUserImage={item.reserveUserImage}
                           userCharity
                        />
                     </div>
                  )
               })}
            </StyledCardContainer>
         </CardContainer>
      </div>
   )
}

export default memo(UserCharity)
const StyledCardContainer = styled('div')`
   display: flex;
   flex-wrap: wrap;
   width: 100%;
   gap: 40px;
   justify-content: flex-start;
   align-items: flex-start;
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
`
