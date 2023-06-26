import React, { useEffect, useState, memo } from 'react'
import { styled } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'
import { ReactComponent as AddImg } from '../../assets/icons/charityImgAddIcon.svg'
import ReusableInput from '../../components/UI/input/Input'
import EmptyTextarea from '../../components/UI/textarea/Textarea'
import MyButton from '../../components/UI/Button'

import { ReactComponent as InstagramIcon } from '../../assets/icons/socialIputInstagramIcon.svg'
import { ReactComponent as FacebookIcon } from '../../assets/icons/socialInputFacebookIcon.svg'
import { ReactComponent as WkIcon } from '../../assets/icons/socialInputWkIcon.svg'
import { ReactComponent as TelegramIcon } from '../../assets/icons/socialInputTelegramIcon.svg'
import {
   editProfileRequest,
   getProfileRequest,
} from '../../service/profileService'
import useToastBar from '../../hooks/useToastBar'
import { uploadFileRequest } from '../../service/charityService'
import CustomProfileSelect from '../../components/UI/CustomProfileSelect'
import { ClotherSize, ShoesSize } from '../../utlis/constants/constnats'

const ProfileEdit = () => {
   const [selectedOption1, setSelectedOption1] = useState('')
   const [selectedOption2, setSelectedOption2] = useState('')
   const [imageUrl, setImageUrl] = useState('')
   const [firstNameInputValue, setFirstNameInputValue] = useState('')
   const [lastNameInputValue, setLastNameInputValue] = useState('')
   const [countryInputValue, setCountryInputValue] = useState('')
   const [emailInputValue, setEmailInputValue] = useState('')
   const [phoneNumberInputValue, setPhoneNumberInputValue] = useState('')
   const [birthdayInputValue, setBirthdayInputValue] = useState('')
   const [hobbyValue, setHobbyValue] = useState('')
   const [importantValue, setImportantValue] = useState('')
   const [facebookUrlValue, setFacebookUrlValue] = useState('')
   const [telegramUrlValue, setTelegramUrlValue] = useState('')
   const [whatsAppUrlValue, setWhatsAppUrlValue] = useState('')
   const [instagramUrlValue, setInstagramUrlValue] = useState('')
   const [selectedFile, setSelectedFile] = useState(null)
   const { id } = useParams()
   const navigate = useNavigate()
   const navigateToProfileHandler = () => {
      navigate(-1)
   }

   const { showToast } = useToastBar()

   const getProfileData = async () => {
      try {
         const { data } = await getProfileRequest()
         setFirstNameInputValue(data.firstName)
         setLastNameInputValue(data.lastName)
         setCountryInputValue(data.country)
         setEmailInputValue(data.email)
         setPhoneNumberInputValue(data.phoneNumber)
         setBirthdayInputValue(data.dateOfBirth)
         setImageUrl(data.image || '')
         setSelectedOption1(data.clothingSize)
         setSelectedOption2(data.shoeSize)
         setImportantValue(data.important)
         setHobbyValue(data.hobby)
         setTelegramUrlValue(data.telegram)
         setInstagramUrlValue(data.instagram)
         setFacebookUrlValue(data.faceBook)
         setWhatsAppUrlValue(data.whatsApp)
      } catch (error) {
         showToast(
            'error',
            'Ошибка',
            'Что-то пошло не так, повторите попытку позже'
         )
      }
   }

   useEffect(() => {
      getProfileData()
   }, [])

   const handleImageChange = async (e) => {
      const file = e.target.files[0]
      const formData = new FormData()
      formData.append('file', file)
      setSelectedFile(formData)
      if (file) {
         const reader = new FileReader()
         reader.onload = () => {
            setImageUrl(reader.result)
         }
         reader.readAsDataURL(file)
      }
   }

   const uploadFile = async () => {
      try {
         const response = await uploadFileRequest(selectedFile)
         const fileResponse = response.data.url
         setImageUrl(fileResponse)
         return fileResponse
      } catch (error) {
         showToast(
            'error',
            'Ошибка',
            'При загрузке файла произошла ошибка, повторите попытку позже'
         )
         throw error // Rethrow the error to propagate it further
      }
   }

   const handleOption2Change = (event) => {
      setSelectedOption2(event.target.value)
   }
   const handleOption1Change = (event) => {
      setSelectedOption1(event.target.value)
   }
   const handleFirstNameChange = (event) => {
      setFirstNameInputValue(event.target.value)
   }
   const handleLastNameChange = (event) => {
      setLastNameInputValue(event.target.value)
   }
   const handleCountryChange = (event) => {
      setCountryInputValue(event.target.value)
   }
   const handleEmailChange = (event) => {
      setEmailInputValue(event.target.value)
   }

   const handleBirthdayChange = (event) => {
      setBirthdayInputValue(event.target.value)
   }
   const handlePhoneNumberChange = (event) => {
      setPhoneNumberInputValue(event.target.value)
   }
   const handleHobbyChange = (e) => {
      setHobbyValue(e.target.value)
   }
   const handleImportantChange = (e) => {
      setImportantValue(e.target.value)
   }
   const handleFacebookChange = (e) => {
      setFacebookUrlValue(e.target.value)
   }
   const handleWhatsAppChange = (e) => {
      setWhatsAppUrlValue(e.target.value)
   }
   const handleTelegramChange = (e) => {
      setTelegramUrlValue(e.target.value)
   }
   const handleInstagramChange = (e) => {
      setInstagramUrlValue(e.target.value)
   }

   const handleSubmit = async () => {
      const formIsEmpty = Object.values({
         firstNameInputValue,
         lastNameInputValue,
         countryInputValue,
         birthdayInputValue,
         emailInputValue,
         phoneNumberInputValue,
         selectedOption1,
         selectedOption2,
         hobbyValue,
         importantValue,
         facebookUrlValue,
         whatsAppUrlValue,
         instagramUrlValue,
         telegramUrlValue,
      }).some((value) => !value)

      if (formIsEmpty) {
         showToast('warning', 'Пожалуйста!', 'Заполните все поля')
         return
      }

      try {
         const data = {
            firstName: firstNameInputValue,
            lastName: lastNameInputValue,
            country: countryInputValue,
            dateOfBirth: birthdayInputValue,
            email: emailInputValue,
            phoneNumber: phoneNumberInputValue,
            clothingSize: selectedOption1,
            shoeSize: selectedOption2,
            hobby: hobbyValue,
            important: importantValue,
            faceBook: facebookUrlValue,
            whatsApp: whatsAppUrlValue,
            instagram: instagramUrlValue,
            telegram: telegramUrlValue,
         }

         const fileResponse = selectedFile && (await uploadFile())

         await editProfileRequest({
            ...data,
            image: selectedFile ? fileResponse : imageUrl,
            id: +id,
         })

         navigateToProfileHandler()
      } catch (error) {
         showToast(
            'error',
            'Ошибка',
            'Что-то пошло не так, повторите попытку позже'
         )
      }
   }

   return (
      <StyledGlobalContainer>
         <StyledImgContainer>
            <StyledImgIconContainer>
               {(imageUrl && (
                  <label htmlFor="file-input">
                     <StyledImgProfileWidth src={imageUrl} alt="img" />
                  </label>
               )) || (
                  <StyledImgText htmlFor="file-input">
                     <div>
                        <AddImg />
                        <p> Нажмите для добавления фотографии</p>
                     </div>
                  </StyledImgText>
               )}
               <StyledInputOfTypeFile
                  id="file-input"
                  accept="image/*"
                  type="file"
                  onChange={handleImageChange}
               />
            </StyledImgIconContainer>
         </StyledImgContainer>

         <StyledInputAndSelctsGlobalContainer>
            <div>
               <StyledTitle>Основная информация</StyledTitle>
            </div>
            <StyledInputAndSelectsContainer>
               <div>
                  <StyledTitleForSelects>Имя</StyledTitleForSelects>
                  <StyledReusebleInput
                     placeholder="Имя"
                     value={firstNameInputValue}
                     onChange={handleFirstNameChange}
                  />
               </div>
               <div>
                  <StyledTitleForSelects>Фамилия</StyledTitleForSelects>
                  <StyledReusebleInput
                     placeholder="Фамилия"
                     value={lastNameInputValue}
                     onChange={handleLastNameChange}
                  />
               </div>
               <div>
                  <StyledTitleForSelects>Страна</StyledTitleForSelects>
                  <StyledReusebleInput
                     placeholder="Страна"
                     value={countryInputValue}
                     onChange={handleCountryChange}
                  />
               </div>
               <div>
                  <StyledTitleForSelects>Дата рождения</StyledTitleForSelects>
                  <StyledReusebleInput
                     placeholder="Укажите дату рождения"
                     value={birthdayInputValue}
                     onChange={handleBirthdayChange}
                  />
               </div>
               <div>
                  <StyledTitleForSelects>Email</StyledTitleForSelects>
                  <StyledReusebleInput
                     placeholder="Email"
                     value={emailInputValue}
                     onChange={handleEmailChange}
                  />
               </div>
               <div>
                  <StyledTitleForSelects>Номер телефона</StyledTitleForSelects>
                  <StyledReusebleInput
                     placeholder="Введите номер телефона"
                     value={phoneNumberInputValue}
                     onChange={handlePhoneNumberChange}
                  />
               </div>
            </StyledInputAndSelectsContainer>
            <div>
               <div>
                  <StyledTitle>Размеры</StyledTitle>
               </div>
               <StyledSelectContainer>
                  <StyledMarginLefts>
                     <StyledTitleFor2Selects>
                        Размер одежды
                     </StyledTitleFor2Selects>
                     <CustomProfileSelect
                        placeholder="Выберите размер одежды"
                        options={ClotherSize}
                        onSelect={handleOption1Change}
                        value={selectedOption1}
                     />
                  </StyledMarginLefts>
                  <div>
                     <StyledTitleForSelects>Размер обуви</StyledTitleForSelects>
                     <CustomProfileSelect
                        options={ShoesSize}
                        placeholder="Выберите размер обуви"
                        onSelect={handleOption2Change}
                        value={selectedOption2}
                     />
                  </div>
               </StyledSelectContainer>
            </div>
            <div>
               <StyledTitle>Интересы, хобби</StyledTitle>
               <StyledTitleForTextArea>
                  Расскажите о своих интересах и хобби
               </StyledTitleForTextArea>
               <EmptyTextarea
                  title="Пример: плавание, бег, танцы, чтение художественной литературы..."
                  rows="4"
                  value={hobbyValue}
                  onChange={handleHobbyChange}
               />
            </div>
            <div>
               <StyledTitleForSecondTextArea>
                  Важно знать
               </StyledTitleForSecondTextArea>
               <StyledTitleForTextArea>
                  О чем важно знать?
               </StyledTitleForTextArea>
               <EmptyTextarea
                  title="Пример: аллергия на синтетические материалы, непереносимость лактозы..."
                  rows="4"
                  value={importantValue}
                  onChange={handleImportantChange}
               />
            </div>
            <div>
               <StyledSocialMediaTitle>Социальные сети</StyledSocialMediaTitle>
               <StyledSocialMediaContainer>
                  <div>
                     <div>
                        <StyledTitleForSocialMedia>
                           Фейсбук
                        </StyledTitleForSocialMedia>
                        <StyledSocialMediaInputAndIconContainer>
                           <StyledSocialMediaIconContainer>
                              <FacebookIcon />
                           </StyledSocialMediaIconContainer>
                           <StyledReusebleInput
                              placeholder="Введите номер телефона"
                              value={facebookUrlValue}
                              onChange={handleFacebookChange}
                           />
                        </StyledSocialMediaInputAndIconContainer>
                     </div>
                     <div>
                        <StyledTitleForSocialMedia>
                           В контакте
                        </StyledTitleForSocialMedia>
                        <StyledSocialMediaInputAndIconContainer>
                           <StyledSocialMediaIconContainer>
                              <WkIcon />
                           </StyledSocialMediaIconContainer>

                           <StyledReusebleInput
                              placeholder="Введите номер телефона"
                              value={whatsAppUrlValue}
                              onChange={handleWhatsAppChange}
                           />
                        </StyledSocialMediaInputAndIconContainer>
                     </div>
                  </div>
                  <div>
                     <div>
                        <StyledTitleForSocialMedia>
                           Инстаграм
                        </StyledTitleForSocialMedia>
                        <StyledSocialMediaInputAndIconContainer>
                           <StyledSocialMediaIconContainer>
                              <InstagramIcon />
                           </StyledSocialMediaIconContainer>

                           <StyledReusebleInput
                              placeholder="Введите номер телефона"
                              value={instagramUrlValue}
                              onChange={handleInstagramChange}
                           />
                        </StyledSocialMediaInputAndIconContainer>
                     </div>
                     <div>
                        <StyledTitleForSocialMedia>
                           Телеграм
                        </StyledTitleForSocialMedia>
                        <StyledSocialMediaInputAndIconContainer>
                           <StyledSocialMediaIconContainer>
                              <TelegramIcon />
                           </StyledSocialMediaIconContainer>
                           <StyledReusebleInput
                              placeholder="Введите номер телефона"
                              value={telegramUrlValue}
                              onChange={handleTelegramChange}
                           />
                        </StyledSocialMediaInputAndIconContainer>
                     </div>
                  </div>
               </StyledSocialMediaContainer>
            </div>
            <StyledButtonContainer>
               <MyButton
                  variant="outlined"
                  background="#ffffff"
                  defaultcolor="#8D949E"
                  propswidth="113px"
                  outlinedbordercolor="#8D949E"
                  propsborderradius="10px"
                  onClick={() => navigate(-1)}
               >
                  Отмена
               </MyButton>
               <MyButton
                  variant="contained"
                  propswidth="140px"
                  background="#8639B5"
                  defaultcolor="#ffffff"
                  hoverbackgroundcolor="#612386"
                  activebackgroundcolor="#AB62D8"
                  propsborderradius="10px"
                  onClick={handleSubmit}
               >
                  Сохранить
               </MyButton>
            </StyledButtonContainer>
         </StyledInputAndSelctsGlobalContainer>
      </StyledGlobalContainer>
   )
}

export default memo(ProfileEdit)

const StyledReusebleInput = styled(ReusableInput)`
   width: 396px;
   margin-right: 10px;
`
const StyledButtonContainer = styled('div')`
   width: 260px;
   display: flex;
   justify-content: space-between;
   margin-top: 57px;
   margin-left: 628px;
`
const StyledTitle = styled('h2')`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 18px;
   line-height: 22px;
   display: flex;
   align-items: center;
   letter-spacing: 0.2px;
   color: #020202;
   margin-bottom: 20px;
`
const StyledTitleForSecondTextArea = styled('h2')`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 18px;
   line-height: 22px;
   display: flex;
   align-items: center;
   letter-spacing: 0.2px;
   color: #020202;
   margin-bottom: 20px;
   margin-top: 28px;
`
const StyledTitleForSelects = styled('p')`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 12px;
   line-height: 15px;
   display: flex;
   align-items: center;
   color: #464444;
`
const StyledTitleForTextArea = styled('p')`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 12px;
   line-height: 15px;
   display: flex;
   align-items: center;
   margin-left: 9px;
   margin-bottom: 10px;
   color: #464444;
`
const StyledMarginLefts = styled('div')`
   margin-left: 16px;
`
const StyledImgProfileWidth = styled('img')`
   width: 217px;
   height: 217px;
`

const StyledGlobalContainer = styled('div')`
   display: flex;
   background: #ffffff;
   border-radius: 10px;
   margin-top: 83px;
   padding: 20px;
   width: 100%;
`
const StyledInputAndSelctsGlobalContainer = styled('div')`
   margin-left: 20px;
`
const StyledInputAndSelectsContainer = styled('div')`
   display: flex;
   align-items: center;
   justify-content: center;
   width: 825px;
   flex-wrap: wrap;
   margin-bottom: 20px;
   margin-left: 13px;
`

const StyledImgContainer = styled('div')`
   width: 217px;
   height: 217px;
   background: #f6f6f9;
   border: 1px solid #dcdce4;
   border-radius: 8px;
   display: flex;
   align-items: center;
   justify-content: center;
`

const StyledImgIconContainer = styled('div')`
   text-align: center;
`

const StyledImgText = styled('label')`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 12px;
   line-height: 16px;

   display: flex;
   align-items: center;
   text-align: center;

   color: #8e8ea9;
`
const StyledInputOfTypeFile = styled('input')`
   display: none;
   border-radius: 8px;
`
const StyledSelectContainer = styled('div')`
   display: flex;
   margin-bottom: 65px;
`
const StyledTitleFor2Selects = styled('p')`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 12px;
   line-height: 15px;
   display: flex;
   align-items: center;
   justify-content: flex-start;
   color: #464444;
   margin: 0;
   padding: 0;
`
const StyledSocialMediaContainer = styled('div')`
   display: flex;
`
const StyledSocialMediaInputAndIconContainer = styled('div')`
   display: flex;
`
const StyledTitleForSocialMedia = styled('p')`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 12px;
   line-height: 15px;
   display: flex;
   align-items: center;
   color: #464444;
   margin-left: 40px;
   margin-bottom: 6px;
`
const StyledSocialMediaIconContainer = styled('div')`
   margin-right: 10px;
`
const StyledSocialMediaTitle = styled('h2')`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 18px;
   line-height: 22px;
   display: flex;
   align-items: center;
   letter-spacing: 0.2px;
   color: #020202;
   margin-bottom: 20px;
   margin-top: 28px;
`
