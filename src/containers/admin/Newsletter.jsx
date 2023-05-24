import React, { useEffect, useState } from 'react'
import { Snackbar, styled } from '@mui/material'
import { useNavigate, useSearchParams } from 'react-router-dom'
import MyButton from '../../components/UI/Button'
import { ReactComponent as MailingIcon } from '../../assets/icons/mailing.svg'
import MailingModal from '../../components/UI/MailingModal'
import useToastBar from '../../hooks/useToastBar'
import {
   createMailRequest,
   getAllMailingRequest,
   uploadMailingImageRequest,
} from '../../service/mailingService'

const Newsletter = () => {
   const [fileImage, setFileImage] = useState(null)
   const [imageUrl, setImageUrl] = useState('')
   const [mailingTitle, setMailingTitle] = useState('')
   const [mailingDescription, setMailingDescription] = useState('')
   const [searchParams, setSearchParams] = useSearchParams()
   const [mailingData, setMailingData] = useState([])
   const { open } = Object.fromEntries(searchParams)

   const onCloseModal = () => setSearchParams({})
   // const openMailingModal = () => setSearchParams({ open: 'mailing' })
   const navigate = useNavigate()
   const { showToast } = useToastBar()
   const navigationHandler = (id) => navigate(`${id}/mailing_detail`)

   const imageFileChangeHandler = (e) => {
      const file = e.target.files[0]
      const formData = new FormData()
      formData.append('file', file)
      setFileImage(formData)
      if (file) {
         const reader = new FileReader()
         reader.onload = () => {
            setImageUrl(reader.result)
         }
         reader.readAsDataURL(file)
      }
   }
   const mailingTitleChangeHandler = (e) => setMailingTitle(e.target.value)

   const mailingDescriptionChangeHandler = (e) =>
      setMailingDescription(e.target.value)

   const uploadFile = async () => {
      try {
         const response = await uploadMailingImageRequest(fileImage)
         const fileResponse = response.data.url
         setImageUrl(fileResponse)
         return fileResponse
      } catch (error) {
         return showToast(
            'error',
            'Ошибка',
            'При загрузке файла произошла ошибка повторите попытку позже'
         )
      }
   }

   const addMailing = async (sendData) => {
      try {
         const data = await createMailRequest(sendData)
         onCloseModal()
         return data
      } catch (error) {
         console.error(error)
         return showToast(
            'error',
            'Ошибка',
            'Что-то пошло не так повторите попытку позже'
         )
      }
   }
   const submitHandler = async () => {
      const formIsEmpty = Object.values({
         imageUrl,
         mailingDescription,
         mailingTitle,
      }).some((value) => !value)
      if (formIsEmpty) {
         return showToast('warning', 'Пожалуйста!', 'Заполните все поля')
      }
      const sendData = {
         title: mailingTitle,
         description: mailingDescription,
      }
      const fileResponce = fileImage && (await uploadFile())
      if (fileResponce) {
         addMailing({ ...sendData, image: fileResponce })
      }
      setMailingTitle('')
      setMailingDescription('')
      setImageUrl('')
      return formIsEmpty
   }
   const getAllMailing = async () => {
      try {
         const { data } = await getAllMailingRequest()
         return data
      } catch (error) {
         return console.error(error)
      }
   }
   useEffect(() => {
      const getData = async () => {
         const data = await getAllMailing()
         setMailingData(data)
      }
      getData()
   }, [])
   return (
      <>
         <Snackbar />
         <MailingModal
            open={open}
            onClose={onCloseModal}
            imageFileChangeHandler={imageFileChangeHandler}
            imageValue={imageUrl}
            mailingValue={mailingTitle}
            mailingDescriptionValue={mailingDescription}
            mailingTitleChangeHandler={mailingTitleChangeHandler}
            mailingDescriptionChangeHandler={mailingDescriptionChangeHandler}
            clickHandler={submitHandler}
         />
         <ButtonContainer>
            <MyButton
               variant="contained"
               defaultcolor="#ffffff"
               background="#8639B5"
               hoverbackgroundcolor="#840fcd"
               activebackgroundcolor="#5e0695"
               onClick={() => console.log('Dadsd')}
            >
               <MailingIcon /> Отправить рассылку
            </MyButton>
         </ButtonContainer>
         <GlobalContainer>
            {mailingData?.map((item) => {
               return (
                  <Container
                     onClick={() => navigationHandler(item.id)}
                     key={item.id}
                  >
                     <div>
                        <StyledImg src={item.image} alt="newsLetter" />
                     </div>
                     <ContentContainer>
                        <h1>{item.title}</h1>
                        <p>{item.createdAt}</p>
                     </ContentContainer>
                  </Container>
               )
            })}
         </GlobalContainer>
      </>
   )
}

export default Newsletter

const ButtonContainer = styled('div')`
   display: flex;
   max-width: 1170px;
   align-items: center;
   justify-content: flex-end;
   margin-top: 32px;
`
const GlobalContainer = styled('div')`
   display: flex;
   flex-wrap: wrap;
   margin-top: 30px;
   max-width: 1170px;
   gap: 60px;
   row-gap: 50px;
`
const Container = styled('div')`
   width: 349px;
   height: 270px;
   background-color: #ffffff;
   border-radius: 8px;
   padding: 16px;
`
const StyledImg = styled('img')`
   width: 317px;
   height: 149px;
`
const ContentContainer = styled('div')`
   display: flex;
   flex-direction: column;
   margin-top: 16px;
   row-gap: 15px;
   h1 {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 130%;
      color: #000000;
   }
   P {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      color: #636c84;
   }
`
