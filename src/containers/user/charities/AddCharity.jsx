import React, { useState, memo } from 'react'
import { styled } from '@mui/material'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { ReactComponent as AddImg } from '../../../assets/svg/charityImgAddIcon.svg'
import ReusableInput from '../../../components/UI/input/Input'
import AppSelect from '../../../components/UI/AppSelect'
import {
   categoryArray,
   stateArray,
   subcategoryArray,
} from '../../../utlis/constants/constnats'
import EmptyTextarea from '../../../components/UI/textarea/Textarea'
import MyButton from '../../../components/UI/Button'
import useToastBar from '../../../hooks/useToastBar'
import Spinner from '../../../components/UI/Spinner'
import {
   addCharityRequest,
   editCharityRequest,
   uploadFileRequest,
} from '../../../service/charityService'

const CharityAdd = () => {
   const location = useLocation()
   const { getOneCharity } = location.state ?? {}
   const [selectedFile, setSelectedFile] = useState(null)
   const [imageUrl, setImageUrl] = useState(getOneCharity?.image || '')
   const [isLoading, setIsLoading] = useState(false)
   const { id } = useParams()
   const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
   } = useForm({
      defaultValues: {
         stateValue: getOneCharity?.state || '',
         categoryValue: getOneCharity?.category || '',
         subCategoryValue: getOneCharity?.subCategory || '',
         titleInputValue: getOneCharity?.charityName || '',
         descriptionValue: getOneCharity?.description || '',
      },
   })
   const watchStateValue = watch('stateValue')
   const watchCategoryValue = watch('categoryValue')
   const watchSubCategoryValue = watch('subCategoryValue')
   const { showToast } = useToastBar()
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
   const navigate = useNavigate()
   const navigateToCharityHandler = () => navigate(-1)

   const addCharity = async (values) => {
      setIsLoading(true)
      try {
         const data = await addCharityRequest(values)
         navigate('/user/charity')
         return data
      } catch (error) {
         return showToast(
            'error',
            'Ошибка',
            'Что-то пошло не так повторите попытку позже'
         )
      } finally {
         setIsLoading(false)
      }
   }
   const editCharityHandler = async (values) => {
      setIsLoading(true)
      try {
         const data = await editCharityRequest(values)
         navigate('/user/charity')
         return data
      } catch (error) {
         return showToast(
            'error',
            'Ошибка',
            'Что-то пошло не так повторите попытку позже'
         )
      } finally {
         setIsLoading(false)
      }
   }
   const uploadFile = async () => {
      try {
         const response = await uploadFileRequest(selectedFile)
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
   const submitHandler = async (data) => {
      const formIsEmpty = Object.values({
         imageUrl,
      }).some((value) => !value)
      if (formIsEmpty) {
         return showToast('warning', 'Пожалуйста!', 'Выберите фотографию')
      }
      const SentData = {
         name: data.titleInputValue,
         state: data.stateValue,
         category: data.categoryValue,
         subCategory: data.subCategoryValue,
         description: data.descriptionValue,
      }
      const fileResponse = selectedFile && (await uploadFile())
      if (id)
         editCharityHandler({
            ...SentData,
            image: selectedFile ? fileResponse : imageUrl,
            id: +id,
         })
      if (fileResponse) {
         addCharity({ ...SentData, image: fileResponse })
      }
      return formIsEmpty
   }
   return (
      <form onSubmit={handleSubmit(submitHandler)}>
         <StyledGlobalContainer>
            <StyledImgContainer>
               <div>
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
                  </StyledImgIconContainer>

                  <StyledInputOfTypeFile
                     id="file-input"
                     accept="image/*"
                     type="file"
                     placeholder="Нажмите для добавления фотографии"
                     onChange={handleImageChange}
                  />
               </div>
            </StyledImgContainer>

            <StyledInputAndSelctsGlobalContainer>
               <div>
                  <StyledTitle>Добавление вещи</StyledTitle>
               </div>
               <StyledInputAndSelectsContainer>
                  <div>
                     <StyledTitleForSelects>
                        Название подарка
                     </StyledTitleForSelects>
                     <StyledReusebleInput
                        id="titleInputValue"
                        name="titleInputValue"
                        placeholder="Введите название подарка"
                        {...register('titleInputValue', { required: true })}
                        borderError={errors?.titleInputValue ? 'true' : 'false'}
                     />
                  </div>
                  <StyledMarginLefts>
                     <StyledSelectContainer>
                        <StyledTitleForSelects>Cостояние</StyledTitleForSelects>
                        <AppSelect
                           id="stateValue"
                           name="stateValue"
                           background="none"
                           options={stateArray}
                           height="30px"
                           value={watchStateValue}
                           placeholder="Укажите состояние"
                           {...register('stateValue', {
                              required: true,
                           })}
                           borderError={errors?.stateValue ? 'true' : 'false'}
                        />
                     </StyledSelectContainer>
                  </StyledMarginLefts>
                  <div>
                     <StyledTitleForSelects>Категория</StyledTitleForSelects>
                     <AppSelect
                        background="none"
                        options={categoryArray}
                        height="30px"
                        placeholder="Выберите категорию"
                        id="categoryValue"
                        name="categoryValue"
                        value={watchCategoryValue}
                        {...register('categoryValue', {
                           required: true,
                        })}
                        borderError={errors?.categoryValue ? 'true' : 'false'}
                     />
                  </div>
                  <StyledMarginLefts>
                     <StyledTitleForSelects>Подкатегория</StyledTitleForSelects>
                     <AppSelect
                        background="none"
                        options={subcategoryArray}
                        height="30px"
                        id="subCategoryValue"
                        value={watchSubCategoryValue}
                        name="subCategoryValue"
                        placeholder="Выберите подкатегорию"
                        {...register('subCategoryValue', {
                           required: true,
                        })}
                        borderError={
                           errors?.subCategoryValue ? 'true' : 'false'
                        }
                     />
                  </StyledMarginLefts>
               </StyledInputAndSelectsContainer>
               <div>
                  <StyledDescription>Описание</StyledDescription>
                  <EmptyTextarea
                     title="Введите описание подарка"
                     id="descriptionValue"
                     name="descriptionValue"
                     rows="4"
                     {...register('descriptionValue', { required: true })}
                     borderError={errors?.descriptionValue ? 'true' : 'false'}
                  />
               </div>
               <StyledButtonContainer>
                  <MyButton
                     variant="outlined"
                     background="#ffffff"
                     defaultcolor="#8D949E"
                     propswidth="113px"
                     outlinedbordercolor="#8D949E"
                     propsborderradius="10px"
                     onClick={navigateToCharityHandler}
                  >
                     Отмена
                  </MyButton>
                  {id ? (
                     <MyButton
                        variant="contained"
                        propswidth="113px"
                        background="#8639B5"
                        defaultcolor="#ffffff"
                        hoverbackgroundcolor="#612386"
                        activebackgroundcolor="#AB62D8"
                        propsborderradius="10px"
                        type="submit"
                     >
                        {isLoading ? <Spinner /> : 'Cохранить'}
                     </MyButton>
                  ) : (
                     <MyButton
                        variant="contained"
                        propswidth="113px"
                        background="#8639B5"
                        defaultcolor="#ffffff"
                        hoverbackgroundcolor="#612386"
                        activebackgroundcolor="#AB62D8"
                        propsborderradius="10px"
                        type="submit"
                     >
                        {isLoading ? <Spinner /> : 'Добавить'}
                     </MyButton>
                  )}
               </StyledButtonContainer>
            </StyledInputAndSelctsGlobalContainer>
         </StyledGlobalContainer>
      </form>
   )
}

export default memo(CharityAdd)

const StyledReusebleInput = styled(ReusableInput)`
   width: 396px;
`
const StyledSelectContainer = styled('div')`
   margin-top: -10px;
`
const StyledButtonContainer = styled('div')`
   width: 260px;
   display: flex;
   justify-content: space-between;
   margin-top: 57px;
   margin-left: 548px;
`
const StyledImgProfileWidth = styled('img')`
   width: 217px;
   height: 217px;
   border-radius: 8px;
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
const StyledTitleForSelects = styled('p')`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 12px;
   line-height: 15px;
   display: flex;
   align-items: center;
   color: #464444;
   margin: 0;
   padding: 0;
`
const StyledDescription = styled('h3')`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 12px;
   line-height: 15px;
   display: flex;
   align-items: center;
   color: #464444;
   margin-left: 10px;
   padding: 0;
`
const StyledMarginLefts = styled('div')`
   margin-left: 16px;
`

const StyledGlobalContainer = styled('div')`
   display: flex;
   margin-top: 88px;
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
   cursor: pointer;
`

const StyledImgIconContainer = styled('div')`
   text-align: center;
   cursor: pointer;
`

const StyledImgText = styled('label')`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 12px;
   line-height: 16px;
   display: flex;
   align-items: center;
   justify-content: center;
   margin-top: 16px;
   color: #8e8ea9;
   cursor: pointer;
   position: relative;
   z-index: 3;
`
const StyledInputOfTypeFile = styled('input')`
   display: none;
`
