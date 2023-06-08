import { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles'
import { useParams, useSearchParams } from 'react-router-dom'
import { format } from 'date-fns'
import { useDispatch, useSelector } from 'react-redux'
import MyModal from '../../../components/UI/modal/Modal'
import { useMeatballs } from '../../../hooks/useMeatballs'
import ReusableInput from '../../../components/UI/input/Input'
import MyButton from '../../../components/UI/Button'
import AvatarUpload from '../../../components/UI/Avatar'
import Delete from '../../../assets/icons/deleteIcon.svg'
import Edit from '../../../assets/icons/EditIcon.svg'
import { getHolidays } from '../../../redux/holiday/holydayThunk'
import { uploadFileRequest } from '../../../service/charityService'
import { actionModalSlice } from '../../../redux/holiday/modalSlice'
import DateInput from '../../../components/UI/input/DateInput'
import { ACTION_TYPES } from '../../../utlis/constants/constnats'
import {
   getHolidayDetails,
   ubdateHolidayDetailThunk,
} from '../../../redux/holidayDetails/holidayDetailThunk'
import HolidayDetailsCard from '../../../components/adminCard/HolidayDetailsCard'
import { deleteHolidayDetailService } from '../../../service/holidayDetailServis'
import useToastBar from '../../../hooks/useToastBar'

const MyHolidays = () => {
   const dispatch = useDispatch()
   const [editHolidayData, setEditHolidayData] = useState(false)
   const [img, setImg] = useState('')
   const [title, setTitle] = useState('')
   const [inputDate, setInputDate] = useState()
   const [ubdateId, setubdateId] = useState()
   const { open, anchorEl, handleClick, handleClose } = useMeatballs()
   const [searchParams, setSearchParams] = useSearchParams()
   const { isModalOpen } = Object.fromEntries(searchParams)
   const onCloseModal = () => setSearchParams({})
   const { showToast } = useToastBar()

   const { detailId } = useParams()

   const { data } = useSelector((state) => state.ModalSlice)
   const holidayDetail = useSelector((state) => state.holidayDetail.holiday)

   useEffect(() => {
      if (editHolidayData) {
         if (data.name) {
            setTitle(data.name)
         }

         if (data.image) {
            setImg(data.image)
         }
      }
   }, [data, editHolidayData])

   const meatballsContent = [
      {
         icon: Edit,
         title: 'Редактировать',
         func: (setSearchParams, data, id) => {
            if (typeof setSearchParams === 'function') {
               setSearchParams({ isModalOpen: 'addholiday' })
               setEditHolidayData(true)
            }
            setubdateId(id)
            if (data.currentId === id) {
               dispatch(actionModalSlice.getEditCardData(data))
               dispatch(getHolidays())
            }
         },
      },
      {
         icon: Delete,
         title: 'Удалить',
         func: async (iDdetail) => {
            await deleteHolidayDetailService(`/api/wishes`, { id: iDdetail })
            dispatch(getHolidayDetails(detailId))
            showToast('success', 'Успешно', 'Пользователь успешно удален!')
         },
      },
   ]

   const changeTitleHoliday = (e) => {
      setTitle(e.target.value)
   }

   const onchangeImg = async (e) => {
      const file = e.target.files[0]
      const formData = new FormData()
      formData.append('file', file)
      try {
         const { data } = await uploadFileRequest(formData)
         setImg(data.url)
      } catch (error) {
         showToast(
            'error',
            'Ошибка',
            'Что-то пошло не так повторите попытку позже'
         )
      }
   }

   const ubdateHoliday = () => {
      if (inputDate) {
         const date = format(new Date(inputDate), 'yyyy-MM-dd')
         if (title && img && date) {
            const data = {
               name: title,
               image: img,
               dateOfHoliday: date,
            }
            dispatch(ubdateHolidayDetailThunk({ data, ubdateId, detailId }))
            onCloseModal()
            showToast('success', 'Успешно', 'Успешно изменно!')
         }
      } else {
         showToast('warning', 'Пожалуйста!', 'Заполните все поля')
      }
   }

   const dateChangeHandler = (date) => {
      setInputDate(date)
   }

   useEffect(() => {
      dispatch(getHolidayDetails(detailId))
   }, [])

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
                        ubdateHoliday()
                     }}
                  >
                     Добавить
                  </MyButton>
               </ButtonsContainer>
            </MyModal>
         </Container>

         <HolidayDetailsCard
            dataCategory={ACTION_TYPES.HOLIDAYS_DETAIL}
            dataWishlist
            holidayDetail={holidayDetail}
            dataCharity
            meatballsContent={meatballsContent}
            handleClick={handleClick}
            handleClose={handleClose}
            open={open}
            anchorEl={anchorEl}
            setSearchParams={setSearchParams}
         />
      </>
   )
}

export default MyHolidays

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
