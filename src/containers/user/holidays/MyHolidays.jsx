import { useEffect, useState, memo } from 'react'
import { styled } from '@mui/material/styles'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { format } from 'date-fns'
import { useDispatch, useSelector } from 'react-redux'
import MyModal from '../../../components/UI/modal/Modal'
import { useMeatballs } from '../../../hooks/useMeatballs'
import ReusableInput from '../../../components/UI/input/Input'
import MyButton from '../../../components/UI/Button'
import AvatarUpload from '../../../components/UI/Avatar'
import Delete from '../../../assets/icons/deleteIcon.svg'
import EditIcon from '../../../assets/icons/EditIcon.svg'

import PlusIcon from '../../../assets/icons/plusIcon.svg'
import {
   getHolidays,
   postHoliday,
   updateHolidayThunk,
} from '../../../redux/holiday/holydayThunk'
import { uploadFileRequest } from '../../../service/charityService'
import { deleteService } from '../../../service/holidayService'
import AdminCard from '../../../components/adminCard/AdminCard'
import DateInput from '../../../components/UI/input/DateInput'
import { ACTION_TYPES } from '../../../utlis/constants/constnats'
import useToastBar from '../../../hooks/useToastBar'
import { getHolidayDetails } from '../../../redux/holidayDetails/holidayDetailThunk'

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
   const navigate = useNavigate()
   const { showToast } = useToastBar()
   const { data } = useSelector((state) => state.ModalSlice)
   const dataHolidays = useSelector((state) => state.holiday.holiday)
   const [valid, setValid] = useState({
      title: false,
      inputDate: false,
      img: false,
   })

   const holidayValid = () => {
      if (!title) {
         setValid((prevState) => ({ ...prevState, title: !prevState.title }))
      }
      if (!inputDate) {
         setValid((prevState) => ({
            ...prevState,
            inputDate: !prevState.inputDate,
         }))
      }
      if (!img) {
         setValid((prevState) => ({ ...prevState, img: !prevState.img }))
      }
   }

   const onCloseModal = () => {
      setSearchParams({})
      setTitle('')
      setImg('')
   }

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

   const navigateToDetails = (id) => {
      dispatch(getHolidayDetails(id))
      navigate(`${id}/holiday_details`)
   }

   const meatballsContent = [
      {
         icon: EditIcon,
         title: 'Редактировать',
         func: (setSearchParams, data, id) => {
            if (typeof setSearchParams === 'function') {
               setSearchParams({ isModalOpen: 'addholiday' })
               setEditHolidayData(true)
            }
            setubdateId(id)
            if (data) {
               setImg(data.image)
               setTitle(data.name)
               dispatch(getHolidays(showToast))
            }
         },
      },
      {
         icon: Delete,
         title: 'Удалить',
         func: async (id) => {
            await deleteService(`/api/holidays`, { holidayId: id })
            dispatch(getHolidays())
            showToast('success', '', 'Праздник успешно удален!')
         },
      },
   ]

   const openHolidayModal = () => {
      setSearchParams({ isModalOpen: 'addholiday' })
      setEditHolidayData(false)
   }

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

   const addDateHoliday = () => {
      if (inputDate) {
         const date = format(new Date(inputDate), 'yyyy-MM-dd')
         if (title && img && date) {
            const data = {
               name: title,
               image: img,
               dateOfHoliday: date,
            }
            dispatch(postHoliday(data))
            onCloseModal()
            showToast('success', 'Успешно', 'Праздник успешно добавлен!')
         }
      } else {
         showToast('warning', 'Пожалуйста!', 'Заполните все поля')
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
            dispatch(updateHolidayThunk({ data, ubdateId }))
            onCloseModal()
            showToast('success', 'Успешно', 'Праздник успешно изменен!')
         }
      } else {
         showToast('warning', 'Пожалуйста!', 'Заполните все поля')
      }
   }

   const dateChangeHandler = (date) => {
      setInputDate(date)
   }

   useEffect(() => {
      dispatch(getHolidays(showToast))
   }, [])

   return (
      <>
         <Container>
            <Title>Мои праздники</Title>
            <StyledMyButton
               variant="contained"
               background="#8639B5"
               hoverbackgroundcolor="#8639B5"
               disabled={false}
               activebackgroundcolor="#AB62D8"
               defaultcolor="#FFFFFF"
               disabledcolor="#FFFFFF"
               propswidth="25%"
               onClick={openHolidayModal}
            >
               <img src={PlusIcon} alt="Plus Icon" />
               Добавить праздник
            </StyledMyButton>
            <MyModal open={isModalOpen} onClose={onCloseModal} propswidth>
               <Text>
                  {editHolidayData
                     ? 'Редактирование праздника'
                     : 'Добавление праздника'}
               </Text>

               <AvatarUpload
                  valid={valid.img}
                  photo={img}
                  onChange={onchangeImg}
               />
               <ReusableInput
                  id
                  inputLabel
                  placeholder="Введите название праздника"
                  text="Название праздника"
                  value={title}
                  onChange={changeTitleHoliday}
                  icon
                  name
                  error={!title}
                  valid={valid.title}
               />
               <DateInput
                  valid={valid.inputDate}
                  onChange={dateChangeHandler}
               />

               <ButtonsContainer>
                  <MyButton
                     variant="outlined"
                     propswidth="232px"
                     onClick={onCloseModal}
                     efaultcolor
                     hoverbackgroundcolor
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
                        holidayValid()
                        if (!ReusableInput.value) {
                           ReusableInput.value = true
                        }
                        if (editHolidayData) {
                           ubdateHoliday()
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
            dataCategory={ACTION_TYPES.HOLIDAYS}
            dataWishlist
            dataHolidays={dataHolidays}
            dataCharity
            meatballsContent={meatballsContent}
            handleClick={handleClick}
            handleClose={handleClose}
            handleNavigate={navigateToDetails}
            open={open}
            anchorEl={anchorEl}
            setSearchParams={setSearchParams}
         />
      </>
   )
}

export default memo(MyHolidays)

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
   marginBottom: '20px',
})

const StyledMyButton = styled(MyButton)`
   margin-top: 30px;
   margin-bottom: 30px;
`
