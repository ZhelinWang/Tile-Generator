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
  const [selectedTile, setSelectedTile] = useState('Select Type of Deal ')
  const [selectedDeal, setSelectedDeal] = useState('Select Type of Tile ')
  const [output, setOutput] = useState('')

  async function handleClick () {
    const request = await axios.get(
      'https://random-data-api.com/api/name/random_name'
    )
    console.log(request.data)
    setOutput(request.data.name)
  }
  return (
    <>
      <Dropdown
        style={{ zIndex: '10' }}
        options={['Large Tile', 'Small Tile', 'Banner']}
        selected={selectedDeal}
        setSelected={setSelectedDeal}
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
        selected={selectedTile}
        setSelected={setSelectedTile}
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
