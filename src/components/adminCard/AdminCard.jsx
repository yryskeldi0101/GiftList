import * as React from 'react'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import styled from '@emotion/styled'
import Meatballs from '../UI/Meatballs'

const AdminCard = ({
   dataCategory,
   dataWishlist,
   dataHolidays,
   dataCharity,
   meatballsContent,
   handleClick,
   handleClose,
   open,
   anchorEl,
}) => {
   let data
   switch (dataCategory) {
      case 'wishlist':
         data = dataWishlist
         break
      case 'holidays':
         data = dataHolidays
         break
      case 'charity':
         data = dataCharity
         break
      default:
         data = dataWishlist
   }

   return (
      <div>
         <CardContiner>
            {data.map((item) => (
               <StyledCoardContainer key={item.id}>
                  <StyledCard>
                     <CardMedia
                        component="img"
                        height="149"
                        image={item.img}
                        alt="card img"
                     />

                     <StyledCardContent>
                        <Title>{item.title}</Title>
                        <StyledBirthDate>{item.birthDate}</StyledBirthDate>
                        <StyledStatus>{item.status}</StyledStatus>
                     </StyledCardContent>

                     <StyledCardActions>
                        {item.date}
                        <StyledExpectation>
                           {item.expectation}
                        </StyledExpectation>
                        <Meatballs
                           arrayIcon={meatballsContent}
                           handleClick={handleClick}
                           handleClose={handleClose}
                           open={open}
                           anchorEl={anchorEl}
                        />
                     </StyledCardActions>
                  </StyledCard>
               </StyledCoardContainer>
            ))}
         </CardContiner>
      </div>
   )
}

export default AdminCard

const CardContiner = styled('div')`
   display: flex;
   flex-wrap: wrap;
   flex-direction: row;
   width: 1000px;
   row-gap: 30px;
   gap: 36px;
`
const StyledCoardContainer = styled('div')``

const StyledCard = styled(Card)`
   display: flex;
   flex-direction: column;
   padding: 16px;
   width: 300px;
`

const StyledCardContent = styled(CardContent)(
   `
    padding: 16px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;    
  `
)

const Title = styled.div`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 600;
   font-size: 14px;
   line-height: 130%;
   color: #000000;
`

const StyledBirthDate = styled.div`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 13px;
   line-height: 16px;
   color: #0ba360;
   padding-left: 86px;
`

const StyledCardActions = styled(CardActions)(
   `
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #636C84;
    padding: 0;
  `
)

const StyledExpectation = styled.div`
   margin-left: 115px;
   padding: 0;
`

const StyledStatus = styled.div`
   font-weight: 500;
   font-size: 14px;
   color: #fd5200;
`
