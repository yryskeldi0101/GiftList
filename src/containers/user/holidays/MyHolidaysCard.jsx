import { toast } from 'react-toastify'
import { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles'
import { useSearchParams } from 'react-router-dom'
import { format } from 'date-fns'
import { useDispatch, useSelector } from 'react-redux'
import MyModal from '../../../components/UI/modal/Modal'
import { useMeatballs } from '../../../hooks/useMeatballs'
import AdminCard from '../../../components/adminCard/AdminCard'
import ReusableInput from '../../../components/UI/input/Input'
import MyButton from '../../../components/UI/Button'
import AvatarUpload from '../../../components/UI/Avatar'
import Delete from '../../../assets/icons/deleteIcon.svg'
import Edit from '../../../assets/icons/EditIcon.svg'
import DateInput from '../../../components/UI/input/DateInput'
import {
   deleteHoliday,
   getHolidays,
   postHoliday,
   updateHoliday,
} from '../../../redux/holiday/holydayThunk'
import { uploadFileRequest } from '../../../service/charityService'
import { deleteService } from '../../../service/holidayServis'
import { actionModalSlice } from '../../../redux/holiday/modalSlice'

const MyHolidaysCard = () => {
   const dispatch = useDispatch()
   const [editHolidayData, setEditHolidayData] = useState(false)
   const [img, setImg] = useState('')
   const [title, setTitle] = useState('')
   const [ubdateId, setUbdateId] = useState('')
   const [inputDate, setInputDate] = useState(new Date())
   const { open, anchorEl, handleClick, handleClose } = useMeatballs()
   const [searchParams, setSearchParams] = useSearchParams()
   const { isModalOpen } = Object.fromEntries(searchParams)
   const onCloseModal = () => setSearchParams({})
   const { data } = useSelector((state) => state.ModalSlice)
   console.log(data)

   useEffect(() => {
      if (editHolidayData) {
         if (data.name) {
            setTitle(data.name)
         }
         if (data.date) {
            setInputDate(new Date(data.date))
         }
         if (data.image) {
            setImg(data.image)
         }
         if (data.id) {
            setUbdateId(data.id)
         }
      }
   }, [data, editHolidayData])

   // const navigateToDetails = (id) => {
   //    console.log(id)
   //    navigate(`${id}/details`)
   // }

   // console.log(img)

   const meatballsContent = [
      {
         icon: Edit,
         title: 'Редактировать',
         func: (setSearchParams, data) => {
            if (typeof setSearchParams === 'function') {
               setSearchParams({ isModalOpen: 'addholiday' })
               setEditHolidayData(true)
            }
            console.log(data, 'meat data')
            if (data) {
               dispatch(actionModalSlice.getEditCardData(data))
            } else {
               toast.error('Something with edit data')
            }
         },
      },
      {
         icon: Delete,
         title: 'Удалить',
         func: async (id) => {
            await deleteService(`/api/holidays`, { holidayId: id })
         },
      },
   ]

   const onchangeImg = async (e) => {
      const file = e.target.files[0]
      const formData = new FormData()
      formData.append('file', file)
      try {
         const { data } = await uploadFileRequest(formData)
         setImg(data.url)
      } catch (error) {
         console.log(error)
      }
   }

   const addDateHoliday = () => {
      const date = format(new Date(inputDate), 'yyyy-MM-dd')
      console.log(date)
      if (title && img && date) {
         const data = {
            name: title,
            image: img,
            dateOfHoliday: date,
         }
         dispatch(postHoliday(data))
         onCloseModal()
      }
   }

   const updateDateHolidayHandler = () => {
      const date = format(new Date(inputDate), 'yyyy-MM-dd')
      console.log(date)
      if (title && img && date) {
         const data = {
            name: title,
            image: img,
            dateOfHoliday: date,
         }
         dispatch(updateHoliday({ data, ubdateId }))
         onCloseModal()
      }
   }

   const changeTitleHoliday = (e) => {
      setTitle(e.target.value)
   }

   const dateChangeHandler = (date) => {
      setInputDate(date)
   }

   useEffect(() => {
      dispatch(getHolidays())
   }, [])

   const handleDeleteHoliday = (holidayId) => {
      console.log(holidayId)
      dispatch(deleteHoliday(holidayId))
   }

   return (
      <>
         <Container>
            <Title>Мои праздники</Title>

            <MyModal open={isModalOpen} onClose={onCloseModal} propswidth>
               <Text>
                  {editHolidayData
                     ? 'Редактирование праздника'
                     : 'Добавление праздника'}
               </Text>

               <AvatarUpload photo={img} onChange={onchangeImg} />
               <ReusableInput
                  id
                  inputLabel
                  placeholder="Введите название праздника"
                  text="Название праздника"
                  value={title}
                  onChange={changeTitleHoliday}
                  icon
                  name
               />
               <DateInput value={inputDate} onChange={dateChangeHandler} />

               <ButtonsContainer>
                  <MyButton
                     variant="outlined"
                     propswidth="232px"
                     onClick={onCloseModal}
                     efaultcolor
                     hoverbackgroundcolor
                     activebackgroundcolor
                     disabledcolor
                     background
                     outlinedbordercolor
                  >
                     Отмена
                  </MyButton>
                  <MyButton
                     variant="contained"
                     defaultcolor="#FFFFFF"
                     hoverbackgroundcolor="#8639B5"
                     activebackgroundcolor="#AB62D8"
                     background="#8639B5"
                     disabledcolor="#FFFFFF"
                     disabled={false}
                     propswidth="232px"
                     onClick={() => {
                        if (editHolidayData) {
                           updateDateHolidayHandler()
                        } else {
                           addDateHoliday()
                        }
                     }}
                  >
                     Добавить
                  </MyButton>
               </ButtonsContainer>
            </MyModal>
         </Container>

         <AdminCard
            dataCategory="holidays"
            dataWishlist
            dataCharity
            meatballsContent={meatballsContent}
            handleClick={handleClick}
            handleClose={handleClose}
            open={open}
            anchorEl={anchorEl}
            reserveHandler={handleDeleteHoliday}
            setSearchParams={setSearchParams}
         />
      </>
   )
}

export default MyHolidaysCard

const Container = styled('div')({
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
   marginBottom: '16px',
})

const Title = styled('p')({
   fontSize: '24px',
   fontWeight: 'bold',
})

const ButtonsContainer = styled('div')({
   display: 'flex',
   marginTop: '44px',
   justifyContent: 'flex-end',
   gap: '16px',
})

const Text = styled('h3')({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   textAlign: 'center',
})
