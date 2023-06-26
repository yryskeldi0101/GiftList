import { styled } from '@mui/material'
import React, { useEffect, memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getOneMailById } from '../../redux/newsLetter/mailingThunk'

const NewsletterDetails = () => {
   const mailingDetail = useSelector((state) => state.mailing.oneMail)
   const params = useParams()
   const id = +params.id
   const dispatch = useDispatch()
   useEffect(() => {
      dispatch(getOneMailById(id))
   }, [])
   return (
      <GlobalContainer>
         <Container>
            <div>
               <StyledImage src={mailingDetail.image} alt="background" />
            </div>
            <div>
               <StyledTitle>{mailingDetail.title}</StyledTitle>
               <Description>{mailingDetail.description}</Description>
               <DateText>Дата добавления:</DateText>
               <DateNumberText>{mailingDetail.createdAt}</DateNumberText>
            </div>
         </Container>
      </GlobalContainer>
   )
}

export default memo(NewsletterDetails)

const GlobalContainer = styled('div')`
   max-width: 1170px;
   height: 500px;
   padding: 20px;
   background-color: #ffffff;
   margin-top: 50px;
   border-radius: 10px;
`
const StyledImage = styled('img')`
   width: 343px;
   height: 343px;
`
const Container = styled('div')`
   display: flex;
   gap: 20px;
`
const StyledTitle = styled('h3')`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 500;
   font-size: 18px;
   line-height: 130%;
   display: flex;
   align-items: center;
   color: #020202;
`
const Description = styled('p')`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 130%;
   display: flex;
   align-items: center;
   color: #000000;
   margin-top: 20px;
`
const DateText = styled('p')`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   line-height: 130%;
   display: flex;
   align-items: center;
   color: #5c5c5c;
   margin-top: 20px;
`
const DateNumberText = styled('p')`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 130%;
   display: flex;
   align-items: center;
   color: #000000;
   margin-top: 10px;
`
