import logo from './logo.svg'
import './App.css'
import { useState } from 'react'
import Dropdown from './components/dropdown-menu/Dropdown'
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

function App () {
  const [selectedTile, setSelectedTile] = useState('Select Type of Tile ')
  const [selectedDeal, setSelectedDeal] = useState('Select Type of Deal ')

  return (
    <div className='App'>
      <img className='t7Logo' src={logo} alt="T7 Logo" />
      <Dropdown
        style={{ zIndex: '10' }}
        options={['Large Tile', 'Small Tile', 'Banner']}
        selected={selectedDeal}
        setSelected={setSelectedDeal}
      />
      <div>
        <input className='inputFields' placeholder='Input Tile Title Here...' />
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
        options={["Item X% Off", "Item X up to X% Off", "Buy X get X% Off", "Buy X get X Free/Half Price", "Buy X for X"]}
        selected={selectedTile}
        setSelected={setSelectedTile}
      />
      <div>
        <Button className="generateButton" color="error" variant="contained">Generate</Button>
        <FormControlLabel labelPlacement="start" className='checkboxClub' control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 30 } }}/>} label="Club?" />
        <FormControlLabel labelPlacement="start" className='checkboxClub' control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 30 } }}/>} label="Minified?" />
      </div>
    </div>
  )
}

export default App
