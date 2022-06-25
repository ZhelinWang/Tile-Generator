import './App.css'
import Navbar from './components/navbar/Navbar'
import HTMLGenerator from './components/pages/HTMLGenerator'
import { Route, Routes } from 'react-router-dom'

function App () {
  return (
    <div className='App'>
      <Navbar className='navbar' />

      <Routes>
        <Route path='/' element={<HTMLGenerator />} />
      </Routes>
      <br />
    </div>
  )
}

export default App
