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
import { grey } from '@mui/material/colors'

function HTMLGenerator (props) {
  const [inputData, setInputData] = useState({
    selectedTile: 'Select type of Tile...',
    selectedDeal: 'Select type of Deal...',
    title: '',
    tileURL: '',
    picklistURL: '',
    excludes: '',
    club: false,
    white: false,
    x: '',
    y: ''
  })
  const [output, setOutput] = useState('')

  async function handleGenerate () {
    setOutput(JSON.stringify(inputData))
  }
  return (
    <>
      <br />
      <Dropdown
        style={{ zIndex: '10' }}
        options={['Large Tile', 'Small Tile', 'Banner']}
        selected={inputData.selectedTile}
        onSelected={selectedItem => {
          setInputData({ ...inputData, selectedTile: selectedItem })
        }}
      />
      <InputFields
        placeholder='Input Tile Title Here...'
        value={inputData.title}
        onKeyTyped={userInput => {
          setInputData({ ...inputData, title: userInput.target.value })
        }}
      />
      <InputFields
        placeholder='Input Tile Image URL Here...'
        value={inputData.tileURL}
        onKeyTyped={userInput => {
          setInputData({ ...inputData, tileURL: userInput.target.value })
        }}
      />
      <InputFields
        placeholder='Input Tile Picklist URL Here...'
        value={inputData.picklistURL}
        onKeyTyped={userInput => {
          setInputData({ ...inputData, picklistURL: userInput.target.value })
        }}
      />
      <InputFields
        placeholder='Input Tile *Excludes Here...'
        value={inputData.excludes}
        onKeyTyped={userInput => {
          setInputData({ ...inputData, excludes: userInput.target.value })
        }}
      />
      <Dropdown
        style={{ zIndex: '1' }}
        options={[
          'Item X% Off',
          'Item X up to Y% Off',
          'Buy X get Y% Off',
          'Buy X get Y Free / Half Price',
          'Buy X for Y'
        ]}
        selected={inputData.selectedDeal}
        onSelected={selectedItem => {
          setInputData({ ...inputData, selectedDeal: selectedItem })
        }}
      />
      <InputFields
        placeholder='X Value Here...'
        value={inputData.x}
        onKeyTyped={userInput => {
          setInputData({ ...inputData, x: userInput.target.value })
        }}
      />
      <InputFields
        placeholder='Y Value Here...'
        value={inputData.y}
        onKeyTyped={userInput => {
          setInputData({ ...inputData, y: userInput.target.value })
        }}
      />

      <GenerateButton onButtonClick={handleGenerate} />
      <FormControlLabel
        labelPlacement='start'
        className='checkboxClub'
        control={
          <Checkbox
            sx={{
              color: grey[900],
              '& .MuiSvgIcon-root': { fontSize: 30, color: grey[900] }
            }}
          />
        }
        label='Club?'
        checked={inputData.club}
        onChange={event => {
          setInputData({ ...inputData, club: event.target.checked })
        }}
      />
      <FormControlLabel
        labelPlacement='start'
        className='checkboxColor'
        control={
          <Checkbox
            sx={{
              color: grey[900],
              '& .MuiSvgIcon-root': { fontSize: 30, color: grey[900] }
            }}
          />
        }
        label='White?'
        checked={inputData.white}
        onChange={event => {
          setInputData({ ...inputData, white: event.target.checked })
        }}
      />
      <Outputbox output={output} />
    </>
  )
}

export default HTMLGenerator
