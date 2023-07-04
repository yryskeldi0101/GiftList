import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { styled } from '@mui/material'
import { ReactComponent as AddPhotoIcon } from '../../../assets/svg/charityImgAddIcon.svg'
import ReusableInput from '../../../components/UI/input/Input'
import MyButton from '../../../components/UI/Button'
import AppSelect from '../../../components/UI/AppSelect'
import {
   editWishReq,
   getHolidaysReq,
   postFileReq,
   postWishesReq,
} from '../../../service/wishService'
import useToastBar from '../../../hooks/useToastBar'

export const AddWish = () => {
   const [selectedFile, setSelectedFile] = useState(null)
   const location = useLocation()
   const { showToast } = useToastBar()
   const { item } = location.state ?? {}
   const [imageUrl, setImageUrl] = useState(item?.image || '')
   const [titlePresentValue, setTitlePresentValue] = useState(item?.name || '')
   const [linkGiftValue, setLinkGiftValue] = useState(item?.linkGift || '')
   const [categoryValue, setCategoryValue] = useState(item?.holidayName || '')
   const [dateValue, setDateValue] = useState(item?.date || '')
   const [descPresent, setDescPresent] = useState(item?.description || '')
   const [holidays, setHolidays] = useState([])
   const [holidaysId, setHolidaysId] = useState(null)
   const localHeight = window.innerHeight
   const navigate = useNavigate()
   const { id } = useParams()

   const holidayName = holidays.map((item) => ({
      name: item.name,
      id: item.id,
      date: item.date,
   }))

   const categoryValueHandler = (e) => {
      const selectedCategory = e.target.value
      setCategoryValue(selectedCategory)
      const selectedHoliday = holidayName.find(
         (item) => item.name === selectedCategory
      )
      if (selectedHoliday) {
         setDateValue(selectedHoliday.date)
         setHolidaysId(selectedHoliday.id)
      } else {
         setDateValue('')
      }
   }
   const titlePresentValueHandler = (e) => {
      setTitlePresentValue(e.target.value)
   }
   const linkGiftValueHandler = (e) => {
      setLinkGiftValue(e.target.value)
   }
   const dateValueHandler = () => {
      setDateValue(holidayName.date)
   }
   const descPresentHandler = (e) => {
      setDescPresent(e.target.value)
   }
   const closeAddWishHandler = () => {
      navigate('/user/wishlist')
   }

   const fileValueHandler = async (event) => {
      const file = event.target.files[0]
      const formDate = new FormData()
      formDate.append('file', file)
      setSelectedFile(formDate)
      if (file) {
         const reader = new FileReader()
         reader.onload = () => {
            setImageUrl(reader.result)
         }
         reader.readAsDataURL(file)
      }
   }
   const sentFileRequest = async () => {
      try {
         const response = await postFileReq(selectedFile)
         const fileResponse = response.data.url
         setImageUrl(fileResponse)
         return fileResponse
      } catch (error) {
         return showToast(
            'error',
            'Ошибка',
            'Что-то пошло не так повторите попытку позже'
         )
      }
   }
   const postNewWishHandler = async (data) => {
      try {
         const response = await postWishesReq(data)
         navigate('/user/wishlist')
         return response
      } catch (error) {
         return showToast(
            'error',
            'Ошибка',
            'Что-то пошло не так повторите попытку позже'
         )
      }
   }
   const editWishRequest = async (date) => {
      try {
         const response = await editWishReq(date)
         return response
      } catch (error) {
         return showToast(
            'error',
            'Ошибка',
            'Что-то пошло не так повторите попытку позже'
         )
      }
   }

   const submitWishHandler = async () => {
      const formIsEmpty = Object.values({
         imageUrl,
      }).some((value) => !value)
      if (formIsEmpty) {
         return showToast('warning', 'Пожалуйста!', 'Выберите фотографию')
      }
      const wishData = {
         name: titlePresentValue,
         image: selectedFile,
         dateOfHoliday: dateValue,
         holidayId: holidaysId,
         linkGift: linkGiftValue,
         descriptions: descPresent,
      }
      const fileRequest = selectedFile && (await sentFileRequest())
      if (id) {
         editWishRequest({
            ...wishData,
            image: selectedFile ? fileRequest : imageUrl,
            id: +id,
            holidayId: holidaysId,
         })
      }
      if (fileRequest) {
         postNewWishHandler({ ...wishData, image: fileRequest })
      }
      closeAddWishHandler()
      return formIsEmpty
   }

   const getHolidays = async () => {
      try {
         const { data } = await getHolidaysReq()
         setHolidays(data)
         return data
      } catch (error) {
         return showToast(
            'error',
            'Ошибка',
            'Что-то пошло не так повторите попытку позже'
         )
      }
   }
   useEffect(() => {
      getHolidays()
   }, [])

   return (
      <AddWishContainer localHeight={localHeight}>
         <StyledContainerAddWishImage>
            {(imageUrl && (
               <label htmlFor="add_image">
                  <StyledImage src={imageUrl} alt="" />
               </label>
            )) || (
               <StyledAddWishImageIcons htmlFor="add_image">
                  <AddPhotoIcon />
                  <p>Нажмите для добавления фотографии</p>
               </StyledAddWishImageIcons>
            )}
            <input
               id="add_image"
               placeholder="Нажмите для добавления фотографии"
               type="file"
               accept="image/*"
               onChange={fileValueHandler}
            />
         </StyledContainerAddWishImage>

         <InfoAboutWish>
            <h3>Добавление желаемого подарка</h3>
            <StyledInputs>
               <div>
                  <ReusableInput
                     placeholder="Введите название подарка"
                     text="Название подарка"
                     value={titlePresentValue}
                     onChange={titlePresentValueHandler}
                  />
               </div>
               <div>
                  <ReusableInput
                     placeholder="Вставьте ссылку на подарок"
                     text="Ссылка на подарок"
                     value={linkGiftValue}
                     onChange={linkGiftValueHandler}
                  />
               </div>
            </StyledInputs>
            <StyledInputs>
               <div>
                  <HolidaySelectTitle>Категория</HolidaySelectTitle>
                  <AppSelect
                     background="none"
                     options={holidayName}
                     height="30px"
                     value={categoryValue}
                     onChange={categoryValueHandler}
                     placeholder="Выберите праздник"
                     text="Праздник"
                  />
               </div>
               <div>
                  <ReusableInput
                     defaultValue=""
                     placeholder="Укажите дату праздника"
                     type="date"
                     text="Дата праздника"
                     value={dateValue}
                     onChange={dateValueHandler}
                  />
               </div>
            </StyledInputs>
            <div>
               <StyledReusableInputArea
                  placeholder="Введите описание подарка"
                  text="Описание подарка"
                  value={descPresent}
                  onChange={descPresentHandler}
               />
            </div>
            <InfoActions>
               <MyButton
                  variant="contained"
                  background="#fff"
                  outlinedbordercolor="#8D949E"
                  defaultcolor="#8D949E"
                  hoverbackgroundcolor="#fff"
                  propsBorderRadius="15px"
                  border="none"
                  onClick={closeAddWishHandler}
               >
                  Отмена
               </MyButton>
               <MyButton
                  variant="contained"
                  background="#8639B5"
                  hoverbackgroundcolor="#8639B5"
                  propsborderbadius="15px"
                  type="submit"
                  onClick={submitWishHandler}
               >
                  Добавить
               </MyButton>
            </InfoActions>
         </InfoAboutWish>
      </AddWishContainer>
   )
}
const AddWishContainer = styled('div')(({ localHeight }) => ({
   width: '98%',
   height: `${localHeight - 50}px`,
   background: '#ffffff',
   borderRadius: '10px',
   marginTop: '30px',
   padding: '20px',
   textAlign: 'center',
   display: 'flex',
   gap: '20px',
}))
const StyledContainerAddWishImage = styled('div')`
   width: 217px;
   height: 217px;
   left: 20px;
   top: 108px;
   background: #f6f6f9;
   border: 1px solid #dcdce4;
   border-radius: 8px;
   display: flex;
   align-items: center;
   justify-content: center;
   cursor: pointer;

   input {
      display: none;
   }
`
const StyledImage = styled('img')`
   width: 217px;
   height: 217px;
`
const StyledAddWishImageIcons = styled('label')`
   cursor: pointer;
   p {
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
      display: flex;
      align-items: center;
      text-align: center;
      color: #8e8ea9;
      margin-top: 16px;
   }
`
const InfoAboutWish = styled('div')`
   display: flex;
   flex-direction: column;
   width: 80%;

   h3 {
      text-align: start;
      margin-bottom: 20px;
   }
`
const StyledInputs = styled('div')`
   display: flex;
   gap: 20px;
   width: 100%;

   div {
      width: 100%;
   }
`
const StyledReusableInputArea = styled(ReusableInput)`
   width: 100%;
   padding: 20px 0 100px;
`
const InfoActions = styled('div')`
   display: flex;
   justify-content: flex-end;
   align-items: center;
   gap: 20px;
   margin-top: 40px;
`
const HolidaySelectTitle = styled('div')`
   font-weight: 400;
   font-size: 12px;
   line-height: 15px;
   margin-bottom: 10px;
   display: flex;
   align-items: center;
   color: #8d949e;
`
