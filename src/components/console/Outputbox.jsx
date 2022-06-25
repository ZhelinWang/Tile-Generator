import * as React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

function Outputbox (props) {
  return (
    <Box
      sx={{
        width: 1760,
        length: '50px',
        maxWidth: '100%',
        position: 'relative',
        top: '120px',
        left: '5rem',
      }}
    >
      {props.output}
      
    </Box>

  )
}

export default Outputbox
