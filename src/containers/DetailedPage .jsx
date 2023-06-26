import { Card, styled } from '@mui/material'
import { memo } from 'react'
import MyButton from '../components/UI/Button'
import Checkboxes from '../components/UI/Checkbox'
import Spinner from '../components/UI/Spinner'

function DetailedPage({
   profileDetails,
   reserveUserImage,
   isReserved,
   title,
   date,
   image,
   checked,
   onClick,
   id,
   category,
   userId,
   handleClick,
   handleChange,
   handleReserve,
   isLoading,
   complains,
   complainer,
   complainerData,
   deleteHandler,
}) {
   return (
      <StyledCard>
         <StyledInfo>
            <StyledImage>
               <Img src={profileDetails.image || image} alt="cat" />
            </StyledImage>
            <InfoBox>
               <HeaderBox>
                  <TitleBox>
                     <ImgIcon src={profileDetails.userImage} />
                     <StyledTitle>
                        <UserName>{profileDetails.fullName}</UserName>
                        <UserNumber>{profileDetails.phoneNumber}</UserNumber>
                     </StyledTitle>
                  </TitleBox>
                  <StyledReserve>
                     {profileDetails.isAnonymous ? null : (
                        <IconImage src={reserveUserImage} alt="" />
                     )}
                     {isReserved ? <p>Забронирован</p> : <p>В ожидании</p>}
                  </StyledReserve>
               </HeaderBox>
               <StyledText>
                  <h3>{title}</h3>
                  <p>{profileDetails.description}</p>
               </StyledText>
               <StyledData>
                  <div>
                     <Category>Категория:</Category>
                     <span>{category}</span>
                     <State>Состояние:</State>
                     <span>{profileDetails.state}</span>
                  </div>
                  <StyledSubcategory>
                     <Subcategory>Подкатогория:</Subcategory>
                     <span>{profileDetails.subCategory}</span>
                     <Dates>Дата добавления:</Dates>
                     <span>{date}</span>
                  </StyledSubcategory>
               </StyledData>
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
                     <ComplainsContainer>
                        {complainer ? (
                           <div>
                              {complainerData[0]?.map((item) => (
                                 <TitleBox key={id}>
                                    <ComplainerImage src={item.userImage} />
                                    <StyledTitle>
                                       <UserName>{item.fullName}</UserName>
                                       <CauseComplainer>
                                          {item.causesOfComplaint}
                                       </CauseComplainer>
                                    </StyledTitle>
                                 </TitleBox>
                              ))}
                           </div>
                        ) : (
                           ''
                        )}
                        <StyledButtoncContainer>
                           <div>
                              {complains ? (
                                 <DeleteButton
                                    type="submit"
                                    onClick={() =>
                                       deleteHandler(profileDetails.id)
                                    }
                                 >
                                    {isLoading ? <Spinner /> : <p>Удалить</p>}
                                 </DeleteButton>
                              ) : (
                                 <StyledCheckBox>
                                    <Checkboxes
                                       checked={checked}
                                       handleChange={handleChange}
                                    />
                                    <StyledBookText>
                                       Забронировать анонимно
                                    </StyledBookText>
                                 </StyledCheckBox>
                              )}
                           </div>

                           <MyButton
                              variant="contained"
                              background="#8639B5"
                              hoverbackgroundcolor="#860cd1"
                              activebackgroundcolor="#510680"
                              disabled={profileDetails.isReserved}
                              onClick={() =>
                                 handleReserve(checked, profileDetails.id)
                              }
                           >
                              {complains ? (
                                 <div>
                                    {isLoading ? <Spinner /> : 'Заблокировать'}
                                 </div>
                              ) : (
                                 <div>
                                    {isLoading ? <Spinner /> : 'Забронировать'}
                                 </div>
                              )}
                           </MyButton>
                        </StyledButtoncContainer>
                     </ComplainsContainer>
                  )}
               </StyledButton>
            </InfoBox>
         </StyledInfo>
      </StyledCard>
   )
}

export default memo(DetailedPage)
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
const ComplainsContainer = styled('div')`
   display: flex;
   justify-content: space-between;
   align-items: start;
   width: 100%;
`
const StyledButtoncContainer = styled('div')`
   display: flex;
   align-items: center;
   width: 100%;
   margin-left: 13vw;
   gap: 70px;

   p {
      font-weight: 500;
      font-size: '14px';
      line-height: 17px;
      text-transform: uppercase;
      color: #8d949e;
   }
`

const StyledCard = styled(Card)(() => ({
   padding: '20px',
   background: '#FFFFFF',
   border: '2px solid #FFFFFF',
   borderRadius: '10px',
   height: '100%',
   position: 'relative',
   marginTop: '26px',
   paddingBottom: '200px',
}))

const StyledInfo = styled('div')(() => ({
   display: 'flex',
   gap: '20px',
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
   maxWidth: '767px',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'space-between',

   '@media screen and (max-width: 1440px)': {
      width: '700px',
   },
}))

const TitleBox = styled('div')(() => ({
   display: 'flex',
   alignItems: 'center',
   width: '100%',
   marginBottom: '10px',
}))
const ImgIcon = styled('img')(() => ({
   maxWidth: '40px',
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
   fontSize: '14px',
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
const CauseComplainer = styled('h4')(() => ({
   fontWeight: 400,
   fontSize: '14px',
   letterSpacing: '0.02em',
   color: '#FD5200',
}))
const StyledReserve = styled('div')(() => ({
   display: 'flex',
   alignItems: 'center',
   width: '100%',
   justifyContent: 'flex-end',
   gap: '10px',
   p: {
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
   marginTop: '66px',
   gap: '48px',
}))
const ComplainerImage = styled('img')(() => ({
   width: '40px',
   height: '40px',
}))
const DeleteButton = styled('button')(() => ({
   border: 'none',
   background: '#FFF',
}))
