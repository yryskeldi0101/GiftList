import React from 'react'
import { styled } from '@mui/material'
// import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import SideBar from '../../../layout/SideBar'

const NotificationProfile = () => {
   const location = useLocation()
   const currentData = location?.state.item ?? {}
   const currentWidth = window.innerWidth

   return (
      <StyledNotificationProfile>
         <SideBar />
         <StyledProfile currentWidth={currentWidth}>
            <Img src={currentData.image} />
            <div>
               <MainInfo>Основная информация</MainInfo>

               <HeaderProfile>
                  <div>
                     <Span>Имя</Span>
                     <Title>{currentData.fromWhomUserFullName}</Title>
                  </div>
                  <div>
                     <Span>Дата:</Span>
                     <Title>{currentData.createdAt}</Title>
                  </div>
               </HeaderProfile>
               <div>
                  <Span>message:</Span>
                  <Title>{currentData.message}</Title>
               </div>
            </div>
         </StyledProfile>
      </StyledNotificationProfile>
   )
}

export default NotificationProfile

const StyledNotificationProfile = styled('div')(() => ({
   display: 'flex',
   position: 'absolute',
   left: '350px',
   top: '100px',
   borderRadius: '20px',
}))
const StyledProfile = styled('div')(() => ({
   background: '#fff',
   display: 'flex',
   padding: '20px 40px 0 20px',
   gap: '40px',
   height: '350px',
}))
const HeaderProfile = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'space-between',
   margin: '20px 0',
   width: '800px',
}))
const MainInfo = styled('h6')(() => ({
   fontWeight: '500',
   fontSize: '28px',
   lineHeight: '22px',
   color: '#8639B5',
   margin: '30px 0 40px',
}))
const Img = styled('img')(() => ({
   width: '300px',
   height: '300px',
   borderRadius: '10px',
}))
const Title = styled('p')(() => ({
   color: '#000',
}))
const Span = styled('p')(() => ({
   fontWeight: '400',
   fontSize: '14px',
   lineHeight: '19px',
   color: '#5C5C5C',
   marginBottom: '8px',
}))
