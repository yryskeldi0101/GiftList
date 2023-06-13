import React, { useState } from 'react'
import { TextField, styled } from '@mui/material'
import { ReactComponent as IconSearch } from '../../../assets/icons/searchIcon.svg'
import TextFieldWithDropDown from './DropDownTextfield'

const CustomIcon = () => {
   return (
      <div
         style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}
      >
         <IconSearch />
      </div>
   )
}

const SearchInput = ({
   inputChangeProps,
   value,
   inputChangeHandler,
   ...rest
}) => {
   const [category, setCategory] = useState('')
   const [stateSelect, setStateSelect] = useState('')
   const [countries, setCountries] = useState('')
   const [subCategory, setSubCategory] = useState('')
   return (
      <div>
         {inputChangeProps ? (
            <InputBlock>
               <Input
                  {...rest}
                  onChange={inputChangeHandler}
                  value={value}
                  type="text"
                  autoFocus={false}
                  placeholder="Поиск"
                  InputProps={{
                     startAdornment: <CustomIcon />,
                  }}
               />
            </InputBlock>
         ) : (
            <TextFieldWithDropDown
               setCategory={setCategory}
               category={category}
               stateSelect={stateSelect}
               countries={countries}
               subCategory={subCategory}
               setCountries={setCountries}
               setStateSelect={setStateSelect}
               setSubCategory={setSubCategory}
               inputChangeHandler={inputChangeHandler}
               value={value}
            />
         )}
      </div>
   )
}

export default SearchInput

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
