import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { IconButton } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#1976d2',
      },
    },
  });

function Navbar() {
  return (
    <ThemeProvider theme={darkTheme}>
    <AppBar position="static" color="primary" sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        bgcolor: 'background.paper',
        overflow: 'hidden',
        boxShadow: 1,
        fontWeight: 'bold',
        height: '180px',
      }}>
        <Toolbar>
        <img src='/images/logo.svg' alt='T7 Logo'>
      </img>
        </Toolbar>
    </AppBar>
    </ThemeProvider>
  );
}

export default Navbar;