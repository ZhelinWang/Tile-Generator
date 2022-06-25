import * as React from 'react'
import TextField from '@mui/material/TextField'

function InputFields ({ placeholder, onKeyTyped, value }) {
  return (
    <>
      <div>
        <TextField
          className='inputFields'
          //   required label='Required'
          value={value}
          onChange={onKeyTyped}
          placeholder={placeholder}
          sx={{ width: '385px', margin: '4px auto' }}
        />
      </div>
    </>
  )
}

export default InputFields
