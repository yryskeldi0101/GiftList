import React, { useState } from 'react'
import { styled } from '@mui/material'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
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
import {
   addCharities,
   editCharity,
} from '../../../redux/charities/charityThunk'
import useToastBar from '../../../hooks/useToastBar'
import Snackbar from '../../../components/button/SnackBar'
import Spinner from '../../../components/UI/Spinner'
import { uploadFileRequest } from '../../../service/charityService'

const CharityAdd = () => {
   const location = useLocation()
   const { getOneCharity } = location.state ?? {}

   const [stateValue, setStateValue] = useState(getOneCharity?.state || '')
   const [categoryValue, setCategoryValue] = useState(
      getOneCharity?.category || ''
   )
   const [subCategoryValue, setSubCategoryValue] = useState(
      getOneCharity?.subCategory || ''
   )
   const [titleInputValue, setTitleInputValue] = useState(
      getOneCharity?.charityName || ''
   )

   const [descriptionValue, setDescriptionValue] = useState(
      getOneCharity?.description || ''
   )
   const [selectedFile, setSelectedFile] = useState(getOneCharity?.image || '')
   const { id } = useParams()
   const isLoading = useSelector((state) => state.charity.isLoading)
   const dispatch = useDispatch()
   const { showToast } = useToastBar()

   const handleImageChange = async (e) => {
      const file = e.target.files[0]
      const formData = new FormData()
      formData.append('file', file)
      try {
         const response = await uploadFileRequest(formData)
         const fileResponse = response.data.url
         setSelectedFile(fileResponse)
      } catch (error) {
         showToast(
            'error',
            'Ошибка',
            'При загрузке файла произошла ошибка повторите попытку позже'
         )
      }
   }

   const titleInputChangeHandler = (event) =>
      setTitleInputValue(event.target.value)

   const descriptionChangeHandler = (event) =>
      setDescriptionValue(event.target.value)

   const navigate = useNavigate()
   const navigateToCharityHandler = () => navigate(-1)
   const hadleSubmit = () => {
      const formIsEmpty = Object.values({
         selectedFile,
         titleInputValue,
         categoryValue,
         subCategoryValue,
         stateValue,
         descriptionValue,
      }).some((value) => !value)
      if (formIsEmpty) {
         return showToast('warning', 'Пожалуйста!', 'Заполните все поля')
      }
      const data = {
         name: titleInputValue,
         state: stateValue,
         category: categoryValue,
         subCategory: subCategoryValue,
         description: descriptionValue,
         image: selectedFile,
         id: +id || undefined,
      }
      if (id) {
         dispatch(editCharity(data)).then(() => navigate('/user/charity'))
      } else {
         dispatch(addCharities(data))
         setCategoryValue('')
         setDescriptionValue('')
         setSubCategoryValue('')
         setSelectedFile('')
         setTitleInputValue('')
         setStateValue('')
      }
      return formIsEmpty
   }
   return (
      <>
         <Snackbar />
         <StyledGlobalContainer>
            <StyledImgContainer>
               <div>
                  <StyledImgIconContainer>
                     {(selectedFile && (
                        <label htmlFor="file-input">
                           <StyledImgProfileWidth
                              src={selectedFile}
                              alt="img"
                           />
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
                        placeholder="Введите название подарка"
                        value={titleInputValue}
                        onChange={titleInputChangeHandler}
                     />
                  </div>
                  <StyledMarginLefts>
                     <StyledSelectContainer>
                        <StyledTitleForSelects>Cостояние</StyledTitleForSelects>
                        <AppSelect
                           background="none"
                           options={stateArray}
                           height="30px"
                           placeholder="Укажите состояние"
                           value={stateValue}
                           setValue={setStateValue}
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
                        value={categoryValue}
                        setValue={setCategoryValue}
                     />
                  </div>
                  <StyledMarginLefts>
                     <StyledTitleForSelects>Подкатегория</StyledTitleForSelects>
                     <AppSelect
                        background="none"
                        options={subcategoryArray}
                        height="30px"
                        placeholder="Выберите подкатегорию"
                        value={subCategoryValue}
                        setValue={setSubCategoryValue}
                     />
                  </StyledMarginLefts>
               </StyledInputAndSelectsContainer>
               <div>
                  <StyledDescription>Описание</StyledDescription>
                  <EmptyTextarea
                     value={descriptionValue}
                     onChange={descriptionChangeHandler}
                     title="Введите описание подарка"
                     rows="4"
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
                        onClick={hadleSubmit}
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
                        onClick={hadleSubmit}
                     >
                        {isLoading ? <Spinner /> : 'Добавить'}
                     </MyButton>
                  )}
               </StyledButtonContainer>
            </StyledInputAndSelctsGlobalContainer>
         </StyledGlobalContainer>
      </>
   )
}

export default CharityAdd

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
