import * as React from 'react'
import TextField from '@mui/material/TextField'
import { withTheme } from '@emotion/react'

function InputFields ({ placeholder, onKeyTyped, value, labelText }) {
  return (
    <>
      <div>
        <TextField
          className='inputFields'
            // required label='Required'
          value={value}
          onChange={onKeyTyped}
          placeholder={placeholder}
          variant='outlined'
          label={labelText}
          sx={{
            width: '400px',
            margin: '5px auto',
            backgroundColor: 'white'
          }}
        />
      </div>  
    </>
  )
}

export default InputFields
