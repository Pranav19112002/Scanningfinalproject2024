import React from 'react'
import Adnavbar from '../Navbar/Adnavbar'
import { Box, Grid, Paper } from '@mui/material'
import Adsidebar from '../Navbar/Adsidebar'
import Adsettab from './Adsettab'
import logcoverImage from '../Images/settingscover.jpg';

function Adminsettings ()  {
  return (
    <div className="form-container1">
      <Adnavbar />
      <Box height={70}>
        <Box sx={{ display: 'flex' }}>
          <Adsidebar />
          <Grid className='grid-container'>
            <Paper elevation={10} className='paperstyle'  style={{ backgroundImage: `url(${logcoverImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                  <Adsettab/>

                </Box>
                </Paper>
                </Grid>
                </Box>
                </Box>
                </div>
             
  )
}

export default Adminsettings