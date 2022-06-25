import React, { useState } from 'react'
import Button from '@mui/material/Button'
import axios from 'axios'
import GenerateButton from '../button/GenerateButton'
import Outputbox from '../console/Outputbox'
import Navbar from '../navbar/Navbar'
import Dropdown from '../dropdown-menu/Dropdown'
import InputFields from '../textinput/InputFields'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'

function HTMLGenerator (props) {
  const [inputData, setInputData] = useState({
    selectedTile: 'Select type of Tile...',
    selectedDeal: 'Select type of Deal...'
  })
  const [output, setOutput] = useState('')

  async function handleClick () {
    console.log(inputData)
  }
  return (
    <>
      <Dropdown
        style={{ zIndex: '10' }}
        options={['Large Tile', 'Small Tile', 'Banner']}
        selected={inputData.selectedTile}
        onSelected={selectedItem => {
          setInputData({ ...inputData, selectedTile: selectedItem })
        }}
      />
      <InputFields placeholder='Input Tile Title Here...' />
      <InputFields placeholder='Input Tile Image URL Here...' />
      <InputFields placeholder='Input Tile Picklist URL Here...' />
      <InputFields placeholder='Input Tile *Excludes Here...' />
      <Dropdown
        style={{ zIndex: '1' }}
        options={[
          'Item X% Off',
          'Item X up to X% Off',
          'Buy X get X% Off',
          'Buy X get X Free/Half Price',
          'Buy X for X'
        ]}
        selected={inputData.selectedDeal}
        onSelected={selectedItem => {
          setInputData({ ...inputData, selectedDeal: selectedItem })
        }}
      />
      <GenerateButton onButtonClick={handleClick} />
      <Outputbox output={output} />
      <FormControlLabel
        labelPlacement='start'
        className='checkboxClub'
        control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 30 } }} />}
        label='Club?'
      />
      <FormControlLabel
        labelPlacement='start'
        className='checkboxClub'
        control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 30 } }} />}
        label='Minified?'
      />
    </>
  )
}

export default HTMLGenerator
