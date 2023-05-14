import React, { useEffect } from 'react'
import { styled } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import bagIcon from '../../../assets/images/Bag.png'
import plaidIcon from '../../../assets/images/Plaid.png'
import shirtIcon from '../../../assets/images/Shirt.png'
import { ReactComponent as PlusIcon } from '../../../assets/icons/plusIcon.svg'
import MyButton from '../../../components/UI/Button'
import Cards from '../../../components/card/Card'
import {
   getCharities,
   reserveCharity,
} from '../../../redux/charities/charityThunk'

const UserCharity = () => {
   const charityData = useSelector((state) => state.charity.charities)
   const navigate = useNavigate()
   const navigateToAddCharityHandler = () => navigate('add_charity')
   const navigateToCharityDetails = (id, userId) =>
      navigate(`${id}/${userId}/charity_details`)
   const dispatch = useDispatch()
   useEffect(() => {
      dispatch(getCharities())
   }, [])
   const reserveCharityHandler = (id, charityId) => {
      const data = {
         id: charityId,
         anonymous: id !== '1',
      }
      dispatch(reserveCharity(data))
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
               {charityData.map((item) => {
                  return (
                     <div key={item.id}>
                        <Cards
                           changeCard={true}
                           navigateToCharityDetails={navigateToCharityDetails}
                           reserveHandler={reserveCharityHandler}
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
