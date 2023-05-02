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
// import { cardData } from '../../../utlis/constants/cardData'
import { getCharities } from '../../../redux/charities/charityThunk'

const UserCharity = () => {
   const charityData = useSelector((state) => state.charity.charities)
   console.log(charityData)
   const navigate = useNavigate()
   const navigateToAddCharityHandler = () => {
      navigate('add_charity')
   }
   const dispatch = useDispatch()
   useEffect(() => {
      dispatch(getCharities())
   }, [])
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
            {charityData.map((item) => {
               return (
                  // <Link to={`${item.id}/charity_details`} key={item.id}>
                  <div key={item.id}>
                     <Cards
                        changeCard={true}
                        id={item.id}
                        icon={item.icon}
                        userName={item.fullName}
                        birthDate={item.birthDate}
                        title={item.charityName}
                        img={item.image}
                        date={item.dateAdded}
                        reserve={item.isReserved}
                        expectation={item.expectation}
                     />
                  </div>
                  // </Link>
               )
            })}
         </CardContainer>
      </div>
   )
}

export default UserCharity
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
