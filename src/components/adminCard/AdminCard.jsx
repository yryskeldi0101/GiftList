import * as React from 'react'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import { styled } from '@mui/material'
import Meatballs from '../UI/Meatballs'
import { ACTION_TYPES } from '../../utlis/constants/constnats'

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
}) => {
   let data = []
   switch (dataCategory) {
      case ACTION_TYPES.WISHLIST:
         data = dataWishlist
         break
      case ACTION_TYPES.HOLIDAYS:
         data = dataHolidays
         break
      case ACTION_TYPES.CHARITIES:
         data = dataCharity
         break
      default:
         data = dataWishlist
   }
   return (
      <div>
         <CardContainer>
            {dataCategory === ACTION_TYPES.WISHLIST &&
               data?.map((item) => (
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
               data?.map((item) => (
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
                        <StyledStatus>{item.status}</StyledStatus>
                     </StyledCardContent>
                     <StyledCardActions>
                        <p>{item.date}</p>
                        <MeatBalssContainer>
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
            {dataCategory === ACTION_TYPES.CHARITIES &&
               data?.slice(0, 3).map((item) => (
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
   max-width: 1170px;
   row-gap: 40px;
   gap: 61px;
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
`
const MeatBalssContainer = styled('div')`
   margin-left: 27px;
   display: flex;
   align-items: center;
`
const StyledIcon = styled('img')`
   width: 40px;
   height: 40px;
   border-radius: 100%;
   object-fit: contain;
`
