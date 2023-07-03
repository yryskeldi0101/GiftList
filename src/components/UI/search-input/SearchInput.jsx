import React, { useEffect, useState } from 'react'
import { IconButton, TextField, styled } from '@mui/material'
import { useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useDebounce } from 'use-debounce'
import { ReactComponent as IconSearch } from '../../../assets/icons/searchIcon.svg'
import {
   getAllAdminUsers,
   getAllFriends,
   searchThunk,
} from '../../../redux/search/searchThunk'
import TextFieldWithDropDown from './DropDownTextfield'
import { ReactComponent as IconDelete } from '../../../assets/icons/Отмена.svg'
import useToastBar from '../../../hooks/useToastBar'

const SearchInput = ({
   inputChangeProps,
   value,
   inputChangeHandler,
   cleanHandler,
   ...rest
}) => {
   const [category, setCategory] = useState('')
   const [stateSelect, setStateSelect] = useState('')
   const [countries, setCountries] = useState('')
   const [subCategory, setSubCategory] = useState('')
   const [charityInputValue, setCharityInputValue] = useState('')
   const [isChecked, setIsChecked] = useState(false)
   const { pathname } = useLocation()
   const stateChangeHandler = (e) => setStateSelect(e.target.value)
   const categoryChangeHnadler = (e) => setCategory(e.target.value)
   const counrtyChangeHandler = (e) => setCountries(e.target.value)
   const subCategouryChangeHandler = (e) => setSubCategory(e.target.value)
   const location = useLocation()
   const dispatch = useDispatch()
   const handleClean = () => {
      setCharityInputValue('')
   }
   const handleChange = (e) => setCharityInputValue(e.target.value)
   const keyDownHandler = () => setIsChecked(true)
   const { showToast } = useToastBar()
   const [searchedValue] = useDebounce(value, 500)

   useEffect(() => {
      let searchEndpoint = ''
      switch (location.pathname) {
         case '/user/friends':
            searchEndpoint = `/api/friends/search?keyWord=${searchedValue}`
            if (value.trim().length > 0) {
               dispatch(searchThunk(searchEndpoint))
                  .unwrap()
                  .then((result) => {
                     if (result.length === 0) {
                        showToast(
                           'info',
                           'Пользователь',
                           'с таким именем не существует!'
                        )
                     }
                  })
                  .catch(() =>
                     showToast('error', 'Ошибка', 'не удалось ничего найти')
                  )
            } else {
               dispatch(getAllFriends())
            }
            break
         case '/user/lenta':
            searchEndpoint = `/api/feeds?page=1&size=6?keyWord=${searchedValue}`
            dispatch(searchThunk(searchEndpoint))
            break
         case '/admin/users':
            searchEndpoint = `/api/user/search?keyWord=${searchedValue}`
            if (value.trim().length > 0) {
               dispatch(searchThunk(searchEndpoint))
                  .unwrap()
                  .then((result) => {
                     if (result.length === 0) {
                        showToast(
                           'info',
                           'Пользователь',
                           'с таким именем не существует!'
                        )
                     }
                  })
                  .catch(() =>
                     showToast('error', 'Ошибка', 'не удалось ничего найти')
                  )
            } else {
               dispatch(getAllAdminUsers())
            }
            break
         default:
      }
   }, [searchedValue])

   return (
      <div>
         {pathname.includes('charity') ? (
            <TextFieldWithDropDown
               category={category}
               stateSelect={stateSelect}
               countries={countries}
               subCategory={subCategory}
               categoryChangeHnadler={categoryChangeHnadler}
               counrtyChangeHandler={counrtyChangeHandler}
               stateChangeHandler={stateChangeHandler}
               subCategouryChangeHandler={subCategouryChangeHandler}
               inputChangeHandler={handleChange}
               handleClean={handleClean}
               charityInputValue={charityInputValue}
            />
         ) : (
            <InputBlock>
               <Input
                  {...rest}
                  onChange={inputChangeHandler}
                  value={value}
                  type="text"
                  autoFocus={false}
                  placeholder="Поиск"
                  autoComplete="off"
                  onKeyDown={keyDownHandler}
                  InputProps={{
                     startAdornment: (
                        <StyledIconButton>
                           <IconSearch />
                        </StyledIconButton>
                     ),
                     endAdornment: isChecked && (
                        <IconButton
                           onClick={() => {
                              cleanHandler()
                              setIsChecked(false)
                           }}
                        >
                           <IconDelete />
                        </IconButton>
                     ),
                  }}
               />
            </InputBlock>
         )}
      </div>
   )
}

export default SearchInput

const StyledIconButton = styled(IconButton)`
   border-radius: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
`
const Input = styled(TextField)(() => ({
   outline: 'none',
   width: '60vw',
   fontFamily: 'Inter',
   fontStyle: 'normal',
   fontWeight: '400',
   fontSize: '14px',
   lineHeight: '17px',
   '& .MuiOutlinedInput-root': {
      padding: '0px 10px',
      borderRadius: '8px',
      height: '40px',
      '& fieldset': {
         borderColor: '#bdbdbd',
      },
      '&:hover fieldset': {
         borderColor: '#bdbdbd',
      },
      '&.Mui-focused fieldset': {
         borderColor: '#8639B5',
      },
   },
   '&::placeholder': {
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: '14px',
      lineHeight: '19px',
   },
}))

const InputBlock = styled('div')`
   display: flex;
   align-items: center;
   width: 100%;
   height: 40px;
   padding: 0px;
`
