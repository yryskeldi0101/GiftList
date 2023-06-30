import React, { useEffect, useState, memo } from 'react'
import { styled } from '@mui/material'
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
   const [searchParams, setSearchParams] = useSearchParams()
   const [mailingData, setMailingData] = useState([])
   const { open } = Object.fromEntries(searchParams)

   const onCloseModal = () => setSearchParams({})
   const openMailingModal = () => setSearchParams({ open: 'mailing' })
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
   const getAllMailing = async () => {
      try {
         const { data } = await getAllMailingRequest()
         setMailingData(data)
         return data
      } catch (error) {
         return showToast(
            'error',
            'Ошибка',
            'При загрузке данных произошла ошибка! повторите попытку позже'
         )
      }
   }

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
         await createMailRequest(sendData)
         onCloseModal()
         return await getAllMailing()
      } catch (error) {
         console.error(error)
         return showToast(
            'error',
            'Ошибка',
            'При загрузке данных произошла ошибка! повторите попытку позже'
         )
      }
   }
   const submitHandler = async (data) => {
      const formIsEmpty = Object.values({
         imageUrl,
         mailingTitle: data.mailingTitle,
         mailingDescription: data.mailingDescription,
      }).some((value) => !value)
      if (formIsEmpty) {
         return showToast('warning', 'Пожалуйста!', 'Выберите фотографию')
      }
      const sendData = {
         title: data.mailingTitle,
         description: data.mailingDescription,
      }
      const fileResponce = fileImage && (await uploadFile())
      if (fileResponce) {
         addMailing({ ...sendData, image: fileResponce })
      }
      setImageUrl('')
      return formIsEmpty
   }
   const closeModalHandler = () => {
      onCloseModal()
      setImageUrl()
      setFileImage()
   }
   useEffect(() => {
      getAllMailing()
   }, [])
   return (
      <>
         <MailingModal
            open={open}
            onClose={closeModalHandler}
            imageFileChangeHandler={imageFileChangeHandler}
            imageValue={imageUrl}
            clickHandler={submitHandler}
         />
         <ButtonContainer>
            <MyButton
               variant="contained"
               defaultcolor="#ffffff"
               background="#8639B5"
               hoverbackgroundcolor="#840fcd"
               activebackgroundcolor="#5e0695"
               onClick={openMailingModal}
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

export default memo(Newsletter)

const ButtonContainer = styled('div')`
   display: flex;
   align-items: center;
   justify-content: flex-end;
   margin-top: 32px;
`
const GlobalContainer = styled('div')`
   display: flex;
   flex-wrap: wrap;
   margin-top: 30px;
   gap: 43px;
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
