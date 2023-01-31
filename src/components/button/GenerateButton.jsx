import * as React from 'react'
import Button from '@mui/material/Button'
import axios from 'axios'
import "./GenerateButton.css"
  

function GenerateButton (props) {
  return (
    <>
  
  <div className='generateSpacingTop'></div>
  
  <Button sx={{
    display: "block"
  }} onClick={props.onButtonClick} className='generateButton' color='error' variant='contained'>
    Generate
  </Button>
  <div className='generateSpacingBottom'></div>
  </>
  )
}

export default GenerateButton
