import * as React from 'react'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import styled from '@emotion/styled'
import { useSelector } from 'react-redux'
import Meatballs from '../UI/Meatballs'

const AdminCard = ({
   dataCategory,
   dataWishlist,
   dataCharity,
   meatballsContent,
   handleClick,
   handleClose,
   open,
   handleNavigate,
   anchorEl,
   reserveHandler,
   setSearchParams,
}) => {
   const { holiday } = useSelector((state) => state.holiday)
   const [currentId, setCurrentId] = React.useState(0)

   const [data, setData] = React.useState([])

   React.useEffect(() => {
      switch (dataCategory) {
         case 'wishlist':
            setData(dataWishlist)
            break

         case 'holidays':
            setData(holiday)
            break

         case 'charity':
            setData(dataCharity)
            break

         default:
            setData(dataWishlist)
            break
      }
   }, [dataCategory, dataWishlist, holiday, dataCharity])

   const handleClickMenuItem = React.useCallback(
      (title, data, func, currentId) => {
         // reserveHandler(cardId)
         handleClose()

         if (title === 'Редактировать') {
            func(setSearchParams)
         }
         func(currentId)
      },
      [holiday, currentId]
   )

   const handleClickMenuDetail = (title, data, func) => {
      handleClickMenuItem(title, data, func, currentId)
   }

   return (
      <div>
         <CardContainer>
            {data.map((item) => (
               <div key={item.id}>
                  <StyledCard>
                     <CardMedia
                        component="img"
                        height="149"
                        image={item.image}
                        alt="card img"
                     />

                     <StyledCardContent onClick={() => handleNavigate(item.id)}>
                        <Title>{item.title}</Title>
                        <StyledBirthDate>{item.birthDate}</StyledBirthDate>
                        <StyledStatus>{item.status}</StyledStatus>
                     </StyledCardContent>

                     <StyledCardActions>
                        {item.date} - {item.id}
                        <StyledExpectation>
                           {item.expectation}
                        </StyledExpectation>
                        <Meatballs
                           arrayIcon={meatballsContent}
                           handleClick={(e) => {
                              handleClick(e)
                              setCurrentId(item.id)
                           }}
                           handleClose={handleClose}
                           open={open}
                           anchorEl={anchorEl}
                           reserveHandler={reserveHandler}
                           id={item.id}
                           date={item.date}
                           name={item.name}
                           image={item.image}
                           handleClickMenuItem={handleClickMenuDetail}
                        />
                     </StyledCardActions>
                  </StyledCard>
               </div>
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
   justify-content: center;
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
// const StyledDate = styled('h3')`
//    font-family: 'Inter';
//    font-style: normal;
//    font-weight: 400;
//    font-size: 14px;
//    line-height: 17px;
//    color: #636c84;
//    min-width: 100px;
// `

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
// const MeatBalssContainer = styled('div')`
//    margin-left: 27px;
//    display: flex;
//    align-items: center;
//    gap: 10px;
// `
// const StyledIcon = styled('img')`
//    width: 40px;
//    height: 40px;
//    border-radius: 100%;
//    object-fit: contain;
// `
