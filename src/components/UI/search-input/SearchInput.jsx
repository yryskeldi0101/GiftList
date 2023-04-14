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
   const [state, setState] = useState('')
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
               state={state}
               countries={countries}
               subCategory={subCategory}
               setCountries={setCountries}
               setState={setState}
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
   padding: '5px 10px',
   width: '821px',
   fontFamily: 'Inter',
   fontStyle: 'normal',
   fontWeight: '400',
   fontSize: '14px',
   lineHeight: '17px',
   '& .MuiOutlinedInput-root': {
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
   padding: 10px 0px;
`
