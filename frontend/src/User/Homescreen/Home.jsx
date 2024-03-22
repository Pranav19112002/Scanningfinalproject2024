import React from 'react'
import { Link } from 'react-router-dom'
import UserImage1 from '../../components/Images/userhome1.jpeg'
import "./Home.css"
import Footer from '../components/Footer'
import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography } from '@mui/material'
import HealingIcon from '@mui/icons-material/Healing';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const Home = () => {
  return (    
    <>
    <AppBar component="nav" sx={{ bgcolor: 'white' }}>
          <Toolbar>
          <Typography color="green" variant="h6" component="div">
    <HealingIcon />
    Scanning Centre
  </Typography>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            sx={{
              display: { xs: 'block', sm: 'none' },
              "& .MuiDrawer-paper": { boxSizing: "border-box", width: "240px" },
            }}
          >
          </Drawer>
        </Box>
        <Box>
          <Toolbar />
        </Box>
    <div className="home" style={{ backgroundImage :`url(${UserImage1})`}}>
    <div className="headerContainer">
    <h1>Scanning Website</h1>
    <p>Book Your Scan Now</p>
    <Link to={"/userlog"}>
      <button>
      BOOK NOW
      </button>
    </Link>
    </div>
    </div>
    <Footer/>
    </> 
    
  )
}

export default Home