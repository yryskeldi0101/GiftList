import * as React from 'react'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import { styled } from '@mui/material'

const HolidayDetailsCard = ({ holidayDetail, handleNavigate }) => {
   return (
      <div>
         <CardContainer>
            {holidayDetail?.wishes?.map((item) => {
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
                     </StyledCardActions>
                  </StyledCard>
               )
            })}
         </CardContainer>
      </div>
   )
}

export default HolidayDetailsCard

const CardContainer = styled('div')`
   display: flex;
   flex-wrap: wrap;
   flex-direction: row;
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

const StyledStatus = styled('div')`
   font-weight: 500;
   font-size: 14px;
   color: #fd5200;
   margin-right: 20px;
`
