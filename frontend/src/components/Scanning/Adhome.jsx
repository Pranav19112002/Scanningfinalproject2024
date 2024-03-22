import { Box, Grid, Paper } from '@mui/material'
import React from 'react'
import Adsidebar from '../Navbar/Adsidebar'
import Adnavbar from '../Navbar/Adnavbar'
import './Adhome.css';
import logcoverImage from '../Images/homecover4.jpeg';



function Adhome  () {
  return (
    <div className="form-containerr">
    <Adnavbar />
    <Box height={20}>
      <Box sx={{ display: 'flex' }}>
        <Adsidebar />
        <Grid className='grid-containerrr'>
          <Paper elevation={10} className='paperstyleee'  style={{ backgroundImage: `url(${logcoverImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <Box component="main" sx={{ flexGrow: 1, p: 3 , textAlign: 'center' }}>
             <br/><br/><br/><br/><br/> <br/><h1 className="form-headingg">WELCOME TO PRIVATE SCANNING CENTRE</h1>
              </Box>
              </Paper>
              </Grid>
              </Box>
              </Box>
              </div>
  )
}

export default Adhome