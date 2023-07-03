import React, { useEffect, useState } from 'react'
import { IconButton, InputBase, styled } from '@mui/material'
import { useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useDebounce } from 'use-debounce'
import { ReactComponent as IconSearch } from '../../../assets/icons/searchIcon.svg'
import { ReactComponent as IconDelete } from '../../../assets/icons/Отмена.svg'
import {
   categoryArray,
   countriesArray,
   stateArray,
   subcategoryArray,
} from '../../../utlis/constants/constnats'
import AppSelect from '../AppSelect'
import {
   getAllAdminCharities,
   getAllUserCharities,
   searchThunk,
} from '../../../redux/search/searchThunk'
import useToastBar from '../../../hooks/useToastBar'

const CustomIcon = () => {
   return (
      <div
         style={{ display: 'flex', alignItems: 'center', marginLeft: '20px' }}
      >
         <IconButton>
            <IconSearch />
         </IconButton>
      </div>
   )
}

const TextFieldWithDropDown = ({
   inputChangeHandler,
   charityInputValue,
   category,
   subCategory,
   stateSelect,
   countries,
   categoryChangeHnadler,
   counrtyChangeHandler,
   stateChangeHandler,
   subCategouryChangeHandler,
   handleClean,
   ...rest
}) => {
   const [isChecked, setIsChecked] = useState(false)
   const selectArray = [
      {
         onChange: stateChangeHandler,
         value: stateSelect,
         placeholder: 'Состояние',
         width: '13vw',
         height: '35px',
         border: 'none',
         options: stateArray,
         id: '1',
      },
      {
         onChange: categoryChangeHnadler,
         value: category,
         placeholder: 'Категория',
         width: '13vw',
         height: '35px',
         border: 'none',
         options: categoryArray,
         id: '2',
      },
      {
         value: subCategory,
         width: '15vw',
         height: '35px',
         placeholder: 'Подкатегория',
         border: 'none',
         onChange: subCategouryChangeHandler,
         options: subcategoryArray,
         id: '3',
      },
      {
         value: countries,
         width: '13vw',
         height: '35px',
         placeholder: 'Страна',
         border: 'none',
         onChange: counrtyChangeHandler,
         options: countriesArray,
         id: '4',
      },
   ]
   const keyDownHandler = () => {
      setIsChecked(true)
   }
   const [searchedValue] = useDebounce(charityInputValue, 500)

   const dispatch = useDispatch()
   const location = useLocation()
   const { showToast } = useToastBar()
   useEffect(() => {
      let searchEndpoint = ''
      switch (location.pathname) {
         case '/user/charity':
            searchEndpoint = `/api/charities/search?keyWord=${searchedValue}`
            if (charityInputValue?.trim().length > 0) {
               dispatch(searchThunk(searchEndpoint))
                  .unwrap()
                  .then((result) => {
                     if (result.length === 0) {
                        showToast(
                           'info',
                           'Благотворительность',
                           'с таким названием не существует!'
                        )
                     }
                  })
                  .catch(() =>
                     showToast('error', 'Ошибка', 'не удалось ничего найти')
                  )
            } else {
               dispatch(getAllUserCharities())
            }
            break
         case '/admin/charity':
            searchEndpoint = `/api/charities/search?keyWord=${searchedValue}`
            if (charityInputValue?.trim().length > 0) {
               dispatch(searchThunk(searchEndpoint))
                  .unwrap()
                  .then((result) => {
                     if (result.length === 0) {
                        showToast(
                           'info',
                           'Благотворительность',
                           'с таким названием не существует!'
                        )
                     }
                  })
                  .catch(() =>
                     showToast('error', 'Ошибка', 'не удалось ничего найти')
                  )
            } else {
               dispatch(getAllAdminCharities())
            }
            break
         default:
      }
   }, [searchedValue])
   return (
      <Container>
         <CustomIcon />
         <InputSearch
            {...rest}
            onChange={inputChangeHandler}
            value={charityInputValue}
            onKeyDown={keyDownHandler}
            type="text"
            variant="outlined"
            autoComplete="off"
            placeholder="Поиск"
         />
         <ContentSelect>
            {selectArray?.map((item) => {
               return (
                  <AppSelect
                     key={item.id}
                     value={item.value}
                     width={item.width}
                     height={item.height}
                     placeholder={item.placeholder}
                     border={item.border}
                     onChange={item.onChange}
                     options={item.options}
                  />
               )
            })}
            {isChecked && (
               <IconButton
                  onClick={() => {
                     handleClean()
                     setIsChecked(false)
                  }}
               >
                  <StyledIcon />
               </IconButton>
            )}
         </ContentSelect>
      </Container>
   )
}

export default TextFieldWithDropDown
const StyledIcon = styled(IconDelete)`
   color: black;
   cursor: pointer;
`

const Container = styled('div')`
   display: flex;
   align-items: center;
   justify-content: flex-start;
   border: 1px solid #bdbdbd;
   border-radius: 8px;
   max-width: 921px;
   background-color: #ffffff;
   height: 40px;
   padding: 0 5px;
`

const InputSearch = styled(InputBase)(() => ({
   '&': {
      outline: 'none',
      padding: '5px 10px',
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '17px',
      lineHeight: '17px',
      borderBottom: 'none',
      borderTop: 'none',
      borderRight: 'none',
      borderLeft: 'none',
      marginLeft: '20px',
      maxWidth: '309px',
   },

   '& .MuiOutlinedInput-root': {
      height: '40px',

      '& fieldset': {
         border: 'none',
      },
   },
}))

const ContentSelect = styled('div')`
   display: flex;
   align-items: center;
   justify-content: space-between;
   max-width: 900px;
   overflow: hidden;
`
