import React, {useState} from 'react'
import Button from '@mui/material/Button'
import axios from 'axios'
import GenerateButton from './button/GenerateButton'
import Outputbox from './console/Outputbox'
import InputFields from './textinput/InputFields'

function ButtonOutput (props) {
    const [output, setOutput] = useState('');

    async function handleClick () {
      const request = await axios.get(
        'https://random-data-api.com/api/name/random_name'
      )
      console.log(request.data)
      setOutput(request.data.name)
    }
  return (
    <>
        <InputFields placeholder='Input Tile Title Here...'/>
        <InputFields placeholder='Input Tile Image URL Here...'/>
        <InputFields placeholder='Input Tile Picklist URL Here...'/>
        <InputFields placeholder='Input Tile *Excludes Here...'/>
        <GenerateButton onButtonClick={handleClick} />
        <Outputbox output={output} />
 
    </>

  )
}   

export default ButtonOutput
