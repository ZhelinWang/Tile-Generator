import * as React from 'react'
import Button from '@mui/material/Button'
import axios from 'axios'

  

function GenerateButton (props) {
  return (
  <Button onClick={props.onButtonClick} className='generateButton' color='error' variant='contained'>
    Generate
  </Button>

  )
}

export default GenerateButton
