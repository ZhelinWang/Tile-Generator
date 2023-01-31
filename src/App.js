import './App.css'
import Navbar from './components/navbar/Navbar'
import HTMLGenerator from './components/pages/HTMLGenerator'
import { Grid } from '@mui/material'
import { Route, Routes } from 'react-router-dom'

function App () {
  return (
    <div className='App'>
            <Navbar />
            <Routes>
              <Route path='/' element={<HTMLGenerator />} />
            </Routes>

    </div>
  )
}

export default App
