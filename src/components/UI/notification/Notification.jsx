import React, { useEffect, useState } from 'react'
import { Button, MenuItem } from '@mui/material'
import styled from '@emotion/styled'

import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
// eslint-disable-next-line import/named
import {
   getRequestNotifications,
   postRequestNotification,
} from '../../../service/notificationService'
import Meatballs from '../Meatballs'
import MyModal from '../modal/Modal'
import { getNotifications } from '../../../redux/notification/notificationThunk'

const markAsRead = [
   {
      id: '1',
      title: 'Отметить как прочитанное',
      clickHandler: async () => {
         await postRequestNotification()
         getRequestNotifications()
      },
   },
]

const Notification = ({
   meatballsSelectHandler,
   anchorEl,
   id,
   handleClick,
   open,
   opens,
   onClose,
}) => {
   const [meatballsOpen, setMeatballsOpen] = useState(false)
   const notifications = useSelector((state) => state.notification.notification)
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const navigationHandler = (item) =>
      navigate(`/${item.notificationId}/user/notification_profile`, {
         state: { item },
      })

   const handleMeatballsOpen = () => {
      setMeatballsOpen(true)
   }

   const handleMeatballsClose = () => {
      setMeatballsOpen(false)
   }

   const handleBackgroundClick = () => {
      if (meatballsOpen) {
         handleMeatballsClose()
      }
   }
   useEffect(() => {
      dispatch(getNotifications())
   }, [])
   return (
      <StyledMyModal open={open} onClose={onClose}>
         <StyledContainer>
            <StyledBox onClick={handleBackgroundClick}>
               <h3>Уведомления</h3>
               <StyledMeatballsIcon onClick={handleMeatballsOpen}>
                  <Meatballs
                     onClick={() => {
                        markAsRead[0].clickHandler()
                     }}
                     open={meatballsOpen}
                     onClose={handleMeatballsClose}
                     anchorEl={anchorEl}
                     meatballsSelectHandler={meatballsSelectHandler}
                     arrayIcon={markAsRead}
                     id={id}
                     handleClose={() => {}}
                     handleClick={handleClick}
                     opens={opens}
                     reserveHandler={() => {}}
                  >
                     {markAsRead.map((el) => {
                        return (
                           <MenuItem
                              key={el.id}
                              sx={{
                                 '.MuiList-root-MuiMenu-listMuiList-root-MuiMenu-list':
                                    {
                                       marginLeft: '620px',
                                       marginTop: '100px',
                                    },
                              }}
                           >
                              {el.title}
                           </MenuItem>
                        )
                     })}
                  </Meatballs>
               </StyledMeatballsIcon>
            </StyledBox>
            <StyledHr />
            <StyledUser>
               {notifications?.map((item) => {
                  return (
                     <StyledContent
                        seen={item.seen}
                        onClick={() => navigationHandler(item)}
                     >
                        <StyledInfo>
                           <StyledImg src={item.image} alt="#" />
                           <StyledName key={item.userId}>
                              <p>{item.fromWhomUserFullName}</p>
                              <span> {item.message}</span>
                           </StyledName>
                        </StyledInfo>
                        <StyledData>{item.createdAt}</StyledData>
                     </StyledContent>
                  )
               })}
            </StyledUser>
         </StyledContainer>
      </StyledMyModal>
   )
}

export default Notification

const StyledMyModal = styled(MyModal)(() => ({
   boxShadow:
      '0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12)',
}))

const StyledHr = styled('hr')(() => ({
   border: '1 px solid #D9D9D9',
}))
const StyledContent = styled('div')(({ seen }) => ({
   background: seen ? '#FFFFFF' : '#8639B51A',
   width: '417px',
   height: '82px',
   marginTop: '10px',
}))
const StyledContainer = styled('div')(() => ({
   borderRadius: '6px',
}))

const StyledBox = styled('div')(() => ({
   display: 'flex',
   width: '417px',
   height: '58px',
   alignItems: 'center',
   justifyContent: 'space-between',
   borderRadius: '6px',
   h3: {
      marginLeft: '16px',
   },
}))
const StyledMeatballsIcon = styled(Button)(() => ({
   transform: 'rotate(90deg)',
}))

const StyledUser = styled('div')(() => ({
   display: 'flex',
   flexDirection: 'column',
}))

const StyledData = styled('div')(() => ({
   marginLeft: '70px',
   color: '#949494',
   marginTop: '4px',
}))

const StyledName = styled('div')(() => ({
   marginLeft: '16px',
   marginTop: '10px',
   alignItems: 'center',
   justifyContent: 'center',
   p: {
      color: '#3772FF',
   },
}))

const StyledImg = styled('img')(() => ({
   height: '36px',
   width: '36px',
   marginLeft: '20px',
   marginTop: '10px',
}))

const StyledInfo = styled('div')(() => ({
   display: 'flex',
   alignItems: 'center',
}))
