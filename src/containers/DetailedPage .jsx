import { Card, styled } from '@mui/material'
import MyButton from '../components/UI/Button'
import Checkboxes from '../components/UI/Checkbox'
import Spinner from '../components/UI/Spinner'

function DetailedPage({
   profileDetails,
   checked,
   onClick,
   id,
   userId,
   handleClick,
   handleChange,
   handleReserve,
   isLoading,
}) {
   return (
      <StyledCard>
         <StyledInfo>
            <StyledImage>
               <Img src={profileDetails.image} alt="cat" />
            </StyledImage>
            <InfoBox>
               <HeaderBox>
                  <TitleBox>
                     <ImgIcon src="https://www.vhv.rs/dpng/d/436-4363443_view-user-icon-png-font-awesome-user-circle.png" />
                     <StyledTitle>
                        <UserName>{profileDetails.fullName}</UserName>
                        <UserNumber>{profileDetails.phoneNumber}</UserNumber>
                     </StyledTitle>
                  </TitleBox>
                  <StyledReserve>
                     {profileDetails.isAnonymous ? (
                        <IconImage src={profileDetails.icon} alt="icon" />
                     ) : null}
                     {profileDetails.isReserved ? (
                        <p>Забронирован</p>
                     ) : (
                        <p>В ожидании</p>
                     )}
                  </StyledReserve>
               </HeaderBox>
               <StyledText>
                  <h3>{profileDetails.charityName}</h3>
                  <p>{profileDetails.description}</p>
               </StyledText>
               <StyledData>
                  <div>
                     <Category>Категория:</Category>
                     <span>{profileDetails.category}</span>
                     <State>Состояние:</State>
                     <span>{profileDetails.state}</span>
                  </div>
                  <StyledSubcategory>
                     <Subcategory>Подкатогория:</Subcategory>
                     <span>{profileDetails.subCategory}</span>
                     <Dates>Дата добавления:</Dates>
                     <span>{profileDetails.dateAdded}</span>
                  </StyledSubcategory>
               </StyledData>
            </InfoBox>
         </StyledInfo>
         <StyledButton>
            {+userId === id ? (
               <StyledContainer>
                  <MyButton
                     variant="outlined"
                     border="none"
                     defaultcolor="#8D949E"
                     onClick={() => onClick(profileDetails.id)}
                  >
                     {isLoading ? <Spinner /> : 'Удалить'}
                  </MyButton>
                  <MyButton
                     variant="contained"
                     background="#8639B5"
                     hoverbackgroundcolor="#860cd1"
                     activebackgroundcolor="#510680"
                     onClick={() => handleClick(profileDetails.id)}
                  >
                     Редактировать
                  </MyButton>
               </StyledContainer>
            ) : (
               <StyledButtoncContainer>
                  <StyledCheckBox>
                     <Checkboxes
                        checked={checked}
                        handleChange={handleChange}
                     />
                     <StyledBookText>Заброниовать анонимно</StyledBookText>
                  </StyledCheckBox>
                  <MyButton
                     variant="contained"
                     background="#8639B5"
                     hoverbackgroundcolor="#860cd1"
                     activebackgroundcolor="#510680"
                     disabled={profileDetails.isReserved}
                     onClick={() => handleReserve(checked, profileDetails.id)}
                  >
                     {isLoading ? <Spinner /> : 'Забронировать'}
                  </MyButton>
               </StyledButtoncContainer>
            )}
         </StyledButton>
      </StyledCard>
   )
}

export default DetailedPage
const StyledBookText = styled('h3')`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 19px;
   color: #000000;
`
const StyledContainer = styled('div')`
   display: flex;
   align-items: center;
   width: 100%;
   justify-content: flex-end;
   gap: 48px;
`
const StyledCheckBox = styled('div')`
   display: flex;
   align-items: center;
   gap: 10px;
`
const StyledButtoncContainer = styled('div')`
   display: flex;
   align-items: center;
   width: 100%;
   justify-content: flex-end;
   gap: 70px;
`
const StyledCard = styled(Card)(() => ({
   padding: '20px',
   background: '#FFFFFF',
   border: '2px solid #FFFFFF',
   borderRadius: '10px',
   width: '1170px',
   height: '100%',
   position: 'relative',
   marginTop: '26px',
   paddingBottom: '200px',
}))

const StyledInfo = styled('div')(() => ({
   display: 'flex',
}))
const StyledImage = styled('div')(() => ({
   display: 'flex',
}))
const Img = styled('img')(() => ({
   borderRadius: '8px',
   width: '343px',
   height: '343px',
}))

const InfoBox = styled('div')(() => ({
   marginTop: '30px',
   marginLeft: '20px',
   display: 'flex',
   flexDirection: 'column',
}))

const HeaderBox = styled('div')(() => ({
   width: '767px',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'space-between',
}))

const TitleBox = styled('div')(() => ({
   display: 'flex',
   alignItems: 'center',
}))
const ImgIcon = styled('img')(() => ({
   width: '40px',
   height: ' 40px',
}))
const StyledTitle = styled('div')(() => ({
   marginLeft: '16px',
   p: {
      color: '#5C5C5C',
   },
}))
const UserName = styled('p')(() => ({
   fontWeight: '500',
   fontSize: '16px',
   lineHeight: '19px',
   letterSpacing: '0.02em',
}))
const UserNumber = styled('h4')(() => ({
   marginTop: '4px',
   fontWeight: '400',
   fontSize: '14px',
   lineHeight: '17px',
   letterSpacing: '0.02em',
   color: '#5C5C5C',
}))
const StyledReserve = styled('div')(() => ({
   display: 'flex',
   alignItems: 'center',
   p: {
      marginRight: '4px',
      marginLeft: '10px',
      color: '#3774D0',
   },
}))
const IconImage = styled('img')(() => ({
   width: '20px',
   height: '20px',
}))

const StyledText = styled('div')(() => ({
   marginTop: '40px',
   p: {
      marginTop: '30px',
   },
}))

const StyledData = styled('div')(() => ({
   display: 'flex',
   marginTop: '20px',
}))

const StyledSubcategory = styled('div')(() => ({
   marginLeft: '159px',
}))

const Category = styled('p')(() => ({
   color: '#5C5C5C',
   fontWeight: '400',
   fontSize: '14px',
   lineHeight: '130%',
}))

const State = styled('p')(() => ({
   color: '#5C5C5C',
   fontWeight: '400',
   fontSize: '14px',
   lineHeight: '130%',
   marginTop: '20px',
}))

const Subcategory = styled('p')(() => ({
   color: '#5C5C5C',
   fontWeight: '400',
   fontSize: '14px',
   lineHeight: '130%',
}))

const Dates = styled('p')(() => ({
   color: '#5C5C5C',
   fontWeight: '400',
   fontSize: '14px',
   lineHeight: '130%',
   marginTop: '20px',
}))

const StyledButton = styled('div')(() => ({
   display: 'flex',
   marginLeft: '50%',
   marginTop: '66px',
   gap: '48px',
}))
