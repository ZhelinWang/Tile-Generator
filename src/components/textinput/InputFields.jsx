import * as React from 'react'
import TextField from '@mui/material/TextField'
import { withTheme } from '@emotion/react'

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
          variant='outlined'
          sx={{
            width: '400px',
            margin: '4px auto',
            backgroundColor: 'white'
          }}
        />
      </div>
    </>
  )
}

export default InputFields
