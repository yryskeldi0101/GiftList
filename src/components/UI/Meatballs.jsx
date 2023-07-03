import { Button, Menu, MenuItem } from '@mui/material'
import { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import MyButton from './Button'
import { ReactComponent as MeatballsIcon } from '../../assets/icons/meatballs.svg'
import MyModal from './modal/Modal'
import {
   getRequestHoliday,
   postRequestLentaComplain,
   postRequestLentaPresent,
} from '../../service/lentaService'
import RadioButton from './RadioButton'
import useToastBar from '../../hooks/useToastBar'

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
   arrayIcon = [],
   open,
   onClose,
   handleClose,
   handleClick,
   anchorEl,
   reserveHandler,
   display,
   editChangeHandler,
   id,
   data,
   setReserved,
   setAnonym,
   variant,
   bookedDelete,
   clickHandler,
   ...restProps
}) {
   const [openModal, setOpenModal] = useState(false)
   const [openComplaint, setOpenComplaintModal] = useState(false)
   const [complaint, setComplaint] = useState(null)
   const [holidays, setHolidays] = useState([])
   const { showToast } = useToastBar()

   const getHoliday = async () => {
      try {
         const { data } = await getRequestHoliday()
         setHolidays(data)
      } catch (error) {
         console.log(error)
      }
   }
   useEffect(() => {
      getHoliday()
   }, [])

   const menuClickHandler = (title) => {
      if (title === 'Добавить в мои подарки') {
         setOpenModal(true)
      }
   }

   // const handleClickBtn = (id) => {
   //    reserveHandler(id)
   //    if (id === 1) {
   //       editChangeHandler(data)
   //    } else if (id === 2) {
   //       reserveHandler(id)
   //    }
   //    handleClose()
   // }

   const openComplaintModal = (title) => {
      if (title === 'Пожаловаться') {
         setOpenComplaintModal(true)
      }
   }

   const clickRequest = ({ wishId, holidayId }) => {
      postRequestLentaPresent({ wishId, holidayId })
   }

   const closeModal = () => {
      setOpenModal(false)
      setOpenComplaintModal(false)
   }
   const postComplaint = async () => {
      try {
         await postRequestLentaComplain({
            id,
            complaintDescription: complaint.title,
         })
         showToast('success', 'Успешно', 'Запрос успешно отправлен')
      } catch (error) {
         showToast('error', 'Ошибка', 'При загрузке данных произошла ошибка')
      }
      closeModal()
   }

   const changeRadio = (e, item) => {
      if (e.target.checked) {
         setComplaint(item)
      } else {
         setComplaint(null)
      }
   }

   return (
      <>
         <div>
            <MyModal open={openModal} onClose={closeModal}>
               {holidays.map((item) => {
                  return (
                     <MenuitemMui
                        onClick={() => {
                           clickRequest({ wishId: id, holidayId: item.id })
                           closeModal()
                        }}
                        id={item.id}
                     >
                        {item.name}
                     </MenuitemMui>
                  )
               })}
            </MyModal>
         </div>

         <MyModal open={openComplaint} onClose={closeModal}>
            <Styledh2>Пожаловаться</Styledh2>
            <StyledP>Почему вы хотите пожаловаться на эту публикацию?</StyledP>
            {complaints.map((item) => {
               return (
                  <MenuitemMui id={item.id}>
                     <StyledCheckbox
                        checked={complaint?.id === item.id}
                        onChange={(e) => changeRadio(e, item)}
                     />
                     {item.title}
                  </MenuitemMui>
               )
            })}
            <StyledContained>
               <StyledBtn onClick={closeModal}>Отмена</StyledBtn>
               <StyledButton onClick={postComplaint}>Потвердить</StyledButton>
            </StyledContained>
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
         <div>
            {display ? null : (
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
                  {arrayIcon?.map((item) => (
                     <div key={item.id}>
                        {bookedDelete ? (
                           <MenuItem
                              onClick={() => {
                                 handleClose()
                                 clickHandler(id)
                              }}
                              {...restProps}
                           >
                              <img
                                 src={item.icon}
                                 alt="#"
                                 style={{ marginRight: '10px' }}
                              />

                              {item.title}
                           </MenuItem>
                        ) : (
                           <MenuItem
                              onClick={() => {
                                 handleClose()
                                 menuClickHandler(item.title)
                                 openComplaintModal(item.title)
                              }}
                              {...restProps}
                           >
                              <img
                                 src={item.icon}
                                 alt="#"
                                 style={{ marginRight: '10px' }}
                              />

                              {item.title}
                           </MenuItem>
                        )}
                     </div>
                  ))}
               </Menu>
            )}
         </div>
      </>
   )
}

const MenuitemMui = styled(MenuItem)(() => ({
   width: '400px',
   marginTop: '10px',
   Weight: '400',
   size: '14px',
   lineHight: '16px',

   '&:hover': {
      background: 'rgba(134, 57, 181, 0.2)',
   },
}))

const Styledh2 = styled('h2')(() => ({
   marginLeft: '14px',
   marginBottom: '30px',
   Weight: '500',
   size: '24px',
   lineHight: '32px',
}))
const StyledP = styled('p')(() => ({
   marginLeft: '14px',
   marginBottom: '30px',
   Weight: '500',
   size: '14px',
   lineHight: '16px',
}))

const StyledCheckbox = styled(RadioButton)(() => ({
   width: '20px',
   height: ' 20px',
   marginRight: '15px',
   '&:checked': {
      background: ' #8639B5',
   },
}))
const StyledBtn = styled(MyButton)(() => ({
   background: '#FCFCFD',
   color: '#8D949E',
   border: '1px solid grey',
   width: '294px',
   borderRadius: '10px',
}))

const StyledButton = styled(MyButton)(() => ({
   marginLeft: '20px',
   color: '#ffff',
   background: ' #8639B5',
   width: '294px',
   borderRadius: '10px',
   '&:hover': {
      background: ' #8639B5',
   },
}))

const StyledContained = styled('div')(() => ({
   marginTop: '20px',
   marginLeft: '15px',
}))
