import React, { useState } from 'react'

const options = [
   { label: 'Option 1', value: 'option1' },
   { label: 'Option 2', value: 'option2' },
   { label: 'Option 3', value: 'option3' },
]

const CustomDropdown = () => {
   const [selectedOption, setSelectedOption] = useState('')

   const handleOptionChange = (value) => {
      setSelectedOption(value)
   }

   return (
      <div>
         <div onClick={() => handleOptionChange('')}>
            {selectedOption || 'Select an option'}
         </div>
         <div className="options">
            {options.map((option) => (
               <div onClick={() => handleOptionChange(option.label)}>
                  {option.label}
               </div>
            ))}
         </div>
      </div>
   )
}

export default CustomDropdown
