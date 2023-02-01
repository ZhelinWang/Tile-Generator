import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import './Navbar.css'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2'
    }
  }
})

function Navbar () {
  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar sx={{position: "relative"}}>
        <center>
          <a href='https://t7-webtile-generator.netlify.app'>
            <img
              className='image-container'
              src='/images/logo.svg'
              alt='T7 Logo'
            />
          </a>
        </center>
      </AppBar>
    </ThemeProvider>
  )
}

export default Navbar
