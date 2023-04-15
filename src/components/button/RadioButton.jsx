import React from 'react'

const RadioButton = ({ label, name, value, checked, onChange }) => (
   <label style={{ display: 'flex', alignItems: 'center' }}>
      <input
         type="radio"
         name={name}
         value={value}
         checked={checked}
         onChange={onChange}
         style={{ display: 'none' }}
      />
      <div
         style={{
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            border: `2px solid ${checked ? 'blue' : 'lightgray'}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: '10px',
            background: `${checked ? 'blue' : 'white'}`,
         }}
      >
         {checked && (
            <div
               style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  background: 'white',
               }}
            />
         )}
      </div>
      {label}
   </label>
)

export default RadioButton
