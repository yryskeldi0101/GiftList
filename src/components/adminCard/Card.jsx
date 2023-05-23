// import styled from '@emotion/styled'
// import { CardActions, CardContent, CardMedia } from '@mui/material'
// import React from 'react'
// import Meatballs from '../UI/Meatballs'

// const Card = ({
//    item,
//    meatballsContent,
//    handleClick,
//    handleClose,
//    open,
//    handleNavigate,
//    anchorEl,
//    reserveHandler,
// }) => {
//    return (
//       <StyledCoardContainer key={item.id}>
//          <StyledCard>
//             <CardMedia
//                component="img"
//                height="149"
//                image={item.image}
//                alt="card img"
//             />

//             <StyledCardContent onClick={() => handleNavigate(item.id)}>
//                <Title>{item.title}</Title>
//                <StyledBirthDate>{item.birthDate}</StyledBirthDate>
//                <StyledStatus>{item.status}</StyledStatus>
//             </StyledCardContent>

//             <StyledCardActions>
//                {item.date}
//                <StyledExpectation>{item.expectation}</StyledExpectation>
//                <Meatballs
//                   arrayIcon={meatballsContent}
//                   handleClick={handleClick}
//                   handleClose={handleClose}
//                   open={open}
//                   anchorEl={anchorEl}
//                   reserveHandler={reserveHandler}
//                   id={item.id}
//                />
//             </StyledCardActions>
//          </StyledCard>
//       </StyledCoardContainer>
//    )
// }

// export default Card

// const StyledCoardContainer = styled('div')``

// const StyledCard = styled(Card)`
//    display: flex;
//    flex-direction: column;
//    padding: 16px;
//    width: 300px;
// `

// const StyledCardContent = styled(CardContent)(
//    `
//     padding: 16px 0;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//   `
// )

// const Title = styled.div`
//    font-family: 'Inter';
//    font-style: normal;
//    font-weight: 600;
//    font-size: 14px;
//    line-height: 130%;
//    color: #000000;
// `

// const StyledBirthDate = styled.div`
//    font-family: 'Inter';
//    font-style: normal;
//    font-weight: 400;
//    font-size: 13px;
//    line-height: 16px;
//    color: #0ba360;
//    padding-left: 86px;
// `

// const StyledCardActions = styled(CardActions)(
//    `
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     font-family: 'Inter';
//     font-style: normal;
//     font-weight: 400;
//     font-size: 14px;
//     line-height: 17px;
//     color: #636C84;
//     padding: 0;
//   `
// )

// const StyledExpectation = styled.div`
//    margin-left: 115px;
//    padding: 0;
// `

// const StyledStatus = styled.div`
//    font-weight: 500;
//    font-size: 14px;
//    color: #fd5200;
// `
