import React, { useState } from 'react'
import { IconButton, TextField, styled } from '@mui/material'
import { useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { ReactComponent as IconSearch } from '../../../assets/icons/searchIcon.svg'
import { searchThunk } from '../../../redux/search/searchThunk'
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
      return window.location.reload()
   }
   const handleChange = (e) => setCharityInputValue(e.target.value)
   const keyDownHandler = () => setIsChecked(true)
   const { showToast } = useToastBar()
   const handleSearch = async (value) => {
      let searchEndpoint = ''
      switch (location.pathname) {
         case '/user/friends':
            searchEndpoint = `/api/friends/search?keyWord=${value}`
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
            break
         case '/admin/users':
            searchEndpoint = `/api/user/search?keyWord=${value}`
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
            break
         default:
            break
      }
   }
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
               value={charityInputValue}
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
                        <StyledIconButton onClick={() => handleSearch(value)}>
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
