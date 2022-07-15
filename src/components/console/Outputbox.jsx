import * as React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

function Outputbox (props) {
  return (
    
    <Box
    
      style={{ width: 1200 }}
      sx={{

        position: 'relative',
        left: '20%',
      }}
    >
      <p>{["<!-- {tile starts here...} -->"]}</p>
      <br/>{props.output}
      <p><br/>{["<!-- {tile ends here...} -->"]}</p>
      
    </Box>

  )
}

export default Outputbox
