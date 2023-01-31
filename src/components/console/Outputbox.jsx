import * as React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

function Outputbox (props) {
  return (
    <>
    <div className='generateSpacingTop'></div>
    <Box
    >
      <p>{["<!-- {tile starts here...} -->"]}</p>
      <br/>{props.output}
      <p><br/>{["<!-- {tile ends here...} -->"]}</p>
      
    </Box>
    </>
  )
}

export default Outputbox
