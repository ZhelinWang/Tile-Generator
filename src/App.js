import './App.css'
import { useState } from 'react'
import Dropdown from './components/dropdown-menu/Dropdown'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Navbar from './components/navbar/Navbar'
import ButtonOutput from './components/ButtonOutput'
import InputFields from './components/textinput/InputFields'

function App () {
  const [selectedTile, setSelectedTile] = useState('Select Type of Deal ')
  const [selectedDeal, setSelectedDeal] = useState('Select Type of Tile ')

  return (
    <div className='App'>
      <Navbar className='navbar' />
      <br></br>
      <Dropdown
        style={{ zIndex: '10' }}
        options={['Large Tile', 'Small Tile', 'Banner']}
        selected={selectedDeal}
        setSelected={setSelectedDeal}
      />
      <div>
        <InputFields placeholder='Input Tile Title Here...'/>
      </div>
      <div>
        <input
          className='inputFields'
          placeholder='Input Tile Image URL Here...'
        />
      </div>
      <div>
        <input
          className='inputFields'
          placeholder='Input Tile Picklist URL Here...'
        />
      </div>
      <div>
        <input
          className='inputFields'
          placeholder='Input Tile *Excludes Here...'
        />
      </div>
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
      <div>
        <ButtonOutput />
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
      </div>
      <br />
    </div>
  )
}

export default App
