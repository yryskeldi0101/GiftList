import * as React from 'react'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import { styled } from '@mui/material'
import { ACTION_TYPES } from '../../utlis/constants/constnats'
import Meatballs from '../UI/Meatballs'
import HolidayMeatballs from '../UI/HolidayMeatballs'

const AdminCard = ({
   dataCategory,
   dataWishlist,
   dataHolidays,
   dataCharity,
   meatballsContent,
   handleClick,
   handleClose,
   display,
   open,
   anchorEl,
   setSearchParams,
   handleNavigate,
}) => {
   const [currentId, setCurrentId] = React.useState(0)
   const [currentData, setCurrentData] = React.useState({})

   const handleClickMenuItem = React.useCallback(
      (title, func) => {
         handleClose()

         if (typeof func === 'function') {
            if (title === 'Редактировать') {
               func(setSearchParams, currentData, currentId)
            }
            if (currentId) {
               func(currentId, { ...currentData, currentId }, currentId)
            }
         }
      },
      [dataHolidays, currentId]
   )

   const handleClickMenuDetail = (title, func, currentId) => {
      handleClickMenuItem(title, func, currentId)
   }

   return (
      <div>
         <CardContainer>
            {dataCategory === ACTION_TYPES.WISHLIST &&
               dataWishlist?.map((item) => (
                  <StyledCard key={item.id}>
                     <CardMedia
                        component="img"
                        height="149"
                        image={item.image}
                        alt="card img"
                     />

                     <StyledCardContent>
                        <Title>{item.nameHoliday}</Title>
                        <StyledBirthDate>{item.nameWish}</StyledBirthDate>
                     </StyledCardContent>
                     <StyledCardActions>
                        <p>{item.date}</p>
                        <MeatBalssContainer>
                           <StyledStatus>{item.status}</StyledStatus>
                           <Meatballs
                              display={display}
                              arrayIcon={meatballsContent}
                              handleClick={handleClick}
                              handleClose={handleClose}
                              open={open}
                              anchorEl={anchorEl}
                           />
                        </MeatBalssContainer>
                     </StyledCardActions>
                  </StyledCard>
               ))}
            {dataCategory === ACTION_TYPES.HOLIDAYS &&
               dataHolidays?.map((item) => {
                  return (
                     <StyledCard key={item.id}>
                        <CardMedia
                           component="img"
                           height="149"
                           image={item.image}
                           onClick={() =>
                              typeof handleNavigate === 'function'
                                 ? handleNavigate(item.id)
                                 : null
                           }
                           alt="card img"
                           sx={{ cursor: 'pointer' }}
                        />

                        <StyledCardContent>
                           <Title>{item.name}</Title>
                           <StyledBirthDate>{item.birthDate}</StyledBirthDate>
                           <StyledStatus>{item.status}</StyledStatus>
                        </StyledCardContent>

                        <StyledCardActions>
                           <p>{item.date}</p>
                           <MeatBalssContainer>
                              <HolidayMeatballs
                                 display={display}
                                 arrayIcon={meatballsContent}
                                 handleClick={(e) => {
                                    handleClick(e)
                                    setCurrentId(item.id)
                                    setCurrentData({
                                       date: item.date,
                                       image: item.image,
                                       name: item.name,
                                    })
                                 }}
                                 handleClose={handleClose}
                                 open={open}
                                 anchorEl={anchorEl}
                                 handleClickMenuItem={handleClickMenuDetail}
                              />
                           </MeatBalssContainer>
                        </StyledCardActions>
                     </StyledCard>
                  )
               })}
            {dataCategory === ACTION_TYPES.HOLIDAYS_DETAIL &&
               dataHolidays?.map((item) => {
                  return (
                     <StyledCard key={item.id}>
                        <CardMedia
                           component="img"
                           height="149"
                           image={item.image}
                           alt="card img"
                        />

                        <StyledCardContent
                           onClick={() =>
                              typeof handleNavigate === 'function'
                                 ? handleNavigate(item.id)
                                 : null
                           }
                        >
                           <Title>{item.name}</Title>
                           <StyledBirthDate>{item.birthDate}</StyledBirthDate>
                           <StyledStatus>{item.status}</StyledStatus>
                        </StyledCardContent>

                        <StyledCardActions>
                           <p>{item.date}</p>
                           <MeatBalssContainer>
                              <Meatballs
                                 display={display}
                                 arrayIcon={meatballsContent}
                                 handleClick={(e) => {
                                    handleClick(e)
                                    setCurrentId(item.id)
                                 }}
                                 id={item.id}
                                 date={item.date}
                                 name={item.name}
                                 image={item.image}
                                 handleClose={handleClose}
                                 open={open}
                                 anchorEl={anchorEl}
                                 handleClickMenuItem={handleClickMenuDetail}
                              />
                           </MeatBalssContainer>
                        </StyledCardActions>
                     </StyledCard>
                  )
               })}
            {dataCategory === ACTION_TYPES.CHARITIES &&
               dataCharity?.map((item) => (
                  <StyledCard key={item.id}>
                     <CardMedia
                        component="img"
                        height="149"
                        image={item.image}
                        alt="card img"
                     />

                     <StyledCardContent>
                        <Title>{item.name}</Title>
                        <StyledBirthDate>{item.nameWish}</StyledBirthDate>
                        <StyledStatus>{item.state}</StyledStatus>
                     </StyledCardContent>

                     <StyledCardActions>
                        <StyledDate>{item.date}</StyledDate>
                        <MeatBalssContainer>
                           <StyledIcon src={item.reservePhoto} />
                           <StyledExpectation>
                              {item.isReserve ? (
                                 <p>Забронирован</p>
                              ) : (
                                 <p>В ожидании</p>
                              )}
                           </StyledExpectation>
                           <Meatballs
                              currentId={currentId}
                              display={display}
                              arrayIcon={meatballsContent}
                              handleClick={handleClick}
                              handleClose={handleClose}
                              open={open}
                              anchorEl={anchorEl}
                           />
                        </MeatBalssContainer>
                     </StyledCardActions>
                  </StyledCard>
               ))}
         </CardContainer>
      </div>
   )
}

export default AdminCard
const CardContainer = styled('div')`
   display: flex;
   flex-wrap: wrap;
   flex-direction: row;
   gap: 61px;
   /* justify-content: center; */
`
const StyledCard = styled(Card)`
   padding: 20px;
   width: 349px;
`

const StyledCardContent = styled(CardContent)`
   padding: 16px 0;
   display: flex;
   justify-content: space-between;
   align-items: center;
`

const Title = styled('div')`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 600;
   font-size: 14px;
   line-height: 130%;
   color: #000000;
`

const StyledBirthDate = styled('div')`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 13px;
   line-height: 16px;
   color: #0ba360;
   padding-left: 86px;
`

const StyledCardActions = styled('div')`
   display: flex;
   align-items: center;
   justify-content: space-between;
   width: 100%;
   p {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      color: #636c84;
   }
`
const StyledDate = styled('h3')`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   line-height: 17px;
   color: #636c84;
   min-width: 100px;
`

const StyledExpectation = styled('div')`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   line-height: 17px;
   color: #636c84;
`

const StyledStatus = styled('div')`
   font-weight: 500;
   font-size: 14px;
   color: #fd5200;
   margin-right: 20px;
`
const MeatBalssContainer = styled('div')`
   margin-left: 27px;
   display: flex;
   align-items: center;
   gap: 10px;
`
const StyledIcon = styled('img')`
   width: 40px;
   height: 40px;
   border-radius: 100%;
   object-fit: contain;
`
