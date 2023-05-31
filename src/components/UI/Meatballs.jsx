import { Button, Menu, MenuItem } from '@mui/material'
import { useState } from 'react'
import styled from '@emotion/styled'
import MyButton from './Button'
import { ReactComponent as MeatballsIcon } from '../../assets/icons/meatballs.svg'
import MyModal from './modal/Modal'
import {
   postRequestLentaComplain,
   postRequestLentaPresent,
} from '../../service/lenta.service'

const holidays = [
   {
      id: '1',
      title: 'День рождение',
   },
   {
      id: '2',
      title: 'День влюбленных',
   },
   {
      id: '3',
      title: 'Новый год',
   },
   {
      id: '4',
      title: 'Рамазан',
   },
   {
      id: '5',
      title: 'Курбан айт',
   },
   {
      id: '6',
      title: '8-март',
   },
]

const complaints = [
   {
      title: 'Жестокость и шокирующий контент',
      id: '1',
   },
   {
      title: 'Проявление ненависти',
      id: '2',
   },
   {
      title: 'Нелегальные действия или регламентированные товары',
      id: '3',
   },
   {
      title: 'Спам',
      id: '4',
   },
   {
      title: 'Призывы к насилию, опасные действия',
      id: '5',
   },
   {
      title: 'Сцены порнографического характера',
      id: '6',
   },
   {
      title: 'Прочее',
      id: '7',
   },
]

export default function Meatballs({
   arrayIcon,
   open,
   onClose,
   handleClose,
   handleClick,
   anchorEl,
   reserveHandler,
   id,
   setReserved,
   setAnonym,
   variant,
   ...restProps
}) {
   const [openModal, setOpenModal] = useState(false)
   const [openComplaint, setOpenComplaintModal] = useState(false)

   const menuClickHandler = (title) => {
      if (title === 'Добавить в мои подарки') {
         setOpenModal(true)
      }
   }

   const openComplaintModal = (title) => {
      if (title === 'Пожаловаться') {
         setOpenComplaintModal(true)
      }
   }

   const clickRequest = ({ wishId, holidayId }) => {
      postRequestLentaPresent({ wishId, holidayId })
   }

   const postComplaint = async ({ id, complaintDescription }) => {
      try {
         await postRequestLentaComplain({ id, complaintDescription })
      } catch (error) {
         console.log(error)
      }
   }

   const closeModal = () => {
      setOpenModal(false)
      setOpenComplaintModal(false)
   }

   return (
      <div>
         <MyModal open={openModal} onClose={closeModal}>
            {holidays.map((item) => {
               return (
                  <MenuitemMui
                     onClick={() =>
                        clickRequest({ wishId: id, holidayId: item.id })
                     }
                     id={item.id}
                  >
                     {item.title}
                  </MenuitemMui>
               )
            })}
         </MyModal>
         <MyModal open={openComplaint} onClose={closeModal}>
            <Styledh2>Пожаловаться</Styledh2>
            {complaints.map((item) => {
               return (
                  <MenuitemMui
                     onClick={() =>
                        postComplaint({ id, complaintDescription: item.title })
                     }
                     id={item.id}
                  >
                     <input type="radio" id="title" />
                     {item.title}
                  </MenuitemMui>
               )
            })}
            <MyButton variant={variant}>Отмена</MyButton>
            <MyButton>Потвердить</MyButton>
         </MyModal>
         <Button
            id="demo-positioned-button"
            aria-controls={open ? 'demo-positioned-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            {...restProps}
         >
            <MeatballsIcon />
         </Button>
         <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
               vertical: 'top',
               horizontal: 'left',
            }}
            transformOrigin={{
               vertical: 'top',
               horizontal: 'left',
            }}
         >
            {arrayIcon.map((item) => (
               <MenuItem
                  onClick={() => {
                     item.clickHandler(id, setReserved, setAnonym)
                     menuClickHandler(item.title)
                     openComplaintModal(item.title)
                  }}
                  key={item.id}
                  {...restProps}
               >
                  <img
                     src={item.icon}
                     alt="#"
                     style={{ marginRight: '10px' }}
                  />
                  {item.title}
               </MenuItem>
            ))}
         </Menu>
      </div>
   )
}

const MenuitemMui = styled(MenuItem)(() => ({
   width: '400px',
   marginTop: '10px',
   '&:hover': {
      background: 'rgba(134, 57, 181, 0.2)',
   },
}))

const Styledh2 = styled('h2')(() => ({
   marginLeft: '14px',
   marginBottom: '30px',
}))
